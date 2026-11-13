"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function GTVReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={reduce ? { opacity: 1, y: 0 } : undefined}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
      transition={{ duration: reduce ? 0 : 0.5 }}
    >
      {children}
    </motion.div>
  );
}
