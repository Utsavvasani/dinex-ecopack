import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";

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
  description:
    "Premium eco-friendly packaging solutions. High-quality sugarcane bagasse tableware, compostable plates, bowls, and meal boxes for a sustainable future.",
  keywords: [
    "DineX Ecopack",
    "Sugarcane Bagasse",
    "Eco-friendly Tableware",
    "Compostable Packaging",
    "Sustainable Tableware UAE",
    "Biodegradable Plates",
    "Zero Waste Packaging",
    "Sugarcane Fiber Products",
    "Environmental Friendly Tableware",
    "DineX Ecopack UAE",
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
