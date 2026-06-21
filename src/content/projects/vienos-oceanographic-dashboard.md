---
title: "ViENOS — Oceanographic ENSO Monitoring Dashboard"
summary: "An open-source Python/Dash platform monitoring El Niño / La Niña (ENSO) conditions on Colombia's Pacific, built during my GIS work with the national maritime authority (DIMAR)."
date: 2021-06-01
category: Geospatial
stack: ["Python", "Dash", "Plotly", "GeoPandas", "Flask", "SQL Server"]
featured: false
repo: https://github.com/niveku/app-vienos-dashboard
---

## The problem: making ENSO conditions legible

El Niño and La Niña — the ENSO cycle — drive sea-surface temperature and oceanographic shifts along Colombia's Pacific coast. The underlying measurements existed, but reading current conditions and trends meant wrangling raw tables. There was no single, spatial, always-current view.

## My role: designer and builder

I designed and built ViENOS end-to-end — data access, spatial processing, and the dashboard itself — and released it as open-source (MIT) work.

## What I built: a multi-page Python/Dash platform

- **Data layer:** oceanographic series pulled from SQL Server via `pyodbc`, then cleaned and georeferenced with pandas and GeoPandas.
- **Visualization:** a multi-page Dash + Plotly application with maps and time series for ENSO indicators, integrated with ArcGIS Experience Builder for the spatial views.
- **Delivery:** served behind Flask + Gunicorn, structured so the monitoring pages stay current.

## Outcome: a production-ready, open-source tool

ViENOS reached a production-ready state and is published as open-source under an MIT license — a self-contained example of taking environmental and spatial data all the way to a usable monitoring product.
