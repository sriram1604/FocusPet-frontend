import { HeroSection } from "@/components/HeroSection";
import { PetShowcase } from "@/components/PetShowcase";

export default function Home() {
  return (
    <>
      {/* Hero Section with Headline & Visual Desktop Scene */}
      <HeroSection />

      {/* Choose Your Companion Section with Interactive Functionality Popups */}
      <PetShowcase />
    </>
  );
}
