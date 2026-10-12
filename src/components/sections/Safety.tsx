import React from "react";
import { BRAND } from "@/lib/constants";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { ShieldAlert, AlertTriangle, Scale } from "lucide-react";

export const Safety: React.FC = () => {
  const exclusions = [
    "Electrical, gas, or plumbing repair work",
    "Pest-control chemicals & fumigation",
    "Roof climbing or hazardous tree scaling",
    "Lifting items exceeding 25 kg per item",
    "Disposal of hazardous or toxic bio-waste",
  ];

  return (
    <section className="py-20 bg-[var(--bg)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Safety & Standards"
          title="Safety Boundaries & Breakage Policy"
          description="Clear boundaries ensure our team works safely while your property remains protected under verified terms."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Exclusions Box */}
          <Reveal delay={0.1}>
            <div className="h-full p-7 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif-heading font-bold text-[var(--ink)]">
                    Services We Do Not Do
                  </h3>
                </div>
                <p className="text-xs text-[var(--mute)] mb-6">
                  To protect our crew and uphold quality excellence, we strictly exclude the following dangerous or specialist services:
                </p>
                <ul className="space-y-3">
                  {exclusions.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--ink)] font-medium">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[11px] text-[var(--mute)] mt-6 pt-4 border-t border-[var(--line)] italic">
                * Maximum lifting limit is strictly 25 kg per individual item.
              </p>
            </div>
          </Reveal>

          {/* Breakage & Liability Policy */}
          <Reveal delay={0.2}>
            <div className="h-full p-7 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/15 text-[var(--gold)] flex items-center justify-center">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif-heading font-bold text-[var(--ink)]">
                    Accidental Breakage Policy
                  </h3>
                </div>
                <p className="text-xs text-[var(--mute)] mb-6">
                  Our specialists handle your glassware, porcelain, and decor with profound respect. However, for complete clarity and accountability:
                </p>

                <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--line)] mb-6">
                  <p className="text-sm font-bold text-[var(--ink)] leading-relaxed">
                    “{BRAND.breakagePolicy}”
                  </p>
                </div>

                <div className="text-xs text-[var(--mute)] space-y-2 leading-relaxed">
                  <p>
                    • Before commencing work, any pre-existing hairline cracks, fragile antiques, or loose hinges are noted during the initial photo walk.
                  </p>
                  <p>
                    • Visual examples in our guides are concept styling illustrations to demonstrate organisation aesthetics.
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-[var(--mute)] mt-6 pt-4 border-t border-[var(--line)]">
                Mutual respect and honest communication remain the foundation of every Agam visit.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
