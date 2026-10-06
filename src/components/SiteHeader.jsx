import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const navItems = [
  { label: 'Work', to: '/#work' },
  { label: 'Research', to: '/research' },
  { label: 'Writing', to: '/#writing' },
  { label: 'About', to: '/#about' },
  { label: 'Contact', to: '/#contact' },
];

const isCurrent = (item, location) =>
  item.to === '/research' ? location.pathname.startsWith('/research') : false;

export default function SiteHeader() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [location.key]);

  useEffect(() => {
    if (!open) return undefined;
    menuRef.current?.querySelector('a')?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.matchMedia('(min-width: 640px)').matches) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header id="top" className="site-header" data-scrolled={scrolled} data-open={open}>
      <div className="wrap">
        <div className="site-header__bar">
          <Link to="/" className="wordmark" aria-label="theunblunt, home">
            theunblunt
          </Link>

          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="nav-link"
                    aria-current={isCurrent(item, location) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={buttonRef}
            type="button"
            className="menu-button sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} strokeWidth={1.75} aria-hidden="true" /> : <Menu size={20} strokeWidth={1.75} aria-hidden="true" />}
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        {open && (
          <nav id="mobile-nav" ref={menuRef} aria-label="Primary" className="mobile-nav sm:hidden">
            <ul className="m-0 list-none p-0">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="nav-link"
                    aria-current={isCurrent(item, location) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
