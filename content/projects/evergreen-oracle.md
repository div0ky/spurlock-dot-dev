---
title: "Oracle - Sales Prediction ML"
description: "Custom-trained machine learning model that predicts sale outcomes, ranks sales reps by closing probability, and enables data-driven lead routing. Built on proprietary company data."
image: "/images/evergreen_oracle.png"
icon: "lucide:brain"
order: 6
parent: "evergreen"
tags:
  - Python
  - scikit-learn
  - XGBoost
  - Machine Learning
  - PostgreSQL
techStack:
  ml:
    - Python
    - scikit-learn
    - XGBoost
  data:
    - PostgreSQL
    - Custom ETL pipelines
  integration:
    - REST API
    - Evergreen CRM
screenshots: []
---

## Overview

Oracle is a **custom-trained machine learning system** that predicts sale outcomes for incoming leads. Unlike simply calling OpenAI or using off-the-shelf ML services, Oracle is trained entirely on Midtown's proprietary historical data—making it uniquely tuned to our specific market, customer base, and sales patterns.

This isn't "we added AI to our product." This is building a custom ML model from scratch that directly impacts revenue through intelligent lead routing.

## What Oracle Does

### Sale Prediction

Given a new lead, Oracle predicts the probability of a successful sale:

- Analyzes lead characteristics against historical patterns
- Returns a probability score (0-100%)
- Factors in timing, location, product interest, and more

### Rep Matching

Oracle ranks which sales rep has the best chance of closing each lead:

- Considers rep's historical performance in similar scenarios
- Factors in territory familiarity, product expertise, workload
- Enables intelligent lead routing beyond simple round-robin

### Lift Calculation

Measures the improvement Oracle provides over baseline:

- Compares Oracle-routed leads vs. random assignment
- Quantifies the revenue impact of intelligent routing
- Provides confidence metrics for predictions

## Training Data Sources

Oracle's power comes from the richness of its training data:

### Historical Appointment Data

- Thousands of historical appointments with known outcomes
- Sale price, close rate, time-to-close patterns
- Rep performance across different scenarios

### Geolocation Data

- Property location and neighborhood context
- Proximity to branches and service areas
- Local market characteristics

### Soft Credit Data

- Financial signals indicating purchase capacity
- Risk scoring for financing considerations
- Correlated with historical close rates

### Market Data

- Local trends and seasonality
- Competitive landscape factors
- Economic indicators

## Technical Architecture

### Feature Engineering Pipeline

Raw data is transformed into ML-ready features including base lead score, neighborhood context, credit band normalization, days since inquiry, product demand indices, rep-territory fit scores, rep product expertise, and seasonality factors.

### Model Training

- **Algorithm**: XGBoost gradient boosting
- **Validation**: Time-based cross-validation (no data leakage)
- **Metrics**: AUC-ROC, precision/recall at various thresholds
- **Retraining**: Periodic retraining as new data accumulates

### Production Integration

Oracle exposes a REST API consumed by Evergreen. The CRM sends lead ID and extracted features, and receives back a probability score (0-100%), ranked list of recommended reps, and a lift calculation showing improvement over baseline.

## Portfolio Significance

Oracle demonstrates end-to-end ML engineering:

1. **Data Engineering**: Building ETL pipelines for diverse data sources
2. **Feature Engineering**: Transforming raw data into predictive signals
3. **Model Training**: Selecting algorithms, tuning hyperparameters
4. **Validation**: Proper time-based splits, avoiding data leakage
5. **Deployment**: Production API serving real-time predictions
6. **Integration**: Seamless connection with the CRM workflow
7. **Monitoring**: Tracking model performance over time

This isn't a weekend project or a tutorial exercise—it's a production ML system that influences real business decisions and measurably impacts revenue.

## Results

Oracle's predictions directly improve sales outcomes:

- **Intelligent Routing**: Leads matched to reps most likely to close
- **Priority Optimization**: High-probability leads get faster attention
- **Rep Development**: Insights into what makes successful matches
- **Continuous Learning**: Model improves as more data accumulates

## Lessons Learned

Building Oracle taught valuable lessons about production ML:

1. **Data quality matters more than algorithm choice**: Clean, representative data beats fancy models
2. **Feature engineering is the real work**: Most time spent understanding and transforming data
3. **Time-based validation is critical**: Prevents overly optimistic performance estimates
4. **Integration is half the battle**: The best model is useless if it's not embedded in workflows
