import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    slug: "ai-transforming-pricing-strategies",
    title: "How AI is Transforming Pricing Strategies: Real-World Impact, Solutions, and Forecasting",
    excerpt: "Explore how AI is revolutionizing pricing strategies, offering solutions to real-world challenges that companies face daily...",
    date: "September 29, 2024",
    author: "Gopal Singh",
    readTime: "15 min read",
  },
  {
    slug: "ai-personalization-ecommerce",
    title: "AI and Personalization: Revolutionizing Customer Experience in E-commerce",
    excerpt: "In today's e-commerce landscape, customers expect more than just products. Learn how AI is delivering personalized shopping experiences...",
    date: "October 5, 2024",
    author: "Gopal Singh",
    readTime: "12 min read",
  },
  // Add more blog posts here
];

const Blog = () => {
  return (
    <div className="bg-gray-900 min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-indigo-300 mb-12 text-center">Latest Insights</h1>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-indigo-300 mb-3 line-clamp-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-indigo-200 transition-colors duration-200">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
