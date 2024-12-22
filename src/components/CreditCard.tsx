import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard as CardIcon, Shield, Zap, Gift } from 'lucide-react';

export default function CreditCard() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRotateY((x / rect.width - 0.5) * 20);
    setRotateX((y / rect.height - 0.5) * -20);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative w-96 h-56 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 text-white p-6 shadow-2xl cursor-pointer"
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute top-6 right-6">
        <CardIcon className="w-12 h-12" />
      </div>
      <div className="mt-16">
        <div className="text-2xl tracking-widest mb-4">•••• •••• •••• 1234</div>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-sm opacity-80">Card Holder</div>
            <div>JOHN DOE</div>
          </div>
          <div>
            <div className="text-sm opacity-80">Expires</div>
            <div>12/25</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}