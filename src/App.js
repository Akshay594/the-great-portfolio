import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import BlogPostPersonalization from './components/BlogPostPersonalization';

function App() {

  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/ai-personalization-ecommerce" element={<BlogPostPersonalization />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
