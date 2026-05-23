---
title: "Local AI Upscaler — AMD GPU (Vulkan)"
summary: "Single-file Python CLI that upscales AI-generated images for print on AMD GPUs in Windows — Real-ESRGAN NCNN + Vulkan, no CUDA, no cloud."
date: 2026-05-22
category: AI/Automation
stack: ["Python", "Real-ESRGAN", "NCNN", "Vulkan", "Pillow"]
featured: false
repo: https://github.com/niveku/upscale-amd-vulkan
---

## Problem

AI-generated images come out at 768–1024px — fine for screens, useless for print. To produce a 10"×18" poster at 300 DPI you need at least 3000px on the short side. The obvious path is Topaz Gigapixel or Aiarty, but Topaz dropped its perpetual license in late 2025 and both tools require NVIDIA CUDA. On Windows with an AMD GPU, the entire ecosystem assumes either CUDA (NVIDIA-only) or ROCm (Linux-only) — PyTorch silently falls back to CPU, ONNX Runtime DirectML has no compatible Real-ESRGAN model, and most Python ML wheels skip Windows-AMD entirely.

## What I Built

A single-file Python CLI that wraps Real-ESRGAN NCNN Vulkan — the same engine Upscayl uses internally, without the GUI overhead. Three presets cover the realistic cases: `photo` for photorealistic AI images, `anime` for illustration and cartoon work, `fast` for batch previews. The script auto-downloads the binary and models (~43 MB) on first run, supports single files and folder batches, and writes PNG output with a custom path if needed. Pillow is the only Python dependency — the actual upscaling runs on the precompiled NCNN binary, which talks to the GPU through Vulkan and works on any modern AMD, Intel, or NVIDIA card.

## Benchmark

Measured on an AMD Radeon RX 9060 XT, input 768×1364 → output 3072×5456 (4×):

| Model  | Time | Use case                          |
|--------|------|-----------------------------------|
| photo  | 9.6s | Photorealistic AI images, portraits |
| anime  | 3.8s | Illustration, cartoon, anime       |
| fast   | 1.6s | Batch previews                     |

All three models autodetect the GPU through Vulkan with fp16 enabled.

## Outcome

A working print pipeline for AI imagery on hardware the official ecosystem ignores. Output quality is comparable to Topaz Gigapixel on photographic content, runs entirely offline, and costs nothing. The repository's `RESEARCH.md` documents every alternative considered and the specific reasons each failed on Windows + AMD — the project is as much a writeup of the platform landscape as it is a tool.
