---
title: "Evergreen"
description: "Enterprise platform powering all operations across 5 branches at Midtown Home Improvements. Prototyped in 2 weeks, evolved over 4+ years into a comprehensive ecosystem handling CRM, Call Center, BI, Client Portal, custom ML, mobile apps, and more."
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
  - Convex
  - BullMQ
  - Python
  - Capacitor
stats:
  lines of code: "650K+"
  years: "4+"
  data models: "77"
  daily users: "200+"
  services: "8+"
techStack:
  frontend:
    - Nuxt 4
    - TypeScript
    - Tailwind CSS
    - Pinia
    - Capacitor (iOS/Android)
  backend:
    - Nest.js (microservices)
    - Nitro.js (TaskMaster)
    - PostgreSQL
    - Redis
    - Prisma ORM
  real-time:
    - Convex
    - Ably
    - WebSockets
  ai:
    - Python/scikit-learn (Oracle ML)
    - Google Gemini
    - OpenAI
  background:
    - BullMQ
    - Trigger.dev
  infrastructure:
    - Docker
    - Read Replicas
    - Bun
  integrations:
    - Twilio
    - Algolia
    - Linear
    - SmartyStreets
    - PostHog
screenshots: ["/images/evergreen_featured.png", "/images/evergreen_featured.png"]
---

## Overview

Evergreen is the comprehensive business platform I invented and built from the ground up at Midtown Home Improvements. I prototyped it in two weeks as a basic CRM, and over the last 4+ years it has evolved into a full-scale enterprise ecosystem—650K+ lines of code across 8+ interconnected services—that powers every aspect of the business across all 5 branches.

The ecosystem includes the core Nuxt application, a real-time call center platform (Twilio + Convex) used daily by telemarketers, Nest.js microservice APIs, a custom ML prediction system (Oracle), a mobile field app with 200+ daily users (Cypress), a learning management system, and background job infrastructure processing tens of thousands of jobs daily.

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
- **Oracle ML Scoring**: Custom model predicts sale probability and optimal rep assignment
- **Property Enrichment**: Automatic enrichment with geo, property, and market data

#### Call Center Platform

Real-time communication hub used daily by the telemarketing team:

- **Browser-based Softphone**: Twilio VoIP calling directly in browser
- **Convex Real-time State**: 9 tables for agent status, call queues, SMS threads
- **Two-way SMS**: Real-time inbox with thread locking and DNC compliance
- **AI Call Grading**: Gemini-powered analysis of call recordings
- **Inbound/Outbound**: Handle incoming calls and structured outbound campaigns

#### Business Intelligence Dashboard

Real-time analytics giving leadership instant visibility:

- **Live KPIs**: Sales metrics, conversion rates, revenue tracking
- **Department Scorecards**: Branch, production, service, telemarketing, canvass
- **Trend Analysis**: Historical comparisons and forecasting
- **CMO Dashboard**: Separate executive analytics service

#### Client Portal

Self-service access for customers:

- **Production Job Tracking**: Real-time project status updates
- **Document Center**: File uploads, contracts, and photos
- **Service Tickets**: Customer support request management
- **Communication**: Direct messaging with project team

#### Oracle - Custom ML Sales Prediction

A custom-trained machine learning model that predicts sale outcomes:

- **Sales Prediction**: Predicts likelihood of closing based on lead characteristics
- **Rep Matching**: Ranks which sales rep has the best chance of closing each lead
- **Lift Calculation**: Measures improvement over baseline random assignment
- **Data Sources**: Trained on historical appointments, geolocation, soft credit, and market data

#### Cypress - Mobile Field App

Production mobile app (iOS/Android) with 200+ daily active users:

- **Real-time GPS Tracking**: Admin dashboard shows 200+ canvassers live on map
- **Door Knock Logging**: Every knock tracked with geo coordinates
- **Field-to-Call-Center Pipeline**: Leads submitted from field go directly to TM queue
- **Scaling Challenges Solved**: Batching, optimization for high-frequency location updates

#### Additional Modules

- **AI/Automagic**: Call audio grading, transcription, grammar suggestions via Gemini/OpenAI
- **TaskMaster**: Background job engine (Nitro.js/BullMQ) processing tens of thousands of jobs daily
- **LMS**: Learning management system for employee onboarding and training
- **SMS Platform**: Real-time two-way SMS with Convex-powered inbox and DNC compliance
- **Helpdesk**: Internal ticket system with Linear integration
- **Production Tracking**: End-to-end job lifecycle with installer portal

## Architecture Decisions

### Why a Custom Solution?

Building from scratch allowed us to:

1. **Perfect fit**: Every feature designed for our specific workflows
2. **Deep integration**: Seamless data flow between all modules
3. **Rapid iteration**: Deploy improvements weekly, not quarterly
4. **Cost control**: No per-seat licensing or feature limitations

### Technical Stack Choices

**Nuxt 4 + Nest.js Microservices**: Nuxt on the frontend for excellent DX and SSR capabilities. Nest.js powers separate microservice APIs for specific domains.

**PostgreSQL + Read Replicas**: Rock-solid relational database with 77 models, 200+ indexes, and read replicas for scaling query-heavy operations.

**Convex + Ably**: Real-time state management for the call center with 9 Convex tables handling agent status, call queues, and SMS threads.

**Redis + BullMQ**: Powers TaskMaster, processing tens of thousands of background jobs daily with dynamic module loading.

**Python + scikit-learn**: Oracle ML system for sales prediction, trained on proprietary company data.

**Capacitor**: Cypress mobile app delivering iOS/Android experience for 200+ daily field users.

**Prisma ORM**: Type-safe database access with excellent migration tooling.

### Architecture Patterns

The ecosystem has evolved based on real-world needs:

- **Hybrid Real-time**: Convex for hot ephemeral state, Postgres for permanent storage
- **Monolithic Core**: Main Nuxt application is a well-structured monolith for simplicity
- **Microservices**: TaskMaster, Oracle, LMS, and CMO Dashboard as separate services
- **Event-driven**: Domain-organized event handlers for complex workflows
- **Queue-based Processing**: BullMQ with dynamic module loading for extensibility

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

Evergreen continues to evolve:

- Expanding Oracle ML with additional data sources and prediction models
- Enhanced AI-powered call quality scoring and coaching
- Deeper real-time analytics with natural language queries
- Continued scaling optimizations for growing user base

