"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { services } from "@/lib/services";
import { getIcon } from "@/lib/icons";

const glowColors: Record<string, string> = {
  violet: "rgba(139, 92, 246, 0.15)",
  cyan: "rgba(6, 182, 212, 0.15)",
  lime: "rgba(132, 204, 22, 0.15)",
  amber: "rgba(245, 158, 11, 0.15)",
  coral: "rgba(255, 59, 48, 0.15)",
};

const textColors: Record<string, string> = {
  violet: "text-brand-violet",
  cyan: "text-brand-cyan",
  lime: "text-brand-lime",
  amber: "text-brand-amber",
  coral: "text-brand-coral",
};

export function ServiceGrid() {
  return (
    <section className="bg-brand-black py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <TextReveal
            text="Hizmetlerimiz"
            as="h2"
            className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl"
          />
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="mt-4 text-white/50">
              İşletmenizin ihtiyacına özel dijital dönüşüm çözümleri
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = getIcon(service.iconName);
            return (
              <ScrollReveal key={service.slug} animation="fade-up" delay={i * 0.12}>
                <Link href={`/hizmetler/${service.slug}`} className="block h-full">
                  <GlowCard
                    glowColor={glowColors[service.accentColor]}
                    className="h-full transition-transform duration-300 hover:scale-[1.02]"
                  >
                    <div className={`mb-4 inline-flex rounded-lg bg-white/5 p-3 ${textColors[service.accentColor]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-display font-semibold">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/40">{service.subtitle}</p>
                    <p className="mt-3 text-sm text-white/60 line-clamp-2">
                      {service.description}
                    </p>
                    <div
                      className={`mt-4 inline-flex items-center gap-1 text-sm font-medium ${textColors[service.accentColor]}`}
                    >
                      Detaylı Bilgi
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </GlowCard>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
