import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { AboutSnippet } from "@/components/sections/AboutSnippet";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceGrid />
      <AboutSnippet />
      <ProcessTimeline />
      <CTABanner />
    </>
  );
}
