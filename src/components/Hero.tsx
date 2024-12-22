import React from 'react';
import { motion } from 'framer-motion';
import CreditCard from './CreditCard';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
              The Future of
              <span className="text-blue-400 block mt-2">Digital Banking</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience premium benefits, advanced security, and exclusive rewards
              with our next-generation credit card solution.
            </p>
            <div className="flex space-x-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors flex items-center group"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-full hover:bg-blue-400/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
            <CreditCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
}