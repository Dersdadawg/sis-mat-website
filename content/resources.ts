export type ResourceTag =
  | "Algebra"
  | "Geometry"
  | "Combinatorics"
  | "Number Theory"
  | "Mixed"
  | "General";

export interface Resource {
  id: string;
  title: string;
  date: string;
  sortdate: string;
  tags: ResourceTag[];
  description: string;
  /** Path to a PDF in /public/resources/, or a full external URL (e.g. Google Slides) */
  slideUrl: string;
}

export const resources: Resource[] = [
  // Add entries here. Example:
  // {
  //   id: "2026-slides-4-12-transformations",
  //   title: "Rigid Transformations",
  //   date: "April 12, 2026",
  //   sortdate: "2026-4-12",
  //   tags: ["Geometry"],
  //   description: "Slideshow covering reflections, rotations, and translations with worked examples.",
  //   slideUrl: "/resources/MAT_Slides_4_12_2026.pdf",
  // },
];

export function getAllResourceTags(): ResourceTag[] {
  const tagSet = new Set<ResourceTag>();
  resources.forEach((r) => r.tags.forEach((t) => tagSet.add(t)));
  return [...tagSet].sort();
}
