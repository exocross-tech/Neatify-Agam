"use client";

import React, { useState } from "react";
import { BRAND } from "@/lib/constants";
import { formatQuoteWhatsAppMsg, getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  Send,
  IndianRupee,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    service: "Home Setup & Organisation",
    spaceType: "2 BHK Apartment",
    location: "",
    preferredTime: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = formatQuoteWhatsAppMsg(formData);
    const targetUrl = getWhatsAppUrl(encodedMsg);
    setSubmitted(true);
    // Redirect directly to WhatsApp with the formatted lead
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[var(--card)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reach Prakash Bro"
          title="Get a Clear Quote on WhatsApp"
          description="Ready for a cleaner, calmer, neatly arranged space? Contact us 24/7. We review your requirements and provide upfront estimates without obligation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="p-7 sm:p-8 rounded-2xl bg-[var(--green)] text-[var(--ong)] border border-[var(--gold)]/40 shadow-xl">
                <span className="text-xs font-bold text-[var(--gold)] uppercase tracking-widest">
                  Direct Lead Contact
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[var(--gold)] mt-1 mb-2">
                  {BRAND.leadContact}
                </h3>
                <p className="text-xs text-[var(--ong)]/80 mb-6">
                  NEATIFY AGAM Coordinator & Service Lead
                </p>

                <div className="space-y-4 mb-8">
                  <a
                    href={BRAND.telLink}
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[var(--card)]/10 hover:bg-[var(--card)]/20 transition-colors text-sm font-bold text-[var(--ong)] border border-[var(--gold)]/20"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[var(--gold)] text-[#17210f] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[var(--gold)] uppercase">Call Directly</div>
                      <div>{BRAND.phone}</div>
                    </div>
                  </a>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[var(--card)]/10 hover:bg-[var(--card)]/20 transition-colors text-sm font-bold text-[var(--ong)] border border-[var(--gold)]/20"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[var(--gold)] text-[#17210f] flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[var(--gold)] uppercase">WhatsApp Chat</div>
                      <div>Chat 24/7 on WhatsApp</div>
                    </div>
                  </a>
                </div>

                <div className="pt-6 border-t border-[var(--gold)]/20 space-y-3 text-xs text-[var(--ong)]/85">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    <span>Serving All Neighborhoods in Chennai</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    <span>Open 24/7 based on customer requirements</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <IndianRupee className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    <span>Micro-jobs starting from ₹99 • Pay after inspection</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Quick trust reassurance badge */}
            <Reveal delay={0.2}>
              <div className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--line)] flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[var(--gold)] shrink-0" />
                <div className="text-xs text-[var(--mute)]">
                  <strong className="text-[var(--ink)] block">100% Privacy & Security:</strong>
                  Your contact information is only used to prepare your direct quote. We never send spam.
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Quote Request Generator */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <div className="p-7 sm:p-9 rounded-2xl bg-[var(--bg)] border border-[var(--line)] shadow-sm">
                <h3 className="text-2xl font-serif-heading font-bold text-[var(--ink)] mb-2">
                  Request an Instant Quote
                </h3>
                <p className="text-xs text-[var(--mute)] mb-6">
                  Fill in your space requirements below. Clicking &apos;Generate WhatsApp Quote&apos; will open WhatsApp with your details pre-formatted.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                        Your Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Anand Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                        Location in Chennai *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anna Nagar / Velachery"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                        Service Category *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      >
                        <option>Home Setup & Organisation</option>
                        <option>Bathroom & Toilet Care</option>
                        <option>New Home → Ready Home Move-in</option>
                        <option>Bridal & Wedding Setup</option>
                        <option>Companion & Senior Care</option>
                        <option>Errands & Extra Hands (Hourly)</option>
                        <option>Pet & Plant Care</option>
                        <option>Commercial / Office / Salon Setup</option>
                        <option>Other Custom Task</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                        Space or Property Type *
                      </label>
                      <select
                        value={formData.spaceType}
                        onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                      >
                        <option>1 BHK Apartment / Flat</option>
                        <option>2 BHK Apartment / Flat</option>
                        <option>3 BHK Apartment / Flat</option>
                        <option>4 BHK / Villa / Independent House</option>
                        <option>PG / Hostel Room</option>
                        <option>Office / Commercial Space</option>
                        <option>Single Bathroom / Toilet</option>
                        <option>Other Space</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                      Preferred Date & Time
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. This Saturday morning / Flexible 24/7"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--ink)] mb-1.5 uppercase tracking-wider">
                      Brief Task Description / Photos note
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe items to fold, bathrooms to clean, or cartons to unpack..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[var(--card)] border border-[var(--line)] text-xs text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full shadow-md"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Send to Prakash Bro on WhatsApp
                  </Button>

                  {submitted && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/10 text-emerald-700 text-xs font-semibold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>WhatsApp opened! You can attach 3–4 photos in the chat for your quote.</span>
                    </div>
                  )}
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
