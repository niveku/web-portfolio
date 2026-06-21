---
title: "ViENOS — Oceanographic ENSO Monitoring Dashboard"
summary: "An open-source Python/Dash platform that monitors El Niño / La Niña (ENSO) conditions on Colombia's Pacific, built during my GIS work with the national maritime authority (DIMAR)."
date: 2021-06-01
category: Geospatial
stack: ["Python", "Dash", "Plotly", "GeoPandas", "Flask", "SQL Server"]
featured: false
repo: https://github.com/niveku/app-vienos-dashboard
---

## The problem: making ENSO conditions legible

El Niño and La Niña, the two phases of the ENSO cycle, shift sea-surface temperature and oceanographic conditions along Colombia's Pacific coast, and analysts weigh those conditions in fisheries, expedition, and coastal-risk decisions. The readings lived in SQL Server tables. To check current conditions or a trend, an analyst queried and reshaped those tables by hand, with no map to show where the readings sat.

## My role: acting architect and sole developer

I designed and built ViENOS end to end at DIMAR, from SQL Server access through spatial processing to the Dash front end, and released the code under an MIT license. The geoscience side, what an ENSO indicator means and how to frame it for a non-specialist, came from my BSc in Geosciences and the field work behind it.

## What I built: a multi-page Python/Dash platform

- **Data layer:** oceanographic series pulled from SQL Server via `pyodbc`, then cleaned with pandas and georeferenced with GeoPandas so each reading carried its coordinates.
- **Visualization:** a multi-page Dash + Plotly application pairing maps with time series for ENSO indicators, embedded alongside ArcGIS Experience Builder for the spatial views the institution already ran on.
- **Delivery:** a Flask app served behind Gunicorn, with each monitoring page reading from the refreshed data layer on load.

## Outcome: a production-ready, open-source tool

ViENOS reached production-ready state. Instead of querying a SQL Server table by hand, an analyst opens the dashboard and reads current ENSO conditions off the map and time series. I built it as the sole developer at DIMAR, and the source code stays public under an MIT license for other coastal and ENSO monitoring teams to reuse.
