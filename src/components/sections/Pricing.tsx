"use client";

import React, { useState } from "react";
import { TASK_PRICING } from "@/data/pricing";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { IndianRupee, Info, Search } from "lucide-react";

export const Pricing: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPricing = TASK_PRICING.filter((item) => {
    const matchesCategory =
      filterCategory === "all" || item.category === filterCategory;
    const matchesSearch =
      item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.suitableFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[var(--card)] border-y border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transparent Rates"
          title="Service & Task Pricing"
          description="“From” prices are clear starting points. Final quotes depend on quantity, size, staining, and estimated hours needed — confirmed on WhatsApp before work begins."
        />

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--mute)]" />
            <input
              type="text"
              placeholder="Search task or space..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-full bg-[var(--bg)] border border-[var(--line)] text-xs text-[var(--ink)] placeholder:text-[var(--mute)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 w-full sm:w-auto">
            {[
              { id: "all", label: "All Rates" },
              { id: "cleaning", label: "Cleaning" },
              { id: "organising", label: "Organising" },
              { id: "setup", label: "Setup" },
              { id: "assist", label: "Assist & Errands" },
              { id: "care", label: "Care" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? "bg-[var(--green)] text-[var(--ong)] shadow-xs"
                    : "bg-[var(--bg)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--bg)] shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--green)] text-[var(--ong)] text-xs uppercase tracking-wider">
                <th className="py-4 px-6 font-bold">Service / Task</th>
                <th className="py-4 px-6 font-bold">Suitable For</th>
                <th className="py-4 px-6 font-bold">Starting From</th>
                <th className="py-4 px-6 font-bold">Typical Range</th>
                <th className="py-4 px-6 font-bold text-right">Instant Quote</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--line)] text-sm">
              {filteredPricing.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-[var(--card)] transition-colors group"
                >
                  <td className="py-3.5 px-6 font-bold text-[var(--ink)]">
                    {item.service}
                  </td>
                  <td className="py-3.5 px-6 text-[var(--mute)]">
                    {item.suitableFor}
                  </td>
                  <td className="py-3.5 px-6 font-bold text-[var(--gold)]">
                    {item.startingFrom}
                  </td>
                  <td className="py-3.5 px-6 text-[var(--ink)] font-medium">
                    {item.typicalRange}
                  </td>
                  <td className="py-3.5 px-6 text-right">
                    <WhatsAppButton
                      size="sm"
                      text="Inquire"
                      message={`Hi Prakash Bro, I would like to book or inquire about: ${item.service} (Starting from ${item.startingFrom}).`}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {filteredPricing.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[var(--bg)] border border-[var(--line)] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-base text-[var(--ink)]">
                    {item.service}
                  </h4>
                  <span className="shrink-0 font-bold text-sm text-[var(--gold)] bg-[var(--gold)]/10 px-2.5 py-1 rounded-full">
                    {item.startingFrom}
                  </span>
                </div>
                <p className="text-xs text-[var(--mute)] mb-2">
                  Suitable for: <span className="text-[var(--ink)]">{item.suitableFor}</span>
                </p>
                <div className="text-xs font-semibold text-[var(--ink)] mb-4">
                  Typical Range: {item.typicalRange}
                </div>
              </div>
              <WhatsAppButton
                size="sm"
                text="Request Quote on WhatsApp"
                message={`Hi Prakash Bro, I need a quote for: ${item.service}.`}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Essential Business Policies & Disclaimers */}
        <Reveal delay={0.2}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--line)] flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed text-[var(--mute)]">
                <strong className="text-[var(--ink)] font-bold block mb-0.5">
                  Bathroom Service Policy:
                </strong>
                All cleaning supplies and sanitisation solutions are included. Enjoy an automatic{" "}
                <strong className="text-[var(--ink)]">₹50 off per bathroom</strong> starting from the
                second bathroom in the same home. Plumbing repairs are not included.
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--line)] flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
              <div className="text-xs leading-relaxed text-[var(--mute)]">
                <strong className="text-[var(--ink)] font-bold block mb-0.5">
                  Deep & Machine Cleaning Partnerships:
                </strong>
                Bathroom machine buffing / acid deep cleaning, sofa & mattress shampooing, and
                specialist treatments are arranged with vetted partners and priced transparently
                after your prior approval.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
