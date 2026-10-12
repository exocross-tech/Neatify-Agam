import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { CoreServices } from "@/components/sections/CoreServices";
import { Sectors } from "@/components/sections/Sectors";
import { ServiceCatalogue } from "@/components/sections/ServiceCatalogue";
import { Pricing } from "@/components/sections/Pricing";
import { HomePackages } from "@/components/sections/HomePackages";
import { MonthlyPlans } from "@/components/sections/MonthlyPlans";
import { Testimonials } from "@/components/sections/Testimonials";
import { Loyalty } from "@/components/sections/Loyalty";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Promises } from "@/components/sections/Promises";
import { Safety } from "@/components/sections/Safety";
import { SocialImpact } from "@/components/sections/SocialImpact";
import { FAQ } from "@/components/sections/FAQ";
import { BookingHighlight } from "@/components/sections/BookingHighlight";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <CoreServices />
        <Sectors />
        <ServiceCatalogue />
        <Pricing />
        <HomePackages />
        <MonthlyPlans />
        <Testimonials />
        <Loyalty />
        <HowItWorks />
        <Promises />
        <Safety />
        <SocialImpact />
        <FAQ />
        <BookingHighlight />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
