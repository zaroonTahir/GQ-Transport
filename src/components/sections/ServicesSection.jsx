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

  const capabilities = [
    { icon: Package, label: 'Warehousing', desc: 'Secure Storage' },
    { icon: MapPin, label: 'Route Planning', desc: 'Optimized Routes' },
    { icon: Headphones, label: 'Support 24/7', desc: 'Always Available' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-white relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`max-w-2xl mx-auto text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Transport Solutions
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
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
              <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-8 h-full hover:border-gray-200 hover:shadow-xl transition-all duration-500">
                {/* Icon Container */}
                <div className="mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} ${service.hoverColor} rounded-xl transition-all duration-500 group-hover:scale-110`}>
                    <service.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-3 transition-all duration-300 ${
                        activeCard === index ? 'translate-x-1' : 'translate-x-0'
                      }`}
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="pt-6 border-t border-gray-100">
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300 group/btn">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" strokeWidth={2} />
                  </button>
                </div>

                {/* Hover Indicator */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${service.bgColor} transform origin-left transition-transform duration-500 ${
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