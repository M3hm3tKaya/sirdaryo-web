"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { useCursor } from "@/lib/CursorContext";

export function LowCodeCTA() {
  const { setColor } = useCursor();
  return (
    <section
      className="relative z-10 py-24 lg:py-32"
      style={{ background: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)" }}
      onMouseEnter={() => setColor("#FFFFFF")}
      onMouseLeave={() => setColor("#F97316")}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Low-Code BPM ile Tanışın
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="mt-4 text-lg text-white/70">
              Emakin platformu hakkında detaylı bilgi almak ve süreçlerinizi dijitalleştirmek için bize ulaşın.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="scale" delay={0.3}>
            <Link href="/iletisim" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#EA580C] transition-all duration-300 hover:bg-[#1A130A] hover:text-white hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
              İletişime Geçin
            </Link>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
