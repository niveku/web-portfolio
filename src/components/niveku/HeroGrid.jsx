/* Hero — Geospatial Career Graph (interactive island, client:idle).
   A dark stylized field with Bogotá as the anchor and ~36 nodes derived from the
   career source of truth (see mapGraph.js), grouped into four domain clusters.
   Hover or the rotating pulse reveals a refined one-line fact per node. The
   rotation pauses off-screen / when the tab is hidden / under prefers-reduced-motion.
   The map is decorative (aria-hidden); the same facts live as text in the hero
   copy and the Projects/About/Strata sections. */

import { useState, useEffect, useMemo, useRef } from 'react';
import { buildContours } from './contours.js';
import { buildGraph, GROUP_LABEL } from './mapGraph.js';
import { STATS } from './data.js';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function HeroGrid({ contours: propContours, graph: propGraph }) {
  const [hover, setHover] = useState(null);
  const [tick, setTick] = useState(0);
  const rootRef = useRef(null);

  // Graph: use the build-time prop; fall back to a client build only if absent.
  // Both paths are deterministic, so they produce identical coordinates.
  const graph = useMemo(
    () => (propGraph && propGraph.nodes ? propGraph : buildGraph()),
    [propGraph],
  );
  const { nodes, edges, primaries, counts } = graph;

  // Pause the rotating pulse when off-screen, when the tab is hidden, or under
  // reduced motion — avoids needless main-thread work and respects a11y.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    let visible = true;
    let timer = null;
    const start = () => {
      if (timer == null) timer = setInterval(() => setTick((t) => t + 1), 2600);
    };
    const stop = () => {
      if (timer != null) {
        clearInterval(timer);
        timer = null;
      }
    };
    const update = () => (visible && !document.hidden ? start() : stop());
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        update();
      },
      { threshold: 0 },
    );
    if (root) io.observe(root);
    const onVis = () => update();
    document.addEventListener('visibilitychange', onVis);
    update();
    return () => {
      stop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  // Topographic contours: build-time precomputed set, with a client fallback.
  const contours = useMemo(
    () =>
      propContours && propContours.length
        ? propContours
        : buildContours({ width: 100, height: 100, levels: 22, seed: 42 }),
    [propContours],
  );

  // The active node is whatever the cursor is on, else the current rotation pick.
  const rotatingId = primaries[tick % primaries.length];
  const activeId = hover || rotatingId;
  const activeNode = useMemo(
    () => nodes.find((n) => n.id === activeId) || nodes[0],
    [nodes, activeId],
  );

  const anchor = useMemo(() => nodes.find((n) => n.id === 'bogota'), [nodes]);
  const ax = anchor ? anchor.x : 30;
  const ay = anchor ? anchor.y : 55;

  return (
    <div className="hero-grid rise-1" ref={rootRef}>
      <div className="hero-inner">
        <div className="hero-lead">
          <div className="kicker">NIVEKU · SPATIAL OPS <span className="kana" style={{ marginLeft: 8 }}>空間運用</span></div>
          <h1 className="hero-title">
            <span className="neon-magenta neon-strong">Kevin Henao</span>
            <span className="hero-sub">Geospatial Data Engineer · geoscientist</span>
          </h1>
          <p className="hero-para">
            I build <em>spatial data pipelines</em>, <em>GIS systems</em>, and
            <em> AWS data infrastructure</em>. 8+ years turning domain-heavy,
            ambiguous problems into systems that ship, across geosciences,
            geospatial engineering, and <strong className="neon-cyan">AI-assisted automation</strong>.
            Remote-first from Bogotá.
          </p>
          <div className="hero-ctas">
            <a className="btn-neon primary" href="#contact">
              <span>Start a project</span>
              <span className="btn-arrow">→</span>
            </a>
            <a className="btn-neon ghost" href="#projects">
              <span>See the work</span>
            </a>
          </div>

          <div className="hero-stats">
            {STATS.map((s, i) => (
              <div key={s.label} className={`stat rise-${Math.min(i + 2, 5)}`}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
                {s.sub && <div className="stat-sub">{s.sub}</div>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid-window glass-strong" aria-hidden="true">
          <div className="term-chrome">
            <div className="term-dots">
              <span style={{ background: 'var(--magenta)' }} />
              <span style={{ background: 'var(--amber)' }} />
              <span style={{ background: 'var(--cyan)' }} />
            </div>
            <div className="term-title">
              <span className="kana">経歴</span>
              <span>career-graph · live feed</span>
            </div>
            <div className="term-meta"><span className="led" /> {nodes.length} nodes · GMT-5</div>
          </div>

          <div className="grid-canvas">
            <svg className="grid-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <radialGradient id="g-glow" cx="30%" cy="55%" r="62%">
                  <stop offset="0%" stopColor="oklch(0.55 0.25 335)" stopOpacity="0.5" />
                  <stop offset="60%" stopColor="oklch(0.40 0.20 300)" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="g-line" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.25 340)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="oklch(0.85 0.14 200)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#g-glow)" />
              {Array.from({ length: 19 }, (_, i) => (
                <line key={`v${i}`} x1={(i + 1) * 5} y1="0" x2={(i + 1) * 5} y2="100" stroke="oklch(0.55 0.10 300)" strokeOpacity="0.12" strokeWidth="0.12" />
              ))}
              {Array.from({ length: 19 }, (_, i) => (
                <line key={`h${i}`} x1="0" y1={(i + 1) * 5} x2="100" y2={(i + 1) * 5} stroke="oklch(0.55 0.10 300)" strokeOpacity="0.12" strokeWidth="0.12" />
              ))}
              <g fill="none" stroke="oklch(0.78 0.18 340)" strokeLinecap="round">
                {contours.map((c, i) => (
                  <path
                    key={i}
                    d={c.d}
                    strokeOpacity={0.14 + (i % 4) * 0.05}
                    strokeWidth={i % 5 === 0 ? 0.2 : 0.1}
                    stroke={i % 7 === 0 ? 'oklch(0.82 0.14 200)' : i % 11 === 0 ? 'oklch(0.82 0.15 75)' : 'oklch(0.78 0.18 340)'}
                  />
                ))}
              </g>
              {edges.map((e, i) => {
                const on = e.source === activeId || e.target === activeId;
                const backbone = e.type === 'backbone';
                return (
                  <line
                    key={`${e.source}-${e.target}-${i}`}
                    x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2}
                    stroke="url(#g-line)"
                    strokeOpacity={on ? 0.85 : backbone ? 0.22 : 0.1}
                    strokeWidth={on ? 0.38 : backbone ? 0.16 : 0.09}
                    strokeDasharray={backbone ? '0.9 0.9' : '0.5 0.7'}
                    style={{ transition: 'all 0.5s ease' }}
                  />
                );
              })}
            </svg>

            {nodes.map((n) => {
              const isActive = activeId === n.id;
              const isAnchor = n.type === 'anchor';
              const showLabel = isActive || isAnchor;
              return (
                <div
                  key={n.id}
                  className={`node ${isAnchor ? 'primary' : ''} ${isActive ? 'active' : ''} ${n.x > 58 ? 'label-left' : ''}`}
                  style={{ left: `${n.x}%`, top: `${n.y}%`, '--node-color': n.color, '--node-size': `${n.size}px` }}
                  onMouseEnter={() => setHover(n.id)}
                  onMouseLeave={() => setHover(null)}
                >
                  <span className="node-ring" />
                  <span className="node-dot" />
                  {showLabel && (
                    <span className="node-label">
                      <span className="node-label-text">{n.label}</span>
                      {n.meta && <span className="node-meta">{n.meta}</span>}
                    </span>
                  )}
                </div>
              );
            })}

            <div className="crosshair" style={{ left: `${ax}%`, top: `${ay}%` }}>
              <div className="cross-ring" />
              <div className="cross-ring big" />
            </div>

            <div className="hud hud-tl">
              <div className="hud-line"><span className="hud-k">LAT</span> 4.7110° N</div>
              <div className="hud-line"><span className="hud-k">LON</span> 74.0721° W</div>
              <div className="hud-line"><span className="hud-k">TZ</span>  GMT-5</div>
            </div>
            <div className="hud hud-tr map-legend">
              {Object.keys(GROUP_LABEL).map((g) => (
                <div className="hud-line" key={g}>
                  <span className="legend-dot" style={{ background: `var(--${g === 'geo' ? 'cyan' : g === 'data' ? 'violet' : g === 'product' ? 'amber' : 'magenta'})` }} />
                  {GROUP_LABEL[g]} <span className="legend-n">{counts[g]}</span>
                </div>
              ))}
            </div>
            <div className="hud hud-bl">
              <div className="hud-line"><span className="hud-k">NODE</span> {activeNode.label}</div>
              {activeNode.meta && <div className="hud-line hud-sub">{activeNode.meta}</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-floats" aria-hidden="true">
        <span style={{ top: '10%', left: '6%', color: 'var(--magenta)', fontSize: '120px' }}>夜</span>
        <span style={{ top: '68%', right: '2%', color: 'var(--violet)', fontSize: '96px' }}>地</span>
      </div>
    </div>
  );
}

export default HeroGrid;
