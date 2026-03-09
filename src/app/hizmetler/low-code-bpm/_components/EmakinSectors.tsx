"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Building2, Landmark, ShieldCheck, Factory, Cog, Globe2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
  { icon: Landmark, label: "Bankacılık", desc: "Kredi onay süreçleri, müşteri başvuruları, uyumluluk yönetimi" },
  { icon: Building2, label: "Finans", desc: "Risk değerlendirme, portföy yönetimi, raporlama otomasyonu" },
  { icon: ShieldCheck, label: "Sigortacılık", desc: "Poliçe yönetimi, hasar süreçleri, tazminat iş akışları" },
  { icon: Factory, label: "Üretim", desc: "Üretim planlama, kalite kontrol, tedarik zinciri yönetimi" },
  { icon: Cog, label: "Operasyon", desc: "İç süreç otomasyonu, onay mekanizmaları, performans izleme" },
  { icon: Globe2, label: "Uluslararası", desc: "İstanbul merkez, Dublin ofisi ile Avrupa ve Orta Doğu pazarları" },
];

export function EmakinSectors() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".sector-card").forEach((card, i) => {
        if (mobile) {
          gsap.from(card, {
            opacity: 0,
            duration: 0.5,
            delay: i * 0.08,
            scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
          });
        } else {
          gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-24 lg:py-32 bg-[#1A130A]">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Sektörel Uygulama Alanları
          </h2>
          <p className="mx-auto mb-16 max-w-lg text-center text-[#FFF7ED]/50">
            Öncü kurumlar tarafından tercih edilen çözümler
          </p>
        </ScrollReveal>

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.label}
                className="sector-card group flex items-start gap-4 rounded-xl border border-[#F97316]/10 bg-[#231A10] p-5 transition-all duration-300 hover:border-[#F97316]/30"
              >
                <div className="shrink-0 rounded-lg bg-[#F97316]/10 p-2.5">
                  <Icon className="h-6 w-6 text-[#F97316]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold">{sector.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#FFF7ED]/50">{sector.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
