import type { Metadata } from "next";
import { PageCursorColor } from "@/components/animations/PageCursorColor";
import { LowCodeHero } from "./_components/LowCodeHero";
import { EmakinOverview } from "./_components/EmakinOverview";
import { EmakinFeatures } from "./_components/EmakinFeatures";
import { EmakinSectors } from "./_components/EmakinSectors";
import { LowCodeCTA } from "./_components/LowCodeCTA";

export const metadata: Metadata = {
  title: "Low-Code BPM — Emakin | Sirdaryo",
  description: "Emakin low-code BPM platformu ile iş süreçlerinizi kod yazmadan dijitalleştirin. Sürükle-bırak tasarım, iş akışı otomasyonu ve gelişmiş raporlama.",
};

export default function LowCodeBPMPage() {
  return (
    <PageCursorColor color="#F97316">
      <div className="relative bg-[#0F0A05] text-[#FFF7ED]">
        <LowCodeHero />
        <EmakinOverview />
        <EmakinFeatures />
        <EmakinSectors />
        <LowCodeCTA />
      </div>
    </PageCursorColor>
  );
}
