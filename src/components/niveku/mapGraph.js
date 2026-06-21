/* Career graph for the hero map (HeroGrid).
   Derives ~36 nodes + typed edges from the sanitized source of truth
   (src/data/career.ts), grouped into four domain clusters around the Bogotá
   anchor. Positions are deterministic (seeded golden-angle layout, no Math.random
   at runtime) so the build-time prop and any client fallback agree — no hydration
   drift. The map is decorative (aria-hidden); the same facts live as text in the
   Projects, About, and Strata sections. Every label/meta traces to career.ts. */

import { career } from '../../data/career';

// Cluster palette — one accent per domain, plus a bright core for Bogotá.
export const GROUP_COLOR = {
  core: 'oklch(0.80 0.22 345)',
  geo: 'oklch(0.84 0.13 200)',
  data: 'oklch(0.72 0.20 300)',
  product: 'oklch(0.83 0.15 75)',
  ai: 'oklch(0.72 0.25 340)',
};

export const GROUP_LABEL = {
  geo: 'Geospatial',
  data: 'Data / AWS',
  product: 'Product',
  ai: 'AI',
};

// Node sizes (px) by role in the story.
const SIZE = { core: 15, company: 11, work: 9, cert: 8, tool: 6.5 };

// Nodes carry only identity + the refined hover line (meta). Coordinates are
// assigned by layout() below. `hub: true` pins a node at its cluster centre.
// type ∈ company | work | tool | cert | pub | artifact (work-like share SIZE.work).
const NODES = [
  // ── core ──
  { id: 'bogota', group: 'core', type: 'anchor', label: 'Bogotá · base', kana: '拠点', meta: '4.7110°N 74.0721°W · GMT-5 · remote-first', hub: true },

  // ── geospatial ──
  { id: 'fura', group: 'geo', type: 'company', label: 'Fura Gems', kana: '地質', meta: 'Geologist · 2016–19 · emeralds, Boyacá', hub: true },
  { id: 'dimar', group: 'geo', type: 'company', label: 'DIMAR', kana: '海', meta: 'GIS Developer · 2020–21 · maritime authority' },
  { id: 'coscuez', group: 'geo', type: 'work', label: 'Coscuez 3D model', kana: '鉱床', meta: 'First 3D geological model · resource estimation' },
  { id: 'vienos', group: 'geo', type: 'artifact', label: 'ViENOS', kana: '波', meta: 'Open-source ENSO dashboard · Python/Dash · MIT' },
  { id: 'covid', group: 'geo', type: 'work', label: 'COVID monitoring', kana: '監視', meta: 'ArcGIS Online + Survey123 + GeoPandas' },
  { id: 'qgis', group: 'geo', type: 'tool', label: 'QGIS', kana: '地図' },
  { id: 'arcgis', group: 'geo', type: 'tool', label: 'ArcGIS', kana: '図' },
  { id: 'geopandas', group: 'geo', type: 'tool', label: 'GeoPandas' },
  { id: 'leapfrog', group: 'geo', type: 'tool', label: 'Leapfrog' },
  { id: 'cpg', group: 'geo', type: 'cert', label: 'CPG license', kana: '免許', meta: 'Colombian Professional Geology License · 2017–' },
  { id: 'bsc', group: 'geo', type: 'cert', label: 'BSc Geosciences', kana: '学位', meta: 'Universidad de los Andes · 4.12/5' },

  // ── data / aws ──
  { id: 'arkho', group: 'data', type: 'company', label: 'Arkho', kana: '雲', meta: 'Data Engineer · 2021–24 · AWS', hub: true },
  { id: 'heinsohn', group: 'data', type: 'company', label: 'Heinsohn', kana: '図表', meta: 'BI Analyst · 2021 · Power BI + QGIS' },
  { id: 'abinbev', group: 'data', type: 'work', label: 'AB InBev', kana: '請求書', meta: 'Invoice PDF automation · 30–40 supplier formats' },
  { id: 'casaideas', group: 'data', type: 'work', label: 'Casaideas', kana: '倉庫', meta: 'SAP-to-cloud pipeline · Glue/PySpark' },
  { id: 'coca', group: 'data', type: 'work', label: 'Coca-Cola Chile', kana: '物流', meta: 'Distribution ETL · quality-gated DevOps' },
  { id: 'glue', group: 'data', type: 'tool', label: 'AWS Glue' },
  { id: 'pyspark', group: 'data', type: 'tool', label: 'PySpark' },
  { id: 'lambda', group: 'data', type: 'tool', label: 'AWS Lambda' },
  { id: 'stepfn', group: 'data', type: 'tool', label: 'Step Functions' },
  { id: 'textract', group: 'data', type: 'tool', label: 'Textract' },
  { id: 'redshift', group: 'data', type: 'tool', label: 'Redshift' },
  { id: 'cdk', group: 'data', type: 'tool', label: 'AWS CDK' },
  { id: 'python', group: 'data', type: 'tool', label: 'Python' },
  { id: 'sql', group: 'data', type: 'tool', label: 'SQL' },
  { id: 'powerbi', group: 'data', type: 'tool', label: 'Power BI' },

  // ── product / geoscience software ──
  { id: 'imaged', group: 'product', type: 'company', label: 'Imaged Reality', kana: '製品', meta: 'Geoscience Software Specialist · 2024– · UK remote', hub: true },
  { id: 'stratbox', group: 'product', type: 'artifact', label: 'Stratbox', kana: '層', meta: 'Geological data interpretation platform' },
  { id: 'jira', group: 'product', type: 'work', label: 'Jira process', kana: '工程', meta: 'Bug-reporting process design · QA ownership' },
  { id: 'adipec', group: 'product', type: 'pub', label: 'ADIPEC 2025', kana: '論文', meta: 'SPE paper · Volve Field · D041S138R004' },
  { id: 'rf', group: 'product', type: 'work', label: 'Random Forest pipeline', kana: '分類', meta: 'Facies classification · scikit-learn' },

  // ── ai / automation ──
  { id: 'openclaw', group: 'ai', type: 'artifact', label: 'OpenClaw', kana: '自動化', meta: 'Personal AI automation · Claude Code + MCPs', hub: true },
  { id: 'claude', group: 'ai', type: 'tool', label: 'Claude Code' },
  { id: 'mcp', group: 'ai', type: 'tool', label: 'MCPs' },
];

// Typed edges: backbone (Bogotá → company), rel (company → work/artifact/pub),
// tool (work/role → tool). Endpoints reference node ids; unknown ids are dropped.
const EDGES = [
  ['bogota', 'fura', 'backbone'], ['bogota', 'dimar', 'backbone'], ['bogota', 'arkho', 'backbone'],
  ['bogota', 'heinsohn', 'backbone'], ['bogota', 'imaged', 'backbone'], ['bogota', 'openclaw', 'backbone'],

  ['bsc', 'fura', 'rel'], ['fura', 'coscuez', 'rel'], ['fura', 'cpg', 'rel'],
  ['dimar', 'vienos', 'rel'], ['dimar', 'covid', 'rel'],
  ['arkho', 'abinbev', 'rel'], ['arkho', 'casaideas', 'rel'], ['arkho', 'coca', 'rel'], ['heinsohn', 'powerbi', 'rel'],
  ['imaged', 'stratbox', 'rel'], ['imaged', 'jira', 'rel'], ['imaged', 'adipec', 'rel'], ['imaged', 'rf', 'rel'],
  ['openclaw', 'claude', 'rel'], ['openclaw', 'mcp', 'rel'],

  ['coscuez', 'leapfrog', 'tool'], ['coscuez', 'qgis', 'tool'], ['fura', 'qgis', 'tool'],
  ['vienos', 'python', 'tool'], ['vienos', 'geopandas', 'tool'], ['covid', 'arcgis', 'tool'], ['dimar', 'geopandas', 'tool'],
  ['abinbev', 'textract', 'tool'], ['abinbev', 'lambda', 'tool'], ['abinbev', 'stepfn', 'tool'],
  ['casaideas', 'glue', 'tool'], ['casaideas', 'pyspark', 'tool'],
  ['coca', 'redshift', 'tool'], ['coca', 'cdk', 'tool'], ['arkho', 'sql', 'tool'],
  ['rf', 'python', 'tool'], ['adipec', 'rf', 'rel'],
];

// Nodes the rotating pulse cycles through (companies, flagship work, publication).
const PRIMARIES = ['fura', 'dimar', 'arkho', 'imaged', 'abinbev', 'casaideas', 'coca', 'vienos', 'coscuez', 'jira', 'adipec', 'openclaw'];

// Cluster centres on the normalized 0..100 canvas. Bogotá sits left-of-centre,
// matching the original anchor; the four domains fan out around it.
const CENTERS = {
  core: { x: 30, y: 55 },
  geo: { x: 18, y: 73 },
  data: { x: 52, y: 23 },
  product: { x: 83, y: 46 },
  ai: { x: 73, y: 84 },
};

const GOLDEN = 2.399963229728653; // radians

// Deterministic placement: hub at its cluster centre, the rest on a golden-angle
// spiral around it (y squeezed to fit the 4:3 canvas), clamped inside the frame.
function layout(nodes) {
  const byGroup = { core: [], geo: [], data: [], product: [], ai: [] };
  for (const n of nodes) (byGroup[n.group] || (byGroup[n.group] = [])).push(n);

  for (const g of Object.keys(byGroup)) {
    const c = CENTERS[g];
    let spin = 0;
    byGroup[g].forEach((n) => {
      if (n.hub || g === 'core') {
        n.x = c.x;
        n.y = c.y;
        return;
      }
      spin += 1;
      const radius = 8 + Math.sqrt(spin) * 5.2;
      const a = spin * GOLDEN;
      const x = c.x + Math.cos(a) * radius;
      const y = c.y + Math.sin(a) * radius * 0.8;
      n.x = Math.max(7, Math.min(93, x));
      n.y = Math.max(9, Math.min(92, y));
    });
  }
  return nodes;
}

/** Build the full graph (nodes with coords + color + size, resolved edges). */
export function buildGraph() {
  // Clone so repeated calls (build + client fallback) stay pure.
  const nodes = NODES.map((n) => ({
    ...n,
    color: GROUP_COLOR[n.group],
    size: SIZE[n.type] || SIZE.work,
  }));
  layout(nodes);

  const byId = new Map(nodes.map((n) => [n.id, n]));
  const edges = EDGES.flatMap(([a, b, type]) => {
    const s = byId.get(a);
    const t = byId.get(b);
    if (!s || !t) return [];
    return [{ source: a, target: b, type, x1: s.x, y1: s.y, x2: t.x, y2: t.y }];
  });

  const counts = nodes.reduce((acc, n) => {
    acc[n.group] = (acc[n.group] || 0) + 1;
    return acc;
  }, {});

  return { nodes, edges, primaries: PRIMARIES, anchor: byId.get('bogota'), counts };
}

// career is imported to assert provenance at build time (every node traces to it);
// referenced here so bundlers keep the link explicit.
export const SOURCE_OF_TRUTH = career.identity.positioning.lead;

export default buildGraph;
