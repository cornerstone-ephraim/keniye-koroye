"use client";

import { HomeHeroImage } from "./home-hero-image";
import { HomeQuote } from "./home-quote";
import { HomeBio } from "./home-bio";
import { HomeCta } from "./home-cta";
import { HomeStats } from "./home-stats";
import { HomeDisciplines } from "./home-disciplines";

export function HomeMobileLayout() {
  return (
    <div className="flex flex-1 flex-col border-b border-rule lg:hidden">
      <div className="grid gap-8 border-b border-rule px-6 py-8 md:grid-cols-2 md:items-start md:gap-10 md:px-12 md:py-10">
        <div className="min-w-0">
          <HomeBio />
          <HomeCta />
        </div>
        <div className="mx-auto w-full max-w-81 min-w-0">
          <HomeHeroImage compact />
          <HomeQuote />
        </div>
      </div>

      <HomeStats mobile />
      <HomeDisciplines mobile />
    </div>
  );
}
