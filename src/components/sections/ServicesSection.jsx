import React, { useState, useEffect, useRef } from 'react';
import { Truck, Shield, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: Truck,
      title: 'Freight Transport',
      description:
        'Comprehensive full truckload and LTL shipping services with nationwide reach and reliable scheduling.',
      gradient: 'from-blue-500 to-purple-500',
      features: ['Pan-Pakistan Coverage', 'Real-time GPS Tracking', 'Flexible Scheduling'],
    },
    {
      icon: Shield,
      title: 'Secure Cargo',
      description:
        'Premium security protocols for valuable cargo with comprehensive insurance coverage and monitoring.',
      gradient: 'from-purple-500 to-blue-500',
      features: ['Full Insurance Coverage', '24/7 Security Monitoring', 'Certified Handlers'],
    },
    {
      icon: Clock,
      title: 'Express Delivery',
      description:
        'Time-critical logistics solutions with guaranteed delivery windows for urgent shipments.',
      gradient: 'from-blue-500 to-purple-500',
      features: ['Same-Day Service Available', 'Priority Processing', 'On-Time Guarantee'],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/3 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`max-w-2xl mx-auto text-center mb-12 md:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full mb-5 md:mb-6 border border-white/10">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wide">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Transport Solutions
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed">
            Delivering excellence through comprehensive logistics services tailored to your business
            requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-6 md:p-8 h-full hover:border-white/20 hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="mb-6 md:mb-8 relative z-10">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${service.gradient} rounded-xl transition-all duration-500 group-hover:scale-110 shadow-lg`}
                  >
                    <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative z-10">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 md:mb-8 relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-6 md:mb-8 relative z-10">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 transition-all duration-300 ${
                        activeCard === index ? 'translate-x-1' : 'translate-x-0'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-5 h-5 mt-0.5 ${
                          index % 2 === 0 ? 'text-blue-400' : 'text-purple-400'
                        }`}
                      />
                      <span className="text-sm text-gray-300 font-medium leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <div className="pt-5 md:pt-6 border-t border-white/10 relative z-10">
                  <button
                    className={`inline-flex items-center gap-2 font-semibold hover:gap-4 transition-all duration-300 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </button>
                </div>

                {/* Bottom Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transition-transform duration-500 ${
                    activeCard === index ? 'scale-x-100' : 'scale-x-0'
                  } rounded-b-2xl`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
