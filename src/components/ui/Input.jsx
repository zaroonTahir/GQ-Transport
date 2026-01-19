// ========================================
// FILE: src/components/ui/Input.jsx
// ========================================
import React from 'react';

const Input = ({ type = 'text', name, placeholder, value, onChange, className = '' }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 ${className}`}
    />
  );
};

export default Input;