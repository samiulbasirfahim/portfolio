"use client";

import { useTransitionContext } from "@/components/core/PageTransition";
import { useEffect } from "react";

export default function Loading() {
  const { firstLoad, setFirstLoad } = useTransitionContext();

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("alreadyLoaded");

    if (alreadyLoaded) {
      setFirstLoad(false);
      return;
    } else {
      sessionStorage.setItem("alreadyLoaded", "true");
    }
  }, []);

  if (!firstLoad) return null;

  return (
    firstLoad && <div className="h-dvh w-dvw top-0 left-0 fixed bg-black z-[9999]" />
  );
}
