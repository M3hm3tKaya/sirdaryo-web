"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  scrollTriggered?: boolean;
  delay?: number;
}

export function TextReveal({
  text,
  className = "",
  stagger = 0.08,
  as: Tag = "h2",
  scrollTriggered = true,
  delay = 0,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll(".word");

    gsap.set(words, { y: 40, opacity: 0 });

    const config: gsap.TweenVars = {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger,
      delay,
      ease: "power3.out",
    };

    if (scrollTriggered) {
      config.scrollTrigger = {
        trigger: container,
        start: "top 85%",
        toggleActions: "play none none none",
      };
    }

    const tween = gsap.to(words, config);

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [text, stagger, scrollTriggered, delay]);

  const words = text.split(" ");

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className="word inline-block mr-[0.25em]">
            {word}
          </span>
        ))}
      </Tag>
    </div>
  );
}
