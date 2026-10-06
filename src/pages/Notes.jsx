import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ArrowLink from '../components/ArrowLink';
import NotFound from './NotFound';
import usePageMeta from '../lib/usePageMeta';
import { notes } from '../content/notes';
import { formatDate } from '../content/site';

function ArchiveIntro({ title, children }) {
  return (
    <section className="hero" aria-labelledby="page-title">
      <div className="wrap grid-12">
        <div className="lg:col-span-3">
          <p className="eyebrow">Archive</p>
        </div>
        <div className="lg:col-span-8">
          <h1 id="page-title" className="h-page mt-3 lg:mt-0">
            {title}
          </h1>
          <div className="lede muted prose-width mt-6">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function NotesIndex() {
  usePageMeta('/blog');

  return (
    <>
      <ArchiveIntro title="Notes archive">
        <p>
          Short notes on television and books from 2024, kept from an earlier version of this site. For current
          work, see the <Link className="link" to="/research">research</Link>.
        </p>
      </ArchiveIntro>
      <section className="section section--flush pt-0" aria-label="Notes">
        <div className="wrap">
          <ul className="rule-list">
            {notes.map((note) => (
              <li key={note.id}>
                <article className="row grid-12">
                  <div className="row__meta meta">
                    <time dateTime={note.date}>{formatDate(note.date)}</time>
                    <span>{note.category}</span>
                  </div>
                  <div className="row__main">
                    <h2 className="row__title">
                      <Link to={`/blog/${note.id}`}>{note.title}</Link>
                    </h2>
                    <p className="row__summary">{note.body.split('. ')[0]}.</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-x-6">
            <ArrowLink to="/books">Reading list</ArrowLink>
            <ArrowLink to="/shows">Watch list</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}

export function NotePage() {
  const { id } = useParams();
  const note = notes.find((entry) => String(entry.id) === id);
  usePageMeta('/blog', {
    title: note ? `${note.title} | Gopal Singh` : 'Page not found | Gopal Singh',
    description: note ? `${note.body.slice(0, 150).trim()}…` : 'This note does not exist.',
    canonicalPath: note ? `/blog/${note.id}` : '/blog',
  });

  if (!note) return <NotFound />;

  return (
    <article className="hero" aria-labelledby="page-title">
      <div className="wrap grid-12">
        <div className="lg:col-span-3">
          <Link to="/blog" className="arrow-link">
            <ArrowLeft size={16} strokeWidth={1.75} aria-hidden="true" />
            Notes archive
          </Link>
        </div>
        <div className="lg:col-span-7">
          <p className="meta mt-6 lg:mt-3">
            <time dateTime={note.date}>{formatDate(note.date)}</time> · {note.category}
          </p>
          <h1 id="page-title" className="h-section mt-4">
            {note.title}
          </h1>
          <p className="lede prose-width mt-8">{note.body}</p>
        </div>
      </div>
    </article>
  );
}

export { ArchiveIntro };
