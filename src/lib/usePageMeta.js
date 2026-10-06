import { useEffect } from 'react';
import { SITE_URL, pages } from '../content/site';

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

// Keeps title, description, canonical and social tags in step with client-side
// navigation. The same values are written into static HTML at build time.
export default function usePageMeta(path, overrides = {}) {
  const { title, description } = { ...pages[path], ...overrides };
  const canonicalPath = overrides.canonicalPath ?? path;

  useEffect(() => {
    const url = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [title, description, canonicalPath]);
}
