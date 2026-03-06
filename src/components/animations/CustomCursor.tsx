"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    function handleMouseMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY };
    }

    function handleMouseOver(e: MouseEvent) {
      const el = e.target as HTMLElement;
      if (el.closest("a, button, [role='button'], input, textarea, select")) {
        isHovering.current = true;
      }
    }

    function handleMouseOut() {
      isHovering.current = false;
    }

    function animate() {
      pos.current.x += (target.current.x - pos.current.x) * 0.15;
      pos.current.y += (target.current.y - pos.current.y) * 0.15;

      if (cursor) {
        cursor.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) scale(${isHovering.current ? 1.5 : 1})`;
      }

      requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    const frame = requestAnimationFrame(animate);

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(frame);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block"
      style={{ willChange: "transform" }}
    >
      <div className="h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-coral bg-brand-coral/20 transition-[width,height] duration-200" />
    </div>
  );
}
