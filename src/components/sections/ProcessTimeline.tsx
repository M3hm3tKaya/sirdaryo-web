"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { TextReveal } from "@/components/animations/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: 1,
    title: "Analiz",
    desc: "İş süreçlerinizi detaylı inceliyor, otomasyon ve iyileştirme fırsatlarını belirliyoruz.",
    color: "text-brand-violet",
    bg: "bg-brand-violet",
  },
  {
    step: 2,
    title: "Tasarım",
    desc: "Çözüm mimarisini tasarlıyor, prototipleri oluşturuyor ve yol haritasını belirliyoruz.",
    color: "text-brand-cyan",
    bg: "bg-brand-cyan",
  },
  {
    step: 3,
    title: "Geliştirme",
    desc: "Agile metodoloji ile iteratif geliştirme yaparak hızlı sonuçlar elde ediyoruz.",
    color: "text-brand-lime",
    bg: "bg-brand-lime",
  },
  {
    step: 4,
    title: "Destek",
    desc: "Canlı ortama geçiş, eğitim ve sürekli iyileştirme ile yanınızda olmaya devam ediyoruz.",
    color: "text-brand-amber",
    bg: "bg-brand-amber",
  },
];

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="bg-brand-black py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <TextReveal
            text="Nasıl Çalışıyoruz"
            as="h2"
            className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl"
          />
        </div>

        <div className="relative mx-auto mt-16 max-w-2xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 sm:left-1/2 sm:-translate-x-px">
            <div className="timeline-line-fill absolute inset-0 bg-gradient-to-b from-brand-violet via-brand-cyan to-brand-amber" />
          </div>

          <div className="space-y-12">
            {steps.map((step) => (
              <div
                key={step.step}
                className="timeline-item relative pl-12 sm:pl-0 sm:odd:pr-[calc(50%+2rem)] sm:even:pl-[calc(50%+2rem)]"
              >
                <div
                  className={`absolute left-2.5 top-1 h-3 w-3 rounded-full ${step.bg} sm:left-1/2 sm:-translate-x-1.5`}
                />

                <div className="rounded-xl border border-white/10 bg-brand-off-black p-6">
                  <span className={`text-sm font-mono font-bold ${step.color}`}>
                    0{step.step}
                  </span>
                  <h3 className="mt-1 text-xl font-display font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/50">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
