---
title: "Ritual QR Puzzle"
summary: "Duplex fold-and-backlight QR puzzle generator. Print, fold, hold to a lamp — the hidden QR resolves."
date: 2026-04-12
category: AI/Automation
stack: ["Python", "Pillow", "qrcode", "ReportLab", "OpenCV"]
featured: true
repo: https://github.com/niveku/app-ritual-qr
---

## Concept

A QR code that only exists when the paper is folded the right way and held against a light source. The front and back of a duplex print each carry half of the pattern; alignment, transparency, and backlight do the rest. The result is a physical artefact that doubles as a puzzle — readable to anyone who follows the ritual, opaque to anyone who doesn't.

## Calibration Workflow

Home printers have duplex drift — front and back almost never align perfectly. The generator includes a calibration mode that prints registration marks, asks the user to measure the offset, and bakes the correction into the final output. Paper weight matters too: too thick and the backlight fails, too thin and the surface print shows through. The calibration step covers both.

## QA Pipeline

Each generated artwork is validated before printing: OpenCV simulates the fold-and-backlight composite digitally, then a virtual scanner attempts to decode the result. If the simulated decode fails, the layout is rejected and regenerated. This catches the most common failure modes — payload too dense, fold line crossing a finder pattern, contrast too low — before paper is wasted.

## Outcome

A working generator that turns arbitrary QR payloads into print-ready, calibrated, QA-passed PDFs. The project is small but unusually fun: it sits at the boundary of generative design, optics, and physical interaction — and every step has a verifiable success criterion.
