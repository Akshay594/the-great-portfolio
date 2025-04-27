import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
    { name: 'Shows', path: '/shows' },
    { name: 'Books', path: '/books' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header 
      className={`py-4 md:py-6 px-4 md:px-12 fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-sm ${
        isScrolled ? 'bg-gray-900/90' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Left-aligned Title */}
        <motion.h1 
          className="text-3xl md:text-4xl font-bold ml-2 md:ml-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          <Link to="/" className="font-serif relative text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 hover:from-indigo-200 hover:to-purple-200 transition-all duration-300">
            Gopal Singh
            <motion.span 
              className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </Link>
        </motion.h1>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:block">
          <ul className="flex justify-end space-x-12 mr-12 text-lg">
            {navItems.map((item) => (
              <motion.li 
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <Link 
                  to={item.path} 
                  className={`relative px-3 py-2 overflow-hidden block ${
                    location.pathname === item.path
                      ? 'text-indigo-300 font-semibold'
                      : 'text-gray-300'
                  } hover:text-indigo-200 font-medium text-white group`}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-indigo-900/0 to-purple-900/0 group-hover:from-indigo-900/10 group-hover:to-purple-900/10 transition-all duration-300 rounded-lg -z-10" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button with animation */}
        <motion.button
          className="md:hidden text-white focus:outline-none bg-indigo-900/20 p-2 rounded-full"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-indigo-300" />
          ) : (
            <Menu className="w-6 h-6 text-indigo-300" />
          )}
        </motion.button>

        {/* Mobile Menu with improved animation */}
        <motion.div
          className="fixed top-0 right-0 bottom-0 w-64 bg-gradient-to-br from-gray-900/95 to-indigo-900/95 backdrop-blur-lg z-50 shadow-2xl"
          initial={{ x: '100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="flex justify-end p-4">
            <motion.button
              className="text-indigo-300 focus:outline-none p-2 rounded-full bg-indigo-900/20"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>
          
          <motion.div 
            className="flex flex-col items-center justify-center h-1/2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  when: "beforeChildren"
                }
              }
            }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                className="mb-8"
              >
                <Link
                  to={item.path}
                  className={`block px-4 py-2 text-2xl font-semibold ${
                    location.pathname === item.path
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300'
                      : 'text-gray-300'
                  } hover:text-indigo-200 transition-colors duration-300`}
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div 
                      className="h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 mt-1"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;