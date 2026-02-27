// src/ui/Button.tsx
import React, { forwardRef } from 'react';
import { ButtonProps } from '../types/headline.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`w-full bg-black text-white uppercase tracking-widest py-3 border-2 border-black hover:bg-white hover:text-black transition-all duration-200 disabled:opacity-50 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
