"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function OptCTA() {
  return (
    <section className="relative z-10 py-24 lg:py-32" style={{ background: "linear-gradient(135deg, #65A30D 0%, #84CC16 100%)" }}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="font-display text-3xl font-bold text-[#0A1A0A] sm:text-4xl lg:text-5xl">
              Verimliliğinizi Artırmaya Başlayın
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="mt-4 text-lg text-[#0A1A0A]/70">
              Süreçlerinizi analiz edelim, iyileştirme fırsatlarını birlikte keşfedelim.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={0.3}>
            <Link href="/iletisim" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0A1A0A] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#0A1A0A]">
              İletişime Geçin
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
