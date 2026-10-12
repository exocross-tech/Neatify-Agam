import React from "react";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Camera, FileCheck2, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: Camera,
      title: "Send 3–4 Photos or Video",
      desc: "Send a quick WhatsApp walkthrough of your rooms, cupboards, or specific task areas.",
    },
    {
      num: "02",
      icon: FileCheck2,
      title: "Get Your Clear Quote",
      desc: "We calculate hours, crew size, and supplies, sending an itemised upfront price before we begin.",
    },
    {
      num: "03",
      icon: Sparkles,
      title: "We Do the Work",
      desc: "Our courteous, vetted specialists arrive on schedule and transform your space with love and care.",
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Inspect Together → Pay",
      desc: "Conduct a joint walkthrough. Pay only after you are 100% satisfied via GPay, PhonePe, UPI, or cash.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[var(--card)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Seamless Process"
          title="How It Works — Step by Step"
          description="A frictionless, transparent experience designed around your comfort, schedule, and complete trust."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.num} delay={idx * 0.1}>
                <div className="h-full flex flex-col p-7 rounded-2xl bg-[var(--bg)] border border-[var(--line)] relative group hover:border-[var(--gold)]/80 transition-all">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-serif-heading font-bold text-[var(--gold)]">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[var(--green)] text-[var(--gold)] flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--ink)] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--mute)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Action bar */}
        <Reveal delay={0.4}>
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--green)] text-[var(--ong)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[var(--gold)] mb-1">
                Ready to transform your space?
              </h3>
              <p className="text-xs sm:text-sm text-[var(--ong)]/80">
                Snap 3–4 photos right now and message Prakash Bro on WhatsApp.
              </p>
            </div>
            <WhatsAppButton
              variant="primary"
              size="lg"
              text="Send Photos on WhatsApp"
              message="Hi Prakash Bro, I am sharing photos of my space for a quote."
              className="shrink-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
