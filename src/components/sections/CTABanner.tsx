"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { useCursor } from "@/lib/CursorContext";

export function CTABanner() {
  const { setColor } = useCursor();

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #FF3B30 0%, #FF6B3D 50%, #F59E0B 100%)",
      }}
      onMouseEnter={() => setColor("#FFFFFF")}
    >
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <TextReveal
            text="Projenizi Birlikte Hayata Geçirelim"
            as="h2"
            className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          />
          <ScrollReveal animation="fade-up" delay={0.3}>
            <p className="mt-6 text-lg text-white/80">
              Uzman ekibimiz ile dijital dönüşüm yolculuğunuza hemen başlayın.
              İlk görüşme ücretsizdir.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={0.4}>
            <Link
              href="/iletisim"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-brand-black transition-all duration-300 hover:bg-brand-black hover:text-white hover:shadow-[0_0_40px_rgba(0,0,0,0.3)]"
            >
              Bize Ulaşın
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
