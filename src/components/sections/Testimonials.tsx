"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/testimonials";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { Quote, MessageSquareHeart, CheckCircle2 } from "lucide-react";

export const Testimonials: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All Reviews");

  // Determine which service filters have published reviews
  const publishedServices = Array.from(new Set(TESTIMONIALS.map((t) => t.service)));
  const visibleFilters = ["All Reviews", ...publishedServices];

  // Filter reviews
  const filteredReviews =
    activeFilter === "All Reviews"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.service === activeFilter);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CUSTOMER LOVE ❤️"
          title="What Our Customers Say"
          description="Every neat space has a story. Read genuine customer experiences with NEATIFY AGAM."
        />

        {/* Service-wise filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {visibleFilters.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[var(--green)] text-[var(--ong)] shadow-sm"
                    : "bg-[var(--card)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)]/80 hover:text-[var(--gold)]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Testimonials Cards Grid */}
        {filteredReviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {filteredReviews.map((item, idx) => (
              <Reveal key={item.id} delay={idx * 0.1}>
                <div className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-xs hover:border-[var(--gold)]/80 hover:shadow-md transition-all duration-300 relative group">
                  <div>
                    {/* Top row with quote icon and service badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-[var(--green)]/10 text-[var(--gold)] flex items-center justify-center">
                        <Quote className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--gold)]/15 text-[var(--ink)] border border-[var(--gold)]/30">
                        {item.service}
                      </span>
                    </div>

                    {/* Exact Review Text */}
                    <p className="text-base sm:text-lg text-[var(--ink)] leading-relaxed italic mb-6 font-medium">
                      “{item.reviewText}”
                    </p>
                  </div>

                  {/* Customer Attribution (without invented ratings/photos) */}
                  <div className="pt-4 border-t border-[var(--line)]/60 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[var(--green)] text-[var(--ong)] flex items-center justify-center font-bold text-xs">
                        AC
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[var(--ink)]">
                          {item.customerName}
                        </div>
                        <div className="text-[11px] text-[var(--mute)]">
                          Chennai Resident
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-[var(--gold)]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified Service</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Friendly empty state */
          <div className="text-center py-12 px-4 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-[var(--card)] border border-[var(--line)] text-[var(--mute)] flex items-center justify-center mx-auto mb-3">
              <MessageSquareHeart className="w-6 h-6 text-[var(--gold)]" />
            </div>
            <p className="text-sm font-bold text-[var(--ink)] mb-1">
              No reviews under this category yet
            </p>
            <p className="text-xs text-[var(--mute)] mb-4">
              Switch back to &ldquo;All Reviews&rdquo; to explore genuine customer feedback.
            </p>
            <button
              onClick={() => setActiveFilter("All Reviews")}
              className="text-xs font-bold text-[var(--gold)] underline hover:text-[var(--ink)] cursor-pointer"
            >
              View All Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
