import { HeroSection } from "@/components/pages/landing/HeroSection";
import { KeywordScroll } from "@/components/pages/landing/KeywordScroll";
import { ProductPreviewSection } from "@/components/pages/landing/ProductPreviewSection";
import { StatsSection } from "@/components/pages/landing/StatsSection";
import { WhyChooseUsSection } from "@/components/pages/landing/WhyChooseUsSection";
import { ProcessLifecycleSection } from "@/components/pages/landing/ProcessLifecycleSection";
import { FloatingSection } from "@/components/pages/landing/FloatingSection";
import { BagasseVsPlasticSection } from "@/components/pages/landing/BagasseVsPlasticSection";

export const metadata = {
  title: "DineX Ecopack | Bagasse Tableware & Sugarcane Bagasse Manufacturer",
  description:
    "Explore the widest range of high-quality sugarcane bagasse plates, bowls, and meal boxes. 100% compostable and sustainable packaging solutions by DineX Ecopack.",
  keywords: [
    "bagasse tableware manufacturer",
    "sugarcane bagasse manufacturer",
    "compostable tableware manufacturer",
    "biodegradable packaging manufacturer",
    "eco friendly packaging manufacturer",
    "bagasse products manufacturer",
    "bagasse plates manufacturer",
    "bulk bagasse manufacturer",
    "private label bagasse manufacturer",
    "UK bagasse tableware manufacturer",
    "Indian bagasse tableware manufacturer export UK",
    "bulk bagasse tableware manufacturer",
    "OEM bagasse tableware manufacturer",
    "food service packaging manufacturer bagasse",
    "restaurant packaging manufacturer UK",
    "certified bagasse tableware manufacturer",
    "FDA approved bagasse manufacturer",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12 my-12 min-h-screen">
      <HeroSection />
      <KeywordScroll />
      <FloatingSection />
      <StatsSection />
      <ProductPreviewSection />
      <WhyChooseUsSection />
      <BagasseVsPlasticSection />
      <ProcessLifecycleSection />
    </div>
  );
}
