import React from 'react';
import { Github, Linkedin, Mail, Youtube, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import gopal from './gopal.png';

// Ornate Divider Component
const OrnateDivider = () => (
  <div className="flex items-center justify-center my-16">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-muted to-transparent"></div>
    <span className="px-4 text-gold text-2xl">❧</span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold-muted to-transparent"></div>
  </div>
);

// Chapter Header Component
const ChapterHeader = ({ number, title }) => (
  <div className="text-center mb-12">
    <span className="font-display text-xs tracking-[0.3em] text-gold uppercase">Chapter {number}</span>
    <h2 className="font-display text-3xl md:text-4xl text-cream mt-2 tracking-wide">{title}</h2>
  </div>
);

// Vintage Card Component
const VintageCard = ({ children, className = '' }) => (
  <div className={`relative bg-dark-card border border-gold-muted/40 p-6 ${className}`}>
    <div className="absolute top-2 left-2 right-2 bottom-2 border border-gold/20 pointer-events-none"></div>
    {children}
  </div>
);

// Code Block with vintage styling
const ManuscriptBlock = ({ children }) => (
  <div className="bg-dark-elevated border border-gold-muted/30 p-6 font-mono text-gold/80 text-sm leading-relaxed">
    <pre className="whitespace-pre-wrap">{children}</pre>
  </div>
);

// Tech Item Component
const TechItem = ({ name, years, description, highlights }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="border-b border-gold-muted/20 py-5 last:border-b-0"
  >
    <div className="flex items-baseline justify-between mb-2">
      <h4 className="font-display text-lg text-gold">{name}</h4>
      {years && <span className="font-accent text-xs text-gold-muted italic">{years}</span>}
    </div>
    <p className="font-body text-cream/70 text-sm leading-relaxed">{description}</p>
    {highlights && (
      <div className="flex flex-wrap gap-2 mt-3">
        {highlights.map((h, i) => (
          <span key={i} className="text-xs font-body text-cream/50 border border-gold-muted/30 px-2 py-1">{h}</span>
        ))}
      </div>
    )}
  </motion.div>
);

const Home = () => {
  const techStacks = {
    infrastructure: [
      { 
        name: 'Rust', 
        years: '3+ years',
        description: 'Memory-safe systems programming without garbage collection overhead. Building high-performance services where reliability is non-negotiable—API gateways, data pipelines, and observability infrastructure.',
        highlights: ['async/await', 'Tokio', 'Actix', 'Zero-cost abstractions']
      },
      { 
        name: 'PostgreSQL', 
        years: '8+ years',
        description: 'Battle-tested relational database for complex data models. Advanced query optimization, partitioning strategies, and JSONB for flexible schemas when needed.',
        highlights: ['Query optimization', 'Partitioning', 'pg_stat', 'Extensions']
      },
      { 
        name: 'Python', 
        years: '9+ years',
        description: 'Primary language for machine learning research and production systems. Published peer-reviewed work with Stanford collaborators. Deep expertise in the scientific computing ecosystem.',
        highlights: ['NumPy', 'Pandas', 'scikit-learn', 'FastAPI']
      },
      { 
        name: 'Docker & K8s', 
        years: '6+ years',
        description: 'Container orchestration from development to production. Building reproducible environments and managing stateful workloads at scale.',
        highlights: ['Helm', 'ArgoCD', 'Multi-stage builds', 'Service mesh']
      }
    ],
    ai: [
      { 
        name: 'LLM Observability', 
        years: '2+ years',
        description: 'Built production observability for 700+ prompts across multiple LLM providers. Trace latency, token usage, semantic drift, and hallucination patterns at scale.',
        highlights: ['Prompt versioning', 'A/B testing', 'Cost analytics', 'Evals']
      },
      { 
        name: 'AI Gateway', 
        description: 'Rust-based routing layer for LLM requests. Intelligent caching, automatic fallbacks between providers, rate limiting, and response streaming with minimal latency overhead.',
        highlights: ['Multi-provider', 'Semantic cache', 'Streaming', 'Circuit breaker']
      },
      { 
        name: 'NLP & Transformers', 
        years: '5+ years',
        description: 'From classical NLP through the transformer revolution. Fine-tuning, RAG architectures, embeddings, and building domain-specific language understanding systems.',
        highlights: ['BERT/GPT', 'RAG', 'Vector DBs', 'Embeddings']
      },
      { 
        name: 'MLOps', 
        years: '4+ years',
        description: 'End-to-end ML pipelines: experiment tracking, model versioning, feature stores, and automated deployment. Making models production-ready, not just notebook-ready.',
        highlights: ['MLflow', 'DVC', 'Feature stores', 'Model registry']
      }
    ],
    tools: [
      { 
        name: 'TypeScript', 
        years: '4+ years',
        description: 'Type-safe JavaScript for complex frontend applications and Node.js services. Strict typing, generics, and discriminated unions for bulletproof interfaces.',
        highlights: ['Strict mode', 'Generics', 'Node.js', 'Zod']
      },
      { 
        name: 'React & Next.js', 
        years: '5+ years',
        description: 'Component-driven UI development with modern React patterns. Server-side rendering, static generation, and optimized client-side hydration.',
        highlights: ['Hooks', 'Server Components', 'Tailwind', 'Framer Motion']
      },
      { 
        name: 'Redis', 
        years: '6+ years',
        description: 'In-memory data structures for caching, session management, rate limiting, and real-time features. Understanding when to use—and when not to.',
        highlights: ['Pub/Sub', 'Streams', 'Lua scripts', 'Clustering']
      },
      { 
        name: 'System Design', 
        description: 'Designing distributed systems that scale gracefully. Load balancing, database sharding, event-driven architectures, and graceful degradation patterns.',
        highlights: ['CAP theorem', 'Event sourcing', 'CQRS', 'Microservices']
      }
    ]
  };

  return (
    <div className="min-h-screen bg-dark text-cream">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23C9A227' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Portrait with ornate frame */}
            <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 mb-8">
              <div className="absolute inset-0 border-2 border-gold rounded-full"></div>
              <div className="absolute inset-2 border border-gold-muted rounded-full"></div>
              <img
                className="absolute inset-4 rounded-full object-cover"
                src={gopal}
                alt="Gopal Singh"
              />
            </div>

            <h1 className="font-display text-4xl md:text-6xl text-cream tracking-wide mb-4">
              theunblunt
            </h1>

            <p className="font-accent text-xl md:text-2xl text-gold italic mb-8">
              A Rust-writing Vedantin
            </p>

            <ManuscriptBlock>
{`let approach = Infrastructure::quiet();
let horizon = TimeFrame::Long;

loop {
    let threat = invert(&goal);
    ship(build(threat.negate()));
}`}
            </ManuscriptBlock>

            <p className="font-body text-lg text-cream/70 mt-8 max-w-2xl mx-auto leading-relaxed">
              Quiet infrastructure. Long horizons. The shipping is the statement.
            </p>

            {/* Social Links */}
            <div className="mt-10 flex justify-center gap-6">
              {[
                { href: "https://github.com/akshay594", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/theunblunt/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://www.youtube.com/@unblunttheory", icon: Youtube, label: "YouTube" },
                { href: "https://x.com/unblunttheory", icon: Twitter, label: "Twitter" },
                { href: "mailto:gopalsinghpanwar411@gmail.com", icon: Mail, label: "Email" }
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gold-muted/40 text-gold-muted hover:text-gold hover:border-gold transition-colors duration-300"
                  title={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <OrnateDivider />

      {/* Vision Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <ChapterHeader number="I" title="The Vision" />
        
        <VintageCard className="max-w-3xl mx-auto">
          <p className="font-body text-cream/80 leading-relaxed text-lg mb-6">
            Build infrastructure that outlasts its creator. Systems that compound while you sleep. 
            Not the loudest in the room—the one still standing when the room is empty.
          </p>

          <div className="border-t border-gold-muted/20 pt-6 mt-6">
            <h4 className="font-display text-gold text-center mb-4">Operating Principles</h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <span className="font-display text-cream">Invert</span>
                <p className="font-accent text-gold-muted text-sm italic mt-1">Avoid failure first</p>
              </div>
              <div>
                <span className="font-display text-cream">Compound</span>
                <p className="font-accent text-gold-muted text-sm italic mt-1">Long games only</p>
              </div>
              <div>
                <span className="font-display text-cream">Ship</span>
                <p className="font-accent text-gold-muted text-sm italic mt-1">The work speaks</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gold-muted/20 pt-6 mt-6">
            <p className="font-accent text-gold italic text-center">
              "Quiet infrastructure over loud performance. Multi-threaded life not because 
              I cannot focus—because no single thing controls me."
            </p>
          </div>
        </VintageCard>
      </section>

      <OrnateDivider />

      {/* Stack Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ChapterHeader number="II" title="The Stack" />
        
        <p className="font-body text-center text-cream/60 mb-8 max-w-3xl mx-auto">
          Infrastructure that compounds. Tools chosen not for novelty but for endurance. 
          A decade of building systems that ship and stay shipped.
        </p>

        {/* Stats Row */}
        <div className="flex justify-center gap-12 mb-12 border-y border-gold-muted/20 py-6">
          <div className="text-center">
            <span className="font-display text-2xl text-gold">9+</span>
            <p className="font-accent text-xs text-cream/50 mt-1">Years Python/ML</p>
          </div>
          <div className="text-center">
            <span className="font-display text-2xl text-gold">700+</span>
            <p className="font-accent text-xs text-cream/50 mt-1">Production Prompts</p>
          </div>
          <div className="text-center">
            <span className="font-display text-2xl text-gold">3+</span>
            <p className="font-accent text-xs text-cream/50 mt-1">Years Rust</p>
          </div>
          <div className="text-center">
            <span className="font-display text-2xl text-gold">∞</span>
            <p className="font-accent text-xs text-cream/50 mt-1">Daily Commits</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <VintageCard>
            <h3 className="font-display text-lg text-gold mb-2 text-center border-b border-gold-muted/20 pb-3">Infrastructure</h3>
            <p className="font-accent text-xs text-center text-cream/40 italic mb-4">Systems that last</p>
            {techStacks.infrastructure.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </VintageCard>

          <VintageCard>
            <h3 className="font-display text-lg text-gold mb-2 text-center border-b border-gold-muted/20 pb-3">AI & ML</h3>
            <p className="font-accent text-xs text-center text-cream/40 italic mb-4">Intelligence at scale</p>
            {techStacks.ai.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </VintageCard>

          <VintageCard>
            <h3 className="font-display text-lg text-gold mb-2 text-center border-b border-gold-muted/20 pb-3">Tools & Patterns</h3>
            <p className="font-accent text-xs text-center text-cream/40 italic mb-4">The supporting cast</p>
            {techStacks.tools.map((tech) => (
              <TechItem key={tech.name} {...tech} />
            ))}
          </VintageCard>
        </div>
      </section>

      <OrnateDivider />

      {/* Philosophy Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <ChapterHeader number="III" title="The Philosophy" />

        <VintageCard className="max-w-2xl mx-auto">
          <p className="font-body text-cream/80 leading-relaxed mb-6">
            Advaita Vedanta as operating system. The self that watches the self. 
            Eastern philosophy meeting Western rigor. Not spirituality as escape—as framework.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
            <div>
              <span className="font-display text-cream text-sm">Sakshi</span>
              <p className="font-accent text-gold-muted text-xs italic">The witness</p>
            </div>
            <div>
              <span className="font-display text-cream text-sm">Viveka</span>
              <p className="font-accent text-gold-muted text-xs italic">Discernment</p>
            </div>
            <div>
              <span className="font-display text-cream text-sm">Neti Neti</span>
              <p className="font-accent text-gold-muted text-xs italic">Not this, not that</p>
            </div>
            <div>
              <span className="font-display text-cream text-sm">Turiya</span>
              <p className="font-accent text-gold-muted text-xs italic">The fourth state</p>
            </div>
          </div>
        </VintageCard>
      </section>

      <OrnateDivider />

      {/* Training Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <ChapterHeader number="IV" title="The Training" />

        <VintageCard className="max-w-2xl mx-auto">
          <p className="font-body text-cream/80 leading-relaxed mb-6">
            The body and the codebase are the same project. Not separate from the work. 
            The same discipline in a different medium. Heavy lifting. Daily running. HYROX preparation.
          </p>

          <ManuscriptBlock>
{`loop {
    lift(Heavy);
    run(Daily);
    prepare(HYROX);
}`}
          </ManuscriptBlock>

          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div className="border-r border-gold-muted/20 last:border-r-0">
              <span className="font-display text-cream">Running</span>
              <p className="font-accent text-gold text-sm italic">Daily</p>
            </div>
            <div className="border-r border-gold-muted/20 last:border-r-0">
              <span className="font-display text-cream">Lifting</span>
              <p className="font-accent text-gold text-sm italic">Heavy</p>
            </div>
            <div>
              <span className="font-display text-cream">HYROX</span>
              <p className="font-accent text-gold text-sm italic">Prep</p>
            </div>
          </div>
        </VintageCard>
      </section>

      <OrnateDivider />

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="font-body text-cream/50 text-sm mb-4">
          I do not write to be liked. But if you get it, you get it.
        </p>
        <p className="font-accent text-gold-muted italic text-sm">
          Wherever the work requires
        </p>
      </footer>
    </div>
  );
};

export default Home;
