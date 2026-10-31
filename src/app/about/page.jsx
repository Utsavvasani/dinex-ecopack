import { AboutHero } from "@/components/pages/about/AboutHero";
import { OurStory } from "@/components/pages/about/OurStory";
import { FounderMessage } from "@/components/pages/about/FounderMessage";
import { VisionMission } from "@/components/pages/about/VisionMission";
import { OurGoals } from "@/components/pages/about/OurGoals";
import { OurCommitment } from "@/components/pages/about/OurCommitment";
import { ClosingQuote } from "@/components/pages/about/ClosingQuote";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "About Us | DineX Ecopack's Mission for a Sustainable Planet",
  description:
    "Learn about DineX Ecopack's journey, our commitment to zero-waste manufacturing, and how we're leading the shift to sustainable paper bowl packaging globally.",
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
