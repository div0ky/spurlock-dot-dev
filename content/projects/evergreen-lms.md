---
title: "Learning Management System"
description: "Employee training platform with course builder, video hosting, interactive quizzes, certifications, and progress tracking. Powers onboarding and ongoing skill development."
image: "/images/evergreen_lms.png"
icon: "lucide:graduation-cap"
order: 12
parent: "evergreen"
tags:
  - Nuxt
  - Video Hosting
  - Training
  - Certifications
techStack:
  frontend:
    - Nuxt
    - Vue
    - TypeScript
  backend:
    - Nuxt Server Routes
    - PostgreSQL
  media:
    - Video hosting
    - Progress tracking
screenshots: []
---

## Overview

The Learning Management System (LMS) is a separate service that handles all employee training—from new hire onboarding to ongoing skill development. Built on Nuxt with similar architecture to the core Evergreen platform, it demonstrates the ability to build complete SaaS-style products.

**Note:** This is a separate codebase/service from the main Evergreen platform.

## Key Features

### Course Builder

Create structured learning content:

- **Module Organization**: Courses divided into logical modules
- **Content Types**: Video, text, images, documents
- **Sequencing**: Control module order and prerequisites
- **Draft/Publish**: Preview before making courses live

### Video Content

Rich video learning experience:

- **Video Hosting**: Secure video delivery
- **Progress Tracking**: Resume where you left off
- **Playback Controls**: Speed adjustment, captions
- **Completion Verification**: Ensure videos are watched

### Interactive Quizzes

Knowledge verification:

- **Question Types**: Multiple choice, true/false, fill-in-blank
- **Immediate Feedback**: Learn from mistakes
- **Retry Policies**: Configure attempts allowed
- **Passing Thresholds**: Set minimum scores

### Certifications

Formal recognition of completion:

- **Certificate Generation**: Branded completion certificates
- **Expiration Policies**: Require recertification
- **Verification**: Unique certificate IDs
- **Compliance Tracking**: Ensure required training is complete

### Progress Tracking

Comprehensive learning analytics:

- **Individual Progress**: Track each employee's journey
- **Course Analytics**: Completion rates, average scores
- **Manager Dashboards**: Team training status
- **Compliance Reports**: Who needs to complete what

## Use Cases

### New Hire Onboarding

Structured introduction for new employees:

- Company history and culture
- Product knowledge fundamentals
- Sales methodology training
- System usage tutorials
- Compliance requirements

### Product Knowledge

Ongoing product education:

- New product launches
- Feature updates
- Installation techniques
- Troubleshooting guides

### Sales Training

Sales methodology courses:

- Closing techniques
- Objection handling
- Customer psychology
- Pricing strategies

### Compliance Training

Required certifications:

- Safety training
- HR compliance
- Industry regulations
- Annual refreshers

## Admin Features

### Course Management

- **Create/Edit Courses**: Full course builder
- **Assign Courses**: Push to individuals or groups
- **Schedule Releases**: Time-based availability
- **Archive Courses**: Remove outdated content

### User Management

- **Role Assignment**: Student, instructor, admin
- **Group Organization**: Departments, branches
- **Bulk Operations**: Mass assignments

### Reporting

- **Completion Reports**: Who finished what
- **Score Analysis**: Quiz performance trends
- **Time Tracking**: Learning time invested
- **Compliance Gaps**: Overdue requirements

## Technical Architecture

### Separate Service

The LMS runs as an independent service:

- **Own Codebase**: Separate repository
- **Shared Auth**: SSO with Evergreen
- **API Integration**: Data exchange where needed

### Similar Stack

Built on the same foundations:

```
LMS Architecture
├── Nuxt Frontend
├── Server Routes (API)
├── PostgreSQL (data)
└── Video Storage (media)
```

## Portfolio Significance

The LMS demonstrates:

1. **Product Development**: Complete SaaS-style application
2. **Content Management**: Course builder, video handling
3. **User Experience**: Learning-focused interface design
4. **Analytics**: Progress tracking and reporting
5. **Ecosystem Thinking**: Part of interconnected tools

## Results

The LMS powers employee development:

- **Consistent Onboarding**: Every new hire gets same foundation
- **Ongoing Development**: Continuous learning opportunities
- **Compliance Confidence**: Track required certifications
- **Scalable Training**: Train across all branches efficiently
