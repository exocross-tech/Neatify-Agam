import React from "react";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { FileText, Lock, Camera, CheckSquare } from "lucide-react";

export const Promises: React.FC = () => {
  const promises = [
    {
      icon: FileText,
      title: "Quote First",
      desc: "No surprising post-job extras. We assess requirements upfront and provide an agreed itemised quotation before starting any task.",
    },
    {
      icon: Lock,
      title: "Your Valuables Stay Yours",
      desc: "For mutual trust and security, please lock away cash, jewellery, and confidential legal documents before our team enters your premises.",
    },
    {
      icon: Camera,
      title: "Photos Before We Touch",
      desc: "We document the space's condition before beginning work, ensuring complete clarity, accountability, and pristine results.",
    },
    {
      icon: CheckSquare,
      title: "Inspect, Then Pay",
      desc: "Your satisfaction is paramount. We conduct a joint walkthrough at the end of the session, and you pay only after reviewing the completed work.",
    },
  ];

  return (
    <section id="promises" className="py-20 sm:py-28 bg-[var(--green)] text-[var(--ong)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Guiding Code"
          title="The Four Promises"
          description="We built NEATIFY AGAM on integrity, accountability, and respect for your home. These four tenets govern every single service booking."
          theme="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((p, idx) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={idx * 0.1}>
                <div className="h-full flex flex-col p-7 rounded-2xl bg-[var(--card)]/5 border border-[var(--gold)]/30 backdrop-blur-sm hover:border-[var(--gold)] transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)] text-[#17210f] flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif-heading font-bold text-[var(--gold)] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ong)]/85 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
