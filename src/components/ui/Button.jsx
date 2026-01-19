// ========================================
// FILE: src/components/ui/Button.jsx
// ========================================
import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-8 py-3 rounded-lg font-semibold transition';
  
  const variantStyles = {
    primary: 'bg-red-600 hover:bg-red-700 text-white',
    secondary: 'bg-white text-blue-900 hover:bg-gray-100',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;