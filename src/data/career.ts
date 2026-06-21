/**
 * Single source of truth for portfolio content.
 *
 * Derived and CONFIDENTIALITY-SANITIZED from the personal career vault
 * (PersonalVault / Career OS). Every public claim on the site must trace back
 * to a fact in this file. Do not add claims that aren't backed by the vault,
 * and do not reintroduce internal client/employer metrics that were removed
 * during sanitization. See CLAUDE.local.md for the confidentiality rule.
 *
 * Lead positioning: Geospatial Data Engineer.
 */

export interface SocialLink {
  type: 'linkedin' | 'github' | 'email' | string;
  handle: string;
  url: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface PositioningLane {
  key: 'geospatial' | 'dataEngineering' | 'productOperator' | 'aiAutomation' | string;
  label: string;
  blurb: string;
}

export interface Identity {
  fullName: string;
  displayName: string;
  headline: string;
  /** Short, role-led tagline for hero/meta (derived, ≤ ~155 chars). */
  tagline: string;
  location: string;
  remote: boolean;
  /** Public contact email. */
  email: string;
  languages: Language[];
  socials: SocialLink[];
  positioning: {
    lead: string;
    lanes: PositioningLane[];
  };
  /** One narrative paragraph per career lane. */
  summaries: {
    geospatial: string;
    dataEngineering: string;
    productOperator: string;
    aiAutomation: string;
  };
}

export interface ExperienceRole {
  company: string;
  role: string;
  /** ISO-ish "YYYY-MM" or "YYYY". */
  start: string;
  end: string;
  current: boolean;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  stack: string[];
  clients: string[];
}

export interface Achievement {
  id: string;
  company: string;
  title: string;
  impact: string;
  metrics: string[];
  stack: string[];
  tags: string[];
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  start: string;
  end: string;
  gpa?: string;
  honors?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  status: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  identifier: string;
  role: string;
  url?: string;
}

export interface KeywordCluster {
  lane: string;
  keywords: string[];
}

export interface TargetRole {
  role: string;
  keyTerms: string[];
}

export interface Keywords {
  primaryCluster: string[];
  secondaryClusters: KeywordCluster[];
  entities: string[];
  targetRoles: TargetRole[];
  notes: string;
}

export interface ProjectMapEntry {
  /** Slug of a repo project under src/content/projects. */
  repoSlug: string;
  /** Source achievement id, when this project maps to real work experience. */
  achievementId?: string;
  /** False = personal/side project with no enterprise-achievement provenance. */
  matched: boolean;
  oneLiner: string;
}

export interface Career {
  identity: Identity;
  experience: ExperienceRole[];
  achievements: Achievement[];
  skills: { categories: SkillCategory[] };
  softSkills: string[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
  keywords: Keywords;
  projectMap: ProjectMapEntry[];
}

export const career: Career = {
  identity: {
    fullName: 'Kevin Henao López',
    displayName: 'Kevin Henao',
    headline:
      'Geospatial Data Engineer | Geoscientist | Python · AWS · GIS · Scientific Software · AI Workflows',
    tagline:
      'Geospatial data engineer and geoscientist building spatial data pipelines, GIS systems, and AWS workflows. Bogotá, remote-first.',
    location: 'Bogotá, Colombia',
    remote: true,
    // Public contact email. Confirm before launch (was previously hello@niveku.dev).
    email: 'kevin.henao@gmail.com',
    languages: [
      { language: 'Spanish', level: 'Native' },
      { language: 'English', level: 'Full Professional Proficiency (C2, EF SET certified)' },
      { language: 'Japanese', level: 'Elementary' },
    ],
    socials: [
      { type: 'linkedin', handle: 'kevinhenaolopez', url: 'https://www.linkedin.com/in/kevinhenaolopez' },
      { type: 'github', handle: 'niveku', url: 'https://github.com/niveku' },
    ],
    positioning: {
      lead: 'Geospatial Data Engineer',
      lanes: [
        {
          key: 'geospatial',
          label: 'Geospatial Data Engineering',
          blurb:
            'Geosciences-trained data engineer who keeps the spatial lens in front: GIS systems, ArcGIS dashboards, and Python/Dash apps built on a geoscience foundation.',
        },
        {
          key: 'dataEngineering',
          label: 'Data Engineering',
          blurb:
            'Production AWS pipelines (Lambda, Glue, Step Functions, Textract) and document-AI workflows for CPG, retail, and government clients.',
        },
        {
          key: 'productOperator',
          label: 'Technical Product Operator',
          blurb:
            'Hybrid product owner and engineer who holds scope, code, and stakeholders at once in early-stage, ambiguous environments.',
        },
        {
          key: 'aiAutomation',
          label: 'AI Workflow & Automation',
          blurb:
            'Building AI/LLM workflow tooling on the Claude/Anthropic stack: agents, MCPs, and personal automation.',
        },
      ],
    },
    summaries: {
      geospatial:
        'Geospatial data engineer and geoscientist with 8+ years building spatial systems end to end, from field data and resource models to ArcGIS Online dashboards, Python/Dash applications, and AWS data pipelines. He pairs a BSc in Geosciences with GIS depth across QGIS, the ArcGIS suite, GeoPandas, PostGIS, and GDAL, and has shipped geospatial work used by mining, government, and operations teams. The record includes the first 3D geological model of the Coscuez emerald deposit and, for the Colombian Maritime Authority (DIMAR), a Survey123 + GeoPandas COVID monitoring workflow, ArcGIS web apps and dashboards, and the open-source ViENOS oceanographic ENSO monitoring dashboard. He turns environmental, geological, and spatial data into decision-oriented outputs for technical, institutional, and community-facing audiences, and takes the architect role in practice when scope is ambiguous.',
      dataEngineering:
        'Data engineer with 8+ years building production data systems on AWS (Lambda, Glue, Step Functions, Textract, Redshift, Athena, DynamoDB) for clients in CPG, retail, and government. At Arkho he led architecture and implementation of the AB InBev invoice-PDF pipeline across 30–40 supplier formats (Textract + Lambda + Step Functions), built the Casaideas SAP-to-cloud pipelines (Glue, PySpark, S3) with traceable lineage and end-to-end observability, contributed to Coca-Cola Chile distribution ETL under quality-gated DevOps, and deployed projects to AWS with CDK and infrastructure-as-code practices, delivering 15+ ETLs across 4 CDK projects and 20+ Redshift reports. He handles document AI and pipeline orchestration, takes the architect role when requirements are vague, and brings a geosciences background that fits spatial and scientific data domains.',
      productOperator:
        'Hybrid product owner and Python/AWS engineer who holds scope, code, and stakeholders at once. As Geoscience Software Specialist at Imaged Reality (UK, remote), he leads technical product delivery for enterprise oil and gas clients on the Stratbox platform: running product onboardings, advancing pilots to active accounts, designing the Jira bug-reporting process, and bridging product, QA, and client communication by translating geoscience workflows into specs and engineering priorities. Earlier, as a data engineer at Arkho, he took the architect role in practice on AB InBev and Coca-Cola data initiatives. He works well in early-stage and ambiguous environments, turning unclear requirements into testable designs and framing engineering tradeoffs in terms stakeholders can act on.',
      aiAutomation:
        'Builds AI and LLM workflow tooling on the side: agents, MCPs, and personal automation on the Claude/Anthropic stack, extending a track record of turning ambiguous problems into working systems. The practice sits alongside his production engineering work, which includes a supervised Random Forest facies classification pipeline and an extension to the Stratbox Python API for depth-referenced data extraction. He is co-author of "Automating Core Data Integration: Insights from the Volve Field Case Study" (SPE OnePetro, ADIPEC 2025).',
    },
  },

  experience: [
    {
      company: 'Imaged Reality Ltd',
      role: 'Geoscience Software Specialist',
      start: '2024-07',
      end: 'Present',
      current: true,
      location: 'United Kingdom (remote from Colombia)',
      type: 'Full-time',
      summary:
        'Geoscience software specialist at a UK-based company building the Stratbox product suite for geological data interpretation across core analysis, outcrop modeling, and digital field trips. Role spans client-facing work, QA/product ownership, and Python development (formal working title: Product Owner | Python Developer).',
      highlights: [
        'Extended the Stratbox Python API with a depth-referenced data extraction method, and built and optimized a supervised Random Forest facies classification pipeline',
        'Designed and ran a structured Jira bug-reporting and triage process',
        'Co-authored an SPE paper at ADIPEC 2025: "Automating Core Data Integration: Insights from the Volve Field Case Study" (Borya, A., Henao, K., Ruiz-Graham, C.; SPE OnePetro D041S138R004)',
        'Ran ~20 product onboardings and supported pilots advancing to active accounts',
        'Supported simultaneous enterprise accounts in the oil & gas sector',
        'Used GIS/spatial analysis throughout product support, analysis, and product design',
      ],
      stack: ['Python', 'JavaScript', 'C#', 'Unity', 'scikit-learn', 'pandas', 'numpy', 'AWS', 'PostgreSQL', 'QGIS', 'Jira', 'Confluence', 'Git'],
      clients: [],
    },
    {
      company: 'Arkho',
      role: 'Data Engineer',
      start: '2021-12',
      end: '2024-07',
      current: false,
      location: 'Remote (Chile)',
      type: 'Full-time',
      summary:
        'Cloud data engineer at a Chilean technology consultancy, delivering end-to-end AWS data pipelines and warehouse flows to enterprise clients across retail, beverage/logistics, and document-processing use cases, with direct stakeholder communication and DevOps quality gates.',
      highlights: [
        'Built and optimized end-to-end AWS data pipelines for Casaideas, moving complex SAP retail data into cloud staging and warehouse layers to support inventory, sales, and stock analysis',
        'Designed raw, staging, and warehouse data flows using AWS Glue, PySpark, Athena, Redshift, and CloudWatch, improving traceability, monitoring, and downstream Power BI consumption',
        'Acted as the practical architect for an AB InBev invoice automation solution, processing wide-ranging supplier PDF formats using Textract, Lambda, Step Functions, SQS, and curated storage layers',
        'Contributed to Coca-Cola Chile data initiatives involving stock, logistics, and ingestion workflows under strict code-quality, security, coverage, and maintainability requirements',
        'Managed delivery workflows using GitHub Actions, AWS CDK, CloudFormation, and AWS CLI, supporting automated deployments and least-privilege IAM patterns',
        'Implemented benchmark- and cost-driven improvements across AWS workflows under enterprise constraints',
        'Delivered 15+ ETLs across 4 AWS CDK projects and 20+ Redshift reports under quality-gated DevOps (SonarQube, GitHub Actions)',
      ],
      stack: ['AWS', 'Python', 'PySpark', 'SQL', 'AWS Glue', 'Lambda', 'Step Functions', 'S3', 'Redshift', 'Athena', 'CloudWatch', 'Textract', 'SQS', 'GitHub Actions', 'AWS CDK', 'CloudFormation', 'AWS CLI', 'IAM', 'SonarQube', 'Power BI'],
      clients: ['Casaideas', 'AB InBev', 'Coca-Cola Chile'],
    },
    {
      company: 'Heinsohn Business Technology',
      role: 'Business Intelligence Analyst',
      start: '2021-11',
      end: '2021-12',
      current: false,
      location: 'Bogotá, Colombia (remote)',
      type: 'Project contract',
      summary:
        'Short project-based BI engagement (~1 month) building mining and electrical-power dashboards in a Colombian Ministry of Energy and Mines context.',
      highlights: [
        'Delivered Power BI dashboards plus custom JSON maps in QGIS for mining and electrical-power reporting',
        'Built mining and energy dashboards aimed at a Colombian Ministry of Energy and Mines context',
      ],
      stack: ['Power BI', 'DAX', 'SQL', 'QGIS', 'Python', 'Azure'],
      clients: [],
    },
    {
      company: 'Dirección General Marítima (DIMAR)',
      role: 'GIS Developer / Geoscientist',
      start: '2020-02',
      end: '2021-12',
      current: false,
      location: 'Bogotá, Colombia',
      type: 'Service contract (prestación de servicios)',
      summary:
        'Geospatial developer for a Colombian maritime government institution, building ArcGIS Online-heavy operational GIS solutions, web maps, and dashboards for institutional workflows and decision support.',
      highlights: [
        'Built web maps, dashboards, layers, and services using ArcGIS Online and ArcGIS Pro for operational institutional reporting',
        'Designed Survey123 workflows and delivered fast-turnaround GIS solutions for institutional areas',
        'Developed a COVID operational monitoring dashboard workflow',
        'Built Python + Dash + Plotly dashboards and supported GeoPandas-based cleaning and georeferencing',
        'Contributed XGBoost-based predictive species modeling in a university-linked research collaboration',
        'Supported oceanographic and Pacific expedition interpolation and environmental-impact mapping',
      ],
      stack: ['ArcGIS Online', 'ArcGIS Pro', 'Survey123', 'Python', 'GeoPandas', 'Dash', 'Plotly', 'XGBoost', 'ArcGIS SDK / JavaScript'],
      clients: [],
    },
    {
      company: 'Fura Gems (Coscuez S.A.)',
      role: 'Resource Geologist (Jr.)',
      start: '2018-02',
      end: '2019-10',
      current: false,
      location: 'Boyacá, Colombia',
      type: 'Full-time',
      summary:
        'Junior resource geologist progressing into geological data ownership, reporting, and geomodeling in a Colombian emerald mining context, bridging geoscience outputs to mine planning.',
      highlights: [
        'Owned geological information, reporting flows, and orebody/deposit boundary modeling',
        'Performed drilling, core logging, tunnel logging, and structural mapping, plus bulk sampling and geochemical/XRD-linked data flows',
        'Built and maintained final maps used for internal, investor, environmental, and mining-licensing reporting',
        'Co-authored the geosciences chapter of formal mining-plan documentation presented with external consultants for authority approval',
        'Contributed to early formal-company standardization efforts for Colombian emerald resource quantification',
        'Supported mine planning through geological model outputs',
      ],
      stack: ['QGIS', 'Leapfrog', 'Datamine', 'Surfer', 'Grapher', 'Strater'],
      clients: [],
    },
    {
      company: 'Fura de Colombia S.A.S.',
      role: 'Exploration Geologist (Jr.)',
      start: '2017-04',
      end: '2018-02',
      current: false,
      location: 'Boyacá, Colombia',
      type: 'Full-time',
      summary:
        'Junior exploration geologist doing field geology, mapping, drilling, core handling, and geological data organization in a gemstone/mining context.',
      highlights: [
        'Performed exploration geology and field geology work including mapping, drilling, and core handling',
        'Built foundations in geological data organization and curation',
        'Worked in an underground mining and exploration context with field rotation',
      ],
      stack: ['QGIS', 'Leapfrog', 'Datamine'],
      clients: [],
    },
    {
      company: 'Fura de Colombia S.A.S.',
      role: 'Geochemical Investigator (Internship)',
      start: '2016-08',
      end: '2016-12',
      current: false,
      location: 'Coscuez, Boyacá, Colombia',
      type: 'Internship',
      summary:
        'Pre-graduation geochemistry internship (5 months, onsite + field) that served as a bridge into later direct employment at Fura.',
      highlights: [
        'Completed a pre-graduation geochemistry internship onsite and in the field',
        'Gained early exposure that bridged into a later full-time geology role at Fura',
      ],
      stack: [],
      clients: [],
    },
  ],

  achievements: [
    {
      id: 'arkho-casaideas-sap-pipeline',
      company: 'Arkho',
      title: 'Casaideas — SAP-to-cloud data pipeline',
      impact:
        'Built and operated an SAP-to-cloud data pipeline delivering consistent, traceable inventory and stock data for retail client Casaideas.',
      metrics: [],
      stack: ['AWS Glue', 'PySpark', 'S3', 'SQL', 'Python'],
      tags: ['data-engineering', 'automation', 'aws', 'pyspark', 'client-facing-delivery'],
    },
    {
      id: 'fura-reporting-maps',
      company: 'Fura',
      title: 'Reporting & licensing map production',
      impact:
        'Owned end-to-end map production and the underlying GIS information base for mining, environmental, and licensing reports across the emerald-belt operations.',
      metrics: [],
      stack: ['QGIS', 'ArcGIS', 'Python'],
      tags: ['geospatial', 'gis-python', 'qgis', 'communication', 'client-facing-delivery'],
    },
    {
      id: 'fura-resource-modeling-3d',
      company: 'Fura',
      title: '3D geological model and resource estimation (Coscuez)',
      impact:
        "Built the first 3D geological model of the Coscuez emerald deposit for resource estimation, contributing to Fura's first formal Colombian emerald resource estimation.",
      metrics: ['~100 hours/year saved via Python automation of reporting'],
      stack: ['Leapfrog Geo', 'DATAMINE', 'QGIS', 'Python', 'SQLite', 'pandas', 'NumPy', 'matplotlib', 'xlwings'],
      tags: ['geospatial', 'geosciences', 'modeling', 'python', 'ownership-acting-architect'],
    },
    {
      id: 'fura-geochemistry-internship-2016',
      company: 'Fura',
      title: 'Colombia-Type emerald geochemistry mapping (Internship 2016)',
      impact:
        '5-month research internship producing Python-assisted geochemical-marker distribution maps that helped delineate prospective zones of the eastern emerald belt.',
      metrics: ['5-month internship (Aug–Dec 2016)'],
      stack: ['Python', 'Golden Software Surfer', 'Golden Software Grapher', 'Golden Software Strater', 'QGIS', 'ArcGIS ArcMap', 'Google Earth', 'Office'],
      tags: ['geosciences', 'geospatial', 'research', 'scientific-research', 'python', 'qgis'],
    },
    {
      id: 'arkho-abinbev-invoice-architect',
      company: 'Arkho',
      title: 'AB InBev — Invoice PDF automation (acting architect)',
      impact:
        'Led architecture and implementation of an invoice-PDF ingestion pipeline normalizing 30–40 supplier formats using AWS Textract, Lambda, and Step Functions.',
      metrics: ['30–40 supplier formats normalized'],
      stack: ['Python', 'AWS Lambda', 'Step Functions', 'Textract', 'SQS', 'S3', 'DynamoDB', 'CloudWatch'],
      tags: ['data-engineering', 'ai-workflow', 'automation', 'aws', 'python', 'ownership-acting-architect'],
    },
    {
      id: 'arkho-cocacola-distribution',
      company: 'Arkho',
      title: 'Coca-Cola Chile — Distribution data flow',
      impact:
        'Contributed to an AWS-based distribution and stock data flow for Coca-Cola Chile, part of a portfolio of production ETLs delivered under quality-gated DevOps.',
      metrics: ['15+ ETLs across 4 CDK projects', '20+ Redshift reports'],
      stack: ['AWS', 'Python', 'SQL', 'SonarQube', 'AWS CDK', 'Redshift'],
      tags: ['data-engineering', 'automation', 'aws', 'client-facing-delivery'],
    },
    {
      id: 'imaged-reality-python-api',
      company: 'Imaged Reality',
      title: 'Python API extension & Random Forest facies pipeline',
      impact:
        'Extended the Stratbox Python API with a depth-referenced data extraction method and built/optimized a supervised Random Forest pipeline for geological facies classification from borehole images, which became the technical foundation for an SPE paper.',
      metrics: [],
      stack: ['Python', 'JavaScript', 'scikit-learn', 'pandas', 'NumPy'],
      tags: ['data-engineering', 'ai-workflow', 'geoscience', 'python', 'scikit-learn', 'ownership'],
    },
    {
      id: 'imaged-reality-jira-process',
      company: 'Imaged Reality',
      title: 'Jira bug reporting process & QA ownership',
      impact:
        'Designed and ran a structured Jira bug-reporting and triage process, taking organic ownership of the QA function.',
      metrics: [],
      stack: ['Jira', 'Confluence', 'AI tools (ChatGPT, Claude)'],
      tags: ['product', 'technical-operations', 'ownership', 'proactivity', 'process-improvement', 'documentation'],
    },
    {
      id: 'imaged-reality-adipec-2025',
      company: 'Imaged Reality',
      title: 'SPE co-authorship at ADIPEC 2025',
      impact:
        'Co-authored an SPE paper presented at ADIPEC 2025 applying a Random Forest classifier to automate lithological descriptions from borehole core images (Volve Field), with the ML pipeline as its technical foundation.',
      metrics: ['SPE OnePetro identifier D041S138R004'],
      stack: ['Python', 'scikit-learn', 'core image analysis'],
      tags: ['ai-workflow', 'geoscience', 'data-engineering', 'publication-spe', 'technical-depth', 'collaboration'],
    },
    {
      id: 'imaged-reality-product-owner',
      company: 'Imaged Reality',
      title: 'Geoscience Software Specialist (current role)',
      impact:
        'Hybrid geoscience software specialist bridging enterprise oil & gas clients with product and development teams, combining geological domain expertise with software development skills.',
      metrics: ['July 2024–present', '~20 product onboardings'],
      stack: ['Python', 'SQL', 'PostgreSQL', 'JavaScript', 'Jira', 'Confluence', 'QGIS'],
      tags: ['product', 'technical-operations', 'geoscience', 'aws', 'python', 'ownership', 'client-facing-delivery', 'cross-functional-coordination'],
    },
    {
      id: 'dimar-pacific-mapping',
      company: 'Dimar',
      title: 'Pacific expedition environmental mapping',
      impact:
        'Produced interpolation-based environmental impact maps for Pacific expeditions tracking mangrove and river-mouth conditions, translating field measurements into outputs usable by both researchers and local communities.',
      metrics: [],
      stack: ['QGIS', 'ArcGIS Pro', 'Python', 'GeoPandas'],
      tags: ['geospatial', 'gis-python', 'qgis', 'arcgis', 'communication', 'client-facing-delivery'],
    },
    {
      id: 'dimar-covid-dashboard',
      company: 'Dimar',
      title: 'COVID geospatial monitoring workflow',
      impact:
        'Designed and shipped an end-to-end COVID geospatial monitoring workflow surfacing operational status for institutional planning during the pandemic.',
      metrics: [],
      stack: ['ArcGIS Online', 'Survey123', 'GeoPandas', 'Python', 'dashboards'],
      tags: ['geospatial', 'gis-python', 'dashboards', 'arcgis', 'ownership-acting-architect', 'client-facing-delivery'],
    },
    {
      id: 'heinsohn-mining-energy-bi',
      company: 'Heinsohn',
      title: 'Mining & energy Power BI dashboards (Ministry of Energy and Mines context)',
      impact:
        'Delivered Power BI dashboards and custom JSON maps for a Colombian Ministry of Energy and Mines context, blending mining, energy, and spatial information for decision-makers.',
      metrics: [],
      stack: ['Power BI', 'DAX', 'SQL', 'QGIS', 'Python', 'Azure'],
      tags: ['bi', 'geospatial', 'power-bi', 'communication', 'technical-to-business-bridging'],
    },
    {
      id: 'dimar-oceanographic-dashboard',
      company: 'Dimar',
      title: 'Oceanographic Dash dashboard (El Niño — ViENOS)',
      impact:
        "Designed and built ViENOS, an open-source multi-page Python/Dash oceanographic monitoring platform for El Niño / La Niña conditions on Colombia's Pacific, reaching production-ready state.",
      metrics: ['public MIT-licensed source code'],
      stack: ['Python', 'Dash', 'Plotly', 'Flask', 'pandas', 'NumPy', 'pyodbc', 'SQL Server', 'GeoPandas', 'ArcGIS Experience Builder', 'CSS', 'Gunicorn'],
      tags: ['geospatial', 'gis-python', 'dashboards', 'python', 'ownership-acting-architect', 'open-source'],
    },
  ],

  skills: {
    categories: [
      { name: 'Languages (Programming)', items: ['Python', 'SQL', 'JavaScript (basic)', 'Java (basic)'] },
      {
        name: 'Python / Data',
        items: ['pandas', 'NumPy', 'GeoPandas', 'scikit-learn (Random Forest, supervised classification)', 'PySpark', 'Dash', 'Plotly', 'DuckDB', 'ETL / data processing', 'data analysis and visualization', 'Parquet / CSV processing'],
      },
      {
        name: 'Cloud / AWS',
        items: ['AWS Glue', 'AWS Lambda', 'AWS Step Functions', 'AWS CDK', 'AWS S3', 'AWS IAM', 'AWS CloudWatch', 'AWS Redshift', 'AWS Athena', 'AWS DynamoDB', 'AWS SQS', 'AWS SNS', 'AWS EventBridge', 'AWS Cognito', 'AWS RDS / PostgreSQL', 'AWS Lightsail', 'AWS CloudFormation', 'AWS CLI', 'AWS Textract'],
      },
      {
        name: 'Data Engineering',
        items: ['ETL design', 'Medallion Architecture (RAW / Silver / Gold)', 'Star Schema / dimensional modeling', 'data modeling', 'performance tuning', 'document AI (Textract)'],
      },
      {
        name: 'GIS / Geospatial',
        items: ['QGIS', 'ArcGIS Online', 'ArcGIS Pro', 'ArcGIS API', 'Survey123', 'GDAL', 'Leapfrog Geo', 'DATAMINE', 'spatial analysis', 'geospatial data handling', 'geoscience domain knowledge'],
      },
      { name: 'BI / Analytics', items: ['Power BI', 'DAX', 'dashboards (Power BI, Dash)'] },
      { name: 'DevOps / Dev Tools', items: ['Git', 'Docker', 'GitHub Actions (CI/CD)', 'SonarQube (quality gates)', 'Postman', 'DBeaver', 'Jupyter'] },
      {
        name: 'Product / Workflow',
        items: ['Jira (process design + intensive use)', 'Confluence', 'Monday.com', 'agile / scrum', 'QA / testing workflows', 'requirements clarification', 'technical documentation', 'onboarding and demo support', 'issue triage and follow-up'],
      },
      { name: 'AI Tooling', items: ['Claude', 'Claude Code', 'ChatGPT', 'AI agents', 'MCPs', 'Obsidian (PKM / knowledge systems)'] },
      { name: 'Human Languages', items: ['Spanish (native)', 'English (Full Professional Proficiency, C2, certified via EF SET)', 'Japanese (basic)'] },
    ],
  },

  softSkills: [
    'Ownership / acting-architect: drives architecture decisions and end-to-end delivery without holding the formal title',
    'Proactivity: designs processes and solutions before being asked',
    'Ambiguity handling: operates well when requirements are unclear or data is messy; iterates via clarification loops',
    'Technical-to-business bridging: frames engineering tradeoffs (cost, risk, time-to-value) in terms stakeholders can act on',
    'Client-facing delivery: owns client relationships through scoping, demos, and incident resolution',
    'Communication: translates complex technical/scientific information into outputs the right audience can act on',
    'Cross-cultural async collaboration: Colombia / Chile / UK working norms, written-first, distributed-by-default',
  ],

  education: [
    {
      degree: 'BSc Geosciences',
      institution: 'Universidad de los Andes, Bogotá',
      start: '2013',
      end: '2017',
      gpa: '4.12 / 5',
      honors: ['"Quiero Estudiar" scholarship (academic excellence)'],
    },
    {
      degree: 'Data Science (DS4A / Colombia 2.0)',
      institution: 'Correlation One',
      start: '2020',
      end: '2020',
      honors: ['Graduated with honors (375 hours)'],
    },
  ],

  certifications: [
    { name: 'AWS Machine Learning Foundations', issuer: 'Udacity', year: '2021', status: 'confirmed' },
    { name: 'Data Science (DS4A / Colombia 2.0)', issuer: 'Correlation One', year: '2020', status: 'confirmed' },
    { name: 'Web Development with ArcGIS API for JavaScript', issuer: 'ESRI Colombia', year: '2020', status: 'confirmed' },
    { name: 'GIS + Python', issuer: 'Uniandinos', year: '2019', status: 'confirmed' },
    { name: 'DATAMINE Studio 5D + EPS / DATAMINE EM', issuer: 'DATAMINE', year: '2018', status: 'confirmed' },
    { name: 'CPG (Colombian Professional Geology License)', issuer: 'Colombia', year: '2017–present', status: 'confirmed' },
    { name: 'ACGGP Member (Asociación Colombiana de Geólogos y Geofísicos del Petróleo)', issuer: 'ACGGP', year: '2019–present', status: 'confirmed' },
  ],

  publications: [
    {
      title: 'Automating Core Data Integration: Insights from the Volve Field Case Study',
      venue: 'ADIPEC 2025 (SPE OnePetro)',
      year: '2025',
      identifier: 'SPE D041S138R004',
      role: 'Co-author',
      url: '',
    },
  ],

  keywords: {
    primaryCluster: ['geospatial data engineer', 'spatial data engineer', 'geo data engineer', 'geospatial python engineer', 'PostGIS', 'GeoPandas', 'spatial data pipelines', 'geospatial ETL', 'GIS', 'QGIS', 'GDAL', 'raster', 'vector', 'remote sensing', 'earth observation', 'Python', 'AWS', 'data pipelines', 'climate tech', 'spatial analysis', 'geospatial data formats', 'interoperability'],
    secondaryClusters: [
      { lane: 'Data Engineering (geospatial edge)', keywords: ['data engineer', 'data engineer geospatial', 'geospatial analytics engineer', 'platform-minded data engineer', 'Python', 'SQL', 'ETL', 'PySpark', 'AWS Glue', 'Redshift', 'Parquet', 'Medallion architecture', 'star schema', 'data modeling', 'data warehouse', 'cloud data pipelines', 'AWS CDK', 'CloudFormation', 'GitHub Actions', 'CI/CD', 'Docker'] },
      { lane: 'AI Workflow / Automation Engineer', keywords: ['AI workflow engineer', 'AI engineer', 'LLM workflow engineer', 'AI automation engineer', 'LLM', 'agent', 'agentic', 'document AI', 'AWS Textract', 'workflow orchestration', 'AWS Step Functions', 'prompt engineering', 'MCP', 'Claude Code', 'automation', 'natural-language GIS', 'query-to-map', 'geospatial LLM'] },
      { lane: 'Technical Product Operator', keywords: ['technical product owner', 'technical PM', 'product engineer', 'founding engineer', 'product operator', 'cross-functional', 'agile', 'stakeholder management', 'scoping', 'delivery', 'Python', 'AWS', 'client-facing delivery', 'early-stage startup', 'seed Series A'] },
      { lane: 'GIS Python Developer', keywords: ['GIS developer', 'GIS Python developer', 'geospatial developer', 'ArcGIS', 'ArcGIS Online', 'ArcGIS Pro', 'ArcGIS API', 'Survey123', 'ESRI', 'Dash', 'Plotly', 'Leaflet', 'GeoPandas', 'web maps', 'geospatial dashboards', 'spatial analysis', 'Python'] },
    ],
    entities: ['PostGIS', 'QGIS', 'GDAL', 'GeoPandas', 'ArcGIS', 'ArcGIS Online', 'ArcGIS Pro', 'ArcGIS API', 'Survey123', 'ESRI', 'Leaflet', 'Dash', 'Plotly', 'AWS', 'AWS Glue', 'AWS Redshift', 'AWS CDK', 'AWS CloudFormation', 'AWS Textract', 'AWS Step Functions', 'PySpark', 'Parquet', 'Python', 'SQL', 'Docker', 'Git', 'GitHub Actions', 'Random Forest', 'Claude Code', 'MCP', 'Imaged Reality', 'Arkho', 'DIMAR', 'Fura', 'Heinsohn', 'AB InBev', 'Coca-Cola', 'Casaideas', 'SPE ADIPEC 2025'],
    targetRoles: [
      { role: 'Geospatial Data Engineer (primary lead)', keyTerms: ['geospatial data engineer', 'spatial data engineer', 'geospatial python engineer', 'PostGIS', 'GeoPandas', 'QGIS', 'GDAL', 'Python', 'AWS', 'spatial data pipelines', 'geospatial ETL', 'raster', 'vector', 'earth observation', 'remote sensing', 'climate tech'] },
      { role: 'Data Engineer (Geospatial / GIS)', keyTerms: ['data engineer geospatial', 'geospatial analytics engineer', 'Python', 'SQL', 'PySpark', 'AWS Glue', 'Redshift', 'Parquet', 'Medallion architecture', 'star schema', 'ETL', 'cloud data pipelines', 'CI/CD'] },
      { role: 'AI Workflow Engineer', keyTerms: ['AI workflow engineer', 'AI automation engineer', 'LLM', 'agent', 'document AI', 'AWS Textract', 'AWS Step Functions', 'prompt engineering', 'MCP', 'workflow orchestration', 'Python'] },
      { role: 'Technical Product Operator', keyTerms: ['technical product owner', 'technical PM', 'founding engineer', 'product engineer', 'cross-functional', 'agile', 'stakeholder management', 'scoping', 'delivery', 'Python', 'AWS'] },
      { role: 'GIS Python Developer', keyTerms: ['GIS Python developer', 'geospatial developer', 'ArcGIS', 'ArcGIS Pro', 'ArcGIS Online', 'ESRI', 'Survey123', 'Dash', 'Plotly', 'Leaflet', 'GeoPandas', 'geospatial dashboards', 'spatial analysis', 'Python'] },
    ],
    notes:
      "Positioning hierarchy: Geospatial Data Engineer is the canonical PRIMARY lead. Recommended public titles: PRIMARY = Geospatial Data Engineer, Geospatial Python Engineer; SECONDARY = Data Engineer (Geospatial/GIS), Geospatial Analytics Engineer. Differentiating angle = geoscience + cloud-data-engineering hybrid. Honest gaps to avoid overclaiming: RAG, Databricks, Terraform (uses CDK + CloudFormation), AWS Bedrock — no hands-on. AI/agentic exposure is private practice (Claude Code + MCP daily), not a shipped enterprise AI feature; side-project repos are personal portfolio work (matched=false). All facts at LinkedIn-public granularity; no internal client metrics, account counts, or product-defect volumes published.",
  },

  projectMap: [
    { repoSlug: 'abinbev-invoice-automation', achievementId: 'arkho-abinbev-invoice-architect', matched: true, oneLiner: 'Acting architect on a serverless AWS pipeline (Textract, Lambda, Step Functions) that normalized invoice PDFs from 30–40 supplier formats into structured data for AB InBev.' },
    { repoSlug: 'casaideas-sap-pipeline', achievementId: 'arkho-casaideas-sap-pipeline', matched: true, oneLiner: 'Built key stages of an end-to-end SAP-to-cloud pipeline (Glue, PySpark, S3) migrating daily SAP extracts into a traceable analytics layer for retailer Casaideas.' },
    { repoSlug: 'cocacola-distribution', achievementId: 'arkho-cocacola-distribution', matched: true, oneLiner: "Data engineering contributor on Coca-Cola Chile's distribution and logistics ETL flows, delivered under quality-gated DevOps (SonarQube, GitHub Actions) with direct client interaction." },
    { repoSlug: 'dimar-covid-geospatial', achievementId: 'dimar-covid-dashboard', matched: true, oneLiner: "Designed and shipped an end-to-end COVID geospatial monitoring workflow (ArcGIS Online, Survey123, GeoPandas) for Colombia's national maritime authority DIMAR." },
    { repoSlug: 'fura-reporting-maps', achievementId: 'fura-reporting-maps', matched: true, oneLiner: "Owned geospatial information production and audience-calibrated cartographic reporting (QGIS, Python) for Fura's emerald operations: investor, environmental, and licensing maps." },
    { repoSlug: 'housing-simulator', matched: false, oneLiner: 'Personal Streamlit app comparing rent-vs-buy housing scenarios for the Colombian market with ROI metrics; no matching enterprise achievement in source data.' },
    { repoSlug: 'openclaw', matched: false, oneLiner: 'Personal AI automation system built on Claude Code, MCPs, and custom skills; relates to the aiAutomation positioning but has no discrete source achievement.' },
    { repoSlug: 'research-first', matched: false, oneLiner: 'Personal Claude Code skill that forces agents to find existing tools and libraries before building from scratch; no matching enterprise achievement in source data.' },
    { repoSlug: 'ritual-qr', matched: false, oneLiner: 'Personal duplex fold-and-backlight QR puzzle generator (Pillow, qrcode, ReportLab, OpenCV); no matching enterprise achievement in source data.' },
    { repoSlug: 'upscale-amd-vulkan', matched: false, oneLiner: 'Personal single-file Python CLI upscaling AI images for print on AMD GPUs via Real-ESRGAN NCNN + Vulkan; no matching enterprise achievement in source data.' },
  ],
};

export default career;
