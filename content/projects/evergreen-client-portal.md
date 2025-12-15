---
title: "Client Portal"
description: "Self-service portal for customers to track projects, view documents, make payments, and communicate with their project team. Reduces support calls while improving customer satisfaction."
image: ""
icon: "lucide:layout-grid"
order: 5
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
  payments:
    - Stripe
    - Stripe Elements
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

### Payment Processing

Secure online payments via Stripe:

```typescript
// Payment intent creation
async function createPaymentIntent(invoiceId: string) {
  const invoice = await prisma.invoice.findUnique({
    where: { id: invoiceId },
    include: { customer: true },
  })

  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(invoice.amount * 100),
    currency: 'usd',
    customer: invoice.customer.stripeCustomerId,
    metadata: {
      invoiceId,
      projectId: invoice.projectId,
    },
  })

  return paymentIntent.client_secret
}
```

### Communication Hub

Direct messaging with the project team:

- Threaded conversations per project
- File attachments
- Read receipts
- Email notifications for responses

## Technical Implementation

### Authentication

Magic link authentication for friction-free access:

```typescript
// Generate magic link
async function sendMagicLink(email: string) {
  const customer = await prisma.customer.findUnique({
    where: { email },
  })
  
  if (!customer) return // Silent fail for security
  
  const token = generateSecureToken()
  
  await prisma.magicLink.create({
    data: {
      token,
      customerId: customer.id,
      expiresAt: addMinutes(new Date(), 15),
    },
  })
  
  await sendEmail({
    to: email,
    template: 'magic-link',
    data: { link: `${baseUrl}/auth/verify?token=${token}` },
  })
}
```

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

