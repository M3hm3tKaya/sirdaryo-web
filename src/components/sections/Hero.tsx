"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      const words = titleRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.set(words, { y: 60, opacity: 0 });
        tl.to(words, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
        });
      }

      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { opacity: 0, filter: "blur(10px)" });
        tl.to(
          subtitleRef.current,
          { opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (ctaRef.current) {
        gsap.set(ctaRef.current, { opacity: 0, scale: 0.9 });
        tl.to(
          ctaRef.current,
          { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleText = "İş Süreçlerinizi Dijitalleştirin Geleceğe Hazırlanın";

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-black"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,59,48,0.1),transparent_50%)]" />
      </div>

      <Container className="relative z-10 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="overflow-hidden">
            <h1
              ref={titleRef}
              className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px]"
            >
              {titleText.split(" ").map((word, i) => (
                <span key={i} className="word inline-block mr-[0.2em]">
                  <span className="text-gradient-coral">{word}</span>
                </span>
              ))}
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl"
          >
            RPA, BPMN, optimizasyon ve özel yazılım çözümleri ile işletmenizi
            bir üst seviyeye taşıyın. Sirdaryo ile verimlilik artık
            elinizin altında.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/iletisim" size="lg" className="animate-glow-pulse">
              Ücretsiz Danışmanlık
            </Button>
            <Button href="/hizmetler" variant="ghost" size="lg">
              Hizmetlerimiz
            </Button>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Keşfet</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
