import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { name: 'Blog', path: '/blog' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`py-4 md:py-8 px-4 md:px-12 fixed top-0 w-full z-10 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left-aligned Title */}
        <h1 className="text-3xl md:text-5xl font-bold ml-2 md:ml-6">
          <Link to="/" className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 hover:from-indigo-200 hover:to-purple-200 transition-all duration-300 hover:scale-105">
            Gopal Singh
          </Link>
        </h1>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:block">
          <ul className="flex justify-end space-x-12 mr-24 text-lg">
            {navItems.map((item) => (
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 bottom-0 w-64 bg-gray-900 bg-opacity-95 transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out z-20`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-lg ${
                      location.pathname === item.path
                        ? 'text-indigo-300 font-semibold'
                        : 'text-gray-300'
                    } hover:text-indigo-200 transition-colors duration-300`}
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;