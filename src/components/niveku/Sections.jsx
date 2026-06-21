/* Niveku — sections: nav, featured work, blog, about-strip, contact, footer */

import { HeroTerminal } from './HeroTerminal.jsx';
import { PROJECTS, POSTS, SKILLS } from './data.js';

function Nav() {
  return (
    <nav className="nk-nav glass">
      <a href="#top" className="nk-logo">
        <span className="nk-logo-mark" aria-hidden="true">
          <svg className="logo-globe" viewBox="-16 -16 32 32" width="28" height="28">
            <defs>
              <clipPath id="globe-clip"><circle r="14" cx="0" cy="0" /></clipPath>
              <radialGradient id="globe-fill" cx="34%" cy="28%" r="82%">
                <stop offset="0%"  stopColor="var(--cyan)"    stopOpacity="0.28" />
                <stop offset="55%" stopColor="var(--violet)"  stopOpacity="0.12" />
                <stop offset="100%" stopColor="var(--magenta)" stopOpacity="0.05" />
              </radialGradient>
              <radialGradient id="globe-rim" cx="50%" cy="50%" r="50%">
                <stop offset="78%" stopColor="transparent" />
                <stop offset="100%" stopColor="var(--magenta)" stopOpacity="0.85" />
              </radialGradient>
              <radialGradient id="globe-shade" cx="74%" cy="74%" r="60%">
                <stop offset="0%" stopColor="#000" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Sphere body */}
            <circle r="14" cx="0" cy="0" fill="url(#globe-fill)" />
            {/* Subtle terminator shade */}
            <circle r="14" cx="0" cy="0" fill="url(#globe-shade)" />

            {/* Graticule — clipped to sphere */}
            <g clipPath="url(#globe-clip)">
              {/* Parallels — fixed, evenly spaced */}
              <g fill="none" stroke="var(--cyan)" strokeWidth="0.4">
                <ellipse cx="0" cy="-10" rx="9.8"  ry="1.2" strokeOpacity="0.32" />
                <ellipse cx="0" cy="-6"  rx="12.7" ry="2.1" strokeOpacity="0.45" />
                <ellipse cx="0" cy="-2"  rx="13.85" ry="2.7" strokeOpacity="0.55" />
                <ellipse cx="0" cy="2"   rx="13.85" ry="2.7" strokeOpacity="0.55" />
                <ellipse cx="0" cy="6"   rx="12.7" ry="2.1" strokeOpacity="0.45" />
                <ellipse cx="0" cy="10"  rx="9.8"  ry="1.2" strokeOpacity="0.32" />
              </g>

              {/* Equator — accent line */}
              <ellipse cx="0" cy="0" rx="14" ry="3.2"
                fill="none" stroke="var(--cyan)" strokeOpacity="0.72" strokeWidth="0.5" />

              {/* Meridians — 4 sweeping ellipses, staggered phase, smooth easing */}
              {[0, 1, 2, 3].map((i) => (
                <ellipse key={i} cx="0" cy="0" ry="14" rx="14"
                  fill="none" stroke="var(--magenta)" strokeWidth="0.55">
                  <animate attributeName="rx"
                    values="14;0.1;14"
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                    dur="9s"
                    begin={`${-i * 2.25}s`}
                    repeatCount="indefinite" />
                  <animate attributeName="stroke-opacity"
                    values="0.8;0.15;0.8"
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                    dur="9s"
                    begin={`${-i * 2.25}s`}
                    repeatCount="indefinite" />
                </ellipse>
              ))}

              {/* Polar caps — small dots */}
              <circle cx="0" cy="-14" r="0.9" fill="var(--cyan)" opacity="0.85" />
              <circle cx="0" cy="14"  r="0.9" fill="var(--cyan)" opacity="0.85" />
            </g>

            {/* Crisp outer ring */}
            <circle r="14" cx="0" cy="0" fill="none" stroke="var(--magenta)" strokeWidth="0.9" opacity="0.95" />
            {/* Bright rim glow */}
            <circle r="14" cx="0" cy="0" fill="url(#globe-rim)" />

            {/* Pulsing data ping — fixed location */}
            <g className="globe-ping">
              <circle cx="5" cy="-3" r="1.1" fill="var(--pink-soft)" />
              <circle cx="5" cy="-3" r="1.1" fill="none" stroke="var(--pink-soft)" strokeWidth="0.5">
                <animate attributeName="r" values="1.1;3.4;1.1" dur="2.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.95;0;0.95" dur="2.4s" repeatCount="indefinite" />
              </circle>
            </g>
          </svg>
        </span>
        <span className="nk-logo-text">
          <span className="neon-magenta">niveku</span>
          <span className="kana">二ベク</span>
        </span>
      </a>
      <ul className="nk-links">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#strata">Strata</a></li>
        <li><a href="#blog">Writing</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a className="nk-icon" href="https://github.com/niveku" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
            </svg>
          </a>
        </li>
        <li>
          <a className="nk-icon" href="https://www.linkedin.com/in/kevinhenaolopez/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z"/>
            </svg>
          </a>
        </li>
        <li><a href="#contact" className="cta">Contact <span className="btn-arrow">→</span></a></li>
      </ul>
    </nav>
  );
}

const accentVar = {
  magenta: "oklch(0.72 0.25 340)",
  violet: "oklch(0.72 0.20 300)",
  cyan: "oklch(0.85 0.14 200)",
  amber: "oklch(0.82 0.15 75)",
};

function ProjectCard({ p, index }) {
  return (
    <article
      className={`proj-card glass rise-${Math.min(index + 2, 5)}`}
      style={{ "--accent": accentVar[p.accent] }}
    >
      <div className="proj-head">
        <div className="proj-cat">
          <span className="kicker">{p.category}</span>
        </div>
        <div className="proj-date">{p.date}</div>
      </div>
      <h3 className="proj-title">
        {p.title}
        <span className="proj-subtitle">{p.subtitle}</span>
      </h3>
      <p className="proj-summary">{p.summary}</p>
      {p.metric && (
        <div className="proj-metric">
          <span className="proj-metric-v">{p.metric.value}</span>
          <span className="proj-metric-l">{p.metric.label}</span>
        </div>
      )}
      <div className="proj-stack">
        {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
      </div>
      <div className="proj-foot">
        <span className="proj-role">{p.role}</span>
        <a className="proj-link" href={`/projects/${p.slug}`}>
          case study <span className="btn-arrow">→</span>
        </a>
      </div>
      <div className="proj-glow" aria-hidden="true" />
    </article>
  );
}

function FeaturedProjects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);
  return (
    <section id="projects" className="sec sec-projects">
      <div className="shell">
        <header className="sec-head">
          <div>
            <div className="kicker">SELECTED WORK <span className="kana" style={{marginLeft:8}}>実績</span></div>
            <h2 className="sec-title">
              Systems that <span className="neon-magenta">shipped</span>.
            </h2>
            <p className="sec-lede">
              Six projects across data engineering, geospatial, and AI —
              each with a defined role, outcome, and tradeoff I'd explain out loud.
            </p>
          </div>
          <a className="sec-all" href="/projects">
            All 6 projects <span className="btn-arrow">→</span>
          </a>
        </header>

        <div className="proj-grid">
          {featured.map((p, i) => <ProjectCard key={p.slug} p={p} index={i} />)}
        </div>

        <div className="proj-mini-grid">
          {rest.map((p) => (
            <a key={p.slug} href={`/projects/${p.slug}`} className="proj-mini glass"
               style={{ "--accent": accentVar[p.accent] }}>
              <div className="proj-mini-head">
                <span className="kicker">{p.category}</span>
                <span className="proj-date">{p.date}</span>
              </div>
              <div className="proj-mini-title">{p.title}</div>
              <div className="proj-mini-sub">{p.subtitle}</div>
              <div className="proj-mini-arrow">→</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutStrip() {
  return (
    <section id="about" className="sec sec-about">
      <div className="shell">
        <header className="sec-head about-head">
          <div>
            <div className="kicker">ABOUT <span className="kana" style={{marginLeft:8}}>紹介</span></div>
            <h2 className="sec-title">
              Rocks to <span className="neon-cyan">pipelines</span> to <span className="neon-magenta">agents</span>.
            </h2>
          </div>
          <div className="about-meta about-meta-top">
            <div><span className="kicker">Base</span><span>Bogotá · remote-first</span></div>
            <div><span className="kicker">Lang</span><span>EN C2 · ES nativo</span></div>
            <div><span className="kicker">Cred</span><span>BSc Geo · CPG</span></div>
            <div><span className="kicker">Paper</span><span>ADIPEC 2025</span></div>
          </div>
        </header>

        {/* Terminal full-width — the most "Kevin" moment of the page */}
        <div className="about-terminal-wrap">
          <HeroTerminal compact={true} />
        </div>

        <div className="about-grid">
          <div className="about-lead glass">
            <div className="kicker">BIO</div>
            <p className="about-para">
              I started as a geoscientist — Universidad de los Andes, rock and stratigraphy.
              The technical side pulled me into <em>computation</em>: Python for geochemistry,
              GIS for operational workflows. Eight years later I'm shipping serverless
              pipelines on AWS, building AI-assisted workflows on Claude Code, and
              co-authoring papers at ADIPEC.
            </p>
            <p className="about-para">
              The thread is translating domain-heavy, ambiguous problems into working
              technical systems — and explaining the tradeoffs out loud.
            </p>
          </div>

          <div className="skills glass">
            <div className="kicker">STACK</div>
            <div className="skills-group">
              <h4><span className="dot dot-mag" /> Strong · production-proven</h4>
              <div className="chips">
                {SKILLS.strong.map((s) => <span key={s} className="chip chip-mag">{s}</span>)}
              </div>
            </div>
            <div className="skills-group">
              <h4><span className="dot dot-cyan" /> Credible · with framing</h4>
              <div className="chips">
                {SKILLS.credible.map((s) => <span key={s} className="chip chip-cyan">{s}</span>)}
              </div>
            </div>
            <div className="skills-group">
              <h4><span className="dot dot-amber" /> Growing</h4>
              <div className="chips">
                {SKILLS.growing.map((s) => <span key={s} className="chip chip-amber">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BlogStrip() {
  return (
    <section id="blog" className="sec sec-blog">
      <div className="shell">
        <header className="sec-head">
          <div>
            <div className="kicker">WRITING <span className="kana" style={{marginLeft:8}}>文章</span></div>
            <h2 className="sec-title">Notes from the <span className="neon-violet">night shift</span>.</h2>
            <p className="sec-lede">
              Practical notes on tooling, AI workflows, and turning ambiguous work into systems.
            </p>
          </div>
          <a className="sec-all" href="/blog">All posts <span className="btn-arrow">→</span></a>
        </header>

        <div className="post-grid">
          {POSTS.map((p, i) => (
            <a key={p.slug} className={`post-card glass rise-${Math.min(i+2, 5)}`} href={`/blog/${p.slug}`}>
              <div className="post-meta">
                <span className="kicker">{new Date(p.date).toLocaleDateString("en-US", { year:"numeric", month:"short", day:"numeric" })}</span>
                <span className="dot-sep">·</span>
                <span className="kicker">{p.readMin} min read</span>
              </div>
              <h3 className="post-title">{p.title}</h3>
              <p className="post-summary">{p.summary}</p>
              <div className="post-tags">
                {p.tags.map((t) => <span key={t} className="tag">#{t}</span>)}
              </div>
              <div className="post-arrow">→</div>
            </a>
          ))}

          {/* Placeholders that acknowledge "coming soon" rather than faking posts */}
          <div className="post-card glass post-placeholder">
            <div className="kicker">COMING SOON</div>
            <h3 className="post-title">Cost-aware serverless: lessons from 30+ invoice formats</h3>
            <p className="post-summary">In draft.</p>
          </div>
          <div className="post-card glass post-placeholder">
            <div className="kicker">COMING SOON</div>
            <h3 className="post-title">GIS for institutions that don't think in GIS</h3>
            <p className="post-summary">In draft.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="sec sec-contact">
      <div className="shell">
        <div className="contact-card glass-strong">
          <div className="contact-lead">
            <div className="kicker">OPEN CHANNEL <span className="kana" style={{marginLeft:8}}>連絡</span></div>
            <h2 className="contact-title">
              Got an <span className="neon-magenta">ambiguous</span> problem?<br/>
              Let's scope it.
            </h2>
            <p className="contact-para">
              I take on consulting engagements around <em>spatial data</em>,
              <em> AWS pipelines</em>, and <em>AI-assisted workflows</em>.
              Tell me what you're stuck on — I'll reply with a read on whether
              it's a fit and what a first week would look like.
            </p>
          </div>
          <div className="contact-actions">
            <a className="btn-neon primary big" href="mailto:hello@niveku.dev">
              <span>hello@niveku.dev</span>
              <span className="btn-arrow">→</span>
            </a>
            <div className="contact-socials">
              <a className="btn-neon ghost" href="https://github.com/niveku" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
                </svg>
                <span>github.com/niveku</span>
                <span className="btn-arrow">→</span>
              </a>
              <a className="btn-neon ghost" href="https://www.linkedin.com/in/kevinhenaolopez/" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z"/>
                </svg>
                <span>in/kevinhenaolopez</span>
                <span className="btn-arrow">→</span>
              </a>
            </div>
            <div className="contact-meta">
              <div><span className="kicker">Timezone</span> GMT-5 · flexible</div>
              <div><span className="kicker">Starts from</span> scoping call · no template decks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="nk-foot">
      <div className="shell nk-foot-grid">
        <div>
          <div className="kana" style={{fontSize:28, color:"var(--magenta)"}}>二ベク</div>
          <div className="kicker" style={{marginTop:6}}>NIVEKU · Kevin Henao</div>
        </div>
        <div className="nk-foot-meta">
          <span>Bogotá, Colombia</span>
          <span className="dot-sep">·</span>
          <span>Remote-first since 2020</span>
          <span className="dot-sep">·</span>
          <span>© 2026</span>
        </div>
        <div className="nk-foot-socials">
          <a href="https://github.com/niveku" target="_blank" rel="noopener" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5z"/>
            </svg>
            <span>niveku</span>
          </a>
          <a href="https://www.linkedin.com/in/kevinhenaolopez/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .78 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .78 23.2 0 22.22 0z"/>
            </svg>
            <span>kevinhenaolopez</span>
          </a>
        </div>
        <div className="nk-foot-note kana">夜更かしの詩</div>
      </div>
    </footer>
  );
}

export { Nav, FeaturedProjects, AboutStrip, BlogStrip, Contact, Footer };
