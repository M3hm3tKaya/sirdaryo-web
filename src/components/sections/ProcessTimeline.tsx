"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";
import { useCursor } from "@/lib/CursorContext";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: 1,
    title: "Analiz",
    desc: "İş süreçlerinizi detaylı inceliyor, otomasyon ve iyileştirme fırsatlarını belirliyoruz.",
    color: "text-brand-violet",
    bg: "bg-brand-violet",
    bgTint: "bg-brand-violet/5",
    borderAccent: "border-r-brand-violet sm:even:border-l-brand-violet sm:even:border-r-0",
  },
  {
    step: 2,
    title: "Tasarım",
    desc: "Çözüm mimarisini tasarlıyor, prototipleri oluşturuyor ve yol haritasını belirliyoruz.",
    color: "text-brand-cyan",
    bg: "bg-brand-cyan",
    bgTint: "bg-brand-cyan/5",
    borderAccent: "border-r-brand-cyan sm:even:border-l-brand-cyan sm:even:border-r-0",
  },
  {
    step: 3,
    title: "Geliştirme",
    desc: "Agile metodoloji ile iteratif geliştirme yaparak hızlı sonuçlar elde ediyoruz.",
    color: "text-brand-lime",
    bg: "bg-brand-lime",
    bgTint: "bg-brand-lime/5",
    borderAccent: "border-r-brand-lime sm:even:border-l-brand-lime sm:even:border-r-0",
  },
  {
    step: 4,
    title: "Destek",
    desc: "Canlı ortama geçiş, eğitim ve sürekli iyileştirme ile yanınızda olmaya devam ediyoruz.",
    color: "text-brand-amber",
    bg: "bg-brand-amber",
    bgTint: "bg-brand-amber/5",
    borderAccent: "border-r-brand-amber sm:even:border-l-brand-amber sm:even:border-r-0",
  },
];

const dotGlowColors: Record<number, string> = {
  1: "0 0 12px rgba(139,92,246,0.5)",
  2: "0 0 12px rgba(6,182,212,0.5)",
  3: "0 0 12px rgba(132,204,22,0.5)",
  4: "0 0 12px rgba(245,158,11,0.5)",
};

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { setColor } = useCursor();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      const line = document.querySelector(".timeline-line-fill");

      if (line) {
        gsap.set(line, { scaleY: 0, transformOrigin: "top" });
        gsap.to(line, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        });
      }

      items.forEach((item, i) => {
        gsap.set(item, { opacity: 0, x: i % 2 === 0 ? -40 : 40 });
        gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 lg:py-32"
      onMouseEnter={() => setColor("#F59E0B")}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <TextReveal
            text="Nasıl Çalışıyoruz"
            as="h2"
            className="font-display text-3xl font-bold text-brand-black sm:text-4xl lg:text-[52px] lg:leading-tight"
          />
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Timeline line — 2px, gradient */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/10 sm:left-1/2 sm:-translate-x-px">
            <div className="timeline-line-fill absolute inset-0 bg-gradient-to-b from-brand-violet via-brand-cyan via-brand-lime to-brand-amber" />
          </div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div
                key={step.step}
                className="timeline-item relative pl-12 sm:pl-0 sm:odd:pr-[calc(50%+2rem)] sm:even:pl-[calc(50%+2rem)]"
              >
                {/* Dot — 16px with glow */}
                <div
                  className={`absolute left-2 top-1 h-4 w-4 rounded-full ${step.bg} sm:left-1/2 sm:-translate-x-2`}
                  style={{ boxShadow: dotGlowColors[step.step] }}
                />

                <div className={`rounded-xl border border-black/5 border-l-[3px] sm:odd:border-l-[3px] sm:odd:border-r-0 sm:even:border-l-0 sm:even:border-r-[3px] ${step.bgTint} p-6`}
                  style={{
                    borderLeftColor: step.step % 2 !== 0 ? undefined : 'transparent',
                    borderRightColor: step.step % 2 === 0 ? undefined : 'transparent',
                  }}
                >
                  <span className={`text-sm font-mono font-bold ${step.color}`}>
                    0{step.step}
                  </span>
                  <h3 className="mt-1 text-xl font-display font-bold text-brand-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/50">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
