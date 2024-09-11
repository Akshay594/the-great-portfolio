import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminCMS from './admin-cms/AdminCMS';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin" element={token ? <AdminCMS token={token} /> : <Login setToken={setToken} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
