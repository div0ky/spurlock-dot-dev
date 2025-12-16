---
title: "Evergreen"
description: "Enterprise platform powering all operations across 5 branches at Midtown Home Improvements. Prototyped in 2 weeks, evolved over 4+ years into a comprehensive system handling CRM, Call Center, BI, Client Portal, and more."
image: "/images/evergreen_featured.png"
icon: "lucide:layout-dashboard"
order: 1
featured: true
tags:
  - Nuxt
  - Nest.js
  - TypeScript
  - PostgreSQL
  - Redis
  - Docker
  - Twilio
  - Prisma
stats:
  lines of code: "650K+"
  years: "4+"
  data models: "77+"
techStack:
  frontend:
    - Nuxt
    - TypeScript
    - Tailwind CSS
    - Pinia
  backend:
    - Nest.js
    - PostgreSQL
    - Redis
    - BullMQ
    - Prisma ORM
    - WebSockets
  infrastructure:
    - Docker
    - Read Replicas
    - Async Workers
    - Bun
  integrations:
    - Twilio
    - External Lead Sources
  testing:
    - Jest
    - Cypress
screenshots: ["/images/evergreen_featured.png", "/images/evergreen_featured.png"]
---

## Overview

Evergreen is the comprehensive business platform I invented and built from the ground up at Midtown Home Improvements. I prototyped it in two weeks as a basic CRM, and over the last 5 years it has evolved into a full-scale enterprise system that powers every aspect of the business across all 5 branches.

## The Problem

When I joined Midtown, the company was struggling with:

- **Fragmented systems**: Different tools for sales, scheduling, customer management, and billing
- **Data silos**: No single source of truth for customer information
- **Manual processes**: Staff spending hours on repetitive tasks that could be automated
- **Limited visibility**: Leadership had no real-time insight into business performance

## The Solution

Rather than cobbling together off-the-shelf solutions, I designed and built Evergreen—a unified platform that serves as the single source of truth for the entire organization.

### Core Modules

#### CRM & Contact Management

The heart of Evergreen, managing the entire customer lifecycle:

- **Lead Aggregator**: Integrated with external lead sources for automatic ingestion
- **Contact Management**: Complete customer history in one place
- **SMS Messaging**: Direct communication with leads and customers
- **Pipeline Tracking**: Visual kanban boards for sales progression

```typescript
// Example: Lead scoring algorithm
function calculateLeadScore(lead: Lead): number {
  let score = 0
  
  // Source quality
  score += getSourceWeight(lead.source)
  
  // Engagement signals
  if (lead.openedEmail) score += 10
  if (lead.visitedPricing) score += 20
  if (lead.requestedCallback) score += 30
  
  // Demographics
  score += getZipCodeScore(lead.zipCode)
  
  return Math.min(score, 100)
}
```

#### Business Intelligence Dashboard

Real-time analytics giving leadership instant visibility:

- **Live KPIs**: Sales metrics, conversion rates, revenue tracking
- **Analytics & Reporting**: Comprehensive reporting across all operations
- **Trend Analysis**: Historical comparisons and forecasting
- **Team Performance**: Individual and team scorecards

#### Call Center Platform

Full Twilio-powered communication hub used by telemarketers daily:

- **VoIP Integration**: Twilio-powered calling directly in browser
- **Call Recording**: Automatic recording for quality assurance
- **Real-time Monitoring**: Live dashboards for supervisors
- **Outbound Campaigns**: Structured calling campaigns for sales teams

#### Client Portal

Self-service access for customers:

- **Production Job Tracking**: Real-time project status updates
- **Document Center**: File uploads, contracts, and photos
- **Service Tickets**: Customer support request management
- **Communication**: Direct messaging with project team

#### Additional Modules

- **Helpdesk Tickets**: Internal IT and support ticket system
- **Mobile App**: Built with Capacitor for field teams
- **File Uploads**: Centralized document management
- **Production Tracking**: End-to-end job lifecycle management

## Architecture Decisions

### Why a Custom Solution?

Building from scratch allowed us to:

1. **Perfect fit**: Every feature designed for our specific workflows
2. **Deep integration**: Seamless data flow between all modules
3. **Rapid iteration**: Deploy improvements weekly, not quarterly
4. **Cost control**: No per-seat licensing or feature limitations

### Technical Stack Choices

**Nuxt + Nest.js**: Nuxt on the frontend for excellent DX and SSR capabilities. Nest.js on the backend for structured, scalable API development.

**PostgreSQL + Read Replicas**: Rock-solid relational database with read replicas for scaling query-heavy operations.

**Redis + BullMQ**: Powers real-time features, caching, and background job processing for async operations.

**Prisma ORM**: Type-safe database access with excellent migration tooling.

**WebSockets**: Real-time updates for dashboards, call center, and collaborative features.

**Docker + Bun**: Containerized deployments with Bun for improved performance.

### Architecture Patterns

The system has evolved organically based on needs:

- **Event Sourcing**: Some parts use event-driven patterns for audit trails and complex workflows
- **Monolithic Core**: The main application is a well-structured monolith for simplicity
- **Microservices**: Specific high-scale features broken into separate services
- **Queue-based Processing**: BullMQ handles background jobs, email sending, and async operations

## Impact

Since launching Evergreen:

- **40% reduction** in lead response time
- **25% increase** in conversion rates
- **60% less time** spent on administrative tasks
- **Real-time visibility** for leadership decision-making

## Lessons Learned

Building Evergreen taught me invaluable lessons about enterprise software:

1. **Start with workflows, not features**: Understanding how people actually work is more important than building what they say they want.

2. **Invest in foundations**: The time spent on a solid data model and clean architecture pays dividends every day.

3. **Iterate with users**: Weekly releases with real user feedback beats quarterly big-bang deployments.

4. **Documentation is a feature**: Good docs reduce support burden and improve adoption.

## What's Next

Evergreen continues to evolve with new modules and improvements planned:

- AI-powered lead scoring using historical conversion data
- Enhanced mobile experience for field teams
- Advanced reporting with natural language queries
- Deeper QuickBooks integration for financial workflows

