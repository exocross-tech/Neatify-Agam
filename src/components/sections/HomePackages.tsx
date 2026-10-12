"use client";

import React from "react";
import { HOME_PACKAGES, HOME_SIZE_COMPARISON } from "@/data/pricing";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Check, Sparkles, Users, Clock } from "lucide-react";

export const HomePackages: React.FC = () => {
  return (
    <section id="packages" className="py-20 sm:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Turnkey Solutions"
          title="Home Size & Move-In Packages"
          description="Whether you are moving into a new residence in Chennai or giving your current apartment a complete deep organisation overhaul."
        />

        {/* 3 Tier Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-stretch">
          {HOME_PACKAGES.map((pkg, idx) => (
            <Reveal key={pkg.name} delay={idx * 0.1}>
              <div
                className={`h-full flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 relative ${
                  pkg.highlight
                    ? "bg-[var(--green)] text-[var(--ong)] border-[var(--gold)] shadow-2xl scale-102 lg:-translate-y-2"
                    : "bg-[var(--card)] text-[var(--ink)] border-[var(--line)] shadow-sm hover:border-[var(--gold)]/80"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[#17210f] text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Chosen Package</span>
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <h3
                      className={`text-2xl sm:text-3xl font-serif-heading font-bold mb-1 ${
                        pkg.highlight ? "text-[var(--gold)]" : "text-[var(--ink)]"
                      }`}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-xs ${
                        pkg.highlight ? "text-[var(--ong)]/80" : "text-[var(--mute)]"
                      }`}
                    >
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-[var(--line)]/50">
                    <div
                      className={`text-3xl sm:text-4xl font-serif-heading font-bold ${
                        pkg.highlight ? "text-[var(--gold)]" : "text-[var(--gold)]"
                      }`}
                    >
                      {pkg.startingPrice}
                    </div>
                    <span
                      className={`inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full ${
                        pkg.highlight
                          ? "bg-[var(--card)]/10 text-[var(--ong)]"
                          : "bg-[var(--gold)]/10 text-[var(--ink)]"
                      }`}
                    >
                      {pkg.bestFor}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            pkg.highlight ? "text-[var(--gold)]" : "text-[var(--green)]"
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            pkg.highlight ? "text-[var(--ong)]" : "text-[var(--ink)]"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <WhatsAppButton
                  variant={pkg.highlight ? "primary" : "outline"}
                  size="md"
                  text={`Book ${pkg.name}`}
                  message={`Hi Prakash Bro, I am interested in the ${pkg.name} package (${pkg.startingPrice}). Please share availability.`}
                  className="w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Detailed Home-Size Matrix */}
        <Reveal delay={0.3}>
          <div className="bg-[var(--card)] rounded-2xl border border-[var(--line)] p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[var(--ink)]">
                  Space-Specific Home Size Breakdown
                </h3>
                <p className="text-xs text-[var(--mute)]">
                  Estimated team sizing, completion duration, and setup vs. turnkey ranges.
                </p>
              </div>
              <span className="text-xs font-bold text-[var(--gold)] bg-[var(--gold)]/10 px-3 py-1.5 rounded-full w-fit">
                All Over Chennai
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[var(--green)] text-[var(--ong)] text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold rounded-l-lg">Home Size</th>
                    <th className="py-3.5 px-4 font-bold">Setup Only</th>
                    <th className="py-3.5 px-4 font-bold">New Home → Ready Home</th>
                    <th className="py-3.5 px-4 font-bold">Dedicated Team</th>
                    <th className="py-3.5 px-4 font-bold rounded-r-lg">Estimated Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)] text-sm">
                  {HOME_SIZE_COMPARISON.map((row) => (
                    <tr key={row.homeSize} className="hover:bg-[var(--bg)] transition-colors">
                      <td className="py-4 px-4 font-bold text-[var(--ink)]">
                        {row.homeSize}
                      </td>
                      <td className="py-4 px-4 font-semibold text-[var(--gold)]">
                        {row.setupOnly}
                      </td>
                      <td className="py-4 px-4 font-bold text-[var(--ink)]">
                        {row.newHomeReadyHome}
                      </td>
                      <td className="py-4 px-4 text-[var(--mute)]">
                        <span className="inline-flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[var(--gold)]" />
                          {row.teamSize}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-[var(--mute)]">
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[var(--gold)]" />
                          {row.estimatedDuration}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-[var(--mute)] mt-4 leading-normal italic">
              * Final price and timeline depend on scope agreed after reviewing photos/video on WhatsApp or initial on-site walkthrough.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
