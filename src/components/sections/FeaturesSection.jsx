import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Clock, Truck, Award, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Your cargo is protected with comprehensive insurance and advanced safety protocols.',
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.3)',
    delay: 0,
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We pride ourselves on punctual deliveries with real-time tracking every single time.',
    gradient: 'from-purple-500 to-pink-500',
    glow: 'rgba(139,92,246,0.3)',
    delay: 0.1,
  },
  {
    icon: Truck,
    title: 'Modern Fleet',
    description: 'Well-maintained vehicles equipped with GPS tracking and latest safety systems.',
    gradient: 'from-cyan-500 to-blue-500',
    glow: 'rgba(6,182,212,0.3)',
    delay: 0.2,
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering the highest quality transport services across Pakistan.',
    gradient: 'from-pink-500 to-purple-500',
    glow: 'rgba(236,72,153,0.3)',
    delay: 0.3,
  },
  {
    icon: Zap,
    title: 'Express Service',
    description: 'Same-day and next-day delivery options for time-critical shipments.',
    gradient: 'from-yellow-500 to-orange-500',
    glow: 'rgba(234,179,8,0.3)',
    delay: 0.4,
  },
  {
    icon: Globe,
    title: 'Nationwide',
    description: 'Covering 50+ cities across Pakistan with an ever-expanding logistics network.',
    gradient: 'from-green-500 to-teal-500',
    glow: 'rgba(34,197,94,0.3)',
    delay: 0.5,
  },
];

/* ── 3D Tilt Card ── */
function TiltCard({ feature, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: feature.delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative group h-full cursor-default"
        style={{ transition: 'transform 0.15s ease', transformStyle: 'preserve-3d' }}
      >
        {/* Glow */}
        <div
          className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
          style={{ background: `linear-gradient(135deg, ${feature.glow}, transparent)` }}
        />

        <div className="relative h-full bg-gray-900/80 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-6 overflow-hidden transition-all duration-300">
          {/* Background gradient on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

          {/* Scan line effect */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent scan-line"
            />
          </div>

          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
            style={{ transform: 'translateZ(20px)' }}
          >
            <feature.icon className="w-7 h-7 text-white" />
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {feature.description}
          </p>

          {/* Bottom accent */}
          <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

          {/* Corner dot */}
          <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        </div>
      </div>
    </motion.div>
  );
}

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-20 md:py-28 bg-[#030712] overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-sm font-medium text-blue-300 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Why Choose Us
          </motion.span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-white">Our Key </span>
            <span className="animated-gradient-text">Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the difference with our professional transport services built on trust and technology
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <TiltCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
