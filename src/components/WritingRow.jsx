import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { formatMonth } from '../content/site';

export default function WritingRow({ entry }) {
  const Icon = entry.to ? ArrowRight : ArrowUpRight;
  const title = (
    <>
      {entry.title}
      <Icon className="ml-1 inline-block align-[-0.1em]" size={18} strokeWidth={1.75} aria-hidden="true" />
    </>
  );

  return (
    <article className="row grid-12">
      <div className="row__meta meta">
        <span>{entry.dateLabel ?? <time dateTime={entry.date}>{formatMonth(entry.date)}</time>}</span>
        <span>{entry.destination}</span>
      </div>
      <div className="row__main">
        <h3 className="row__title">
          {entry.to ? <Link to={entry.to}>{title}</Link> : <a href={entry.href}>{title}</a>}
        </h3>
        <p className="row__summary">{entry.description}</p>
      </div>
    </article>
  );
}
