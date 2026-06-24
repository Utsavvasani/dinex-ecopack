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
    "Bagasse Plates Manufacturer",
    "Bagasse Bowls Manufacturer",
    "Bagasse Clamshell Manufacturer",
    "Bagasse Food Containers",
    "Bagasse Meal Trays",
    "Bagasse Packaging Manufacturer",
    "Wholesale Bagasse Tableware",
    "Bulk Bagasse Plates",
    "Private Label Bagasse Tableware",
    "OEM Bagasse Tableware",
    "Custom Bagasse Packaging",
    "Disposable Tableware Manufacturer",
    "Sugarcane Pulp Tableware Manufacturer",
    "Molded Fiber Tableware Manufacturer",
    "Plant Fiber Tableware Supplier",
    "Bagasse Disposable Plates",
    "Bagasse Disposable Bowls",
    "Bagasse Lunch Box Manufacturer",
    "Bagasse Burger Box Manufacturer",
    "Bagasse Takeaway Container",
    "Bagasse Food Tray Supplier",
    "Compostable Food Containers",
    "Eco Friendly Food Containers",
    "Plastic Free Tableware Manufacturer",
    "Natural Fiber Packaging",
    "Kraft Salad Bowl Manufacturer",
    "Disposable Salad Bowl Supplier",
    "Food Grade Paper Bowl",
    "Leak Resistant Paper Bowl",
    "Kraft Bowl with Lid",
    "Paper Bowl with PET Lid",
    "Paper Bowl with PP Lid",
    "Wholesale Paper Bowls",
    "Bulk Salad Bowls",
    "Eco Friendly Paper Bowls",
    "Eco Friendly Food Packaging",
    "Compostable Food Packaging",
    "Biodegradable Food Packaging",
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
