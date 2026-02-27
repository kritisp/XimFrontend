// src/ui/TextArea.tsx
import React, { forwardRef } from 'react';
import { TextAreaProps } from '../types/headline.types';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ value, onChange, className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        value={value}
        onChange={onChange}
        className={`border-2 border-black bg-[#f2efe8] p-5 text-sm font-cormorant resize-none h-[120px] focus:outline-none tracking-wide text-black/80 placeholder:text-black/40 placeholder:italic caret-black vintage-textarea ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
