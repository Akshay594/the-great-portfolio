import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  // We'll just show the toggle but keep it on dark mode since the portfolio is designed for dark theme
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // In a real implementation, we would update the document classes here
    // and apply the appropriate theme styles
  };

  return (
    <motion.button
      className={`fixed right-5 bottom-5 z-50 p-3 rounded-full shadow-lg ${
        isDark 
          ? 'bg-indigo-900/30 text-indigo-300 border border-indigo-800/30' 
          : 'bg-indigo-100 text-indigo-900 border border-indigo-200'
      } backdrop-blur-sm`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-300" />
      ) : (
        <Moon size={20} className="text-indigo-600" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 