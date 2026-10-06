import { Link } from 'react-router-dom';
import { profile } from '../content/site';

const links = [
  { label: 'Research', to: '/research' },
  { label: 'Reading', to: '/books' },
  { label: 'Watching', to: '/shows' },
  { label: 'Notes archive', to: '/blog' },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p className="meta">
          © {new Date().getFullYear()} {profile.name} · {profile.handle}
        </p>
        <nav aria-label="Footer">
          <ul className="footer-links">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
            <li>
              <a href="#top">Back to top</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
