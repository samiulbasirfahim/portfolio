"use client";

import { ReactNode, useEffect } from "react";
import FIrstLoading from "./FirstLoading";
import { useTransitionContext } from "./PageTransition";

export default function PageContainer({ children }: { children: ReactNode }) {
  const { setLoading } = useTransitionContext();
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {children}
      <FIrstLoading />
    </div>
  );
}
