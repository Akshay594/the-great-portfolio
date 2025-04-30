import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Big Bang Theory: A Celebration of Nerd Culture",
    excerpt: "The Big Bang Theory revolutionized television by bringing science and nerd culture into mainstream entertainment. What makes this show special is its perfect blend of scientific accuracy and comedic timing.",
    date: "March 15, 2024",
    author: "Gopal Singh",
    readTime: "5 min read",
    categories: ["TV Shows", "Entertainment"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 2,
    title: "Breaking Bad: The Art of Character Transformation",
    excerpt: "Breaking Bad stands as a masterpiece in television history, primarily due to its exceptional character development. Walter White's transformation is one of the most compelling character arcs ever written.",
    date: "March 10, 2024",
    author: "Gopal Singh",
    readTime: "4 min read",
    categories: ["TV Shows", "Drama"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
  },
  {
    id: 3,
    title: "The Psychology of Money: A Must-Read for Financial Wisdom",
    excerpt: "Morgan Housel's 'The Psychology of Money' is a refreshing take on personal finance that focuses on behavior rather than numbers. The book teaches that financial success isn't about intelligence or technical knowledge.",
    date: "March 5, 2024",
    author: "Gopal Singh",
    readTime: "6 min read",
    categories: ["Books", "Finance"],
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
  }
];

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
    
    <div className="relative h-48 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    
    <div className="p-7 relative z-10">
      <div className="flex flex-wrap gap-2 mb-4">
        {post.categories.map((category, idx) => (
          <span key={idx} className="text-xs font-semibold px-2 py-1 rounded-full bg-indigo-900/50 text-indigo-300 backdrop-blur-sm border border-indigo-800/30">
            {category}
          </span>
        ))}
      </div>
    
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300 mb-4 line-clamp-2 h-[4rem]">
        <Link to={`/blog/${post.id}`} className="hover:text-indigo-200 transition-colors duration-200 after:absolute after:inset-0">
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
        to={`/blog/${post.id}`} 
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
            Exploring the intersection of TV shows, books, and entertainment
          </p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
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
            <p className="text-gray-300 mb-4">Subscribe to my newsletter for regular updates on TV shows, books, and entertainment</p>
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
