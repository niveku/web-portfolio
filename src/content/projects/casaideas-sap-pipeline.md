---
title: "Casaideas SAP-to-Cloud Pipeline"
summary: "Built key stages of a Glue + PySpark pipeline that moves daily SAP extracts into a layered cloud warehouse, with lineage tying every record back to its source extract, for Latin American retailer Casaideas."
date: 2023-01-01
category: Data Engineering
stack: ["AWS S3", "AWS Glue", "PySpark", "SQL", "Python"]
featured: false
---

## The problem: SAP data into a cloud analytics layer

Casaideas, a Latin American retail chain, ran inventory and sales operations on SAP and needed that data in a cloud warehouse for analysis. SAP exported a daily batch of extracts into S3. Across those exports the data shifted: column types drifted between runs, the same product or store arrived under inconsistent codes, and a single transactional fact could repeat across files. Analysts could not trust an inventory or stock figure until someone reconciled it by hand against the raw export.

The job was to ingest those extracts every day, clean and conform them, and serve warehouse tables that business users could query for inventory, sales, and stock analysis, with enough lineage that any number could be traced back to its origin.

## My role: data engineer on the SAP-to-cloud flow

I owned key stages of the extraction-to-warehouse flow at Arkho. I wrote the PySpark transforms that run inside AWS Glue, built the lineage mechanism that tags each record with its provenance, and added the schema validation and consistency checks that catch a malformed extract before it reaches the warehouse.

## What I built: a traceable Glue + PySpark pipeline

I structured the flow in medallion layers (raw, staging, warehouse) so each stage has one job and the data gets cleaner as it moves through.

- Ingestion: SAP drops its daily extracts into S3, where a Glue crawler catalogs them and registers the schema for that run.
- Processing: Glue jobs run PySpark transforms over the raw extracts, normalizing types, deduplicating repeated facts, conforming store and product codes, and applying the retail business rules that turn raw SAP exports into staging and warehouse tables.
- Lineage: each warehouse record carries the source extract and the transform step that produced it, so provenance is a column you can query rather than a reconstruction you run by hand.
- Serving: the warehouse lands as partitioned tables that Athena and Redshift read, feeding Power BI inventory and stock reports.

CloudWatch tracks job runs and surfaces a failed or slow transform before the business notices a stale report.

## Outcome: clean, traceable retail data daily

The pipeline delivers conformed inventory and operational data to the warehouse each day for Power BI reporting. When a Casaideas analyst questions a stock number, the lineage columns name the SAP extract and transform that produced it, so reconciliation that used to mean a manual trace through raw files becomes a query. The work sits in a portfolio of 15+ ETLs I delivered across 4 AWS CDK projects under quality-gated DevOps (SonarQube, GitHub Actions).
