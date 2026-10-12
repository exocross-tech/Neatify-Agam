"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND, NAVIGATION_LINKS } from "@/lib/constants";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Menu, X, Phone, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);

    // Initial theme check
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setIsDark(currentTheme === "dark");

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("neatify_theme", nextTheme);
    setIsDark(!isDark);
  };

  // Curated primary links for a clean, spacious desktop bar
  const primaryLinks = [
    { name: "Services", href: "#services" },
    { name: "Sectors", href: "#sectors" },
    { name: "Pricing", href: "#pricing" },
    { name: "Packages", href: "#packages" },
    { name: "Reviews", href: "#testimonials" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Promises", href: "#promises" },
    { name: "Impact", href: "#hundi-of-help" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-2.5 sm:py-3" : "py-3.5 sm:py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300",
              isScrolled
                ? "bg-[var(--card)]/90 backdrop-blur-md shadow-md border border-[var(--line)]"
                : "bg-[var(--card)]/75 backdrop-blur-sm border border-[var(--line)]/60 shadow-xs"
            )}
          >
            {/* Brand Logo & Title */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded-full shrink-0"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[var(--gold)]/50 shadow-xs bg-[var(--green)]">
                <Image
                  src="/logo/neatify-agam-logo.png"
                  alt="NEATIFY AGAM Emblem"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-heading font-bold text-lg sm:text-xl tracking-wider text-[var(--gold)] leading-none">
                  {BRAND.name}
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-[var(--mute)] font-bold mt-0.5">
                  Chennai • 24/7
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 text-xs font-bold tracking-wide text-[var(--ink)]">
              {primaryLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[var(--gold)] transition-colors py-1 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-[var(--gold)] hover:after:w-full after:transition-all whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Navigation for Large (1024-1279px) */}
            <nav className="hidden lg:flex xl:hidden items-center gap-4 text-xs font-bold text-[var(--ink)]">
              {primaryLinks.slice(0, 6).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[var(--gold)] transition-colors py-1 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right CTAs, Direct Phone, & Theme Toggle */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-full border border-[var(--line)] text-[var(--mute)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors cursor-pointer"
              >
                {mounted && isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>

              <a
                href={BRAND.telLink}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[var(--ink)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors py-1.5 px-3 rounded-full border border-[var(--line)] bg-[var(--bg)]/50"
              >
                <Phone className="w-3 h-3 text-[var(--gold)]" />
                <span className="whitespace-nowrap">+91 9962 9171 47</span>
              </a>

              <WhatsAppButton size="sm" text="Get Quote" className="shadow-xs" />
            </div>

            {/* Mobile Menu & Theme Controls */}
            <div className="flex items-center gap-1.5 sm:hidden">
              <button
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="p-1.5 rounded-full border border-[var(--line)] text-[var(--mute)] hover:text-[var(--gold)] transition-colors"
              >
                {mounted && isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-1.5 rounded-lg border border-[var(--line)] text-[var(--ink)] hover:text-[var(--gold)] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Panel */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-[var(--card)] border-l border-[var(--line)] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[var(--line)]">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden bg-[var(--green)]">
                    <Image
                      src="/logo/neatify-agam-logo.png"
                      alt="Logo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="font-serif-heading font-bold text-xl text-[var(--gold)]">
                    {BRAND.name}
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md text-[var(--mute)] hover:text-[var(--ink)]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex flex-col gap-4 mt-6">
                {NAVIGATION_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-[var(--ink)] hover:text-[var(--gold)] transition-colors py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-[var(--line)] flex flex-col gap-3">
              <a
                href={BRAND.telLink}
                className="flex items-center justify-center gap-2 py-3 rounded-full border border-[var(--line)] text-sm font-bold text-[var(--ink)] hover:border-[var(--gold)] transition-colors"
              >
                <Phone className="w-4 h-4 text-[var(--gold)]" />
                <span>Call Prakash Bro: +91 9962 9171 47</span>
              </a>
              <WhatsAppButton
                size="md"
                text="WhatsApp Quote Now"
                className="w-full"
              />
              <p className="text-[11px] text-center text-[var(--mute)] mt-1">
                Open 24/7 All Over Chennai • Small Tasks From ₹99
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
