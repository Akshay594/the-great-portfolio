/* eslint-disable no-console */
// Build step: render every route to static HTML after `react-scripts build`.
// The client bundle then hydrates the markup. This keeps the content readable
// without JavaScript and gives each route its own title, description,
// canonical URL and structured data.

const fs = require('fs');
const path = require('path');
const { addHook } = require('sucrase/dist/register');

addHook('.js', { transforms: ['imports', 'jsx'], jsxRuntime: 'automatic', production: true });
addHook('.jsx', { transforms: ['imports', 'jsx'], jsxRuntime: 'automatic', production: true });

const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');

const root = path.resolve(__dirname, '..');
const buildDir = path.join(root, 'build');
const App = require(path.join(root, 'src/App.js')).default;
const site = require(path.join(root, 'src/content/site.js'));
const { notes } = require(path.join(root, 'src/content/notes.js'));

const { SITE_URL, pages, profile, socials, publications, arxivUrl } = site;

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: profile.name,
  alternateName: profile.handle,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${profile.portrait.src}`,
  email: `mailto:${profile.email}`,
  jobTitle: 'Founder & CEO',
  worksFor: { '@type': 'Organization', name: 'Metriqual', url: 'https://metriqual.com' },
  address: { '@type': 'PostalAddress', addressLocality: 'Jaipur', addressCountry: 'IN' },
  sameAs: socials.map((social) => social.href),
  knowsAbout: ['Machine learning', 'LLM infrastructure', 'Mechanistic interpretability', 'Software engineering'],
};

const researchLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Research by Gopal Singh',
  itemListElement: publications.map((paper, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'ScholarlyArticle',
      headline: paper.title,
      url: arxivUrl(paper.arxivId),
      datePublished: paper.submitted,
      ...(paper.revised ? { dateModified: paper.revised } : {}),
      author: paper.authors.map((name) =>
        name === profile.name ? { '@id': `${SITE_URL}/#person`, '@type': 'Person', name } : { '@type': 'Person', name }
      ),
      identifier: `arXiv:${paper.arxivId}`,
      abstract: paper.summary,
      publisher: { '@type': 'Organization', name: 'arXiv' },
    },
  })),
};

const routes = [
  { path: '/', file: 'index.html', ld: [personLd] },
  { path: '/research', file: 'research.html', ld: [researchLd] },
  { path: '/blog', file: 'blog.html' },
  ...notes.map((note) => ({
    path: `/blog/${note.id}`,
    file: `blog/${note.id}.html`,
    meta: { title: `${note.title} | Gopal Singh`, description: `${note.body.slice(0, 150).trim()}…` },
  })),
  { path: '/books', file: 'books.html' },
  { path: '/shows', file: 'shows.html' },
  { path: '/404', file: '404.html', noindex: true },
];

const template = fs.readFileSync(path.join(buildDir, 'index.html'), 'utf8');
// The minifier drops comments, so strip the default per-page tags directly
// and insert the route's own set before </head>.
const pageTagPattern =
  /<title>[\s\S]*?<\/title>|<meta (?:name|property)="(?:description|og:[^"]+|twitter:[^"]+)"[^>]*>|<link rel="canonical"[^>]*>/g;
const baseHead = template.replace(pageTagPattern, '');
if (!/<\/head>/.test(baseHead) || /og:title/.test(baseHead)) throw new Error('Unexpected build/index.html head');

const headFor = (route) => {
  const meta = { ...pages[route.path], ...route.meta };
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const image = `${SITE_URL}/og-image.png`;
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    route.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${url}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="theunblunt" />',
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta property="og:image:alt" content="Gopal Singh. Founder, engineer and AI researcher." />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    ...(route.ld || []).map(jsonLd),
  ].join('');
};

for (const route of routes) {
  const location = route.path === '/404' ? '/__not-found__' : route.path;
  const markup = renderToString(
    React.createElement(StaticRouter, { location }, React.createElement(App))
  );
  const html = baseHead
    .replace('</head>', `${headFor(route)}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  const outFile = path.join(buildDir, route.file);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html);
  console.log(`prerendered ${route.path.padEnd(12)} -> build/${route.file}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .filter((route) => !route.noindex)
  .map((route) => `  <url><loc>${SITE_URL}${route.path === '/' ? '/' : route.path}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
console.log('wrote build/sitemap.xml');
