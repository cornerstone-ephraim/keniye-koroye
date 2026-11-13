"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

type HomeHeroImageProps = {
  priority?: boolean;
  compact?: boolean;
};

export function HomeHeroImage({
  priority = false,
  compact = false,
}: HomeHeroImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className={`relative mb-6 w-full overflow-hidden bg-ink ${
        compact ? "mx-auto aspect-3/4 max-w-81" : "aspect-3/4"
      }`}
    >
      <div
        aria-hidden="true"
        className={`image-skeleton absolute inset-0 transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        alt="Keniye Koroye"
        src="/keniye-pic.png"
        fill
        sizes="(min-width: 372px) 324px, calc(100vw - 48px)"
        priority={priority}
        onLoad={() => setLoaded(true)}
        className={`object-cover object-top transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <span className="absolute right-3 bottom-3 font-mono text-[0.6rem] font-medium tracking-widest text-paper/90 uppercase">
        Funfere Keniyē Koroye
      </span>
    </motion.div>
  );
}
