"use client";

import React from "react";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/SectionHeading";
import { CheckCircle2, ShieldCheck, Sparkles, Clock, MapPin, IndianRupee } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[var(--gold)]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--green)] text-[var(--ong)] border border-[var(--gold)]/40 mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span className="text-xs font-bold tracking-[0.16em] uppercase">
                  YOUR SPACE. OUR CARE.
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-heading font-bold text-[var(--ink)] leading-[1.08] tracking-tight mb-6">
                Make It Neat. <br />
                <span className="text-[var(--gold)] italic font-medium">Make It Home.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base sm:text-lg md:text-xl text-[var(--mute)] leading-relaxed mb-8 max-w-2xl">
                From everyday flats to corporate offices, institutions, and community spaces,{" "}
                <strong className="text-[var(--ink)] font-bold">NEATIFY AGAM</strong> cleans,
                organises, arranges, and sets up with heart-felt excellence. Small jobs start from{" "}
                <span className="font-bold text-[var(--ink)]">₹99</span>. You get a clear upfront
                quote first and pay after we inspect together.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                <WhatsAppButton
                  size="lg"
                  text="Get a Free Quote on WhatsApp"
                  className="w-full sm:w-auto shadow-md"
                />
                <Button
                  variant="outline"
                  size="lg"
                  href="#services"
                  className="w-full sm:w-auto"
                >
                  Explore Services
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--line)] w-full">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                    <IndianRupee className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--mute)]">Starting at</div>
                    <div className="text-sm font-bold text-[var(--ink)]">₹99 Micro-tasks</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--mute)]">Availability</div>
                    <div className="text-sm font-bold text-[var(--ink)]">24/7 By Booking</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="p-2 rounded-full bg-[var(--gold)]/10 text-[var(--gold)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--mute)]">Coverage</div>
                    <div className="text-sm font-bold text-[var(--ink)]">All Over Chennai</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Animated Living Space Hero Composition */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={0.3} yOffset={30}>
              <div className="relative mx-auto max-w-md lg:max-w-none group">
                {/* Decorative gold backdrop halo */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[var(--gold)]/20 via-[var(--green)]/10 to-transparent blur-xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Outer frame with subtle rotate and border */}
                <div className="absolute -inset-2.5 rounded-2xl border-2 border-[var(--gold)]/30 transform rotate-1 pointer-events-none group-hover:rotate-0 transition-transform duration-500" />

                {/* Main Hero Visual Container */}
                <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-[var(--line)] bg-[var(--card)]">
                  <Image
                    src="/images/neatify-living-room.jpg"
                    alt="Pristine Organised Living Space by NEATIFY AGAM"
                    fill
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    priority
                  />
                  
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--green)]/80 via-[var(--green)]/15 to-transparent" />

                  {/* Top Live Status Indicator */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--card)]/90 backdrop-blur-md border border-[var(--line)] shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[11px] font-bold text-[var(--ink)] tracking-wide">
                      Active Across Chennai
                    </span>
                  </div>

                  {/* Bottom Editorial Caption */}
                  <div className="absolute bottom-5 left-5 right-5 text-[var(--ong)] z-10">
                    <div className="flex items-center gap-1.5 text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Peace • Order • Warmth</span>
                    </div>
                    <p className="text-sm sm:text-base font-serif-heading italic text-[var(--ong)] leading-snug">
                      {BRAND.scripture}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-[var(--ong)]/70 mt-0.5">
                      {BRAND.scriptureRef}
                    </p>
                  </div>
                </div>

                {/* Floating Motion Badge 1: Upfront Quote */}
                <div className="absolute -top-4 -left-3 sm:-left-6 bg-[var(--card)]/95 border border-[var(--line)] shadow-xl rounded-2xl p-3.5 flex items-center gap-3 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300">
                  <div className="p-2.5 rounded-xl bg-[var(--green)] text-[var(--ong)] shadow-xs">
                    <ShieldCheck className="w-4 h-4 text-[var(--gold)]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--ink)]">Clear Quote First</div>
                    <div className="text-[11px] text-[var(--mute)]">Zero hidden surprise fees</div>
                  </div>
                </div>

                {/* Floating Motion Badge 2: Inspect Together, Then Pay */}
                <div className="absolute -bottom-5 -right-2 sm:-right-5 bg-[var(--card)]/95 border border-[var(--line)] shadow-xl rounded-2xl p-3.5 flex items-center gap-3 backdrop-blur-md transform hover:-translate-y-1 transition-all duration-300">
                  <div className="p-2.5 rounded-xl bg-[var(--gold)] text-[#17210f] shadow-xs">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[var(--ink)]">Inspect, Then Pay</div>
                    <div className="text-[11px] text-[var(--mute)]">Joint walkthrough review</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
