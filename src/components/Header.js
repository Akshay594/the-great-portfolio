import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4 px-6 sticky top-0 z-10 shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">
          <Link to="/">Gopal Singh</Link>
        </h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/blog" className="hover:text-blue-300 transition-colors duration-300">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/techs" className="hover:text-blue-300 transition-colors duration-300">
                Techs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
