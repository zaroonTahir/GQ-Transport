// ========================================
// FILE: src/components/sections/ServicesSection.jsx
// ========================================
import React from 'react';
import { Truck, Shield, Clock } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: 'Freight Transport',
      description: 'Full truckload and less-than-truckload shipping services across Pakistan.',
      bgColor: 'bg-red-600',
    },
    {
      icon: Shield,
      title: 'Secure Cargo',
      description: 'High-security transport for valuable and sensitive cargo with insurance coverage.',
      bgColor: 'bg-blue-600',
    },
    {
      icon: Clock,
      title: 'Express Delivery',
      description: 'Time-critical deliveries with guaranteed on-time arrival for urgent shipments.',
      bgColor: 'bg-green-600',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-lg">Comprehensive transport solutions tailored to your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
              <div className={`${service.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;