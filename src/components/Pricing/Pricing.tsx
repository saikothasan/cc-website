import React from 'react';
import PricingCard from './PricingCard';

const plans = [
  {
    title: 'Basic',
    price: '$0',
    features: [
      'No annual fee',
      'Basic fraud protection',
      'Mobile app access',
      'Virtual cards'
    ]
  },
  {
    title: 'Premium',
    price: '$99',
    features: [
      'No foreign transaction fees',
      'Advanced fraud protection',
      'Priority customer support',
      'Extended warranty protection',
      'Travel insurance'
    ],
    isPopular: true
  },
  {
    title: 'Elite',
    price: '$299',
    features: [
      'All Premium features',
      'Airport lounge access',
      'Concierge service',
      'Higher rewards rate',
      'Luxury travel benefits',
      'Purchase protection'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}