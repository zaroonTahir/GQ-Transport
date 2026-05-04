import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Truck, Shield, Clock, ArrowRight, CheckCircle2, Package, MapPin, Headphones } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: 'Freight Transport',
    description:
      'Comprehensive full truckload and LTL shipping services with nationwide reach and reliable scheduling.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.4)',
    features: ['Pan-Pakistan Coverage', 'Real-time GPS Tracking', 'Flexible Scheduling', 'Competitive Rates'],
    stat: '10+ Trucks',
  },
  {
    icon: Shield,
    title: 'Secure Cargo',
    description:
      'Premium security protocols for valuable cargo with comprehensive insurance coverage and 24/7 monitoring.',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'rgba(139,92,246,0.4)',
    features: ['Full Insurance Coverage', '24/7 Security Monitoring', 'Certified Handlers', 'Tamper-proof Sealing'],
    stat: '100% Insured',
  },
  {
    icon: Clock,
    title: 'Express Delivery',
    description:
      'Time-critical logistics solutions with guaranteed delivery windows for urgent shipments.',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.4)',
    features: ['Same-Day Service', 'Priority Processing', 'On-Time Guarantee', 'Live Updates'],
    stat: '24/7 Service',
  },
  {
    icon: Package,
    title: 'Bulk Cargo',
    description:
      'Specialized handling for large-volume shipments with dedicated fleet allocation and custom solutions.',
    gradient: 'from-orange-500 to-yellow-500',
    glow: 'rgba(249,115,22,0.4)',
    features: ['Dedicated Fleet', 'Volume Discounts', 'Custom Packaging', 'Warehouse Support'],
    stat: 'Any Volume',
  },
  {
    icon: MapPin,
    title: 'Last Mile Delivery',
    description:
      'Efficient last-mile solutions ensuring your cargo reaches the final destination seamlessly.',
    gradient: 'from-green-500 to-teal-500',
    glow: 'rgba(34,197,94,0.4)',
    features: ['Door-to-Door', '50+ Cities', 'Proof of Delivery', 'Flexible Timing'],
    stat: '50+ Cities',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock customer support to track, manage, and resolve any logistics challenges.',
    gradient: 'from-pink-500 to-purple-500',
    glow: 'rgba(236,72,153,0.4)',
    features: ['Live Chat Support', 'Dedicated Manager', 'Issue Resolution', 'Status Updates'],
    stat: 'Always On',
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -8;
    const ry = ((x - cx) / cx) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    }
    setHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="relative group h-full cursor-default"
        style={{ transition: 'transform 0.15s ease', transformStyle: 'preserve-3d' }}
      >
        {/* Glow */}
        <div
          className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"
          style={{ background: `radial-gradient(circle at center, ${service.glow}, transparent 70%)` }}
        />

        <div className="relative h-full bg-gray-900/80 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-6 md:p-7 overflow-hidden flex flex-col">
          {/* BG gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`} />

          {/* Stat badge */}
          <div className={`absolute top-4 right-4 px-2.5 py-1 rounded-full bg-gradient-to-r ${service.gradient} text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0`}>
            {service.stat}
          </div>

          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <service.icon className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-grow">{service.description}</p>

          {/* Features */}
          <div className="space-y-2 mb-6">
            {service.features.map((feat, i) => (
              <motion.div
                key={i}
                animate={hovered ? { x: 4 } : { x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${index % 2 === 0 ? 'text-blue-400' : 'text-purple-400'}`} />
                <span className="text-xs text-gray-300">{feat}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4 border-t border-white/10">
            <button className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:gap-3 transition-all duration-300`}>
              Learn More
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>

          {/* Bottom line */}
          <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
        </div>
      </div>
    </motion.div>
  );
}

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 md:py-28 bg-[#030712] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-sm font-medium text-cyan-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-white">Transport </span>
            <span className="animated-gradient-text">Solutions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Delivering excellence through comprehensive logistics services tailored to your business requirements
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-gray-400 mb-6">Need a custom logistics solution?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20 transition-all"
          >
            Contact Us Today →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
