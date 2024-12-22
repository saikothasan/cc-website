import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isSticky ? 'bg-white/80 backdrop-blur-lg shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-2xl font-bold text-blue-600"
          >
            <CreditCard className="w-8 h-8" />
            <span>CardPro</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Features', 'Benefits', 'Pricing'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className={`${isSticky ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors`}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Apply Now
            </motion.button>
          </div>

          <button 
            className="md:hidden text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-4 bg-white/80 backdrop-blur-lg p-4 rounded-lg"
          >
            {['Features', 'Benefits', 'Pricing'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-800 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Apply Now
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}