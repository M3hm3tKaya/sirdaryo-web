import type { Metadata } from "next";
import { PageCursorColor } from "@/components/animations/PageCursorColor";
import { OptHero } from "./_components/OptHero";
import { OptBeforeAfter } from "./_components/OptBeforeAfter";
import { OptFeatures } from "./_components/OptFeatures";
import { OptProcess } from "./_components/OptProcess";
import { OptMetrics } from "./_components/OptMetrics";
import { OptCTA } from "./_components/OptCTA";

export const metadata: Metadata = {
  title: "Süreç Optimizasyonu | Sirdaryo",
  description: "Performans analizi ve süreç optimizasyonu ile işletmenizi bir üst seviyeye taşıyın.",
};

export default function OptimizasyonPage() {
  return (
    <PageCursorColor color="#84CC16">
      <div className="relative bg-[#0A1A0A] text-[#F0FDF4]">
        <OptHero />
        <OptBeforeAfter />
        <OptFeatures />
        <OptProcess />
        <OptMetrics />
        <OptCTA />
      </div>
    </PageCursorColor>
  );
}
