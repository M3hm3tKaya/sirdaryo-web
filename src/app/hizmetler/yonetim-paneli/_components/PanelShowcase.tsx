"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { BarChart3, PieChart, Activity, List, TrendingUp, Clock } from "lucide-react";

const widgets = [
  { icon: BarChart3, title: "Gelir Analizi", desc: "Aylık gelir trendleri ve hedef karşılaştırma", span: "col-span-2" },
  { icon: PieChart, title: "Dağılım", desc: "Kategori bazlı dağılım grafiği", span: "" },
  { icon: Activity, title: "Canlı Veri", desc: "Gerçek zamanlı performans", span: "" },
  { icon: List, title: "Görev Listesi", desc: "Aktif görevler ve durumları", span: "" },
  { icon: TrendingUp, title: "Büyüme Trendi", desc: "Yıllık büyüme analizi ve projeksiyon", span: "col-span-2" },
  { icon: Clock, title: "Son İşlemler", desc: "En son gerçekleşen aktiviteler", span: "" },
];

export function PanelShowcase() {
  return (
    <section className="relative z-10 py-24 lg:py-32 bg-[#231C10]">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Dashboard Widget&apos;ları
          </h2>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {widgets.map((w, i) => {
            const Icon = w.icon;
            return (
              <ScrollReveal key={w.title} animation="fade-up" delay={i * 0.08}>
                <div className={`group rounded-xl border border-[#F59E0B]/10 bg-[#1A150A] p-5 transition-all duration-300 hover:border-[#F59E0B]/30 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(245,158,11,0.08)] ${w.span}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-[#F59E0B]/10 p-1.5">
                      <Icon className="h-5 w-5 text-[#FBBF24]" />
                    </div>
                    <h3 className="text-sm font-display font-bold">{w.title}</h3>
                  </div>
                  <p className="text-xs text-[#FFFBEB]/40">{w.desc}</p>
                  {/* Fake chart placeholder */}
                  <div className="mt-3 flex items-end gap-1 h-8">
                    {Array.from({ length: 8 }).map((_, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-t bg-gradient-to-t from-[#D97706] to-[#FBBF24]"
                        style={{ height: `${30 + Math.random() * 70}%`, opacity: 0.3 + Math.random() * 0.5 }}
                      />
                    ))}
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
