# theunblunt.com

Personal site of Gopal Singh. Create React App + Tailwind, prerendered to static HTML at build time.

## Commands

```bash
npm start          # dev server on :3000
npm test           # Jest + Testing Library
npm run build      # CRA build, then scripts/prerender.js
npm run preview    # serve ./build on :4173
```

## Where things live

- `src/content/site.js` is the single source of truth: profile, social links, products, publications, projects, writing and per-page metadata. Each entry notes its public source.
- `src/content/notes.js`, `books.js`, `shows.js` hold the archived 2024 notes and the reading and watch lists.
- `src/components/` holds shared pieces (SiteHeader, SectionIntro, ProductEntry, PublicationRow, ProjectEntry, WritingRow, ContactSection, SiteFooter).
- `src/pages/` holds the routes: `/`, `/research`, `/blog`, `/blog/:id`, `/books`, `/shows`, plus a 404.
- `src/index.css` holds the design tokens (colour, type, spacing) and component styles.
- Fonts (Geist, Geist Mono) are self-hosted in `public/fonts`.

## Build output

`scripts/prerender.js` renders every route with `react-dom/server` and writes `build/<route>.html`, each with its own title, description, canonical URL, Open Graph tags and JSON-LD. It also writes `build/404.html` and `build/sitemap.xml`. The client bundle hydrates the static markup, so content is readable without JavaScript.

On Cloudflare Pages or Netlify, `/research` resolves to `research.html` automatically, and unknown paths get `404.html` with a 404 status.
