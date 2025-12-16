---
title: "AI/Automagic Platform"
description: "LLM-powered automation platform for call grading, transcription, performance summaries, grammar suggestions, and intelligent content generation. Powered by Google Gemini and OpenAI."
icon: "lucide:sparkles"
order: 8
parent: "evergreen"
tags:
  - Google Gemini
  - OpenAI
  - LLM
  - AI
  - TypeScript
techStack:
  ai:
    - Google Gemini
    - OpenAI
  backend:
    - Nuxt Server Routes
    - TypeScript
  integration:
    - Twilio (recordings)
    - PostgreSQL
screenshots: []
---

## Overview

The Automagic platform integrates modern LLMs (Google Gemini and OpenAI) throughout Evergreen to automate tasks that previously required manual effort. This is distinct from Oracle (our custom ML model)—Automagic leverages pre-trained LLMs for content generation, analysis, and intelligent suggestions.

## Key Features

### Call Audio Grading

AI analyzes call recordings to score agent performance:

- **Automatic Analysis**: Upload recording, receive structured feedback
- **Scoring Categories**: Greeting, product knowledge, objection handling, closing
- **Actionable Insights**: Specific coaching recommendations
- **Trend Tracking**: Monitor improvement over time

### Agent Performance Summaries

AI-generated insights on individual agent performance:

- **Weekly Summaries**: Automated performance digests
- **Trend Analysis**: Improvement or regression patterns
- **Comparative Insights**: How they stack up against team averages
- **Development Suggestions**: Personalized coaching recommendations

### Group Performance Analysis

Team-level AI insights:

- **Team Trends**: Aggregate performance patterns
- **Anomaly Detection**: Flag unusual patterns
- **Best Practice Identification**: What top performers do differently
- **Capacity Planning**: Workload distribution recommendations

### Grammar Suggestions

AI-powered writing assistance for SMS:

- **Real-time Suggestions**: As agents type SMS messages
- **Professional Tone**: Ensure consistent brand voice
- **Error Correction**: Catch typos and grammar issues
- **Clarity Improvements**: Suggest clearer phrasing

### Activity Summarization

Automatic summaries of customer interaction history:

- **Contact Timeline**: Summarize complex interaction history
- **Key Points Extraction**: What matters from previous conversations
- **Next Steps**: Suggested actions based on history
- **Handoff Context**: Quick briefing for new agents

### Ticket Suggestions

Smart suggestions for helpdesk tickets:

- **Category Prediction**: Auto-suggest ticket category
- **Priority Recommendation**: Suggest priority level
- **Similar Ticket Detection**: Find related past issues
- **Resolution Suggestions**: Recommend based on similar cases

### Product Matching

Intelligent product identification from lead text:

- **Lead Text Analysis**: Parse free-form lead descriptions
- **Product Identification**: Match to product catalog
- **Confidence Scoring**: How certain is the match
- **Multi-product Detection**: Handle leads interested in multiple products

## Technical Implementation

### API Architecture

Automagic features are exposed as server routes:

```
/api/automagic/
├── grade-call.post.ts
├── grade-call-audio.post.ts
├── summarize/
│   ├── activity.post.ts
│   ├── agent-performance.post.ts
│   └── group-performance.post.ts
├── suggest/
│   ├── grammar.post.ts
│   └── ticket.post.ts
├── transcribe.post.ts
└── products/
    └── index.get.ts
```

### Prompt Engineering

Carefully crafted prompts ensure consistent, useful outputs:

- **System Prompts**: Define AI persona and constraints
- **Few-shot Examples**: Guide output format with examples
- **Context Injection**: Provide relevant business context
- **Output Parsing**: Structured extraction from LLM responses

### Rate Limiting & Cost Control

LLM APIs require careful management:

- **Request Throttling**: Prevent API rate limit hits
- **Caching**: Cache identical requests
- **Cost Tracking**: Monitor API spend
- **Fallback Handling**: Graceful degradation if API unavailable

## Portfolio Significance

Automagic demonstrates:

1. **LLM Integration**: Practical application of modern AI
2. **Prompt Engineering**: Crafting effective prompts
3. **API Design**: Clean interfaces for AI features
4. **Business Value**: AI solving real operational problems

## Distinction from Oracle

| Automagic | Oracle |
|-----------|--------|
| Uses pre-trained LLMs (Gemini, OpenAI) | Custom-trained ML model |
| Content generation & analysis | Prediction & scoring |
| General-purpose AI capabilities | Domain-specific predictions |
| API costs per request | Training costs upfront |

Both are valuable, but they solve different problems. Automagic leverages the power of foundation models for content tasks, while Oracle provides specialized predictions trained on proprietary data.

## Results

Automagic has automated hours of manual work:

- **Call Review Time**: Reduced by automating initial grading
- **Report Generation**: Automated performance summaries
- **Writing Quality**: Consistent professional communication
- **Agent Onboarding**: Faster with AI coaching insights
