import React from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Reveal } from "@/components/ui/SectionHeading";
import { Quote, Sparkles } from "lucide-react";

export const BookingHighlight: React.FC = () => {
  // Use one of the genuine reviews as a highlight
  const highlightReview = TESTIMONIALS[0]; // Wardrobe Organisation review

  return (
    <section className="py-14 sm:py-16 bg-[var(--green)] text-[var(--ong)] border-t border-[var(--gold)]/30 relative overflow-hidden">
      {/* Subtle warm glow background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
            {/* Left side: Heading & Supporting text */}
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--card)]/10 text-[var(--gold)] text-xs font-bold uppercase tracking-wider mb-4 border border-[var(--gold)]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Turn Your Space Into Home</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-heading font-bold text-[var(--gold)] mb-3">
                Ready to make your space neat and organised?
              </h2>
              <p className="text-sm sm:text-base text-[var(--ong)]/85 leading-relaxed">
                Tell us what you need. We&apos;ll help you choose the right service.
              </p>
            </div>

            {/* Right side: Compact Testimonial snippet & WhatsApp Booking Button */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-5">
              {/* Compact testimonial pill */}
              <div className="p-4 rounded-xl bg-[var(--card)]/10 border border-[var(--gold)]/30 backdrop-blur-sm max-w-sm text-left">
                <div className="flex items-start gap-2.5">
                  <Quote className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[var(--ong)] italic leading-snug">
                    &ldquo;{highlightReview.reviewText}&rdquo;
                  </p>
                </div>
                <div className="text-[11px] text-[var(--gold)] font-semibold mt-2 pl-6.5">
                  — {highlightReview.customerName} ({highlightReview.service})
                </div>
              </div>

              {/* Primary WhatsApp Booking Action */}
              <WhatsAppButton
                variant="primary"
                size="lg"
                text="Book Your Service on WhatsApp"
                message="Hi Prakash Bro, I would like to book a service with NEATIFY AGAM."
                className="w-full sm:w-auto shadow-lg"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
