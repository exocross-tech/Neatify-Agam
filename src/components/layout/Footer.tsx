import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND, NAVIGATION_LINKS, TARGET_SERVICE_AREAS } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Phone, Heart, MapPin, Clock } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--green)] text-[var(--ong)] border-t border-[var(--gold)]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--gold)]/20">
          
          {/* Brand Presentation */}
          <div className="lg:col-span-4">
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
              Professional cleaning, wardrobe organisation, overhead concrete & plastic water tank cleaning, turnkey moving setup, and small household jobs across Chennai.
            </p>

            <div className="p-4 rounded-xl bg-[var(--card)]/5 border border-[var(--gold)]/30 text-xs max-w-sm">
              <div className="flex items-center gap-2 text-[var(--gold)] font-bold mb-1">
                <Heart className="w-3.5 h-3.5 fill-[var(--gold)]" />
                <span>Hundi of Help Commitment</span>
              </div>
              <p className="text-[var(--ong)]/75 leading-normal">
                10% of companion care and 5% of all other services support orphanages and children’s homes. Shared transparently.
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2">
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

          {/* Local Service Hubs */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[var(--gold)] uppercase tracking-wider mb-4">
              Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-[var(--ong)]/80">
              {TARGET_SERVICE_AREAS.map((area) => (
                <a
                  key={area.slug}
                  href="#service-areas"
                  className="hover:text-[var(--gold)] transition-colors truncate"
                  title={area.name}
                >
                  • {area.name}
                </a>
              ))}
            </div>
            <p className="text-[11px] text-[var(--gold)]/90 mt-3 font-semibold">
              + All across Chennai on request
            </p>
          </div>

          {/* Contact Details & Direct CTAs */}
          <div className="lg:col-span-3">
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
                <span>Mogappair, Anna Nagar & Chennai</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[var(--gold)] mt-0.5 shrink-0" />
                <span>Open 24/7 By Customer Booking</span>
              </div>
            </div>

            <WhatsAppButton size="sm" text="WhatsApp Prakash" className="w-full" />
          </div>
        </div>

        {/* Local Services & Keywords SEO Directory */}
        <div className="py-8 border-b border-[var(--gold)]/20">
          <h5 className="text-[11px] font-bold uppercase tracking-wider text-[var(--gold)] mb-3">
            Popular Searches & Services in Chennai:
          </h5>
          <div className="flex flex-wrap gap-2 text-[11px] text-[var(--ong)]/75">
            {[
              "Small Home Jobs Chennai",
              "Water Tank Cleaning Mogappair",
              "Wardrobe Organising Anna Nagar",
              "Overhead Water Tank Cleaning Chennai",
              "Concrete Water Tank Cleaning Chennai",
              "New Home Setup Services Mogappair",
              "Everyday Home Help Chennai",
              "Kitchen Organising Chennai",
              "Cupboard Organising Chennai",
              "Bathroom Cleaning Services Mogappair",
              "Warehouse Cleaning Ambattur",
              "Deep Cleaning Services Mogappair",
              "Water Tank Cleaning Nolambur",
              "Water Tank Cleaning Panneer Nagar",
              "Move-In Cleaning Services Chennai",
              "Balcony & Terrace Cleaning Chennai",
              "Pooja Room Cleaning Chennai",
              "Elderly Accompaniment Services Chennai",
              "Apartment Cleaning Services Chennai",
              "Small Repair Assistance Chennai",
              "Clothes Folding Services Chennai",
              "Cleaning Services Near Me",
              "Home Assistance Near Me",
              "NEATIFY AGAM Chennai",
            ].map((kw, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-[var(--card)]/5 border border-[var(--gold)]/20 text-[var(--ong)]/80 hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors cursor-default"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Guiding Scripture */}
        <div className="pt-8 pb-6 text-center border-b border-[var(--gold)]/15">
          <p className="font-serif-heading italic text-[var(--gold)] text-sm sm:text-base mb-1">
            {BRAND.scripture}
          </p>
          <p className="text-[11px] uppercase tracking-wider text-[var(--ong)]/70 font-medium">
            {BRAND.scriptureRef}
          </p>
        </div>

        {/* Centered Copyright & Powered By Attribution */}
        <div className="pt-6 flex flex-col items-center justify-center text-center gap-1.5 text-xs">
          <p className="text-xs sm:text-sm font-semibold text-[var(--ong)]/90">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-[var(--ong)]/60">
            Clear Quote First • Inspect Together • Then Pay
          </p>
          <p className="pt-1 text-xs sm:text-sm font-bold text-[var(--ong)]">
            Powered by{" "}
            <a
              href="https://www.exocross.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--gold)] font-extrabold hover:underline hover:text-white transition-colors underline-offset-4"
            >
              Exocross
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
