import type { Metadata } from "next";
import { PageCursorColor } from "@/components/animations/PageCursorColor";
import { RPAHero } from "./_components/RPAHero";
import { RPAProcess } from "./_components/RPAProcess";
import { RPAFeatures } from "./_components/RPAFeatures";
import { RPAMetrics } from "./_components/RPAMetrics";
import { RPACTA } from "./_components/RPACTA";
import { RPABackground } from "./_components/RPABackground";

export const metadata: Metadata = {
  title: "RPA Robotik Süreç Otomasyonu | Sirdaryo",
  description: "Sirdaryo RPA çözümleri ile iş süreçlerinizi otomatize edin. Hatasız, hızlı ve maliyet etkin robotik süreç otomasyonu.",
};

export default function RPAPage() {
  return (
    <PageCursorColor color="#8B5CF6">
      <div className="relative bg-[#0F0A1E] text-[#F5F3FF]">
        <RPABackground />
        <RPAHero />
        <RPAProcess />
        <RPAFeatures />
        <RPAMetrics />
        <RPACTA />
      </div>
    </PageCursorColor>
  );
}
