"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: 40, suffix: "%", label: "Süreç Hızlanması" },
  { value: 200, suffix: "+", label: "Modellenen Süreç" },
  { value: 30, suffix: "%", label: "Maliyet Azalması" },
  { value: 95, suffix: "%", label: "Müşteri Memnuniyeti" },
];

function ProgressMetric({ metric, index }: { metric: (typeof metrics)[0]; index: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        const barFill = metric.value <= 100 ? metric.value : 80;
        gsap.to(el, { width: `${barFill}%`, duration: 1.5, ease: "power2.out", delay: index * 0.15 });
        const obj = { val: 0 };
        gsap.to(obj, {
          val: metric.value,
          duration: 1.5,
          ease: "power2.out",
          delay: index * 0.15,
          onUpdate: () => setCount(Math.round(obj.val)),
        });
      },
    });
    return () => trigger.kill();
  }, [metric.value, index]);

  return (
    <ScrollReveal animation="fade-up" delay={index * 0.1}>
      <div className="rounded-xl border border-[#06B6D4]/10 bg-[#0F2137] p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-[#ECFEFF]/60">{metric.label}</span>
          <span className="font-display text-2xl font-bold text-[#22D3EE]">
            {count}{metric.suffix}
          </span>
        </div>
        <div className="h-2 rounded-full bg-[#06B6D4]/10">
          <div
            ref={barRef}
            className="h-full rounded-full bg-gradient-to-r from-[#0891B2] to-[#22D3EE]"
            style={{ width: "0%" }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

export function BPMNMetrics() {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Rakamlarla BPMN
          </h2>
        </ScrollReveal>
        <div className="mx-auto max-w-2xl space-y-4">
          {metrics.map((m, i) => (
            <ProgressMetric key={m.label} metric={m} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
