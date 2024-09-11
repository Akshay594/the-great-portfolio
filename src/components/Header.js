import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
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
    // { name: 'Home', path: '/' },
    // { name: 'Blog', path: '/blog' },
    // { name: 'Techs', path: '/techs' },
    // { name: 'Contact', path: '/contact' },
  ];

  const leftNavItems = navItems.slice(0, Math.ceil(navItems.length / 2));
  const rightNavItems = navItems.slice(Math.ceil(navItems.length / 2));

  return (
    <header className={`py-8 px-6 md:px-12 fixed top-0 w-full z-10 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
        {/* Navigation Menu */}
        <nav className="hidden md:block flex-1">
          <ul className="flex justify-start space-x-16 text-lg">
            {leftNavItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`relative px-3 py-2 transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-indigo-300 font-semibold'
                      : 'text-gray-300'
                  } hover:text-indigo-200 font-medium text-white group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Center Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <Link to="/" className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 hover:from-indigo-200 hover:to-purple-200 transition-all duration-300 hover:scale-105">
            Gopal Singh
          </Link>
        </h1>

        {/* Right-side Navigation */}
        <nav className="hidden md:block flex-1">
          <ul className="flex justify-end space-x-24 text-lg">
            {rightNavItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className={`relative px-3 py-2 transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'text-indigo-300 font-semibold'
                      : 'text-gray-300'
                  } hover:text-indigo-200 font-medium text-white group`}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
