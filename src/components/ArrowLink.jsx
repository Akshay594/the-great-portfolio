import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// A text link with a small arrow. External links get an up-right arrow and
// open in the same tab, so normal browser navigation is preserved.
export default function ArrowLink({ href, to, children, className = '', label }) {
  if (to) {
    return (
      <Link to={to} className={`arrow-link arrow-link--right ${className}`} aria-label={label}>
        {children}
        <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
      </Link>
    );
  }
  return (
    <a href={href} className={`arrow-link ${className}`} aria-label={label}>
      {children}
      <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}
