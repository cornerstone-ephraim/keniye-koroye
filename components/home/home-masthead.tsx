"use client";

import { motion } from "motion/react";
import { personal } from "@/lib/data";

export function HomeMasthead() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="border-b-[3px] border-double border-ink px-6 py-8 font-mono md:px-12"
    >
      {/* Mobile */}
      <div className="mb-2 flex flex-col items-center text-center md:hidden">
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          className="font-playfair text-5xl leading-none font-black tracking-normal uppercase min-[375px]:text-6xl sm:text-7xl"
        >
          KEN<em className="text-accent italic">I</em>YĒ
        </motion.h1>

        <p className="mt-2 font-fraunces text-[0.82rem] text-muted italic">
          Building impactful technology
        </p>

        <div className="mt-2 flex flex-col items-center gap-0.5">
          <span className="text-[0.6rem] tracking-[0.12em] text-muted uppercase">
            Product Manager
          </span>
          <span className="text-[0.6rem] tracking-[0.12em] text-muted uppercase">
            Product Developer
          </span>
          <span className="text-[0.6rem] tracking-[0.12em] text-muted uppercase">
            Product Researcher
          </span>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-end gap-6 md:grid">
        <div className="text-[0.62rem] leading-loose tracking-[0.15em] text-muted uppercase">
          Product Manager
          <br />
          Product Developer
          <br />
          Product Researcher
        </div>

        <div className="text-center">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            className="font-playfair text-7xl leading-none font-black tracking-normal uppercase lg:text-8xl xl:text-9xl"
          >
            KEN<em className="text-accent italic">I</em>YĒ
          </motion.h1>

          <p className="mt-2 font-fraunces text-[0.9rem] text-muted italic">
            Building impactful technology
          </p>
        </div>

        <div className="text-right text-[0.62rem] leading-loose tracking-widest text-muted">
          {personal.location}
        </div>
      </div>
    </motion.div>
  );
}
