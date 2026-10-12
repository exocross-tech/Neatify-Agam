"use client";

import React, { useState } from "react";
import { TARGET_SERVICE_AREAS } from "@/lib/constants";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import {
  MapPin,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  MessageCircle,
} from "lucide-react";

export const ServiceAreas: React.FC = () => {
  const [selectedAreaIndex, setSelectedAreaIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const activeArea = TARGET_SERVICE_AREAS[selectedAreaIndex];

  // Filter areas based on search query
  const filteredAreas = TARGET_SERVICE_AREAS.filter((area) =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.popularServices.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="service-areas" className="py-20 sm:py-28 bg-[var(--card)] border-t border-[var(--line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="LOCAL CHENNAI COVERAGE • AT YOUR DOORSTEP 📍"
          title="Areas & Neighborhoods We Serve"
          description="Providing fast, dedicated doorstep service across Mogappair, Anna Nagar, Nolambur, Ambattur, and surrounding Chennai communities. Small jobs from ₹99, overhead water tank care, wardrobe organizing, and turnkey home setups."
        />

        {/* Quick Search Bar */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-[var(--mute)] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search your area or service (e.g., Mogappair, Ambattur, Tank)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs sm:text-sm bg-[var(--bg)] border border-[var(--line)] text-[var(--ink)] placeholder:text-[var(--mute)] focus:outline-hidden focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-all"
            />
          </div>
        </div>

        {/* 15 Localities Interactive Badges Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 max-w-5xl mx-auto">
          {TARGET_SERVICE_AREAS.map((area, idx) => {
            const isSelected = selectedAreaIndex === idx;
            const isMatched = searchQuery
              ? area.name.toLowerCase().includes(searchQuery.toLowerCase())
              : true;

            return (
              <button
                key={area.slug}
                onClick={() => setSelectedAreaIndex(idx)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[var(--green)] text-[var(--ong)] shadow-md scale-103"
                    : isMatched
                    ? "bg-[var(--bg)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold)]"
                    : "opacity-40 bg-[var(--bg)] border border-[var(--line)] text-[var(--mute)]"
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? "text-[var(--gold)]" : "text-[var(--mute)]"}`} />
                <span>{area.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Area Detailed Service Card */}
        <Reveal key={activeArea.slug} delay={0.1}>
          <div className="max-w-4xl mx-auto rounded-3xl bg-[var(--bg)] border border-[var(--line)] p-7 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--gold)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[var(--line)]">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--gold)] uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-4 h-4 text-[var(--gold)]" />
                  <span>Active Service Hub • Chennai</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-[var(--ink)]">
                  {activeArea.name}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--mute)] mt-1 max-w-xl">
                  {activeArea.highlights}
                </p>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--card)] border border-[var(--line)] shrink-0">
                <Clock className="w-4 h-4 text-emerald-600" />
                <div className="text-left">
                  <div className="text-xs font-bold text-[var(--ink)]">Open 24/7 By Booking</div>
                  <div className="text-[10px] text-[var(--mute)]">Same-day slots available</div>
                </div>
              </div>
            </div>

            {/* Popular Services in this locality */}
            <div className="py-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--gold)] mb-4">
                Popular Services Requested in {activeArea.name}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeArea.popularServices.map((service, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--card)] border border-[var(--line)]/60 text-xs sm:text-sm font-medium text-[var(--ink)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Booking CTA for this Area */}
            <div className="pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[var(--mute)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--gold)] shrink-0" />
                <span>Small jobs from ₹99 • Clear upfront quote • Inspect together, then pay</span>
              </div>

              <a
                href={getWhatsAppUrl(`Hi Prakash Bro, I need service in ${activeArea.name}. Could you please share a quote?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[var(--green)] hover:bg-[var(--green)]/90 text-[var(--ong)] shadow-sm transition-all hover:scale-102 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[var(--gold)]" />
                <span>Book Service in {activeArea.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </Reveal>

        {/* Local Services & Small Works Grid Highlights */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h4 className="text-lg sm:text-xl font-bold font-serif-heading text-[var(--ink)]">
              Everyday Small Home Jobs & Specialty Solutions
            </h4>
            <p className="text-xs sm:text-sm text-[var(--mute)] mt-1">
              No task is too small or complex for NEATIFY AGAM in Chennai.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-xs">
            {[
              { title: "Overhead Tank Cleaning", desc: "Concrete & plastic tanks" },
              { title: "Wardrobe Organising", desc: "Clothes folding & closets" },
              { title: "Small Home Works", desc: "Curtain & picture hanging" },
              { title: "New Home Setup", desc: "Turnkey ready-home setup" },
              { title: "Kitchen Item Sorting", desc: "Spice racks & cupboards" },
              { title: "Balcony & Terrace Cleaning", desc: "Dusting, grills & floors" },
              { title: "Elderly Accompaniment", desc: "Hospital & shopping visits" },
              { title: "Pooja Room Cleaning", desc: "Festival & routine reset" },
              { title: "Fridge & Appliance Cleaning", desc: "Shelves & exterior wipedown" },
              { title: "Warehouse Cleaning", desc: "Ambattur & industrial spaces" },
              { title: "Errand & Shopping Assistance", desc: "Parcel runs & groceries" },
              { title: "Rental & Vacant House Care", desc: "Move-in & move-out checks" },
            ].map((work, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[var(--bg)] border border-[var(--line)]/70 hover:border-[var(--gold)]/60 transition-colors"
              >
                <div className="font-bold text-[var(--ink)] mb-0.5">{work.title}</div>
                <div className="text-[11px] text-[var(--mute)]">{work.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
