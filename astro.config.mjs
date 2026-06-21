import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Static output (no adapter) — keep it that way: deploy is Vercel Hobby ($0).
// Adding an SSR adapter or output:'server' would convert pages to functions
// and consume Hobby quota. See .claude/REVIEW-FINDINGS.md (cost guardrail).
export default defineConfig({
  site: 'https://niveku.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx(), react(), sitemap()],
});