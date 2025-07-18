"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function FIrstLoading() {
  const [loading, setLoading] = useState(true);
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      setTimeout(() => setLoading(false), 1000);
      firstLoad.current = false;
      console.log("Page loaded, and its the first load");
    }
  }, []);

  const columnCount = 5;
  return (
    <AnimatePresence>
      {loading && (
        <motion.div className="w-screen h-screen fixed top-0 left-0 flex">
          {[...Array(columnCount)].map((_, i) => {
            const j = columnCount - i;
            return (
              <motion.div
                className="bg-black relative w-full h-full"
                key={i}
                initial={{ top: 0, height: "100%" }}
                exit={{
                  height: 0,
                  transition: {
                    duration: 0.3,
                    delay: j * 0.08,
                  },
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
