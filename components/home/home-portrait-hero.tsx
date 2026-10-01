"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { bio } from "@/lib/profile";
import { useSplashReady } from "@/components/ui/LoadingScreen";
import { cn } from "@/lib/utils";
import styles from "./home-portrait-hero.module.css";
import { HomeBrandStrip } from "./home-brand-strip";

export function HomePortraitHero() {
  const reducedMotion = useReducedMotion();
  const ready = useSplashReady();
  const entrance = (step: number) => ({
    initial: { opacity: 0, y: reducedMotion ? 0 : 12 },
    animate: ready
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: reducedMotion ? 0 : 12 },
    transition: {
      duration: reducedMotion ? 0.1 : 0.45,
      delay: ready && !reducedMotion ? step * 0.45 : 0,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  });

  return (
    <section aria-labelledby="home-title" className={styles.hero}>
      <motion.div className={styles.heading} {...entrance(0)}>
        <h1 id="home-title" className={styles.name}>
          Ken<em className="text-accent italic">I</em>YĒ
        </h1>
      </motion.div>

      <motion.div className={styles.portrait} {...entrance(1)}>
        <Image
          src="/keniye-sitting-cutout.png"
          alt="Funfere Keniye Koroye smiling while seated on a stool"
          width={1024}
          height={1024}
          sizes="(min-width: 1532px) 980px, (min-width: 1024px) 64vw, (min-width: 664px) 600px, (min-width: 640px) calc(100vw - 64px), 100vw"
          priority
          className={styles.cutout}
        />
      </motion.div>

      <motion.div className={styles.introduction} {...entrance(2)}>
        <p className="mb-4 font-mono text-xs text-muted">
          Funfere Keniyē Koroye
        </p>
        <p className="max-w-80 font-sans text-lg leading-relaxed font-medium">
          {bio.intro}
        </p>
        <Link
          href="/work"
          className={cn(
            buttonVariants({ variant: "link" }),
            "mt-6 h-auto justify-start gap-3 px-0 py-3 tracking-normal no-underline hover:text-accent",
          )}
        >
          Explore my work <ArrowUpRight aria-hidden="true" />
        </Link>
      </motion.div>

      <motion.div className={styles.about} {...entrance(3)}>
        <p className="text-right font-sans text-base leading-relaxed">
          {bio.paragraphs[0]}
        </p>
        <Link
          href="/about"
          className={cn(
            buttonVariants({ variant: "link" }),
            "mt-6 ml-auto flex h-auto w-fit justify-end gap-3 px-0 py-3 tracking-normal no-underline hover:text-accent",
          )}
        >
          More About Me <ArrowUpRight aria-hidden="true" />
        </Link>
      </motion.div>
      <motion.div className={styles.brands} {...entrance(4)}>
        <HomeBrandStrip />
      </motion.div>
    </section>
  );
}
