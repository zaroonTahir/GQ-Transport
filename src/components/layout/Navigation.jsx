import React from 'react';

const Navigation = ({ scrollToSection, className, mobile }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  if (mobile) {
    return (
      <nav className={className}>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white bg-gray-800/30 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-white/5 hover:border-white/20 transition-all duration-300 font-medium"
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
          className="relative group px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
        >
          {/* Animated gradient background on hover */}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 rounded-lg transition-all duration-300 -z-10"></span>
          
          {/* Text with gradient on hover */}
          <span className="relative group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {item.label}
          </span>
          
          {/* Animated underline */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;