import { Fragment } from 'react';
import ArrowLink from './ArrowLink';
import { arxivPdfUrl, arxivUrl, formatDate, formatMonth, profile } from '../content/site';

// Authors in their original order, with Gopal Singh set in bold.
export function Authors({ authors }) {
  return (
    <p className="authors">
      <span className="sr-only">Authors: </span>
      {authors.map((author, index) => (
        <Fragment key={author}>
          {index > 0 && ', '}
          {author === profile.name ? <strong>{author}</strong> : author}
        </Fragment>
      ))}
    </p>
  );
}

export default function PublicationRow({ paper, expanded = false, headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  const absUrl = arxivUrl(paper.arxivId);

  return (
    <article className="row grid-12" id={expanded ? paper.id : undefined} aria-labelledby={`${paper.id}-title`}>
      <div className="row__meta meta">
        <span>
          <time dateTime={paper.submitted}>{expanded ? formatDate(paper.submitted) : formatMonth(paper.submitted)}</time>
          {expanded && paper.revised && (
            <>
              {' '}
              <span>(revised <time dateTime={paper.revised}>{formatDate(paper.revised)}</time>)</span>
            </>
          )}
        </span>
        <span>{paper.topic}</span>
        {expanded && <span>arXiv:{paper.arxivId} [{paper.category}]</span>}
      </div>

      <div className="row__main">
        <Heading id={`${paper.id}-title`} className="row__title">
          <a href={absUrl}>{paper.title}</a>
        </Heading>
        <Authors authors={paper.authors} />

        {expanded ? (
          <>
            <p className="meta mt-2">arXiv preprint · {paper.comments}</p>
            <dl className="paper-details">
              <div>
                <dt>Question</dt>
                <dd>{paper.question}</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>{paper.approach}</dd>
              </div>
              <div>
                <dt>Reported result</dt>
                <dd>{paper.result}</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>{paper.scope}</dd>
              </div>
            </dl>
          </>
        ) : (
          <p className="row__summary">{paper.summary}</p>
        )}
      </div>

      <div className="row__aside">
        <div className="links-inline lg:flex-col">
          <ArrowLink href={absUrl} label={`Read paper: ${paper.title}`}>
            Read paper
          </ArrowLink>
          {expanded && (
            <ArrowLink href={arxivPdfUrl(paper.arxivId)} label={`PDF: ${paper.title}`}>
              PDF
            </ArrowLink>
          )}
          {expanded && paper.code && (
            <ArrowLink href={paper.code} label={`Code for ${paper.title}`}>
              Code
            </ArrowLink>
          )}
          {expanded && paper.writeup && (
            <ArrowLink href={paper.writeup.href} label={`Write-up of ${paper.title} on Metriqual Research`}>
              Write-up
            </ArrowLink>
          )}
        </div>
      </div>
    </article>
  );
}
