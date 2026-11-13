"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectTag } from "@/lib/data";
import { WorkHeader } from "./work-header";
import { WorkFilters } from "./work-filters";
import { WorkGrid } from "./work-grid";
import type { Filter } from "./work-types";

type Project = (typeof projects)[number];

const allTabPattern: ProjectTag[] = [
  "art",
  "fashion",
  "software",
  "product",
  "hardware",
  "tech",
];

function getPatternedProjects(): Project[] {
  const groupedProjects = new Map<ProjectTag, Project[]>(
    allTabPattern.map((tag) => [
      tag,
      projects.filter((project) => project.tag === tag),
    ]),
  );

  const maxGroupLength = Math.max(
    ...Array.from(groupedProjects.values()).map((group) => group.length),
  );

  return Array.from({ length: maxGroupLength }).flatMap((_, index) => {
    return allTabPattern
      .map((tag) => groupedProjects.get(tag)?.[index])
      .filter((project): project is Project => Boolean(project));
  });
}

const allTabProjects = getPatternedProjects();

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (active === "all") {
      return allTabProjects;
    }

    return projects.filter((project) => {
      return project.tag === active;
    });
  }, [active]);

  return (
    <div className="min-h-screen bg-paper pt-14.25">
      <WorkHeader />
      <WorkFilters active={active} changeAction={setActive} />
      <div className="px-6 md:px-12">
        <WorkGrid projects={filtered} />
      </div>
    </div>
  );
}
