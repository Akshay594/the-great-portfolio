import React from 'react';
import gopalImage from './gopal.jpeg';

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto p-5">
      <div className="text-center mt-8">
        <img
          className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500"
          src={gopalImage}
          alt="Gopal Singh"
        />
        <h1 className="text-5xl font-bold mt-4">Gopal Singh</h1>
        <p className="text-xl text-gray-400 mt-2">CEO & Co-Founder | JaanchAI | AI Architect | NLP Specialist</p>
        <p className="text-md text-gray-400 mt-2">
          Harnessing AI to revolutionize e-commerce, logistics, and retail with intelligent automation.
        </p>
      </div>

      {/* About Section */}
      <section className="mt-12">
        <h2 className="text-4xl font-bold mb-5 text-blue-400">About Me</h2>
        <p className="text-lg text-gray-300">
          I'm an AI architect specializing in building scalable and robust solutions to solve real-world business challenges. With expertise in machine learning, NLP, and data analytics, I've co-founded 
          <span className="text-blue-400"> JaanchAI</span>, an AI-driven platform empowering e-commerce businesses with insightful automation for forecasting, pricing, and competitor analysis. My focus is on leveraging the latest advancements in AI to drive innovation, streamline operations, and enhance decision-making.
        </p>
      </section>
    </div>
  );
};

export default Home;
