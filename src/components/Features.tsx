import React from 'react';
import { Shield, Zap, Gift, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'Advanced encryption and fraud protection for worry-free spending'
  },
  {
    icon: Zap,
    title: 'Instant Approval',
    description: 'Get approved in minutes with our streamlined application process'
  },
  {
    icon: Gift,
    title: 'Rewards Program',
    description: 'Earn points on every purchase and redeem for exclusive rewards'
  },
  {
    icon: CreditCard,
    title: 'Virtual Card',
    description: 'Generate virtual cards for secure online shopping'
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}