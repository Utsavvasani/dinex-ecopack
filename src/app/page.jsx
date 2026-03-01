import { HeroSection } from "@/components/pages/landing/HeroSection";
import { MissionSection } from "@/components/pages/landing/MissionSection";
import { FeatureSection } from "@/components/pages/landing/FeatureSection";
import { ProductPreviewSection } from "@/components/pages/landing/ProductPreviewSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <MissionSection />
      <FeatureSection />
      <ProductPreviewSection />
    </div>
  );
}
