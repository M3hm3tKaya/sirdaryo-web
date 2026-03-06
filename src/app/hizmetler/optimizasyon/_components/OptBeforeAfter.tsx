"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

export function OptBeforeAfter() {
  return (
    <section className="relative z-10 py-24 lg:py-32 bg-[#132013]">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Dönüşümün Etkisi
          </h2>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          {/* Before */}
          <ScrollReveal animation="slide-left">
            <div className="rounded-2xl border border-red-500/20 bg-[#1A0A0A]/50 p-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
                <AlertTriangle className="h-4 w-4" /> ÖNCESİ
              </div>
              <div className="space-y-4">
                {[
                  { label: "Süreç Süresi", value: "12 saat", trend: "down" },
                  { label: "Hata Oranı", value: "%15", trend: "down" },
                  { label: "Maliyet", value: "₺250K/ay", trend: "down" },
                  { label: "Çalışan Memnuniyeti", value: "%45", trend: "down" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-lg bg-red-500/5 p-3">
                    <span className="text-sm text-[#F0FDF4]/60">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-red-400">{item.value}</span>
                      <TrendingDown className="h-4 w-4 text-red-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* After */}
          <ScrollReveal animation="slide-right">
            <div className="rounded-2xl border border-[#84CC16]/20 bg-[#0A1A0A]/50 p-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#84CC16]/10 px-4 py-1.5 text-sm font-medium text-[#A3E635]">
                <CheckCircle className="h-4 w-4" /> SONRASI
              </div>
              <div className="space-y-4">
                {[
                  { label: "Süreç Süresi", value: "3 saat", trend: "up" },
                  { label: "Hata Oranı", value: "%2", trend: "up" },
                  { label: "Maliyet", value: "₺180K/ay", trend: "up" },
                  { label: "Çalışan Memnuniyeti", value: "%89", trend: "up" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-lg bg-[#84CC16]/5 p-3">
                    <span className="text-sm text-[#F0FDF4]/60">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-[#A3E635]">{item.value}</span>
                      <TrendingUp className="h-4 w-4 text-[#A3E635]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
