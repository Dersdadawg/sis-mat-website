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
    id: "skismc-2025-junior",
    name: "SKISMC (Junior)",
    date: "November 11, 2025",
    year: 2025,
    category: "team",
    participants: ["6 teams of 3"],
    placement: "1 Gold, 6 Silver, 8 Bronze",
    awardLevel: ["gold", "bronze", "silver"],
    notes: "Yejun Kim received recognition for overall high score in the competition and earned a spot in the World Junior Finals in Melbourne Australia. ",
    featured: true,
  },
  {
    id: "himcm-2025",
    name: "HiMCM",
    date: "November 7-9, 2025",
    year: 2025,
    category: "team",
    participants: ["6 teams of 4"],
    placement: "3 Honorable Mentions",
    awardLevel: "honorable",
  },
  {
    id: "comc-2025",
    name: "COMC",
    date: "October 30, 2025",
    year: 2025,
    category: "individual",
    participants: ["Jiwu Lee", "Anders Christensen + 18"],
    placement: "I need to look this up",
    awardLevel: "qualifier",
  },
  {
    id: "aisa-2025",
    name: "AISA",
    date: "January 30-31, 2026",
    year: 2026,
    category: "team",
    participants: ["Jiwu Lee", "Russell Jin", "Dom Min", "Minjoo Kim", "Jion Choi", "Jinwoo Park"],
    placement: "First overall",
    awardLevel: "gold",
    notes: "9 year streak of first places",
    featured: true,
  },
  {
    id: "cemc-mcq-2026",
    name: "CEMC",
    date: "February 26, 2026",
    year: 2026,
    category: "individual",
    participants: ["Jiwu Lee", "Anders Christensen + 36"],
    placement: "TBD",
    awardLevel: "none",
    notes: "no results yet",
  },
  {
    id: "pcmc-2026",
    name: "Purple Comet",
    date: "April 16, 2026",
    year: 2026,
    category: "team",
    participants: ["3 teams of 5"],
    placement: "TBD",
    awardLevel: "none",
    notes: "no results yet",
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
