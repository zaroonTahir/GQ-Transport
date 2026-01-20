import React from 'react';
import { Truck, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import gqlogo2 from "../../assets/gq logo3.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110">
                             <img 
                               src={gqlogo2} 
                               alt="GQ Transport Logo" 
                               className="w-full h-full object-contain"
                             />
                           </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  GQ Transport
                </h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Driving Trust, Delivering Excellence across Pakistan. Your premier transport partner with 10+ years of experience.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="group relative p-3 bg-gray-800/50 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>
              <a href="#" className="group relative p-3 bg-gray-800/50 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>
              <a href="#" className="group relative p-3 bg-gray-800/50 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white relative z-10 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="group text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Shop no.01 Choudhary Plaza, Rahim Yar Khan, Punjab</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">+92 339 2227727</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm">CEO: Choudhary Adan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with Gradient */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} <span className="text-white font-semibold">GQ Transport Company</span>. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Crafted with <span className="text-red-500">❤</span> for Excellence
          </p>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"></div>
    </footer>
  );
};

export default Footer;