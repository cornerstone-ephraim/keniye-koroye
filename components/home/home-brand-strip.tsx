"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import styles from "./home-brand-strip.module.css";

const BRANDS = [
  { name: "Jaza Energy", src: "/images/brands/jaza.svg" },
  { name: "Tecno Mobile", src: "/images/brands/tecno.svg" },
  { name: "AFA Sports", src: "/images/brands/afa-sports.svg" },
  { name: "Kelvar Industries", src: "/images/brands/kelvar-logo.svg" },
  { name: "Eight Medical", src: "/images/brands/eight-medical.svg" },
  { name: "Keniye Studio", src: "/images/brands/keniye-studio.svg" },
] as const;

export function HomeBrandStrip() {
  const [isPaused, setIsPaused] = useState(false);

  // Auto-pause if user requests reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsPaused(true);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setIsPaused(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const actionLabel = isPaused ? "Play logo animation" : "Pause logo animation";

  return (
    <div
      className={styles.strip}
      role="region"
      aria-label="Selected brand experience"
    >
      {/* Screen-reader accessible alternative */}
      <ul className="sr-only">
        {BRANDS.map((brand) => (
          <li key={brand.name}>{brand.name}</li>
        ))}
      </ul>

      {/* Visual marquee track */}
      <div className={styles.window} aria-hidden="true">
        <div className={styles.track} data-paused={isPaused}>
          {[0, 1].map((copyIndex) => (
            <div className={styles.group} key={`group-${copyIndex}`}>
              {BRANDS.map((brand) => (
                <div className={styles.logo} key={`${copyIndex}-${brand.name}`}>
                  <Image
                    src={brand.src}
                    alt=""
                    width={158}
                    height={50}
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className={styles.control}
        aria-label={actionLabel}
        aria-pressed={isPaused}
        title={actionLabel}
        onClick={() => setIsPaused((prev) => !prev)}
      >
        {isPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
      </Button>
    </div>
  );
}
