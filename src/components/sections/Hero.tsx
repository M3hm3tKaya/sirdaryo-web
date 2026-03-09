"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useCursor } from "@/lib/CursorContext";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { setColor } = useCursor();

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    const ctx = gsap.context(() => {
      const words = titleRef.current?.querySelectorAll(".word");

      if (mobile) {
        // Mobile: simple opacity fades, no transforms/blurs
        if (words) {
          gsap.set(words, { opacity: 0 });
          gsap.to(words, { opacity: 1, duration: 0.5, stagger: 0.04 });
        }
        if (subtitleRef.current) {
          gsap.set(subtitleRef.current, { opacity: 0 });
          gsap.to(subtitleRef.current, { opacity: 1, duration: 0.4, delay: 0.2 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { opacity: 0 });
          gsap.to(ctaRef.current, { opacity: 1, duration: 0.4, delay: 0.3 });
        }
        return;
      }

      // Desktop: full animations
      const tl = gsap.timeline({ delay: 0.3 });

      if (words) {
        gsap.set(words, { y: 80, opacity: 0, rotateX: 15 });
        tl.to(words, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
        });
      }

      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, filter: "blur(10px)", y: 20 });
        tl.to(
          subtitleRef.current,
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (ctaRef.current) {
        gsap.set(ctaRef.current, { opacity: 0, y: 20 });
        tl.to(
          ctaRef.current,
          { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleText = "İş Süreçlerinizi Dijitalleştirin Geleceğe Hazırlanın";

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => setColor("#FF3B30")}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Animated background glow orbs */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Top right violet glow */}
        <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-brand-violet/15 blur-[150px] hero-glow-2" />
        {/* Bottom left coral glow */}
        <div className="absolute -bottom-32 -left-20 h-[600px] w-[600px] rounded-full bg-brand-coral/15 blur-[150px] hero-glow-1" />
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[500px] rounded-full bg-brand-coral/5 blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="overflow-hidden">
            <h1
              ref={titleRef}
              className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[80px]"
              style={{ letterSpacing: "-0.02em" }}
            >
              {titleText.split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-[0.15em]">
                  <span className="text-gradient-coral">{word}</span>
                </span>
              ))}
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="mx-auto mt-8 max-w-xl text-lg text-white/70 sm:text-xl"
          >
            RPA, BPM, optimizasyon ve özel yazılım çözümleri ile işletmenizi
            bir üst seviyeye taşıyın.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <Button href="/iletisim" size="lg" className="animate-glow-pulse px-10 py-4 text-lg">
              Ücretsiz Danışmanlık
            </Button>
            <Button href="/hizmetler" variant="ghost" size="lg" className="px-10 py-4 text-lg">
              Çözümlerimiz
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator — animated chevron only */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ChevronDown className="h-6 w-6 text-white/50 animate-bounce-subtle transition-colors hover:text-white/80" />
      </div>
    </section>
  );
}
