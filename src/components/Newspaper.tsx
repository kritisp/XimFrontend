// src/components/Newspaper.tsx
import React from 'react';
import { motion } from 'motion/react';
import { NewspaperProps } from '../types/headline.types';
import TitleVerificationReport from './TitleVerificationReport';

const Newspaper: React.FC<NewspaperProps> = ({ headline, submittedTitle, trigger, data, loading }) => {
  return (
    <section className="flex justify-center items-center">
      <motion.div 
        layout
        className="paper-texture w-[620px] bg-[#efe6d6] shadow-2xl border border-black/5 p-8 flex flex-col gap-6 origin-center"
        style={{ transform: 'rotate(-1.5deg)' }}
      >
        {/* Masthead */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-full flex justify-between text-[10px] font-serif tracking-widest uppercase border-b border-black/20 pb-1">
            <span>Vol. CXIII ... No. 38,452</span>
            <span>New York, Monday, October 14, 1946</span>
            <span>Five Cents</span>
          </div>
          
          <h2 className={`font-serif font-black tracking-tight uppercase py-4 transition-all duration-500 text-center ${
            headline.length > 15 ? 'text-3xl' : headline.length > 10 ? 'text-4xl' : 'text-6xl'
          }`}>
            {headline}
          </h2>

          <div className="w-full border-t border-black flex justify-between items-center py-1 text-[10px] font-serif italic">
            <span>"All the News That's Fit to Print"</span>
            <span className="not-italic uppercase tracking-tighter">Established 1833</span>
          </div>
        </div>

        {/* Title Verification Report (Replaces Article Section) */}
        <TitleVerificationReport 
          title={submittedTitle || ''} 
          trigger={!!trigger} 
          data={data}
          loading={loading}
        />

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-black/20 flex justify-between text-[9px] font-serif uppercase tracking-tighter opacity-80">
          <div className="flex gap-4">
            <span>Weather: Fair & Cool</span>
            <span>High 62, Low 44</span>
          </div>
          <div className="italic normal-case">"Truth is the only safe ground to stand upon."</div>
          <div className="flex gap-4">
            <span>Index: Page 24</span>
            <span>Radio: 880 KC</span>
          </div>
        </div>

        {/* Vignette effect */}
        <div className="absolute inset-0 pointer-events-none bg-radial-[circle_at_center,_transparent_70%,_rgba(0,0,0,0.05)_100%]" />
      </motion.div>
    </section>
  );
};

export default Newspaper;
