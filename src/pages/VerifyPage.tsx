import { useState, useEffect } from 'react';
import HeadlineValidatorPanel from '../components/HeadlineValidatorPanel';
import Newspaper from '../components/Newspaper';
import { verifyTitle } from '../lib/api';
import { VerificationResult } from '../types/headline.types';

export default function VerifyPage() {
  const [inputText, setInputText] = useState('');
  const [submittedTitle, setSubmittedTitle] = useState<string | null>(null);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    if (!inputText.trim() || inputText !== submittedTitle) {
      setSubmittedTitle(null);
      setVerificationResult(null);
    }
  }, [inputText, submittedTitle]);

  const handleReviewSubmit = async () => {
    if (!inputText.trim()) return;
    
    setSubmittedTitle(inputText);
    setLoading(true);
    setVerificationResult(null);
    
    try {
      const result = await verifyTitle(inputText);
      setVerificationResult(result);
      setTrigger(prev => !prev);
    } catch (error) {
      console.error("Verification failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const displayHeadline = inputText.toUpperCase() || 'The Chronicle';

  return (
    <main className="grid grid-cols-[420px_1fr] min-h-screen px-24 items-center gap-12 py-12">
      <HeadlineValidatorPanel
        inputText={inputText}
        setInputText={setInputText}
        isSubmitting={loading}
        onSubmit={handleReviewSubmit}
        similarityScore={verificationResult?.similarity_score ?? null}
        probability={verificationResult?.verification_probability ?? null}
        status={verificationResult?.status ?? null}
      />
      <Newspaper 
        headline={displayHeadline} 
        submittedTitle={submittedTitle || undefined}
        trigger={trigger}
        data={verificationResult}
        loading={loading}
      />
    </main>
  );
}
