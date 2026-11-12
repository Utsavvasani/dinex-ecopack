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
  title: "Paper Salad Bowl Manufacturer & Exporter | Kraft Bowls Wholesale - DineX Ecopack",
  description:
    "DineX Ecopack is a premier paper salad bowl manufacturer in Surat, Gujarat. We manufacture and export 500ml, 750ml, and 1000ml kraft paper bowls, white bowls, custom printed bowls, and PET lids for HORECA, restaurants, and cloud kitchens globally.",
  keywords: [
    "paper salad bowl manufacturer",
    "paper salad bowl supplier",
    "paper salad bowl exporter",
    "paper salad bowls wholesale",
    "disposable paper salad bowls",
    "paper salad bowls with lids",
    "kraft paper bowl manufacturer",
    "kraft paper bowl supplier",
    "kraft paper bowl exporter",
    "kraft paper bowls wholesale",
    "kraft salad bowl manufacturer",
    "disposable kraft paper bowls",
    "kraft paper bowls with lids",
    "white paper bowl manufacturer",
    "white paper bowl supplier",
    "white paper salad bowls",
    "white paper bowls wholesale",
    "custom printed paper bowls",
    "branded paper salad bowls",
    "printed kraft paper bowls",
    "logo printed paper bowls",
    "private label paper bowls",
    "OEM paper bowl manufacturer",
    "paper packaging manufacturer India",
    "paper bowl manufacturer Gujarat",
    "paper bowl manufacturer Surat",
    "disposable food packaging manufacturer India",
    "paper food container exporter India",
    "paper bowl wholesale supplier India",
    "food packaging exporter India",
    "HORECA food packaging supplier",
    "500ml paper salad bowl",
    "750ml paper salad bowl",
    "1000ml paper salad bowl",
    "500ml kraft bowl with lid",
    "750ml kraft bowl with lid",
    "1000ml kraft bowl with lid",
    "paper bowls with PET lids",
    "disposable bowl with transparent lid",
    "paper salad container with clear lid",
    "food packaging containers with lids",
    "restaurant food packaging supplier",
    "takeaway packaging manufacturer",
    "food delivery packaging supplier",
    "cloud kitchen packaging supplier",
    "catering food packaging supplier",
    "QSR packaging supplier",
    "paper bowl supplier UK",
    "kraft paper bowl supplier UK",
    "paper salad bowl wholesale UK",
    "paper food packaging supplier Europe",
    "paper packaging supplier UAE",
    "paper bowl factory direct price",
    "buy kraft paper bowls in bulk",
    "paper bowl supplier for distributors",
    "paper bowl supplier for importers",
    "bulk kraft paper bowls for food delivery",
    "paper packaging manufacturer for HORECA industry",
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
