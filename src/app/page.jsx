import { HeroSection } from "@/components/pages/landing/HeroSection";
import { GreetingsSection } from "@/components/pages/landing/GreetingsSection";
import { MissionSection } from "@/components/pages/landing/MissionSection";
import { ProductPreviewSection } from "@/components/pages/landing/ProductPreviewSection";
import { StatsSection } from "@/components/pages/landing/StatsSection";
import { WhyChooseUsSection } from "@/components/pages/landing/WhyChooseUsSection";
import { ProcessLifecycleSection } from "@/components/pages/landing/ProcessLifecycleSection";
import { FloatingSection } from "@/components/pages/landing/FloatingSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 my-12 min-h-screen">
      <HeroSection />
      <FloatingSection />
      <GreetingsSection />
      <StatsSection />
      <ProductPreviewSection />
      <MissionSection />
      <WhyChooseUsSection />
      <ProcessLifecycleSection />
    </div>
  );
}
