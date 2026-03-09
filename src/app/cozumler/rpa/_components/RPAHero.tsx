"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Bot } from "lucide-react";

export function RPAHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      if (mobile) {
        // Mobile: simple fade, no orbital rotation
        gsap.from(".rpa-badge", { opacity: 0, duration: 0.4 });
        gsap.from(".rpa-title .word", { opacity: 0, stagger: 0.04, duration: 0.5 });
        gsap.from(".rpa-desc", { opacity: 0, duration: 0.4, delay: 0.2 });
        gsap.from(".rpa-cta", { opacity: 0, duration: 0.4, delay: 0.3 });
        gsap.from(".rpa-visual", { opacity: 0, duration: 0.5, delay: 0.3 });
        return;
      }

      // Desktop: full animations + orbital rotations
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".rpa-badge", { opacity: 0, y: 20, duration: 0.5 })
        .from(".rpa-title .word", { opacity: 0, y: 60, stagger: 0.06, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .from(".rpa-desc", { opacity: 0, y: 20, filter: "blur(8px)", duration: 0.6 }, "-=0.3")
        .from(".rpa-cta", { opacity: 0, y: 20, duration: 0.5 }, "-=0.2")
        .from(".rpa-visual", { opacity: 0, scale: 0.9, duration: 0.8, ease: "power2.out" }, "-=0.5");

      gsap.to(".orbit-inner", { rotation: 360, duration: 8, ease: "none", repeat: -1, svgOrigin: "200 200" });
      gsap.to(".orbit-middle", { rotation: -360, duration: 12, ease: "none", repeat: -1, svgOrigin: "200 200" });
      gsap.to(".orbit-outer", { rotation: 360, duration: 16, ease: "none", repeat: -1, svgOrigin: "200 200" });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const title = "İş Süreçlerinizi Robotlarla Dönüştürün";

  return (
    <section ref={sectionRef} className="relative z-10 min-h-screen flex items-center pt-20">
      {/* Top-right glow */}
      <div className="hidden md:block absolute -top-20 -right-40 h-[500px] w-[500px] rounded-full bg-[#8B5CF6]/15 blur-[150px]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
          {/* Left */}
          <div>
            <div className="rpa-badge mb-6 inline-flex items-center rounded-full bg-[#8B5CF6]/10 px-4 py-1.5 text-sm font-medium text-[#A78BFA]">
              Robotik Süreç Otomasyonu
            </div>
            <h1 className="rpa-title font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[60px]">
              {title.split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-[0.15em]">
                  <span className="bg-gradient-to-r from-white to-[#8B5CF6] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    {word}
                  </span>
                </span>
              ))}
            </h1>
            <p className="rpa-desc mt-6 max-w-lg text-lg leading-relaxed text-[#F5F3FF]/70">
              Tekrarlayan iş süreçlerinizi akıllı robotlarla otomatize edin. İnsan hatasını sıfıra indirin,
              verimliliği maksimuma çıkartın. Çalışanlarınız değer yaratan işlere odaklansın.
            </p>
            <div className="rpa-cta mt-8">
              <Button href="/iletisim" size="lg" className="!bg-[#8B5CF6] hover:!shadow-[0_0_30px_rgba(139,92,246,0.4)] px-8 py-4 text-lg">
                Ücretsiz Danışmanlık Alın
              </Button>
            </div>
          </div>

          {/* Right — Orbital rings visual (SVG) */}
          <div className="rpa-visual relative flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px]">
              <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
                {/* Inner ring — 8s clockwise */}
                <g className="orbit-inner">
                  <circle cx="200" cy="200" r="90" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.15" />
                  <circle cx="200" cy="110" r="5" fill="#8B5CF6" style={{ filter: "drop-shadow(0 0 10px rgba(139,92,246,0.6))" }} />
                </g>
                {/* Middle ring — 12s counter-clockwise */}
                <g className="orbit-middle">
                  <circle cx="200" cy="200" r="125" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.2" />
                  <circle cx="200" cy="75" r="5" fill="#8B5CF6" style={{ filter: "drop-shadow(0 0 10px rgba(139,92,246,0.6))" }} />
                  <circle cx="92" cy="263" r="3.5" fill="#8B5CF6" opacity="0.7" style={{ filter: "drop-shadow(0 0 10px rgba(139,92,246,0.6))" }} />
                </g>
                {/* Outer ring — 16s clockwise */}
                <g className="orbit-outer">
                  <circle cx="200" cy="200" r="160" fill="none" stroke="#8B5CF6" strokeWidth="1" opacity="0.25" />
                  <circle cx="200" cy="40" r="5" fill="#8B5CF6" style={{ filter: "drop-shadow(0 0 10px rgba(139,92,246,0.6))" }} />
                </g>
              </svg>
              {/* Center icon */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-[#1A1230] p-6 shadow-[0_0_60px_rgba(139,92,246,0.2)]">
                <Bot className="h-16 w-16 text-[#8B5CF6]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
