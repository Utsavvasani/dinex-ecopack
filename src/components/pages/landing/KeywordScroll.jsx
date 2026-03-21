"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";

const keywords = [
  "Bagasse Tableware",
  "Sugarcane Bagasse",
  "Compostable",
  "Biodegradable",
  "Eco-Friendly",
  "Bulk Manufacturer",
  "Private Label",
  "UK Supplier",
  "Indian Manufacturer",
  "Export Quality",
  "FDA Approved",
  "ISO Certified",
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
