"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("alreadyLoaded");

    console.log("HELLO, i can run console.log from loading.tsx");

    if (alreadyLoaded) {
      setShowLoading(false);
      return;
    } else {
      sessionStorage.setItem("alreadyLoaded", "true");
    }
  }, []);

  if (!showLoading) return null;

  return (
    showLoading && (
      <div className="h-screen w-screen top-0 left-0 fixed bg-black" />
    )
  );
}
