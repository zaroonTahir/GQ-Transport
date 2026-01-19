import React, { useState, useEffect, useRef } from 'react';
import { Award, Shield, Users, TrendingUp, CheckCircle, MapPin, Clock, Headphones } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, clients: 0, trucks: 0, cities: 0 });
  const sectionRef = useRef(null);

  const highlights = [
    { icon: MapPin, text: 'Nationwide Coverage', color: 'text-blue-600' },
    { icon: Headphones, text: '24/7 Customer Support', color: 'text-green-600' },
    { icon: Shield, text: 'GPS Tracking on All Vehicles', color: 'text-purple-600' },
    { icon: Users, text: 'Professional & Trained Drivers', color: 'text-red-600' },
  ];

  const stats = [
    { icon: Award, value: 15, suffix: '+', label: 'Years Experience', color: 'from-blue-500 to-blue-600' },
    { icon: Users, value: 10, suffix: 'K+', label: 'Happy Clients', color: 'from-green-500 to-green-600' },
    { icon: TrendingUp, value: 500, suffix: '+', label: 'Trucks Fleet', color: 'from-purple-500 to-purple-600' },
    { icon: MapPin, value: 50, suffix: '+', label: 'Cities Covered', color: 'from-red-500 to-red-600' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        years: Math.floor(15 * progress),
        clients: Math.floor(10 * progress),
        trucks: Math.floor(500 * progress),
        cities: Math.floor(50 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ years: 15, clients: 10, trucks: 500, cities: 50 });
      }
    }, interval);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`max-w-3xl mx-auto text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block mb-4 px-6 py-2 bg-blue-100 rounded-full">
            <span className="text-sm font-semibold text-blue-600">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            About GQ Transport Company
          </h2>
          <p className="text-gray-600 text-lg">
            Leading the way in professional logistics and transportation services across Pakistan.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <div className={`relative transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" 
                  alt="Office Interior"
                  className="w-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>


            </div>
          </div>

          {/* Content Side */}
          <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold mb-6 text-gray-900">
              Driving Trust, Delivering Excellence
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              GQ Transport Company has established itself as a premier logistics provider in Pakistan. 
              Under the leadership of <span className="font-semibold text-blue-600">CEO Choudhary Adan</span>, we have built a reputation for reliability, 
              safety, and exceptional customer service.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Our modern fleet of vehicles and experienced team ensure that your cargo reaches its 
              destination safely and on time, every time. We serve businesses and individuals across 
              Pakistan with comprehensive transport solutions.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${highlight.color === 'text-blue-600' ? 'from-blue-100 to-blue-200' : highlight.color === 'text-green-600' ? 'from-green-100 to-green-200' : highlight.color === 'text-purple-600' ? 'from-purple-100 to-purple-200' : 'from-red-100 to-red-200'} rounded-lg flex items-center justify-center`}>
                    <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                  </div>
                  <span className="text-gray-800 font-medium">{highlight.text}</span>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {index === 0 && counters.years}
                  {index === 1 && counters.clients}
                  {index === 2 && counters.trucks}
                  {index === 3 && counters.cities}
                  {stat.suffix}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
              
              {/* Decorative corner */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;