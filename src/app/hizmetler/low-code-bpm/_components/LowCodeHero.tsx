"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function LowCodeHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      if (mobile) {
        gsap.from(".lc-badge", { opacity: 0, duration: 0.4 });
        gsap.from(".lc-title .word", { opacity: 0, stagger: 0.04, duration: 0.5 });
        gsap.from(".lc-desc", { opacity: 0, duration: 0.4, delay: 0.2 });
        gsap.from(".lc-cta", { opacity: 0, duration: 0.4, delay: 0.3 });
        gsap.from(".lc-logo-hero", { opacity: 0, duration: 0.5, delay: 0.3 });
        return;
      }

      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".lc-badge", { opacity: 0, y: 20, duration: 0.5 })
        .from(".lc-title .word", { opacity: 0, y: 60, stagger: 0.06, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .from(".lc-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".lc-cta", { opacity: 0, y: 20, duration: 0.5 }, "-=0.2")
        .from(".lc-logo-hero", { opacity: 0, scale: 0.9, duration: 0.8, ease: "power2.out" }, "-=0.5");
    }, ref);
    return () => ctx.revert();
  }, []);

  const title = "Low-Code ile Kurumsal Dijital Dönüşüm";

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20">
      <div className="hidden md:block absolute -top-20 -right-40 h-[500px] w-[500px] rounded-full bg-[#F97316]/10 blur-[150px]" />
      <div className="hidden md:block absolute -bottom-20 -left-40 h-[400px] w-[400px] rounded-full bg-[#F97316]/8 blur-[120px]" />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-16">
          <div>
            <div className="lc-badge mb-6 inline-flex items-center rounded-full bg-[#F97316]/10 px-4 py-1.5 text-sm font-medium text-[#FB923C]">
              Low-Code BPM
            </div>
            <h1 className="lc-title font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[56px]">
              {title.split(" ").map((w, i) => (
                <span key={i} className="word inline-block mr-[0.15em]">
                  <span className="bg-gradient-to-r from-white to-[#F97316] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    {w}
                  </span>
                </span>
              ))}
            </h1>
            <p className="lc-desc mt-6 max-w-lg text-lg leading-relaxed text-[#FFF7ED]/70">
              Emakin BPM platformu ile iş süreçlerinizi karmaşık sistemlere ihtiyaç duymadan dijitalleştirin ve otomatikleştirin. Sürükle-bırak kolaylığında kurumsal çözümler.
            </p>
            <div className="lc-cta mt-8">
              <Button href="/iletisim" size="lg" className="!bg-[#F97316] !text-white hover:!shadow-[0_0_30px_rgba(249,115,22,0.4)] px-8 py-4 text-lg">
                Ücretsiz Danışmanlık Alın
              </Button>
            </div>
          </div>

          <div className="lc-logo-hero flex items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              <div className="relative rounded-3xl border border-[#F97316]/15 bg-[#1A130A] px-10 py-4 shadow-[0_0_80px_rgba(249,115,22,0.08)]">
                <img
                  src="/images/emakin-logo.png"
                  alt="Emakin - Simplify Your Business"
                  className="w-[280px] sm:w-[320px]"
                  style={{ marginTop: "-40px", marginBottom: "-40px" }}
                  loading="lazy"
                />
              </div>
              <a
                href="https://www.emakin.com"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-[#F97316]/30 px-8 py-4 text-lg font-medium text-[#FB923C] transition-all duration-300 hover:bg-[#F97316]/10 hover:border-[#F97316]/60"
              >
                emakin.com
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
