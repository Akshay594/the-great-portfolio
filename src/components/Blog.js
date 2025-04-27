import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    slug: "ai-transforming-pricing-strategies",
    title: "How AI is Transforming Pricing Strategies: Real-World Impact, Solutions, and Forecasting",
    excerpt: "Explore how AI is revolutionizing pricing strategies, offering solutions to real-world challenges that companies face daily...",
    date: "September 29, 2024",
    author: "Gopal Singh",
    readTime: "5 min read",
    categories: ["AI", "Business", "Pricing"],
  },
  {
    slug: "ai-personalization-ecommerce",
    title: "AI and Personalization: Revolutionizing Customer Experience in E-commerce",
    excerpt: "In today's e-commerce landscape, customers expect more than just products. Learn how AI is delivering personalized shopping experiences...",
    date: "September 29, 2024",
    author: "Gopal Singh",
    readTime: "3 min read",
    categories: ["AI", "E-commerce", "UX"],
  },
  // Add more blog posts here
];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const BlogPostCard = ({ post, index }) => (
  <motion.article 
    variants={{
      hidden: { opacity: 0, y: 50 },
      show: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          duration: 0.8,
          delay: index * 0.2
        }
      }
    }}
    className="glass-panel relative overflow-hidden group transform transition-all duration-500 hover:-translate-y-2"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    
    <div className="p-7 relative z-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {post.categories.map((category, idx) => (
          <span key={idx} className="text-xs font-semibold px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-300 backdrop-blur-sm border border-indigo-800/30">
            {category}
          </span>
        ))}
      </div>
    
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 mb-4 line-clamp-2 h-[4rem]">
        <Link to={`/blog/${post.slug}`} className="hover:text-indigo-200 transition-colors duration-200 after:absolute after:inset-0">
          {post.title}
        </Link>
      </h2>
      
      <p className="text-gray-300 mb-6 line-clamp-3 h-[4.5rem]">{post.excerpt}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-indigo-400" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-2 text-indigo-400" />
          <span>{post.readTime}</span>
        </div>
      </div>
      
      <Link 
        to={`/blog/${post.slug}`} 
        className="inline-flex items-center text-indigo-300 hover:text-indigo-200 transition-all duration-300 group-hover:translate-x-1"
      >
        Read more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  </motion.article>
);

const Blog = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="animated-bg"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 mb-4">
            Latest Insights
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exploring the intersection of AI, e-commerce, and technological innovation
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.slug} post={post} index={index} />
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-card inline-block px-8 py-5">
            <h3 className="text-2xl font-semibold text-white mb-2">Want more insights?</h3>
            <p className="text-gray-300 mb-4">Subscribe to my newsletter for regular updates on AI, tech, and business</p>
            <button className="btn-primary">
              Subscribe to Newsletter
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
