---
title: "Evergreen CRM Module"
description: "Comprehensive customer relationship management with lead tracking, pipeline management, Oracle ML scoring, property enrichment, and automated workflows. The foundation of the Evergreen platform."
image: "/images/evergreen_crm.png"
icon: "lucide:users"
order: 2
parent: "evergreen"
tags:
  - Nuxt
  - Prisma
  - PostgreSQL
  - BullMQ
  - WebSockets
  - SmartyStreets
  - Python
techStack:
  frontend:
    - Vue 3 Composition API
    - Pinia State Management
    - VueUse
    - Tailwind CSS
  backend:
    - Nuxt Server Routes
    - PostgreSQL
    - Prisma ORM
  integrations:
    - SmartyStreets (address validation)
    - Oracle ML (lead scoring)
    - Twilio (sticky numbers)
screenshots: []
---

## Overview

The CRM module serves as the foundation of Evergreen, managing the complete customer lifecycle from initial lead capture through project completion and beyond.

## Key Features

### Lead Management

- **Multi-source capture**: Web forms, phone calls, referrals, and third-party lead providers
- **Intelligent routing**: Automatic assignment based on territory, workload, and rep performance
- **Oracle ML Scoring**: Custom ML model predicts sale likelihood and optimal rep assignment
- **Duplicate detection**: Automatic identification and merging of duplicate contacts

### Oracle ML Integration

The CRM integrates with Oracle, our custom-trained ML model:

- **Sale Prediction**: Probability score for each lead based on historical patterns
- **Rep Matching**: Ranks which sales rep has the best chance of closing
- **Lift Calculation**: Measures improvement over baseline random assignment
- **Data Sources**: Geolocation, soft credit, market data, historical outcomes

### Property Data Enrichment

Automatic enrichment of contact records with property intelligence:

- **Geodata**: Lat/lng coordinates, neighborhood context, proximity to branches
- **Property Data**: Home characteristics, estimated value, ownership info
- **Market Context**: Local trends, seasonality factors

### Address Validation

SmartyStreets integration for address quality:

- **Real-time Validation**: Verify addresses as they're entered
- **Standardization**: Normalize to USPS format
- **Geocoding**: Automatic lat/lng assignment for mapping
- **Deliverability**: Flag undeliverable addresses

### Pipeline Management

Visual kanban-style pipeline with:

- Drag-and-drop stage progression
- Customizable pipeline stages per product line
- Automated stage transitions based on events
- Stale lead alerts and escalations

### Contact Bucketing System

Intelligent call queue management for telemarketing:

- **Buckets**: Configurable groups that control call priority and timing
- **Call Rules**: Per-bucket rules for delay periods (days/hours/minutes)
- **Weighted Priority**: Some buckets get more attention than others
- **Automatic Transitions**: Contacts move between buckets based on call results
- **Attempt Tracking**: Track total calls and bucket-specific attempts

### Sticky Number Assignment

Consistent caller ID for better answer rates:

- **Sticky Numbers**: Each contact gets assigned a consistent Twilio number
- **Answer Rate Optimization**: Customers see same number = higher pickup rate
- **Audit Trail**: Track when/how sticky number was assigned (AMD, outbound call, SMS)
- **DNC Compliance**: Full audit for Do Not Call/Text with source tracking

### Activity Tracking

Complete history of all customer interactions:

- Calls, emails, and meetings logged automatically
- Notes and follow-up tasks
- Document uploads and associations
- Timeline view of all activity

### Automation Engine

Event-driven workflow automation via Trigger.dev handles multi-step follow-up sequences, conditional logic based on lead scores and sources, and scheduled task creation—saving hours of manual work daily.

## Technical Implementation

### State Management

Pinia stores manage reactive client-side state with computed views (leads grouped by pipeline stage), optimistic updates, and persistence across sessions.

### Real-time Updates

WebSocket integration for live collaboration:

- Instant updates when leads are modified
- Presence indicators showing who's viewing a record
- Live notifications for assignments and mentions

## Results

The CRM module has transformed how the sales team operates:

- **50% faster** lead response times
- **30% improvement** in lead-to-appointment conversion
- **Zero lost leads** due to follow-up failures
- **Complete visibility** into team performance

