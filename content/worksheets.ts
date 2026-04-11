export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Tag =
  | "Algebra"
  | "Geometry"
  | "Combinatorics"
  | "Number Theory"
  | "Mixed"
  | "Beginner"
  | "Advanced";

export interface Worksheet {
  id: string;
  title: string;
  date: string;
  difficulty: Difficulty;
  tags: Tag[];
  description: string;
  pdfUrl: string;
  solutionsUrl?: string;
  featured?: boolean;
}

export const worksheets: Worksheet[] = [
  {
    id: "amc10-algebra-drills",
    title: "AMC 10 Algebra Drills",
    date: "January 28, 2026",
    difficulty: "Intermediate",
    tags: ["Algebra"],
    description:
      "20 practice problems covering quadratics, systems, and polynomial manipulation at the AMC 10 level.",
    pdfUrl: "/images/worksheets/MAT%20HW14.pdf",
    featured: true,
  },
  {
    id: "combinatorics-intro",
    title: "Introduction to Combinatorics",
    date: "January 15, 2026",
    difficulty: "Beginner",
    tags: ["Combinatorics", "Beginner"],
    description:
      "A gentle introduction to counting principles, permutations, and combinations with worked examples.",
    pdfUrl: "/worksheets/combinatorics-intro.pdf",
    solutionsUrl: "/worksheets/combinatorics-intro-solutions.pdf",
  },
  {
    id: "geo-triangles-advanced",
    title: "Advanced Triangle Geometry",
    date: "January 5, 2026",
    difficulty: "Advanced",
    tags: ["Geometry", "Advanced"],
    description:
      "Cevians, radical axes, inversive geometry, and projective techniques. AIME/olympiad level.",
    pdfUrl: "/worksheets/geo-triangles-advanced.pdf",
  },
  {
    id: "number-theory-modular",
    title: "Modular Arithmetic Fundamentals",
    date: "December 12, 2025",
    difficulty: "Beginner",
    tags: ["Number Theory", "Beginner"],
    description:
      "Learn the basics of modular arithmetic, Fermat's little theorem, and Chinese Remainder Theorem.",
    pdfUrl: "/worksheets/number-theory-modular.pdf",
    solutionsUrl: "/worksheets/number-theory-modular-solutions.pdf",
  },
  {
    id: "aime-mixed-2025",
    title: "AIME Practice Set — Mixed Topics",
    date: "November 20, 2025",
    difficulty: "Advanced",
    tags: ["Mixed", "Advanced"],
    description:
      "15 problems spanning algebra, geometry, combinatorics, and number theory at AIME difficulty.",
    pdfUrl: "/worksheets/aime-mixed-2025.pdf",
    solutionsUrl: "/worksheets/aime-mixed-2025-solutions.pdf",
  },
  {
    id: "mathcounts-sprint",
    title: "MATHCOUNTS Sprint Practice",
    date: "October 30, 2025",
    difficulty: "Beginner",
    tags: ["Mixed", "Beginner"],
    description:
      "30-problem sprint round simulation for MATHCOUNTS preparation.",
    pdfUrl: "/worksheets/mathcounts-sprint.pdf",
    solutionsUrl: "/worksheets/mathcounts-sprint-solutions.pdf",
  },
  {
    id: "inequalities-workshop",
    title: "Inequalities Workshop",
    date: "October 15, 2025",
    difficulty: "Intermediate",
    tags: ["Algebra"],
    description:
      "AM-GM, Cauchy-Schwarz, Jensen, and Schur — with 12 contest-style problems.",
    pdfUrl: "/worksheets/inequalities-workshop.pdf",
  },
  {
    id: "geo-circles",
    title: "Circles & Cyclic Quadrilaterals",
    date: "September 28, 2025",
    difficulty: "Intermediate",
    tags: ["Geometry"],
    description:
      "Power of a point, Ptolemy's theorem, and cyclic quadrilateral properties with problems.",
    pdfUrl: "/worksheets/geo-circles.pdf",
    solutionsUrl: "/worksheets/geo-circles-solutions.pdf",
  },
];

// Helper to get all unique tags
export function getAllTags(): Tag[] {
  const tagSet = new Set<Tag>();
  worksheets.forEach((w) => w.tags.forEach((t) => tagSet.add(t)));
  return [...tagSet].sort();
}
