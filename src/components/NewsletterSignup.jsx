import React, { useState, useEffect } from 'react';
import { X, Mail, Zap, TrendingUp, UserPlus, Gift } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);

    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/gopalsinghpanwar411@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          _subject: "New Newsletter Subscription"
        })
      });

      const result = await response.json();

      if (result.success) {
        setMessage('🎉 Welcome aboard! Your journey into AI mastery begins now.');
        setEmail('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setMessage('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeForm = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-8 rounded-3xl shadow-2xl text-white max-w-md w-full relative overflow-hidden">
        <button 
          onClick={closeForm} 
          className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full p-2 transition-colors duration-300"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        
        <div className="text-center mb-6">
          <div className="bg-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Mail size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            Elevate Your AI Game
          </h2>
          <p className="text-indigo-300">Dive into a world of cutting-edge AI insights and e-commerce strategies.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your visionary email"
              className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              required
            />
            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : (
              <>
                <span>Unlock AI Wisdom</span>
                <Zap className="ml-2" size={20} />
              </>
            )}
          </button>
        </form>

        {message && (
          <div className="mt-4 p-3 bg-indigo-800 bg-opacity-50 rounded-lg text-center animate-fade-in-up">
            <p className="text-indigo-300">{message}</p>
          </div>
        )}

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center">
            <TrendingUp className="text-purple-400 mr-2" size={18} />
            <span>Emerging AI Trends</span>
          </div>
          <div className="flex items-center">
            <Zap className="text-purple-400 mr-2" size={18} />
            <span>Expert Insights</span>
          </div>
          <div className="flex items-center">
            <UserPlus className="text-purple-400 mr-2" size={18} />
            <span>Exclusive Network</span>
          </div>
          <div className="flex items-center">
            <Gift className="text-purple-400 mr-2" size={18} />
            <span>Special Offers</span>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-indigo-300">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;