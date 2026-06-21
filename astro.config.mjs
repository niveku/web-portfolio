import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Canonical site URL. On Vercel, derive it from the production domain so it
// auto-tracks any future domain change (e.g. buying a custom domain) with no
// code edit. VERCEL_PROJECT_PRODUCTION_URL = shortest production custom/vercel.app
// domain; falls back to the current vercel.app domain for local builds.
const prodUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = prodUrl ? `https://${prodUrl}` : 'https://portafolio-niveku.vercel.app';

// Static output (no adapter) — keep it that way: deploy is Vercel ($0).
// Adding an SSR adapter or output:'server' would convert pages to functions
// and consume quota. See .claude/REVIEW-FINDINGS.md (cost guardrail).
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), react(), sitemap()],
});