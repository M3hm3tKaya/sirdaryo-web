import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { services } from "@/lib/services";
import { getIcon } from "@/lib/icons";
import type { AccentColor } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "RPA, BPMN, süreç optimizasyonu, yönetim paneli ve özel yazılım geliştirme hizmetlerimizi keşfedin.",
};

const glowColors: Record<AccentColor, string> = {
  violet: "rgba(139, 92, 246, 0.15)",
  cyan: "rgba(6, 182, 212, 0.15)",
  lime: "rgba(132, 204, 22, 0.15)",
  amber: "rgba(245, 158, 11, 0.15)",
  coral: "rgba(255, 59, 48, 0.15)",
};

const textColors: Record<AccentColor, string> = {
  violet: "text-brand-violet",
  cyan: "text-brand-cyan",
  lime: "text-brand-lime",
  amber: "text-brand-amber",
  coral: "text-brand-coral",
};

export default function HizmetlerPage() {
  return (
    <>
      <section className="bg-brand-black pt-32 pb-16 lg:pt-40 lg:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge color="coral" className="mb-6">
              Hizmetlerimiz
            </Badge>
            <TextReveal
              text="Dijital Dönüşüm Çözümlerimiz"
              as="h1"
              className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="mt-6 text-lg text-white/50">
                İşletmenizin ihtiyacına özel, uçtan uca dijital dönüşüm hizmetleri
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-brand-black pb-24 lg:pb-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = getIcon(service.iconName);
              return (
                <ScrollReveal key={service.slug} animation="fade-up" delay={i * 0.1}>
                  <Link href={`/hizmetler/${service.slug}`} className="block h-full">
                    <GlowCard
                      glowColor={glowColors[service.accentColor]}
                      className="h-full transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <div
                        className={`mb-4 inline-flex rounded-lg bg-white/5 p-3 ${textColors[service.accentColor]}`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className="text-2xl font-display font-bold">
                        {service.title}
                      </h2>
                      <p className="mt-1 text-sm text-white/40">
                        {service.subtitle}
                      </p>
                      <p className="mt-4 text-white/60">{service.description}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {service.metrics.map((m) => (
                          <Badge key={m.label} color={service.accentColor}>
                            {m.value} {m.label}
                          </Badge>
                        ))}
                      </div>
                      <div
                        className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${textColors[service.accentColor]}`}
                      >
                        Detaylı İncele
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </GlowCard>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
