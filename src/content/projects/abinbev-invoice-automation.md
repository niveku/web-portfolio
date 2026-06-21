---
title: "AB InBev Invoice PDF Automation"
summary: "Acting architect on a serverless AWS pipeline (Textract, Lambda, Step Functions) that normalized invoice PDFs from 30–40 supplier formats into structured data for downstream business workflows."
date: 2023-06-01
category: Data Engineering
stack: ["AWS Lambda", "AWS Step Functions", "AWS Textract", "AWS SQS", "AWS DynamoDB", "AWS S3", "AWS CloudWatch", "Python"]
featured: true
---

## The problem: 30–40 invoice formats, no path from PDF to structured data

AB InBev received supplier invoices as PDFs, and 30 to 40 suppliers each sent a different layout. Some were clean digital exports; others were scans with skewed text and inconsistent tables. Downstream business systems needed normalized records (vendor, line items, totals, dates), and the conversion from PDF to structured data was manual, slow, and error-prone. No pipeline turned a raw invoice into a clean record.

## My role: acting architect

I held the architecture in practice and led the implementation, without the formal title. The brief was one line: extract and normalize invoice data. I turned that into a working design. I clarified the requirements with stakeholders, picked the AWS services, mapped the failure modes (a malformed PDF, a Textract miss, a downstream stall), sized the workload against Textract's per-page billing, and wrote the tests that pinned the extraction logic to known invoice samples.

## What I built: a serverless AWS pipeline

A serverless pipeline on AWS, with no servers to patch and a cost that tracks volume:

- **Ingest:** a PDF lands in S3 and triggers a Lambda function.
- **Extraction:** AWS Textract runs OCR and pulls structured fields (key-value pairs and tables) from the page.
- **Orchestration:** Step Functions drive the extract, validate, and retry flow as an explicit state machine, so each invoice has a traceable path and a failed step retries on its own.
- **Queue:** SQS buffers between ingestion and processing, so a downstream stall holds work in the queue instead of dropping uploads.
- **Storage:** DynamoDB holds the normalized records; S3 keeps the original PDFs for audit and reprocessing.
- **Observability:** CloudWatch alarms and logs flag failures for review.

Textract hits high accuracy on clean digital PDFs and drops on skewed scans and dense tables. Before I committed to the architecture, I ran extraction across a sample of supplier types and measured the error rate per layout, then added preprocessing (deskew, page trimming, table-region hints) that raised the harder scans into a range Textract could extract with consistent accuracy.

## Outcome: structured invoice data from 30–40 formats

The pipeline normalized invoices across 30 to 40 supplier formats into clean records the downstream business systems could consume, replacing the manual read-and-retype step. Textract bills per page, so trimming pages in preprocessing and batching the runs held the cost to the pages that carried data. I reuse the same shape (Textract for extraction, Step Functions for orchestration, SQS for back-pressure) on other high-variance document-AI work.
