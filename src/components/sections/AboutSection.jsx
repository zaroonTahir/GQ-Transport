// ========================================
// FILE: src/components/sections/AboutSection.jsx
// ========================================
import React from 'react';

const AboutSection = () => {
  const highlights = [
    'Nationwide Coverage',
    '24/7 Customer Support',
    'GPS Tracking on All Vehicles',
    'Professional & Trained Drivers',
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About GQ Transport Company</h2>
          <p className="text-gray-600 text-lg">
            Leading the way in professional logistics and transportation services across Pakistan.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" 
              alt="Office Interior"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Driving Trust, Delivering Excellence</h3>
            <p className="text-gray-700 mb-4">
              GQ Transport Company has established itself as a premier logistics provider in Pakistan. 
              Under the leadership of CEO Choudhary Adan, we have built a reputation for reliability, 
              safety, and exceptional customer service.
            </p>
            <p className="text-gray-700 mb-6">
              Our modern fleet of vehicles and experienced team ensure that your cargo reaches its 
              destination safely and on time, every time. We serve businesses and individuals across 
              Pakistan with comprehensive transport solutions.
            </p>
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;