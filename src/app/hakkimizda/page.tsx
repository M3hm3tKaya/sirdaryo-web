import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GlowCard } from "@/components/ui/GlowCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { Counter } from "@/components/animations/Counter";
import { Target, Lightbulb, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Sirdaryo Danışmanlık ve Bilişim Hizmetleri - Dijital dönüşüm yolculuğunuzda güçlü partneriniz.",
};

const values = [
  {
    icon: Target,
    title: "Sonuç Odaklı",
    desc: "Her projede ölçülebilir iş değeri yaratmayı hedefliyoruz.",
    color: "text-brand-coral",
  },
  {
    icon: Lightbulb,
    title: "Yenilikçi",
    desc: "En güncel teknolojileri iş süreçlerinize entegre ediyoruz.",
    color: "text-brand-violet",
  },
  {
    icon: Users,
    title: "İş Birliği",
    desc: "Sizinle omuz omuza çalışan bir partner olarak yanınızda olmak.",
    color: "text-brand-cyan",
  },
  {
    icon: Shield,
    title: "Güvenilir",
    desc: "Zamanında teslim, şeffaf iletişim ve sürdürülebilir çözümler.",
    color: "text-brand-lime",
  },
];

const metrics = [
  { value: "12+", label: "Yıllık Deneyim" },
  { value: "150+", label: "Tamamlanan Proje" },
  { value: "50+", label: "Mutlu Müşteri" },
  { value: "30+", label: "Uzman Kadro" },
];

export default function HakkimizdaPage() {
  return (
    <>
      <section className="bg-brand-black pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge color="cyan" className="mb-6">
              Hakkımızda
            </Badge>
            <TextReveal
              text="Teknolojiyi İş Değerine Dönüştürüyoruz"
              as="h1"
              className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl"
            />
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="mt-6 text-lg text-white/50">
                Sirdaryo olarak, İstanbul merkezli ekibimizle işletmelerin dijital
                dönüşüm yolculuğunda güçlü bir partner olmayı hedefliyoruz.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-brand-off-white py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <ScrollReveal animation="fade-up">
              <h2 className="font-display text-3xl font-bold text-brand-black sm:text-4xl">
                Hikayemiz
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-lg leading-relaxed text-brand-black/60">
                Sirdaryo, işletmelerin tekrarlayan süreçlerini otomatize etme,
                iş akışlarını optimize etme ve veri odaklı kararlar almalarını
                sağlama vizyonuyla kuruldu. RPA, BPMN, süreç optimizasyonu ve
                özel yazılım alanlarındaki uzmanlığı ile Türkiye&apos;nin öncü
                dijital dönüşüm şirketlerinden biri olmayı hedefliyoruz.
              </p>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="text-lg leading-relaxed text-brand-black/60">
                Deneyimli ekibimiz, sektörel bilgisi ve teknik yetkinliği ile
                her projeyi başından sonuna kadar yönetir. Müşterilerimizin
                başarısı, bizim başarımızdır.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section className="bg-brand-black py-24 lg:py-32">
        <Container>
          <TextReveal
            text="Rakamlarla Sirdaryo"
            as="h2"
            className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl"
          />
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {metrics.map((m, i) => (
              <ScrollReveal key={m.label} animation="scale" delay={i * 0.1}>
                <Counter value={m.value} label={m.label} />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-off-black py-24 lg:py-32">
        <Container>
          <TextReveal
            text="Değerlerimiz"
            as="h2"
            className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <ScrollReveal key={v.title} animation="fade-up" delay={i * 0.1}>
                  <GlowCard>
                    <div className={`mb-3 ${v.color}`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-display font-semibold">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/50">{v.desc}</p>
                  </GlowCard>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-brand-black py-24 lg:py-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <TextReveal
              text="Birlikte Çalışalım"
              as="h2"
              className="font-display text-3xl font-bold sm:text-4xl"
            />
            <ScrollReveal animation="fade-up" delay={0.2}>
              <p className="mt-4 text-white/50">
                Dijital dönüşüm yolculuğunuzda size eşlik etmek için hazırız.
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
