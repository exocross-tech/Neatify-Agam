"use client";

import React, { useState, useMemo } from "react";
import { TESTIMONIALS, TESTIMONIAL_STATS } from "@/data/testimonials";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import {
  Quote,
  Star,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// Color palettes for avatar circles based on name
const AVATAR_COLORS = [
  "bg-emerald-800 text-amber-100",
  "bg-amber-800 text-amber-100",
  "bg-teal-800 text-teal-100",
  "bg-green-900 text-emerald-100",
  "bg-stone-800 text-stone-100",
  "bg-amber-900 text-amber-100",
];

function getInitials(name: string): string {
  if (!name || name === "Customer Feedback") return "CF";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Reviews");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Extract unique categories and counts
  const categoriesWithCounts = useMemo(() => {
    const counts: Record<string, number> = {
      "All Reviews": TESTIMONIALS.length,
    };
    TESTIMONIALS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });

    const categoryList = [
      "All Reviews",
      "Organising & Wardrobe",
      "Cleaning & Tanks",
      "Home Setup & Moving",
      "Commercial & Office",
      "Assistance & Lifestyle",
    ];

    return categoryList.map((cat) => ({
      name: cat,
      count: counts[cat] || 0,
    }));
  }, []);

  // Filter testimonials based on selected category
  const filteredReviews = useMemo(() => {
    if (activeCategory === "All Reviews") {
      return TESTIMONIALS;
    }
    return TESTIMONIALS.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  // Handle collapsible view for "All Reviews"
  const INITIAL_DISPLAY_COUNT = 6;
  const displayedReviews = useMemo(() => {
    if (activeCategory === "All Reviews" && !isExpanded) {
      return filteredReviews.slice(0, INITIAL_DISPLAY_COUNT);
    }
    return filteredReviews;
  }, [activeCategory, isExpanded, filteredReviews]);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="VERIFIED REVIEWS • 100% SATISFACTION ❤️"
          title="What Our Customers Say"
          description="Real feedback from families, tenants, and business owners across Chennai who experienced the transformation of NEATIFY AGAM."
        />

        {/* Aggregate Trust & Rating Overview Banner */}
        <Reveal delay={0.1}>
          <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-7 rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-xs">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center divide-y md:divide-y-0 md:divide-x divide-[var(--line)]/60">
              
              {/* Average Rating */}
              <div className="flex flex-col items-center justify-center p-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-3xl font-extrabold text-[var(--ink)]">
                    {TESTIMONIAL_STATS.averageRating.toFixed(1)}
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-xs font-semibold text-[var(--mute)]">
                  Average Rating
                </span>
              </div>

              {/* Verified Count */}
              <div className="flex flex-col items-center justify-center p-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-3xl font-extrabold text-[var(--gold)]">
                    {TESTIMONIAL_STATS.totalReviews}+
                  </span>
                  <ShieldCheck className="w-5 h-5 text-[var(--gold)]" />
                </div>
                <span className="text-xs font-semibold text-[var(--mute)]">
                  Verified Local Reviews
                </span>
              </div>

              {/* Satisfaction Rate */}
              <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-500">
                    {TESTIMONIAL_STATS.satisfiedRate}
                  </span>
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-[var(--mute)]">
                  Client Satisfaction
                </span>
              </div>

              {/* Location Coverage */}
              <div className="flex flex-col items-center justify-center p-2 pt-4 md:pt-2">
                <div className="text-base sm:text-lg font-bold text-[var(--ink)] mb-0.5">
                  All Over Chennai
                </div>
                <span className="text-xs font-semibold text-[var(--mute)]">
                  Doorstep Service & Setup
                </span>
              </div>

            </div>
          </div>
        </Reveal>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {categoriesWithCounts.map(({ name, count }) => {
            const isSelected = activeCategory === name;
            return (
              <button
                key={name}
                onClick={() => {
                  setActiveCategory(name);
                  setIsExpanded(false);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[var(--green)] text-[var(--ong)] shadow-sm scale-102"
                    : "bg-[var(--card)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                }`}
              >
                <span>{name}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isSelected
                      ? "bg-white/20 text-[var(--ong)]"
                      : "bg-[var(--line)]/50 text-[var(--mute)]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((item, idx) => {
            const avatarColor = AVATAR_COLORS[idx % AVATAR_COLORS.length];
            const initials = getInitials(item.customerName);

            return (
              <Reveal key={item.id} delay={(idx % 6) * 0.08}>
                <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-xs hover:border-[var(--gold)]/80 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative group">
                  
                  <div>
                    {/* Top row: Service Badge & 5-Star Rating */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[var(--gold)]/12 text-[var(--gold)] border border-[var(--gold)]/25 leading-tight">
                        {item.service}
                      </span>
                      <div className="flex items-center text-amber-500 shrink-0">
                        {[...Array(item.rating || 5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Headline Title */}
                    <h4 className="text-base sm:text-lg font-bold text-[var(--ink)] mb-3 leading-snug group-hover:text-[var(--gold)] transition-colors duration-200">
                      {item.title}
                    </h4>

                    {/* Review Body */}
                    <div className="relative mb-6">
                      <Quote className="w-6 h-6 text-[var(--gold)]/25 absolute -top-1 -left-1 pointer-events-none" />
                      <p className="text-sm sm:text-base text-[var(--ink)]/90 leading-relaxed italic pl-5 font-normal">
                        &ldquo;{item.reviewText}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Customer Attribution Footer */}
                  <div className="pt-4 border-t border-[var(--line)]/60 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-full ${avatarColor} flex items-center justify-center font-bold text-xs shadow-xs`}
                      >
                        {initials}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[var(--ink)]">
                          {item.customerName}
                        </div>
                        <div className="text-[11px] text-[var(--mute)]">
                          {item.location || "Chennai Resident"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* "Show All Reviews" Toggle when in "All Reviews" */}
        {activeCategory === "All Reviews" && filteredReviews.length > INITIAL_DISPLAY_COUNT && (
          <div className="text-center mt-10">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[var(--card)] border border-[var(--gold)]/60 text-[var(--ink)] hover:bg-[var(--gold)]/10 hover:border-[var(--gold)] transition-all cursor-pointer shadow-xs"
            >
              {isExpanded ? (
                <>
                  <span>Show Less (Featured Reviews)</span>
                  <ChevronUp className="w-4 h-4 text-[var(--gold)]" />
                </>
              ) : (
                <>
                  <span>View All {filteredReviews.length} Customer Reviews</span>
                  <ChevronDown className="w-4 h-4 text-[var(--gold)]" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Booking CTA Banner below Reviews */}
        <Reveal delay={0.2}>
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[var(--green)] text-[var(--ong)] text-center relative overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none" />
            <div className="relative max-w-2xl mx-auto space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/15 text-amber-200">
                Ready for a Fresh, Tidy Space?
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif-heading">
                Experience the Neatness in Your Home Today
              </h3>
              <p className="text-sm sm:text-base text-[var(--ong)]/85 max-w-xl mx-auto">
                Join our satisfied customers across Chennai. From water tank cleaning to wardrobe and complete home setups, we are just a message away.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <a
                  href={getWhatsAppUrl("Hi Prakash Bro, I read the verified customer reviews and would like to request a quote!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm bg-emerald-500 hover:bg-emerald-600 text-white shadow-md transition-all hover:scale-103 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Get a Free Quote on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};
