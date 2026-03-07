"use client";

import { useEffect, useRef, useState } from "react";
import { useCursor } from "@/lib/CursorContext";

export function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const { color } = useCursor();
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const wrapper = wrapperRef.current;
    const inner = innerRef.current;
    if (!wrapper || !inner) return;

    function setSize(size: number, opacity: number) {
      if (!inner) return;
      inner.style.width = `${size}px`;
      inner.style.height = `${size}px`;
      inner.style.opacity = `${opacity}`;
    }

    function handleMouseMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY };
    }

    function handleMouseOver(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (el.closest("[data-cursor-card]")) {
        setSize(56, 0.15);
      } else if (el.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        setSize(40, 0.25);
      }
    }

    function handleMouseOut(e: MouseEvent) {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related) {
        setSize(16, 0.8);
        return;
      }

      // Check what element we're entering
      if (related.closest("[data-cursor-card]")) {
        setSize(56, 0.15);
      } else if (related.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        setSize(40, 0.25);
      } else {
        setSize(16, 0.8);
      }
    }

    function animate() {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (wrapper) {
        wrapper.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(frame);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
      style={{ willChange: "transform" }}
    >
      <div
        ref={innerRef}
        className="rounded-full"
        style={{
          width: "16px",
          height: "16px",
          opacity: 0.8,
          backgroundColor: color,
          transform: "translate(-50%, -50%)",
          transition:
            "width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), " +
            "height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), " +
            "background-color 0.4s ease, " +
            "opacity 0.3s ease",
        }}
      />
    </div>
  );
}
