/* Hero A — Night Terminal.
   Can render as full hero (default) OR compact (terminal window only, for About). */

import { useState, useEffect, useRef } from 'react';

const BOOT_LINES = [
  { t: "$ ", cmd: "niveku --status", color: "magenta" },
  { out: "▸ booting night-shift daemon ... ok", color: "ink" },
  { out: "▸ connecting to bogota.gmt-5 ...... ok", color: "ink" },
  { out: "▸ loading stack manifest ........... ok", color: "cyan" },
  { t: "$ ", cmd: "whoami --long", color: "magenta" },
  { out: "kevin henao // niveku", color: "hi" },
  { out: "geoscientist → data & gis engineer", color: "ink" },
  { out: "building spatial workflows, ai tools, automation", color: "ink-mid" },
  { t: "$ ", cmd: "stack --summary", color: "magenta" },
  { out: "python · sql · qgis · geopandas", color: "cyan" },
  { out: "aws{lambda, glue, step-fn, textract, dynamodb, s3}", color: "cyan" },
  { out: "claude-code · mcps · openclaw", color: "violet" },
  { t: "$ ", cmd: "status --now", color: "magenta" },
  { out: "▸ available for consulting · remote-first", color: "hi" },
  { out: "▸ latest: ADIPEC 2025 · SPE D041S138R004", color: "ink" },
  { out: "▸ type 'contact' to open a channel ▍", color: "magenta" },
];

function useTypewriter(lines, speed = 14) {
  const [idx, setIdx] = useState(0);
  const [buf, setBuf] = useState([]);
  useEffect(() => {
    if (idx >= lines.length) return;
    const line = lines[idx];
    const text = line.cmd ?? line.out ?? "";
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
  }, [idx]);
  return buf;
}

const colorFor = (c) => ({
  magenta: "var(--magenta)",
  cyan: "var(--cyan)",
  violet: "oklch(0.82 0.14 295)",
  hi: "var(--ink-hi)",
  ink: "var(--ink)",
  "ink-mid": "var(--ink-mid)",
})[c] || "var(--ink)";

function TerminalWindow() {
  const buf = useTypewriter(BOOT_LINES, 12);
  const bodyRef = useRef(null);
  // Date is set after mount to avoid SSR/client hydration mismatch.
  const [today, setToday] = useState("");
  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);
  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [buf.length]);

  return (
    <div className="term-window glass-strong">
      <div className="term-chrome">
        <div className="term-dots">
          <span style={{background: "var(--magenta)"}} />
          <span style={{background: "var(--amber)"}} />
          <span style={{background: "var(--cyan)"}} />
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
                <span className="term-prompt" style={{color: colorFor("magenta")}}>~ ❯</span>
                <span style={{color: "var(--ink-hi)"}}>{line.partial}</span>
              </>
            )}
            {line.out !== undefined && (
              <span style={{color: colorFor(line.color)}}>{line.partial}</span>
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

function HeroTerminal({ compact = false }) {
  if (compact) {
    return <TerminalWindow />;
  }
  return (
    <div className="hero-terminal rise-1">
      <div className="hero-skyline" aria-hidden="true">
        <div className="sky-stars" />
        <div className="sky-buildings" />
        <div className="sky-reflection" />
      </div>
      <div className="hero-inner">
        <div className="hero-lead">
          <div className="kicker">NIVEKU · NIGHT SHIFT <span className="kana" style={{marginLeft:8}}>夜更かし</span></div>
          <h1 className="hero-title">
            <span className="neon-magenta">Kevin Henao</span>
            <span className="hero-sub">geoscientist → data &amp; gis engineer</span>
          </h1>
          <p className="hero-para">
            I build <em>spatial workflows</em>, <em>AI tools</em> and <em>automation systems</em>
            from Bogotá — remote-first, cost-aware, domain-heavy.
            Currently available for <strong className="neon-cyan">consulting engagements</strong>.
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
        </div>
        <TerminalWindow />
      </div>
      <div className="hero-floats" aria-hidden="true">
        <span style={{top:"12%", left:"8%", color:"var(--magenta)", fontSize:"120px"}}>夜</span>
        <span style={{top:"62%", right:"4%", color:"var(--violet)", fontSize:"96px"}}>光</span>
        <span style={{bottom:"8%", left:"46%", color:"var(--cyan)", fontSize:"56px"}}>データ</span>
      </div>
    </div>
  );
}

export { HeroTerminal, TerminalWindow };
export default HeroTerminal;
