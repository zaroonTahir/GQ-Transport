import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import gqlogo from '../../assets/logo.jpeg';

const quickLinks = [
  { name: 'Home', id: 'home' },
  { name: 'Features', id: 'features' },
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Contact', id: 'contact' },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030712] text-white overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-5 cursor-pointer group"
              onClick={() => scrollToSection('home')}
              whileHover={{ x: 2 }}
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-white/20 shadow-lg">
                <img src={gqlogo} alt="GQ Transport" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-lg font-black text-white">GQ Transport</div>
                <div className="text-xs text-gray-500">Rahim Yar Khan, Pakistan</div>
              </div>
            </motion.div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Driving Trust, Delivering Excellence across Pakistan. Your premier transport partner
              with 10+ years of experience and a modern fleet.
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 flex items-center justify-center transition-colors duration-200 group"
                >
                  <s.icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 h-px bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Shop no.01 Choudhary Plaza, Rahim Yar Khan, Punjab</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">+92 339 2227727</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">CEO: Choudhary Adan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            &copy; {year}{' '}
            <span className="text-gray-300 font-semibold">GQ Transport Company</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Crafted with <span className="text-red-500">❤</span> for Excellence
          </p>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />

      {/* Back to top */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-11 h-11 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 z-40 border border-white/10"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
