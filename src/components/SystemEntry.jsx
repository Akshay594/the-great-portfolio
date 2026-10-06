import ArrowLink from './ArrowLink';

export default function SystemEntry({ system }) {
  return (
    <article className="row grid-12" aria-labelledby={`${system.id}-title`}>
      <div className="row__meta meta">
        <span>{system.context}</span>
      </div>

      <div className="row__main">
        <h3 id={`${system.id}-title`} className="row__title">
          {system.name}
        </h3>
        <p className="mt-2 text-[18px] leading-[1.5]">{system.summary}</p>

        <dl className="project__qa">
          <div>
            <dt>How it works</dt>
            <dd>{system.how}</dd>
          </div>
          <div>
            <dt>The hard part</dt>
            <dd>{system.hard}</dd>
          </div>
        </dl>

        <p className="meta mt-5">{system.stack}</p>
      </div>

      <div className="row__aside">
        <div className="links-inline lg:flex-col">
          {system.links.map((link) => (
            <ArrowLink key={link.href} href={link.href} label={`${link.label}: ${system.name}`}>
              {link.label}
            </ArrowLink>
          ))}
        </div>
      </div>
    </article>
  );
}
