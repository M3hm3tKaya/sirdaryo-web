"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Zap, Shield, Cpu, BarChart3, Settings, Database } from "lucide-react";

const features = [
  { icon: Zap, title: "Hızlı Otomasyon", desc: "Haftalarda değil, günlerde hayata geçen çözümler" },
  { icon: Shield, title: "Hatasız İşlem", desc: "7/24 çalışan robotlarla sıfır hata oranı" },
  { icon: Cpu, title: "Akıllı Robotlar", desc: "Yapay zekâ destekli karar verebilen botlar" },
  { icon: BarChart3, title: "ROI Takibi", desc: "Gerçek zamanlı verimlilik ve tasarruf raporları" },
  { icon: Settings, title: "Kolay Entegrasyon", desc: "Mevcut sistemlerinizle sorunsuz entegrasyon" },
  { icon: Database, title: "Veri İşleme", desc: "Büyük hacimli veri işlemlerini saniyeler içinde tamamlama" },
];

export function RPAFeatures() {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Neden RPA?
          </h2>
        </ScrollReveal>

        {/* Hexagonal grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <ScrollReveal key={feat.title} animation="scale" delay={i * 0.08}>
                <div className="group relative flex flex-col items-center text-center">
                  <div
                    className="flex w-full flex-col items-center justify-center rounded-2xl border border-[#8B5CF6]/20 bg-[#1A1230] px-4 py-8 transition-all duration-300 hover:scale-[1.05] hover:border-[#8B5CF6]/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                    style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", minHeight: "200px" }}
                  >
                    <Icon className="mb-3 h-8 w-8 text-[#8B5CF6]" />
                    <h3 className="text-sm font-display font-bold sm:text-base">{feat.title}</h3>
                    <p className="mt-1 text-xs text-[#F5F3FF]/50 sm:text-sm">{feat.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
