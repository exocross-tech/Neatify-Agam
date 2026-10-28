import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";
import { TARGET_SERVICE_AREAS } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neatifyagam.in"),
  title: "NEATIFY AGAM | Small Home Jobs, Cleaning & Organisation in Chennai",
  description:
    "Make It Neat. Make It Home. Professional cleaning, wardrobe organisation, overhead water tank cleaning, turnkey new home setup, and daily household help in Mogappair, Anna Nagar, Ambattur, Nolambur, and all over Chennai. Small tasks from ₹99. Inspect together, then pay.",
  keywords: [
    "NEATIFY AGAM",
    "NEATIFY AGAM Chennai",
    "Small Home Jobs Chennai",
    "Small Household Jobs Chennai",
    "Small Cleaning Jobs Chennai",
    "Everyday Home Help Chennai",
    "Overhead Water Tank Cleaning Chennai",
    "Concrete Water Tank Cleaning Chennai",
    "Plastic Water Tank Cleaning Chennai",
    "Water Tank Cleaning Mogappair",
    "Water Tank Cleaning Anna Nagar",
    "Water Tank Cleaning Ambattur",
    "Water Tank Cleaning Nolambur",
    "Water Tank Cleaning Panneer Nagar",
    "Wardrobe Organising Mogappair",
    "Wardrobe Organising Panneer Nagar",
    "Wardrobe Organising Anna Nagar",
    "Home Cleaning Services Mogappair",
    "Home Cleaning Services Anna Nagar",
    "Home Cleaning Services Ambattur",
    "Home Cleaning Services Nolambur",
    "Home Cleaning Services Thirumangalam",
    "New Home Setup Services Mogappair",
    "New Home Setup Services Anna Nagar",
    "New Apartment Setup Chennai",
    "Warehouse Cleaning Ambattur",
    "Elderly Accompaniment Services Chennai",
    "Clothes Folding Services Chennai",
    "Pooja Room Cleaning Chennai",
    "Cleaning Services Near Me",
    "Home Assistance Near Me",
    "Wardrobe Organising Near Me",
    "Water Tank Cleaning Near Me",
    "Prakash Bro Neatify",
  ],
  authors: [{ name: "NEATIFY AGAM" }],
  icons: {
    icon: "/logo/neatify-agam-logo.png",
    apple: "/logo/neatify-agam-logo.png",
  },
  openGraph: {
    title: "NEATIFY AGAM — Small Home Jobs, Cleaning & Organisation in Chennai",
    description:
      "CLEAN • ORGANISE • SETUP • ASSIST • CARE in Mogappair, Anna Nagar, Ambattur, Nolambur & across Chennai. Small tasks from ₹99, pay after joint inspection.",
    url: "https://neatifyagam.in",
    siteName: "NEATIFY AGAM",
    images: [
      {
        url: "/logo/neatify-agam-logo.png",
        width: 600,
        height: 600,
        alt: "NEATIFY AGAM Emblem",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f3d27",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "NEATIFY AGAM",
    "description":
      "Professional small home jobs, overhead water tank cleaning, wardrobe organisation, turnkey moving setups, and household assistance in Chennai.",
    "telephone": "+919962917147",
    "priceRange": "₹99 - ₹4999",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN",
    },
    "areaServed": TARGET_SERVICE_AREAS.map((a) => a.name),
    "serviceType": [
      "Small Home Jobs Chennai",
      "Water Tank Cleaning Chennai",
      "Wardrobe Organisation Chennai",
      "New Home Setup Chennai",
      "House Cleaning Services Chennai",
      "Senior Citizen Companion Chennai",
      "Errand & Household Assistance Chennai",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${lato.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('neatify_theme');
                  if (storedTheme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--ink)] antialiased selection:bg-[var(--gold)] selection:text-[var(--green)]">
        {children}
      </body>
    </html>
  );
}
