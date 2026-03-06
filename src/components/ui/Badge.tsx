import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  color?: "coral" | "violet" | "lime" | "amber" | "cyan" | "white";
  className?: string;
}

const colorMap = {
  coral: "bg-brand-coral/10 text-brand-coral border-brand-coral/20",
  violet: "bg-brand-violet/10 text-brand-violet border-brand-violet/20",
  lime: "bg-brand-lime/10 text-brand-lime border-brand-lime/20",
  amber: "bg-brand-amber/10 text-brand-amber border-brand-amber/20",
  cyan: "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20",
  white: "bg-white/10 text-white border-white/20",
};

export function Badge({ children, color = "white", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
