import React from "react";
import { BRAND } from "@/lib/constants";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { Heart, HandHeart, Sparkles } from "lucide-react";

export const SocialImpact: React.FC = () => {
  return (
    <section id="hundi-of-help" className="py-20 sm:py-28 bg-[var(--green)] text-[var(--ong)] relative overflow-hidden">
      {/* Decorative background radial pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(184,138,46,0.15),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="A Neater Home. A Kinder World."
          title="Hundi of Help — Giving Back"
          description="At NEATIFY AGAM, our vocation extends beyond orderly closets and sparkling bathrooms. A dedicated portion of every booking directly benefits underprivileged children."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
          {/* 10% Companion services */}
          <Reveal delay={0.1}>
            <div className="h-full p-8 rounded-2xl bg-[var(--card)]/10 border border-[var(--gold)]/40 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[var(--gold)] text-[#17210f] flex items-center justify-center mb-6 shadow-md">
                  <Heart className="w-7 h-7" />
                </div>
                <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[var(--gold)] mb-2">
                  {BRAND.charityCommitment.companionPercent}
                </div>
                <h3 className="text-xl font-bold text-[var(--ong)] mb-3">
                  From All Companion & Senior Care Services
                </h3>
                <p className="text-xs sm:text-sm text-[var(--ong)]/80 leading-relaxed">
                  Every time our caregivers escort an elderly parent to a doctor appointment or temple, 10% of that service fee is contributed to local orphanages and children’s shelters.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--gold)]/20 text-xs text-[var(--gold)] font-medium">
                Dignity for elders • Hope for children
              </div>
            </div>
          </Reveal>

          {/* 5% Other services */}
          <Reveal delay={0.2}>
            <div className="h-full p-8 rounded-2xl bg-[var(--card)]/10 border border-[var(--gold)]/40 backdrop-blur-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[var(--gold)] text-[#17210f] flex items-center justify-center mb-6 shadow-md">
                  <HandHeart className="w-7 h-7" />
                </div>
                <div className="text-4xl sm:text-5xl font-serif-heading font-bold text-[var(--gold)] mb-2">
                  {BRAND.charityCommitment.otherServicesPercent}
                </div>
                <h3 className="text-xl font-bold text-[var(--ong)] mb-3">
                  From All Other Cleaning & Setup Services
                </h3>
                <p className="text-xs sm:text-sm text-[var(--ong)]/80 leading-relaxed">
                  From a simple ₹99 shirt ironing or drawer organising task to a whole-home ₹10,000+ move-in setup, 5% of our revenue continuously funds shelter, nutrition, and education.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[var(--gold)]/20 text-xs text-[var(--gold)] font-medium">
                Shared transparently with each customer
              </div>
            </div>
          </Reveal>
        </div>

        {/* Guiding Scripture Card */}
        <Reveal delay={0.3}>
          <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-[var(--card)]/5 border border-[var(--gold)]/30 text-center">
            <Sparkles className="w-6 h-6 text-[var(--gold)] mx-auto mb-3" />
            <blockquote className="text-xl sm:text-2xl font-serif-heading italic text-[var(--gold)] mb-2">
              {BRAND.scripture}
            </blockquote>
            <cite className="text-xs uppercase tracking-[0.2em] text-[var(--ong)]/70 not-italic">
              {BRAND.scriptureRef}
            </cite>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
