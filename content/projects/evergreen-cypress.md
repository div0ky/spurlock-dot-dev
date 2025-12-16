---
title: "Cypress - Mobile Field App"
description: "Production iOS/Android app for 200+ daily canvassers with real-time GPS tracking, door knock logging, and direct integration to call center queue. Includes compelling scaling story."
image: "/images/evergreen_cypress.png"
icon: "lucide:smartphone"
order: 7
parent: "evergreen"
tags:
  - Capacitor
  - Nuxt
  - Leaflet
  - GPS
  - iOS
  - Android
techStack:
  mobile:
    - Capacitor
    - Nuxt/Vue
    - iOS
    - Android
  mapping:
    - Leaflet
    - Real-time GPS
  backend:
    - PostgreSQL
    - WebSockets
    - Location batching
screenshots: []
---

## Overview

Cypress is a production mobile app (iOS and Android) used by **200+ canvassers daily** for door-to-door sales operations. Built with Capacitor wrapping a Nuxt/Vue application, it provides real-time GPS tracking, door knock logging, and seamless lead submission to the call center.

This isn't a toy app—it's production infrastructure handling real-time data streams from 200+ simultaneous mobile devices, with a compelling scaling story around batching and optimization.

## Key Features

### Real-time GPS Tracking

Every canvasser's location is tracked in real-time:

- **Live Map View**: Admin dashboard shows all 200+ canvassers simultaneously
- **Location Accuracy**: GPS with accuracy, altitude, and speed data
- **Historical Playback**: Review routes from previous days
- **Territory Visualization**: See coverage patterns and gaps

### Door Knock Logging

Every customer interaction is captured:

- **Geo-tagged Knocks**: Each knock logged with precise coordinates
- **Result Tracking**: Interested, not home, not interested, etc.
- **Product Interest**: What products did they show interest in?
- **Notes**: Free-form notes for follow-up context

### Field-to-Call-Center Pipeline

Leads flow directly from the field to telemarketers:

```
Canvasser knocks → Interested? → Submit lead → Call Center Queue
                                      ↓
                      TM calls within minutes
```

- **Instant Submission**: Leads appear in queue immediately
- **Rich Context**: All knock data travels with the lead
- **Priority Routing**: Hot leads get called first

### Offline Support

Works in areas with poor connectivity:

- **Local Storage**: Data cached when offline
- **Sync on Reconnect**: Automatic upload when connection returns
- **Conflict Resolution**: Handle simultaneous edits gracefully

## Admin Dashboard

Real-time visibility for managers:

### Live Map

- 200+ markers updating in real-time
- Color-coded by status (active, idle, offline)
- Click for canvasser details and recent activity

### Activity Feed

- Real-time stream of door knocks
- Filter by branch, team, or individual
- Instant alerts for hot leads

### Performance Leaderboards

- Daily/weekly/monthly rankings
- Doors knocked, leads generated, conversion rates
- Gamification elements for motivation

### Territory Management

- Assign territories visually on map
- See coverage density and gaps
- Plan routes for maximum efficiency

## Scaling Challenges Solved

With 200+ devices reporting location simultaneously, scaling was non-trivial:

### Location Data Batching

Individual GPS pings would overwhelm the server. Instead, the app batches location updates locally and sends them every 30 seconds or when the batch reaches 10 items—whichever comes first.

### Database Write Optimization

High-frequency location inserts required optimization:

- **Bulk Inserts**: Batch multiple locations per query
- **Indexed Tables**: Optimized for time-series queries
- **Partitioning**: Considered for historical data

### Map Rendering Efficiency

Rendering 200+ live markers requires care:

- **Marker Clustering**: Group nearby markers at zoom levels
- **Viewport Culling**: Only render visible markers
- **Update Throttling**: Limit re-renders to reasonable frequency

### Connection Management

WebSocket connections at scale:

- **Connection Pooling**: Efficient resource usage
- **Heartbeat Monitoring**: Detect and handle stale connections
- **Graceful Reconnection**: Handle network transitions

### Battery Optimization

GPS tracking drains batteries:

- **Adaptive Frequency**: More updates when moving, fewer when stationary
- **Background Modes**: Proper iOS/Android background handling
- **User Controls**: Let canvassers adjust tracking precision

## Technical Architecture

### Data Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  200+ Devices   │────▶│  Location API   │────▶│   PostgreSQL    │
│  (Capacitor)    │     │  (Batching)     │     │   (Archive)     │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Admin Dashboard│◀────│   WebSocket     │◀────│  Real-time      │
│  (Leaflet Map)  │     │   Server        │     │  Aggregation    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Database Schema

Location tracking uses composite indexes optimized for common query patterns: user + time for individual history, time-only for global queries, and user + time + coordinates for geo-spatial lookups.

## Portfolio Significance

Cypress demonstrates:

1. **Mobile Development**: Production apps on iOS and Android
2. **Real-time Systems**: 200+ concurrent data streams
3. **Scaling Challenges**: Batching, optimization, connection management
4. **Geo-spatial Features**: Maps, GPS, territory management
5. **Full-stack Thinking**: Device to dashboard, end-to-end

## Results

Cypress transformed field operations:

- **200+ daily active users** in production
- **Real-time visibility** into field team locations
- **Faster lead processing** with direct queue integration
- **Data-driven territory planning** with coverage analytics
