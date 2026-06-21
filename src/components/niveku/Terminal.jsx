/* Night-terminal typewriter — small decorative island (client:visible).
   Honors prefers-reduced-motion (renders final state instantly) and is
   aria-hidden: the same information exists as real prose elsewhere. */

import { useState, useEffect, useRef } from 'react';

const BOOT_LINES = [
  { t: '$ ', cmd: 'niveku --status', color: 'magenta' },
  { out: '▸ booting night-shift daemon ... ok', color: 'ink' },
  { out: '▸ connecting to bogota.gmt-5 ...... ok', color: 'ink' },
  { out: '▸ loading stack manifest ........... ok', color: 'cyan' },
  { t: '$ ', cmd: 'whoami --long', color: 'magenta' },
  { out: 'kevin henao // niveku', color: 'hi' },
  { out: 'geospatial data engineer · geoscientist', color: 'ink' },
  { out: 'spatial pipelines · gis · aws · ai workflows', color: 'ink-mid' },
  { t: '$ ', cmd: 'stack --summary', color: 'magenta' },
  { out: 'python · geopandas · qgis · gdal · postgis', color: 'cyan' },
  { out: 'aws{lambda, glue, step-fn, textract, redshift}', color: 'cyan' },
  { out: 'arcgis · survey123 · dash · claude-code', color: 'violet' },
  { t: '$ ', cmd: 'status --now', color: 'magenta' },
  { out: '▸ open to geospatial / data engineering work', color: 'hi' },
  { out: '▸ latest: SPE paper · ADIPEC 2025 · D041S138R004', color: 'ink' },
  { out: "▸ type 'contact' to open a channel ▍", color: 'magenta' },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const fullBuf = (lines) =>
  lines.map((line) => ({ ...line, partial: line.cmd ?? line.out ?? '' }));

function useTypewriter(lines, speed = 12) {
  // Initialize fully-typed if reduced motion is preferred.
  const [buf, setBuf] = useState(() => (prefersReducedMotion() ? fullBuf(lines) : []));
  const [idx, setIdx] = useState(() => (prefersReducedMotion() ? lines.length : 0));

  useEffect(() => {
    if (idx >= lines.length) return;
    const line = lines[idx];
    const text = line.cmd ?? line.out ?? '';
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setBuf((b) => {
        const copy = [...b];
        copy[idx] = { ...line, partial: text.slice(0, i) };
        return copy;
      });
      if (i >= text.length) {
        clearInterval(interval);
        setTimeout(() => setIdx((x) => x + 1), line.cmd ? 280 : 80);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [idx, lines, speed]);

  return buf;
}

const colorFor = (c) =>
  ({
    magenta: 'var(--magenta)',
    cyan: 'var(--cyan)',
    violet: 'oklch(0.82 0.14 295)',
    hi: 'var(--ink-hi)',
    ink: 'var(--ink)',
    'ink-mid': 'var(--ink-mid)',
  })[c] || 'var(--ink)';

export default function Terminal() {
  const buf = useTypewriter(BOOT_LINES, 12);
  const bodyRef = useRef(null);
  const [today, setToday] = useState('');

  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [buf.length]);

  return (
    <div className="term-window glass-strong" aria-hidden="true">
      <div className="term-chrome">
        <div className="term-dots">
          <span style={{ background: 'var(--magenta)' }} />
          <span style={{ background: 'var(--amber)' }} />
          <span style={{ background: 'var(--cyan)' }} />
        </div>
        <div className="term-title">
          <span className="kana">端末</span>
          <span>niveku@night-shift · ~ / portfolio</span>
        </div>
        <div className="term-meta">zsh · {today}</div>
      </div>
      <div className="term-body" ref={bodyRef}>
        {buf.map((line, i) => (
          <div key={i} className="term-line">
            {line.cmd !== undefined && (
              <>
                <span className="term-prompt" style={{ color: colorFor('magenta') }}>~ ❯</span>
                <span style={{ color: 'var(--ink-hi)' }}>{line.partial}</span>
              </>
            )}
            {line.out !== undefined && (
              <span style={{ color: colorFor(line.color) }}>{line.partial}</span>
            )}
          </div>
        ))}
        <span className="term-cursor" />
      </div>
      <div className="term-footer">
        <span className="kana">可用</span>
        <span className="led" /> available · GMT-5 · english C2 / español nativo
      </div>
    </div>
  );
}
