---
title: "Fura Exploration — Geological Reporting & Licensing Maps"
summary: "Owned the GIS information base and reporting cartography for Fura's Coscuez emerald operation in Boyacá, Colombia: QGIS and ArcGIS map series for investor, environmental, and licensing audiences, plus the first 3D geological model of the deposit and Python automation that cut ~100 hours of reporting work per year."
date: 2019-01-01
category: Geospatial
stack: ["QGIS", "GIS", "Python", "Leapfrog", "Datamine"]
featured: false
---

## The problem: one GIS base, three audiences

Fura Gems runs emerald exploration and mining at Coscuez in Boyacá, Colombia. The same geology had to reach three audiences that read maps differently. Investor technical reports wanted the resource story and drilling coverage. Environmental licensing submissions wanted impact extents, watercourses, and protected boundaries. Regulatory filings to Colombian mining authorities wanted concession limits and surveyed coordinates that survived legal scrutiny. Each context fixed its own projection, symbology, and annotation standard. The underlying data kept changing as the campaign advanced: drillhole logs, structural mapping, topography, and concession layers.

## My role: owner of the geological information and its maps

I moved from exploration geologist into resource geologist over the campaign, and the reporting cartography came with the role. I owned the geological information base and the maps drawn from it, the single point of accountability for the spatial deliverables that left the site. Fieldwork fed the same base: core and tunnel logging, structural mapping, bulk sampling, and the geochemical and XRD-linked data flows behind orebody and deposit-boundary modeling.

## What I built: a managed GIS base, a 3D model, and automated reporting

- A managed geospatial repository for Fura's concession areas, holding geological, environmental, topographic, and licensing layers under one coordinate and versioning standard so every map drew from the same source.
- QGIS and ArcGIS production workflows, one map series per audience, each with the projection, symbology, and annotation that context required.
- The first 3D geological model of the Coscuez emerald deposit, built in Leapfrog Geo and DATAMINE, feeding 3D-to-2D sections and plans into reports and into resource estimation.
- A Python reporting pipeline (SQLite, pandas, NumPy, matplotlib, and xlwings into Excel) that pulled logs and assays straight into report-ready figures and tables, cutting about 100 hours of manual reporting per year.
- Concession and boundary maps for formal submissions to Colombian regulatory bodies, and investor map series circulated to institutional stakeholders.

## Outcome: first 3D model, first resource estimation, ~100 hours back per year

The maps shipped on schedule for each investor, environmental, and licensing cycle. The 3D model and the same GIS base carried Fura's first formal Colombian emerald resource estimation, where I wrote the geological reporting to Colombian mining standards and co-authored the geosciences chapter of the mine-plan documentation that went to external consultants and the authority for approval. The Python pipeline returned roughly 100 hours a year that had gone to redrawing the same figures by hand, and put that time back into the geology.
