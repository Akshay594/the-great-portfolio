import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [blog, setBlog] = useState(null); // Store blog data
  const [expandedSection, setExpandedSection] = useState(null); // Control collapsible sections

  // Fetch the blog data from the API
  useEffect(() => {
    axios.get(`http://localhost:8000/blogs/${slug}`)
      .then(response => setBlog(response.data))
      .catch(error => console.error('Error fetching blog:', error));
  }, [slug]);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  // If blog is not yet fetched, show a loading message
  if (!blog) {
    return <div className="text-center mt-20 text-gray-300">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-900 to-indigo-900 text-white min-h-screen">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-4">
          {blog.title}
        </h1>
        <p className="text-xl text-indigo-200">Discover the details of {blog.title}</p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">Introduction</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          {blog.introduction ? blog.introduction : 'This blog discusses important topics related to AI and technology.'}
        </p>
      </section>

      {blog.sections && blog.sections.map((section, index) => (
        <div key={index} className="mb-8 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out">
          <button
            className="w-full p-4 text-left bg-indigo-800 hover:bg-indigo-700 transition-colors duration-300 flex justify-between items-center"
            onClick={() => toggleSection(index)}
          >
            <h2 className="text-2xl font-bold text-white">{section.title}</h2>
            {expandedSection === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
          {expandedSection === index && (
            <div className="p-6">
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-4">
                  {item.subtitle && <h3 className="text-xl font-semibold text-indigo-300 mb-2">{item.subtitle}</h3>}
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <section className="mt-12 bg-indigo-800 rounded-lg p-6 shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-4">Conclusion</h2>
        <p className="text-lg text-indigo-100 leading-relaxed">
          {blog.conclusion ? blog.conclusion : 'Explore more blogs on AI and its implications in the tech world.'}
        </p>
      </section>
    </div>
  );
};

export default BlogPost;
