<p align="center">
  <img src="public/logos/rext-logo.png" alt="Rext logo" width="88" />
</p>

<h1 align="center">Rext — Official Website</h1>

<p align="center">
  <strong>One App. Infinite Possibilities.</strong><br/>
  The official website for Rext, the extensible media platform for iOS.
</p>

---

## Overview

This repository contains the source for the Rext website: landing page, extensions preview, developer hub, documentation, roadmap, and legal pages.

**Stack**

| Layer      | Choice                       |
| ---------- | ---------------------------- |
| Framework  | Next.js 15 (App Router)      |
| Language   | TypeScript                   |
| Styling    | Tailwind CSS                 |
| Animation  | Framer Motion                |
| Icons      | Lucide React                 |
| Deployment | Vercel                       |

## Getting started

Requires **Node.js 18.18+** (20+ recommended).

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://rextt.site](http://rextt.site).

**Production build**

```bash
npm run build
npm start
```

## Project structure

```
rext-website/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── globals.css           # Design tokens & base styles
│   ├── docs/
│   │   ├── layout.tsx        # Docs shell (sidebar)
│   │   └── [[...slug]]/      # All doc pages (data-driven)
│   ├── developers/           # Developer hub
│   ├── extensions/           # Extension marketplace preview
│   ├── roadmap/              # Public roadmap
│   ├── privacy/              # Privacy & terms
│   ├── sitemap.ts            # Generated sitemap
│   └── robots.ts             # Generated robots.txt
├── components/
│   ├── Navbar.tsx            # Sticky, blur-on-scroll nav
│   ├── Footer.tsx
│   ├── Hero.tsx              # Cinematic hero with phone mockup
│   ├── PhoneMockup.tsx       # CSS-drawn iPhone with app screens
│   ├── FeatureCard.tsx
│   ├── ScreenshotShowcase.tsx
│   ├── Timeline.tsx          # "How it works" steps
│   ├── DocumentationSidebar.tsx
│   └── Reveal.tsx            # Scroll-reveal animation wrapper
├── lib/
│   └── docs.ts               # Documentation content registry
└── public/
    └── logos/
```

## Editing documentation

All documentation content lives in [`lib/docs.ts`](lib/docs.ts). Each entry defines a slug, title, and sections (with optional code blocks). The sidebar, pages, table of contents, prev/next links, and sitemap are all generated from this single file — add an entry and everything updates.

## Design system

The theme is defined in `tailwind.config.ts` and `app/globals.css`:

- **Palette** — near-black base (`#05060A`), charcoal surfaces, and a blue→violet accent gradient derived from the Rext logo (`#4D7CFE → #A855F7`).
- **Type** — Sora (display), Inter (body), JetBrains Mono (code/labels).
- **Motion** — Framer Motion with scroll reveals and ambient floating; `prefers-reduced-motion` is respected throughout.

## Deployment

The site is a standard Next.js app and deploys to Vercel with zero configuration: import the repository, and Vercel detects the framework automatically.

## Contributing

Issues and pull requests are welcome. For content changes, most copy lives directly in the page components and `lib/docs.ts`.

## License

See [LICENSE](LICENSE) in the main Rext repository.
# rextt-web
