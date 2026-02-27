// src/ui/SectionTitle.tsx
import React from 'react';
import { SectionTitleProps } from '../types/headline.types';

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10">
      <h1 className="font-serif text-2xl font-bold uppercase tracking-wide">
        {title}
      </h1>
      <p className="font-serif italic text-xs text-gray-700 mt-1">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
