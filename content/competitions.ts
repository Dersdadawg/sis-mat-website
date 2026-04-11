export interface CompetitionResult {
  id: string;
  name: string;
  /** Display string shown in the UI */
  date: string;
  /** ISO YYYY-MM-DD (event start); used for sorting and upcoming/past */
  sortDate: string;
  year: number;
  category: "individual" | "team";
  participants: string[];
  placement: string;
  awardLevel: "gold" | "silver" | "bronze" | "honorable" | "qualifier" | "none"
  notes?: string;
  photosUrl?: string;
  featured?: boolean;
}

export const competitions: CompetitionResult[] = [
  {
    id: "skismc-2025-junior",
    name: "SKISMC (Junior)",
    date: "November 11, 2025",
    sortDate: "2025-11-11",
    year: 2025,
    category: "team",
    participants: ["Yejun Kim", "Hyein Jeong", "Brennan Park", "Allison Shin", "Seungbie Kim", "Morgan Park", "Jaemin Kim", "Jaeha Park", "Seoyoung Lee", "Lushi Sung", "Ian Kim", "Connor Seong"],
    placement: "1 Gold, 6 Silver, 8 Bronze",
    awardLevel: "gold",
    notes: "Yejun Kim received recognition for overall high score in the competition and earned a spot in the World Junior Finals in Melbourne Australia. ",
    featured: true,
  },
  {
    id: "himcm-2025",
    name: "HiMCM",
    date: "November 7-9, 2025",
    sortDate: "2025-11-07",
    year: 2025,
    category: "team",
    participants: ["Jiwu Lee", "Anders Christensen", "Hyeonhong Chang", "Morgan Park", "Yumi Wada", "Hyori Croft", "Hannah Kim", "Dom Min", "Yejun Kim", "Hyunjun Yi", "Brennan Park", "Connor Seong", "Jion Choi", "Jayden Oh", "Jaemin Kim", "Chris Ahnn", "Ryan Paik", "Russell Jin", "Minjoo Kim", "Aiden Cho", "Jinwoo Park", "Olivia Kim", "Allison Shin"],
    placement: "3 Honorable Mentions",
    awardLevel: "honorable",
  },
  {
    id: "comc-2025",
    name: "COMC",
    date: "October 30, 2025",
    sortDate: "2025-10-30",
    year: 2025,
    category: "individual",
    participants: ["Jiwu Lee", "Anders Christensen", "Seoyoung Lee", "Hyori Croft", "Jion Choi", "Aiden Cho", "Jihyo Lim", "Russell Jin", "Hyunjun Yi", "Morgan Park", "Seungbie Kim", "Yejun Kim", "Jinwoo Park", "Yena Yoon", "Jaeha Park", "Yumi Wada", "Minjoo Kim", "Jay Yoo", "Anders Christensen", "Hannah Kim"],
    placement: "I need to look this up",
    awardLevel: "qualifier",
  },
  {
    id: "aisa-2025",
    name: "AISA",
    date: "January 30-31, 2026",
    sortDate: "2026-01-30",
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
    sortDate: "2026-02-26",
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
    sortDate: "2026-04-16",
    year: 2026,
    category: "team",
    participants: ["Jiwu Lee", "Anders Christensen", "Minjoo Kim", "Dom Min", "Jion Choi", "Russell Jin", "Ryan Lee", "Eugene Ahn", "Brennan Park", "Aiden Cho", "Sheen Cho", "Jinwoo Park", "Jayden Oh", "Brian Lee", "June Park", "Woong Cho"],
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

/** Local calendar date as YYYY-MM-DD */
export function getTodaySortDate(): string {
  const t = new Date();
  const y = t.getFullYear();
  const m = String(t.getMonth() + 1).padStart(2, "0");
  const d = String(t.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function isUpcomingCompetition(c: CompetitionResult, today = getTodaySortDate()): boolean {
  return c.sortDate >= today;
}
