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
    "Bagasse Tableware Manufacturer",
    "Bagasse Tableware Exporter",
    "Sugarcane Bagasse Tableware",
    "Sugarcane Tableware Manufacturer",
    "Compostable Tableware Manufacturer",
    "Biodegradable Tableware Supplier",
    "Eco Friendly Tableware",
    "Sustainable Tableware Supplier",
    "Kraft Paper Salad Bowl Manufacturer",
    "Kraft Paper Bowl Supplier",
    "Kraft Paper Bowl Exporter",
    "Paper Salad Bowl Manufacturer",
    "Food Packaging Manufacturer",
    "Food Packaging Exporter",
    "Sustainable Packaging Manufacturer",
    "Eco Packaging Manufacturer",
    "Compostable Packaging Supplier",
    "Biodegradable Packaging Exporter",
    "Private Label Packaging Manufacturer",
    "OEM Packaging Manufacturer",
    "Food Packaging Manufacturer India",
    "Bagasse Tableware Manufacturer India",
    "Kraft Bowl Manufacturer India",
    "Paper Bowl Manufacturer India",
    "Packaging Exporter India",
    "UK Food Packaging Supplier",
    "Europe Food Packaging Manufacturer",
    "Food Packaging Supplier USA",
    "Middle East Packaging Supplier",
    "Sustainable Packaging Company",
    "Green Packaging Solutions",
    "Zero Plastic Packaging",
    "Compostable Packaging Products",
    "Biodegradable Food Containers",
    "Circular Economy Packaging",
    "Plastic Free Food Packaging",
    "Renewable Packaging Solutions",
    "Environment Friendly Packaging",
    "Future Of Food Packaging",
    "Restaurant Packaging Manufacturer",
    "Hotel Packaging Supplier",
    "Catering Packaging Solutions",
    "Cloud Kitchen Packaging",
    "QSR Packaging Manufacturer",
    "Food Delivery Packaging Supplier",
    "UK Bagasse Tableware Manufacturer",
    "Indian Bagasse Tableware Manufacturer Export UK",
    "Global Packaging Manufacturer",
    "International Packaging Supplier",
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
