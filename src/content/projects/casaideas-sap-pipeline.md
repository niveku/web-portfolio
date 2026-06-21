---
title: "Casaideas SAP-to-Cloud Pipeline"
summary: "Built key stages of an end-to-end data pipeline migrating daily SAP extracts into a cloud analytics layer for a Latin American retail chain."
date: 2023-01-01
category: Data Engineering
stack: ["AWS S3", "AWS Glue", "PySpark", "SQL", "Python"]
featured: false
---

## The problem: SAP data into a cloud analytics layer

Casaideas, a Latin American retail chain, ran operations on SAP and wanted that data in a cloud analytics layer. Daily SAP extracts had to be ingested, cleaned, and served in a consistent, traceable form so business users could run inventory, sales, and stock analysis on top of it.

## My role: data engineer on the SAP-to-cloud flow

I owned key stages of the extraction-to-warehouse flow. I wrote the PySpark transforms, built the traceability mechanisms, and handled schema validation and consistency checks across the pipeline.

## What I built: a traceable Glue + PySpark pipeline

- Extraction layer: daily SAP files land in S3 and get catalogued.
- Processing: AWS Glue jobs run PySpark transforms over the raw extracts, handling cleaning, type normalization, deduplication, and business rules across raw, staging, and warehouse layers.
- Traceability: lineage tracking ties every warehouse record back to its source extract and the transformation step that produced it.
- Output: warehouse tables in a queryable format, with Athena and Redshift access for downstream Power BI reporting.

## Outcome: clean, traceable retail data daily

The pipeline delivers clean, traceable inventory and operational data to the warehouse each day for Power BI reporting. When a Casaideas analyst questions an inventory or stock number, the lineage records point back to the exact SAP extract and transform that produced it.
