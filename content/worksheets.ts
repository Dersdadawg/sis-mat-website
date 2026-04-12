export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Tag =
  | "Algebra"
  | "Geometry"
  | "Combinatorics"
  | "Number Theory"
  | "Mixed"
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
  // ── Homework Sets ────────────────────────────────────────────────────────────
  {
    id: "2026-hwset15-transformations",
    title: "Homework Set 15: Rigid Transformations",
    date: "April 12, 2026",
    sortdate: "2026-4-12",
    difficulty: "Intermediate",
    tags: ["Geometry", "Homework"],
    description:
      "Homework problems on rigid transformations — reflections, rotations, and translations — and their applications to competition geometry.",
    pdfUrl: "/worksheets/hw/MAT_HW_4_12.pdf",
  },
  {
    id: "2026-hwset14-mental-math",
    title: "Homework Set 14: Mental Math",
    date: "March 6, 2026",
    sortdate: "2026-3-6",
    difficulty: "Beginner",
    tags: ["Homework"],
    description:
      "Homework problems that cover mental math, a niche yet useful skill for various competitions.",
    pdfUrl: "/worksheets/hw/MAT%20HW14.pdf",
    featured: true,
  },
  {
    id: "2026-hwset13-ptolemy",
    title: "Homework Set 13: Ptolemy's Theorem",
    date: "February 27, 2026",
    sortdate: "2026-2-27",
    difficulty: "Intermediate",
    tags: ["Geometry", "Homework"],
    description:
      "Homework problems that cover Ptolemy's theorem, a rather fundamental theorem in algebra concerning cyclic quadrilaterals.",
    pdfUrl: "/worksheets/hw/MAT_HW_Set_13.pdf",
  },
  {
    id: "2026-hwset12-stars-and-bars",
    title: "Homework Set 12: Stars and Bars",
    date: "February 20, 2026",
    sortdate: "2026-2-20",
    difficulty: "Intermediate",
    tags: ["Combinatorics", "Homework"],
    description:
      "Homework problems on Stars and Bars, one of the most common ways to solve combinatorics problems.",
    pdfUrl: "/worksheets/hw/MAT_HW_Set_12%20(1).pdf",
  },
  {
    id: "2026-hwset11-bases",
    title: "Homework Set 11: Bases",
    date: "February 13, 2026",
    sortdate: "2026-2-13",
    difficulty: "Beginner",
    tags: ["Number Theory", "Homework"],
    description:
      "Learn the basics of bases, which can be used to simplify a lot of difficult problems into much easier ones.",
    pdfUrl: "/worksheets/hw/MAT_HW_Set_11%201.pdf",
  },
  {
    id: "2026-hwset10-9pointcircle",
    title: "Homework Set 10: Nine-point Circle",
    date: "February 6, 2026",
    sortdate: "2026-2-6",
    difficulty: "Advanced",
    tags: ["Geometry", "Homework"],
    description:
      "A comprehensive problem set that takes you through the basics and use cases of the nine-point circle.",
    pdfUrl: "/worksheets/hw/MAT_HW_2_6.pdf",
  },
  {
    id: "2026-hwset9-invariants",
    title: "Homework Set 9: Invariants",
    date: "February 5, 2026",
    sortdate: "2026-2-5",
    difficulty: "Intermediate",
    tags: ["Algebra", "Homework"],
    description:
      "Homework set on invariants, often used to quickly find patterns and answers in seemingly complex or unsolvable problems.",
    pdfUrl: "/worksheets/hw/MAT_HW_Set_9.pdf",
  },
  {
    id: "2026-hwset8-modular",
    title: "Homework Set 8: Modular Arithmetic",
    date: "January 18, 2026",
    sortdate: "2026-1-18",
    difficulty: "Beginner",
    tags: ["Number Theory", "Homework"],
    description:
      "Learn about and solve questions on modular arithmetic and Euler's totient theorem.",
    pdfUrl: "/worksheets/hw/MAT_HW_1_17.pdf",
  },
  {
    id: "2026-hwset7-pascals",
    title: "Homework Set 7: Pascal's Triangle",
    date: "January 9, 2026",
    sortdate: "2026-1-9",
    difficulty: "Beginner",
    tags: ["Combinatorics", "Homework"],
    description:
      "Homework set with problems on Pascal's triangle, a powerful tool in combinatorics, algebra.",
    pdfUrl: "/worksheets/hw/MAT_HW_1_9_2026-1.pdf",
  },
  {
    id: "2025-hwset6-complex",
    title: "Homework Set 6: Complex Numbers",
    date: "November 14, 2025",
    sortdate: "2025-11-14",
    difficulty: "Beginner",
    tags: ["Algebra", "Homework"],
    description:
      "Homework set with problems on complex numbers, often necessary for understanding the solutions to many different problems.",
    pdfUrl: "/worksheets/hw/MAT_HW_11_15_2025.pdf",
  },
  {
    id: "2025-hwset5-geoseries",
    title: "Homework Set 5: Geometric Series",
    date: "November 7, 2025",
    sortdate: "2025-11-7",
    difficulty: "Intermediate",
    tags: ["Algebra", "Homework"],
    description:
      "Learn about various use cases of the geometric series and its summations.",
    pdfUrl: "/worksheets/hw/MAT_HW_11_7_2025.pdf",
  },
  {
    id: "2025-hwset4-induction",
    title: "Homework Set 4: Induction",
    date: "October 30, 2025",
    sortdate: "2025-10-30",
    difficulty: "Intermediate",
    tags: ["Algebra", "Homework"],
    description:
      "Discover how to prove various different problems using the method of induction, often necessary in proof-based competitions.",
    pdfUrl: "/worksheets/hw/MAT_HW_10_31_2025.pdf",
  },
  {
    id: "2025-hwset3-nim",
    title: "Homework Set 3: Nim",
    date: "October 17, 2025",
    sortdate: "2025-10-17",
    difficulty: "Beginner",
    tags: ["Number Theory", "Homework"],
    description:
      "Learn the basics of game theory through the game of Nim and finding winning strategies.",
    pdfUrl: "/worksheets/hw/MAT_HW_10_17_2025.pdf",
  },
  {
    id: "2025-hwset2-pfoffac",
    title: "Homework Set 2: Factorials",
    date: "September 26, 2025",
    sortdate: "2025-9-26",
    difficulty: "Beginner",
    tags: ["Algebra", "Homework"],
    description:
      "Homework set with problems on factorials and their prime factorizations.",
    pdfUrl: "/worksheets/hw/MAT_HW_9_26_2025.pdf",
  },
  {
    id: "2025-hwset1-sfft",
    title: "Homework Set 1: Simon's Favorite Factoring Trick",
    date: "September 19, 2025",
    sortdate: "2025-9-19",
    difficulty: "Intermediate",
    tags: ["Algebra", "Homework"],
    description:
      "Homework set with problems on Simon's Favorite Factoring Trick, one of the tools used to solve Diophantine equations.",
    pdfUrl: "/worksheets/hw/MAT_HW_9_19_2025%20(2).pdf",
  },

  // ── Problem Sets — Spring 2026 ────────────────────────────────────────────
  {
    id: "2026-pset-4-10-logarithms",
    title: "Problem Set 16: Logarithms",
    date: "April 10, 2026",
    sortdate: "2026-4-10",
    difficulty: "Intermediate",
    tags: ["Algebra", "Problem Set"],
    description:
      "Practice problems on logarithms covering log identities, change of base, and exponential-to-log conversion for competition settings.",
    pdfUrl: "/worksheets/psets/26/MAT_Pset_4_10.pdf",
  },
  {
    id: "2026-pset-3-27-coordinate-geometry",
    title: "Problem Set 15: Coordinate Geometry",
    date: "March 27, 2026",
    sortdate: "2026-3-27",
    difficulty: "Intermediate",
    tags: ["Geometry", "Problem Set"],
    description:
      "Coordinate geometry problems on minimum path lengths, reflections across lines, and shortest-distance constructions on the Cartesian plane.",
    pdfUrl: "/worksheets/psets/26/MAT_Pset_3_27.pdf",
  },
  {
    id: "2026-pset-3-6-mental-math",
    title: "Problem Set 14: Mental Math",
    date: "March 6, 2026",
    sortdate: "2026-3-6",
    difficulty: "Beginner",
    tags: ["Mixed", "Problem Set"],
    description:
      "Mental math techniques including the nearest-multiple-of-10 method for rapid multiplication, useful for timed competition rounds.",
    pdfUrl: "/worksheets/psets/26/MAT_Pset_3_6.pdf",
  },
  {
    id: "2026-pset-2-27-ptolemy",
    title: "Problem Set 13: Ptolemy's Theorem",
    date: "February 27, 2026",
    sortdate: "2026-2-27",
    difficulty: "Intermediate",
    tags: ["Geometry", "Problem Set"],
    description:
      "Problem set applying Ptolemy's Theorem to cyclic quadrilaterals and regular polygons to find diagonal and side lengths.",
    pdfUrl: "/worksheets/psets/26/MAT_Pset_2_27.pdf",
  },
  {
    id: "2026-pset-2-20-stars-bars",
    title: "Problem Set 12: Stars and Bars",
    date: "February 20, 2026",
    sortdate: "2026-2-20",
    difficulty: "Intermediate",
    tags: ["Combinatorics", "Problem Set"],
    description:
      "Counting problems solved using the Stars and Bars technique, covering distributions of identical objects into distinct bins.",
    pdfUrl: "/worksheets/psets/26/MAT_Pset_2_20.pdf",
  },
  {
    id: "2026-pset-2-6-triangle-centers",
    title: "Problem Set 10: Triangle Centers",
    date: "February 6, 2026",
    sortdate: "2026-2-6",
    difficulty: "Advanced",
    tags: ["Geometry", "Problem Set"],
    description:
      "Problems on triangle centers — incenter, circumcenter, and nine-point circle — using both coordinate and classical geometric approaches.",
    pdfUrl: "/worksheets/psets/26/MAT_Pset_2_6.pdf",
  },
  {
    id: "2026-pset-1-23-invariants",
    title: "Problem Set 9: Invariants",
    date: "January 23, 2026",
    sortdate: "2026-1-23",
    difficulty: "Intermediate",
    tags: ["Algebra", "Problem Set"],
    description:
      "Problems on mathematical invariants — quantities preserved under repeated operations — used to prove impossibility results and find closed-form answers.",
    pdfUrl: "/worksheets/psets/26/MAT_Pset_1_23.pdf",
  },
  {
    id: "2026-pset-1-16-fermats",
    title: "Problem Set 8: Fermat's Little Theorem",
    date: "January 16, 2026",
    sortdate: "2026-1-16",
    difficulty: "Intermediate",
    tags: ["Number Theory", "Problem Set"],
    description:
      "Problems applying Fermat's Little Theorem and Euler's totient function to compute large modular exponentiations efficiently.",
    pdfUrl: "/worksheets/psets/26/MAT_Pset_1_16.pdf",
  },
  {
    id: "2026-pset-1-9-pascals",
    title: "Problem Set 7: Pascal's Triangle",
    date: "January 9, 2026",
    sortdate: "2026-1-9",
    difficulty: "Beginner",
    tags: ["Combinatorics", "Problem Set"],
    description:
      "Problems exploring Pascal's Triangle, binomial coefficients, and their symmetry properties and applications to counting.",
    pdfUrl: "/worksheets/psets/26/MAT_Pset_1_9.pdf",
  },

  // ── Problem Sets — Fall 2025 ──────────────────────────────────────────────
  {
    id: "2025-pset-11-14-complex",
    title: "Problem Set 6: Complex Numbers",
    date: "November 14, 2025",
    sortdate: "2025-11-14",
    difficulty: "Intermediate",
    tags: ["Algebra", "Problem Set"],
    description:
      "Problem set on complex number arithmetic, modulus, conjugates, and their applications in competition problems.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_11_14_2025.pdf",
  },
  {
    id: "2025-pset-11-7-geoseries",
    title: "Problem Set 5: Geometric Series",
    date: "November 7, 2025",
    sortdate: "2025-11-7",
    difficulty: "Intermediate",
    tags: ["Algebra", "Problem Set"],
    description:
      "Problems on geometric series including finding common ratios, evaluating infinite sums, and applying the series formula to word problems.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_11_7_2025.pdf",
  },
  {
    id: "2025-pset-10-31-induction",
    title: "Problem Set 4: Induction",
    date: "October 31, 2025",
    sortdate: "2025-10-31",
    difficulty: "Intermediate",
    tags: ["Algebra", "Problem Set"],
    description:
      "Proof by induction problems establishing base cases and inductive steps to prove divisibility results, closed-form formulas, and inequalities.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_10_31_2025.pdf",
  },
  {
    id: "2025-pset-10-16-nim",
    title: "Problem Set 3: Game Theory",
    date: "October 16, 2025",
    sortdate: "2025-10-16",
    difficulty: "Beginner",
    tags: ["Combinatorics", "Problem Set"],
    description:
      "Game theory problems based on Nim-style coin removal games, practicing the analysis of winning and losing positions under optimal play.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_10_16_2025.pdf",
  },
  {
    id: "2025-pset-9-26-factorials",
    title: "Problem Set 2: Factorials",
    date: "September 26, 2025",
    sortdate: "2025-9-26",
    difficulty: "Beginner",
    tags: ["Number Theory", "Problem Set"],
    description:
      "Problems on factorials, trailing zeros, and finding the largest prime power dividing n! using Legendre's formula.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_9_26_2025.pdf",
  },
  {
    id: "2025-pset-9-19-sfft",
    title: "Problem Set 1: Simon's Favorite Factoring Trick",
    date: "September 19, 2025",
    sortdate: "2025-9-19",
    difficulty: "Beginner",
    tags: ["Algebra", "Problem Set"],
    description:
      "Introduction to Simon's Favorite Factoring Trick for factoring and solving integer equations of the form xy + ax + by + c = 0.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_9_19_2025.pdf",
  },
  {
    id: "2025-pset-8-29-trial",
    title: "Trial Set: Mixed Review",
    date: "August 29, 2025",
    sortdate: "2025-8-29",
    difficulty: "Intermediate",
    tags: ["Mixed", "Problem Set"],
    description:
      "Kickoff problem set covering a mixed range of competition topics including geometric series, number theory, and combinatorics.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_8_29_2025.pdf",
  },

  // ── Problem Sets — Spring 2025 ────────────────────────────────────────────
  {
    id: "2025-pset-4-4-expected-value",
    title: "Problem Set 16: Expected Value",
    date: "April 4, 2025",
    sortdate: "2025-4-4",
    difficulty: "Beginner",
    tags: ["Combinatorics", "Problem Set"],
    description:
      "Problems on expected value and basic probability including dice outcomes, investment scenarios, and real-world applications.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_4_4_2025.pdf",
  },
  {
    id: "2025-pset-3-21-coordinate-geometry",
    title: "Problem Set 15: Coordinate Geometry",
    date: "March 21, 2025",
    sortdate: "2025-3-21",
    difficulty: "Beginner",
    tags: ["Geometry", "Problem Set"],
    description:
      "Coordinate geometry problems covering perpendicular bisectors, parallelogram coordinates, and point relationships on the Cartesian plane.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_3_21_2025.pdf",
  },
  {
    id: "2025-pset-2-28-bases",
    title: "Problem Set 14: Number Bases",
    date: "February 28, 2025",
    sortdate: "2025-2-28",
    difficulty: "Beginner",
    tags: ["Number Theory", "Problem Set"],
    description:
      "Problems on converting between number bases and working with base representations, including large numbers in non-decimal bases.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_2_28_2025.pdf",
  },
  {
    id: "2025-pset-2-21-primes",
    title: "Problem Set 13: Prime Numbers",
    date: "February 21, 2025",
    sortdate: "2025-2-21",
    difficulty: "Beginner",
    tags: ["Number Theory", "Problem Set"],
    description:
      "Problems on prime numbers including finding primes with specific sum or product properties.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_2_21_2025.pdf",
  },
  {
    id: "2025-pset-2-14-divisibility",
    title: "Problem Set 12: Divisibility Rules",
    date: "February 14, 2025",
    sortdate: "2025-2-14",
    difficulty: "Beginner",
    tags: ["Number Theory", "Problem Set"],
    description:
      "Problems proving and applying divisibility rules for integers 1–10, with applications to checking divisibility of large numbers.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_2_14_2025.pdf",
  },
  {
    id: "2025-pset-1-31-diophantine",
    title: "Problem Set 11: Diophantine Equations",
    date: "January 31, 2025",
    sortdate: "2025-1-31",
    difficulty: "Intermediate",
    tags: ["Number Theory", "Problem Set"],
    description:
      "Problems on linear Diophantine equations, determining when integer solutions exist and finding them using the extended Euclidean algorithm.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_1_31_2025.pdf",
  },
  {
    id: "2025-pset-1-24-euler-totient",
    title: "Problem Set 10: Euler's Totient Theorem",
    date: "January 24, 2025",
    sortdate: "2025-1-24",
    difficulty: "Intermediate",
    tags: ["Number Theory", "Problem Set"],
    description:
      "Problems applying Euler's totient function to compute modular exponentiations and find totient values, including cases where the base and modulus are not coprime.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_1_24_2025.pdf",
  },
  {
    id: "2025-pset-1-17-modular",
    title: "Problem Set 9: Modular Arithmetic",
    date: "January 17, 2025",
    sortdate: "2025-1-17",
    difficulty: "Beginner",
    tags: ["Number Theory", "Problem Set"],
    description:
      "Introduction to modular arithmetic through clock problems, last-digit computations, and finding patterns in powers of integers.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_1_17_2025.pdf",
  },
  {
    id: "2025-pset-1-10-gcd-lcm",
    title: "Problem Set 8: GCD and LCM",
    date: "January 10, 2025",
    sortdate: "2025-1-10",
    difficulty: "Beginner",
    tags: ["Number Theory", "Problem Set"],
    description:
      "Problems on greatest common divisors and least common multiples, including the GCD-LCM product identity and sum minimization.",
    pdfUrl: "/worksheets/psets/25/MAT_Worksheet_1_10_2025.pdf",
  },
];

// Helper to get all unique tags
export function getAllTags(): Tag[] {
  const tagSet = new Set<Tag>();
  worksheets.forEach((w) => w.tags.forEach((t) => tagSet.add(t)));
  return [...tagSet].sort();
}
