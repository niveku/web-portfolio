---
title: "Coca-Cola Chile Distribution Data Flow"
summary: "Data engineering contributor on a large-scale logistics and distribution data pipeline for Coca-Cola Chile, with direct client interaction and quality-gated delivery."
date: 2023-09-01
category: Data Engineering
stack: ["AWS", "Python", "SQL", "PySpark", "GitHub Actions", "SonarQube"]
featured: false
---

## The problem: distribution data at operational scale

Coca-Cola Chile's distribution and logistics operation produces stock and transport data every day. Analysts read that data off downstream dashboards, so it had to land on schedule and match source. The client ran the work under strict code-quality, security, coverage, and maintainability requirements, so every output had to clear automated gates before it reached production.

## My role: data engineer with direct client work

I worked as a data engineer in direct contact with the client across Arkho's Coca-Cola Chile engagement. I built and modeled the distribution ETL flows, kept each output traceable to its source, refined incoming requirements with the stakeholders, and resolved issues as they surfaced. The Coca-Cola work was one of several flows in a portfolio I delivered at Arkho: 15+ ETLs across 4 AWS CDK projects, feeding 20+ Redshift reports.

## What I built: quality-gated ETL flows

- Distribution and logistics ETL flows on AWS, processing stock and transport data into staging and warehouse layers for analytical consumption.
- Stock and transport data models with lineage linking every record back to its source.
- Redshift reporting tables that fed the client's downstream dashboards.
- Deployments through GitHub Actions and AWS CDK with least-privilege IAM, so each release shipped the same way and left an audit trail.
- A pre-delivery quality gate: SonarQube static analysis, unit-test coverage, and benchmark validation runs. Code that missed the bar did not merge.
- A requirements loop with the client: I turned loose business asks into implementation specs and laid out the cost and risk tradeoffs for stakeholders to decide on.

## Outcome: technical rigor with stakeholder transparency

Every delivery cleared its quality gates before it reached the client, and stakeholders saw each cycle as it moved. When a requirement read two ways, I settled it with the stakeholder before the team built on it. The Coca-Cola flows held to the same DevOps bar as the rest of the portfolio: traceable, tested, and deployed through CDK.
