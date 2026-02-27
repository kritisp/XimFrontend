// src/components/HeadlineValidatorPanel.tsx
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HeadlineValidatorPanelProps } from '../types/headline.types';
import SectionTitle from '../ui/SectionTitle';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

const HeadlineValidatorPanel: React.FC<HeadlineValidatorPanelProps> = ({
  inputText,
  setInputText,
  isSubmitting,
  onSubmit,
  similarityScore,
  probability,
  status,
}) => {
  return (
    <section className="flex flex-col max-w-[420px] py-12">
      <div className="w-[60%] h-[1px] bg-black mx-auto mb-8" />
      
      <SectionTitle 
        title="Title Validator" 
        subtitle="Department of Press Records – Archive v4.2" 
      />

      <div className="flex flex-col gap-2 font-cormorant">
        <label className="uppercase text-sm tracking-wider font-semibold">
          Enter Title
        </label>
        <TextArea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type headline here..."
          className="font-cormorant"
        />
      </div>

      <Button
        onClick={onSubmit}
        disabled={isSubmitting}
        className="mt-6 font-cormorant"
      >
        {isSubmitting ? 'Reviewing...' : 'Submit for Review'}
      </Button>

      <div className="h-48 flex flex-col items-center justify-center mt-8 relative">
        <AnimatePresence mode="wait">
          {isSubmitting ? (
            <motion.p
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-serif italic text-sm"
            >
              Reviewing...
            </motion.p>
          ) : similarityScore !== null ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4 w-full"
            >
              <div className="flex justify-between w-full px-8 font-serif text-[10px] uppercase tracking-widest border-b border-black/10 pb-2">
                <span>Similarity Score</span>
                <span className="font-bold">{similarityScore.toFixed(3)} / 100</span>
              </div>
              <div className="flex justify-between w-full px-8 font-serif text-[10px] uppercase tracking-widest border-b border-black/10 pb-2">
                <span>Probability</span>
                <span className="font-bold">{probability}%</span>
              </div>

              {status && (
                <motion.div
                  initial={{ scale: 2, opacity: 0, rotate: 10 }}
                  animate={{ scale: 1, opacity: 1, rotate: status === 'approved' ? -10 : 10 }}
                  className={`mt-4 text-2xl font-black border-4 px-6 py-2 uppercase tracking-tighter ${
                    status === 'Approved' ? 'border-green-800 text-green-800' : 'border-red-800 text-red-800'
                  }`}
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {status === 'Approved' ? 'APPROVED' : 'REJECTED'}
                </motion.div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <p className="text-[10px] font-serif italic opacity-70 mt-auto text-center">
        * All submissions are final and subject to archival review by the Department of Press Records.
      </p>
    </section>
  );
};

export default HeadlineValidatorPanel;
