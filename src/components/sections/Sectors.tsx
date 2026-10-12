"use client";

import React, { useState } from "react";
import { SECTORS } from "@/data/sectors";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { Home, Building2, GraduationCap, HeartPulse, Church, HardHat, ChevronDown } from "lucide-react";

const SECTOR_ICONS: Record<string, React.ElementType> = {
  Home,
  Building2,
  GraduationCap,
  HeartPulse,
  Church,
  HardHat,
};

export const Sectors: React.FC = () => {
  const [expandedSectors, setExpandedSectors] = useState<Record<string, boolean>>({
    residential: true,
    commercial: true,
  });

  const toggleSector = (id: string) => {
    setExpandedSectors((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="sectors" className="py-20 sm:py-28 bg-[var(--card)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Where We Serve"
          title="Spaces & Sectors Catered Across Chennai"
          description="From cosy studio apartments to large healthcare clinics, schools, and community worship centres, our trained team adapts with specialised care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector, idx) => {
            const Icon = SECTOR_ICONS[sector.iconName] || Home;
            const isExpanded = expandedSectors[sector.id] ?? false;

            return (
              <Reveal key={sector.id} delay={idx * 0.08}>
                <div className="h-full flex flex-col p-6 sm:p-7 rounded-2xl bg-[var(--bg)] border border-[var(--line)] hover:border-[var(--gold)]/60 transition-all duration-200">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--green)] text-[var(--gold)] flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif-heading font-bold text-[var(--ink)]">
                        {sector.name}
                      </h3>
                      <p className="text-xs text-[var(--mute)]">
                        {sector.spaces.length} property types
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--mute)] mb-4 leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Spaces Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(isExpanded ? sector.spaces : sector.spaces.slice(0, 5)).map((space) => (
                      <span
                        key={space}
                        className="text-xs px-2.5 py-1 rounded-full bg-[var(--card)] border border-[var(--line)] text-[var(--ink)] font-medium"
                      >
                        {space}
                      </span>
                    ))}
                    {!isExpanded && sector.spaces.length > 5 && (
                      <button
                        onClick={() => toggleSector(sector.id)}
                        className="text-xs px-2.5 py-1 rounded-full bg-[var(--gold)]/10 text-[var(--gold)] font-bold hover:bg-[var(--gold)]/20 transition-colors"
                      >
                        +{sector.spaces.length - 5} more
                      </button>
                    )}
                  </div>

                  {sector.spaces.length > 5 && (
                    <button
                      onClick={() => toggleSector(sector.id)}
                      className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-[var(--gold)] hover:text-[var(--ink)] transition-colors pt-2 border-t border-[var(--line)]/60 cursor-pointer"
                    >
                      <span>{isExpanded ? "Show fewer spaces" : "View all supported spaces"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
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
