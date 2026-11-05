"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { workDetailEase, workDetailViewport } from "./work-detail-shared";

type FeatureImageProps = {
  image?: string;
  title: string;
  bg: string;
  priority?: boolean;
};

export function WorkDetailFeatureImage({
  image,
  title,
  priority = false,
}: FeatureImageProps) {
  if (!image) return null;
  return (
    <section className="px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={workDetailViewport}
        transition={{ duration: 0.65, ease: workDetailEase }}
        className="relative flex items-center justify-center bg-cream/40 p-4 md:p-6"
      >
        {image ? (
          <div className="relative min-h-64 w-full max-w-312 md:h-[min(65svh,40rem)]">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 86vw, 100vw"
              priority={priority}
            />
          </div>
        ) : (
          <div className="font-playfair text-[4rem] text-white/10">{title}</div>
        )}
      </motion.div>
    </section>
  );
}

type GalleryImageProps = {
  image: string;
  title: string;
  expanded?: boolean;
};

export function WorkDetailGalleryImage({
  image,
  title,
  expanded = false,
}: GalleryImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={workDetailViewport}
      transition={{ duration: 0.55, ease: workDetailEase }}
      className={`relative bg-cream/40 ${
        expanded ? "min-h-[80vh] md:col-span-2" : "min-h-72 md:min-h-104"
      }`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes={expanded ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
        className={`object-contain ${expanded ? "p-2 md:p-6" : "p-4 md:p-6"}`}
      />
    </motion.div>
  );
}
