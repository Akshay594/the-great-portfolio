import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import gopal from './gopal.png';


const SkillBar = ({ skill, level, index }) => (
  <motion.div 
    className="mb-6"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex justify-between mb-2">
      <span className="text-base font-medium text-white">{skill}</span>
      <span className="text-sm font-medium text-indigo-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-800 rounded-full h-3 shadow-inner">
      <motion.div 
        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
      ></motion.div>
    </div>
  </motion.div>
);

const TechStackCard = ({ title, technologies, practices, index }) => (
  <motion.div
    className="glass-panel h-full"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <div className="p-6 border-b border-indigo-800/30">
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-2">{title}</h3>
    </div>
    <div className="p-6 space-y-5">
      <div>
        <h4 className="text-lg font-semibold text-indigo-300 mb-3">Core Technologies</h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, idx) => (
            <motion.span
              key={idx}
              className="bg-gradient-to-r from-indigo-800 to-indigo-900 text-white px-3 py-1 rounded-full text-sm shadow-md hover:shadow-indigo-500/20 transition-all duration-300 border border-indigo-700/50"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold text-indigo-300 mb-3">Best Practices</h4>
        <ul className="space-y-2 text-gray-300">
          {practices.map((practice, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-indigo-400 mr-2">•</span>
              <span>{practice}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const projectData = [
    { name: 'JaanchGPT', value: 100 },
    { name: 'PM AI', value: 80 },
    { name: 'Babel', value: 70 },
    { name: 'Yoga AI', value: 60 },
  ];

  const techExpertise = {
    backend: {
      technologies: ['Python', 'Node.js', 'Django', 'Express', 'FastAPI', 'GraphQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Knex'],
      practices: [
        'Microservice architecture with domain-driven design',
        'Event-driven systems using message queues',
        'Robust database schema design with optimized queries',
        'JWT authentication with role-based access control',
        'End-to-end encryption and data protection protocols',
        'API versioning and comprehensive documentation'
      ]
    },
    frontend: {
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'React Native', 'Tailwind CSS', 'Framer Motion', 'WebSockets'],
      practices: [
        'Component-driven architecture with reusable patterns',
        'State management strategies for complex applications',
        'Responsive design with mobile-first approach',
        'Accessibility implementation (WCAG standards)',
        'Performance optimization and code splitting',
        'Real-time data visualization and updates'
      ]
    },
    devops: {
      technologies: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GitHub Actions', 'Nginx'],
      practices: [
        'Infrastructure as Code with version control',
        'Zero-downtime deployment strategies',
        'Automated testing and continuous integration',
        'Containerization for consistent environments',
        'Cloud-native security and compliance measures',
        'Scalable architecture with auto-scaling policies'
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-800">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-400"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative text-center pt-40 pb-20"
        >
          {/* Neural Nerd text behind profile image - positioned higher */}
          <div className="absolute top-0 left-0 w-full flex justify-center" style={{ paddingTop: "120px" }}>
            <h2 className="text-6xl font-bold blur-[2px] text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300">
              A Neural Nerd
            </h2>
          </div>
          
          {/* Profile image with animated border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-44 h-44 mb-10 z-10 mt-32"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-400 animate-spin-slow" style={{ animationDuration: '8s' }}></div>
            <img
              className="absolute inset-1 w-[164px] h-[164px] rounded-full mx-auto shadow-2xl object-cover z-10"
              src={gopal}
              alt="Gopal Singh"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-bold mt-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300"
          >
            Gopal Singh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-blue-100 mt-4 max-w-2xl mx-auto"
          >
            Building intelligent systems that merge human creativity with algorithmic precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center space-x-6 mt-8"
          >
            <motion.a 
              href="https://github.com/akshay594" 
              className="text-white hover:text-blue-300 transition-colors p-2 rounded-full bg-blue-900/30 hover:bg-blue-800/50 backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/theunblunt/" 
              className="text-white hover:text-blue-300 transition-colors p-2 rounded-full bg-blue-900/30 hover:bg-blue-800/50 backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a 
              href="mailto:gopalsinghpanwar411@gmail.com" 
              className="text-white hover:text-blue-300 transition-colors p-2 rounded-full bg-blue-900/30 hover:bg-blue-800/50 backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={28} />
            </motion.a>
          </motion.div>
        </div>

        {/* About Me Section with glass morphism */}
        <motion.section 
          className="mt-20 p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-blue-900/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">About Me</h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            As an innovative AI architect, I specialize in crafting scalable solutions that address complex business challenges. My expertise in machine learning, natural language processing, and data analytics has been the cornerstone in co-founding <span className="text-blue-400 font-semibold">JaanchAI</span>, where we're reshaping the e-commerce landscape through AI-driven insights.
          </p>
          <p className="text-lg text-blue-100 mt-4 leading-relaxed">
            At JaanchAI, we empower businesses with cutting-edge forecasting, pricing strategies, and competitor analysis. My passion lies in leveraging state-of-the-art AI technologies to drive innovation, optimize operations, and enhance decision-making across various sectors.
          </p>
          <motion.button 
            onClick={() => setShowMore(!showMore)} 
            className="mt-6 flex items-center text-blue-300 hover:text-blue-100 transition-colors px-4 py-2 rounded-lg bg-blue-900/30 hover:bg-blue-800/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? 'Show Less' : 'Show More'}
            {showMore ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
          </motion.button>
          
          {showMore && (
            <motion.div 
              className="mt-6 text-blue-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p>My journey in tech has been marked by significant milestones:</p>
              <ul className="list-disc list-inside mt-3 space-y-3">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  Led data science initiatives at LetsUpgrade.in, educating aspiring data scientists.
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  Developed Project Management AI, an AI-powered project management tool.
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  Contributed as a machine learning consultant for Stineseed.com, enhancing agricultural predictions.
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  Authored technical content for Neptune.ai, sharing insights on machine learning practices.
                </motion.li>
              </ul>
            </motion.div>
          )}
        </motion.section>

        {/* Key Expertise Section */}
        <motion.section 
          className="mt-20 p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-blue-900/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Key Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <SkillBar skill="AI & Machine Learning" level={95} index={0} />
              <SkillBar skill="Natural Language Processing" level={90} index={1} />
              <SkillBar skill="Full-Stack Development" level={85} index={2} />
              <SkillBar skill="Cloud & DevOps" level={80} index={3} />
            </div>
            <div>
              <motion.h3 
                className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Project Impact
              </motion.h3>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm border border-blue-900/30"
              >
                <ResponsiveContainer width="100%" height={220}>
                  <LineChart data={projectData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', border: 'none' }} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="url(#colorGradient)" 
                      strokeWidth={3}
                      dot={{ fill: '#818CF8', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, fill: '#C4B5FD' }}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#818CF8" />
                        <stop offset="100%" stopColor="#C4B5FD" />
                      </linearGradient>
                    </defs>
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Technical Expertise Section */}
        <motion.section 
          className="mt-20 mb-20 p-8 rounded-2xl shadow-xl backdrop-blur-sm bg-gradient-to-br from-blue-900/10 to-purple-900/10 border border-blue-900/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">Technical Expertise</h2>
          <p className="text-lg text-blue-100 mb-10">
            With 8+ years of industry experience, I've mastered end-to-end development across multiple domains.
            My work emphasizes scalable architecture, security best practices, and modern development approaches.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TechStackCard 
              title="Backend Engineering" 
              technologies={techExpertise.backend.technologies}
              practices={techExpertise.backend.practices}
              index={0}
            />
            <TechStackCard 
              title="Frontend Development" 
              technologies={techExpertise.frontend.technologies}
              practices={techExpertise.frontend.practices}
              index={1}
            />
            <TechStackCard 
              title="DevOps & Cloud" 
              technologies={techExpertise.devops.technologies}
              practices={techExpertise.devops.practices}
              index={2}
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
