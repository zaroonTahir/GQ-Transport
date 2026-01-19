import React, { useState, useEffect, useRef } from 'react';
import { Truck, Shield, Clock, ArrowRight, Package, MapPin, Headphones, CheckCircle2 } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  const services = [
    {
      icon: Truck,
      title: 'Freight Transport',
      description: 'Comprehensive full truckload and LTL shipping services with nationwide reach and reliable scheduling.',
      bgColor: 'bg-blue-600',
      hoverColor: 'group-hover:bg-blue-700',
      features: ['Pan-Pakistan Coverage', 'Real-time GPS Tracking', 'Flexible Scheduling']
    },
    {
      icon: Shield,
      title: 'Secure Cargo',
      description: 'Premium security protocols for valuable cargo with comprehensive insurance coverage and monitoring.',
      bgColor: 'bg-indigo-600',
      hoverColor: 'group-hover:bg-indigo-700',
      features: ['Full Insurance Coverage', '24/7 Security Monitoring', 'Certified Handlers']
    },
    {
      icon: Clock,
      title: 'Express Delivery',
      description: 'Time-critical logistics solutions with guaranteed delivery windows for urgent shipments.',
      bgColor: 'bg-purple-600',
      hoverColor: 'group-hover:bg-purple-700',
      features: ['Same-Day Service Available', 'Priority Processing', 'On-Time Guarantee']
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
   <section id="services" className="pt-24 pb-12 bg-gray-900 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className={`max-w-2xl mx-auto text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Transport Solutions
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Delivering excellence through comprehensive logistics services tailored to your business requirements
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
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
              <div className="relative bg-gray-800 border-2 border-gray-700 rounded-2xl p-8 h-full hover:border-gray-600 hover:shadow-2xl transition-all duration-500">

                {/* Icon */}
                <div className="mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} ${service.hoverColor} rounded-xl transition-all duration-500 group-hover:scale-110`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 transition-all duration-300 ${
                        activeCard === index ? 'translate-x-1' : 'translate-x-0'
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More */}
                <div className="pt-6 border-t border-gray-700">
                  <button className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:gap-4 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Hover Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${service.bgColor} transition-transform duration-500 ${
                  activeCard === index ? 'scale-x-100' : 'scale-x-0'
                } rounded-b-2xl`}></div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
