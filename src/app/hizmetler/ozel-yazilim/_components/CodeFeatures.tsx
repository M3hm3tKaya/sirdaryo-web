"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Code2, Shield, Zap, Layers, GitBranch, Cloud } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Code2, title: "Temiz Kod", desc: "SOLID prensipleri ve best practice'lerle yazılmış, bakımı kolay ve okunabilir kod tabanı.", color: "#FF3B30" },
  { icon: Shield, title: "Güvenlik Odaklı", desc: "OWASP standartları, penetrasyon testleri ve güvenlik denetimleri ile korunan altyapı.", color: "#FF6B6B" },
  { icon: Zap, title: "Yüksek Performans", desc: "Optimize edilmiş sorgular, caching stratejileri ve lazy loading ile hızlı yanıt süreleri.", color: "#FF3B30" },
  { icon: Layers, title: "Mikroservis Mimari", desc: "Bağımsız ölçeklenebilir servisler ile esnek ve dayanıklı sistem mimarisi.", color: "#FF6B6B" },
  { icon: GitBranch, title: "CI/CD Pipeline", desc: "Otomatik test, build ve deployment süreçleri ile kesintisiz teslimat.", color: "#FF3B30" },
  { icon: Cloud, title: "Cloud Native", desc: "Bulut altyapısına uygun container tabanlı, ölçeklenebilir uygulama geliştirme.", color: "#FF6B6B" },
];

export function CodeFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll<HTMLElement>(".feature-stack-card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 50%",
            scrub: 0.5,
          },
        }
      );

      // Sticky effect for cards except last
      if (i < cards.length - 1) {
        ScrollTrigger.create({
          trigger: card,
          start: `top ${80 + i * 15}px`,
          endTrigger: cards[cards.length - 1],
          end: "top 50%",
          pin: true,
          pinSpacing: false,
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Neden Biz?
          </h2>
        </ScrollReveal>

        <div ref={containerRef} className="mx-auto max-w-2xl space-y-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="feature-stack-card rounded-2xl border border-[#FF3B30]/15 bg-[#231010] p-8 shadow-lg"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0 rounded-xl p-3" style={{ backgroundColor: `${f.color}15` }}>
                    <Icon className="h-7 w-7" style={{ color: f.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#FEF2F2]/60">{f.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
