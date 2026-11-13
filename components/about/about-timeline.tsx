"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { timeline } from "@/lib/data";
import { LuMinus, LuPlus } from "react-icons/lu";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./about-timeline.module.css";

const STEP = 6;
const logos: Record<string, string> = {
  "Tecno Mobile": "/images/brands/tecno.svg",
  "Jaza Energy": "/images/brands/jaza.svg",
  "AFA Sports": "/images/brands/afa-sports.svg",
};

export function AboutTimeline() {
  const [visibleCount, setVisibleCount] = useState(STEP);
  const reducedMotion = useReducedMotion();

  const visible = timeline.slice(0, visibleCount);
  const hasMore = visibleCount < timeline.length;
  const showLess = visibleCount > STEP;

  return (
    <div>
      <div>
        <ol id="career-scrapbook" className={styles.collection}>
          {visible.map((t) => (
            <motion.li
              key={t.year + t.role}
              className={styles.entry}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.35,
                margin: "0px 0px -48px 0px",
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <article
                className={styles.note}
                tabIndex={0}
                aria-label={`${t.year}: ${t.role}, ${t.company}`}
              >
                <div className="mb-4 flex min-h-6 items-center justify-between gap-4">
                  <span className="font-mono text-sm text-accent">
                    {t.year}
                  </span>
                  {logos[t.company] && (
                    <Image
                      src={logos[t.company]}
                      alt=""
                      width={100}
                      height={32}
                      className="h-6 w-24 object-contain opacity-60 brightness-0 grayscale"
                    />
                  )}
                </div>
                <h3 className="font-playfair text-lg leading-snug font-bold">
                  {t.role}
                </h3>
                <p className="mt-2 font-sans text-sm text-muted">{t.company}</p>
              </article>
            </motion.li>
          ))}
        </ol>

        <div className="mt-5 flex gap-3">
          {hasMore && (
            <DisplayButton
              onClick={() => setVisibleCount((prev) => prev + STEP)}
            >
              <LuPlus /> {Math.min(STEP, timeline.length - visibleCount)} more
            </DisplayButton>
          )}
          {showLess && (
            <DisplayButton onClick={() => setVisibleCount(STEP)}>
              <LuMinus /> show less
            </DisplayButton>
          )}
        </div>
      </div>
    </div>
  );
}

const DisplayButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Button
    variant="ghost"
    aria-controls="career-scrapbook"
    onClick={onClick}
    className="gap-2 px-0 font-mono text-xs tracking-normal text-accent"
  >
    {children}
  </Button>
);
