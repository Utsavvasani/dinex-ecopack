import { HeroSection } from "@/components/pages/landing/HeroSection";
import { KeywordScroll } from "@/components/pages/landing/KeywordScroll";
import { ProductPreviewSection } from "@/components/pages/landing/ProductPreviewSection";
import { StatsSection } from "@/components/pages/landing/StatsSection";
import { WhyChooseUsSection } from "@/components/pages/landing/WhyChooseUsSection";
import { ProcessLifecycleSection } from "@/components/pages/landing/ProcessLifecycleSection";
import { FloatingSection } from "@/components/pages/landing/FloatingSection";
import { BagasseVsPlasticSection } from "@/components/pages/landing/BagasseVsPlasticSection";

export const metadata = {
  title: "Dinex Ecopack | Premium Sugarcane Bagasse Tableware & Packaging",
  description:
    "Explore the widest range of high-quality sugarcane bagasse plates, bowls, and meal boxes. 100% compostable and sustainable packaging solutions by Dinex Ecopack.",
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
