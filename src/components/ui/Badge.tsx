import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'warning' | 'error';
}

export function Badge({ children, variant = 'success' }: BadgeProps) {
  const variants = {
    success: 'bg-accent-light text-accent-dark',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`${variants[variant]} px-2 py-1 rounded-full text-xs font-medium animate-fadeIn`}>
      {children}
    </span>
  );
}