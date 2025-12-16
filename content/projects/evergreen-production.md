---
title: "Production & Service System"
description: "Full job lifecycle management from sale to completion. Service tickets, installer portal, change orders, payments, satisfaction surveys, and commission tracking."
image: "/images/evergreen_production.png"
icon: "lucide:wrench"
order: 11
parent: "evergreen"
tags:
  - Nuxt
  - PostgreSQL
  - Prisma
  - WebSockets
techStack:
  backend:
    - Nuxt Server Routes
    - PostgreSQL
    - Prisma ORM
  features:
    - Service tickets
    - Installer portal
    - Payment tracking
    - Satisfaction surveys
screenshots: []
---

## Overview

The Production & Service system manages the complete lifecycle of a job from sale through completion and beyond. With 40+ fields on the Job model covering permits, inspections, financing, and scheduling, this module handles the complexity of home improvement project management.

## Job Lifecycle

### Comprehensive Job Model

The Job model tracks every aspect of production with 40+ fields covering status and scheduling (start date, order date, completion date), financials (sale price, contract price), permits and inspections (permit status, inspection dates for final/framing/footer), materials (delivery date), and complexity metrics (1-3 scale, duration in days).

### Status Workflow

Jobs progress through defined statuses:

1. **Sold** → Initial sale recorded
2. **Measured** → Site measurements complete
3. **Ordered** → Materials ordered
4. **Scheduled** → Installation date set
5. **In Progress** → Work underway
6. **Complete** → Job finished
7. **Released** → Final payment received

## Service Tickets

Post-installation service management:

### Ticket Types

- **Warranty Work**: Covered repairs
- **Service Calls**: Paid service visits
- **Callbacks**: Issues from original install

### Ticket Workflow

Tickets track status (New → Scheduled → In Progress → Complete), type, scheduling (start/end/completed dates), assignments (tech, installer, multiple techs), and financials (payment status, amount due).

### Features

- **Multi-tech Assignment**: Assign multiple technicians
- **Scheduling Calendar**: Visual scheduling interface
- **Payment Tracking**: Track amounts due and collected
- **Admin Assignment**: Route tickets to product admins

## Installer Portal

Communication hub for subcontractors:

### Messaging System

Messages between office staff and installers with read tracking, client read timestamps, seen-by lists, and email event logging for delivery confirmation.

### Features

- **Job Updates**: Installers see their assigned jobs
- **Two-way Messaging**: Communication with office
- **Email Notifications**: Alerts for new messages
- **Read Receipts**: Track message engagement

## Change Orders

Handle scope changes after sale with date, adjustment amount (positive or negative), notes, and job linkage.

- **Positive Adjustments**: Additional work
- **Negative Adjustments**: Scope reductions
- **Audit Trail**: Full history of changes

## Payment Tracking

Financial management via Payment records (amount, date, description, method, financing vs cash) linked to Folder records that track financing details (cash/loan split, lender, loan status, contract price).

### Features

- **Multi-payment Support**: Track multiple payments per job
- **Loan Tracking**: Monitor financing status
- **Lender Integration**: Track loan details
- **Balance Calculation**: Automatic remaining balance

## Satisfaction Surveys

Customer feedback collection with dynamic question format, 1-5 overall rating, and linkage to both contact and job records.

- **Automated Sending**: Triggered after job completion
- **Rating Tracking**: Monitor customer satisfaction
- **Job Linkage**: Surveys tied to specific jobs

## Commission Tracking

Sales rep compensation tracked via ReleasedActivity records with effective date, type (Released or Adjustment), notes, freebie flag, and linkage to job and salesman.

### Features

- **Release Tracking**: When jobs are paid
- **Monthly/Yearly Views**: Released activity summaries
- **Freebie Flagging**: Track non-commissioned sales
- **Salesman Attribution**: Tie to specific reps

## Portfolio Significance

The Production system demonstrates:

1. **Complex Domain Modeling**: 40+ fields, multiple related entities
2. **Workflow Management**: Multi-step status progressions
3. **Financial Systems**: Payments, loans, change orders
4. **Multi-party Communication**: Installers, techs, customers
5. **Enterprise Complexity**: Real-world business operations

## Results

The system manages complete production operations:

- **End-to-end Tracking**: Sale to completion in one place
- **Service Efficiency**: Quick ticket resolution
- **Financial Visibility**: Real-time payment status
- **Customer Satisfaction**: Systematic feedback collection
