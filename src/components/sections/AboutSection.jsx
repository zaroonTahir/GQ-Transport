import React, { useState, useEffect, useRef } from 'react';
import { Award, Shield, Users, TrendingUp, MapPin } from 'lucide-react';
import gq from "../../assets/gq1.png"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({ years: 0, clients: 0, trucks: 0, cities: 0 });
  const sectionRef = useRef(null);

  const stats = [
    { icon: Award, value: 10, suffix: '+', label: 'Years Experience', color: 'from-blue-500 to-purple-500' },
    { icon: Users, value: 10, suffix: 'K+', label: 'Happy Clients', color: 'from-purple-500 to-blue-500' },
    { icon: TrendingUp, value: 10, suffix: '+', label: 'Trucks Fleet', color: 'from-blue-500 to-purple-500' },
    { icon: MapPin, value: 50, suffix: '+', label: 'Cities Covered', color: 'from-purple-500 to-blue-500' },
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

    if (sectionRef.current) observer.observe(sectionRef.current);
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
        years: Math.floor(10 * progress),
        clients: Math.floor(10 * progress),
        trucks: Math.floor(10 * progress),
        cities: Math.floor(50 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters({ years: 10, clients: 10, trucks: 10, cities: 50 });
      }
    }, interval);
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-10 sm:mb-12 md:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-800/50 rounded-full mb-4 sm:mb-6 border border-white/10">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wide">
              About Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About GQ Transport Company
          </h2>
          <p className="text-gray-400 text-base sm:text-lg px-4">
            Leading the way in professional logistics and transportation services across Pakistan.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          {/* Image */}
          <div
            className={`relative transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl sm:rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={gq}
                  alt="Office Interior"
                  className="w-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Driving Trust, Delivering Excellence
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed">
              GQ Transport Company has established itself as a premier logistics provider in Pakistan.
              Under the leadership of{' '}
              <span className="font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CEO Choudhary Adan
              </span>
              , we have built a reputation for reliability, safety, and exceptional customer service.
            </p>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              Our modern fleet of vehicles and experienced team ensure that your cargo reaches its
              destination safely and on time, every time.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                {/* Hover Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-1">
                    {index === 0 && counters.years}
                    {index === 1 && counters.clients}
                    {index === 2 && counters.trucks}
                    {index === 3 && counters.cities}
                    {stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
              
              {/* Decorative Corner Dot */}
              <div className={`absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;