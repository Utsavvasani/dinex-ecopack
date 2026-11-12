import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import { SEO_KEYWORDS } from "@/lib/seoKeywords";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "DineX Ecopack | Paper Salad Bowl Manufacturer & Food Packaging Exporter",
    template: "%s | DineX Ecopack",
  },
  description:
    "Leading paper salad bowl manufacturer in Gujarat, India. Wholesale kraft paper bowls, white paper salad bowls, custom printed bowls with PET lids for restaurants, cloud kitchens & HORECA worldwide.",
  keywords: [
    "DineX Ecopack",
    ...SEO_KEYWORDS,
  ],
  alternates: {
    canonical: "https://dinexecopack.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "DineX Ecopack",
    description: "Premium eco-friendly packaging solutions",
    url: "https://dinexecopack.com",
    siteName: "DineX Ecopack",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "DineX Ecopack Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <JsonLd type="organization" />
        <JsonLd type="website" />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
