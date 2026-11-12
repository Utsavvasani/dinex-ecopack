import { AboutHero } from "@/components/pages/about/AboutHero";
import { OurStory } from "@/components/pages/about/OurStory";
import { FounderMessage } from "@/components/pages/about/FounderMessage";
import { VisionMission } from "@/components/pages/about/VisionMission";
import { OurGoals } from "@/components/pages/about/OurGoals";
import { OurCommitment } from "@/components/pages/about/OurCommitment";
import { ClosingQuote } from "@/components/pages/about/ClosingQuote";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "About DineX Ecopack | Paper Bowl Manufacturer in Surat, Gujarat",
  description:
    "Learn about DineX Ecopack — premier paper bowl manufacturer based in Surat, Gujarat with an international sales office in London, UK. Supplying certified eco-friendly paper packaging to global foodservice brands.",
  keywords: [
    "paper bowl manufacturer Gujarat",
    "paper bowl manufacturer Surat",
    "paper bowl factory India",
    "paper bowl manufacturing company India",
    "Indian paper bowl manufacturer",
    "food packaging exporter India",
    "paper bowl supplier UK",
    "kraft paper bowl manufacturer",
    "sustainable packaging company",
    "HORECA packaging supplier Gujarat",
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <JsonLd 
        type="breadcrumb" 
        data={{
          links: [
            { name: "Home", url: "/" },
            { name: "About Us", url: "/about" }
          ]
        }} 
      />
      <AboutHero />
      <OurStory />
      <FounderMessage />
      <VisionMission />
      <OurGoals />
      <OurCommitment />
      <ClosingQuote />
    </div>
  );
}
