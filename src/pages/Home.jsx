import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionIntro from '../components/SectionIntro';
import ProductEntry from '../components/ProductEntry';
import PublicationRow from '../components/PublicationRow';
import SystemEntry from '../components/SystemEntry';
import WritingRow from '../components/WritingRow';
import ContactSection from '../components/ContactSection';
import ArrowLink from '../components/ArrowLink';
import usePageMeta from '../lib/usePageMeta';
import { products, profile, publications, systems, toolkit, writing } from '../content/site';

const archiveEntry = {
  title: 'Notes archive',
  to: '/blog',
  dateLabel: '2024',
  destination: 'theunblunt.com',
  description: 'Short notes on television and books from an earlier version of this site, alongside my reading and watching lists.',
};

export default function Home() {
  usePageMeta('/');

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="wrap grid-12">
          <div className="hero__text">
            <p className="eyebrow">
              {profile.name} / {profile.handle}
            </p>
            <h1 id="hero-title" className="display hero__display mt-6">
              <span>Founder.</span> <span>Engineer.</span> <span>AI researcher.</span>
            </h1>
            <p className="lede prose-width mt-8">
              I build AI products and the infrastructure under them. My research spans transformer memory,
              representation geometry, and what happens when language-model systems fail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/#work" className="btn btn--primary">
                Explore my work
              </Link>
              <Link to="/research" className="btn btn--secondary">
                Read my research
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
              </Link>
            </div>
            <ul className="facts meta mt-8">
              <li>Based in {profile.location}.</li>
              <li>{profile.jobTitle}.</li>
            </ul>
          </div>

          <div className="hero__portrait">
            <img
              className="portrait"
              src={profile.portrait.src}
              width={profile.portrait.width}
              height={profile.portrait.height}
              alt={profile.portrait.alt}
              fetchpriority="high"
            />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="work">
        <div className="wrap">
          <SectionIntro id="work" label="01 / Products" title="What I’m building">
            Two products, both live. One keeps AI applications working when a model provider fails. The other
            turns what you already have into motion that knows what it’s talking about.
          </SectionIntro>
          <div className="products">
            {products.map((product) => (
              <ProductEntry key={product.name} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="research">
        <div className="wrap">
          <SectionIntro
            id="research"
            label="02 / Research"
            title="Research"
            action={<ArrowLink to="/research">Questions, methods and results for each paper</ArrowLink>}
          >
            My research spans transformer memory, representation geometry, and the reliability of systems serving
            language models. All four papers are arXiv preprints that I co-authored.
          </SectionIntro>
          <ol className="rule-list" reversed>
            {publications.map((paper) => (
              <li key={paper.id}>
                <PublicationRow paper={paper} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="systems">
        <div className="wrap">
          <SectionIntro id="systems" label="03 / Engineering" title="Systems I’ve worked on">
            What sits underneath the products and the papers: how each system works, and the part that was hard
            to get right.
          </SectionIntro>
          <ul className="rule-list">
            {systems.map((system) => (
              <li key={system.id}>
                <SystemEntry system={system} />
              </li>
            ))}
          </ul>
          <div className="grid-12 mt-10">
            <dl className="toolkit lg:col-start-4 lg:col-span-9">
              {toolkit.map((group) => (
                <div key={group.area}>
                  <dt className="meta">{group.area}</dt>
                  <dd>{group.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="writing">
        <div className="wrap">
          <SectionIntro id="writing" label="04 / Writing" title="Writing">
            Most of what I write at the moment explains the research in plain language: what we measured, what
            broke, and what the numbers do and don’t show. These pieces are published on Metriqual Research.
          </SectionIntro>
          <ul className="rule-list">
            {writing.map((entry) => (
              <li key={entry.id}>
                <WritingRow entry={entry} />
              </li>
            ))}
            <li>
              <WritingRow entry={archiveEntry} />
            </li>
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="about">
        <div className="wrap grid-12">
          <div className="about__head">
            <p className="eyebrow">05 / About</p>
            <h2 id="about" className="h-section mt-3" tabIndex={-1}>
              About
            </h2>
          </div>
          <div className="about__body lede prose-width">
            <p>
              I’ve worked in technology for about nine years, most of it with my hands in the code. I build
              backends in Python with FastAPI and Django, interfaces in React and Next.js, data models in Postgres,
              and the cloud infrastructure underneath. I’ve led technical work for teams, and I’ve taught at
              university level.
            </p>
            <p>
              Right now I split my time between building products and doing research, and I don’t treat them as
              separate jobs. Metriqual started from a reliability problem: gateways kept requests alive but lost
              the conversation. The failover and failure-mode papers came out of fixing that properly. The
              interpretability and attention work comes from the other direction, from questions I wanted
              answered for their own sake.
            </p>
            <p>
              The questions that hold my attention are usually mathematical or conceptual: why a representation
              takes the shape it does, or what memory means for a model with a fixed-size state. Outside software
              I read computational neuroscience, study Advaita Vedanta, and lift and run most days.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
