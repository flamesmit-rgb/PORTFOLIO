# SMITXFX — Smit Dhandar · Video Editor Portfolio

A cinematic, dark, motion-driven portfolio built with Next.js (App Router), React, TypeScript, Tailwind CSS v4 and Motion.

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Updating content

All copy, links and media live in `data/` — edit those files, never the components:

| What             | Where                                        |
| ---------------- | -------------------------------------------- |
| Name, links, CTA  | `data/site.ts`                               |
| Showreel MP4     | `public/videos/showreel.mp4` + `hasVideo: true` in `data/site.ts` |
| Projects         | `data/projects.ts` + thumbnails in `public/images/work/` |
| Services         | `data/services.ts`                           |
| Toolkit          | `data/toolkit.ts`                            |
| Process          | `data/process.ts`                            |
| Clients / stats  | `data/proof.ts`                              |

Replace placeholder SVGs (`public/images/*`) with real JPEG/MP4 assets when ready.

## Stack notes

- Next.js 16 App Router, server components by default; interactive pieces are client components.
- Tailwind v4 theme tokens live in `app/globals.css` (`--color-ink`, `--color-ember`, …).
- Animations: Motion (`motion/react`). All key animations respect `prefers-reduced-motion`.
