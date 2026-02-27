// src/components/TitleVerificationReport.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VerificationResult } from '../types/headline.types';
import { verifyTitle } from '../lib/api';

interface TitleVerificationReportProps {
  title: string;
  trigger: boolean;
  data?: VerificationResult | null;
  loading?: boolean;
}

const TitleVerificationReport: React.FC<TitleVerificationReportProps> = ({ title, trigger, data: propData, loading: propLoading }) => {
  const [data, setData] = useState<VerificationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uniqueDetails = React.useMemo(() => {
    if (!data?.details) return [];

    const map = new Map();

    data.details.forEach((item) => {
      const existing = map.get(item.matched_title);

      if (!existing || item.score > existing.score) {
        map.set(item.matched_title, item);
      }
    });

    return Array.from(map.values());
  }, [data?.details]);

  useEffect(() => {
    if (propData !== undefined) {
      setData(propData);
      setLoading(!!propLoading);
      return;
    }

    if (!title) {
      setData(null);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await verifyTitle(title);
        setData(result);
      } catch (err: any) {
        setError(err.message || 'An administrative error occurred during verification. Kindly resubmit the application.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [trigger, title, propData, propLoading]);

  if (loading) {
    return (
      <div className="flex flex-col gap-6 animate-pulse">
        <div className="h-12 bg-black/10 w-3/4" />
        <div className="h-4 bg-black/5 w-full" />
        <div className="grid grid-cols-3 gap-6 mt-4">
          <div className="h-32 bg-black/10" />
          <div className="col-span-2 flex flex-col gap-4">
            <div className="h-4 bg-black/5 w-full" />
            <div className="h-4 bg-black/5 w-5/6" />
            <div className="h-4 bg-black/5 w-4/6" />
          </div>
        </div>
        <p className="font-serif italic text-center text-sm mt-8">
          Verification Under Editorial Review...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border-2 border-black p-8 text-center font-serif">
        <p className="text-lg font-bold uppercase mb-4">Notice of Error</p>
        <p className="italic text-sm">{error}</p>
        <p className="text-[10px] mt-4 opacity-60 uppercase tracking-widest">Department of Press Records</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col gap-6">
        <h3 className="font-serif text-4xl font-bold leading-tight uppercase">
          Global Accord Reached As Delegates Convene In Geneva
        </h3>
        <p className="font-serif italic text-base border-b border-black/10 pb-4">
          Unanimous Support for New Economic Framework Signals Era of Unprecedented Cooperation
        </p>
        <div className="grid grid-cols-3 gap-6 text-[11px] font-serif leading-relaxed text-justify">
          <div className="flex flex-col gap-3">
            <div className="aspect-square bg-black/80 flex items-center justify-center p-4">
              <div className="text-white text-center">
                <p className="font-bold text-lg tracking-widest uppercase">Historeal</p>
                <p className="italic text-[8px] opacity-70">The Fragrance of Yesterday</p>
              </div>
            </div>
            <p className="italic text-[9px] leading-tight text-center opacity-80">
              Delegates from forty-eight nations gather in the grand hall of the Palais des Nations.
            </p>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <p className="drop-cap">
              Lord Archibald Sterling, the chief architect of the proposal, addressed the assembled press shortly after the session adjourned. "We have not merely drafted a document," Sterling remarked, adjusting his spectacles.
            </p>
            <p>
              Paris bourses reacted with immediate vigor in trading of industrial futures. Experts suggest that the psychological impact of the treaty may be more significant than its technical provisions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const normalizedStatus = data.status?.toLowerCase();
  const isApproved = normalizedStatus === 'approved';

  return (
    <div className="flex flex-col gap-6 relative">
      {/* Main Headline */}
      <h3 className="font-serif text-4xl font-bold leading-tight uppercase">
        {isApproved ? 'TITLE CLEARED FOR REGISTRATION' : 'TITLE REJECTED BY REGISTRAR AUTHORITY'}
      </h3>

      {/* Subheading */}
      <p className="font-serif italic text-base border-b border-black/10 pb-4">
        {data.reason_summary || data.reason}
      </p>

      {/* Article Body */}
      <div className="grid grid-cols-3 gap-6 text-[11px] font-serif leading-relaxed text-justify">
        {/* Left Column: Probability & Decision */}
        <div className="flex flex-col gap-6">
          <div className="border border-black p-4 flex flex-col gap-2 bg-black/5">
            <p className="font-bold uppercase tracking-widest text-[10px] border-b border-black pb-1">Official Notice</p>
            <p className="text-[12px] font-bold">Verification Probability: {data.verification_probability}%</p>
            <p className="italic opacity-70">Calculated based on Clause 7(b) of the Press Registrar Guidelines.</p>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-bold uppercase text-[10px]">Phonetic Similarity</p>
            <p className="text-[14px] font-bold border-b-2 border-black inline-block w-fit">
              {data.similarity_score.toFixed(3)}
            </p>
          </div>
        </div>

        {/* Right Columns: Analysis & Editorial Justification */}
        <div className="col-span-2 flex flex-col">
          <div className="border-t border-black/20 my-3" />
          <p className="font-bold uppercase text-[10px] tracking-widest border-b border-black/30 pb-1 mb-2">
            Registrar Findings
          </p>
          <section className="flex flex-col gap-4 text-[12px] leading-relaxed text-black/90">
            {isApproved ? (
              <>
                <p className="drop-cap mb-3">
                  The Department of Press Records has concluded its examination of the proposed title. Our findings indicate that the submission maintains a high degree of distinction from existing archival records, with a calculated similarity score of <strong className="underline decoration-2 underline-offset-2">{data.similarity_score.toFixed(3)}</strong>. This score falls well within the acceptable parameters for new registration.
                </p>
                <p>
                  Further cross-referencing through our semantic and phonetic databases has confirmed that there are no significant conflicts with previously registered publications. The title demonstrates sufficient originality to prevent public confusion or administrative overlap.
                </p>
                <p>
                  In accordance with the Press Registrar Guidelines, this title is hereby granted formal clearance for registration. The applicant may proceed with the standard filing procedures as outlined in Clause 12.
                </p>
              </>
            ) : (
              <>
                <p className="drop-cap mb-3">
                  Following a rigorous audit of the submitted title, the Registrar Authority has determined that the submission fails to meet the required standards for archival distinction. The analysis revealed a similarity score of <strong className="underline decoration-2 underline-offset-2">{data.similarity_score.toFixed(3)}</strong>, which significantly exceeds the maximum permissible threshold for new registrations.
                </p>
                {uniqueDetails && uniqueDetails.length > 0 && (
                  <p>
                    Specifically, our <em>{uniqueDetails[0].method}</em> {uniqueDetails[0].check_type} analysis identified a direct conflict with the registered title <strong className="tracking-wide">"{uniqueDetails[0].matched_title}"</strong>, returning a proximity score of <strong className="underline decoration-2 underline-offset-2">{uniqueDetails[0].score.toFixed(2)}</strong>. 
                    {uniqueDetails[1] && (
                      <span> Additionally, a secondary check via <em>{uniqueDetails[1].method}</em> flagged a similarity with <strong className="tracking-wide">"{uniqueDetails[1].matched_title}"</strong> (Score: <strong className="underline decoration-2 underline-offset-2">{uniqueDetails[1].score.toFixed(2)}</strong>).</span>
                    )}
                    These findings suggest a substantial risk of public confusion and conceptual overlap within the official records.
                  </p>
                )}
                {uniqueDetails?.some(d => d.check_type === 'phonetic') && (
                  <p>
                    The presence of phonetic similarity poses an additional risk to the integrity of the press archives. Titles that share a common auditory profile are subject to stricter scrutiny to ensure clear differentiation between independent publications.
                  </p>
                )}
              </>
            )}
          </section>
        </div>
      </div>

      {/* Decision Stamp */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80">
        <AnimatePresence>
          <motion.div
            initial={{ scale: 3, opacity: 0, rotate: 20 }}
            animate={{ scale: 1, opacity: 0.5, rotate: isApproved ? -15 : 15 }}
            className={`text-6xl font-black border-[8px] px-12 py-4 uppercase tracking-tighter ${
              isApproved ? 'border-green-800 text-green-800' : 'border-red-800 text-red-800'
            }`}
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {isApproved ? 'APPROVED' : 'REJECTED'}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TitleVerificationReport;
