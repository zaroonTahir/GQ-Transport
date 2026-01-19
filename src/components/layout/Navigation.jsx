// ========================================
// FILE: src/components/layout/Navigation.jsx
// ========================================
import React from 'react';

const Navigation = ({ scrollToSection, className, mobile = false }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  if (mobile) {
    return (
      <nav className={className}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="block w-full text-left py-2 text-gray-700 hover:text-red-600"
          >
            {item.label}
          </button>
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
          className="text-gray-700 hover:text-red-600 transition"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;