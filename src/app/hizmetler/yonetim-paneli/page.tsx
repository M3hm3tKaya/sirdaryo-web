import type { Metadata } from "next";
import { PageCursorColor } from "@/components/animations/PageCursorColor";
import { PanelHero } from "./_components/PanelHero";
import { PanelShowcase } from "./_components/PanelShowcase";
import { PanelFeatures } from "./_components/PanelFeatures";
import { PanelProcess } from "./_components/PanelProcess";
import { PanelMetrics } from "./_components/PanelMetrics";
import { PanelCTA } from "./_components/PanelCTA";

export const metadata: Metadata = {
  title: "Dashboard Geliştirme | Sirdaryo",
  description: "Özel tasarım admin panel ve dashboard geliştirme. KPI takibi, raporlama ve veri görselleştirme çözümleri.",
};

export default function YonetimPaneliPage() {
  return (
    <PageCursorColor color="#F59E0B">
      <div className="relative bg-[#1A150A] text-[#FFFBEB]">
        <PanelHero />
        <PanelShowcase />
        <PanelFeatures />
        <PanelProcess />
        <PanelMetrics />
        <PanelCTA />
      </div>
    </PageCursorColor>
  );
}
