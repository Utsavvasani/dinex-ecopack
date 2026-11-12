"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

const keywords = [
  "Paper Salad Bowl Manufacturer",
  "Kraft Paper Bowls Wholesale",
  "White Paper Salad Bowls",
  "HORECA Food Packaging",
  "Custom Printed Paper Bowls",
  "Paper Bowls with PET Lids",
  "500ml • 750ml • 1000ml",
  "Paper Bowl Manufacturer Surat",
  "Paper Food Container Exporter India",
  "UK & Europe Packaging Supplier",
  "Cloud Kitchen & QSR Packaging",
  "Factory Direct Price",
  "Private Label & OEM Manufacturer",
  "Leak Resistant & Food Grade",
  "FDA & FSC Certified",
];

export function KeywordScroll() {
  return (
    <div className="w-full bg-primary/5 py-4 border-y border-primary/10 overflow-hidden">
      <InfiniteSlider gap={40} speed={40}>
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className="flex items-center gap-4 whitespace-nowrap">
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-primary/80">
              {keyword}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/30" />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
