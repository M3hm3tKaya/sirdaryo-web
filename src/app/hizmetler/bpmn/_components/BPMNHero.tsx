"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function BPMNHero() {
  const ref = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial hidden states BEFORE making SVG visible
      const heroNodes: [string, string][] = [
        [".hero-ns", "80 175"],
        [".hero-nt1", "270 175"],
        [".hero-ngw", "480 175"],
        [".hero-n2a", "695 97"],
        [".hero-n2b", "695 277"],
        [".hero-nend", "930 175"],
      ];
      heroNodes.forEach(([sel, origin]) => {
        gsap.set(sel, { scale: 0, opacity: 0, svgOrigin: origin });
      });
      gsap.set(".hero-fc-arrow", { opacity: 0 });
      gsap.set(".hero-fc-head", { opacity: 0, scale: 0 });

      // Now reveal the SVG (children are individually hidden)
      gsap.set(svgRef.current, { visibility: "visible" });

      const tl = gsap.timeline({ delay: 0.2 });

      // Text animations
      tl.from(".bpmn-badge", { opacity: 0, y: 20, duration: 0.5 })
        .from(".bpmn-title .word", { opacity: 0, y: 60, stagger: 0.06, duration: 0.7, ease: "power3.out" }, "-=0.2")
        .from(".bpmn-desc", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(".bpmn-cta", { opacity: 0, y: 20, duration: 0.5 }, "-=0.2");

      // Flowchart: node+arrow parallel, next group starts when arrow ends
      const ad = 0.6;  // arrow draw duration
      const ho = ad - 0.3; // arrowhead appears 0.3s before arrow ends

      // s1: Start node + Arrow1
      tl.addLabel("s1", "+=0.1");
      tl.to(".hero-ns", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s1");
      tl.fromTo(".hero-a1", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s1");
      tl.to(".hero-h1", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s1+=${ho}`);

      // s2: Task1 + Arrow2
      tl.addLabel("s2", `s1+=${ad}`);
      tl.to(".hero-nt1", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s2");
      tl.fromTo(".hero-a2", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s2");
      tl.to(".hero-h2", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s2+=${ho}`);

      // s3: Gateway + Branch arrows (both)
      tl.addLabel("s3", `s2+=${ad}`);
      tl.to(".hero-ngw", { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.7)" }, "s3");
      tl.fromTo(".hero-a-upper", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s3");
      tl.fromTo(".hero-a-lower", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s3");
      tl.to(".hero-hu", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s3+=${ho}`);
      tl.to(".hero-hl", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s3+=${ho}`);

      // s4: Task2A/2B + Merge arrows (both)
      tl.addLabel("s4", `s3+=${ad}`);
      tl.to(".hero-n2a", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s4");
      tl.to(".hero-n2b", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s4");
      tl.fromTo(".hero-m-upper", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s4");
      tl.fromTo(".hero-m-lower", { opacity: 1, strokeDashoffset: 300 }, { strokeDashoffset: 0, duration: ad, ease: "none" }, "s4");
      tl.to(".hero-hmu", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s4+=${ho}`);
      tl.to(".hero-hml", { opacity: 1, scale: 1, duration: 0.15, ease: "back.out(2)" }, `s4+=${ho}`);

      // s5: End node
      tl.addLabel("s5", `s4+=${ad}`);
      tl.to(".hero-nend", { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }, "s5");
    }, ref);
    return () => ctx.revert();
  }, []);

  const title = "Süreçlerinizi Görselleştirin Optimize Edin";

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center pt-20">
      <div className="absolute -top-20 -left-40 h-[500px] w-[500px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />
      <div className="absolute -bottom-20 -right-40 h-[400px] w-[400px] rounded-full bg-[#06B6D4]/10 blur-[150px]" />

      <Container className="relative z-10 w-full">
        <div className="mx-auto max-w-3xl text-center">
          <div className="bpmn-badge mb-6 inline-flex items-center rounded-full bg-[#06B6D4]/10 px-4 py-1.5 text-sm font-medium text-[#22D3EE]">
            İş Süreç Yönetimi
          </div>
          <h1 className="bpmn-title font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-[60px]">
            {title.split(" ").map((w, i) => (
              <span key={i} className="word inline-block mr-[0.15em]">
                <span className="bg-gradient-to-r from-white to-[#06B6D4] bg-clip-text text-transparent [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  {w}
                </span>
              </span>
            ))}
          </h1>
          <p className="bpmn-desc mt-6 mx-auto max-w-xl text-lg text-[#ECFEFF]/70">
            BPMN 2.0 standartlarına uygun süreç yönetimi ile organizasyonel verimliliği artırın.
            İş süreçlerinizi modelleyin, analiz edin ve optimize edin.
          </p>
          <div className="bpmn-cta mt-8">
            <Button href="/iletisim" size="lg" className="!bg-[#06B6D4] hover:!shadow-[0_0_30px_rgba(6,182,212,0.4)] px-8 py-4 text-lg">
              Ücretsiz Danışmanlık Alın
            </Button>
          </div>
        </div>
      </Container>

      {/* Flowchart OUTSIDE Container — no max-width constraint */}
      <div className="bpmn-flow relative z-10 w-full mx-auto mt-16 px-4" style={{ maxWidth: "1400px" }}>
        <svg ref={svgRef} viewBox="0 0 1100 350" className="bpmn-fc-hidden w-full h-auto" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* ===== ARROWS (behind nodes, no markerEnd) ===== */}
            <line className="hero-fc-arrow hero-a1" x1="115" y1="175" x2="178" y2="175" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />
            <line className="hero-fc-arrow hero-a2" x1="360" y1="175" x2="443" y2="175" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />
            <path className="hero-fc-arrow hero-a-upper" d="M515 158 L608 97" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />
            <path className="hero-fc-arrow hero-a-lower" d="M515 192 L608 258" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />
            <path className="hero-fc-arrow hero-m-upper" d="M780 97 L893 158" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />
            <path className="hero-fc-arrow hero-m-lower" d="M780 277 L893 192" stroke="#06B6D4" strokeWidth="2.5" strokeDasharray="300" />

            {/* ===== ARROWHEADS (separate polygons) ===== */}
            <polygon className="hero-fc-head hero-h1" points="168,170 178,175 168,180" fill="#06B6D4" />
            <polygon className="hero-fc-head hero-h2" points="433,170 443,175 433,180" fill="#06B6D4" />
            <polygon className="hero-fc-head hero-hu" points="-10,-5 0,0 -10,5" transform="translate(608,97) rotate(-33)" fill="#06B6D4" />
            <polygon className="hero-fc-head hero-hl" points="-10,-5 0,0 -10,5" transform="translate(608,258) rotate(35)" fill="#06B6D4" />
            <polygon className="hero-fc-head hero-hmu" points="-10,-5 0,0 -10,5" transform="translate(893,158) rotate(28)" fill="#06B6D4" />
            <polygon className="hero-fc-head hero-hml" points="-10,-5 0,0 -10,5" transform="translate(893,192) rotate(-37)" fill="#06B6D4" />

            {/* ===== NODES (on top) ===== */}

            {/* Start — r=35 */}
            <g className="hero-ns">
              <circle cx="80" cy="175" r="35" stroke="#06B6D4" strokeWidth="3" fill="#0F2137" />
              <text x="80" y="175" textAnchor="middle" dominantBaseline="central" fill="#22D3EE" fontSize="17" fontWeight="600" fontFamily="monospace">S</text>
            </g>

            {/* Task 1 — 180x60 */}
            <g className="hero-nt1">
              <rect x="180" y="145" width="180" height="60" rx="8" stroke="#06B6D4" strokeWidth="2" fill="#0F2137" />
              <text x="270" y="175" textAnchor="middle" dominantBaseline="central" fill="#ECFEFF" fontSize="17" fontWeight="500">Süreç 1</text>
            </g>

            {/* Gateway — 70x70 diamond */}
            <g className="hero-ngw">
              <polygon points="480,140 515,175 480,210 445,175" stroke="#06B6D4" strokeWidth="2.5" fill="#0F2137" />
              <text x="480" y="175" textAnchor="middle" dominantBaseline="central" fill="#22D3EE" fontSize="20" fontWeight="700">?</text>
            </g>

            {/* Task 2A — 170x55 */}
            <g className="hero-n2a">
              <rect x="610" y="70" width="170" height="55" rx="8" stroke="#06B6D4" strokeWidth="2" fill="#0F2137" />
              <text x="695" y="97" textAnchor="middle" dominantBaseline="central" fill="#ECFEFF" fontSize="16" fontWeight="500">Süreç 2A</text>
            </g>

            {/* Task 2B — 170x55 */}
            <g className="hero-n2b">
              <rect x="610" y="250" width="170" height="55" rx="8" stroke="#06B6D4" strokeWidth="2" fill="#0F2137" />
              <text x="695" y="277" textAnchor="middle" dominantBaseline="central" fill="#ECFEFF" fontSize="16" fontWeight="500">Süreç 2B</text>
            </g>

            {/* End — r=35, double ring */}
            <g className="hero-nend">
              <circle cx="930" cy="175" r="35" stroke="#06B6D4" strokeWidth="3" fill="#0F2137" />
              <circle cx="930" cy="175" r="27" stroke="#06B6D4" strokeWidth="2" fill="none" />
              <text x="930" y="175" textAnchor="middle" dominantBaseline="central" fill="#22D3EE" fontSize="17" fontWeight="600" fontFamily="monospace">E</text>
            </g>
          </svg>
        </div>
    </section>
  );
}
