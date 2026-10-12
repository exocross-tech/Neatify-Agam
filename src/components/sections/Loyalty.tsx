import React from "react";
import { DISCOUNTS_LOYALTY } from "@/data/pricing";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { RotateCcw, Share2, Award, Gift } from "lucide-react";

export const Loyalty: React.FC = () => {
  return (
    <section className="py-20 bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Valued Relationships"
          title="Discounts & Loyalty Rewards"
          description="We honour repeat patrons and neighborhood community recommendations with upfront deductions on your quotes."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Come-Back Offer */}
          <Reveal delay={0.1}>
            <div className="h-full flex flex-col justify-between p-7 rounded-2xl bg-[var(--card)] border border-[var(--line)] hover:border-[var(--gold)] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] flex items-center justify-center mb-5">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
                  Repeat Bookings
                </span>
                <h3 className="text-xl font-serif-heading font-bold text-[var(--ink)] mt-1 mb-2">
                  {DISCOUNTS_LOYALTY.repeatOffer.title}
                </h3>
                <div className="text-2xl font-serif-heading font-bold text-[var(--gold)] mb-3">
                  {DISCOUNTS_LOYALTY.repeatOffer.amount}
                </div>
                <p className="text-xs text-[var(--mute)] leading-relaxed">
                  {DISCOUNTS_LOYALTY.repeatOffer.description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Refer a Neighbour Offer */}
          <Reveal delay={0.2}>
            <div className="h-full flex flex-col justify-between p-7 rounded-2xl bg-[var(--card)] border border-[var(--line)] hover:border-[var(--gold)] transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--green)] text-[var(--ong)] flex items-center justify-center mb-5">
                  <Share2 className="w-6 h-6 text-[var(--gold)]" />
                </div>
                <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
                  Community Referral
                </span>
                <h3 className="text-xl font-serif-heading font-bold text-[var(--ink)] mt-1 mb-2">
                  {DISCOUNTS_LOYALTY.referralOffer.title}
                </h3>
                <div className="text-lg font-bold text-[var(--gold)] mb-3 leading-tight">
                  {DISCOUNTS_LOYALTY.referralOffer.amount}
                </div>
                <p className="text-xs text-[var(--mute)] leading-relaxed">
                  {DISCOUNTS_LOYALTY.referralOffer.description}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Loyalty 10 Visits Milestone */}
          <Reveal delay={0.3}>
            <div className="h-full flex flex-col justify-between p-7 rounded-2xl bg-[var(--green)] text-[var(--ong)] border border-[var(--gold)]/50 shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[var(--card)]/10 text-[var(--gold)] flex items-center justify-center mb-5 border border-[var(--gold)]/30">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider">
                  Patron Milestone
                </span>
                <h3 className="text-xl font-serif-heading font-bold text-[var(--gold)] mt-1 mb-2">
                  {DISCOUNTS_LOYALTY.loyaltyOffer.title}
                </h3>
                <div className="text-2xl font-serif-heading font-bold text-[var(--ong)] mb-3">
                  {DISCOUNTS_LOYALTY.loyaltyOffer.amount}
                </div>
                <p className="text-xs text-[var(--ong)]/80 leading-relaxed">
                  {DISCOUNTS_LOYALTY.loyaltyOffer.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Disclaimer / Booking action */}
        <Reveal delay={0.4}>
          <div className="p-4 rounded-xl bg-[var(--card)] border border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--mute)]">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-[var(--gold)] shrink-0" />
              <span>{DISCOUNTS_LOYALTY.note} Mention your referral code on WhatsApp.</span>
            </div>
            <WhatsAppButton
              size="sm"
              text="Claim Offer via WhatsApp"
              message="Hi Prakash Bro, I am claiming an offer for my booking."
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
