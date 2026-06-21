---
title: "Local AI Upscaler — AMD GPU (Vulkan)"
summary: "Single-file Python CLI that upscales AI-generated images for print on AMD GPUs in Windows · Real-ESRGAN NCNN + Vulkan, no CUDA, no cloud."
date: 2026-05-22
category: AI/Automation
stack: ["Python", "Real-ESRGAN", "NCNN", "Vulkan", "Pillow"]
featured: false
repo: https://github.com/niveku/upscale-amd-vulkan
---

## Problem

AI-generated images come out at 768–1024px, enough for a screen but too small for print. A 10"×18" poster at 300 DPI needs at least 3000px on the short side. Topaz Gigapixel and Aiarty handle the upscale, but Topaz dropped its perpetual license in late 2025 and both tools require NVIDIA CUDA. On Windows with an AMD GPU, the ecosystem assumes either CUDA (NVIDIA-only) or ROCm (Linux-only). PyTorch falls back to CPU without warning, ONNX Runtime DirectML has no compatible Real-ESRGAN model, and most Python ML wheels skip Windows-AMD.

## What I Built

A single-file Python CLI that wraps Real-ESRGAN NCNN Vulkan, the same engine Upscayl runs internally, without the GUI. Three presets cover the cases I hit: `photo` for photorealistic AI images, `anime` for illustration and cartoon work, `fast` for batch previews. The script auto-downloads the binary and models (~43 MB) on first run, takes single files or folder batches, and writes PNG output to a custom path when needed. Pillow is the only Python dependency. The upscaling itself runs on the precompiled NCNN binary, which reaches the GPU through Vulkan and works on any modern AMD, Intel, or NVIDIA card.

## Benchmark

Measured on an AMD Radeon RX 9060 XT, input 768×1364 → output 3072×5456 (4×):

| Model  | Time | Use case                          |
|--------|------|-----------------------------------|
| photo  | 9.6s | Photorealistic AI images, portraits |
| anime  | 3.8s | Illustration, cartoon, anime       |
| fast   | 1.6s | Batch previews                     |

All three models autodetect the GPU through Vulkan with fp16 enabled.

## Outcome

The script gives AI imagery a print pipeline on hardware the official ecosystem skips. On photographic content the output matches Topaz Gigapixel, runs offline, and costs nothing. The repository's `RESEARCH.md` records every alternative I tested and why each one failed on Windows + AMD, so the project doubles as a reference for anyone hitting the same wall.
