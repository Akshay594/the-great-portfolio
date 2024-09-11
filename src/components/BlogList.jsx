import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const blogs = [
    {
      title: 'Revolutionizing Sales Analytics with AI',
      description: 'How JaanchAI is transforming sales analytics with AI-driven insights and automation.',
      slug: 'revolutionizing-sales-analytics-with-ai',
      date: '2024-09-09',
    },
    {
      title: 'AI in E-commerce: The Future of Dynamic Pricing',
      description: 'Exploring how AI can be used for dynamic pricing strategies in e-commerce.',
      slug: 'ai-in-ecommerce-dynamic-pricing',
      date: '2024-09-01',
    },
    {
      title: 'Real-Time Language Translation with NLP and WebRTC',
      description: 'Building real-time language translation apps using NLP models and WebRTC.',
      slug: 'real-time-translation-nlp-webrtc',
      date: '2024-08-25',
    },
    // Add more blog entries here...
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-indigo-400 mb-12 text-center">Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <Link key={index} to={`/blog/${blog.slug}`} className="block bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-indigo-300 mb-2">{blog.title}</h2>
            <p className="text-gray-300 mb-4">{blog.description}</p>
            <span className="text-sm text-indigo-400">{new Date(blog.date).toLocaleDateString()}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
