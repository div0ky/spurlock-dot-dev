---
title: "Canvassing Analytics"
description: "Geo-spatial analytics backend powering the Cypress mobile app. Door-to-door tracking, heat maps, location data, division scorecards, and points-based gamification."
image: "/images/evergreen_canvass.png"
icon: "lucide:map-pin"
order: 9
parent: "evergreen"
tags:
  - PostgreSQL
  - Leaflet
  - GIN Indexes
  - Geo-spatial
techStack:
  database:
    - PostgreSQL
    - GIN indexes
    - Geo-spatial indexes
  visualization:
    - Leaflet
    - Heat maps
  frontend:
    - Nuxt
    - Vue
screenshots: []
---

## Overview

The Canvassing Analytics module provides the data layer and reporting for the Cypress mobile app. It handles geo-spatial data storage, efficient querying, heat map generation, and gamification scoring for the 200+ canvassers in the field.

## Data Model

### CanvassDoor

Represents a physical door that can be knocked:

- **Location**: Lat/lng coordinates, address components
- **Most Recent Result**: Last knock outcome
- **Product Interest**: Array of products customer showed interest in
- **Branch/Secondary**: Territory assignment

### CanvassKnock

Individual knock events on doors:

- **Result**: Interested, not home, not interested, etc.
- **Product Interest**: What products mentioned
- **Notes**: Free-form canvasser notes
- **User/Time**: Who knocked and when

### Location

Real-time GPS tracking data:

- **Coordinates**: Lat/lng with accuracy metrics
- **Device Data**: Altitude, bearing, speed
- **Timestamp**: When location was recorded

## Database Optimization

### GIN Indexes for Array Filtering

Product interest is stored as PostgreSQL arrays with GIN indexes for fast overlap queries (e.g., "find all doors interested in Windows or Siding").

### Geo-spatial Indexes

Location queries use composite indexes for user + time + coordinates, plus bounding box indexes for map viewport queries.

### Query Optimization

6 indexes optimized for common filter patterns:

| Index | Use Case |
|-------|----------|
| `updatedAt` | Recent activity queries |
| `lat, lng` | Geographic bounding box |
| `lat, lng, updatedAt` | Geo + time combined |
| `mostRecentUser` | Per-canvasser lookups |
| `mostRecentResult` | Result-based filtering |
| `branch` | Territory filtering |

## Features

### Heat Maps

Visualize knock density and outcomes:

- **Density Maps**: Where are we knocking most?
- **Success Maps**: Where are we finding interest?
- **Gap Analysis**: Which areas are under-canvassed?

### Division Scorecards

Performance metrics by canvassing division:

- **Doors Knocked**: Volume metrics
- **Lead Rate**: Percentage generating leads
- **Conversion**: Leads that became appointments
- **Rep Rankings**: Individual performance within division

### Points-based Gamification

Motivation through competition:

- **Point System**: Points for doors, leads, sales
- **Leaderboards**: Daily/weekly/monthly rankings
- **Achievements**: Milestones and badges
- **Team Competitions**: Division vs. division

### Daily Snapshots

Historical reporting via `CanvassSnapshot`:

- **Daily Aggregates**: Pre-computed daily metrics
- **Trend Analysis**: Compare across time periods
- **Report Generation**: Fast historical reports

## API Endpoints

```
/api/scorecards/canvass/
├── index.get.ts      # Division scorecards
└── points.get.ts     # Points/gamification data

/api/reports/canvass-points/
└── index.get.ts      # Detailed points breakdown
```

## Integration with Cypress

The analytics backend powers the Cypress mobile app:

```
Cypress App → POST knock data → Canvass DB
                                    ↓
Admin Dashboard ← GET analytics ← Aggregation
                                    ↓
                             Heat maps, scorecards
```

## Portfolio Significance

Canvassing Analytics demonstrates:

1. **Geo-spatial Database Design**: Optimized for location queries
2. **Array Data Handling**: PostgreSQL GIN indexes
3. **Analytics Pipeline**: Raw data → aggregations → visualizations
4. **Gamification Design**: Points, leaderboards, achievements

## Results

The analytics layer enables:

- **Territory Planning**: Data-driven route optimization
- **Performance Visibility**: Real-time leaderboards
- **Gap Detection**: Find under-served areas
- **Trend Analysis**: Seasonal and geographic patterns
