---
title: "DIMAR COVID Geospatial Monitoring"
summary: "Built a geospatial COVID monitoring workflow for Colombia's national maritime authority using ArcGIS Online and Python, supporting institutional decision-making during the pandemic."
date: 2020-06-01
category: Geospatial
stack: ["ArcGIS Online", "Python", "QGIS", "Survey123"]
featured: false
---

## The problem: spatial COVID monitoring for a maritime authority

DIMAR (Dirección General Marítima) governs Colombia's maritime jurisdiction across Caribbean and Pacific coasts, ports, and coastal installations. When COVID-19 hit, leadership had to answer operational questions by location: where cases were appearing, which installations were affected, how port operations stood day to day. Status sat in spreadsheets and email threads, none of it on a map. Planners could not see the spread or its operational footprint in one place.

## My role: own the workflow end to end

I served as GIS Developer / Geoscientist on a service contract (2020–2021) and took this from a blank slate to a running tool. I designed the data model, defined the field-reporting forms, wrote the Python that cleaned and georeferenced incoming records, and assembled the dashboards leadership opened directly. The contract gave me no fixed spec, so I set the architecture as I built it.

## What I built: ArcGIS Online + Survey123 + GeoPandas

- Field reporting with Survey123: structured forms let maritime installations submit operational and case status from the field, replacing free-text email with typed, location-stamped records.
- Spatial processing with Python and GeoPandas: scripts cleaned, validated, aggregated, and georeferenced each batch, resolving inconsistent location entries to coordinates DIMAR's web maps could plot.
- Decision dashboards on ArcGIS Online: web maps and dashboards showed case distribution and installation status across the jurisdiction, filterable by region so each command saw its own picture.
- I refreshed the data near-daily through the peak monitoring period, so the map planners opened in the morning reflected the prior day's field reports.

## Outcome: institutional decision support on existing tooling

DIMAR leadership ran this through the pandemic response, reading spread and operational status off the dashboards instead of reconciling spreadsheets. I built it on the institution's existing ArcGIS Online and Survey123 platform and delivered the working version on a fast turnaround. The same ArcGIS, Survey123, and GeoPandas stack carried into later DIMAR work, including Pacific expedition environmental mapping and the open-source ViENOS ENSO monitoring dashboard.
