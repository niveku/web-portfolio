# niveku-portfolio

![status](https://img.shields.io/badge/status-active-green) &nbsp; [portafolio-niveku.vercel.app](https://portafolio-niveku.vercel.app)

## About

Personal portfolio of Kevin Henao — projects, blog, and engineering notes from a geospatial engineer turned data engineer working on AI-augmented workflows. The site is the public face of an ongoing experiment in building durable personal infrastructure around Claude Code, Obsidian, and a curated GitHub workspace.

Built with Astro and deployed on Vercel.

## Stack

- Astro 6
- Tailwind CSS 4
- MDX 5
- TypeScript (strict)
- Vercel (hosting + previews)

## Local development

```bash
npm install
npm run dev      # localhost:4321
npm run build    # dist/
npm run preview
```

Requires Node `>=22.12.0` (see `package.json` `engines`).

## Structure

```
src/
├── pages/        # Astro routes — index, about, contact, projects/, blog/
├── content/      # Markdown/MDX collections — projects and blog posts
├── layouts/      # BaseLayout shared across pages
└── components/   # ProjectCard, PostCard
```

Content schemas live in `src/content.config.ts`. Projects support an optional `repo` field that surfaces a "Source on GitHub" link on the detail page.

## Deploy

Auto-deploys from `main` to Vercel. Pull requests get preview URLs. The canonical
site URL is derived from `VERCEL_PROJECT_PRODUCTION_URL` at build, so it tracks the
project's production domain automatically (currently `portafolio-niveku.vercel.app`).

## License

MIT — see [LICENSE](./LICENSE).
