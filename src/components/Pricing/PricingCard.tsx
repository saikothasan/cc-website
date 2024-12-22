import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  delay: number;
}

export default function PricingCard({ title, price, features, isPopular, delay }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative bg-white rounded-2xl shadow-xl p-8 ${
        isPopular ? 'border-2 border-blue-600' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-600">/year</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="w-5 h-5 text-blue-600 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 rounded-full transition-colors ${
        isPopular
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
      }`}>
        Get Started
      </button>
    </motion.div>
  );
}