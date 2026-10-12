"use client";

import React, { useState } from "react";
import { SERVICE_CATEGORIES } from "@/data/services";
import { SectionHeading, Reveal } from "@/components/ui/SectionHeading";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import {
  FolderKanban,
  Droplets,
  Truck,
  Sparkles,
  Heart,
  Clock,
  Calendar,
  Trees,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  FolderKanban,
  Droplets,
  Truck,
  Sparkles,
  Heart,
  Clock,
  Calendar,
  Trees,
};

export const ServiceCatalogue: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({});

  const toggleDetails = (id: string) => {
    setExpandedDetails((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCategories =
    activeCategory === "all"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="catalogue" className="py-20 sm:py-28 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Complete Directory"
          title="Full Service Catalogue"
          description="Every task is itemised with transparent parameters. From single wardrobe drawer categorisation to turnkey move-in transformations."
        />

        {/* Filter chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[var(--green)] text-[var(--ong)] shadow-sm"
                : "bg-[var(--card)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)]"
            }`}
          >
            All 8 Categories
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[var(--green)] text-[var(--ong)] shadow-sm"
                  : "bg-[var(--card)] border border-[var(--line)] text-[var(--ink)] hover:border-[var(--gold)]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category, idx) => {
            const Icon = CATEGORY_ICONS[category.iconName] || FolderKanban;
            const isExpanded = expandedDetails[category.id] ?? false;
            const displayedItems = isExpanded
              ? category.items
              : category.items.slice(0, 4);

            return (
              <Reveal key={category.id} delay={idx * 0.05}>
                <div className="h-full flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[var(--card)] border border-[var(--line)] shadow-xs hover:border-[var(--gold)]/80 hover:shadow-md transition-all duration-300">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-[var(--green)] text-[var(--gold)] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-serif-heading font-bold text-[var(--ink)]">
                            {category.title}
                          </h3>
                          <p className="text-xs text-[var(--mute)]">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <span className="shrink-0 text-xs font-bold px-3 py-1 rounded-full bg-[var(--gold)]/15 text-[var(--ink)] border border-[var(--gold)]/30">
                        From {category.startingPrice}
                      </span>
                    </div>

                    <ul className="space-y-2.5 mt-6 mb-4">
                      {displayedItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[var(--gold)] shrink-0 mt-0.5" />
                          <span className="text-[var(--ink)] font-medium leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {category.items.length > 4 && (
                      <button
                        onClick={() => toggleDetails(category.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--gold)] hover:text-[var(--ink)] transition-colors mb-6 cursor-pointer"
                      >
                        <span>
                          {isExpanded
                            ? "Show fewer tasks"
                            : `+${category.items.length - 4} more detailed tasks`}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between gap-4">
                    <span className="text-xs text-[var(--mute)]">
                      Instant estimate on WhatsApp
                    </span>
                    <WhatsAppButton
                      size="sm"
                      text="Inquire Scope"
                      message={`Hi Prakash Bro, I am inquiring about: ${category.title}. Please provide a quote.`}
                    />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
