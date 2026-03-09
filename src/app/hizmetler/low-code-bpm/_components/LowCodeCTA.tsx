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
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/iletisim" className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-semibold text-[#EA580C] transition-all duration-300 hover:bg-[#1A130A] hover:text-white hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
                İletişime Geçin
              </Link>
              <a
                href="https://www.emakin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/60"
              >
                emakin.com
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
