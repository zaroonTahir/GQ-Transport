// ========================================
// FILE: src/components/ui/Card.jsx
// ========================================
import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
