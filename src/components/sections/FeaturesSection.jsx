// ========================================
// FILE: src/components/sections/FeaturesSection.jsx
// ========================================
import React from 'react';
import { Shield, Clock, Truck, Award } from 'lucide-react';
import Card from '../ui/Card';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your cargo is protected with our comprehensive insurance and safety measures.',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on punctual deliveries, every single time.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      icon: Truck,
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles equipped with GPS tracking systems.',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality transport services.',
      bgColor: 'bg-yellow-100',
      iconColor: 'text-yellow-600',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <div className={`${feature.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;