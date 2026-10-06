import { Link } from 'react-router-dom';
import usePageMeta from '../lib/usePageMeta';

export default function NotFound() {
  usePageMeta('/404');

  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="wrap grid-12">
        <div className="lg:col-span-3">
          <p className="eyebrow">404</p>
        </div>
        <div className="lg:col-span-8">
          <h1 id="page-title" className="h-page mt-3 lg:mt-0">
            This page doesn’t exist.
          </h1>
          <p className="lede muted prose-width mt-6">
            The link may be old, or the address may have a typo. Everything current is reachable from the
            homepage.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            <li>
              <Link to="/" className="btn btn--primary">
                Go to the homepage
              </Link>
            </li>
            <li>
              <Link to="/research" className="btn btn--secondary">
                See the research
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
