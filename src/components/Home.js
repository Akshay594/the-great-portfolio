import React, { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ChevronUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import gopal from './gopal.png';
import backgroundImage from './bg.png'; // Image you uploaded

const ProjectCard = ({ title, description, technologies }) => (
  <div className="bg-indigo-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3> {/* Updated to white */}
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span key={index} className="bg-indigo-700 text-white px-2 py-1 rounded-full text-sm">{tech}</span>
      ))}
    </div>
  </div>
);

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-white">{skill}</span> {/* Updated to white */}
      <span className="text-sm font-medium text-white">{level}%</span> {/* Updated to white */}
    </div>
    <div className="w-full bg-indigo-900 rounded-full h-2.5">
      <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
    </div>
  </div>
);

const TechStackSection = ({ title, techs }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3> {/* Updated to white */}
    <div className="flex flex-wrap gap-2">
      {techs.map((tech, index) => (
        <span key={index} className="bg-indigo-800 text-white px-3 py-1 rounded-full text-sm">{tech}</span>
      ))}
    </div>
  </div>
);

const Home = () => {
  const [showMore, setShowMore] = useState(false);

  const projectData = [
    { name: 'JaanchGPT', value: 100 },
    { name: 'PM AI', value: 80 },
    { name: 'Babel', value: 70 },
    { name: 'Yoga AI', value: 60 },
  ];

  const techStacks = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    backend: ['Django', 'FastAPI', 'Flask'],
    frontend: ['React.js', 'React Native', 'Tailwind CSS', 'Bootstrap'],
    database: ['PostgreSQL', 'SQLite', 'Google BigQuery'],
    cloud: ['Google Cloud Platform (GCP)', 'NGINX', 'UWSGI'],
    ml: ['TensorFlow.js', 'Keras', 'Scikit-learn', 'Spacy', 'NLTK', 'OpenAI API', 'Facebook NMT'],
    other: ['n8n', 'Instagram Graph API', 'WebRTC', 'Git', 'GitHub', 'Docker'],
  };

  return (
    <div className="max-w-6xl mx-auto p-5 min-h-screen text-white relative" style={{ backgroundColor: '#000' }}>
      <div
        className="relative text-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          paddingTop: '250px',  // Adjust this to lower the image and title
          paddingBottom: '100px',  // Adjust this for more spacing below
        }}
      >
        {/* Profile image section */}
        <img
          className="w-48 h-48 rounded-full mx-auto border-4 border-indigo-500 shadow-lg"
          src={gopal}
          alt="Gopal Singh"
        />
        <h1 className="text-6xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Gopal Singh
        </h1>
        <p className="text-2xl text-white mt-2">CEO & Co-Founder | JaanchAI | AI Architect | NLP Specialist</p> {/* Text changed to white */}
        <p className="text-lg text-white mt-2 max-w-2xl mx-auto"> {/* Text changed to white */}
          Revolutionizing e-commerce, logistics, and retail through AI-driven intelligent automation.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/akshay594" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/theunblunt/" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="mailto:gopal@jaanch.ai" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            <Mail size={28} />
          </a>
        </div>
      </div>

      {/* Black background for inner sections */}
      <section className="mt-16 bg-black p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2> {/* Updated to white */}
        <p className="text-lg text-white leading-relaxed"> {/* Updated to white */}
          As an innovative AI architect, I specialize in crafting scalable solutions that address complex business challenges. My expertise in machine learning, natural language processing, and data analytics has been the cornerstone in co-founding <span className="text-indigo-400 font-semibold">JaanchAI</span>, where we're reshaping the e-commerce landscape through AI-driven insights.
        </p>
        <p className="text-lg text-white mt-4 leading-relaxed"> {/* Updated to white */}
          At JaanchAI, we empower businesses with cutting-edge forecasting, pricing strategies, and competitor analysis. My passion lies in leveraging state-of-the-art AI technologies to drive innovation, optimize operations, and enhance decision-making across various sectors.
        </p>
        <button 
          onClick={() => setShowMore(!showMore)} 
          className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {showMore ? 'Show Less' : 'Show More'}
          {showMore ? <ChevronUp className="ml-1" /> : <ChevronDown className="ml-1" />}
        </button>
        {showMore && (
          <div className="mt-4 text-white"> {/* Updated to white */}
            <p>My journey in tech has been marked by significant milestones:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Led data science initiatives at LetsUpgrade.in, educating aspiring data scientists.</li>
              <li>Developed Project Management AI, an AI-powered project management tool.</li>
              <li>Contributed as a machine learning consultant for Stineseed.com, enhancing agricultural predictions.</li>
              <li>Authored technical content for Neptune.ai, sharing insights on machine learning practices.</li>
            </ul>
          </div>
        )}
      </section>

      <section className="mt-16 bg-black p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-6 text-white">Key Expertise</h2> {/* Updated to white */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <SkillBar skill="AI & Machine Learning" level={95} />
            <SkillBar skill="Natural Language Processing" level={90} />
            <SkillBar skill="Full-Stack Development" level={85} />
            <SkillBar skill="Cloud & DevOps" level={80} />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Project Impact</h3> {/* Updated to white */}
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1E1E1E', border: 'none' }} />
                <Line type="monotone" dataKey="value" stroke="#818CF8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section className="mt-16 bg-black p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold mb-6 text-white">Tech Stack</h2> {/* Updated to white */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TechStackSection title="Programming Languages" techs={techStacks.languages} />
          <TechStackSection title="Backend Frameworks" techs={techStacks.backend} />
          <TechStackSection title="Frontend Frameworks & Libraries" techs={techStacks.frontend} />
          <TechStackSection title="Database Technologies" techs={techStacks.database} />
          <TechStackSection title="Cloud Platforms & DevOps" techs={techStacks.cloud} />
          <TechStackSection title="Machine Learning & AI" techs={techStacks.ml} />
          <TechStackSection title="Other Technologies" techs={techStacks.other} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-bold mb-6 text-white">Featured Projects</h2> {/* Updated to white */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard 
            title="JaanchGPT" 
            description="AI-driven SaaS platform for e-commerce analytics and automation."
            technologies={["Python", "Django", "React", "OpenAI", "GCP"]}
          />
          <ProjectCard 
            title="Project Management AI" 
            description="AI-powered project management tool for risk and budget assessments."
            technologies={["FastAPI", "React", "OpenAI", "PostgreSQL"]}
          />
          <ProjectCard 
            title="Babel" 
            description="Real-time language translation app using advanced NLP models."
            technologies={["React Native", "Django", "FastAPI", "WebRTC"]}
          />
          <ProjectCard 
            title="Real-Time Yoga AI" 
            description="Motion assessment platform providing live feedback on yoga poses."
            technologies={["TensorFlow.js", "React", "Keras"]}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
