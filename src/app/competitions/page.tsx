"use client";

import { useState, useMemo } from "react";
import { Search, Filter, Trophy, Camera, Printer } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import {
  competitions,
  getCompetitionYears,
  isUpcomingCompetition,
  type CompetitionResult,
} from "../../../content/competitions";

const awardColors: Record<string, string> = {
  gold: "bg-amber-500 text-white",
  silver: "bg-gray-400 text-white",
  bronze: "bg-amber-700 text-white",
  honorable: "bg-accent-100 text-accent-800 dark:bg-accent-900 dark:text-accent-200",
  qualifier: "bg-accent-600 text-white",
  none: "",
};

export default function CompetitionsPage() {
  const years = getCompetitionYears();
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [awardsOnly, setAwardsOnly] = useState(false);
  const [timeFilter, setTimeFilter] = useState<"all" | "upcoming" | "past">(
    "all"
  );
  const [dateSort, setDateSort] = useState<"asc" | "desc">("desc");

  const filtered = useMemo(() => {
    let results = [...competitions];

    if (timeFilter === "upcoming") {
      results = results.filter((c) => isUpcomingCompetition(c));
    } else if (timeFilter === "past") {
      results = results.filter((c) => !isUpcomingCompetition(c));
    }

    results.sort((a, b) =>
      dateSort === "asc"
        ? a.sortDate.localeCompare(b.sortDate)
        : b.sortDate.localeCompare(a.sortDate)
    );

    if (yearFilter !== "all") {
      results = results.filter((c) => c.year === parseInt(yearFilter));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.placement.toLowerCase().includes(q) ||
          c.participants.some((p) => p.toLowerCase().includes(q))
      );
    }
    if (awardsOnly) {
      results = results.filter((c) => c.awardLevel !== "none");
    }

    return results;
  }, [yearFilter, searchQuery, awardsOnly, timeFilter, dateSort]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Header */}
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Competitions &amp; Results
        </h1>
        <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
          Our track record in math competitions — from local chapter rounds to
          national olympiads.
        </p>
      </FadeIn>

      {/* Filters */}
      <FadeIn delay={0.1}>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-wrap">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
            <Input
              placeholder="Search competitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label="Search competitions"
            />
          </div>

          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="h-10 rounded-lg border border-[hsl(var(--input))] bg-transparent px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            aria-label="Filter by year"
          >
            <option value="all">All Years</option>
            {years.map((y) => (
              <option key={y} value={y.toString()}>
                {y}
              </option>
            ))}
          </select>

          <select
            value={timeFilter}
            onChange={(e) =>
              setTimeFilter(e.target.value as "all" | "upcoming" | "past")
            }
            className="h-10 rounded-lg border border-[hsl(var(--input))] bg-transparent px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            aria-label="Show upcoming or past competitions"
          >
            <option value="all">All dates</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>

          <select
            value={dateSort}
            onChange={(e) => setDateSort(e.target.value as "asc" | "desc")}
            className="h-10 rounded-lg border border-[hsl(var(--input))] bg-transparent px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))]"
            aria-label="Sort by date"
          >
            <option value="desc">Latest date first</option>
            <option value="asc">Earliest date first</option>
          </select>

          <Button
            variant={awardsOnly ? "default" : "outline"}
            size="sm"
            onClick={() => setAwardsOnly(!awardsOnly)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            Awards only
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.print()}
            className="gap-2 no-print"
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>
      </FadeIn>

      <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
        Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Desktop Table */}
      <FadeIn delay={0.2}>
        <div className="hidden md:block mt-6 rounded-2xl border border-[hsl(var(--border))] overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[hsl(var(--muted))] text-left">
                <th className="px-4 py-3 font-semibold">Competition</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Participants</th>
                <th className="px-4 py-3 font-semibold">Placement</th>
                <th className="px-4 py-3 font-semibold">Award</th>
                <th className="px-4 py-3 font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr
                  key={c.id}
                  className={`border-t border-[hsl(var(--border))] ${
                    i % 2 === 0
                      ? "bg-[hsl(var(--card))]"
                      : "bg-[hsl(var(--muted))]/30"
                  } hover:bg-[hsl(var(--accent))]/50 transition-colors`}
                >
                  <td className="px-4 py-3 font-medium">
                    <div className="flex items-center gap-2">
                      {c.featured && (
                        <Trophy className="h-4 w-4 text-accent-600 shrink-0" />
                      )}
                      {c.name}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[hsl(var(--muted-foreground))]">
                    {c.date}
                  </td>
                  <td className="px-4 py-3 capitalize text-[hsl(var(--muted-foreground))]">
                    {c.category}
                  </td>
                  <td className="px-4 py-3 text-[hsl(var(--muted-foreground))]">
                    {<ParticipantList participants={c.participants} />}
                  </td>
                  <td className="px-4 py-3 font-medium">{c.placement}</td>
                  <td className="px-4 py-3">
                    {c.awardLevel !== "none" && (
                      <Badge className={awardColors[c.awardLevel]}>
                        {c.awardLevel}
                      </Badge>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {c.photosUrl && (
                      <a
                        href={c.photosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 hover:underline inline-flex items-center gap-1"
                      >
                        <Camera className="h-3.5 w-3.5" />
                        Photos
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>

      {/* Mobile Cards */}
      <FadeInStagger className="md:hidden mt-6 space-y-4">
        {filtered.map((c) => (
          <FadeInItem key={c.id}>
            <CompetitionCard result={c} />
          </FadeInItem>
        ))}
      </FadeInStagger>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[hsl(var(--muted-foreground))]">
          <Trophy className="h-12 w-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg">No results match your filters.</p>
        </div>
      )}
    </div>
  );
}

function CompetitionCard({ result }: { result: CompetitionResult }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {result.featured && (
              <Trophy className="h-4 w-4 text-accent-600" />
            )}
            <CardTitle className="text-base">{result.name}</CardTitle>
          </div>
          {result.awardLevel !== "none" && (
            <Badge className={awardColors[result.awardLevel]}>
              {result.awardLevel}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-1.5 text-sm">
        <div className="text-[hsl(var(--muted-foreground))]">{result.date}</div>
        <div>
          <span className="text-[hsl(var(--muted-foreground))]">
            {result.category}:
          </span>{" "}
          {<ParticipantList participants={result.participants} />}
        </div>
        <div className="font-medium text-accent-600">{result.placement}</div>
        {result.notes && (
          <p className="text-[hsl(var(--muted-foreground))] italic text-xs">
            {result.notes}
          </p>
        )}
        {result.photosUrl && (
          <a
            href={result.photosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent-600 hover:underline text-xs mt-1"
          >
            <Camera className="h-3.5 w-3.5" />
            Photos
          </a>
        )}
      </CardContent>
    </Card>
  );
}
function ParticipantList({ participants }: { participants: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const LIMIT = 2;

  if (participants.length <= LIMIT) {
    return <span>{participants.join(", ")}</span>;
  }

  return (
    <span>
      {expanded ? participants.join(", ") : `${participants.slice(0, LIMIT).join(", ")} +${participants.length - LIMIT}`}
      <button
        onClick={() => setExpanded(!expanded)}
        className="ml-1 text-accent-600 hover:underline text-xs font-medium"
      >
        {expanded ? "show less" : "show all"}
      </button>
    </span>
  );
}
