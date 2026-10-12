"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faq";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Common Inquiries"
          title="Frequently Asked Questions"
          description="Everything you need to know about our quotes, scheduling, cleaning supplies, and service commitments across Chennai."
        />

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Reveal key={idx} delay={idx * 0.04}>
                <div className="rounded-xl border border-[var(--line)] bg-[var(--card)] overflow-hidden transition-all duration-200">
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left gap-4 hover:bg-[var(--line)]/20 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-[var(--ink)] flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[var(--gold)] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[var(--gold)] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[var(--mute)] leading-relaxed border-t border-[var(--line)]/40 bg-[var(--bg)]/40">
                      <p className="pl-6.5">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
