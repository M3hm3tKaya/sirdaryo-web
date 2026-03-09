"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function RPACTA() {
  return (
    <section
      className="relative z-10 py-24 lg:py-32"
      style={{ background: "linear-gradient(135deg, #6D28D9 0%, #8B5CF6 100%)" }}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              RPA Çözümümüzü Keşfedin
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="mt-4 text-lg text-white/70">
              İşletmenize özel çözüm için hemen görüşelim. İlk danışmanlık ücretsizdir.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={0.3}>
            <Link
              href="/iletisim"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#6D28D9] transition-all duration-300 hover:bg-[#0F0A1E] hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              İletişime Geçin
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
