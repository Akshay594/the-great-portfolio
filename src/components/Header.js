import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    // { name: 'Blog', path: '/blog' },
    // { name: 'Techs', path: '/techs' },
    // { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`py-4 px-6 sticky top-0 z-10 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900 bg-opacity-90'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 hover:from-indigo-200 hover:to-purple-200 transition-all duration-300">
            Gopal Singh
          </Link>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`hover:text-indigo-200 transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-indigo-300 font-semibold' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button 
          className="md:hidden text-indigo-300 hover:text-indigo-200 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4 text-lg">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`block hover:text-indigo-200 transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-indigo-300 font-semibold' : 'text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;