"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { projects, type Project } from "@/lib/data";
import { BsArrowLeft } from "react-icons/bs";
import { ArrowRight } from "lucide-react";
import {
  WorkDetailBlock,
  WorkDetailListBlock,
  WorkDetailOutcomesBlock,
  WorkDetailSectionHeader,
} from "./detail/work-detail-blocks";
import { WorkDetailLinks } from "./detail/work-detail-actions";
import {
  WorkDetailFeatureImage,
  WorkDetailGalleryImage,
} from "./detail/work-detail-media";
import { WorkDetailMeta } from "./detail/work-detail-meta";
import { WorkDetailRelated } from "./detail/work-detail-related";

type WorkDetailPageProps = {
  project: Project;
};

export function WorkDetailPage({ project }: WorkDetailPageProps) {
  const details = project.productDetails;
  const nextProject =
    projects[
      (projects.findIndex((item) => item.slug === project.slug) + 1) %
        projects.length
    ];
  const heroImage = details?.heroImage || project.thumbnail;
  const galleryImages =
    details?.gallery?.filter((image) => image !== heroImage) || [];
  const relatedProjects = details?.relatedSlugs
    ? details.relatedSlugs
        .map((slug) => projects.find((item) => item.slug === slug))
        .filter((item): item is Project => Boolean(item))
    : [];
  const detailGroups =
    details?.detailGroups ||
    [
      details?.features?.length
        ? { label: "Details", items: details.features }
        : undefined,
      details?.technicalNotes?.length
        ? { label: "Technical Notes", items: details.technicalNotes }
        : undefined,
      details?.culturalReferences?.length
        ? {
            label: "Cultural References",
            items: details.culturalReferences,
          }
        : undefined,
    ].filter((group): group is { label: string; items: string[] } =>
      Boolean(group),
    );
  const meta = [
    ["Category", project.tagLabel],
    ["Year", project.year],
    ["Status", details?.status || "Selected Work"],
    ["Role", details?.role],
    ["Context", details?.context],
  ].filter((item): item is [string, string] => Boolean(item[1]));

  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <section className="mx-auto max-w-360 px-6 py-10 md:px-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-3"
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.25em] text-accent uppercase no-underline"
          >
            <BsArrowLeft /> Back to Work
          </Link>
          <span className="h-px flex-1 bg-rule" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="space-y-8"
        >
          <div>
            <div className="mb-4 font-mono text-[0.62rem] tracking-[0.18em] text-muted uppercase">
              {project.client}
            </div>

            <h1 className="font-playfair text-4xl leading-tight font-black wrap-anywhere sm:text-5xl lg:text-7xl">
              {project.title}
            </h1>

            {details?.summary || project.desc ? (
              <p className="mt-6 max-w-3xl font-fraunces text-lg leading-relaxed text-ink/80">
                {details?.summary || project.desc}
              </p>
            ) : null}
          </div>

          <WorkDetailMeta
            meta={meta}
            pills={details?.disciplines || project.pills}
          />
        </motion.div>
      </section>

      <WorkDetailFeatureImage
        image={heroImage}
        title={project.title}
        bg={project.bg}
        priority
      />

      <section className="mx-auto max-w-300 px-6 py-10 md:px-12 md:py-16">
        <div>
          {details?.headline ? (
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="max-w-200 font-fraunces text-xl leading-relaxed text-muted italic"
            >
              {details.headline}
            </motion.p>
          ) : null}

          <div className="mt-10 space-y-10">
            {details?.sections?.length ? (
              details.sections.map((section, index) => (
                <WorkDetailBlock
                  key={`${section.label}-${section.title || index}`}
                  label={section.label}
                  title={section.title}
                  content={section.body}
                  delay={0.15 + index * 0.05}
                />
              ))
            ) : (
              <>
                <WorkDetailBlock
                  label="Overview"
                  content={project.overview}
                  delay={0.15}
                />
                <WorkDetailBlock
                  label="Challenge"
                  content={project.challenge}
                  delay={0.2}
                />
                <WorkDetailBlock
                  label="Solution"
                  content={project.solution}
                  delay={0.25}
                />
                <WorkDetailBlock
                  label="Impact"
                  content={project.impact}
                  delay={0.3}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {galleryImages.length ? (
        <section className="mx-auto max-w-360">
          <WorkDetailSectionHeader label="Gallery" />
          <div className="grid grid-cols-1 gap-5 px-6 md:grid-cols-2 md:px-12">
            {galleryImages.map((image) => (
              <WorkDetailGalleryImage
                key={image}
                image={image}
                title={project.title}
                expanded={galleryImages.length === 1}
              />
            ))}
          </div>
        </section>
      ) : null}

      {detailGroups.length || project.outcomes?.length ? (
        <section className="mx-auto max-w-300 px-6 py-10 md:px-12 md:py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            {detailGroups.map((group, index) => (
              <WorkDetailListBlock
                key={group.label}
                label={group.label}
                items={group.items}
                delay={0.12 + index * 0.06}
              />
            ))}

            {project.outcomes?.length ? (
              <WorkDetailOutcomesBlock outcomes={project.outcomes} />
            ) : null}
          </div>
        </section>
      ) : null}

      <WorkDetailLinks
        shopUrl={details?.shopUrl}
        links={details?.externalLinks}
      />
      <WorkDetailRelated projects={relatedProjects} />
      {nextProject?.slug && nextProject.slug !== project.slug && (
        <Link
          href={`/work/${nextProject.slug}`}
          className="group mx-auto flex max-w-360 items-center justify-between gap-6 px-6 py-12 focus-visible:outline-2 focus-visible:outline-accent md:px-12"
        >
          <div>
            <p className="mb-3 font-mono text-xs text-muted">Next project</p>
            <h2 className="text-2xl font-bold group-hover:text-accent">
              {nextProject.title}
            </h2>
          </div>
          <ArrowRight className="size-6 shrink-0" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
