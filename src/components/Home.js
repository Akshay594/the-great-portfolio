import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Brain, Code, Terminal, Cpu, Braces, Workflow, Network, Layers, Boxes, Database } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gopal from './gopal.png';

const MatrixRainCanvas = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const drops = [];
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none"
    />
  );
};

const CodeBlock = ({ children }) => (
  <div className="font-mono bg-gray-900/50 p-4 rounded-lg border border-gray-800 overflow-x-auto">
    <pre className="text-sm">
      <code className="text-green-400">{children}</code>
    </pre>
  </div>
);

const GlowingBorder = ({ children }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative bg-black rounded-lg">
      {children}
    </div>
  </div>
);


const TechStack = ({ stack }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
  >
    {stack.map((tech, index) => (
      <motion.div
        key={tech.name}
        whileHover={{ scale: 1.05, y: -5 }}
        className="group relative"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-purple-500/50 transition-colors duration-300">
          <div className="flex items-center justify-between mb-4">
            <tech.icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            <div className="text-lg font-bold text-purple-300 group-hover:text-purple-200">
              {tech.stats}%
            </div>
          </div>
          <h3 className="font-bold text-lg text-white mb-2">{tech.name}</h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300">{tech.description}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
);

const ScrollProgressBar = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const SectionDivider = () => (
  <div className="relative h-32 my-20">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
    </div>
  </div>
);

const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const techStacks = {
    frontend: [
      { name: 'React', icon: Code, description: 'Component-based architecture', stats: 95 },
      { name: 'Next.js', icon: Network, description: 'Full-stack framework', stats: 90 },
      { name: 'TypeScript', icon: Braces, description: 'Type-safe development', stats: 92 },
      { name: 'Tailwind CSS', icon: Layers, description: 'Utility-first styling', stats: 88 },
      { name: 'Framer Motion', icon: Workflow, description: 'Animation library', stats: 85 },
      { name: 'Redux', icon: Boxes, description: 'State management', stats: 88 },
      { name: 'GraphQL', icon: Terminal, description: 'API querying', stats: 90 },
      { name: 'Webpack', icon: Cpu, description: 'Module bundling', stats: 85 }
    ],
    backend: [
      { name: 'Node.js', icon: Terminal, description: 'Runtime environment', stats: 95 },
      { name: 'Express', icon: Network, description: 'Web framework', stats: 92 },
      { name: 'Python', icon: Code, description: 'Backend development', stats: 90 },
      { name: 'Django', icon: Boxes, description: 'Full-stack framework', stats: 88 },
      { name: 'PostgreSQL', icon: Database, description: 'Relational database', stats: 90 },
      { name: 'MongoDB', icon: Database, description: 'NoSQL database', stats: 85 },
      { name: 'Redis', icon: Cpu, description: 'Caching system', stats: 88 },
      { name: 'Docker', icon: Boxes, description: 'Containerization', stats: 92 }
    ],
    ai: [
      { name: 'Neural Networks', icon: Brain, description: 'Deep learning architectures', stats: 95 },
      { name: 'NLP', icon: Terminal, description: 'Language processing & understanding', stats: 90 },
      { name: 'Computer Vision', icon: Cpu, description: 'Visual data analysis', stats: 85 },
      { name: 'MLOps', icon: Workflow, description: 'ML infrastructure & deployment', stats: 88 },
      { name: 'Reinforcement Learning', icon: Boxes, description: 'Agent-based learning', stats: 82 },
      { name: 'GANs', icon: Layers, description: 'Generative modeling', stats: 85 },
      { name: 'Transformers', icon: Network, description: 'Attention mechanisms', stats: 92 },
      { name: 'Time Series', icon: Braces, description: 'Sequential data analysis', stats: 88 }
    ]
  };

  const fitnessStats = [
    { name: 'Power Clean', value: '225 lbs' },
    { name: 'Deadlift', value: '405 lbs' },
    { name: 'Squat', value: '315 lbs' },
    { name: 'Bench Press', value: '275 lbs' },
    { name: 'Running', value: '5K PR' },
    { name: 'Boxing', value: '3 years' }
  ];

  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">
      <ScrollProgressBar />
      <MatrixRainCanvas />
      
      {/* Hero Section */}
      <div id="hero" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(17,24,39,0.7),rgba(0,0,0,1))]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
          <motion.div
            style={{ y }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative mx-auto w-40 h-40 md:w-48 md:h-48 mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-spin-slow"
                   style={{ animationDuration: '8s' }}></div>
              <img
                className="absolute inset-1 rounded-full mx-auto shadow-2xl object-cover z-10"
                src={gopal}
                alt="Gopal Singh"
              />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
            >
              theunblunt
            </motion.h1>

            <CodeBlock>
              {`class TheUnblunt extends Human {
  constructor() {
    super();
    this.traits = ['Neural Nerd', 'Fitness Enthusiast', 'Philosopher'];
    this.motto = 'An inferencer of canon events';
  }
}`}
            </CodeBlock>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-xl md:text-2xl font-medium text-gray-300"
            >
              Building the future with code | Living with purpose
            </motion.p>
          </motion.div>
        </div>
      </div>

      <SectionDivider />

      {/* Tech Stack Section */}
      <section id="tech" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-20"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Technical Expertise
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Building scalable solutions with modern technologies
              </p>
            </div>

            <div className="space-y-24">
              {/* Frontend Stack */}
              <div>
                <div className="mb-10">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
                  >
                    Frontend Stack
                  </motion.h3>
                  <p className="text-gray-400 text-lg">Crafting beautiful and responsive user interfaces</p>
                </div>
                <TechStack stack={techStacks.frontend} />
              </div>

              {/* Backend Stack */}
              <div>
                <div className="mb-10">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400"
                  >
                    Backend Stack
                  </motion.h3>
                  <p className="text-gray-400 text-lg">Building robust and scalable server architectures</p>
                </div>
                <TechStack stack={techStacks.backend} />
              </div>

              {/* AI Stack */}
              <div>
                <div className="mb-10">
                  <motion.h3 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                  >
                    AI Stack
                  </motion.h3>
                  <p className="text-gray-400 text-lg">Implementing cutting-edge machine learning solutions</p>
                </div>
                <TechStack stack={techStacks.ai} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Fitness Section */}
      <section id="fitness" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Fitness & Wellness
            </h2>

            <GlowingBorder>
              <div className="p-6">
                <CodeBlock>
                  {`// Physical & Mental Wellness Protocol
const wellness = {
  mindset: 'BALANCED',
  routine: {
    morning: ['5AM Workout', 'Cold Shower', 'Meditation'],
    training: ['Power Lifting', 'Boxing', 'HIIT'],
    recovery: ['Mobility Work', 'Ice Bath', 'Deep Tissue']
  },
  nutrition: {
    protocol: 'High Protein + Clean Carbs',
    supplements: ['Creatine', 'BCAAs', 'Fish Oil'],
    hydration: '1 Gallon Daily'
  },
  goals: {
    strength: 'Progressive Overload',
    mindset: 'Consistent Growth',
    balance: 'Body & Mind Harmony'
  }
};`}
                </CodeBlock>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                  {fitnessStats.map((stat, index) => (
                    <GlowingBorder key={stat.name}>
                      <div className="p-4 text-center">
                        <h3 className="text-lg font-bold text-red-400">{stat.name}</h3>
                        <p className="text-2xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                          {stat.value}
                        </p>
                      </div>
                    </GlowingBorder>
                  ))}
                </div>
              </div>
            </GlowingBorder>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* Book Section */}
      <section id="book" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              The Compass and the Child
            </h2>

            <GlowingBorder>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Author's Note</h3>
                    <p className="text-gray-300 mb-4">
                      "The book you hold in your hands began with a question that has haunted me throughout my life:
                      How does one find wisdom and purpose in a fragmented world that offers endless knowledge
                      but little integration?"
                    </p>
                    <CodeBlock>
                      {`// Philosophy as Code
const consciousness = {
  async *explore() {
    while (true) {
      const reality = await perceive();
      const understanding = process(reality);
      yield interpret(understanding);
    }
  },

  dimensions: {
    physical: 'Quantum Mechanics',
    mental: 'Neural Correlates',
    spiritual: 'Transcendental States'
  },

  insights: [
    'Reality is computation',
    'Consciousness is information',
    'Truth is convergent'
  ]
};`}
                    </CodeBlock>
                  </div>

                  <div className="space-y-6">
                    <GlowingBorder>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-4">Core Themes</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li>• Integration of Eastern and Western philosophy</li>
                          <li>• Consciousness exploration through technology</li>
                          <li>• Finding purpose in a fragmented world</li>
                          <li>• The intersection of computation and consciousness</li>
                          <li>• Practical wisdom for modern life</li>
                          <li>• The journey from knowledge to understanding</li>
                        </ul>
                      </div>
                    </GlowingBorder>

                    <GlowingBorder>
                      <div className="p-4">
                        <h3 className="text-xl font-bold mb-4">Key Chapters</h3>
                        <ul className="space-y-3 text-gray-300">
                          <li>• The Child's Universe: Foundations of Wisdom</li>
                          <li>• The Cynic's Barrel: Freedom through Simplicity</li>
                          <li>• The Stoic's School: Inner Freedom</li>
                          <li>• The Master's Garden: Relational Harmony</li>
                          <li>• The Questioner's Agora: Examined Life</li>
                          <li>• The Philosopher's Cave: Beyond Appearances</li>
                        </ul>
                      </div>
                    </GlowingBorder>
                  </div>
                </div>
              </div>
            </GlowingBorder>
          </motion.div>
        </div>
      </section>

      {/* Floating Navigation Dots */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <ul className="space-y-6">
          {[
            { id: 'hero', label: 'Introduction' },
            { id: 'tech', label: 'Tech Stack' },
            { id: 'fitness', label: 'Fitness' },
            { id: 'book', label: 'Book' }
          ].map(({ id, label }) => (
            <motion.li
              key={id}
              className="relative group"
              whileHover={{ scale: 1.2 }}
            >
              <button
                onClick={() => {
                  const element = document.getElementById(id);
                  if (element) {
                    const headerOffset = 80; // Account for fixed header
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="block w-3 h-3 rounded-full bg-white/20 group-hover:bg-purple-500 transition-colors duration-300"
              />
              <span className="absolute left-0 transform -translate-x-full -translate-y-1/2 top-1/2 mr-4 px-2 py-1 bg-black/80 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {label}
              </span>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Social Links with Hover Effects */}
      <motion.div 
        className="fixed bottom-8 right-8 flex flex-col space-y-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        {[
          { href: "https://github.com/akshay594", icon: Github },
          { href: "https://www.linkedin.com/in/theunblunt/", icon: Linkedin },
          { href: "mailto:gopalsinghpanwar411@gmail.com", icon: Mail }
        ].map(({ href, icon: Icon }) => (
          <motion.a
            key={href}
            href={href}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur opacity-25 group-hover:opacity-100 transition duration-300" />
            <div className="relative p-3 bg-black rounded-full border border-white/10 hover:border-purple-500/50 transition-colors duration-300">
              <Icon size={20} className="text-white group-hover:text-purple-400 transition-colors duration-300" />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
