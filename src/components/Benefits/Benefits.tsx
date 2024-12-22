import React from 'react';
import { Shield, Zap, Gift, CreditCard, Wallet, Globe } from 'lucide-react';
import BenefitCard from './BenefitCard';
import ParallaxSection from '../ParallaxSection';

const benefits = [
  {
    icon: Shield,
    title: 'Fraud Protection',
    description: '24/7 monitoring and real-time fraud detection to keep your money safe'
  },
  {
    icon: Zap,
    title: 'Instant Notifications',
    description: 'Get real-time alerts for all your transactions'
  },
  {
    icon: Gift,
    title: 'Cashback Rewards',
    description: 'Earn up to 5% cashback on select purchases'
  },
  {
    icon: Wallet,
    title: 'Digital Wallet',
    description: 'Seamless integration with Apple Pay and Google Pay'
  },
  {
    icon: Globe,
    title: 'Global Acceptance',
    description: 'Use your card anywhere in the world with no foreign transaction fees'
  },
  {
    icon: CreditCard,
    title: 'Virtual Cards',
    description: 'Create virtual cards for secure online shopping'
  }
];

export default function Benefits() {
  return (
    <ParallaxSection className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Exclusive Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              {...benefit}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}