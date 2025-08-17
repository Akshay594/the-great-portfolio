import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, Code, Book, Tv, Home } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Blog', path: '/blog', icon: Code },
    { name: 'Shows', path: '/shows', icon: Tv },
    { name: 'Books', path: '/books', icon: Book },
  ];



  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[72px] bg-black/50 backdrop-blur-md z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.header 
        className="fixed top-0 w-full z-50 py-4"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Link to="/" className="relative block group">
                <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur transition-all duration-500 animate-gradient-xy" />
                <div className="relative flex items-center space-x-2">
                  <motion.div
                    className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="w-full h-full bg-black rounded-md flex items-center justify-center">
                      <span className="text-white font-bold">t</span>
                    </div>
                  </motion.div>
                  <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    theunblunt
                  </h1>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-center bg-white/5 rounded-2xl p-1.5 backdrop-blur-sm">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  const Icon = item.icon;
                  
                  return (
                    <motion.div
                      key={item.name}
                      className="relative mx-1"
                      onHoverStart={() => setHoveredItem(item.name)}
                      onHoverEnd={() => setHoveredItem(null)}
                    >
                      <Link 
                        to={item.path} 
                        className={`relative z-10 px-4 py-2 rounded-xl flex items-center space-x-2 transition-all duration-300 ${
                          isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 bg-white/10 rounded-xl"
                          layoutId="activeNav"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      {hoveredItem === item.name && !isActive && (
                        <motion.div
                          className="absolute inset-0 bg-white/5 rounded-xl"
                          layoutId="hoverNav"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-2 rounded-xl bg-white/5 backdrop-blur-sm"
              onClick={toggleMobileMenu}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-white" />
                  ) : (
                    <Menu className="w-5 h-5 text-white" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                className="fixed top-[72px] inset-x-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 overflow-hidden z-50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                <nav className="p-4 grid gap-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? 'bg-white/10 text-white'
                              : 'text-gray-300 hover:bg-white/5 hover:text-white'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{item.name}</span>
                          <ChevronRight className="w-4 h-4 ml-auto" />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;