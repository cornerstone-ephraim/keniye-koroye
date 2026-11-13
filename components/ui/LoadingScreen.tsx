"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const SplashReadyContext = createContext(true);

export function useSplashReady() {
  return useContext(SplashReadyContext);
}

export default function SplashScreen({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(
      () => {
        setVisible(false);
      },
      reducedMotion ? 0 : 900,
    );

    return () => {
      window.clearTimeout(timeout);
    };
  }, [reducedMotion]);

  useEffect(() => {
    if (ready) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [ready]);

  return (
    <SplashReadyContext.Provider value={ready}>
      <div inert={!ready}>{children}</div>
      <AnimatePresence onExitComplete={() => setReady(true)}>
        {visible && (
          <motion.div
            aria-label="Welcome to Keniye Koroye"
            className="fixed inset-0 z-100 bg-paper text-ink"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reducedMotion ? 0.1 : 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex min-h-svh items-center justify-center px-6 py-10 md:px-12">
              <div>
                <motion.p
                  initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-playfair text-5xl leading-none font-black tracking-normal uppercase sm:text-7xl"
                >
                  Ken<em className="text-accent italic">I</em>YĒ
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SplashReadyContext.Provider>
  );
}
