import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Big Bang Theory: A Celebration of Nerd Culture",
      content: "The Big Bang Theory revolutionized television by bringing science and nerd culture into mainstream entertainment. What makes this show special is its perfect blend of scientific accuracy and comedic timing. The characters, especially Sheldon Cooper, have become cultural icons. The show's ability to make complex scientific concepts accessible while maintaining humor is truly remarkable. It's not just a sitcom; it's a celebration of intelligence and the beauty of being different.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "TV Shows",
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "Breaking Bad: The Art of Character Transformation",
      content: "Breaking Bad stands as a masterpiece in television history, primarily due to its exceptional character development. Walter White's transformation from a meek chemistry teacher to a drug kingpin is one of the most compelling character arcs ever written. The show's attention to detail, from the chemistry to the cinematography, creates an immersive experience. It's a study in how circumstances can change a person's moral compass and the consequences of those changes.",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      category: "TV Shows",
      date: "2024-03-10"
    },
    {
      id: 3,
      title: "The Psychology of Money: A Must-Read for Financial Wisdom",
      content: "Morgan Housel's 'The Psychology of Money' is a refreshing take on personal finance that focuses on behavior rather than numbers. The book teaches that financial success isn't about intelligence or technical knowledge, but about understanding human behavior and emotions. Through 19 short stories, Housel explains how our relationship with money is shaped by our experiences and psychology. It's a book that will change how you think about wealth, risk, and financial decisions.",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      category: "Books",
      date: "2024-03-05"
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-300 mb-4">Blog Posts</h1>
          <p className="text-gray-400">Explore my thoughts on TV shows, books, and more</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                  {blog.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {blog.date}
                </div>
                <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-300 mb-6 line-clamp-3">{blog.content}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium group"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 