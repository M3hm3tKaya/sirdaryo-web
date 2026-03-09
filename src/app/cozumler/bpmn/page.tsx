import type { Metadata } from "next";
import { PageCursorColor } from "@/components/animations/PageCursorColor";
import { BPMNHero } from "./_components/BPMNHero";
import { BPMNFlowChart } from "./_components/BPMNFlowChart";
import { BPMNFeatures } from "./_components/BPMNFeatures";
import { BPMNProcess } from "./_components/BPMNProcess";
import { BPMNMetrics } from "./_components/BPMNMetrics";
import { BPMNCTA } from "./_components/BPMNCTA";

export const metadata: Metadata = {
  title: "BPMN İş Süreç Yönetimi | Sirdaryo",
  description: "BPMN 2.0 standartlarında iş süreç modelleme, analiz ve optimizasyon. Sirdaryo ile süreçlerinizi dijitalleştirin.",
};

export default function BPMNPage() {
  return (
    <PageCursorColor color="#06B6D4">
      <div className="relative bg-[#0A1628] text-[#ECFEFF]">
        <BPMNHero />
        <BPMNFlowChart />
        <BPMNFeatures />
        <BPMNProcess />
        <BPMNMetrics />
        <BPMNCTA />
      </div>
    </PageCursorColor>
  );
}
