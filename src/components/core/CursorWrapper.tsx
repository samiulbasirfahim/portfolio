"use client";

import useMousePosition from "@/utils/useMousePosition";
import { motion } from "motion/react";
import { createContext, ReactNode, useContext, useState, useMemo } from "react";

type CursorContextType = {
  isHovered: boolean;
  setIsHovered: (v: boolean) => void;
  cursorSize: number;
  setCursorSize: (size: number) => void;
};

const CursorContext = createContext<CursorContextType>({
  isHovered: false,
  setIsHovered: () => {},
  cursorSize: 40,
  setCursorSize: () => {},
});

export const useCursorContext = () => useContext(CursorContext);

export default function CursorWrapper({ children }: { children: ReactNode }) {
  const { x, y } = useMousePosition();

  const [isHovered, setIsHovered] = useState(false);
  const [cursorSize, setCursorSize] = useState(40);

  const customCursor = false;

  return (
    <CursorContext.Provider
      value={{ isHovered, setIsHovered, cursorSize, setCursorSize }}
    >
      {customCursor && (
        <motion.div
          className="fixed top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none z-[999]"
          animate={{
            x: x - cursorSize / 2,
            y: y - cursorSize / 2,
            height: cursorSize,
            width: cursorSize,
            scale: isHovered ? 1.5 : 1,
          }}
          transition={{
            x: { type: "spring", stiffness: 200, damping: 20 },
            y: { type: "spring", stiffness: 200, damping: 20 },
            height: { type: "spring", stiffness: 300, damping: 20 },
            width: { type: "spring", stiffness: 300, damping: 20 },
            scale: { type: "spring", stiffness: 300, damping: 20 },
          }}
        />
      )}
      {children}
    </CursorContext.Provider>
  );
}
