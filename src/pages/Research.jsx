import PublicationRow from '../components/PublicationRow';
import usePageMeta from '../lib/usePageMeta';
import { publications } from '../content/site';

export default function Research() {
  usePageMeta('/research');

  return (
    <>
      <section className="hero" aria-labelledby="page-title">
        <div className="wrap grid-12">
          <div className="lg:col-span-3">
            <p className="eyebrow">Papers</p>
          </div>
          <div className="lg:col-span-8">
            <h1 id="page-title" className="h-page mt-3 lg:mt-0">
              Research
            </h1>
            <div className="lede prose-width mt-6 space-y-4">
              <p>
                My research spans transformer memory, representation geometry, and the reliability of systems
                serving language models.
              </p>
              <p className="muted">
                Two of these papers come straight out of building Metriqual: what fails in a multi-provider
                gateway, and whether conversation state survives failover. The other two are about how
                transformers store and move information.
              </p>
            </div>
            <p className="meta mt-8">
              4 arXiv preprints, newest first. Bibliographic details follow the arXiv records. Bold marks my name;
              author order is as published.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--flush pt-0" aria-label="Publications">
        <div className="wrap">
          <ol className="rule-list" reversed>
            {publications.map((paper) => (
              <li key={paper.id}>
                <PublicationRow paper={paper} expanded headingLevel={2} />
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
