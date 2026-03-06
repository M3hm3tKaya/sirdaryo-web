"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  { id: "start", label: "Başla", detail: "Süreç tetikleyici olay" },
  { id: "t1", label: "Veri Toplama", detail: "Kaynaklardan veri toplama ve doğrulama" },
  { id: "g1", label: "Onay?", detail: "Onay verildi mi? Süreç çıktısı kontrol edilir. Onay verilirse işleme geçilir, verilmezse veri toplama adımına dönülür." },
  { id: "t2", label: "İşleme", detail: "Verilerin işlenmesi ve dönüştürülmesi" },
  { id: "t3", label: "Raporlama", detail: "Sonuç raporunun oluşturulması" },
  { id: "end", label: "Bitir", detail: "Süreç tamamlandı" },
];

export function BPMNFlowChart() {
  const [hovered, setHovered] = useState<string | null>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const hl = (id: string) => hovered === id;
  const stroke = (id: string) => hl(id) ? "#22D3EE" : "#06B6D4";
  const nodeFill = (id: string) => hl(id) ? "rgba(6,182,212,0.15)" : "#0A1628";

  useEffect(() => {
    if (!flowRef.current) return;
    const ctx = gsap.context(() => {
      // 1. Set initial hidden states BEFORE making SVG visible
      const nodeOrigins: [string, string][] = [
        [".fc-node-start", "60 140"],
        [".fc-node-t1", "260 140"],
        [".fc-node-g1", "465 140"],
        [".fc-node-t2", "700 140"],
        [".fc-node-t3", "940 140"],
        [".fc-node-end", "1136 140"],
      ];
      nodeOrigins.forEach(([sel, origin]) => {
        gsap.set(sel, { scale: 0, opacity: 0, svgOrigin: origin });
      });
      gsap.set(".fc-arrow", { opacity: 0 });
      gsap.set(".fc-head", { opacity: 0, scale: 0 });
      gsap.set([".fc-hayir-1", ".fc-hayir-2", ".fc-hayir-3"], { opacity: 0 });
      gsap.set([".fc-label-evet", ".fc-label-hayir"], { opacity: 0 });

      // 2. Now reveal the SVG (children are individually hidden)
      gsap.set(svgRef.current, { visibility: "visible" });

      // 3. Timeline
      const tl = gsap.timeline({
        scrollTrigger: { trigger: flowRef.current, start: "top 80%", once: true },
      });

      // Node+arrow parallel, next group starts when arrow ends
      const ad = 0.6;  // arrow draw duration
      const ho = ad - 0.3; // arrowhead appears 0.3s before arrow ends

      // s1: Başla + Arrow1
      tl.addLabel("s1");
      tl.to(".fc-node-start", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s1");
      tl.fromTo(".fc-arrow-1", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s1");
      tl.to(".fc-head-1", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s1+=${ho}`);

      // s2: Veri Toplama + Arrow2
      tl.addLabel("s2", `s1+=${ad}`);
      tl.to(".fc-node-t1", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s2");
      tl.fromTo(".fc-arrow-2", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s2");
      tl.to(".fc-head-2", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s2+=${ho}`);

      // s3: Gateway + Evet label + Arrow evet
      tl.addLabel("s3", `s2+=${ad}`);
      tl.to(".fc-node-g1", { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "s3");
      tl.to(".fc-label-evet", { opacity: 1, duration: 0.3 }, "s3");
      tl.fromTo(".fc-arrow-evet", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s3");
      tl.to(".fc-head-evet", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s3+=${ho}`);

      // s4: İşleme + Arrow4
      tl.addLabel("s4", `s3+=${ad}`);
      tl.to(".fc-node-t2", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s4");
      tl.fromTo(".fc-arrow-4", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s4");
      tl.to(".fc-head-4", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s4+=${ho}`);

      // s5: Raporlama + Arrow5
      tl.addLabel("s5", `s4+=${ad}`);
      tl.to(".fc-node-t3", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s5");
      tl.fromTo(".fc-arrow-5", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s5");
      tl.to(".fc-head-5", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s5+=${ho}`);

      // s6: Bitir
      tl.addLabel("s6", `s5+=${ad}`);
      tl.to(".fc-node-end", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s6");

      // s7: Hayır loop
      tl.to(".fc-hayir-1", { opacity: 1, duration: 0.3 }, "s6+=0.5");
      tl.to(".fc-hayir-2", { opacity: 1, duration: 0.4 }, "+=0.05");
      tl.to(".fc-hayir-3", { opacity: 1, duration: 0.3 }, "+=0.05");
      tl.to(".fc-head-hayir", { opacity: 1, scale: 1, duration: 0.15 }, "-=0.1");
      tl.to(".fc-label-hayir", { opacity: 1, duration: 0.3 }, "-=0.2");
    }, flowRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative z-10 py-24 lg:py-32 bg-[#0F2137]">
      <Container>
        <ScrollReveal animation="fade-up">
          <h2 className="mb-4 text-center font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            İnteraktif Süreç Haritası
          </h2>
          <p className="mx-auto mb-16 max-w-lg text-center text-[#ECFEFF]/50">
            Düğümlere tıklayarak süreç adımlarını keşfedin
          </p>
        </ScrollReveal>
      </Container>

      <div ref={flowRef} className="mx-auto w-full max-w-[1400px] px-6">
        <svg ref={svgRef} viewBox="0 0 1200 340" className="bpmn-fc-hidden w-full h-auto" preserveAspectRatio="xMidYMid meet">
          {/* ===== ARROWS (no markerEnd, behind nodes) ===== */}
          <line className="fc-arrow fc-arrow-1" x1="96" y1="140" x2="178" y2="140" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />
          <line className="fc-arrow fc-arrow-2" x1="340" y1="140" x2="391" y2="140" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />
          <line className="fc-arrow fc-arrow-evet" x1="537" y1="140" x2="618" y2="140" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />
          <line className="fc-arrow fc-arrow-4" x1="780" y1="140" x2="858" y2="140" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />
          <line className="fc-arrow fc-arrow-5" x1="1020" y1="140" x2="1098" y2="140" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />

          {/* Hayır loop (dashed) */}
          <line className="fc-hayir-1" x1="465" y1="212" x2="465" y2="285" stroke="#FF6B6B" strokeWidth="2.5" strokeDasharray="8 5" />
          <line className="fc-hayir-2" x1="465" y1="285" x2="260" y2="285" stroke="#FF6B6B" strokeWidth="2.5" strokeDasharray="8 5" />
          <line className="fc-hayir-3" x1="260" y1="285" x2="260" y2="176" stroke="#FF6B6B" strokeWidth="2.5" strokeDasharray="8 5" />

          {/* ===== ARROWHEADS (separate polygons) ===== */}
          <polygon className="fc-head fc-head-1" points="168,135 178,140 168,145" fill="#06B6D4" />
          <polygon className="fc-head fc-head-2" points="381,135 391,140 381,145" fill="#06B6D4" />
          <polygon className="fc-head fc-head-evet" points="608,135 618,140 608,145" fill="#06B6D4" />
          <polygon className="fc-head fc-head-4" points="848,135 858,140 848,145" fill="#06B6D4" />
          <polygon className="fc-head fc-head-5" points="1088,135 1098,140 1088,145" fill="#06B6D4" />
          {/* Hayır arrowhead (pointing up) */}
          <polygon className="fc-head fc-head-hayir" points="-8,-5 0,0 8,-5" transform="translate(260,176) rotate(180)" fill="#FF6B6B" />

          {/* ===== LABELS ===== */}
          <text className="fc-label-evet" x="568" y="126" fill="#22D3EE" fontSize="14" fontWeight="600">Evet</text>
          <text className="fc-label-hayir" x="350" y="305" fill="#FF6B6B" fontSize="14" fontWeight="600">Hayır</text>

          {/* ===== NODES (on top of arrows) ===== */}

          {/* Başla */}
          <g className="fc-node-start" onMouseEnter={() => setHovered("start")} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
            <circle cx="60" cy="140" r="36" stroke={stroke("start")} strokeWidth="3" fill={nodeFill("start")} className="transition-all duration-300" />
            <text x="60" y="140" textAnchor="middle" dominantBaseline="central" fill="#22D3EE" fontSize="16" fontWeight="600">Başla</text>
          </g>

          {/* Veri Toplama */}
          <g className="fc-node-t1" onMouseEnter={() => setHovered("t1")} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
            <rect x="180" y="108" width="160" height="64" rx="12" stroke={stroke("t1")} strokeWidth="2.5" fill={nodeFill("t1")} className="transition-all duration-300" />
            <text x="260" y="140" textAnchor="middle" dominantBaseline="central" fill="#ECFEFF" fontSize="16" fontWeight="500">Veri Toplama</text>
          </g>

          {/* Onay verildi mi? */}
          <g className="fc-node-g1" onMouseEnter={() => setHovered("g1")} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
            <polygon points="465,68 537,140 465,212 393,140" stroke={stroke("g1")} strokeWidth="3" fill={nodeFill("g1")} className="transition-all duration-300" />
            <text x="465" y="140" textAnchor="middle" dominantBaseline="central" fill="#22D3EE" fontSize="16" fontWeight="700">Onay?</text>
          </g>

          {/* İşleme */}
          <g className="fc-node-t2" onMouseEnter={() => setHovered("t2")} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
            <rect x="620" y="108" width="160" height="64" rx="12" stroke={stroke("t2")} strokeWidth="2.5" fill={nodeFill("t2")} className="transition-all duration-300" />
            <text x="700" y="140" textAnchor="middle" dominantBaseline="central" fill="#ECFEFF" fontSize="16" fontWeight="500">İşleme</text>
          </g>

          {/* Raporlama */}
          <g className="fc-node-t3" onMouseEnter={() => setHovered("t3")} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
            <rect x="860" y="108" width="160" height="64" rx="12" stroke={stroke("t3")} strokeWidth="2.5" fill={nodeFill("t3")} className="transition-all duration-300" />
            <text x="940" y="140" textAnchor="middle" dominantBaseline="central" fill="#ECFEFF" fontSize="16" fontWeight="500">Raporlama</text>
          </g>

          {/* Bitir */}
          <g className="fc-node-end" onMouseEnter={() => setHovered("end")} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
            <circle cx="1136" cy="140" r="36" stroke={stroke("end")} strokeWidth="3" fill={nodeFill("end")} className="transition-all duration-300" />
            <circle cx="1136" cy="140" r="28" stroke={stroke("end")} strokeWidth="2" fill="none" className="transition-all duration-300" />
            <text x="1136" y="140" textAnchor="middle" dominantBaseline="central" fill="#22D3EE" fontSize="16" fontWeight="600">Bitir</text>
          </g>
        </svg>

        {/* Tooltip */}
        <div className={`mx-auto mt-8 max-w-md rounded-xl border border-[#06B6D4]/20 bg-[#0A1628] p-5 text-center transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          <p className="text-base text-[#22D3EE]">
            {hovered ? nodes.find((n) => n.id === hovered)?.detail : "\u00A0"}
          </p>
        </div>
      </div>
    </section>
  );
}
