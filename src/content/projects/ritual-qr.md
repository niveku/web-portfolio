---
title: "Ritual QR Puzzle"
summary: "Duplex fold-and-backlight QR puzzle generator. Print it, fold it, hold it to a lamp, and the hidden QR resolves."
date: 2026-04-12
category: AI/Automation
stack: ["Python", "Pillow", "qrcode", "ReportLab", "OpenCV"]
featured: true
repo: https://github.com/niveku/app-ritual-qr
---

## Concept

A QR code that only exists when you fold the paper the right way and hold it against a light source. The front and back of a duplex print each carry half of the pattern. Fold the sheet so the two halves register, and the backlight bleeds them into one readable code. The artefact doubles as a puzzle: follow the fold ritual and your phone scans it, skip the ritual and the page stays noise.

## Calibration Workflow

Home printers drift on duplex jobs, so the front and back rarely land in register. A calibration mode prints registration marks, you measure the offset, and the generator bakes the correction into the final layout. Paper weight changes the result. Too thick and the backlight can't pass through, too thin and the surface print shows on the other side. Calibration sets a target weight and flags when your stock falls outside it.

## QA Pipeline

The generator validates every artwork before you print it. OpenCV composites the fold and backlight in software, then a virtual scanner tries to decode the result. When the simulated decode fails, the pipeline rejects the layout and regenerates it. The check catches the failures that waste paper: a payload too dense to resolve, a fold line crossing a finder pattern, contrast too low for the backlight to separate.

## Outcome

A working generator that turns any QR payload into a calibrated, QA-passed, print-ready PDF. The build stayed small because every step had a pass/fail to check: the registration marks line up or they don't, and the virtual scanner either decodes the artwork or rejects it. The design problem sits where generative layout meets backlight optics, and the output is a sheet of paper you hold to a lamp.
