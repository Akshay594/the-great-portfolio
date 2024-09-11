import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/blogs/?status=published')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map(blog => (
          <div key={blog.slug} className="bg-gray-800 p-6 rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-300 mb-4">{blog.content.substring(0, 150)}...</p>
            <Link to={`/blog/${blog.slug}`} className="text-indigo-400 hover:text-indigo-300">Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
