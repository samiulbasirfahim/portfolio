"use client";

import { createContext, useContext, useEffect, useState } from "react";
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
  setLoading: () => {},
  firstLoad: false,
  setFirstLoad: () => {},
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
        }, 1000);
        console.log("Route change started:", href, new Date().toISOString());
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
  useEffect(() => {
    console.log(`Current state for loading is ${loading}`);
  }, [loading]);

  const columnCount = 4;

  return (
    <TransitionContext.Provider
      value={{ loading, setLoading, firstLoad, setFirstLoad }}
    >
      <AnimatePresence>
        {loading && (
          <motion.div className="h-dvh w-dvw fixed top-0 left-0 flex">
            {[...Array(columnCount)].map((_, i) => {
              const j = columnCount - i;
              return (
                <motion.div
                  className="bg-black relative w-full h-full"
                  key={i}
                  initial={{ top: "100vh" }}
                  animate={{
                    top: 0,
                    transition: {
                      duration: 0.3,
                      delay: j * 0.08,
                    },
                  }}
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
      {children}
    </TransitionContext.Provider>
  );
}
