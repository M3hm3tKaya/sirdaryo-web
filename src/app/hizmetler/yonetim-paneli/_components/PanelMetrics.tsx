"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Counter } from "@/components/animations/Counter";
import { ArrowUp } from "lucide-react";

const metrics = [
  { value: "100+", label: "Teslim Edilen Panel", trend: "+12" },
  { value: "%99", label: "Uptime Oranı", trend: "+0.2" },
  { value: "50+", label: "Aktif Dashboard", trend: "+8" },
  { value: "200+", label: "Günlük Kullanıcı", trend: "+35" },
];

export function PanelMetrics() {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Rakamlarla Yönetim Paneli
          </h2>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <ScrollReveal key={m.label} animation="scale" delay={i * 0.1}>
              <div className="rounded-2xl border border-[#F59E0B]/15 bg-white p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1 text-xs text-green-500">
                    <ArrowUp className="h-3 w-3" /> {m.trend}
                  </div>
                  {/* Mini sparkline placeholder */}
                  <svg width="50" height="20" viewBox="0 0 50 20">
                    <polyline
                      points="0,15 8,12 16,14 24,8 32,10 40,5 50,3"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <circle cx="50" cy="3" r="2.5" fill="#F59E0B" />
                  </svg>
                </div>
                <Counter
                  value={m.value}
                  label={m.label}
                  valueClassName="text-[#D97706]"
                  labelClassName="text-black/50"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
