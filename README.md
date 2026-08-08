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

## Deploying to GitHub Pages

The repo is pre-configured for a static export (`output: "export"` in `next.config.ts`) with a
GitHub Actions workflow (`.github/workflows/deploy.yml`).

1. Create a repository on GitHub and push this project to `main`:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-user>/<repo>.git
   git push -u origin main
   ```

2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.
3. Push again (or re-run the workflow) and your site appears at
   `https://<your-user>.github.io/<repo>/` a minute later.
4. Only for the first deploy — in `.github/workflows/deploy.yml` the base path is set
   automatically to `/<repo>`. If you create a repo named `<your-user>.github.io` instead,
   set `NEXT_PUBLIC_BASE_PATH` to `""` in the workflow.

Preview the static build locally:

```bash
npm run build
npx serve out
```
