"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Search, PenTool, Code2, Headphones } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Süreç Analizi", desc: "Otomasyona uygun süreçlerin tespiti ve önceliklendirilmesi. Mevcut iş akışlarını detaylı haritalıyoruz.", icon: Search },
  { num: "02", title: "Bot Tasarımı", desc: "İş kuralları ve senaryo akışlarının modellenmesi. Her adımı titizlikle planlıyoruz.", icon: PenTool },
  { num: "03", title: "Geliştirme & Test", desc: "Robot geliştirme, kapsamlı test ve optimizasyon. Hatasız çalışma garantisi.", icon: Code2 },
  { num: "04", title: "Canlı & Destek", desc: "Devreye alma, izleme ve sürekli iyileştirme. 7/24 destek ile yanınızdayız.", icon: Headphones },
];

export function RPAProcess() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set(".rpa-step-card", { opacity: 0, y: 40 });
      gsap.to(".rpa-step-card", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, cardsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Çalışma Sürecimiz
          </h2>
          <p className="mx-auto mb-12 max-w-lg text-center text-[#F5F3FF]/50">
            Her adımda şeffaf iletişim ve ölçülebilir sonuçlar
          </p>
        </ScrollReveal>

        <div ref={cardsRef} className="grid items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="rpa-step-card rounded-2xl border border-[#8B5CF6]/20 bg-[#1A1230] p-8 transition-all duration-300"
              >
                <span className="font-display text-[80px] font-extrabold leading-none text-[#8B5CF6]/20">
                  {step.num}
                </span>
                <div className="mt-4 flex items-center gap-3">
                  <div className="rounded-lg bg-[#8B5CF6]/10 p-2">
                    <Icon className="h-6 w-6 text-[#8B5CF6]" />
                  </div>
                  <h3 className="text-xl font-display font-bold">{step.title}</h3>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-[#F5F3FF]/60">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
