import { HeroSection } from "@/components/pages/landing/HeroSection";
import { KeywordScroll } from "@/components/pages/landing/KeywordScroll";
import { ProductPreviewSection } from "@/components/pages/landing/ProductPreviewSection";
import { StatsSection } from "@/components/pages/landing/StatsSection";
import { WhyChooseUsSection } from "@/components/pages/landing/WhyChooseUsSection";
import { ProcessLifecycleSection } from "@/components/pages/landing/ProcessLifecycleSection";
import { FloatingSection } from "@/components/pages/landing/FloatingSection";
import { PaperVsPlasticSection } from "@/components/pages/landing/PaperVsPlasticSection";
import { ExportBenefitsSection } from "@/components/pages/landing/ExportBenefitsSection";

export const metadata = {
  title: "DineX Ecopack | Premium Kraft Paper Salad Bowls & Food Packaging Manufacturer",
  description:
    "Explore our high-quality kraft paper salad bowls, white paper bowls, and custom printed food containers. Sustainable and eco-friendly food packaging solutions by DineX Ecopack.",
  keywords: [
    "Kraft Paper Salad Bowls",
    "Kraft Salad Bowl Manufacturer",
    "Paper Bowl Manufacturer",
    "Disposable Salad Bowl Supplier",
    "Food Grade Paper Bowl",
    "Leak Resistant Paper Bowl",
    "Kraft Bowl with Lid",
    "Paper Bowl with PET Lid",
    "Paper Bowl with PP Lid",
    "Wholesale Paper Bowls",
    "Bulk Salad Bowls",
    "Eco Friendly Paper Bowls",
    "White Paper Bowls",
    "Custom Printed Paper Bowls",
    "Paper Food Containers",
    "Compostable Food Containers",
    "Eco Friendly Food Containers",
    "Plastic Free Tableware Manufacturer",
    "Sustainable Food Packaging",
    "Green Food Packaging",
    "Custom Food Packaging",
    "Printed Food Packaging",
    "Private Label Food Packaging",
    "Green Packaging Manufacturer",
    "Packaging for Restaurants",
    "Packaging for Cafes",
    "Packaging for QSR Chains",
    "Packaging for Food Delivery",
    "Wholesale Food Containers",
    "Bulk Food Packaging",
    "Private Label Packaging",
    "OEM Food Packaging",
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col gap-12 my-12 min-h-screen">
      <HeroSection />
      <KeywordScroll />
      <FloatingSection />
      <StatsSection />
      <ExportBenefitsSection />
      <ProductPreviewSection />
      <WhyChooseUsSection />
      <PaperVsPlasticSection />
      <ProcessLifecycleSection />
    </div>
  );
}
