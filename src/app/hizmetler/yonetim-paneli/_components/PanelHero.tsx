"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BarChart3, TrendingUp, Users, Activity } from "lucide-react";

export function PanelHero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.from(".panel-badge", { opacity: 0, y: 20, duration: 0.5 })
        .from(".panel-title .word", { opacity: 0, y: 60, stagger: 0.06, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .from(".panel-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".panel-cta", { opacity: 0, y: 20, duration: 0.5 }, "-=0.2")
        .from(".panel-mockup", { opacity: 0, y: 40, duration: 0.8, ease: "power2.out" }, "-=0.5")
        .from(".panel-widget", { opacity: 0, y: 20, stagger: 0.1, duration: 0.5, ease: "power2.out" }, "-=0.3");
    }, ref);
    return () => ctx.revert();
  }, []);

  const title = "Verilerinizi Tek Ekranda Yönetin";

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20">
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-[#F59E0B]/10 blur-[150px]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="panel-badge mb-6 inline-flex items-center rounded-full bg-[#F59E0B]/10 px-4 py-1.5 text-sm font-medium text-[#FBBF24]">
            Dashboard & Admin Panel
          </div>
          <h1 className="panel-title font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[60px]">
            {title.split(" ").map((w, i) => (
              <span key={i} className="word inline-block mr-[0.15em]">
                <span className="bg-gradient-to-r from-white to-[#F59E0B] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{w}</span>
              </span>
            ))}
          </h1>
          <p className="panel-desc mt-6 mx-auto max-w-xl text-lg text-[#FFFBEB]/70">
            Özel tasarım dashboard ve admin panel çözümleri ile veri odaklı kararlar alın.
          </p>
          <div className="panel-cta mt-8">
            <Button href="/iletisim" size="lg" className="!bg-[#F59E0B] !text-black hover:!shadow-[0_0_30px_rgba(245,158,11,0.4)] px-8 py-4 text-lg">
              Ücretsiz Danışmanlık Alın
            </Button>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="panel-mockup mx-auto mt-12 max-w-3xl rounded-2xl border border-[#F59E0B]/15 bg-[#231C10] p-4 shadow-[0_0_60px_rgba(245,158,11,0.05)]">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { icon: BarChart3, label: "Gelir", value: "₺1.2M" },
              { icon: Users, label: "Kullanıcı", value: "2.4K" },
              { icon: TrendingUp, label: "Büyüme", value: "+18%" },
              { icon: Activity, label: "Aktif", value: "99.9%" },
            ].map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.label} className="panel-widget rounded-lg bg-[#1A150A] p-3 text-center">
                  <Icon className="mx-auto h-5 w-5 text-[#FBBF24]" />
                  <div className="mt-1 text-lg font-bold text-[#FBBF24]">{w.value}</div>
                  <div className="text-[10px] text-[#FFFBEB]/40">{w.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
