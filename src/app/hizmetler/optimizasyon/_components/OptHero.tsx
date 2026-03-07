"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TrendingUp, BarChart3, PieChart } from "lucide-react";

export function OptHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".opt-badge", { opacity: 0, y: 20, duration: 0.5 })
        .from(".opt-title .word", { opacity: 0, y: 60, stagger: 0.06, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .from(".opt-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".opt-cta", { opacity: 0, y: 20, duration: 0.5 }, "-=0.2")
        .from(".opt-dashboard", { opacity: 0, scale: 0.9, y: 30, duration: 0.8, ease: "power2.out" }, "-=0.6")
        .from(".opt-bar", { scaleY: 0, transformOrigin: "bottom", stagger: 0.1, duration: 0.6, ease: "back.out(1.5)" }, "-=0.4");
    }, ref);
    return () => ctx.revert();
  }, []);

  const title = "Veriye Dayalı Süreç Optimizasyonu";

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20">
      <div className="hidden md:block absolute -bottom-20 -right-40 h-[500px] w-[500px] rounded-full bg-[#84CC16]/10 blur-[150px]" />
      {/* Grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#84CC16 1px, transparent 1px), linear-gradient(90deg, #84CC16 1px, transparent 1px)", backgroundSize: "50px 50px" }} />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="opt-badge mb-6 inline-flex items-center rounded-full bg-[#84CC16]/10 px-4 py-1.5 text-sm font-medium text-[#A3E635]">
              Süreç Optimizasyonu
            </div>
            <h1 className="opt-title font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[56px]">
              {title.split(" ").map((w, i) => (
                <span key={i} className="word inline-block mr-[0.15em]">
                  <span className="bg-gradient-to-r from-white to-[#84CC16] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{w}</span>
                </span>
              ))}
            </h1>
            <p className="opt-desc mt-6 max-w-lg text-lg text-[#F0FDF4]/70">
              Performans analizi, darboğaz tespiti ve maliyet optimizasyonu ile işletmenizin verimliliğini maksimuma çıkartın.
            </p>
            <div className="opt-cta mt-8">
              <Button href="/iletisim" size="lg" className="!bg-[#84CC16] !text-black hover:!shadow-[0_0_30px_rgba(132,204,22,0.4)] px-8 py-4 text-lg">
                Ücretsiz Danışmanlık Alın
              </Button>
            </div>
          </div>

          {/* Mini dashboard mockup */}
          <div className="opt-dashboard rounded-2xl border border-[#84CC16]/15 bg-[#132013] p-6 shadow-[0_0_40px_rgba(132,204,22,0.05)]">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-[#F0FDF4]/30">dashboard.sirdaryo.com</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {/* Bar chart */}
              <div className="col-span-2 rounded-lg bg-[#0A1A0A] p-4">
                <div className="mb-2 flex items-center gap-1 text-xs text-[#F0FDF4]/40">
                  <BarChart3 className="h-3 w-3" /> Verimlilik
                </div>
                <div className="flex items-end gap-1.5 h-20">
                  {[40, 55, 35, 70, 60, 85, 75, 90].map((h, i) => (
                    <div key={i} className="opt-bar flex-1 rounded-t bg-gradient-to-t from-[#65A30D] to-[#A3E635]" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              {/* Stat cards */}
              <div className="flex flex-col gap-3">
                <div className="rounded-lg bg-[#0A1A0A] p-3 text-center">
                  <TrendingUp className="mx-auto h-4 w-4 text-[#A3E635]" />
                  <div className="mt-1 text-lg font-bold text-[#A3E635]">+35%</div>
                  <div className="text-[10px] text-[#F0FDF4]/40">Verimlilik</div>
                </div>
                <div className="rounded-lg bg-[#0A1A0A] p-3 text-center">
                  <PieChart className="mx-auto h-4 w-4 text-[#A3E635]" />
                  <div className="mt-1 text-lg font-bold text-[#A3E635]">-25%</div>
                  <div className="text-[10px] text-[#F0FDF4]/40">Maliyet</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
