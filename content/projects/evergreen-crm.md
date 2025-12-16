---
title: "Evergreen CRM Module"
description: "Comprehensive customer relationship management with lead tracking, pipeline management, and automated workflows. The foundation of the Evergreen platform."
image: "/images/evergreen_crm.png"
icon: "lucide:users"
order: 2
tags:
  - Nuxt
  - Prisma
  - PostgreSQL
  - BullMQ
  - WebSockets
techStack:
  frontend:
    - Vue 3 Composition API
    - Pinia State Management
    - VueUse
    - Tailwind CSS
  backend:
    - Node.js
    - Express
    - PostgreSQL
    - Prisma ORM
screenshots: []
---

## Overview

The CRM module serves as the foundation of Evergreen, managing the complete customer lifecycle from initial lead capture through project completion and beyond.

## Key Features

### Lead Management

- **Multi-source capture**: Web forms, phone calls, referrals, and third-party lead providers
- **Intelligent routing**: Automatic assignment based on territory, workload, and rep performance
- **Lead scoring**: Algorithmic prioritization based on likelihood to convert
- **Duplicate detection**: Automatic identification and merging of duplicate contacts

### Pipeline Management

Visual kanban-style pipeline with:

- Drag-and-drop stage progression
- Customizable pipeline stages per product line
- Automated stage transitions based on events
- Stale lead alerts and escalations

### Activity Tracking

Complete history of all customer interactions:

- Calls, emails, and meetings logged automatically
- Notes and follow-up tasks
- Document uploads and associations
- Timeline view of all activity

### Automation Engine

Workflow automation that saves hours daily:

```typescript
// Example workflow: New lead follow-up sequence
const newLeadWorkflow = createWorkflow({
  trigger: 'lead.created',
  steps: [
    { action: 'sendEmail', template: 'welcome', delay: 0 },
    { action: 'createTask', type: 'call', delay: '1h' },
    { action: 'sendSms', template: 'intro', delay: '4h' },
    { action: 'createTask', type: 'follow-up', delay: '24h' },
  ],
  conditions: {
    leadScore: { gte: 50 },
    source: { notIn: ['existing-customer'] },
  },
})
```

## Technical Implementation

### State Management

Using Pinia for reactive state management with persistence:

```typescript
export const useLeadsStore = defineStore('leads', () => {
  const leads = ref<Lead[]>([])
  const isLoading = ref(false)
  
  const leadsByStage = computed(() => {
    return leads.value.reduce((acc, lead) => {
      const stage = lead.pipelineStage
      acc[stage] = acc[stage] || []
      acc[stage].push(lead)
      return acc
    }, {} as Record<string, Lead[]>)
  })

  async function fetchLeads(filters: LeadFilters) {
    isLoading.value = true
    try {
      leads.value = await api.leads.list(filters)
    } finally {
      isLoading.value = false
    }
  }

  return { leads, leadsByStage, isLoading, fetchLeads }
})
```

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

