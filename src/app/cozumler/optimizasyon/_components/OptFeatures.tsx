"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BarChart3, Target, TrendingUp, Zap, LineChart, Settings } from "lucide-react";

const features = [
  { icon: BarChart3, title: "Performans Analizi", desc: "Detaylı KPI takibi ve raporlama. Süreçlerinizin her adımını ölçün ve değerlendirin.", tall: true },
  { icon: Target, title: "Darboğaz Tespiti", desc: "Süreç tıkanıklıklarının otomatik algılanması" },
  { icon: TrendingUp, title: "Maliyet Optimizasyonu", desc: "Gereksiz harcamaların eliminasyonu. Veri odaklı bütçe optimizasyonu.", tall: true },
  { icon: Zap, title: "Hız Artışı", desc: "Süreç tamamlanma sürelerinin kısaltılması" },
  { icon: LineChart, title: "Tahminleme", desc: "Yapay zekâ ile gelecek performans tahminleri" },
  { icon: Settings, title: "Sürekli İyileştirme", desc: "Kaizen metodolojisi ile devamlı gelişim" },
];

export function OptFeatures() {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Optimizasyon Araçlarımız
          </h2>
        </ScrollReveal>

        {/* Masonry-like grid */}
        <div className="mx-auto max-w-5xl columns-1 gap-4 sm:columns-2 lg:columns-3">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <ScrollReveal key={feat.title} animation="fade-up" delay={i * 0.08}>
                <div className={`mb-4 break-inside-avoid rounded-2xl border border-[#84CC16]/15 bg-[#132013] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#84CC16]/40 hover:shadow-[0_0_20px_rgba(132,204,22,0.1)] ${feat.tall ? "min-h-[200px]" : ""}`}>
                  <div className="mb-3 inline-flex rounded-lg bg-[#84CC16]/10 p-2">
                    <Icon className="h-6 w-6 text-[#84CC16]" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{feat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#F0FDF4]/50">{feat.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
