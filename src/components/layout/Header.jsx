// ========================================
// FILE: src/components/layout/Header.jsx
// ========================================
import React, { useState } from 'react';
import { Truck, Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import gqlogo from "../../assets/gq logo.png"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
       {/* Logo */}
<div className="flex items-center space-x-3">
  <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm">
    <img 
      src={gqlogo} 
      alt="GQ Transport Logo" 
      className="w-full h-full object-contain"
    />
  </div>
  <div>
    <h1 className="text-2xl font-bold text-gray-900">GQ Transport</h1>
    <p className="text-xs text-gray-600">Driving Trust, Delivering Excellence</p>
  </div>
</div>

          {/* Desktop Navigation */}
          <Navigation 
            scrollToSection={scrollToSection} 
            className="hidden md:flex space-x-8"
          />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <Navigation 
            scrollToSection={scrollToSection} 
            className="md:hidden pb-4 space-y-2"
            mobile={true}
          />
        )}
      </div>
    </header>
  );
};

export default Header;