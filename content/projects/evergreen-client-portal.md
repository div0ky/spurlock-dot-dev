---
title: "Client Portal"
description: "Self-service portal for customers to track projects, view documents, make payments, and communicate with their project team. Reduces support calls while improving customer satisfaction."
image: "/images/evergreen_portal.png"
icon: "lucide:layout-grid"
order: 5
parent: "evergreen"
tags:
  - Nuxt
  - File Uploads
  - WebSockets
  - Service Tickets
  - AWS S3
techStack:
  frontend:
    - Nuxt 3
    - Tailwind CSS
    - TypeScript
  documents:
    - DocuSign API
    - AWS S3
    - PDF Generation
screenshots: []
---

## Overview

The Client Portal gives customers 24/7 access to their project information, eliminating phone calls for status updates and enabling self-service for common tasks.

## Key Features

### Project Dashboard

At-a-glance view of project status:

- Current phase and progress percentage
- Upcoming milestones and appointments
- Weather-related delays and notifications
- Photo gallery of completed work

### Document Center

Secure access to all project documents:

- Contracts with DocuSign integration
- Permits and inspection reports
- Warranty information
- Before/after photos

### Communication Hub

Direct messaging with the project team:

- Threaded conversations per project
- File attachments
- Read receipts
- Email notifications for responses

## Technical Implementation

### Real-time Updates

Customers see changes instantly without refreshing:

- Project status updates push immediately
- New messages appear in real-time
- Photo uploads show progress
- Payment confirmations display instantly

### Document Generation

Automated document creation:

- Welcome packets on project start
- Progress reports at milestones
- Completion certificates
- Warranty documents

## Security Considerations

Customer data security is paramount:

- **Row-level security**: Customers only see their own data
- **Encrypted storage**: All documents encrypted at rest
- **Audit logging**: Every access is logged
- **Session management**: Automatic timeouts and device tracking

## Results

The Client Portal has significantly improved customer experience:

- **60% reduction** in "status update" phone calls
- **95% customer satisfaction** rating
- **Faster payments**: Average 3 days faster than mail
- **24/7 availability**: Customers access info on their schedule

