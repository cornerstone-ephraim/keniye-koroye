"use client";

import { motion } from "motion/react";
import type { Project } from "@/lib/data";
import { workDetailEase, workDetailViewport } from "./work-detail-shared";

type DetailBlockProps = {
  label: string;
  title?: string;
  content?: string;
  delay?: number;
};

export function WorkDetailBlock({
  label,
  title,
  content,
  delay = 0,
}: DetailBlockProps) {
  if (!content) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={workDetailViewport}
      transition={{ duration: 0.5, delay, ease: workDetailEase }}
      className="grid gap-4 border-t border-rule pt-6 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8"
    >
      <div className="mb-4 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
        {label}
      </div>

      <div>
        {title ? (
          <h2 className="mb-4 text-[1.05rem] leading-snug font-bold md:text-[1.2rem]">
            {title}
          </h2>
        ) : null}
        <p className="max-w-2xl font-sans text-base leading-8 text-ink/80">
          {content}
        </p>
      </div>
    </motion.div>
  );
}

export function WorkDetailSectionHeader({ label }: { label: string }) {
  return (
    <div className="border-b border-rule px-6 py-8 md:px-12 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={workDetailViewport}
        transition={{ duration: 0.45, ease: workDetailEase }}
        className="flex items-center gap-3"
      >
        <span className="font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
          {label}
        </span>
        <span className="h-px flex-1 bg-rule" />
      </motion.div>
    </div>
  );
}

type ListBlockProps = {
  label: string;
  items: string[];
  delay?: number;
};

export function WorkDetailListBlock({
  label,
  items,
  delay = 0,
}: ListBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={workDetailViewport}
      transition={{ duration: 0.5, delay, ease: workDetailEase }}
    >
      <div className="mb-5 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
        {label}
      </div>
      <div className="border-t border-rule">
        {items.map((item) => (
          <div key={item} className="border-b border-rule py-3">
            <p className="text-[0.84rem] leading-snug text-muted">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function WorkDetailOutcomesBlock({
  outcomes,
}: {
  outcomes: NonNullable<Project["outcomes"]>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={workDetailViewport}
      transition={{ duration: 0.5, delay: 0.3, ease: workDetailEase }}
      className="lg:col-span-2"
    >
      <div className="mb-5 font-mono text-[0.62rem] tracking-[0.2em] text-accent uppercase">
        Outcomes
      </div>

      <div className="grid grid-cols-1 border-t border-rule sm:grid-cols-3">
        {outcomes.map((outcome) => (
          <div
            key={`${outcome.pct}-${outcome.label}`}
            className="border-r border-b border-rule px-5 py-5"
          >
            <div className="font-playfair text-[1.65rem] font-black">
              {outcome.pct}
            </div>
            <div className="mt-2 font-mono text-[0.72rem] leading-snug text-muted">
              {outcome.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
