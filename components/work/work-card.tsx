"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import type { projects } from "@/lib/data";
import { WorkPills } from "./work-pills";

type Project = (typeof projects)[number];

type WorkCardProps = {
  project: Project;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const containedImageTags = new Set(["fashion", "product", "tech"]);

export function WorkCard({ project }: WorkCardProps) {
  const shouldContainImage = containedImageTags.has(project.tag);

  return (
    <motion.div
      layout
      variants={cardVariants}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }}
      className="border-r border-b border-rule"
      data-hover
    >
      <Link
        href={`/work/${project.slug}`}
        className="block overflow-hidden no-underline"
      >
        <div
          className="group relative aspect-4/3 overflow-hidden"
          style={{
            background: shouldContainImage ? "var(--paper)" : project.bg,
          }}
        >
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className={`object-cover transition-all ease-linear group-hover:scale-103`}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center font-playfair text-[5rem] font-black text-white/5 select-none">
              {project.num}
            </div>
          )}

          <span className="absolute top-3 right-3 z-10 bg-accent px-2 py-[0.2rem] font-mono text-[0.55rem] tracking-[0.15em] text-white uppercase">
            {project.tagLabel}
          </span>
        </div>

        <div className="p-5 md:p-6">
          <div className="mb-1 font-mono text-[0.6rem] tracking-[0.15em] text-muted uppercase">
            {project.year} · {project.client}
          </div>

          <h3 className="mb-2 font-playfair text-[1rem] leading-snug font-bold uppercase md:text-[1.1rem]">
            {project.title}
          </h3>

          <p className="mb-4 text-[0.72rem] leading-[1.7] text-[#3a3730]">
            {project.desc}
          </p>

          <WorkPills pills={project.pills} />
        </div>
      </Link>
    </motion.div>
  );
}
