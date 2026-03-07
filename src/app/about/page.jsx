import { AboutHero } from "@/components/pages/about/AboutHero";
import { OurStory } from "@/components/pages/about/OurStory";
import { VisionMission } from "@/components/pages/about/VisionMission";
import { OurGoals } from "@/components/pages/about/OurGoals";
import { OurCommitment } from "@/components/pages/about/OurCommitment";
import { ClosingQuote } from "@/components/pages/about/ClosingQuote";

export const metadata = {
  title: "About Us | Dinex Ecopack",
  description:
    "Learn about Dinex Ecopack — our mission to replace plastic with sustainable, biodegradable sugarcane bagasse tableware for a cleaner planet.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <OurStory />
      <VisionMission />
      <OurGoals />
      <OurCommitment />
      <ClosingQuote />
    </div>
  );
}
