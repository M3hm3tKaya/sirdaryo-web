"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TextReveal } from "@/components/animations/TextReveal";
import { useCursor } from "@/lib/CursorContext";
import { getIcon } from "@/lib/icons";
import { useRef, type MouseEvent } from "react";

const services = [
  { slug: "rpa", title: "RPA ve Otomasyon", subtitle: "Robotik Süreç Otomasyonu", iconName: "Bot", accentColor: "violet" },
  { slug: "low-code-bpm", title: "Low-Code BPM", subtitle: "Emakin Platformu", iconName: "Blocks", accentColor: "orange" },
  { slug: "optimizasyon", title: "Optimizasyon", subtitle: "Süreç Optimizasyonu", iconName: "TrendingUp", accentColor: "lime" },
  { slug: "yonetim-paneli", title: "Yönetim Paneli", subtitle: "Dashboard & Admin Panel", iconName: "LayoutDashboard", accentColor: "amber" },
  { slug: "ozel-yazilim", title: "Özel Yazılım", subtitle: "Özel Yazılım Geliştirme", iconName: "Code2", accentColor: "coral" },
];

const accentHex: Record<string, string> = {
  violet: "#8B5CF6", cyan: "#06B6D4", lime: "#84CC16", amber: "#F59E0B", coral: "#FF3B30", orange: "#F97316",
};
const textColors: Record<string, string> = {
  violet: "text-brand-violet", cyan: "text-brand-cyan", lime: "text-brand-lime", amber: "text-brand-amber", coral: "text-brand-coral", orange: "text-[#F97316]",
};
const bgTintColors: Record<string, string> = {
  violet: "bg-brand-violet/10", cyan: "bg-brand-cyan/10", lime: "bg-brand-lime/10", amber: "bg-brand-amber/10", coral: "bg-brand-coral/10", orange: "bg-[#F97316]/10",
};
const borderLeftColors: Record<string, string> = {
  violet: "border-l-brand-violet", cyan: "border-l-brand-cyan", lime: "border-l-brand-lime", amber: "border-l-brand-amber", coral: "border-l-brand-coral", orange: "border-l-[#F97316]",
};

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const { setColor } = useCursor();
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = getIcon(service.iconName);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  }

  return (
    <ScrollReveal animation="fade-up" delay={index * 0.1}>
      <Link href={`/hizmetler/${service.slug}`} className="block h-full">
        <div
          ref={cardRef}
          data-cursor-card
          onMouseEnter={() => setColor(accentHex[service.accentColor])}
          onMouseMove={handleMouseMove}
          className={`group relative h-full overflow-hidden rounded-2xl border border-black/5 border-l-4 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${borderLeftColors[service.accentColor]}`}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(350px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accentHex[service.accentColor]}12, transparent 40%)`,
            }}
          />
          <div className="relative z-10">
            <div className={`mb-5 inline-flex rounded-xl p-3 ${bgTintColors[service.accentColor]} ${textColors[service.accentColor]}`}>
              <Icon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-display font-bold text-brand-black">{service.title}</h3>
            <p className="mt-1 text-sm text-black/40">{service.subtitle}</p>
            <div className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5 ${textColors[service.accentColor]}`}>
              Detaylı Bilgi
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export function ServiceGrid() {
  const { setColor } = useCursor();
  return (
    <section className="bg-white py-24 lg:py-32" onMouseEnter={() => setColor("#0A0A0A")}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <TextReveal text="Dijital Dönüşümün Her Adımında" as="h2" className="font-display text-3xl font-bold text-brand-black sm:text-4xl lg:text-[52px] lg:leading-tight" />
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s, i) => <ServiceCard key={s.slug} service={s} index={i} />)}
        </div>
        <div className="mt-6 flex justify-center gap-6">
          {services.slice(3).map((s, i) => (
            <div key={s.slug} className="w-full max-w-sm sm:w-1/2 lg:w-1/3">
              <ServiceCard service={s} index={i + 3} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
