---
title: "Housing Simulator"
summary: "Streamlit app that compares rent vs. buy housing scenarios for the Colombian market with ROI metrics."
date: 2025-08-27
category: Data Engineering
stack: ["Python", "Streamlit", "Pandas"]
featured: false
repo: https://github.com/niveku/app-housing-simulator
---

## Problem

Rent versus buy is a famously bad decision to make on intuition. In Colombia it gets worse: IPC-indexed rent increases, mortgage rates that move with the BanRep policy rate, valorización that varies wildly by zone, and a tax regime that doesn't favour either side cleanly. Most online calculators are US-centric and ignore all of that.

## Inputs

The simulator takes the variables that actually move the answer: property price, down payment, mortgage rate and term, expected annual IPC, expected annual valorización (configurable per scenario), rent equivalent for a comparable unit, opportunity cost of capital, and holding horizon. Defaults are seeded from recent Colombian market data so the first run is meaningful even before customizing.

## Metrics Shown

For each year of the horizon, the app surfaces: cumulative cash out for each scenario, net worth trajectory (cash equivalent of the buy scenario minus the rent-and-invest scenario), break-even year, and ROI summary at horizon end. Sensitivity sliders let the user see how the answer flips when IPC, valorización, or interest rate assumptions shift.

## Outcome

A Streamlit app that takes a personal financial decision out of the realm of dinner-table opinion and into a numerical comparison the user can interrogate. The point isn't to declare a winner — the point is to show under which assumptions each scenario wins, and how sensitive the answer is to inputs the user doesn't actually know with confidence.
