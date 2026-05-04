import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = ({ scrollToSection, className, mobile }) => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  if (mobile) {
    return (
      <nav className={className}>
        {navItems.map((item, i) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => scrollToSection(item.id)}
            className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
              active === item.id
                ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-white/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}
          >
            {item.label}
          </motion.button>
        ))}
      </nav>
    );
  }

  return (
    <nav className={className}>
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="relative group px-3 py-2 text-sm font-medium transition-colors duration-200"
        >
          {/* Active/hover background */}
          {active === item.id && (
            <motion.div
              layoutId="nav-active"
              className="absolute inset-0 bg-white/10 rounded-lg border border-white/20"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}

          <span
            className={`relative z-10 transition-colors duration-200 ${
              active === item.id
                ? 'text-white'
                : 'text-gray-400 group-hover:text-white'
            }`}
          >
            {item.label}
          </span>

          {/* Hover underline */}
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4/5 transition-all duration-300" />
        </button>
      ))}

      {/* CTA */}
      <motion.button
        onClick={() => scrollToSection('contact')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-bold shadow-lg shadow-blue-500/20 transition-all duration-200"
      >
        Get Quote
      </motion.button>
    </nav>
  );
};

export default Navigation;
