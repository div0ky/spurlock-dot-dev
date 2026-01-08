---
title: "From Firehose to Flow: Scaling Real-time Data with Backpressure-Aware Batching"
description: "How we evolved from naive real-time writes to a Redis-backed batch processing system when 200+ mobile devices nearly melted our database."
date: "2023-12-19"
tags:
  - Architecture
  - Scaling
  - Real-time
  - Batching
  - Redis
  - PostgreSQL
readingTime: 10
---

## The Dream: Real-time Everything

When we built Cypress-our mobile field app for 200+ canvassers-the vision was beautifully simple: every door knock, every GPS ping, every lead submission would flow into the system in real-time. Managers would watch a live map as their team fanned out across neighborhoods. Hot leads would appear in the call center queue within seconds of a canvasser marking someone as interested.

Real-time is intoxicating. It feels modern. It impresses stakeholders. And it works... until it doesn't.

## The Naive Implementation

Our first implementation was the obvious one:

```typescript
// Every GPS update from the mobile app
async function handleLocationUpdate(location: LocationPayload) {
  await prisma.location.create({
    data: {
      userId: location.userId,
      lat: location.lat,
      lng: location.lng,
      accuracy: location.accuracy,
      speed: location.speed,
      // ... more fields
    }
  });
  
  // Broadcast to admin dashboard
  await websocket.broadcast('location:update', location);
}
```

Simple. Elegant. Every location update from every device immediately persists to PostgreSQL and broadcasts to connected admin dashboards.

With 10 users during development, this was instant and magical.

With 50 users during the soft launch, it was "a bit slow sometimes."

With 200+ users during peak canvassing hours... we had a problem.

## The Breaking Point

Here's the math that broke us:

- **200+ active devices** during peak hours (9 AM - 6 PM)
- **GPS updates every 5 seconds** when moving (battery optimization)
- That's **~2,400 database writes per minute**
- Plus **door knock events** (~500/hour across all canvassers)
- Plus **lead submissions** (~50/hour)
- Plus **activity logging** for every significant action

Our PostgreSQL connection pool was thrashing. The database server's write-ahead log couldn't keep up. API response times climbed from 50ms to 500ms to timeouts. The admin dashboard-which polled for updates-started showing stale data because queries were queuing behind the write backlog.

The symptoms cascaded:

1. **Write latency increased** → Mobile app HTTP requests timed out
2. **Timeouts triggered retries** → Even more writes flooding the system
3. **Connection pool exhausted** → Read queries (dashboard, CRM) started failing
4. **Users complained** → "The map isn't updating" / "I can't log my knock"

We were experiencing **backpressure**-the system couldn't drain data as fast as it was being produced-and we had no mechanism to handle it.

## The Realization: Writes Have Different Urgencies

Not all writes are created equal. When a canvasser submits a hot lead, that data needs to hit the database *now*-a telemarketer is waiting to call them. But GPS location updates? Activity logs? Those can wait a few seconds (or even minutes) without anyone noticing.

We categorized our writes:

| Write Type | Urgency | Volume | Tolerance for Delay |
|------------|---------|--------|---------------------|
| Lead submission | Critical | Low (~50/hr) | None - immediate |
| Door knock | High | Medium (~500/hr) | Seconds |
| Location update | Low | Very High (~2400/min) | Minutes |
| Activity log | Low | High | Minutes |

The insight: **80% of our write volume could tolerate batching, but we were treating every write as if it were critical.**

## Solution 1: Client-Side Batching

The first fix happened on the mobile app itself. Instead of firing an HTTP request for every GPS tick, we buffered locally:

```typescript
// Simplified concept - actual implementation in Capacitor
class LocationBuffer {
  private buffer: LocationPayload[] = [];
  private readonly MAX_SIZE = 10;
  private readonly MAX_AGE_MS = 30_000; // 30 seconds
  
  add(location: LocationPayload) {
    this.buffer.push(location);
    
    if (this.buffer.length >= this.MAX_SIZE || this.isBufferStale()) {
      this.flush();
    }
  }
  
  private async flush() {
    const batch = [...this.buffer];
    this.buffer = [];
    
    // One HTTP request with 10 locations instead of 10 requests
    await api.post('/locations/batch', { locations: batch });
  }
}
```

This alone cut our location-related API requests by **90%**. Instead of 2,400 requests/minute, we were down to ~240 batched requests/minute.

But we still had a problem: those 240 requests still needed to write to the database, and the server was synchronously inserting each batch. We'd reduced the HTTP overhead, but the database was still the bottleneck.

## Solution 2: Redis as a Write Buffer

The breakthrough was decoupling the "accept the data" step from the "persist the data" step. Redis became our shock absorber:

```typescript
// Server endpoint - just accepts and queues
async function handleLocationBatch(locations: LocationPayload[]) {
  // Validate
  const parsed = LocationBatchSchema.safeParse(locations);
  if (!parsed.success) throw createError({ statusCode: 400 });
  
  // Queue to Redis (microseconds, not milliseconds)
  await redis.rpush('location_queue', ...locations.map(l => JSON.stringify(l)));
  
  // Return immediately - data is safe in Redis
  return { queued: locations.length };
}
```

The API response went from "wait for database write" to "wait for Redis queue push." Response times dropped from hundreds of milliseconds back to single digits. The mobile app was happy again.

But the data was sitting in Redis, not PostgreSQL. We needed a drain.

## Solution 3: The Batch Supervisor Pattern

We built a scheduled task (using Trigger.dev) that wakes up periodically and drains the queue in controlled batches:

```typescript
const BATCH_SIZE = 100;

export const ActivityBatchSupervisor = schedules.task({
  id: "batch_supervisor:activity",
  // Runs every minute
  run: async () => {
    let enqueued_count = await redis.llen('enqueued_activity');
    let batch_count = 0;
    
    // Drain the queue in chunks
    while (enqueued_count > 0) {
      const adjusted_size = Math.min(BATCH_SIZE, enqueued_count);
      const batch = await redis.lpop('enqueued_activity', adjusted_size);
      if (!batch) break;
      
      // Parse and trigger the actual database write
      const parsed = batch.map(item => JSON.parse(item));
      await batchCreateActivityTask.trigger(parsed);
      
      batch_count++;
      enqueued_count = await redis.llen('enqueued_activity');
    }
    
    return { batches: batch_count };
  },
});
```

The batch worker then does the actual database insert using `createMany`:

```typescript
async function batchCreateActivity(payload: ActivityPayload[]) {
  const result = await prisma.activity.createMany({
    data: payload.map(p => ({
      contactId: p.contactId,
      type: p.type,
      description: p.description,
      // ... map all fields
    })),
  });
  
  logger.log(`Created ${result.count} activities`);
  return result;
}
```

One `INSERT INTO ... VALUES (...), (...), (...)` with 100 rows is dramatically more efficient than 100 individual `INSERT` statements.

## The Hybrid Approach: Eager Flush on Threshold

Pure scheduled batching introduced a new problem: if activity volume was low, data might sit in Redis for a full minute before persisting. For some use cases (like activity logs that appear in a contact timeline), users noticed the delay.

We added an eager flush mechanism:

```typescript
export const enqueueActivity = async (payload: ActivityPayload) => {
  const parsed = ActivitySchema.safeParse(payload);
  if (!parsed.success) return "Invalid payload";
  
  // Push to Redis queue
  const queue_length = await redis.rpush('enqueued_activity', JSON.stringify(payload));
  
  // If queue is getting large, flush immediately (don't wait for scheduler)
  if (queue_length > 5) {
    const queued_items = await redis.lrange('enqueued_activity', 0, -1);
    const parsed_items = queued_items.map(item => JSON.parse(item));
    
    await batchCreateActivityTask.trigger(parsed_items);
    await redis.del('enqueued_activity');
  }
  
  return queue_length;
};
```

Now we get the best of both worlds:
- **Low volume**: Data waits for the scheduled batch (efficient)
- **High volume**: Queue flushes eagerly when it hits the threshold (responsive)

## The Architecture Evolved

Our final data flow for high-volume, low-urgency writes:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  200+ Devices   │────▶│   API Endpoint  │────▶│     Redis       │
│  (Capacitor)    │     │   (Validate +   │     │   (Queue)       │
│  Local Buffer   │     │    Enqueue)     │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                              ┌──────────────────────────┤
                              │                         │
                              ▼                         ▼
                    ┌─────────────────┐     ┌─────────────────┐
                    │  Batch Worker   │     │  Eager Flush    │
                    │  (Scheduled)    │     │  (Threshold)    │
                    └─────────────────┘     └─────────────────┘
                              │                         │
                              └──────────┬──────────────┘
                                         ▼
                              ┌─────────────────┐
                              │   PostgreSQL    │
                              │  (Bulk Insert)  │
                              └─────────────────┘
```

## What We Learned

### 1. Backpressure is Inevitable at Scale

Any system that accepts data faster than it can process will eventually fail. The question isn't *if* you'll hit backpressure, but *when* and *whether you designed for it*.

### 2. Decouple Acceptance from Processing

The moment we stopped treating "received the data" and "persisted the data" as atomic, everything got easier. Redis as a buffer gave us durability (data won't be lost) without blocking (callers don't wait for slow operations).

### 3. Not All Data is Equally Urgent

The instinct to make everything real-time is strong, but it's often wrong. Ask: "What happens if this data is 30 seconds old?" If the answer is "nothing bad," that data can be batched.

### 4. Bulk Operations Are Dramatically More Efficient

A single `INSERT ... VALUES (row1), (row2), ... (row100)` is 10-50x more efficient than 100 individual inserts. The database's transaction overhead, WAL writes, and index updates amortize across the batch.

### 5. Monitor Your Queues

Redis queues are invisible unless you look. We added metrics for queue depth and processing lag. If the queue is growing faster than it's draining, you know before users do.

## The Results

After implementing the batching system:

- **API latency** dropped from 200-500ms back to <50ms
- **Database write load** reduced by ~85%
- **Connection pool** stopped thrashing (utilization from 95% to 40%)
- **Admin dashboard** became responsive again
- **Zero data loss** during high-volume periods

The system now gracefully handles traffic spikes. During a company-wide canvassing push (300+ active users), the Redis queue depth increased temporarily, but everything processed smoothly within minutes. Before batching, that event would have caused cascading failures.

## When to Use This Pattern

This pattern works well when:

- **High write volume** that exceeds your database's comfortable throughput
- **Writes can tolerate latency** (seconds to minutes of delay is acceptable)
- **Data is append-only** (logs, events, tracking data)
- **You have Redis** (or similar) available for queuing

It's *not* appropriate when:

- **Immediate consistency is required** (financial transactions, inventory)
- **Reads must see writes immediately** (user-facing mutations)
- **Volume is low enough** that batching adds complexity without benefit

## Final Thoughts

The seductive trap of real-time systems is thinking that "real-time" means "synchronous database writes on every event." It doesn't. Real-time means users see fresh data-but "fresh" can mean "a few seconds old" for many use cases.

Our canvassers don't notice that their GPS coordinates take 30 seconds to appear on the admin map. They do notice when the app hangs because the server is overwhelmed. By embracing batching and backpressure handling, we built a system that *feels* real-time while being robust enough to handle 200+ concurrent users without breaking a sweat.

Sometimes the most real-time solution is the one that's smart enough to wait.
