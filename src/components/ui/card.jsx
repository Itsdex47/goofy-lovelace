import React from 'react';

const Card = ({ className = '', children, ...props }) => (
  <div
    className={`rounded-lg p-4 bg-white/5 backdrop-blur-xl border border-white/10 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ className = '', children, ...props }) => (
  <div className={`mb-2 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ className = '', children, ...props }) => (
  <h3 className={`text-xl font-medium text-white ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ className = '', children, ...props }) => (
  <div className={`mt-2 ${className}`} {...props}>
    {children}
  </div>
);

export { Card, CardHeader, CardTitle, CardContent };
