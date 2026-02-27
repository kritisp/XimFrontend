// src/types/headline.types.ts
import React from 'react';

export interface HeadlineValidatorPanelProps {
  inputText: string;
  setInputText: (value: string) => void;
  isSubmitting: boolean;
  onSubmit: () => void;
  similarityScore: number | null;
  probability: number | null;
  status: "approved" | "rejected" | null;
}

export interface NewspaperProps {
  headline: string;
  submittedTitle?: string;
  trigger?: boolean;
  data?: VerificationResult | null;
  loading?: boolean;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface SectionTitleProps {
  title: string;
  subtitle: string;
}

export interface VerificationResult {
  submitted_title: string;
  status: string;
  similarity_score: number;
  verification_probability: number;
  reason?: string;
  details?: Array<{
    check_type: "semantic" | "phonetic";
    description: string;
    matched_title: string;
    score: number;
    method: string;
  }>;
  phonetic_matches?: Array<{ title: string; score: number }>;
  semantic_conflicts?: Array<{ title: string; reason: string }>;
  violations?: Array<{
    type: "disallowed_word" | "prefix_suffix" | "combination" | "periodicity" | "conceptual_theme";
    message: string;
  }>;
  reason_summary?: string;
}
