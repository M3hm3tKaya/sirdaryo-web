"use client";

import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const steps = [
  { num: 1, title: "Ölçüm", desc: "Mevcut performansın detaylı ölçümü ve baseline oluşturma" },
  { num: 2, title: "Analiz", desc: "Veri madenciliği ile iyileştirme fırsatlarının keşfedilmesi" },
  { num: 3, title: "Uygulama", desc: "Optimizasyon stratejilerinin hayata geçirilmesi" },
  { num: 4, title: "İzleme", desc: "Sonuçların takibi ve iteratif iyileştirme" },
];

export function OptProcess() {
  return (
    <section className="relative z-10 py-24 lg:py-32 bg-[#132013]">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Çalışma Döngümüz
          </h2>
        </ScrollReveal>

        {/* Arc-style layout with semicircle */}
        <div className="relative mx-auto max-w-2xl">
          {/* SVG arc */}
          <svg viewBox="0 0 400 220" className="mx-auto mb-8 w-full max-w-md" fill="none">
            <path d="M 40 200 A 160 160 0 0 1 360 200" stroke="#84CC16" strokeWidth="2" opacity="0.2" />
            {steps.map((_, i) => {
              const angle = Math.PI - (i / (steps.length - 1)) * Math.PI;
              const cx = 200 + 160 * Math.cos(angle);
              const cy = 200 - 160 * Math.sin(angle);
              return (
                <circle key={i} cx={cx} cy={cy} r="8" fill="#84CC16" opacity="0.8">
                  <animate attributeName="r" values="8;11;8" dur="2s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
                </circle>
              );
            })}
          </svg>

          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} animation="scale" delay={i * 0.1}>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#84CC16] font-bold text-black shadow-[0_0_15px_rgba(132,204,22,0.4)]">
                    {step.num}
                  </div>
                  <h3 className="font-display text-base font-bold">{step.title}</h3>
                  <p className="mt-1 text-xs text-[#F0FDF4]/50">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
