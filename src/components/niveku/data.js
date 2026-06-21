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
      "End-to-end geospatial monitoring workflow for Colombia's national maritime authority — ArcGIS Online, Survey123 and GeoPandas feeding operational dashboards used for institutional planning during the pandemic.",
    category: "Geospatial",
    role: "Designer & implementer",
    date: "2020",
    stack: ["ArcGIS Online", "Survey123", "GeoPandas", "Python"],
    metric: { label: "For", value: "national gov agency" },
    accent: "cyan",
    kana: "海",
    featured: true,
  },
  {
    slug: "abinbev-invoice-automation",
    title: "AB InBev",
    subtitle: "Invoice PDF Automation",
    summary:
      "Acting architect on a serverless AWS pipeline (Textract, Lambda, Step Functions) that normalized invoice PDFs across 30–40 supplier formats into structured, queryable data.",
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
      "Built the first 3D geological model of the Coscuez emerald deposit and owned the GIS reporting base — investor, environmental, and mining-licensing maps across the emerald belt.",
    category: "Geospatial",
    role: "Resource geologist / GIS owner",
    date: "2019",
    stack: ["QGIS", "Leapfrog", "Datamine", "Python"],
    metric: { label: "Deposit model", value: "first 3D" },
    accent: "magenta",
    kana: "地質",
    featured: true,
  },
  {
    slug: "cocacola-distribution",
    title: "Coca-Cola Chile",
    subtitle: "Distribution Data Flow",
    summary:
      "Distribution and logistics ETL at operational scale — modeling, traceability, and quality gates (SonarQube, GitHub Actions) with direct client interaction.",
    category: "Data Engineering",
    role: "Data engineer",
    date: "2023",
    stack: ["AWS", "PySpark", "Redshift", "SonarQube"],
    accent: "cyan",
    kana: "物流",
  },
  {
    slug: "casaideas-sap-pipeline",
    title: "Casaideas",
    subtitle: "SAP → Cloud Pipeline",
    summary:
      "End-to-end pipeline migrating daily SAP retail extracts into a traceable cloud analytics layer (Glue, PySpark, S3) for a LATAM retail chain.",
    category: "Data Engineering",
    role: "Data engineer",
    date: "2023",
    stack: ["AWS Glue", "PySpark", "S3", "SQL"],
    accent: "amber",
    kana: "倉庫",
  },
  {
    slug: "openclaw",
    title: "OpenClaw",
    subtitle: "Personal AI Automation System",
    summary:
      "A personal AI workflow system built on Claude Code, MCPs, and custom skills — unifying development, career, and knowledge work into one operating model.",
    category: "AI / Automation",
    role: "Builder & sole operator",
    date: "2026",
    stack: ["Claude Code", "MCPs", "Obsidian", "Python"],
    accent: "magenta",
    kana: "自動化",
  },
];

export const POSTS = [
  {
    slug: "tools-i-rely-on",
    title: "Tools I rely on, May 2026",
    summary:
      "The tools that actually move my work forward — Obsidian, Claude Code, Astro, daily Python on Windows — and what earns a permanent slot versus what I dropped.",
    date: "2026-05-13",
    readMin: 4,
    tags: ["tooling", "productivity", "workflow"],
  },
  {
    slug: "organizing-my-github",
    title: "Organizing my GitHub",
    summary:
      "From a pile of inconsistently named repos to a clean <scope>-<what> convention, a README pattern, and a deliberate public/private split.",
    date: "2026-05-13",
    readMin: 4,
    tags: ["github", "portfolio", "engineering-practice", "meta"],
  },
  {
    slug: "ai-workflows-claude-code",
    title: "Building AI Workflows with Claude Code and MCPs",
    summary:
      "How I use Claude Code, custom skills, and Model Context Protocol servers across development, writing, and knowledge work — and what it reveals about how AI tooling actually compounds.",
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
