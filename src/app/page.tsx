import Solutions from "@/components/Solutions";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import CostEffective from "@/components/CostEffective";
import GenerativeCards from "@/components/GenerativeCards";
import Resources from "@/components/Resources";
import FAQ from "@/components/Faq";
import ScrollingTags from "@/components/ScrollingTags";
import Gallery from "@/components/Gallery";
import Strategy from "@/components/Strategy";
import Blog from "@/components/Blog";
import PinnedSections from "@/components/common/PinnedSections";
import States from "@/components/States";
import ServicesComp from "@/components/ServicesComp";
import SectionBackground from "@/components/common/SectionBackground/SectionBackground";

// HeroSlider component removed because the module was missing.
// If you add the component back at '@/components/HeroSlider', re-import it here.

export default function Home() {
  return (
    <>
      <Hero />
      <Solutions />
      <PinnedSections>
        <Features />
        <ServicesComp />
        <Philosophy />
        <CostEffective />
        <GenerativeCards />
        <States />
        <Resources />
      </PinnedSections>
      <FAQ />
      <ScrollingTags />
      <PinnedSections>
        <Gallery />
        <Strategy />
        <Blog />
      </PinnedSections>
    </>
  );
}
