"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: 35, suffix: "%", label: "Ortalama Verimlilik Artışı", angle: 126 },
  { value: 25, suffix: "%", label: "Maliyet Tasarrufu", angle: 90 },
  { value: 50, suffix: "+", label: "Optimize Edilen Süreç", angle: 144 },
  { value: 3, suffix: " Ay", label: "Ortalama Sonuç Süresi", angle: 54 },
];

function Gauge({ metric, index }: { metric: (typeof metrics)[0]; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
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

  const radius = 60;
  const circumference = Math.PI * radius;
  const dashOffset = circumference - (metric.angle / 180) * circumference;

  return (
    <ScrollReveal animation="scale" delay={index * 0.1}>
      <div ref={ref} className="flex flex-col items-center">
        <svg width="140" height="80" viewBox="0 0 140 80">
          {/* Background arc */}
          <path d="M 10 75 A 60 60 0 0 1 130 75" fill="none" stroke="#84CC16" strokeWidth="6" opacity="0.1" />
          {/* Fill arc */}
          <path
            d="M 10 75 A 60 60 0 0 1 130 75"
            fill="none"
            stroke="url(#gaugeGrad)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className="transition-[stroke-dashoffset] duration-[1.5s] ease-out"
          />
          <defs>
            <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#65A30D" />
              <stop offset="100%" stopColor="#A3E635" />
            </linearGradient>
          </defs>
        </svg>
        <div className="-mt-4 text-center">
          <span className="font-display text-3xl font-bold text-[#A3E635]">{count}{metric.suffix}</span>
          <p className="mt-1 text-xs text-[#F0FDF4]/50">{metric.label}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function OptMetrics() {
  return (
    <section className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Rakamlarla Optimizasyon
          </h2>
        </ScrollReveal>
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((m, i) => <Gauge key={m.label} metric={m} index={i} />)}
        </div>
      </Container>
    </section>
  );
}
