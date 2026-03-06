"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const animations = {
  "fade-up": { y: 60, opacity: 0 },
  "fade-in": { opacity: 0 },
  "slide-left": { x: -80, opacity: 0 },
  "slide-right": { x: 80, opacity: 0 },
  scale: { scale: 0.9, opacity: 0 },
};

export function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const from = animations[animation];

    gsap.set(el, from);

    const trigger = gsap.to(el, {
      ...Object.fromEntries(Object.keys(from).map((k) => [k, k === "opacity" ? 1 : k === "scale" ? 1 : 0])),
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: once ? "play none none none" : "play reverse play reverse",
      },
    });

    return () => {
      trigger.scrollTrigger?.kill();
      trigger.kill();
    };
  }, [animation, delay, duration, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
