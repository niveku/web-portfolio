import type { APIRoute } from 'astro';
import { career } from '../data/career';

// Dynamic llms.txt so page links always match the canonical site (Astro.site),
// even after a domain change. Prerendered to /llms.txt at build.
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://portafolio-niveku.vercel.app')).origin;
  const gh = career.identity.socials.find((s) => s.type === 'github')?.url ?? 'https://github.com/niveku';
  const li = career.identity.socials.find((s) => s.type === 'linkedin')?.url ?? 'https://www.linkedin.com/in/kevinhenaolopez';

  const body = `# Kevin Henao — Geospatial Data Engineer

> ${career.identity.summaries.geospatial.split('. ').slice(0, 2).join('. ')}.

Personal portfolio of Kevin Henao (handle: "niveku"). A static Astro site covering his geospatial data engineering work, projects, and writing.

## Positioning
- Primary: Geospatial Data Engineer (GIS + Python + AWS + spatial data pipelines)
- Secondary: Data Engineer (geospatial/GIS edge), GIS Python Developer, Technical Product Operator, AI workflow & automation on the Claude/Anthropic stack

## Pages
- [Home](${base}/): overview, selected work, career cross-section, contact
- [About](${base}/about): full background, experience timeline, skills, education, certifications
- [Projects](${base}/projects): case studies across geospatial, data engineering, and AI/automation
- [Blog](${base}/blog): notes on GIS tooling, AWS pipelines, and AI workflow automation
- [Contact](${base}/contact): how to reach Kevin

## Selected work
- AB InBev — invoice-PDF automation (acting architect): serverless AWS pipeline (Textract, Lambda, Step Functions) normalizing 30–40 supplier formats
- Casaideas — SAP-to-cloud data pipeline (AWS Glue, PySpark, S3) for a LATAM retailer
- Coca-Cola Chile — distribution/logistics ETL under quality-gated DevOps
- DIMAR (Colombian Maritime Authority) — COVID geospatial monitoring workflow (ArcGIS Online, Survey123, GeoPandas) and the open-source ViENOS oceanographic dashboard (Python/Dash)
- Fura — 3D geological model of the Coscuez emerald deposit and cartographic reporting infrastructure (QGIS, Leapfrog, Datamine)

## Background
- Current role: Geoscience Software Specialist at Imaged Reality (UK, remote), working on the Stratbox geological-software platform
- Education: BSc Geosciences, Universidad de los Andes (GPA 4.12/5, "Quiero Estudiar" scholarship); Data Science (DS4A / Correlation One)
- Languages: Spanish (native), English (C2, EF SET certified)
- Credentials: Colombian Professional Geology License (CPG); ACGGP member
- Publication: co-author, "Automating Core Data Integration: Insights from the Volve Field Case Study", ADIPEC 2025 (SPE OnePetro D041S138R004)

## Links
- GitHub: ${gh}
- LinkedIn: ${li}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
