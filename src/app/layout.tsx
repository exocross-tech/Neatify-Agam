import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

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
  title: "NEATIFY AGAM | Premium Home Care, Cleaning & Organisation in Chennai",
  description:
    "Make It Neat. Make It Home. Professional cleaning, wardrobe organisation, turnkey moving setup, senior companion care, and errands all over Chennai. Transparent pricing from ₹99. Inspect together, then pay.",
  keywords: [
    "Neatify Agam",
    "Home organisation Chennai",
    "House cleaning services Chennai",
    "Bathroom cleaning Chennai",
    "New home ready home Chennai",
    "Wardrobe organiser Chennai",
    "Senior citizen companion Chennai",
    "Prakash Bro Neatify",
  ],
  authors: [{ name: "NEATIFY AGAM" }],
  icons: {
    icon: "/logo/neatify-agam-logo.png",
    apple: "/logo/neatify-agam-logo.png",
  },
  openGraph: {
    title: "NEATIFY AGAM — Make It Neat. Make It Home.",
    description:
      "CLEAN • ORGANISE • SETUP • ASSIST • CARE across Chennai. Upfront quote, small tasks from ₹99, pay after inspection.",
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
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${lato.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('neatify_theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
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
