// Single source of truth for everything the site says about Gopal Singh.
// Every fact here was checked against a public source; the source is noted
// next to each entry so it can be re-verified when something changes.

export const SITE_URL = 'https://theunblunt.com';

export const profile = {
  name: 'Gopal Singh',
  handle: 'theunblunt',
  location: 'Jaipur, India',
  email: 'gopalsinghpanwar411@gmail.com',
  portrait: {
    src: '/images/gopal-singh.jpg',
    width: 436,
    height: 582,
    alt: 'Black-and-white portrait of Gopal Singh',
  },
  jobTitle: 'Founder & CEO, Metriqual',
  description:
    'Founder, engineer and AI researcher. I build AI products and infrastructure, and co-author research on transformer memory, representation geometry and the reliability of LLM serving systems.',
};

// Profiles under the theunblunt handle (each resolves to Gopal Singh).
// YouTube is carried over from the previous version of this site.
export const socials = [
  { label: 'X', handle: '@theunblunt', href: 'https://x.com/theunblunt' },
  { label: 'LinkedIn', handle: 'theunblunt', href: 'https://www.linkedin.com/in/theunblunt/' },
  { label: 'Instagram', handle: '@theunblunt', href: 'https://www.instagram.com/theunblunt/' },
  { label: 'GitHub', handle: 'theunblunt', href: 'https://github.com/theunblunt' },
  { label: 'YouTube', handle: '@unblunttheory', href: 'https://www.youtube.com/@unblunttheory' },
];

// Source: metriqual.com, metriqual.com/about-us/, motionqual.com (checked Oct 2026).
export const products = [
  {
    name: 'Metriqual',
    url: 'https://metriqual.com',
    domain: 'metriqual.com',
    purpose:
      'An AI gateway for routing requests across providers, preserving conversation context during failover, and tracking usage and spend.',
    role: 'Founder & CEO',
    status: 'Live',
    plate: {
      line: 'Ship the product. We keep it running.',
      detail: 'OpenAI / Anthropic / Gemini / Mistral / MiniMax',
    },
    problem: [
      'Most gateways route each request on its own. When a provider fails, the request is retried elsewhere and the health checks stay green, but the fallback model only receives the current turn. The conversation is gone.',
      'Metriqual carries that context across providers, shows cost per model, and runs detectors that read the answers rather than only the status codes.',
    ],
    details: 'OpenAI-compatible API · Rust proxy (Axum on Tokio) · Python, TypeScript and Go SDKs',
    links: [
      { label: 'Visit metriqual.com', href: 'https://metriqual.com' },
      { label: 'Open-source SDKs', href: 'https://metriqual.com/open-source/' },
    ],
  },
  {
    name: 'Motionqual',
    url: 'https://motionqual.com',
    domain: 'motionqual.com',
    purpose:
      'Turns a website, product, release, idea or brief into video, short-form clips and interactive demos that stay true to what the product actually does.',
    role: null,
    status: 'Live, with a free tier',
    plate: {
      line: 'Understand. Create. Check. Test. Learn.',
      detail: 'Video / Short-form / Interactive demos / Copy',
    },
    problem: [
      'Generated creative usually starts from a prompt and knows nothing about the product. It invents claims, drifts off-brand, and is forgotten after export.',
      'Motionqual works out the context first, then creates. It checks every on-screen claim against your sources, tests one change at a time against a goal you choose, and remembers what performed. Every layer stays editable, and it works for businesses, creators and product teams alike.',
    ],
    details: 'Connects to websites, GitHub, Linear, changelogs, PostHog, Segment, Amplitude and Slack',
    links: [{ label: 'Visit motionqual.com', href: 'https://motionqual.com' }],
  },
];

// Source: arXiv abstract pages (bibliographic details) and metriqual.com/research.
// Newest first. Authors are listed in the order printed on arXiv.
export const publications = [
  {
    id: 'failure-atlas',
    title: 'FailureAtlas: A Taxonomy of Failure Modes in Multi-Provider LLM Serving Infrastructure',
    authors: ['Vishal Pandey', 'Gopal Singh'],
    submitted: '2026-07-20',
    revised: null,
    topic: 'LLM infrastructure reliability',
    arxivId: '2607.17525',
    category: 'cs.LG',
    comments: 'Survey paper, 14 pages, 1 figure',
    summary:
      'A taxonomy of failures in multi-provider LLM infrastructure, including silent failures that return successful HTTP responses while corrupting application state.',
    question:
      'Gateways that route, load-balance and rate-limit requests across model APIs are now production infrastructure, but their failure modes are scattered across issue trackers and post-mortems. Which failures belong to this layer, and why do some go unnoticed?',
    approach:
      'A two-axis taxonomy that classifies each failure by origin layer (network and transport, streaming and protocol, state and session, model behaviour, governance and cost) and by detectability (loud or silent). It is populated with five verified entries from public bug reports and first-hand stress testing, each with a mechanistic root-cause analysis. Three entries include standalone reproduction scripts.',
    result:
      'The most operationally severe failures are silent: they return HTTP 200, pass standard health checks and corrupt application state. Two were found first-hand during evaluation: a concurrency race condition that loses conversation history, and a streaming index collision that corrupts tool-call payloads.',
    scope: 'A survey with five catalogued entries. Detecting the silent cases requires semantic-level observability, not status codes.',
    code: 'https://github.com/Vishal-sys-code/failure-atlas',
    writeup: {
      title: 'The failures that answer 200 OK.',
      href: 'https://metriqual.com/research/failure-atlas/',
      description: 'Why the most severe gateway failures look healthy on every dashboard, and the two we found ourselves.',
    },
  },
  {
    id: 'continuity-bench',
    title: 'ContinuityBench: A Benchmark and Systems Study of Stateful Failover in Multi-Provider LLM Routing',
    authors: ['Vishal Pandey', 'Gopal Singh'],
    submitted: '2026-07-17',
    revised: null,
    topic: 'Stateful failover and evaluation',
    arxivId: '2607.15899',
    category: 'cs.LG',
    comments: '16 pages, 2 figures',
    summary:
      'A benchmark and systems study measuring whether conversation context survives provider failures. In the reported evaluation, the stateful proxy preserved continuity in 99.20% of 750 failover events.',
    question:
      'High API availability does not mean a conversation survives. When a primary provider fails, stateless failover keeps the service up but silently drops the history. How often, and can a proxy prevent it?',
    approach:
      'Two metrics, Continuity Preservation Rate (CPR) and Continuity Latency Overhead (CLO), and a stateful multi-provider proxy that uses a history-forwarding strategy to rebuild conversational state on a fallback endpoint. The paper also releases continuity-bench, an open harness that injects provider failures under high concurrency.',
    result:
      'Across 750 failover events, the evaluated stateful proxy reached a CPR of 99.20% (95% CI: 98.27% to 99.63%), against near 0% for standard stateless failover. The latency analysis argues for asynchronous exponential backoff with jitter to avoid retry storms against fallback APIs with strict limits.',
    scope: 'Results describe the proxy and the failure conditions evaluated in the paper, not a general guarantee for every deployment.',
    code: 'https://github.com/Vishal-sys-code/continuity-bench',
    writeup: {
      title: 'An outage your dashboard never sees.',
      href: 'https://metriqual.com/research/continuity-bench/',
      description: 'How we measured stateful failover, and the two concurrency failures that broke the first prototype.',
    },
  },
  {
    id: 'trajectory-geometry',
    title: 'Trajectory Geometry of Transformer Representations Across Layers',
    authors: ['Vishal Pandey', 'Gopal Singh', 'Yacine Mahdid'],
    submitted: '2026-06-08',
    revised: '2026-06-10',
    topic: 'Mechanistic interpretability',
    arxivId: '2606.09287',
    category: 'cs.LG',
    comments: '18 pages, 9 figures',
    summary:
      'A geometric study of how transformer representations change across layers, examining semantic convergence, reasoning complexity and ambiguity across three model families.',
    question:
      'Interpretability usually asks what a layer encodes. This paper asks how representations move from one layer to the next, and whether the shape of that path says something about the computation.',
    approach:
      'The forward pass is treated as a trajectory through representation space, using geometric tools from computational neuroscience. Five metrics are computed directly in the ambient space, with no probes: trajectory length, curvature, a semantic convergence index, layerwise cosine similarity and representational stability. Models: GPT-2, TinyLlama and Qwen2.5, with five controlled prompt families.',
    result:
      'Related prompts converge in middle-to-late layers. Reasoning tasks bend more than lexical variations (0.71 to 0.83 rad against 0.27 to 0.31 rad). Ambiguous tokens split into separate paths. A three-phase structure of encoding, elaboration and output preparation appears in all three architectures. All four effects vanish under shuffled-layer and random-embedding controls.',
    scope: 'Three open model families and controlled prompt sets. The pipeline is released as open source and is model-agnostic.',
    code: 'https://github.com/Vishal-sys-code/latent-trajectories',
    writeup: {
      title: 'A forward pass has a shape.',
      href: 'https://metriqual.com/research/latent-trajectories/',
      description: 'Measuring the path a prompt takes through a model instead of inspecting one layer at a time.',
    },
  },
  {
    id: 'variational-linear-attention',
    title: 'Variational Linear Attention: Stable Associative Memory for Long-Context Transformers',
    authors: ['Vishal Pandey', 'Gopal Singh'],
    submitted: '2026-05-11',
    revised: null,
    topic: 'Attention architectures and associative memory',
    arxivId: '2605.11196',
    category: 'cs.LG',
    comments: '20 pages',
    summary:
      'A regularised memory update for linear attention designed to improve memory stability and associative recall, supported by theoretical analysis and empirical evaluation.',
    question:
      'Linear attention runs in linear time, but its memory state grows without bound and stored associations start to interfere. Can the update itself be made stable?',
    approach:
      'Variational Linear Attention (VLA) reframes the memory update as an online regularised least-squares problem, with an adaptive penalty matrix maintained through the Sherman-Morrison rank-1 formula. The paper proves that normalising the write direction to unit length gives a recurrence Jacobian with spectral norm exactly 1, and that the state norm is self-limiting under bounded inputs.',
    result:
      'At T = 1,000, VLA reduces the state norm by 109× relative to standard linear attention. It reaches near-perfect exact-match accuracy on multi-query associative recall within the per-head memory regime, holds up better than DeltaNet and standard linear attention as memory load rises, and keeps 62% accuracy at the capacity boundary. A Triton-fused kernel runs 14× faster than sequential Python and drops below softmax attention latency at around 43,000 tokens.',
    scope: 'Recall results hold within the effective per-head memory regime. The latency crossover is specific to the fused kernel reported.',
    code: null,
    writeup: {
      title: 'Long-context memory is a geometry problem.',
      href: 'https://metriqual.com/research/variational-linear-attention/',
      description: 'Why a scalar decay cannot fix linear attention, and what replacing it with a matrix does.',
    },
  },
];

export const arxivUrl = (id) => `https://arxiv.org/abs/${id}`;
export const arxivPdfUrl = (id) => `https://arxiv.org/pdf/${id}`;

// Systems behind the products and papers.
// Source: metriqual.com, metriqual.com/docs/failover/, metriqual.com/research/*,
// motionqual.com and the arXiv papers (checked Oct 2026).
export const systems = [
  {
    id: 'gateway',
    name: 'An LLM gateway that streams, fails over and keeps the receipts',
    context: 'Metriqual',
    summary:
      'One OpenAI-compatible endpoint in front of OpenAI, Anthropic, Gemini, Mistral and MiniMax, covering chat, voice, image and video.',
    how:
      'A Rust proxy (Axum on Tokio) forwards provider bytes as they arrive, so streaming stays streaming. Each key has a provider chain with circuit breakers, a spend ceiling and a record of every attempt. Failovers and recoveries go out as signed webhooks and log drains to Datadog, Splunk or OpenTelemetry.',
    hard:
      'The worst failures return HTTP 200. So the gateway checks the answer itself, flagging a conversation that no longer matches what was stored, or tool-call arguments that are not valid JSON.',
    stack: 'Rust · Axum · Tokio · Streaming proxies · Circuit breakers · Webhooks · OpenTelemetry',
    links: [{ label: 'Failover docs', href: 'https://metriqual.com/docs/failover/' }],
  },
  {
    id: 'stateful-failover',
    name: 'Stateful failover at 100 concurrent sessions',
    context: 'Metriqual · ContinuityBench',
    summary: 'Carrying the whole conversation to the fallback provider, so the user never has to start over.',
    how:
      'On a timeout, 429 or 5xx, the request is replayed on the next provider with its full history. To measure it, a fault injector fires failures on the turn that depends on earlier context: 750 failover events per system, scored by a calibrated model judge.',
    hard:
      'At 100 concurrent sessions, parallel tasks mutated a shared history cache between async yields and conversations bled into each other. Copying each message array before yielding fixed it. Then 100 sessions hit a fallback allowing 15 requests a minute, retried in lockstep and ran out of sockets, until backoff with jitter broke the sync.',
    stack: 'Python · asyncio · Fault injection · Backoff with jitter · LLM-as-judge evaluation',
    links: [
      { label: 'Case study', href: 'https://metriqual.com/research/continuity-bench/' },
      { label: 'Benchmark harness', href: 'https://github.com/Vishal-sys-code/continuity-bench' },
    ],
  },
  {
    id: 'motion-pipeline',
    name: 'A creative pipeline that checks its own claims',
    context: 'Motionqual',
    summary: 'Understand, create, check, test, learn: a loop that turns product context into video and demos.',
    how:
      'It reads a website, release or brief and works out the audience, what is true and what must not be said, before generating anything. Output stays as editable scenes and layers, and it can watch GitHub, Linear or a changelog to draft or update videos when something ships.',
    hard:
      'Trusting the output. Every on-screen claim is traced to a source. Deterministic checks for readability, composition, brand and playback run first, and an AI review steps in only when judgment is needed. Variants change one thing at a time against a goal you set.',
    stack: 'Context extraction · Claim verification · Layered video composition · A/B testing · PostHog, Segment, Amplitude',
    links: [{ label: 'motionqual.com', href: 'https://motionqual.com' }],
  },
  {
    id: 'research-tooling',
    name: 'Instruments for looking inside transformers',
    context: 'Research · co-author',
    summary: 'Measurement pipelines and kernels behind the interpretability and attention papers.',
    how:
      'For trajectory geometry, hidden states are mean-pooled per layer and treated as a path, with length, curvature and convergence computed in the full ambient space across GPT-2, TinyLlama and Qwen2.5. For VLA, the memory update is an online regularised least-squares step, kept current with Sherman-Morrison rank-1 updates.',
    hard:
      'Trusting the numbers. Every geometric effect is checked against shuffled-layer and random-embedding controls. For VLA, a Triton-fused kernel runs 14× faster than the sequential loop and drops below softmax attention latency at around 43,000 tokens.',
    stack: 'Python · Transformer hidden states · Triton · Representation geometry · Statistical controls',
    links: [
      { label: 'Trajectory pipeline', href: 'https://github.com/Vishal-sys-code/latent-trajectories' },
      { label: 'VLA paper', href: 'https://arxiv.org/abs/2605.11196' },
    ],
  },
];

// The tools I reach for most, mentioned where they explain the work.
export const toolkit = [
  { area: 'Backend and infrastructure', items: 'Python, FastAPI, Django, Rust (Axum, Tokio), Postgres, cloud infrastructure' },
  { area: 'Interfaces', items: 'React, Next.js, TypeScript' },
  { area: 'AI and ML systems', items: 'LLM serving and routing, evaluation harnesses, interpretability, attention architectures' },
];

// Writing: plain-language write-ups of the papers, published on metriqual.com/research.
export const writing = publications.map((p) => ({
  id: p.id,
  title: p.writeup.title,
  href: p.writeup.href,
  date: p.submitted.slice(0, 7),
  description: p.writeup.description,
  destination: 'Metriqual Research',
}));

// Page metadata, shared by the client and the build-time prerender.
export const pages = {
  '/': {
    title: 'Gopal Singh | Founder, Engineer & AI Researcher',
    description:
      'Gopal Singh (theunblunt) builds AI products and infrastructure, including Metriqual and Motionqual, and co-authors research on transformer memory, representation geometry and LLM serving reliability.',
  },
  '/research': {
    title: 'Research | Gopal Singh',
    description:
      'Four arXiv preprints co-authored by Gopal Singh: FailureAtlas, ContinuityBench, trajectory geometry of transformer representations, and Variational Linear Attention.',
  },
  '/blog': {
    title: 'Notes archive | Gopal Singh',
    description: 'Short notes on television and books from 2024, kept from an earlier version of this site.',
  },
  '/books': {
    title: 'Reading | Gopal Singh',
    description: 'Books I have read and rated, across general reading, Vedanta and spirituality, technical work and neuroscience.',
  },
  '/shows': {
    title: 'Watching | Gopal Singh',
    description: 'Series, anime and films I have watched and rated.',
  },
  '/404': {
    title: 'Page not found | Gopal Singh',
    description: 'This page does not exist on theunblunt.com.',
  },
};

export const formatMonth = (iso) => {
  const [y, m] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
};

export const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
};
