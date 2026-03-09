"use client";

export function RPABackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#8B5CF6 1px, transparent 1px), linear-gradient(90deg, #8B5CF6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      {/* Pulsing dots at grid intersections */}
      {[
        { top: "15%", left: "10%", delay: "0s" },
        { top: "35%", left: "85%", delay: "1.5s" },
        { top: "60%", left: "25%", delay: "3s" },
        { top: "80%", left: "70%", delay: "0.8s" },
        { top: "45%", left: "55%", delay: "2.2s" },
      ].map((dot, i) => (
        <div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#8B5CF6]"
          style={{
            top: dot.top,
            left: dot.left,
            animation: `pulse-dot 3s ease-in-out ${dot.delay} infinite`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(2); box-shadow: 0 0 12px rgba(139,92,246,0.6); }
        }
      `}</style>
    </div>
  );
}
