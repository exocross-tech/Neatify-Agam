"use client";

import React from "react";
import { FIVE_CORE_SERVICES } from "@/data/services";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { Sparkles, LayoutGrid, Home, Handshake, HeartHandshake, ArrowRight, Check } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  LayoutGrid,
  Home,
  Handshake,
  HeartHandshake,
};

export const CoreServices: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Pillars"
          title="CLEAN • ORGANISE • SETUP • ASSIST • CARE"
          description="Every service is crafted with professional precision and genuine respect for your space. Explore how our five pillars transform your everyday living."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {FIVE_CORE_SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Sparkles;
            const isFeatured = index === 2; // SETUP

            return (
              <Reveal key={service.title} delay={index * 0.1}>
                <div
                  className={`h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl border transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl ${
                    isFeatured
                      ? "bg-[var(--green)] text-[var(--ong)] border-[var(--gold)]/60 shadow-lg"
                      : "bg-[var(--card)] text-[var(--ink)] border-[var(--line)]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                          isFeatured
                            ? "bg-[var(--card)]/10 text-[var(--gold)] border border-[var(--gold)]/40"
                            : "bg-[var(--green)] text-[var(--gold)] shadow-sm"
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                          isFeatured
                            ? "bg-[var(--gold)] text-[#17210f]"
                            : "bg-[var(--gold)]/15 text-[var(--ink)] border border-[var(--gold)]/30"
                        }`}
                      >
                        From {service.startingPrice}
                      </span>
                    </div>

                    <h3
                      className={`text-2xl sm:text-3xl font-serif-heading font-bold mb-3 tracking-wide ${
                        isFeatured ? "text-[var(--gold)]" : "text-[var(--ink)]"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        isFeatured ? "text-[var(--ong)]/85" : "text-[var(--mute)]"
                      }`}
                    >
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                          <Check
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isFeatured ? "text-[var(--gold)]" : "text-[var(--green)]"
                            }`}
                          />
                          <span className={isFeatured ? "text-[var(--ong)]" : "text-[var(--ink)]"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#catalogue"
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors pt-4 border-t ${
                      isFeatured
                        ? "border-[var(--gold)]/20 text-[var(--gold)] hover:text-[var(--ong)]"
                        : "border-[var(--line)] text-[var(--ink)] hover:text-[var(--gold)]"
                    }`}
                  >
                    <span>View Service Catalog</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Reveal>
            );
          })}

          {/* Quick custom quote card */}
          <Reveal delay={0.5}>
            <div className="h-full flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-[var(--gold)]/50 bg-gradient-to-br from-[var(--card)] to-[var(--gold)]/10">
              <div>
                <span className="text-xs font-bold text-[var(--gold)] tracking-widest uppercase">
                  Bespoke Flexibility
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[var(--ink)] mt-2 mb-3">
                  Custom Requirements?
                </h3>
                <p className="text-sm text-[var(--mute)] leading-relaxed mb-6">
                  Need a single room deep clean, custom wardrobe reorganising, or institution hall
                  turnaround not listed here?
                </p>
                <div className="p-4 rounded-xl bg-[var(--bg)] border border-[var(--line)] mb-6 text-xs text-[var(--ink)] font-medium space-y-1.5">
                  <p>• Room-wise or Task-wise scope</p>
                  <p>• Pre-opening and handover assistance</p>
                  <p>• Tailored to your specific budget</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[var(--green)] text-[var(--ong)] text-xs font-bold uppercase tracking-wider hover:bg-[var(--green)]/90 transition-colors"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
