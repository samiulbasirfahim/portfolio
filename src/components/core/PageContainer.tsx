"use client";

import { HTMLAttributes, ReactNode, useEffect } from "react";
import FIrstLoading from "./FirstLoading";
import { useTransitionContext } from "./PageTransition";

export default function PageContainer({ children }: { children: ReactNode }) {
  const { setLoading } = useTransitionContext();

  useEffect(() => {
    setLoading(false);
    // setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div className="mx-dynamic">
      {children}
      <FIrstLoading />
    </div>
  );
}
