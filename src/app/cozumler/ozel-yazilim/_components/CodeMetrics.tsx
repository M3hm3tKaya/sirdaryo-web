"use client";

import { useEffect, useState, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const terminalLines = [
  { type: "input", text: "$ sirdaryo stats --format summary" },
  { type: "output", text: "" },
  { type: "output", text: "╔══════════════════════════════════════╗" },
  { type: "output", text: "║    Sirdaryo Yazılım İstatistikleri   ║" },
  { type: "output", text: "╠══════════════════════════════════════╣" },
  { type: "output", text: "║  Teslim Edilen Proje    ▸  80+       ║" },
  { type: "output", text: "║  Kod Satırı             ▸  2M+       ║" },
  { type: "output", text: "║  Test Coverage          ▸  %95       ║" },
  { type: "output", text: "║  Uptime                 ▸  %99.9     ║" },
  { type: "output", text: "║  Müşteri Memnuniyeti    ▸  %98       ║" },
  { type: "output", text: "║  Ortalama Sprint Hızı   ▸  42 SP     ║" },
  { type: "output", text: "╚══════════════════════════════════════╝" },
  { type: "output", text: "" },
  { type: "success", text: "✓ All systems operational" },
];

export function CodeMetrics() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer to start animation when in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Typewriter effect
  useEffect(() => {
    if (!hasStarted || visibleLines >= terminalLines.length) return;
    const delay = terminalLines[visibleLines].type === "input" ? 600 : 80;
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, delay);
    return () => clearTimeout(timer);
  }, [hasStarted, visibleLines]);

  return (
    <section ref={sectionRef} className="relative z-10 py-24 lg:py-32">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-16 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Rakamlarla Biz
          </h2>
        </ScrollReveal>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-[#FF3B30]/15 bg-[#0D0505] overflow-hidden shadow-[0_0_60px_rgba(255,59,48,0.05)]">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 border-b border-[#FF3B30]/10 bg-[#231010] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-[#FEF2F2]/30 font-mono">terminal — bash</span>
            </div>

            {/* Terminal content */}
            <div className="p-6 font-mono text-sm leading-relaxed min-h-[350px]">
              {terminalLines.map((line, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-200 ${i < visibleLines ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}
                >
                  {line.type === "input" ? (
                    <span className="text-[#FCA5A5]">{line.text}</span>
                  ) : line.type === "success" ? (
                    <span className="text-green-400">{line.text}</span>
                  ) : (
                    <span className="text-[#FEF2F2]/60">{line.text}</span>
                  )}
                </div>
              ))}
              {/* Blinking cursor at the end */}
              {visibleLines >= terminalLines.length && (
                <div className="mt-1">
                  <span className="text-[#FCA5A5]">$ </span>
                  <span className="animate-pulse text-[#FF3B30]">▌</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
