# Portfolio

Single-page portfolio site — React + Vite, deployed to GitHub Pages as a project page.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`, with all asset paths prefixed for `/portfolio/` (set via `base` in `vite.config.js`).

## Content

Structured CV/experience data lives in `content/experience.json` — edit that file to update skills,
timeline, projects, or client lists without touching component code.

## Deploy

Not yet wired up. To publish to GitHub Pages as a project page:

1. Push this repo to GitHub as `portfolio` (so it serves at `<username>.github.io/portfolio`).
2. Add a `gh-pages` deploy step (e.g. the `gh-pages` npm package, or a GitHub Actions workflow)
   that runs `npm run build` and publishes `dist/` to the `gh-pages` branch.
3. Enable GitHub Pages in the repo settings, pointing at that branch.
