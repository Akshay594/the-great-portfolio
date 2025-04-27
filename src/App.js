import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import BlogPostPersonalization from './components/BlogPostPersonalization';
import Shows from './components/Shows';
import Books from './components/Books';
import ParticlesBackground from './components/ParticlesBackground';
import ThemeToggle from './components/ThemeToggle';
import CustomCursor from './components/CustomCursor';

function App() {

  return (
    <Router>
      <ParticlesBackground />
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-gray-900/40 via-gray-800/30 to-gray-900/40 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/ai-personalization-ecommerce" element={<BlogPostPersonalization />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
      <ThemeToggle />
      <CustomCursor />
    </Router>
  );
}

export default App;
