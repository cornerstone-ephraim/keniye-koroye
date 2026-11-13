"use client";

import { motion } from "motion/react";
import { bio } from "@/lib/data";

export function HomeBio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25 }}
      className="mb-7 space-y-5 font-fraunces"
    >
      <p className="text-xl leading-relaxed text-ink xl:text-2xl">
        {bio.intro}
      </p>
      <p className="text-base leading-relaxed text-ink/75">
        {bio.paragraphs[0]}
      </p>
    </motion.div>
  );
}
