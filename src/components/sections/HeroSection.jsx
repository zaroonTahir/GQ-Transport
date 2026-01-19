// ========================================
// FILE: src/components/sections/HeroSection.jsx
// ========================================
import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">Professional Transport Solutions</h2>
            <p className="text-xl mb-8 text-gray-200">
              Delivering excellence across Pakistan with reliability, safety, and speed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                variant="primary"
              >
                Get Quote
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                variant="secondary"
              >
                Our Services
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop" 
                alt="GQ Transport Truck"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;