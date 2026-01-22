import React, { useState, useEffect, useRef } from 'react';
import { Shield, Clock, Truck, Award } from 'lucide-react';
import Card from '../ui/Card';

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your cargo is protected with our comprehensive insurance and safety measures.',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      hoverGradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on punctual deliveries, every single time.',
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      hoverGradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Truck,
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles equipped with GPS tracking systems.',
      bgColor: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      hoverGradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality transport services.',
      bgColor: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      hoverGradient: 'from-purple-500 to-blue-500',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-18 lg:py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 right-1/3 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-12 md:mb-14 lg:mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full mb-5 md:mb-6 border border-white/10">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Key Features
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            Experience the difference with our professional transport services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="relative text-center bg-gray-800/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 h-full overflow-hidden">
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.hoverGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <div className="relative z-10 p-5 md:p-6">
                  {/* Icon */}
                  <div
                    className={`${feature.bgColor} w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-7 h-7 md:w-8 md:h-8 ${feature.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base md:text-lg mb-2 md:mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.hoverGradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                ></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
