"use client";

import React from "react";
import { MONTHLY_PLANS } from "@/data/pricing";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Check, CalendarCheck, Shield } from "lucide-react";

export const MonthlyPlans: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[var(--card)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recurring Peace of Mind"
          title="Monthly Retainer Care Plans"
          description="Consistent, scheduled upkeep for homes that demand continuous elegance, order, and sanitisation without the hassle of rebooking every week."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MONTHLY_PLANS.map((plan, idx) => (
            <Reveal key={plan.name} delay={idx * 0.1}>
              <div
                className={`h-full flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 relative ${
                  plan.popular
                    ? "bg-[var(--green)] text-[var(--ong)] border-[var(--gold)] shadow-xl"
                    : "bg-[var(--bg)] text-[var(--ink)] border-[var(--line)] hover:border-[var(--gold)]/80"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[#17210f] text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-xs">
                    Recommended Monthly Plan
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarCheck
                      className={`w-5 h-5 ${
                        plan.popular ? "text-[var(--gold)]" : "text-[var(--green)]"
                      }`}
                    />
                    <h3
                      className={`text-2xl font-serif-heading font-bold ${
                        plan.popular ? "text-[var(--gold)]" : "text-[var(--ink)]"
                      }`}
                    >
                      {plan.name}
                    </h3>
                  </div>

                  <div className="mb-6 pb-6 border-b border-[var(--line)]/50">
                    <div
                      className={`text-3xl sm:text-4xl font-serif-heading font-bold ${
                        plan.popular ? "text-[var(--gold)]" : "text-[var(--gold)]"
                      }`}
                    >
                      {plan.price}
                      <span className="text-sm font-sans font-normal opacity-75">
                        {" "}/ month
                      </span>
                    </div>
                    <div
                      className={`text-xs font-semibold mt-1 ${
                        plan.popular ? "text-[var(--ong)]/80" : "text-[var(--mute)]"
                      }`}
                    >
                      {plan.visits} • {plan.duration}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? "text-[var(--gold)]" : "text-[var(--green)]"
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            plan.popular ? "text-[var(--ong)]" : "text-[var(--ink)]"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <WhatsAppButton
                  variant={plan.popular ? "primary" : "outline"}
                  size="md"
                  text={`Inquire ${plan.name}`}
                  message={`Hi Prakash Bro, I would like to enquire about the ${plan.name} (${plan.price}/month). Please share setup steps.`}
                  className="w-full"
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Retainer Policy Note */}
        <Reveal delay={0.3}>
          <div className="mt-10 p-5 rounded-xl bg-[var(--bg)] border border-[var(--line)] flex items-center justify-center gap-3 text-xs text-[var(--mute)] text-center">
            <Shield className="w-4 h-4 text-[var(--gold)] shrink-0" />
            <span>
              Monthly plans are completely flexible with no hidden lock-in contracts. Confirm your
              preferred calendar slots directly on WhatsApp.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
