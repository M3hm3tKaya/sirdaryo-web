"use client";

import { useEffect, type ReactNode } from "react";
import { useCursor } from "@/lib/CursorContext";

export function PageCursorColor({
  color,
  children,
}: {
  color: string;
  children: ReactNode;
}) {
  const { setColor } = useCursor();

  useEffect(() => {
    setColor(color);
    return () => setColor("#FF3B30");
  }, [color, setColor]);

  return <>{children}</>;
}
