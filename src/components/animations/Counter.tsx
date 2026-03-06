"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  value: string;
  label: string;
  className?: string;
}

export function Counter({ value, label, className = "" }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse the numeric part and prefix/suffix
    const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            setDisplay(`${prefix}${Math.round(obj.val)}${suffix}`);
          },
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [value]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <div className="text-4xl font-display font-bold sm:text-5xl lg:text-6xl">
        {display}
      </div>
      <div className="mt-2 text-sm text-white/60 sm:text-base">{label}</div>
    </div>
  );
}
