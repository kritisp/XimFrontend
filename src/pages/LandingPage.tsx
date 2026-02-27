import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Button from '../ui/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-10">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mb-24">
        <div className="w-full border-b-4 border-black mb-4" />
        <h1 className="font-serif text-7xl font-black tracking-tighter uppercase mb-2">
          Press Registrar General of India
        </h1>
        <div className="w-full border-t border-black mb-6" />
        <p className="font-serif italic text-xl mb-10 text-gray-800">
          Official Title Verification Authority for the Republic of India
        </p>
        <Link to="/verify">
          <Button className="max-w-xs mx-auto text-lg py-4">
            Verify Title Registration
          </Button>
        </Link>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-6xl mb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold uppercase border-b-2 border-black inline-block pb-2">
            Verification Methodology
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="border-r border-black/20 pr-8 last:border-0">
            <h3 className="font-serif text-xl font-bold uppercase mb-4">Phonetic Similarity</h3>
            <p className="font-serif text-sm leading-relaxed text-justify">
              Our advanced phonetic engine analyzes the acoustic properties of proposed titles against 160,000+ registered records to prevent auditory confusion in the public sphere.
            </p>
          </div>
          <div className="border-r border-black/20 pr-8 last:border-0">
            <h3 className="font-serif text-xl font-bold uppercase mb-4">Guideline Enforcement</h3>
            <p className="font-serif text-sm leading-relaxed text-justify">
              Strict adherence to the Press Registrar Guidelines, ensuring no restricted terms, improper periodicity indicators, or disallowed word combinations are utilized.
            </p>
          </div>
          <div className="border-r border-black/20 pr-8 last:border-0">
            <h3 className="font-serif text-xl font-bold uppercase mb-4">Semantic Detection</h3>
            <p className="font-serif text-sm leading-relaxed text-justify">
              Conceptual theme analysis identifies overlaps with existing publications, maintaining the unique identity and integrity of every registered journal and newspaper.
            </p>
          </div>
        </div>
      </section>

      {/* Official Notice Section */}
      <section className="w-full max-w-4xl mb-24 border-4 border-black p-10 bg-black/5">
        <h2 className="font-serif text-2xl font-bold uppercase mb-6 text-center underline decoration-2 underline-offset-8">
          Official Administrative Notice
        </h2>
        <p className="font-serif text-base leading-relaxed text-center italic">
          "The registration of a title is a solemn administrative act. Every applicant is mandated to ensure that their proposed title does not infringe upon existing intellectual properties or violate the established norms of the Press Registrar General of India."
        </p>
        <p className="font-serif text-xs uppercase tracking-widest text-center mt-8 font-bold">
          Issued by the Department of Press Records
        </p>
      </section>

      {/* Statistics Section */}
      <section className="w-full max-w-6xl mb-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-black py-12">
        <div className="text-center">
          <p className="font-serif text-4xl font-black mb-1">160K+</p>
          <p className="font-serif text-[10px] uppercase tracking-widest font-bold">Registered Titles</p>
        </div>
        <div className="text-center">
          <p className="font-serif text-4xl font-black mb-1">&lt; 2s</p>
          <p className="font-serif text-[10px] uppercase tracking-widest font-bold">Processing Time</p>
        </div>
        <div className="text-center">
          <p className="font-serif text-4xl font-black mb-1">NLP</p>
          <p className="font-serif text-[10px] uppercase tracking-widest font-bold">Phonetic Engine</p>
        </div>
        <div className="text-center">
          <p className="font-serif text-4xl font-black mb-1">100%</p>
          <p className="font-serif text-[10px] uppercase tracking-widest font-bold">Compliance Rate</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center">
        <Link to="/verify">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="px-12 py-6 text-xl">
              Submit Title for Review
            </Button>
          </motion.div>
        </Link>
        <p className="font-serif italic text-xs mt-4 opacity-70">
          Archive v4.2 – Digital Verification Portal
        </p>
      </section>
    </div>
  );
}
