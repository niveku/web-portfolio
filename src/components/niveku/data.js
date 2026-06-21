/* Presentational curation for the Niveku home.
   Canonical project/blog records live in src/content/**; facts trace to
   src/data/career.ts. These are the home-page display cards and link to the
   real /projects/:slug & /blog/:slug routes. Lead positioning: Geospatial
   Data Engineer — geospatial + data-engineering work is featured first. */

export const PROJECTS = [
  {
    slug: "dimar-covid-geospatial",
    title: "DIMAR",
    subtitle: "COVID Geospatial Monitoring",
    summary:
      "Colombia's national maritime authority (DIMAR) needed live operational status across its sites during the pandemic. I designed the workflow end to end: Survey123 forms in the field, GeoPandas cleaning and georeferencing the records, and ArcGIS Online dashboards that institutional teams read for daily planning.",
    category: "Geospatial",
    role: "Designer & implementer",
    date: "2020",
    stack: ["ArcGIS Online", "Survey123", "GeoPandas", "Python"],
    metric: { label: "Pipeline", value: "field → dashboard, end to end" },
    accent: "cyan",
    kana: "海",
    featured: true,
  },
  {
    slug: "abinbev-invoice-automation",
    title: "AB InBev",
    subtitle: "Invoice PDF Automation",
    summary:
      "No two suppliers laid out their invoices the same way, so accounts-payable read 30–40 PDF formats by hand. As acting architect I built a serverless AWS pipeline (Textract for extraction, Lambda for parsing, Step Functions for orchestration) that turned those PDFs into one structured, queryable schema.",
    category: "Data Engineering",
    role: "Acting architect",
    date: "2023",
    stack: ["AWS Lambda", "Step Functions", "Textract", "DynamoDB"],
    metric: { label: "Supplier formats", value: "30–40" },
    accent: "violet",
    kana: "請求書",
    featured: true,
  },
  {
    slug: "fura-reporting-maps",
    title: "Fura",
    subtitle: "Geological Modeling & Reporting Maps",
    summary:
      "Built the first 3D geological model of the Coscuez emerald deposit and owned the GIS reporting base behind investor, environmental, and mining-licensing maps across the emerald belt. Python automation of the repeated map and report production cut roughly 100 hours of manual work off the team's year.",
    category: "Geospatial",
    role: "Resource geologist / GIS owner",
    date: "2019",
    stack: ["QGIS", "Leapfrog", "Datamine", "Python"],
    metric: { label: "Reporting time saved", value: "~100 hrs/yr" },
    accent: "magenta",
    kana: "地質",
    featured: true,
  },
  {
    slug: "cocacola-distribution",
    title: "Coca-Cola Chile",
    subtitle: "Distribution Data Flow",
    summary:
      "Built distribution and logistics ETL on AWS, handling data modeling and traceability so stock and delivery data stayed reconcilable downstream. Every change shipped through quality gates (SonarQube coverage thresholds, GitHub Actions CI), and I worked the requirements directly with the client.",
    category: "Data Engineering",
    role: "Data engineer",
    date: "2023",
    stack: ["AWS", "PySpark", "Redshift", "SonarQube"],
    metric: { label: "Across Arkho", value: "15+ ETLs · 4 CDK projects" },
    accent: "cyan",
    kana: "物流",
  },
  {
    slug: "casaideas-sap-pipeline",
    title: "Casaideas",
    subtitle: "SAP → Cloud Pipeline",
    summary:
      "Daily SAP extracts landed as raw retail data with no clean path to analysis. I built the Glue and PySpark pipeline that moved them through RAW, staging, and warehouse layers on S3 and Redshift, giving inventory and sales reporting a lineage they could trust.",
    category: "Data Engineering",
    role: "Data engineer",
    date: "2023",
    stack: ["AWS Glue", "PySpark", "S3", "SQL"],
    metric: { label: "Layers", value: "RAW → staging → warehouse" },
    accent: "amber",
    kana: "倉庫",
  },
  {
    slug: "openclaw",
    title: "OpenClaw",
    subtitle: "Personal AI Automation System",
    summary:
      "A personal AI workflow system on Claude Code, MCP servers, and custom skills. Coding, research, and Obsidian knowledge work run through one set of automations I wrote and maintain myself, where small Python and prompt scripts stack into a daily toolkit I keep extending.",
    category: "AI / Automation",
    role: "Builder & sole operator",
    date: "2026",
    stack: ["Claude Code", "MCPs", "Obsidian", "Python"],
    metric: { label: "Operators", value: "1 (me)" },
    accent: "magenta",
    kana: "自動化",
  },
];

export const POSTS = [
  {
    slug: "tools-i-rely-on",
    title: "Tools I rely on, May 2026",
    summary:
      "I lean on Obsidian, Claude Code, Astro, and daily Python on Windows. Which ones earned a permanent slot, and which ones I dropped.",
    date: "2026-05-13",
    readMin: 4,
    tags: ["tooling", "productivity", "workflow"],
  },
  {
    slug: "organizing-my-github",
    title: "Organizing my GitHub",
    summary:
      "I took a pile of inconsistently named repos and gave them a clean <scope>-<what> convention. Then I set a README pattern and a deliberate public/private split.",
    date: "2026-05-13",
    readMin: 4,
    tags: ["github", "portfolio", "engineering-practice", "meta"],
  },
  {
    slug: "ai-workflows-claude-code",
    title: "Building AI Workflows with Claude Code and MCPs",
    summary:
      "How I wire Claude Code, custom skills, and Model Context Protocol servers into development and knowledge work. Small automations stack into a system I lean on every day.",
    date: "2026-04-23",
    readMin: 6,
    tags: ["AI", "claude-code", "automation", "workflow", "MCP"],
  },
];

export const SKILLS = {
  strong: [
    "Python", "GeoPandas", "QGIS", "GDAL",
    "ArcGIS Online", "Survey123", "SQL",
    "AWS Lambda", "AWS Glue", "Step Functions",
    "Redshift", "Athena", "ETL pipelines",
  ],
  credible: [
    "PostGIS", "ArcGIS Pro", "Dash / Plotly",
    "PySpark", "AWS CDK", "CloudFormation",
    "Docker", "GitHub Actions", "Power BI",
    "Leapfrog", "Datamine",
  ],
  growing: [
    "Claude Code", "MCPs", "AI agent workflows", "OpenClaw",
  ],
};

export const STATS = [
  { label: "Years shipping", value: "8+", kana: "年" },
  { label: "Companies", value: "5", kana: "社" },
  { label: "SPE paper", value: "1", kana: "論文", sub: "ADIPEC 2025" },
  { label: "Based in", value: "Bogotá", kana: "拠点", sub: "GMT-5 · remote-first" },
];
