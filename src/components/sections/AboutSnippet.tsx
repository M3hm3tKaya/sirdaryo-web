"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Counter } from "@/components/animations/Counter";
import { useCursor } from "@/lib/CursorContext";

const metrics = [
  { value: "12+", label: "Yıllık Deneyim", valueColor: "text-brand-coral", borderColor: "border-t-brand-coral" },
  { value: "150+", label: "Tamamlanan Proje", valueColor: "text-brand-violet", borderColor: "border-t-brand-violet" },
  { value: "50+", label: "Mutlu Müşteri", valueColor: "text-brand-cyan", borderColor: "border-t-brand-cyan" },
  { value: "30+", label: "Uzman Kadro", valueColor: "text-brand-lime", borderColor: "border-t-brand-lime" },
];

export function AboutSnippet() {
  const { setColor } = useCursor();

  return (
    <section
      className="bg-brand-off-white py-24 lg:py-32"
      onMouseEnter={() => setColor("#84CC16")}
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <TextReveal
              text="Teknolojiyi İş Değerine Dönüştürüyoruz"
              as="h2"
              className="font-display text-3xl font-bold text-brand-black sm:text-4xl lg:text-5xl"
            />
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-brand-black/60">
                Sirdaryo olarak, işletmelerin dijital dönüşüm yolculuğunda güçlü
                bir partner olmayı hedefliyoruz. RPA, BPMN, süreç optimizasyonu
                ve özel yazılım çözümleri ile süreçlerinizi hızlandırır,
                maliyetlerinizi düşürür ve rekabet gücünüzü artırırız.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.3}>
              <p className="mt-4 text-lg leading-relaxed text-brand-black/60">
                İstanbul merkezli ekibimiz, sektörel deneyimi ve teknik
                uzmanlığı ile projenizi başından sonuna kadar yönetir.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.4}>
              <Link
                href="/hakkimizda"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-black px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-brand-coral hover:shadow-[0_0_30px_rgba(255,59,48,0.3)]"
              >
                Daha Fazlası
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, i) => (
              <ScrollReveal key={metric.label} animation="scale" delay={i * 0.1}>
                <div className={`rounded-2xl border border-brand-black/5 border-t-[3px] ${metric.borderColor} bg-white p-6 text-center shadow-sm`}>
                  <Counter
                    value={metric.value}
                    label={metric.label}
                    valueClassName={metric.valueColor}
                    labelClassName="text-brand-black/50"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
