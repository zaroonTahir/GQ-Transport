import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Truck, Shield, Clock, MapPin } from 'lucide-react'
import gq from "../../assets/gq2.png"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: Truck, text: '500+ Trucks' },
    { icon: Shield, text: '100% Insured' },
    { icon: Clock, text: '24/7 Support' },
    { icon: MapPin, text: 'All Pakistan' }
  ];

  return (
    <section id="home" className="relative pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-sm font-semibold text-blue-200">🚚 Pakistan's Trusted Transport Partner</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Transport Solutions
              </span>
            </h1>
            
            <p className="text-xl mb-8 text-gray-200 leading-relaxed">
              Delivering excellence across Pakistan with reliability, safety, and speed. Your cargo, our commitment.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20 transform transition-all duration-500 hover:scale-105 hover:bg-white/20 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <feature.icon className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="primary"
                className="group"
              >
                Get Quote
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Button
                onClick={() => scrollToSection('services')}
                variant="secondary"
              >
                Our Services
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse delay-500"></div>
            
            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src={gq} 
                alt="GQ Transport Truck"
                className="rounded-lg shadow-2xl w-full"
              />
              
              {/* Stats overlay */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-600 to-blue-700 p-4 rounded-xl shadow-xl border border-blue-400/30 animate-bounce-slow">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-purple-700 p-4 rounded-xl shadow-xl border border-purple-400/30 animate-bounce-slow delay-300">
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm text-purple-200">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M0,0 C300,80 600,80 900,40 L1200,80 L1200,120 L0,120 Z" opacity="0.1"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </section>
  );
};

export default HeroSection;