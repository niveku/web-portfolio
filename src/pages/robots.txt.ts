import type { APIRoute } from 'astro';

// Dynamic robots.txt so the Sitemap URL always matches the canonical site
// (Astro.site), even after a domain change. Prerendered to /robots.txt at build.
export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://portafolio-niveku.vercel.app')).origin;
  const aiCrawlers = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'CCBot',
  ];

  const body = `# robots.txt — ${base}
# Portfolio of Kevin Henao (Geospatial Data Engineer).
# AI / answer-engine crawlers are explicitly welcome (GEO: we want to be cited).

User-agent: *
Allow: /

${aiCrawlers.map((ua) => `User-agent: ${ua}\nAllow: /`).join('\n\n')}

Sitemap: ${base}/sitemap-index.xml
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
