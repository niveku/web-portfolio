/* Niveku — Strata Section
   A literal geological cross-section of Kevin's career.
   Lithology symbols follow USGS/FGDC conventions, drawn as tiling SVG patterns:
     conglomerate · sandstone · limestone · shale · crystalline basement.
   Youngest at the surface, basement at depth. */

import { useState } from 'react';

/* Spectral hue descent: magenta (surface) → amber (basement) */
const STRATA_ACCENT = {
  magenta: "oklch(0.80 0.20 340)",
  violet:  "oklch(0.74 0.17 300)",
  blue:    "oklch(0.72 0.16 262)",
  cyan:    "oklch(0.82 0.13 200)",
  amber:   "oklch(0.82 0.13 78)",
};
const STRATA_FILL = {
  magenta: "oklch(0.22 0.09 340)",
  violet:  "oklch(0.20 0.07 300)",
  blue:    "oklch(0.18 0.07 262)",
  cyan:    "oklch(0.20 0.05 200)",
  amber:   "oklch(0.20 0.05 78)",
};

const STRATA = [
  {
    id: "ai",
    era: "AI · AUTOMATION",
    kana: "知能",
    formation: "OpenClaw Fm.",
    rock: "conglomerate",
    rockLabel: "Conglomerate",
    ageLabel: "2024 → now",
    period: "Holocene",
    thickness: 12,
    color: "magenta",
    lithology: ["Claude Code", "MCPs", "Skills", "Agent workflows"],
    events: [
      "Built OpenClaw — personal AI operating system",
      "AI-assisted pipelines on Claude Code",
    ],
    narrative: "Surface cover — poorly sorted, every older clast cemented together. The newest deposit sits on everything beneath it.",
  },
  {
    id: "data",
    era: "DATA ENGINEERING",
    kana: "配管",
    formation: "Pipeline Group",
    rock: "sandstone",
    rockLabel: "Sandstone",
    ageLabel: "2021 → 2025",
    period: "Neogene",
    thickness: 20,
    color: "violet",
    lithology: ["AWS Lambda", "Step Functions", "Glue", "S3", "Athena", "Redshift", "Python", "SQL"],
    events: [
      "AB InBev — serverless invoice automation (acting architect)",
      "Casa Ideas — SAP pipeline",
      "Coca-Cola Chile — distribution system",
    ],
    narrative: "Porous and permeable — data flows through it. Thick, well-bedded, the productive reservoir of the section.",
  },
  {
    id: "analytics",
    era: "ANALYTICS · BI",
    kana: "分析",
    formation: "Warehouse Member",
    rock: "limestone",
    rockLabel: "Limestone",
    ageLabel: "2020 → 2023",
    period: "Paleogene",
    thickness: 15,
    color: "blue",
    lithology: ["Power BI", "DAX", "SQL", "dbt", "Athena"],
    events: [
      "Reporting & modelling layers over operational data",
      "Self-serve dashboards for non-technical stakeholders",
    ],
    narrative: "Structured, well-cemented beds — clean grain, predictable joints. Where messy data gets ordered into something legible.",
  },
  {
    id: "gis",
    era: "GEOSPATIAL",
    kana: "地理",
    formation: "Cartographic Beds",
    rock: "shale",
    rockLabel: "Shale",
    ageLabel: "2018 → 2023",
    period: "Cretaceous",
    thickness: 20,
    color: "cyan",
    lithology: ["QGIS", "GeoPandas", "GDAL", "PostGIS", "ArcGIS", "Survey123"],
    events: [
      "DIMAR — COVID geospatial monitoring for gov't agency",
      "Fura — reporting & mapping infrastructure",
    ],
    narrative: "Finely laminated — layer upon layer of maps. Operational GIS that institutions actually use, deposited slowly and precisely.",
  },
  {
    id: "geo",
    era: "GEOSCIENCE",
    kana: "地質",
    formation: "Andes Basement",
    rock: "basement",
    rockLabel: "Crystalline basement",
    ageLabel: "2013 → 2020",
    period: "Basement",
    thickness: 26,
    color: "amber",
    lithology: ["Field work", "Stratigraphy", "Geochemistry", "Python", "Leapfrog", "Datamine"],
    events: [
      "BSc Geosciences · Universidad de los Andes",
      "Colombian Professional Geology License (CPG)",
      "Core data integration → ML (co-authored @ ADIPEC 2025)",
    ],
    narrative: "Crystalline bedrock — the deformed, intruded foundation. Rocks and stratigraphy: where all the domain intuition was forged.",
  },
];

/* USGS/FGDC-style lithology patterns as tiling SVG.
   patternUnits=userSpaceOnUse → symbols tile at true size regardless of box. */
function StrataPattern({ rock, color, idSuffix }) {
  const stroke = STRATA_ACCENT[color];
  const fill = STRATA_FILL[color];
  const pid = `lith-${rock}-${idSuffix}`;

  let tile = null;

  if (rock === "conglomerate") {
    // Rounded clasts of varied size floating in a dotted matrix
    tile = (
      <pattern id={pid} patternUnits="userSpaceOnUse" width="48" height="40">
        <g fill="none" stroke={stroke} strokeWidth="1" strokeOpacity="0.8">
          <circle cx="11" cy="12" r="7" />
          <circle cx="33" cy="9" r="4.6" />
          <ellipse cx="39" cy="28" rx="6.2" ry="4.6" transform="rotate(22 39 28)" />
          <circle cx="16" cy="31" r="5.6" />
          <ellipse cx="26" cy="20" rx="4.4" ry="3.3" transform="rotate(-18 26 20)" />
        </g>
        <g fill={stroke} fillOpacity="0.45">
          <circle cx="4" cy="24" r="0.85" />
          <circle cx="46" cy="15" r="0.85" />
          <circle cx="28" cy="37" r="0.85" />
          <circle cx="22" cy="4" r="0.85" />
          <circle cx="44" cy="38" r="0.85" />
          <circle cx="8" cy="38" r="0.85" />
        </g>
      </pattern>
    );
  } else if (rock === "sandstone") {
    // Regular stipple — staggered dot grid
    tile = (
      <pattern id={pid} patternUnits="userSpaceOnUse" width="10" height="10">
        <g fill={stroke} fillOpacity="0.85">
          <circle cx="2.5" cy="2.5" r="1" />
          <circle cx="7.5" cy="7.5" r="1" />
        </g>
      </pattern>
    );
  } else if (rock === "limestone") {
    // Running-bond brickwork
    tile = (
      <pattern id={pid} patternUnits="userSpaceOnUse" width="36" height="20">
        <g stroke={stroke} strokeWidth="0.9" strokeOpacity="0.72" fill="none">
          <line x1="0" y1="0" x2="36" y2="0" />
          <line x1="0" y1="10" x2="36" y2="10" />
          <line x1="0" y1="20" x2="36" y2="20" />
          <line x1="0" y1="0" x2="0" y2="10" />
          <line x1="18" y1="0" x2="18" y2="10" />
          <line x1="36" y1="0" x2="36" y2="10" />
          <line x1="9" y1="10" x2="9" y2="20" />
          <line x1="27" y1="10" x2="27" y2="20" />
        </g>
      </pattern>
    );
  } else if (rock === "shale") {
    // Fine laminae — tightly spaced horizontal lines, alternating dashed
    tile = (
      <pattern id={pid} patternUnits="userSpaceOnUse" width="26" height="9">
        <g stroke={stroke} strokeWidth="0.7">
          <line x1="0" y1="2" x2="26" y2="2" strokeOpacity="0.72" />
          <line x1="0" y1="6.5" x2="26" y2="6.5" strokeOpacity="0.42" strokeDasharray="6 4" />
        </g>
      </pattern>
    );
  } else if (rock === "basement") {
    // Crystalline / igneous — randomly placed crosses + angled dashes
    tile = (
      <pattern id={pid} patternUnits="userSpaceOnUse" width="32" height="32">
        <g stroke={stroke} strokeWidth="0.95" strokeOpacity="0.72" strokeLinecap="round">
          <path d="M7 8 h5.4 M9.7 5.3 v5.4" />
          <path d="M23 21 h5.4 M25.7 18.3 v5.4" />
          <line x1="21" y1="6" x2="26.5" y2="9.2" />
          <line x1="3.5" y1="20" x2="9" y2="22.4" />
          <line x1="13" y1="27" x2="17.6" y2="23.6" />
          <line x1="15" y1="13" x2="18.6" y2="15.6" />
        </g>
      </pattern>
    );
  }

  return (
    <svg className="strata-pat" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>{tile}</defs>
      <rect width="100%" height="100%" fill={fill} />
      <rect width="100%" height="100%" fill={`url(#${pid})`} />
    </svg>
  );
}

function StrataLayer({ layer, active, onHover }) {
  const accent = STRATA_ACCENT[layer.color];
  return (
    <div
      className={`strata-layer ${active ? "is-active" : ""}`}
      style={{
        "--layer-accent": accent,
        "--bed-h": `${54 + layer.thickness * 2}px`,
      }}
      onMouseEnter={() => onHover(layer.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="strata-bed">
        <div className="strata-bed-pattern">
          <StrataPattern rock={layer.rock} color={layer.color} idSuffix={layer.id} />
        </div>
        <div className="strata-bed-head">
          <div className="strata-bed-meta">
            <span className="kicker strata-era">{layer.era}</span>
          </div>
          <h3 className="strata-formation">{layer.formation}</h3>
          <div className="strata-rockline">
            <span className="strata-rock">{layer.rockLabel}</span>
            <span className="strata-dot">·</span>
            <span className="strata-age">{layer.ageLabel}</span>
          </div>
        </div>
        <div className="strata-bed-right">
          <div className="strata-lith">
            {layer.lithology.slice(0, 4).map((l) => (
              <span key={l} className="chip chip-thin">{l}</span>
            ))}
            {layer.lithology.length > 4 && (
              <span className="chip chip-thin chip-more">+{layer.lithology.length - 4}</span>
            )}
          </div>
        </div>
      </div>

      <div className="strata-detail">
        <p className="strata-narr">{layer.narrative}</p>
        <ul className="strata-events">
          {layer.events.map((e) => <li key={e}>{e}</li>)}
        </ul>
      </div>
    </div>
  );
}

function StrataSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="strata" className="sec sec-strata">
      <div className="shell">
        <header className="sec-head strata-head">
          <div>
            <div className="kicker">CAREER CROSS-SECTION <span className="kana" style={{marginLeft:8}}>断面図</span></div>
            <h2 className="sec-title">
              Read me like a <span className="neon-amber">stratigraphic column</span>.
            </h2>
            <p className="sec-lede">
              Old habits: I still think in formations and ages. Here's my stack
              as a stratigraphic column — youngest at the surface, basement at depth.
              Hover a bed to read the log.
            </p>
          </div>
          <div className="strata-legend">
            <div className="kicker strata-legend-title">LITHOLOGY KEY <span className="kana" style={{marginLeft:8}}>凡例</span></div>
            {STRATA.map((l) => (
              <div className="strata-legend-row" key={l.id} style={{ "--layer-accent": STRATA_ACCENT[l.color] }}>
                <span className="strata-legend-box">
                  <StrataPattern rock={l.rock} color={l.color} idSuffix={`leg-${l.id}`} />
                </span>
                <span className="strata-legend-name">{l.rockLabel}</span>
              </div>
            ))}
          </div>
        </header>

        <div className="strata-column glass">
          <div className="strata-scale">
            <div className="strata-scale-head">
              <span className="kana">深度</span>
              <span className="kicker">DEPTH / AGE</span>
            </div>
            <div className="strata-scale-ruler" aria-hidden="true">
              {Array.from({length:11}).map((_,i)=>(
                <div key={i} className={`strata-tick ${i%5===0?"strata-tick-maj":""}`}>
                  <span>{i===0?"SURFACE":i===10?"BASEMENT":""}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="strata-beds">
            {STRATA.map((layer) => (
              <StrataLayer
                key={layer.id}
                layer={layer}
                active={active === layer.id}
                onHover={setActive}
              />
            ))}
          </div>

          <div className="strata-footer">
            <span className="kana" style={{marginRight:10}}>総合</span>
            <span className="kicker">SUMMARY</span>
            <span className="strata-footer-text">
              13+ years · 5 formations · one throughline: <em>turning ambiguous, domain-heavy problems into working technical systems.</em>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrataSection;
