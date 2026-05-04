import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Award, Shield, Users, TrendingUp, MapPin, CheckCircle } from 'lucide-react';
import gq from '../../assets/gq1.png';

/* ── Animated counter ── */
function Counter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Award, value: 10, suffix: '+', label: 'Years Experience', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Users, value: 10, suffix: 'K+', label: 'Happy Clients', gradient: 'from-purple-500 to-pink-500' },
  { icon: TrendingUp, value: 10, suffix: '+', label: 'Trucks Fleet', gradient: 'from-cyan-500 to-blue-500' },
  { icon: MapPin, value: 50, suffix: '+', label: 'Cities Covered', gradient: 'from-pink-500 to-purple-500' },
];

const highlights = [
  'Modern GPS-tracked fleet',
  'Fully insured cargo',
  'Experienced professional drivers',
  'Pan-Pakistan coverage',
  '24/7 customer support',
  'On-time delivery guarantee',
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-[#030712] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Horizontal line accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-sm font-medium text-purple-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
            <span className="text-white">About </span>
            <span className="animated-gradient-text">GQ Transport</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Leading the way in professional logistics and transportation services across Pakistan
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-3xl border border-blue-500/10" />
            <div className="absolute -inset-8 rounded-3xl border border-purple-500/5" />

            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl blur-2xl" />

            <motion.div style={{ y: imageY }} className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={gq}
                alt="GQ Transport Office"
                className="w-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />

              {/* Badge on image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, type: 'spring' }}
                className="absolute bottom-6 left-6 right-6 bg-gray-900/90 backdrop-blur-md border border-white/10 rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">CEO: Choudhary Adan</div>
                    <div className="text-gray-400 text-xs">Founder & Managing Director</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500/50 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-black text-white mb-6">
              Driving Trust,{' '}
              <span className="animated-gradient-text">Delivering Excellence</span>
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              GQ Transport Company has established itself as a premier logistics provider in Pakistan.
              Under the leadership of{' '}
              <span className="font-semibold text-white">CEO Choudhary Adan</span>, we have built a
              reputation for reliability, safety, and exceptional customer service.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our modern fleet of vehicles and experienced team ensure that your cargo reaches its
              destination safely and on time, every time. We cover 50+ cities with a growing network.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`} />

              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-white/10 group-hover:border-white/20 rounded-2xl p-6 text-center overflow-hidden">
                {/* BG gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>

                <div className={`text-3xl font-black mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>

                {/* Bottom line */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${stat.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
