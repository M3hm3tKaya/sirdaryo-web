"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ChevronDown } from "lucide-react";

const steps = [
  { num: 1, title: "İhtiyaç Analizi", desc: "İş gereksinimlerinin ve KPI'ların belirlenmesi. Hangi verilere, hangi formatta ihtiyacınız olduğunu detaylı analiz ediyoruz." },
  { num: 2, title: "Tasarım & Prototip", desc: "Dashboard wireframe ve kullanıcı deneyimi tasarımı. Etkileşimli prototipler ile onay süreci." },
  { num: 3, title: "Geliştirme", desc: "Frontend ve backend geliştirme, API entegrasyonu. Agile sprint'ler ile hızlı teslimat." },
  { num: 4, title: "Eğitim & Devreye Alma", desc: "Kullanıcı eğitimi ve canlıya geçiş. Sürekli destek ve bakım hizmeti." },
];

export function PanelProcess() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative z-10 py-24 lg:py-32 bg-[#231C10]">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Geliştirme Süreci
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-2xl">
          {/* Vertical line + steps */}
          <div className="relative border-l-2 border-[#F59E0B]/20 pl-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} animation="fade-up" delay={i * 0.1}>
                <div className="relative mb-8 last:mb-0">
                  {/* Dot */}
                  <div className={`absolute -left-[calc(2rem+5px)] top-1 flex h-3 w-3 rounded-full transition-all duration-300 ${i === openIndex ? "bg-[#F59E0B] shadow-[0_0_10px_rgba(245,158,11,0.5)]" : "bg-[#F59E0B]/30"}`} />

                  <button
                    onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#FBBF24]">0{step.num}</span>
                      <h3 className="text-lg font-display font-bold">{step.title}</h3>
                    </div>
                    <ChevronDown className={`h-5 w-5 text-[#FBBF24] transition-transform duration-300 ${i === openIndex ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${i === openIndex ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="text-sm leading-relaxed text-[#FFFBEB]/50">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
