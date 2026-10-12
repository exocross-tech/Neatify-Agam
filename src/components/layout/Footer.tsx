import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND, NAVIGATION_LINKS } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Phone, Heart, MapPin, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--green)] text-[var(--ong)] border-t border-[var(--gold)]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[var(--gold)]/20">
          {/* Brand Presentation */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group inline-flex">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[var(--gold)] shadow-sm bg-[var(--green)]">
                <Image
                  src="/logo/neatify-agam-logo.png"
                  alt="NEATIFY AGAM Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-heading font-bold text-2xl tracking-wide text-[var(--gold)]">
                  {BRAND.name}
                </span>
                <span className="text-xs text-[var(--ong)]/80 italic font-serif-heading">
                  {BRAND.tagline}
                </span>
              </div>
            </Link>

            <p className="text-xs text-[var(--ong)]/80 leading-relaxed mb-6 max-w-sm">
              Professional cleaning, wardrobe organisation, turnkey moving setup, senior companion
              care, and on-demand assistance across Chennai.
            </p>

            <div className="p-4 rounded-xl bg-[var(--card)]/5 border border-[var(--gold)]/30 text-xs max-w-sm">
              <div className="flex items-center gap-2 text-[var(--gold)] font-bold mb-1">
                <Heart className="w-3.5 h-3.5 fill-[var(--gold)]" />
                <span>Hundi of Help Commitment</span>
              </div>
              <p className="text-[var(--ong)]/75 leading-normal">
                10% of companion care and 5% of all other services support orphanages and children’s
                homes. Shared transparently.
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--ong)]/80">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[var(--gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Pillars & Services */}
          <div>
            <h4 className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider mb-4">
              Core Pillars
            </h4>
            <ul className="space-y-2.5 text-xs text-[var(--ong)]/80">
              {BRAND.corePillars.map((pillar) => (
                <li key={pillar}>
                  <a href="#services" className="hover:text-[var(--gold)] transition-colors">
                    {pillar} Services
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#packages" className="text-[var(--gold)] font-bold hover:underline">
                  New Home → Ready Home
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[var(--gold)] font-bold hover:underline">
                  Small Jobs From ₹99
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Direct CTAs */}
          <div>
            <h4 className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider mb-4">
              Reach Prakash Bro
            </h4>
            <div className="space-y-3 text-xs text-[var(--ong)]/80 mb-6">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[var(--gold)] mt-0.5 shrink-0" />
                <a href={BRAND.telLink} className="hover:text-[var(--gold)] font-bold text-[var(--ong)]">
                  +91 9962 9171 47
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[var(--gold)] mt-0.5 shrink-0" />
                <span>All Over Chennai</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[var(--gold)] mt-0.5 shrink-0" />
                <span>Open 24/7 By Customer Need</span>
              </div>
            </div>

            <WhatsAppButton size="sm" text="WhatsApp Prakash" className="w-full" />
          </div>
        </div>

        {/* Guiding Scripture & Copyright Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[var(--ong)]/70">
          <div>
            <p className="font-serif-heading italic text-[var(--gold)] text-sm mb-0.5">
              {BRAND.scripture}
            </p>
            <p className="text-[10px] uppercase tracking-wider">{BRAND.scriptureRef}</p>
          </div>

          <div>
            <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
            <p className="text-[10px] text-[var(--ong)]/50">
              Clear Quote First • Inspect Together • Then Pay
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
