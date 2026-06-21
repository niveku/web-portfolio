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

El Niño and La Niña, the two phases of the ENSO cycle, drive sea-surface temperature and oceanographic shifts along Colombia's Pacific coast. The measurements lived in SQL Server tables. To read current conditions or trends, an analyst had to query and reshape those tables by hand, and no map showed the spatial picture.

## My role: designer and builder

I designed and built ViENOS across the stack, from SQL Server data access through spatial processing to the Dash front end, and released it under an MIT license.

## What I built: a multi-page Python/Dash platform

- **Data layer:** oceanographic series pulled from SQL Server via `pyodbc`, then cleaned and georeferenced with pandas and GeoPandas.
- **Visualization:** a multi-page Dash + Plotly application with maps and time series for ENSO indicators, integrated with ArcGIS Experience Builder for the spatial views.
- **Delivery:** served behind Flask + Gunicorn, with the monitoring pages reading from the refreshed data layer on each load.

## Outcome: a production-ready, open-source tool

ViENOS reached a production-ready state: a SQL Server table of oceanographic readings became a maintained monitoring product an analyst could open and read. The source code is public under an MIT license.
