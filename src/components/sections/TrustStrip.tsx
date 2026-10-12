import React from "react";
import { Reveal } from "@/components/ui/SectionHeading";
import { Sparkles, MapPin, Clock, FileText, CheckCircle2 } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Sparkles,
      title: "Small Jobs From ₹99",
      desc: "Micro-tasks & drawer organising",
    },
    {
      icon: MapPin,
      title: "All Over Chennai",
      desc: "City-wide residential & commercial",
    },
    {
      icon: Clock,
      title: "Open 24/7 By Booking",
      desc: "Tailored to your convenient time",
    },
    {
      icon: FileText,
      title: "Clear Quote First",
      desc: "Itemised pricing before we begin",
    },
    {
      icon: CheckCircle2,
      title: "Inspect, Then Pay",
      desc: "Payment after joint satisfaction",
    },
  ];

  return (
    <section className="border-y border-[var(--line)] bg-[var(--card)] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)]/50">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col items-center text-center p-2 sm:px-4 ${
                    idx > 0 ? "pt-4 sm:pt-2" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--green)] flex items-center justify-center text-[var(--gold)] mb-3 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[var(--ink)] mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--mute)] leading-tight">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Homepage Hero Trust Indicator: Customer Experiences */}
          <div className="mt-6 pt-6 border-t border-[var(--line)]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left bg-[var(--bg)]/70 p-4 rounded-xl border border-[var(--line)]/40">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-xs font-bold text-[var(--green)] uppercase tracking-wider bg-[var(--green)]/10 px-2.5 py-1 rounded-full">
                Real Customers. Real Experiences.
              </span>
              <p className="text-xs sm:text-sm text-[var(--mute)] font-medium">
                Discover what customers say about NEATIFY AGAM.
              </p>
            </div>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-bold bg-[var(--card)] border border-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold)] hover:text-[#17210f] transition-all duration-200 shrink-0 shadow-2xs"
            >
              Read Customer Reviews
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
