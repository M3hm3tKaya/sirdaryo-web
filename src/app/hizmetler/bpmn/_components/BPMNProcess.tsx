"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: 1, title: "Keşfet", desc: "Mevcut süreçlerin haritalanması ve dokümantasyonu" },
  { num: 2, title: "Analiz Et", desc: "Darboğazların ve iyileştirme alanlarının belirlenmesi" },
  { num: 3, title: "Tasarla", desc: "Optimize edilmiş süreç modellerinin oluşturulması" },
  { num: 4, title: "Uygula", desc: "Yeni süreçlerin hayata geçirilmesi ve eğitim" },
];

export function BPMNProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".bpmn-step").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? -50 : 50,
          y: 20,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 py-24 lg:py-32 bg-[#0F2137]">
      <Container>
        <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          Çalışma Sürecimiz
        </h2>

        <div className="relative mx-auto max-w-3xl">
          {/* Diagonal line */}
          <div className="absolute left-0 top-0 right-0 bottom-0 hidden sm:block">
            <svg className="h-full w-full" preserveAspectRatio="none">
              <line x1="10%" y1="10%" x2="90%" y2="90%" stroke="#06B6D4" strokeWidth="2" strokeDasharray="8 4" opacity="0.3" />
            </svg>
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`bpmn-step flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className="flex items-start gap-4 max-w-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#06B6D4] text-lg font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm text-[#ECFEFF]/50">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
