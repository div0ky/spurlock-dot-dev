---
title: "Real-time SMS Platform"
description: "Two-way SMS messaging with Convex-powered real-time inbox, thread locking to prevent agent collision, full DNC compliance with audit trail, and hybrid storage architecture."
icon: "lucide:message-square"
order: 10
parent: "evergreen"
tags:
  - Twilio
  - Convex
  - WebSockets
  - PostgreSQL
techStack:
  messaging:
    - Twilio SMS
    - Two-way messaging
  real-time:
    - Convex
    - WebSockets
  storage:
    - PostgreSQL (archive)
    - Convex (hot state)
screenshots: []
---

## Overview

The SMS Platform enables two-way text messaging with leads and customers, powered by a hybrid Convex + PostgreSQL architecture. Real-time inbox updates, thread locking, and full DNC compliance make this a production-ready communication channel for the call center team.

## Key Features

### Real-time Inbox

Convex-powered message threads with instant updates:

- **Instant Message Delivery**: New messages appear immediately
- **Read Receipts**: Track which agents have seen messages
- **Typing Indicators**: See when someone is responding
- **Thread Organization**: Messages grouped by contact/conversation

### Thread Locking

Prevents multiple agents from responding to the same conversation:

- **Visual Lock Indicator**: Shows who's working on a thread
- **Automatic Release**: Lock released when agent closes thread
- **Stale Lock Cleanup**: Handles abandoned locks

### Canned Responses

Pre-built message templates for common scenarios:

- **Quick Selection**: Pick from categorized templates
- **Variable Substitution**: Personalize with contact name, etc.
- **Team Shared**: Consistent messaging across agents
- **Personal Templates**: Agents can create their own

### Grammar Suggestions

AI-powered writing assistance (via Automagic):

- **Real-time Suggestions**: As agents type
- **Professional Tone**: Ensure brand consistency
- **Error Correction**: Catch typos before sending

## DNC Compliance

Full Do Not Call/Text compliance with audit trail. Each contact tracks separate DNC flags for voice and SMS, with timestamps and source attribution (who/what set the flag and why).

### Compliance Features

- **STOP Keyword Handling**: Automatic DNC on "STOP"
- **Audit Trail**: Full history of who set DNC and when
- **List Scrubbing**: Block sending to DNC contacts
- **Compliance Dashboard**: Monitor DNC rates

## Hybrid Architecture

### Why Convex + PostgreSQL?

Different data has different needs:

| Data Type | Storage | Why |
|-----------|---------|-----|
| Active threads | Convex | Sub-second reactivity needed |
| Message archive | PostgreSQL | Permanent storage, complex queries |
| Lock state | Convex | Real-time sync across agents |
| DNC flags | PostgreSQL | Audit trail, compliance reporting |

### Data Flow

```
Inbound SMS → Twilio Webhook → PostgreSQL (archive)
                                    ↓
                              Convex (hydrate)
                                    ↓
                            Real-time UI update
```

### Hydration Strategy

When a thread is opened:

1. Check if messages exist in Convex
2. If not, hydrate last 10 from PostgreSQL
3. New messages go to both stores
4. On thread close, Convex data can be pruned

## Portfolio Significance

The SMS Platform demonstrates:

1. **Hybrid Architecture**: Choosing the right storage for each use case
2. **Real-time Systems**: Convex for instant reactivity
3. **Concurrency Handling**: Thread locking prevents collisions
4. **Compliance Engineering**: Full audit trails for regulations
5. **Integration Skills**: Twilio webhooks, multi-system sync

## Results

The platform enables efficient text communication:

- **Real-time Collaboration**: Multiple agents, no collisions
- **Compliance Confidence**: Full DNC audit trail
- **Faster Response**: Templates and AI suggestions
- **Unified History**: All messages in one timeline
