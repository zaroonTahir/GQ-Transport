import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Truck, Shield, Clock, MapPin } from 'lucide-react'
import gq from "../../assets/hero-video3.mp4"

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
    { icon: Truck, text: '10+ Trucks' },
    { icon: Shield, text: '100% Insured' },
    { icon: Clock, text: '24/7 Support' },
    { icon: MapPin, text: 'All Pakistan' }
  ];

  return (
    <section
      id="home"
      className="relative pt-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-semibold text-gray-200">
                🚚 Pakistan's Trusted Transport Partner
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              GQ Transport
              {<span className="block bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                Rahim Yar Khan
              </span> }
            </h1>

            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Delivering excellence across Pakistan with reliability, safety, and speed. Your cargo, our commitment.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/10 transform transition-all duration-500 hover:scale-105 hover:bg-white/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <feature.icon className="w-5 h-5 text-gray-300" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <Button onClick={() => scrollToSection('contact')} variant="primary">
                Get Quote →
              </Button>
              <Button onClick={() => scrollToSection('services')} variant="secondary">
                Our Services
              </Button>
            </div>
          </div>

   {/* Right Content */}
<div
  className={`relative transform transition-all duration-1000 delay-300 ${
    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
  }`}
>
  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-700/30 rounded-full blur-2xl animate-pulse"></div>
  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-600/30 rounded-full blur-2xl animate-pulse delay-500"></div>

  <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500">
    
    {/* VIDEO */}
    <video
      src={gq} // 🔁 replace gq with your video file import
      autoPlay
      loop
      muted
      playsInline
      className="rounded-lg shadow-2xl w-full object-cover"
    />

    {/* Stats overlay */}
    <div className="absolute -bottom-4 -left-4 bg-gray-800 p-4 rounded-xl shadow-xl border border-white/10 animate-bounce-slow">
      <div className="text-3xl font-bold">10+</div>
      <div className="text-sm text-gray-300">Years Experience</div>
    </div>

    <div className="absolute -top-4 -right-4 bg-gray-700 p-4 rounded-xl shadow-xl border border-white/10 animate-bounce-slow delay-300">
      <div className="text-3xl font-bold">10k+</div>
      <div className="text-sm text-gray-300">Happy Clients</div>
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-black">
          <path d="M0,0 C300,80 600,80 900,40 L1200,80 L1200,120 L0,120 Z" opacity="0.2"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
