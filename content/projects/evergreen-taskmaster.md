---
title: "TaskMaster - Background Job Engine"
description: "Enterprise background job infrastructure processing tens of thousands of jobs daily. Built with Nitro.js, Redis, and BullMQ with dynamic module loading and plugin architecture."
image: "/images/evergreen_taskmaster.png"
icon: "lucide:cog"
order: 13
parent: "evergreen"
tags:
  - Nitro.js
  - BullMQ
  - Redis
  - Node.js
  - TypeScript
techStack:
  api:
    - Nitro.js
  queue:
    - BullMQ
    - Redis
  features:
    - Dynamic module loading
    - Hot reload
    - Plugin architecture
screenshots: []
---

## Overview

TaskMaster is the background job engine that powers async operations across the Evergreen ecosystem. Built as a separate service with Nitro.js as the API layer, Redis for queue storage, and BullMQ for job processing, it handles **tens of thousands of jobs daily** with dynamic module loading for extensibility.

**Note:** This is a separate service from the main Evergreen platform.

## Scale

TaskMaster processes enterprise-level workloads:

- **Tens of thousands** of jobs daily
- Multiple job types running in parallel
- Automatic retry with exponential backoff
- Dead letter queues for failed job analysis

## Architecture

### Core Stack

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   Evergreen     │────▶│     Redis       │◀────│   TaskMaster    │
│   (Producer)    │     │   (Queue)       │     │   (Consumer)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │ Dynamic Modules │
                                               │  • Email        │
                                               │  • Reports      │
                                               │  • Enrichment   │
                                               │  • Integrations │
                                               └─────────────────┘
```

### Components

| Component | Technology | Role |
|-----------|------------|------|
| API Layer | Nitro.js | HTTP endpoints for job submission |
| Queue Storage | Redis | Persistent job queue |
| Job Processing | BullMQ | Worker management, scheduling |
| Modules | TypeScript | Job handlers by type |

## Key Features

### Dynamic Module Loading

Add new job types at runtime without restart. Modules are discovered and loaded on startup, each registering its job type and handler with the queue processor.

### Hot Reload

Zero-downtime deployments:

- **Hot Swap**: Update job handlers without restart
- **Graceful Drain**: Finish current jobs before reload
- **Version Management**: Track which version handled each job

### Plugin Architecture

Extensible design with a standardized plugin interface. Each plugin declares its name, job types, handlers, and optional lifecycle hooks (onInit, onShutdown) for clean initialization and graceful shutdown.

### Job Prioritization

Control job execution order:

- **Priority Levels**: Critical, high, normal, low
- **Queue Separation**: Different queues for different SLAs
- **Fair Scheduling**: Prevent starvation

### Retry & Error Handling

Robust failure recovery with configurable attempts (default 5), exponential backoff (1s, 2s, 4s, 8s, 16s), and retention policies for completed and failed jobs.

### Dead Letter Queues

Analyze persistent failures:

- **DLQ Routing**: Failed jobs moved to DLQ
- **Manual Review**: Dashboard for failed job inspection
- **Replay**: Retry failed jobs after fix

## Job Types

TaskMaster handles diverse workloads:

### Email & Notifications

- Email sending with templating
- Push notifications
- SMS delivery
- In-app notifications

### Report Generation

- PDF report generation
- Excel exports
- Scheduled report delivery
- Large dataset processing

### Data Operations

- Data synchronization across services
- Bulk imports/exports
- Database maintenance tasks
- Cache warming

### Integrations

- Third-party webhook delivery
- Lead enrichment pipelines
- External API synchronization
- Partner data feeds

### Scheduled Workflows

- Cron-based scheduled jobs
- Recurring tasks
- Cleanup operations
- Health checks

### Retry Orchestration

- Failed operation retries
- Circuit breaker patterns
- Fallback handling

## Monitoring Dashboard

Real-time visibility into job processing:

### Metrics

- **Queue Depth**: Jobs waiting
- **Processing Rate**: Jobs/minute
- **Failure Rate**: Error percentage
- **Latency**: Time in queue

### Job Inspection

- View job payload and status
- Trace job history
- Manual retry/cancel
- Priority adjustment

## Portfolio Significance

TaskMaster demonstrates:

1. **Infrastructure Engineering**: Building reliable async systems
2. **Distributed Systems**: Queue-based architecture
3. **Plugin Architecture**: Extensible design patterns
4. **Scale Handling**: Tens of thousands of daily jobs
5. **Operational Excellence**: Monitoring, retry, DLQ

## Technical Decisions

### Why Nitro.js?

- Lightweight API framework
- Fast cold start
- TypeScript native
- Easy deployment

### Why BullMQ + Redis?

- Proven queue reliability
- Delayed jobs support
- Priority queues
- Built-in retry

### Why Dynamic Modules?

- Add job types without core changes
- Team independence
- Hot reload capability
- Clear separation of concerns

## Results

TaskMaster powers reliable async operations:

- **High Throughput**: Tens of thousands of daily jobs
- **High Reliability**: Automatic retry, DLQ handling
- **Easy Extension**: Add new job types without restart
- **Full Visibility**: Real-time monitoring dashboard
