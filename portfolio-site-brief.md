# Personal Portfolio Site — Build Brief

## Purpose
A personal portfolio/CV site for job hunting — targeting senior/staff/lead
full-stack developer roles, remote-only. Audience is recruiters and hiring
managers, so it needs to be fast to skim and easy to read, not just visually
striking.

## Layout
- Single-page, scrolling layout — everything reachable within a few scrolls,
  no deep multi-page navigation
- Sticky/fixed nav bar or minimal header so key links (About, Projects,
  Contact/CV) stay reachable while scrolling
- Project section: one card per project, each with a short one-line
  description, tech stack used, and links to live demo + repo where
  available — show, don't tell
- Keep structure and information density conventional and scannable —
  the personality of the site should come from the visual styling layer,
  not from an unconventional structure

## Visual style — neon/cyberpunk, restrained
Reference: https://dribbble.com/shots/21571426-VPN-Service-Website-Design
(style only — it's a VPN product site, ignore its content/copy/sections)

Target a midpoint between two extremes:
- **Too far one way:** full neon-on-neon, glitch/scanline overload, low
  contrast, hard to read (avoid this)
- **Too far the other way:** neon reduced to a barely-there accent on an
  otherwise generic dark site (also avoid — want more presence than this)

Concretely:
- Dark neutral background (near-black, not pure black) as the base for most
  surfaces
- Neon pink/purple used deliberately: glowing borders, button outlines,
  hover states, section dividers — not as full-surface fills
- Angled/cut corners on cards and buttons rather than fully rounded or fully
  sharp — a recognisable cyberpunk detail
- One clear "signature" moment done boldly — e.g. a glitch or glow effect on
  the name/logo in the hero, or a neon underline/glow on nav links on hover
  — rather than spreading strong effects evenly across the whole page
- Body text stays high-contrast and easily readable — plain white/light grey
  on dark, no neon body copy
- Suggested palette (adjust to taste once you see it rendered):
  - Primary accent: hot pink, around `#FF00E5`
  - Secondary accent: violet, around `#9D00FF`
  - Background: near-black, around `#0A0A0F`
  - Body text: light grey/white, high contrast against background

## Naming conventions
- Hyphens for anything front-facing: repo name, URL paths, page slugs,
  CSS classes visible in build output
- Underscores for backend/infrastructure-only naming (internal variables,
  config keys, scripts) where that's the more natural convention for the
  language/tool in use

## Deployment
- Will be published via GitHub Pages
- If aiming for the root domain (`<username>.github.io`), the repo itself
  must be named exactly `<username>.github.io`; otherwise it publishes to
  `<username>.github.io/<repo-name>`

## Deliverable for this session
Set up the project structure and build out the single-page layout above with
placeholder content (sections, nav, project cards) styled per the visual
direction. I'll supply real project content and copy afterward.
