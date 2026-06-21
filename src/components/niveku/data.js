/* Project + post data for the Niveku home (presentational curation).
   Canonical project/blog records live in src/content/**; these are the
   home-page display cards and link to the real /projects/:slug & /blog/:slug routes. */

export const PROJECTS = [
  {
    slug: "openclaw",
    title: "OpenClaw",
    subtitle: "Personal AI Automation System",
    summary: "A personal AI workflow system built on Claude Code, MCPs, and custom skills — unified across development, career, and knowledge work.",
    category: "AI / Automation",
    role: "Builder & sole operator",
    date: "2026",
    stack: ["Claude Code", "MCPs", "Obsidian", "Python"],
    metric: { label: "Daily throughput", value: "×3+" },
    accent: "magenta",
    kana: "自動化",
    featured: true,
  },
  {
    slug: "cocacola-distribution",
    title: "Coca-Cola Chile",
    subtitle: "Distribution Data Flow",
    summary: "Distribution & logistics pipeline at operational scale — ETL, modeling, traceability, quality gates and direct client interaction.",
    category: "Data Engineering",
    role: "Technical contributor",
    date: "2023",
    stack: ["AWS", "PySpark", "Python", "SonarQube"],
    metric: { label: "Quality gate", value: "coverage + sonar" },
    accent: "cyan",
    kana: "物流",
    featured: true,
  },
  {
    slug: "abinbev-invoice-automation",
    title: "AB InBev",
    subtitle: "Invoice PDF Automation",
    summary: "Acting architect on a serverless pipeline that normalized invoice PDFs from 30+ supplier formats into structured data.",
    category: "Data Engineering",
    role: "Acting architect",
    date: "2023",
    stack: ["AWS Lambda", "Step Functions", "Textract", "DynamoDB"],
    metric: { label: "Supplier formats", value: "30+" },
    accent: "violet",
    kana: "請求書",
    featured: true,
  },
  {
    slug: "casaideas-sap-pipeline",
    title: "Casaideas",
    subtitle: "SAP→Cloud Pipeline",
    summary: "Key stages of an end-to-end data pipeline migrating daily SAP extracts into a cloud analytics layer for a LATAM retail chain.",
    category: "Data Engineering",
    role: "Technical contributor",
    date: "2023",
    stack: ["AWS Glue", "PySpark", "S3", "SQL"],
    accent: "amber",
    kana: "倉庫",
  },
  {
    slug: "dimar-covid-geospatial",
    title: "DIMAR",
    subtitle: "COVID Geospatial Monitoring",
    summary: "Geospatial COVID monitoring for Colombia's national maritime authority — institutional decision support during the pandemic.",
    category: "Geospatial",
    role: "Designer & implementer",
    date: "2020",
    stack: ["ArcGIS Online", "Survey123", "Python", "QGIS"],
    accent: "cyan",
    kana: "海",
  },
  {
    slug: "fura-reporting-maps",
    title: "Fura Exploration",
    subtitle: "Geological Reporting & Licensing Maps",
    summary: "Owned geospatial information and cartographic reporting for emerald exploration — investor, environmental and regulatory contexts.",
    category: "Geospatial",
    role: "Owner of GIS reporting",
    date: "2019",
    stack: ["QGIS", "Leapfrog", "Datamine", "Python"],
    accent: "magenta",
    kana: "地質",
  },
];

export const POSTS = [
  {
    slug: "ai-workflows-claude-code",
    title: "Building AI Workflows with Claude Code and MCPs",
    summary: "How skills + MCPs turn a chat assistant into persistent personal infrastructure — and where it actually compounds.",
    date: "2026-04-23",
    readMin: 7,
    tags: ["AI", "claude-code", "automation", "MCP"],
  },
];

export const SKILLS = {
  strong: [
    "Python", "SQL", "QGIS", "GeoPandas",
    "AWS Lambda", "AWS Glue", "Step Functions",
    "S3", "Athena", "Redshift", "DynamoDB",
    "ETL pipelines", "Jira / Confluence",
  ],
  credible: [
    "Docker", "GitHub Actions", "PySpark",
    "Power BI", "ArcGIS Pro", "Survey123",
    "GDAL", "Leapfrog", "Datamine",
  ],
  growing: [
    "Claude Code", "MCPs", "AI agent workflows", "OpenClaw",
  ],
};

export const STATS = [
  { label: "Years shipping", value: "8+", kana: "年" },
  { label: "Projects delivered", value: "6", kana: "件" },
  { label: "Papers co-authored", value: "1", kana: "論文", sub: "ADIPEC 2025" },
  { label: "Based in", value: "Bogotá", kana: "拠点", sub: "GMT-5 · remote-first" },
];
