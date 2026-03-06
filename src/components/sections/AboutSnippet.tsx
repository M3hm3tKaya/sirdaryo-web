"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Counter } from "@/components/animations/Counter";

const metrics = [
  { value: "12+", label: "Yıllık Deneyim" },
  { value: "150+", label: "Tamamlanan Proje" },
  { value: "50+", label: "Mutlu Müşteri" },
  { value: "30+", label: "Uzman Kadro" },
];

export function AboutSnippet() {
  return (
    <section className="bg-brand-off-white py-24 lg:py-32">
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
              <Button href="/hakkimizda" variant="secondary" className="mt-8">
                Daha Fazlası
              </Button>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {metrics.map((metric, i) => (
              <ScrollReveal key={metric.label} animation="scale" delay={i * 0.1}>
                <div className="rounded-2xl border border-brand-black/5 bg-white p-6 text-center shadow-sm">
                  <Counter
                    value={metric.value}
                    label={metric.label}
                    className="[&>div:first-child]:text-brand-black [&>div:last-child]:text-brand-black/50"
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
