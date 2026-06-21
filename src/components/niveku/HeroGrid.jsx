/* Hero — Geospatial Grid (interactive island, client:idle).
   A dark stylized world-grid with Bogotá as the anchor and pulsing data points
   that reference real projects. Contours are precomputed at build and passed in.
   The rotating pulse pauses off-screen / when the tab is hidden / under
   prefers-reduced-motion. The map itself is decorative (aria-hidden); the same
   information is available as text in the hero copy and Projects section. */

import { useState, useEffect, useMemo, useRef } from 'react';
import { buildContours } from './contours.js';
import { STATS } from './data.js';

// Project nodes as lat/lon mapped onto a normalized canvas.
// Positions are artistic — not cartographically accurate — but anchor Bogotá.
const NODES = [
  { id: 'bogota', label: 'Bogotá · base', x: 28, y: 58, size: 14, accent: 'magenta', primary: true, kana: '拠点' },
  { id: 'openclaw', label: 'OpenClaw', x: 22, y: 42, size: 10, accent: 'magenta', kana: '自動化' },
  { id: 'abinbev', label: 'AB InBev', x: 48, y: 34, size: 9, accent: 'violet', kana: '請求書' },
  { id: 'coca', label: 'Coca-Cola Chile', x: 32, y: 82, size: 9, accent: 'cyan', kana: '物流' },
  { id: 'casa', label: 'Casaideas', x: 38, y: 74, size: 8, accent: 'amber', kana: '倉庫' },
  { id: 'dimar', label: 'DIMAR', x: 20, y: 66, size: 8, accent: 'cyan', kana: '海' },
  { id: 'fura', label: 'Fura', x: 26, y: 52, size: 8, accent: 'magenta', kana: '地質' },
  { id: 'adipec', label: 'ADIPEC 2025', x: 72, y: 44, size: 8, accent: 'amber', kana: '論文' },
];

const accentColor = {
  magenta: 'oklch(0.72 0.25 340)',
  violet: 'oklch(0.72 0.20 300)',
  cyan: 'oklch(0.85 0.14 200)',
  amber: 'oklch(0.82 0.15 75)',
};

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function HeroGrid({ contours: propContours }) {
  const [hover, setHover] = useState(null);
  const [tick, setTick] = useState(0);
  const rootRef = useRef(null);

  // Pause the rotating pulse when off-screen, when the tab is hidden, or under
  // reduced motion — avoids needless main-thread work and respects a11y.
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const root = rootRef.current;
    let visible = true;
    let timer = null;
    const start = () => {
      if (timer == null) timer = setInterval(() => setTick((t) => t + 1), 2200);
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

  // Topographic contours: use the build-time precomputed set; fall back to
  // client-side generation only if none were provided.
  const contours = useMemo(
    () =>
      propContours && propContours.length
        ? propContours
        : buildContours({ width: 100, height: 100, levels: 22, seed: 42 }),
    [propContours],
  );

  const activeIdx = tick % NODES.length;

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
            <em> AWS data infrastructure</em> — turning domain-heavy, ambiguous
            problems into working systems. 8+ years across geosciences, geospatial
            engineering, and <strong className="neon-cyan">AI-assisted automation</strong>.
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
              <span className="kana">地図</span>
              <span>spatial-ops · live feed</span>
            </div>
            <div className="term-meta"><span className="led" /> 8 nodes · GMT-5</div>
          </div>

          <div className="grid-canvas">
            <svg className="grid-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <radialGradient id="g-glow" cx="28%" cy="58%" r="60%">
                  <stop offset="0%" stopColor="oklch(0.55 0.25 335)" stopOpacity="0.55" />
                  <stop offset="60%" stopColor="oklch(0.40 0.20 300)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="g-line" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.72 0.25 340)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="oklch(0.85 0.14 200)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <rect width="100" height="100" fill="url(#g-glow)" />
              {Array.from({ length: 19 }, (_, i) => (
                <line key={`v${i}`} x1={(i + 1) * 5} y1="0" x2={(i + 1) * 5} y2="100" stroke="oklch(0.55 0.10 300)" strokeOpacity="0.14" strokeWidth="0.12" />
              ))}
              {Array.from({ length: 19 }, (_, i) => (
                <line key={`h${i}`} x1="0" y1={(i + 1) * 5} x2="100" y2={(i + 1) * 5} stroke="oklch(0.55 0.10 300)" strokeOpacity="0.14" strokeWidth="0.12" />
              ))}
              <g fill="none" stroke="oklch(0.78 0.18 340)" strokeLinecap="round">
                {contours.map((c, i) => (
                  <path
                    key={i}
                    d={c.d}
                    strokeOpacity={0.18 + (i % 4) * 0.06}
                    strokeWidth={i % 5 === 0 ? 0.22 : 0.12}
                    stroke={i % 7 === 0 ? 'oklch(0.82 0.14 200)' : i % 11 === 0 ? 'oklch(0.82 0.15 75)' : 'oklch(0.78 0.18 340)'}
                  />
                ))}
              </g>
              {NODES.map((n, i) => ({ n, i }))
                .filter(({ n }) => !n.primary)
                .map(({ n, i }) => (
                  <line
                    key={n.id}
                    x1="28" y1="58" x2={n.x} y2={n.y}
                    stroke="url(#g-line)"
                    strokeOpacity={activeIdx === i ? 0.9 : 0.25}
                    strokeWidth={activeIdx === i ? 0.35 : 0.15}
                    strokeDasharray="0.8 0.8"
                    style={{ transition: 'all 0.6s ease' }}
                  />
                ))}
            </svg>

            {NODES.map((n, i) => {
              const isActive = activeIdx === i || hover === n.id;
              return (
                <div
                  key={n.id}
                  className={`node ${n.primary ? 'primary' : ''} ${isActive ? 'active' : ''}`}
                  style={{ left: `${n.x}%`, top: `${n.y}%`, '--node-color': accentColor[n.accent], '--node-size': `${n.size}px` }}
                  onMouseEnter={() => setHover(n.id)}
                  onMouseLeave={() => setHover(null)}
                >
                  <span className="node-ring" />
                  <span className="node-dot" />
                  {(isActive || n.primary) && (
                    <span className="node-label"><span className="node-label-text">{n.label}</span></span>
                  )}
                </div>
              );
            })}

            <div className="crosshair" style={{ left: '28%', top: '58%' }}>
              <div className="cross-ring" />
              <div className="cross-ring big" />
            </div>

            <div className="hud hud-tl">
              <div className="hud-line"><span className="hud-k">LAT</span> 4.7110° N</div>
              <div className="hud-line"><span className="hud-k">LON</span> 74.0721° W</div>
              <div className="hud-line"><span className="hud-k">TZ</span>  GMT-5</div>
            </div>
            <div className="hud hud-br">
              <div className="hud-line"><span className="led" /> signal · live</div>
            </div>
            <div className="hud hud-bl">
              <div className="hud-line"><span className="hud-k">NODES</span> {NODES.length}</div>
              <div className="hud-line"><span className="hud-k">ACTIVE</span> {NODES[activeIdx].label}</div>
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
