"use client";

import { createContext, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

type TransitionContextType = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  firstLoad: boolean;
  setFirstLoad: (firstLoad: boolean) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  loading: false,
  setLoading: () => { },
  firstLoad: false,
  setFirstLoad: () => { },
});

export const useTransitionContext = () => useContext(TransitionContext);

export function CustomLink({
  href,
  children,
  ...props
}: {
  href: string;
  children: React.ReactNode;
}) {
  const { setLoading } = useTransitionContext();
  const router = useRouter();
  const currentPathname = usePathname();

  const normalizedHref = href.startsWith("/")
    ? href.split("?")[0]
    : `/${href.split("?")[0]}`;

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        setTimeout(() => {
          router.push(href);
        }, 800);
        if (normalizedHref !== currentPathname) {
          setLoading(true);
        }
      }}
      {...props}
    >
      {children}
    </Link>
  );
}

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const columnCount = 4;

  return (
    <TransitionContext.Provider
      value={{ loading, setLoading, firstLoad, setFirstLoad }}
    >
      <AnimatePresence>
        {loading && (
          <motion.div className="h-dvh w-dvw fixed top-0 left-0 flex z-[9999] overflow-hidden pointer-events-none">
            {[...Array(columnCount)].map((_, i) => {
              const j = columnCount - i;
              const transitionConfig = {
                duration: 0.35,
                delay: j * 0.08,
                ease: [0.22, 1, 0.36, 1] as const,
              };

              return (
                <motion.div
                  className="bg-black relative w-full h-full overflow-hidden"
                  key={i}
                  initial={{ y: "100%" }}
                  animate={{
                    y: 0,
                    transition: transitionConfig,
                  }}
                  exit={{
                    y: "-100%",
                    transition: transitionConfig,
                  }}
                >
                  <motion.div
                    className="absolute top-0 w-screen h-screen pointer-events-none select-none"
                    style={{
                      left: `-${i * (100 / columnCount)}vw`,
                    }}
                    initial={{ y: "-100%" }}
                    animate={{
                      y: 0,
                      transition: transitionConfig,
                    }}
                    exit={{
                      y: "100%",
                      transition: transitionConfig,
                    }}
                  >
                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                      <span className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white uppercase font-mono">
                        FAHIM
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </TransitionContext.Provider>
  );
}
