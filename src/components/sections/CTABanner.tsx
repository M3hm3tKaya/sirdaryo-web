"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-amber" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.3))]" />

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
            <Button
              href="/iletisim"
              variant="secondary"
              size="lg"
              className="mt-8"
            >
              Bize Ulaşın
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
