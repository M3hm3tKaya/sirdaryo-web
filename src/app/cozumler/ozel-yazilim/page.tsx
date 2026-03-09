import type { Metadata } from "next";
import { PageCursorColor } from "@/components/animations/PageCursorColor";
import { CodeHero } from "./_components/CodeHero";
import { CodeTechStack } from "./_components/CodeTechStack";
import { CodeFeatures } from "./_components/CodeFeatures";
import { CodeProcess } from "./_components/CodeProcess";
import { CodeMetrics } from "./_components/CodeMetrics";
import { CodeCTA } from "./_components/CodeCTA";

export const metadata: Metadata = {
  title: "Özel Yazılım Geliştirme | Sirdaryo",
  description: "İhtiyaçlarınıza özel yazılım çözümleri. Modern teknolojilerle ölçeklenebilir, güvenli ve performanslı uygulamalar geliştiriyoruz.",
};

export default function OzelYazilimPage() {
  return (
    <PageCursorColor color="#FF3B30">
      <div className="relative bg-[#1A0A0A] text-[#FEF2F2]">
        <CodeHero />
        <CodeTechStack />
        <CodeFeatures />
        <CodeProcess />
        <CodeMetrics />
        <CodeCTA />
      </div>
    </PageCursorColor>
  );
}
