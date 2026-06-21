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

Most people decide rent versus buy on gut feel. Colombia adds variables that gut feel can't track: IPC-indexed rent increases, mortgage rates tied to the BanRep policy rate, valorización that swings by zone, and a tax regime with no clean winner. Online calculators assume a US market and skip all of it.

## Inputs

The simulator takes the variables that move the result: property price, down payment, mortgage rate and term, expected annual IPC, expected annual valorización (configurable per scenario), rent equivalent for a comparable unit, opportunity cost of capital, and holding horizon. Defaults come seeded from recent Colombian market data, so the first run returns something useful before you change a thing.

## Metrics Shown

For each year of the horizon, the app reports cumulative cash out per scenario, net worth trajectory (cash equivalent of the buy scenario minus the rent-and-invest scenario), break-even year, and an ROI summary at horizon end. Drag the sensitivity sliders and you watch the result flip as IPC, valorización, or interest rate assumptions shift.

## Outcome

A Streamlit app that turns a dinner-table argument into a comparison you can question with numbers. No scenario wins outright. The app shows which assumptions tip the result toward renting or buying, and how much that result depends on inputs you can't pin down with confidence.
