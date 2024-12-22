import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Business Owner',
    content: 'This card has transformed how I manage my business expenses. The rewards program is exceptional!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150'
  },
  {
    name: 'Michael Chen',
    role: 'Tech Professional',
    content: 'The virtual card feature is a game-changer for online purchases. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Travel Blogger',
    content: 'No foreign transaction fees and great travel benefits. Perfect for my lifestyle!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}