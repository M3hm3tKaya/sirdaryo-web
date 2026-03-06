"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function PanelCTA() {
  return (
    <section className="relative z-10 py-24 lg:py-32" style={{ background: "linear-gradient(135deg, #D97706 0%, #F59E0B 100%)" }}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Kendi Dashboard&apos;unuzu Oluşturun
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="mt-4 text-lg text-white/70">
              İhtiyaçlarınıza özel dashboard tasarlayalım. İlk görüşme ücretsizdir.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={0.3}>
            <Link href="/iletisim" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#D97706] transition-all duration-300 hover:bg-[#1A150A] hover:text-white hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              İletişime Geçin
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
