import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // The same header across all routes
import Home from './components/Home';
import Blog from './components/Blog';
import Techs from './components/Techs';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      {/* Keep the header outside of Routes to ensure it stays the same across all pages */}
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Define the routes for different sections */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/techs" element={<Techs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
