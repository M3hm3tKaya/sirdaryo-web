"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const codeLines = [
  { indent: 0, text: 'export async function deploy() {' },
  { indent: 1, text: 'const config = await loadConfig();' },
  { indent: 1, text: 'const app = new Application(config);' },
  { indent: 1, text: '' },
  { indent: 1, text: 'await app.build({ optimize: true });' },
  { indent: 1, text: 'await app.test({ coverage: 95 });' },
  { indent: 1, text: 'await app.deploy("production");' },
  { indent: 1, text: '' },
  { indent: 1, text: 'console.log("✓ Deployed successfully");' },
  { indent: 0, text: '}' },
];

export function CodeHero() {
  const ref = useRef<HTMLElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".code-badge", { opacity: 0, y: 20, duration: 0.5 })
        .from(".code-title .word", { opacity: 0, y: 60, stagger: 0.06, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .from(".code-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".code-cta", { opacity: 0, y: 20, duration: 0.5 }, "-=0.2")
        .from(".code-editor", { opacity: 0, y: 40, duration: 0.8, ease: "power2.out" }, "-=0.5");
    }, ref);
    return () => ctx.revert();
  }, []);

  // Typewriter effect for code lines
  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, 300 + Math.random() * 200);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  const title = "Hayalinizdeki Yazılımı Kodluyoruz";

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20">
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#FF3B30]/10 blur-[150px]" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: text */}
          <div>
            <div className="code-badge mb-6 inline-flex items-center rounded-full bg-[#FF3B30]/10 px-4 py-1.5 text-sm font-medium text-[#FCA5A5]">
              Özel Yazılım Geliştirme
            </div>
            <h1 className="code-title font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[56px]">
              {title.split(" ").map((w, i) => (
                <span key={i} className="word inline-block mr-[0.15em]">
                  <span className="bg-gradient-to-r from-white to-[#FF3B30] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{w}</span>
                </span>
              ))}
            </h1>
            <p className="code-desc mt-6 max-w-md text-lg text-[#FEF2F2]/70">
              Modern teknolojiler ile ölçeklenebilir, güvenli ve performanslı yazılım çözümleri geliştiriyoruz.
            </p>
            <div className="code-cta mt-8">
              <Button href="/iletisim" size="lg" className="!bg-[#FF3B30] !text-white hover:!shadow-[0_0_30px_rgba(255,59,48,0.4)] px-8 py-4 text-lg">
                Projenizi Konuşalım
              </Button>
            </div>
          </div>

          {/* Right: IDE mockup */}
          <div className="code-editor rounded-2xl border border-[#FF3B30]/15 bg-[#231010] shadow-[0_0_60px_rgba(255,59,48,0.05)] overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-[#FF3B30]/10 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-[#FEF2F2]/30 font-mono">deploy.ts</span>
            </div>
            {/* Code area */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className={`flex transition-opacity duration-300 ${i < visibleLines ? "opacity-100" : "opacity-0"}`}
                >
                  <span className="mr-4 w-6 text-right text-[#FEF2F2]/15 select-none">{i + 1}</span>
                  <span style={{ paddingLeft: `${line.indent * 1.5}rem` }}>
                    {line.text.includes("export") || line.text.includes("const") || line.text.includes("await") ? (
                      <>
                        <span className="text-[#FF6B6B]">{line.text.split(" ")[0]}</span>
                        <span className="text-[#FEF2F2]/70">{" " + line.text.split(" ").slice(1).join(" ")}</span>
                      </>
                    ) : line.text.includes("console") ? (
                      <span className="text-[#FCA5A5]">{line.text}</span>
                    ) : line.text.includes("}") ? (
                      <span className="text-[#FF6B6B]">{line.text}</span>
                    ) : (
                      <span className="text-[#FEF2F2]/70">{line.text}</span>
                    )}
                  </span>
                </div>
              ))}
              {/* Blinking cursor */}
              {visibleLines >= codeLines.length && (
                <div className="flex">
                  <span className="mr-4 w-6 text-right text-[#FEF2F2]/15 select-none">{codeLines.length + 1}</span>
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
