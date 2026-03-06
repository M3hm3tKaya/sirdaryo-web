"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type CursorSize = "default" | "large" | "text";

interface CursorContextType {
  color: string;
  setColor: (hex: string) => void;
  size: CursorSize;
  setSize: (s: CursorSize) => void;
}

const CursorContext = createContext<CursorContextType>({
  color: "#FF3B30",
  setColor: () => {},
  size: "default",
  setSize: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState("#FF3B30");
  const [size, setSize] = useState<CursorSize>("default");

  return (
    <CursorContext.Provider value={{ color, setColor, size, setSize }}>
      {children}
    </CursorContext.Provider>
  );
}

export const useCursor = () => useContext(CursorContext);
