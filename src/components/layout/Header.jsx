import React, { useState, useEffect } from 'react';
import { Truck, Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import gqlogo from "../../assets/gq logo3.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-white/10' 
        : 'bg-gradient-to-b from-gray-900 to-gray-900/90'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110">
                <img 
                  src={gqlogo} 
                  alt="GQ Transport Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                GQ Transport
              </h1>
              <p className="text-xs bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                Driving Trust, Delivering Excellence
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <Navigation 
            scrollToSection={scrollToSection} 
            className="hidden md:flex space-x-8 text-gray-200"
          />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-lg border border-white/10 group-hover:border-white/20 transition-all duration-300">
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 animate-slideDown">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 p-4 mt-2">
              <Navigation 
                scrollToSection={scrollToSection} 
                className="space-y-2 text-gray-200"
                mobile={true}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;