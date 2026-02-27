import SectionTitle from '../ui/SectionTitle';

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-10">
      <div className="w-full max-w-4xl border-2 border-black p-12 bg-[#f9f7f2] shadow-xl">
        <div className="text-center mb-12">
          <div className="w-24 h-[2px] bg-black mx-auto mb-4" />
          <SectionTitle 
            title="Title Registration Guidelines" 
            subtitle="Official Regulation Sheet – Republic of India" 
          />
        </div>

        <div className="space-y-10 font-serif text-sm leading-relaxed text-justify">
          <section>
            <h2 className="font-bold uppercase text-base border-b border-black mb-4 pb-1">
              I. Disallowed Words & Restricted Terms
            </h2>
            <p className="mb-4">
              Titles containing terms that imply government affiliation, official authority, or military connection are strictly prohibited under Clause 3(a). This includes but is not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 italic">
              <li>"Police", "Army", "Navy", "Air Force"</li>
              <li>"Government", "Official", "State", "National"</li>
              <li>"Registrar", "Authority", "Bureau", "Department"</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold uppercase text-base border-b border-black mb-4 pb-1">
              II. Prefix and Suffix Restrictions
            </h2>
            <p>
              The addition of generic prefixes or suffixes to existing registered titles does not constitute a unique title. Titles such as "The [Existing Title]", "[Existing Title] Gazette", or "New [Existing Title]" will be rejected to prevent public confusion.
            </p>
          </section>

          <section>
            <h2 className="font-bold uppercase text-base border-b border-black mb-4 pb-1">
              III. Periodicity Indicators
            </h2>
            <p>
              Indicators of periodicity (e.g., "Daily", "Weekly", "Monthly") may only be used if the publication schedule strictly adheres to the claimed frequency. Unauthorized use of these terms for branding purposes is a violation of Clause 5(c).
            </p>
          </section>

          <section>
            <h2 className="font-bold uppercase text-base border-b border-black mb-4 pb-1">
              IV. Combination and Conceptual Similarity
            </h2>
            <p>
              Titles that combine existing registered titles or share a conceptual theme that implies a relationship with an established publication (e.g., "Morning Herald" vs "Evening Herald") are subject to strict scrutiny and potential rejection.
            </p>
          </section>

          <section className="bg-black/5 p-6 border border-black italic">
            <h2 className="font-bold uppercase text-base not-italic mb-2">
              V. Probability Calculation
            </h2>
            <p>
              The Verification Probability is determined by the inverse of the Similarity Score:
            </p>
            <div className="text-center font-bold text-lg my-4 not-italic">
              Probability = 100 - (Similarity Score × 100)
            </div>
            <p>
              A probability below 60% generally results in an automatic administrative rejection.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-black text-center">
          <p className="uppercase text-[10px] tracking-widest font-bold mb-2">
            End of Document
          </p>
          <p className="italic text-[10px] opacity-60">
            Certified by the Press Registrar General of India, Archive v4.2
          </p>
        </div>
      </div>
    </div>
  );
}
