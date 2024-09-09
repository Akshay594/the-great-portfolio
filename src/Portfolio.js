import React from 'react';
import gopalImage from './gopal.jpeg'; // Make sure the image is in the correct path

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-5">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <img
            className="w-50 h-60 rounded-full mx-auto border-4 border-blue-500"
            src={gopalImage}
            alt="Gopal Singh"
          />
          <h1 className="text-5xl font-bold mt-4">Gopal Singh</h1>
          <p className="text-xl text-gray-400 mt-2">CEO & Co-Founder | JaanchAI | AI Architect | NLP Specialist</p>
          <p className="text-md text-gray-400 mt-2">Harnessing AI to revolutionize e-commerce, logistics, and retail with intelligent automation.</p>
        </div>

        {/* About Section */}
        <section className="mt-12">
          <h2 className="text-4xl font-bold mb-5 text-blue-400">About Me</h2>
          <p className="text-lg text-gray-300">
            I'm an AI architect specializing in building scalable and robust solutions to solve real-world business challenges. With expertise in machine learning, NLP, and data analytics, I've co-founded 
            <span className="text-blue-400"> JaanchAI</span>, an AI-driven platform empowering e-commerce businesses with insightful automation for forecasting, pricing, and competitor analysis. My focus is on leveraging the latest advancements in AI to drive innovation, streamline operations, and enhance decision-making.
          </p>
        </section>

        {/* Projects Section */}
        <section className="mt-12">
          <h2 className="text-4xl font-bold mb-5 text-blue-400">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
              <h3 className="text-3xl font-semibold text-blue-300 mb-3">JaanchAI</h3>
              <p className="text-gray-400">
                AI-driven SaaS platform offering deep analysis for pricing, competitor tracking, inventory management, and more for e-commerce businesses.
              </p>
            </div>
            <div className="bg-gray-800 p-6 shadow-lg rounded-lg">
              <h3 className="text-3xl font-semibold text-blue-300 mb-3">AI Project Management Tool</h3>
              <p className="text-gray-400">
                A tool designed to manage AI projects with real-time insights, deadline estimation, and automated risk assessment to enhance productivity and success rates.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mt-12">
          <h2 className="text-4xl font-bold mb-5 text-blue-400">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-gray-300">Machine Learning</p>
            </div>
            <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-gray-300">Natural Language Processing</p>
            </div>
            <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-gray-300">Data Analytics</p>
            </div>
            <div className="bg-gray-800 p-4 text-center rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-gray-300">AI Architectures</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
