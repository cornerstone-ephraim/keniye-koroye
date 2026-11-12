"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
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
          sizes="(min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) 92vw, (min-width: 1462px) 760px, (min-width: 1024px) 52vw, (min-width: 824px) 760px, (min-width: 640px) calc(100vw - 64px), 125vw"
          priority
          className={styles.cutout}
        />
      </motion.div>

      <motion.div className={styles.introduction} {...entrance(2)}>
        <p className="mb-4 font-mono text-xs text-muted">
          Funfere Keniyē Koroye
        </p>
        <p className="max-w-80 font-sans text-lg leading-relaxed font-medium">
          I’m a product manager and design engineer working across industrial,
          service, and UX design.
        </p>
        <Link
          href="/work"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 gap-3 tracking-normal no-underline",
          )}
        >
          Explore my work <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link
          href="/about"
          className={cn(
            buttonVariants({ variant: "link" }),
            "flex h-auto w-fit justify-start gap-3 px-0 py-3 tracking-normal text-muted no-underline hover:text-accent",
          )}
        >
          More about me <ArrowUpRight aria-hidden="true" />
        </Link>
      </motion.div>
      <motion.div className={styles.brands} {...entrance(3)}>
        <HomeBrandStrip />
      </motion.div>
    </section>
  );
}
