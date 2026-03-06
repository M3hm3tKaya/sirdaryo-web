"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function CodeCTA() {
  return (
    <section className="relative z-10 py-24 lg:py-32" style={{ background: "linear-gradient(135deg, #FF3B30 0%, #FF6B3D 100%)" }}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Projenizi Hayata Geçirelim
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="mt-4 text-lg text-white/70">
              Fikrinizi dinleyelim, birlikte en doğru çözümü bulalım. İlk görüşme ücretsizdir.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={0.3}>
            <Link href="/iletisim" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#FF3B30] transition-all duration-300 hover:bg-[#1A0A0A] hover:text-white hover:shadow-[0_0_30px_rgba(255,59,48,0.4)]">
              Ücretsiz Keşif Görüşmesi
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
