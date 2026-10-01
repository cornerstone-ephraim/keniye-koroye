"use client";

import { motion } from "motion/react";
import { HomeHeroImage } from "./home-hero-image";
import { HomeQuote } from "./home-quote";
import { HomeBio } from "./home-bio";
import { HomeCta } from "./home-cta";
import { HomeStats } from "./home-stats";
import { HomeDisciplines } from "./home-disciplines";

export function HomeDesktopLayout() {
  return (
    <div className="mx-auto hidden w-full max-w-400 flex-1 grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,0.8fr)] items-start gap-10 border-b border-rule px-12 py-12 lg:grid xl:gap-14 xl:py-14">
      <div className="min-w-0">
        <HomeBio />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <HomeCta />
        </motion.div>

        <div className="mt-10 border-t border-rule pt-8">
          <HomeDisciplines />
        </div>
      </div>

      <div className="mx-auto w-full max-w-81 min-w-0">
        <HomeHeroImage priority compact />
        <HomeQuote />
      </div>

      <div className="min-w-0 border-l border-rule pl-8 xl:pl-10">
        <HomeStats />
      </div>
    </div>
  );
}
