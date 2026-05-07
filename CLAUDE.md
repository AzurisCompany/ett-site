# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Layout

This repo serves the **ETT (English Talk Time)** marketing site via two coupled trees:

- **`webapp/`** — The Next.js 14 source project. All code edits happen here.
- **Repo root (`index.html`, `404.html`, `_next/`, `images/`)** — A copy of `webapp/out/` checked in so GitHub Pages can serve the site directly from the repo root. Treat these files as **build artifacts**, not source.

When changing the site, edit files under `webapp/` and rebuild — do **not** hand-edit `index.html`, `404.html`, or anything in `_next/` at the repo root. The recent commits (`4ef4624`, `6259a76`) document the move to this layout.

`ConteudoSite/` (under `webapp/`) holds the original brand/program planning documents and partner logos in Portuguese. `formulafluente/` at the repo root holds additional content notes.

## Common Commands

All commands run from `webapp/`:

```bash
cd webapp
npm install        # first time / after dep changes
npm run dev        # http://localhost:3000
npm run build      # static export → webapp/out/
npm run lint       # next lint (ESLint via eslint-config-next)
npm start          # serve a non-export build (rarely used; site is static)
```

There is **no test suite** configured.

### Publishing to GitHub Pages

After `npm run build`, copy the contents of `webapp/out/` into the repo root, overwriting the existing `index.html`, `404.html`, `_next/`, and `images/`. Commit the regenerated artifacts together with the source change so the deployed site stays in sync.

## Architecture Notes

- **Next.js App Router** with `output: 'export'` (`webapp/next.config.mjs`) — the site is fully static. No API routes, no server actions, no ISR. `images.unoptimized: true` is required for the static export.
- **Single page** (`webapp/app/page.tsx`) composes one section per top-level component in `webapp/components/` (Hero, About, Methodology, Tools, Partners, HowItWorks, Results, Testimonials, LeadForm, Footer). Adding a section means adding a component there and importing it into `page.tsx`.
- **Styling**: Tailwind CSS with a custom dark theme (neon green `#00FF9D`, tech blue `#00BFFF`) defined in `webapp/app/globals.css` and `webapp/tailwind.config.ts`. `cn()` helper in `webapp/lib/utils.ts` merges class names (`clsx` + `tailwind-merge`).
- **Animations** use `framer-motion`; icons from `lucide-react`.
- **LeadForm** (`webapp/components/LeadForm.tsx`) uses `react-hook-form` + `zod` and currently **simulates** submission with a `setTimeout`. Because the build is a static export, wiring it to a real backend requires either an external endpoint (Resend, Formspree, etc.) or moving off `output: 'export'` and deploying via Vercel Functions instead of GitHub Pages. See `webapp/README.md` for the documented Resend integration sketch.
- **Path alias**: `@/*` maps to the `webapp/` root (`webapp/tsconfig.json`).

## Project Context (from `webapp/ConteudoSite/`)

ETT is a Brazilian English-acceleration program for tech professionals (Data, AI, BI, Cloud). All site copy is in **Portuguese (pt-BR)**. The site presents a 6-pillar program (Community, Structured Base via BeeTools, English Talk Time conversation practice, Cherry Top immersion, Coders career mentoring, AI personalization) and ~10 planned learning tools. Partner brands featured: **BeeTools**, **Cherry Top**, **Coders**, **IEP**. Primary specs live in `ConteudoSite/ProjetoGeralETT.docx` and the related PDFs.
