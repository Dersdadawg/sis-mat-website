export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Tag =
  | "Algebra"
  | "Geometry"
  | "Combinatorics"
  | "Number Theory"
  | "Mixed"
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Homework"
  | "Problem Set";

export interface Worksheet {
  id: string;
  title: string;
  date: string;
  sortdate: string;
  difficulty: Difficulty;
  tags: Tag[];
  description: string;
  pdfUrl: string;
  solutionsUrl?: string;
  featured?: boolean;
}

export const worksheets: Worksheet[] = [
  {
    id: "2026-hwset14-mental-math",
    title: "Homework Set 14: Mental Math",
    date: "March 6, 2026",
    sortdate: "2026-3-6",
    difficulty: "Intermediate",
    tags: ["Beginner", "Homework"],
    description:
      "Homework problems that cover mental math, a niche yet useful skill for various competitions.",
    pdfUrl: "/images/worksheets/MAT%20HW14.pdf",
    featured: true,
  },
  {
    id: "2026-hwset13-ptolemy",
    title: "Homework Set 13: Ptolemy's Theorem",
    date: "February 27, 2026",
    sortdate: "2026-2-27",
    difficulty: "Intermediate",
    tags: ["Geometry", "Intermediate", "Homework"],
    description:
      "Homework problems that cover Ptolemy's theorem, a rather fundamental theorem in algebra concerning cyclic quadrilaterals.",
    pdfUrl: "/images/worksheets/MAT_HW_Set_13.pdf",
  },
  {
    id: "2026-hwset12-stars-and-bars",
    title: "Homework Set 12: Stars and Bars",
    date: "February 20, 2026",
    sortdate: "2026-2-20",
    difficulty: "Intermediate",
    tags: ["Combinatorics", "Intermediate", "Homework"],
    description:
      "Homework problems on Stars and Bars, one of the most common ways to solve combinatorics problems.",
    pdfUrl: "/images/worksheets/MAT_HW_Set_12 (1).pdf",
  },
  {
    id: "2026-hwset11-bases",
    title: "Homework Set 11: Bases",
    date: "February 13, 2026",
    sortdate: "2026-2-13",
    difficulty: "Beginner",
    tags: ["Number Theory", "Beginner", "Homework"],
    description:
      "Learn the basics of bases, which can be used to simplify a lot of difficult problems into much easier ones.",
    pdfUrl: "/images/worksheets/MAT_HW_Set_11 1.pdf",
  },
  {
    id: "2026-hwset10-9pointcircle",
    title: "Homework Set 10: Nine-point Circle",
    date: "February 6, 2026",
    sortdate: "2026-2-6",
    difficulty: "Advanced",
    tags: ["Geometry", "Advanced", "Homework"],
    description:
      "A comprehensive problem set that takes you through the basics and use cases of the nine-point circle.",
    pdfUrl: "/images/worksheets/MAT_HW_2_6.pdf",
  },
  {
    id: "2026-hwset9-invariants",
    title: "Homework Set 9: Invariants",
    date: "February 5, 2026",
    sortdate: "2026-2-5",
    difficulty: "Intermediate",
    tags: ["Number Theory", "Intermediate", "Homework"],
    description:
      "Homework set on invariants, often used to quickly find patterns and answers in seemingly complex or unsolvable problems.",
    pdfUrl: "/images/worksheets/MAT_HW_Set_9.pdf",
  },
  {
    id: "2026-hwset8-modular",
    title: "Homework Set 8: Modular Arithmetic",
    date: "January 18, 2026",
    sortdate: "2026-1-18",
    difficulty: "Beginner",
    tags: ["Number Theory", "Beginner", "Homework"],
    description:
      "Learn about and solve questions on modular arithmetic and Euler's totient theorem.",
    pdfUrl: "/images/worksheets/MAT_HW_1_17.pdf",
  },
  {
    id: "2026-hwset7-pascals",
    title: "Homework Set 7: Pascal's Triangle",
    date: "January 9, 2026",
    sortdate: "2026-1-9",
    difficulty: "Beginner",
    tags: ["Combinatorics", "Beginner", "Homework"],
    description:
      "Homework set with problems on Pascal's triangle, a powerful tool in combinatorics, algebra.",
    pdfUrl: "/images/worksheets/MAT_HW_1_9_2026-1.pdf",
  },
  {
    id: "2025-hwset6-complex",
    title: "Homework Set 6: Complex Numbers",
    date: "November 14, 2025",
    sortdate: "2025-11-14",
    difficulty: "Beginner",
    tags: ["Algebra", "Beginner", "Homework"],
    description:
      "Homework set with problems on complex numbers, often necessary for understandin the solutions to many different problems.",
    pdfUrl: "/images/worksheets/MAT_HW_11_15_2025.pdf",
  },
  {
    id: "2025-hwset5-geoseries",
    title: "Homework Set 5: Geometric Series",
    date: "November 7, 2025",
    sortdate: "2025-11-7",
    difficulty: "Intermediate",
    tags: ["Algebra", "Intermediate", "Homework"],
    description:
      "Learn about various use cases of the geometric series and its summations.",
    pdfUrl: "/images/worksheets/MAT_HW_11_7_2025.pdf",
  },
  {
    id: "2025-hwset4-induction",
    title: "Homework Set 4: Induction",
    date: "October 30, 2025",
    sortdate: "2025-10-30",
    difficulty: "Intermediate",
    tags: ["Algebra", "Intermediate", "Homework"],
    description:
      "Discover how to prove various different problems using the method of induction, often necessary in proof-based competitions.",
    pdfUrl: "/images/worksheets/MAT_HW_10_31_2025.pdf",
  },
  {
    id: "2025-hwset3-nim",
    title: "Homework Set 3: Nim",
    date: "October 17, 2025",
    sortdate: "2025-10-17",
    difficulty: "Beginner",
    tags: ["Number Theory", "Beginner", "Homework"],
    description:
      "Learn the basics of game theory through the game of Nim and finding winning strategies.",
    pdfUrl: "/images/worksheets/MAT_HW_10_17_2025.pdf",
  },
  {
    id: "2025-hwset2-pfoffac",
    title: "Homework Set 2: Factorials",
    date: "September 26, 2025",
    sortdate: "2025-9-26",
    difficulty: "Beginner",
    tags: ["Algebra", "Beginner", "Homework"],
    description:
      "Homework set with problems on factorials and their prime factorizations.",
    pdfUrl: "/images/worksheets/MAT_HW_9_26_2025.pdf",
  },
  {
    id: "2025-hwset1-sfft",
    title: "Homework Set 1: Simon's Favorite Factoring Trick",
    date: "September 19, 2025",
    sortdate: "2025-9-19",
    difficulty: "Intermediate",
    tags: ["Algebra", "Intermediate", "Homework"],
    description:
      "Homework set with problems on Simon's Favorite Factoring Trick, one of the tools used to solve Diophantine equations.",
    pdfUrl: "/images/worksheets/MAT_HW_9_19_2025 (2).pdf",
  },
];

// Helper to get all unique tags
export function getAllTags(): Tag[] {
  const tagSet = new Set<Tag>();
  worksheets.forEach((w) => w.tags.forEach((t) => tagSet.add(t)));
  return [...tagSet].sort();
}
