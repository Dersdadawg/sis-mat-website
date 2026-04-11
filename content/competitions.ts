export interface CompetitionResult {
  id: string;
  name: string;
  date: string;
  year: number;
  category: "individual" | "team";
  participants: string[];
  placement: string;
  awardLevel: "gold" | "silver" | "bronze" | "honorable" | "qualifier" | "none";
  notes?: string;
  photosUrl?: string;
  featured?: boolean;
}

export const competitions: CompetitionResult[] = [
  {
    id: "SKISMC-junior-2025",
    name: "SKISMC (Junior)",
    date: "November 11, 2025",
    year: 2025,
    category: "team",
    participants: ["6 teams of 3"],
    placement: "1 Gold, 6 Silver, 9 Bronze",
    awardLevel: ["gold", "silver", "bronze"],
    notes: "Yejun Kim  received recognition for overall high score in the competition and earned a spot in the World Junior Finals in Melbourne Australia. ",
    featured: true,
  },
  {
    id: "mathcounts-state-2025",
    name: "MATHCOUNTS State",
    date: "March 15, 2025",
    year: 2025,
    category: "team",
    participants: ["Team A"],
    placement: "5th Place (State)",
    awardLevel: "none",
    notes: "Best state finish in club history.",
    photosUrl: "/images/gallery-1.svg",
  },
  {
    id: "hmmt-2025",
    name: "HMMT February",
    date: "February 15, 2025",
    year: 2025,
    category: "team",
    participants: ["Team Alpha"],
    placement: "Top 30 Team Round",
    awardLevel: "honorable",
  },
  {
    id: "aime-2025",
    name: "AIME I",
    date: "February 5, 2025",
    year: 2025,
    category: "individual",
    participants: ["Alex Chen", "Priya Patel"],
    placement: "Alex: 8, Priya: 6",
    awardLevel: "qualifier",
    notes: "Both scored above the USAMO floor estimate.",
    featured: true,
  },
  {
    id: "amc-2024-fall",
    name: "AMC 10/12 A",
    date: "November 8, 2024",
    year: 2024,
    category: "individual",
    participants: ["Alex Chen", "Marcus Johnson"],
    placement: "2 AIME Qualifiers",
    awardLevel: "qualifier",
  },
  {
    id: "mathcounts-chapter-2024",
    name: "MATHCOUNTS Chapter",
    date: "February 10, 2024",
    year: 2024,
    category: "team",
    participants: ["Team A"],
    placement: "1st Place",
    awardLevel: "gold",
    photosUrl: "/images/gallery-2.svg",
  },
  {
    id: "pumac-2024",
    name: "PUMaC",
    date: "November 16, 2024",
    year: 2024,
    category: "team",
    participants: ["Team Alpha"],
    placement: "Division B — 12th Place",
    awardLevel: "none",
  },
  {
    id: "usamo-2024",
    name: "USAMO",
    date: "March 19, 2024",
    year: 2024,
    category: "individual",
    participants: ["Alex Chen"],
    placement: "Honorable Mention",
    awardLevel: "honorable",
    notes: "First USAMO qualifier in school history!",
    featured: true,
  },
  {
    id: "amc-2023",
    name: "AMC 10/12 A",
    date: "November 8, 2023",
    year: 2023,
    category: "individual",
    participants: ["Alex Chen"],
    placement: "1 AIME Qualifier",
    awardLevel: "qualifier",
  },
  {
    id: "mathcounts-state-2023",
    name: "MATHCOUNTS State",
    date: "March 11, 2023",
    year: 2023,
    category: "team",
    participants: ["Team A"],
    placement: "8th Place (State)",
    awardLevel: "none",
  },
];

// Helper to get unique years
export function getCompetitionYears(): number[] {
  return [...new Set(competitions.map((c) => c.year))].sort((a, b) => b - a);
}

// Helper to get unique competition names
export function getCompetitionNames(): string[] {
  return [...new Set(competitions.map((c) => c.name))].sort();
}
