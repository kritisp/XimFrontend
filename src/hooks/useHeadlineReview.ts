// src/hooks/useHeadlineReview.ts
import { useState } from 'react';

const useHeadlineReview = () => {
  const [isApproved, setIsApproved] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    setIsApproved(false);
    
    // Simulate a review process
    setTimeout(() => {
      setIsApproved(true);
      setIsSubmitting(false);
    }, 800);
  };

  return {
    isApproved,
    isSubmitting,
    submit,
  };
};

export default useHeadlineReview;
