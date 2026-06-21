---
title: "AB InBev Invoice PDF Automation"
summary: "Acting architect on a serverless pipeline that normalized invoice PDFs from 30+ supplier formats into structured data for downstream business workflows."
date: 2023-06-01
category: Data Engineering
stack: ["AWS Lambda", "AWS Step Functions", "AWS Textract", "AWS SQS", "AWS DynamoDB", "AWS S3", "AWS CloudWatch", "Python"]
featured: true
---

## The problem: 30+ invoice formats, no automated path

AB InBev received invoices from more than 30 suppliers, and each supplier used its own PDF layout. Downstream business systems needed clean, normalized records. No automated path existed from raw PDF to structured data.

## My role: acting architect

I led the implementation and held the architecture in practice. The brief was one line: extract and normalize invoice data. I clarified the requirements, chose the AWS services, designed the preprocessing that made difficult PDFs readable to OCR, sized the workload against Textract's per-page cost, and wrote tests around the extraction logic.

## What I built: a serverless AWS pipeline

A fully serverless pipeline on AWS:

- **Ingest:** PDFs land in S3, triggering a Lambda function.
- **Extraction:** AWS Textract handles OCR and structured field extraction.
- **Orchestration:** Step Functions coordinate the extraction, validation, and retry flow.
- **Queue:** SQS sits between ingestion and processing, so a downstream stall does not block new uploads.
- **Storage:** DynamoDB holds the normalized records; S3 retains the original PDFs.
- **Observability:** CloudWatch alarms and logs report failures for review.

Before I committed to the architecture, I benchmarked extraction accuracy across supplier types, then added preprocessing steps that made the harder PDFs readable to Textract.

## Outcome: structured invoice data from 30–40 formats

The pipeline normalized invoices across 30 to 40 supplier formats. Textract bills per page, so I sized batches and trimmed pages in preprocessing to keep the cost down.
