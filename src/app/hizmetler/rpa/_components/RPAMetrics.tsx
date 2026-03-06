"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/animations/Counter";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: "%85", label: "Süreç Hızlanması", rotate: -3 },
  { value: "%99", label: "Doğruluk Oranı", rotate: 1.5 },
  { value: "7/24", label: "Kesintisiz Çalışma", rotate: -2 },
  { value: "6", label: "Ay Ortalama ROI", rotate: 2.5 },
];

export function RPAMetrics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".metric-card").forEach((card, i) => {
        const directions = [
          { x: -80, y: 40 },
          { x: 60, y: -30 },
          { x: -50, y: -50 },
          { x: 70, y: 30 },
        ];
        gsap.from(card, {
          ...directions[i],
          opacity: 0,
          rotation: (i % 2 === 0 ? -15 : 15),
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-24 lg:py-32">
      {/* Center glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#8B5CF6]/10 blur-[150px]" />

      <Container className="relative">
        <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          Rakamlarla RPA
        </h2>

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="metric-card rounded-2xl border border-[#8B5CF6]/20 bg-white p-6 text-center"
              style={{ transform: `rotate(${m.rotate}deg)` }}
            >
              <Counter
                value={m.value}
                label={m.label}
                valueClassName="text-[#8B5CF6]"
                labelClassName="text-black/50"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
