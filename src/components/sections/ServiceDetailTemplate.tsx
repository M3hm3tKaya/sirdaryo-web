"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Counter } from "@/components/animations/Counter";
import { getIcon } from "@/lib/icons";
import type { ServicePage } from "@/lib/services";
import type { AccentColor } from "@/lib/constants";

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

const gradientClasses: Record<AccentColor, string> = {
  coral: "text-gradient-coral",
  violet: "text-gradient-violet",
  cyan: "text-gradient-cyan",
  lime: "text-gradient-lime",
  amber: "text-gradient-amber",
};

const bgColors: Record<AccentColor, string> = {
  violet: "bg-brand-violet",
  cyan: "bg-brand-cyan",
  lime: "bg-brand-lime",
  amber: "bg-brand-amber",
  coral: "bg-brand-coral",
};

export function ServiceDetailTemplate({ service }: { service: ServicePage }) {
  const Icon = getIcon(service.iconName);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-black pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal animation="scale">
              <div
                className={`mb-6 inline-flex rounded-2xl bg-white/5 p-4 ${textColors[service.accentColor]}`}
              >
                <Icon className="h-10 w-10" />
              </div>
            </ScrollReveal>
            <Badge color={service.accentColor} className="mb-4">
              {service.subtitle}
            </Badge>
            <TextReveal
              text={service.title}
              as="h1"
              className={`font-display text-4xl font-bold sm:text-5xl lg:text-7xl ${gradientClasses[service.accentColor]}`}
            />
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="mt-6 text-lg text-white/50">{service.description}</p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.3}>
              <Button href="/iletisim" size="lg" className="mt-8">
                Ücretsiz Danışmanlık Alın
              </Button>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-brand-off-black py-24 lg:py-32">
        <Container>
          <TextReveal
            text="Özellikler"
            as="h2"
            className="mb-12 text-center font-display text-3xl font-bold sm:text-4xl"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, i) => {
              const FeatureIcon = getIcon(feature.iconName);
              return (
                <ScrollReveal key={feature.title} animation="fade-up" delay={i * 0.08}>
                  <GlowCard glowColor={glowColors[service.accentColor]}>
                    <div
                      className={`mb-3 inline-flex rounded-lg bg-white/5 p-2 ${textColors[service.accentColor]}`}
                    >
                      <FeatureIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-display font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/50">{feature.desc}</p>
                  </GlowCard>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-brand-black py-24 lg:py-32">
        <Container>
          <TextReveal
            text="Çalışma Sürecimiz"
            as="h2"
            className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl"
          />
          <div className="mx-auto max-w-3xl space-y-8">
            {service.process.map((step, i) => (
              <ScrollReveal
                key={step.step}
                animation={i % 2 === 0 ? "slide-left" : "slide-right"}
                delay={i * 0.1}
              >
                <div className="flex gap-6 rounded-xl border border-white/10 bg-brand-off-black p-6">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${bgColors[service.accentColor]}/10 ${textColors[service.accentColor]}`}
                  >
                    <span className="text-lg font-display font-bold">
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-white/50">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Metrics */}
      <section className="bg-brand-off-black py-24 lg:py-32">
        <Container>
          <TextReveal
            text="Rakamlarla Başarımız"
            as="h2"
            className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl"
          />
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {service.metrics.map((metric, i) => (
              <ScrollReveal key={metric.label} animation="scale" delay={i * 0.1}>
                <Counter value={metric.value} label={metric.label} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-brand-black py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <TextReveal
              text={`${service.title} Çözümümüzü Keşfedin`}
              as="h2"
              className="font-display text-3xl font-bold sm:text-4xl"
            />
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="mt-4 text-white/50">
                İşletmenize özel çözüm için hemen görüşelim. İlk danışmanlık ücretsizdir.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="scale" delay={0.3}>
              <Button href="/iletisim" size="lg" className="mt-8">
                İletişime Geçin
              </Button>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
