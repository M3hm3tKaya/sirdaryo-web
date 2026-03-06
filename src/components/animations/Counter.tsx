"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function Counter({
  value,
  label,
  className = "",
  valueClassName = "text-white",
  labelClassName = "text-white/60",
}: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayNum, setDisplayNum] = useState("0");
  const [prefix, setPrefix] = useState("");
  const [suffix, setSuffix] = useState("");
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
    if (!match) {
      setDisplayNum(value);
      return;
    }

    setPrefix(match[1]);
    setSuffix(match[3]);

    const target = parseInt(match[2], 10);

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
            setDisplayNum(`${Math.round(obj.val)}`);
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
      <div className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl ${valueClassName}`}>
        {prefix && <span className="text-[0.55em] opacity-60">{prefix}</span>}
        {displayNum}
        {suffix && <span className="text-[0.55em] opacity-60">{suffix}</span>}
      </div>
      <div className={`mt-2 text-sm sm:text-base ${labelClassName}`}>{label}</div>
    </div>
  );
}
