import { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import Research from './pages/Research';
import { NotePage, NotesIndex } from './pages/Notes';
import { Books, Shows } from './pages/Shelf';
import NotFound from './pages/NotFound';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Router-aware scrolling: jump to #anchors (moving focus to the target for
// keyboard and screen-reader users) and start new pages at the top.
function ScrollManager() {
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      if (!location.hash) return;
    }
    if (location.hash) {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) {
        target.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
        target.focus({ preventScroll: true });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.key, location.hash, location.pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<NotesIndex />} />
          <Route path="/blog/:id" element={<NotePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
