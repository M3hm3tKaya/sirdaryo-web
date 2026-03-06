"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Workflow, Layers, LineChart, Target, Clock, Shield } from "lucide-react";

const features = [
  { icon: Workflow, title: "Süreç Modelleme", desc: "BPMN 2.0 ile görsel süreç haritalandırma. Tüm iş akışlarınızı standart notasyonla modelleyin.", big: true },
  { icon: LineChart, title: "Performans Analizi", desc: "Süreç darboğazlarının tespiti ve gerçek zamanlı izleme. Veriye dayalı kararlar alın." },
  { icon: Target, title: "Optimizasyon", desc: "Veri odaklı süreç iyileştirme önerileri. Maliyetleri düşürün, kaliteyi artırın." },
  { icon: Clock, title: "Zaman Tasarrufu", desc: "Süreç sürelerinde %40'a varan kısalma. Ekibiniz stratejik işlere odaklansın." },
  { icon: Shield, title: "Uyumluluk", desc: "Yasal ve sektörel standartlara uygunluk. Denetim süreçlerini kolaylaştırın." },
  { icon: Layers, title: "Entegrasyon", desc: "ERP, CRM ve diğer sistemlerle entegrasyon. Mevcut altyapınızla sorunsuz çalışma.", big: true },
];

export function BPMNFeatures() {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-4xl font-bold sm:text-5xl">
            BPMN ile Neler Yapabilirsiniz?
          </h2>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="mx-auto grid max-w-5xl items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <ScrollReveal key={feat.title} animation="fade-up" delay={i * 0.08}>
                <div
                  className={`group relative h-full rounded-2xl border border-[#06B6D4]/15 bg-[#0F2137] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#06B6D4]/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] ${
                    feat.big ? "sm:col-span-1 lg:row-span-2" : ""
                  }`}
                >
                  {/* Blueprint crosshair corners */}
                  <div className="absolute top-2 left-2 h-3 w-3 border-l border-t border-[#06B6D4]/20" />
                  <div className="absolute top-2 right-2 h-3 w-3 border-r border-t border-[#06B6D4]/20" />
                  <div className="absolute bottom-2 left-2 h-3 w-3 border-l border-b border-[#06B6D4]/20" />
                  <div className="absolute bottom-2 right-2 h-3 w-3 border-r border-b border-[#06B6D4]/20" />

                  <div className="rounded-lg bg-[#06B6D4]/10 p-2 inline-flex mb-4">
                    <Icon className={`text-[#06B6D4] ${feat.big ? "h-10 w-10" : "h-8 w-8"}`} />
                  </div>
                  <h3 className="font-display text-xl font-bold">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-[#ECFEFF]/50">
                    {feat.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
