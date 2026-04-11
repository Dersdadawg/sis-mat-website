"use client";

import { useState, useMemo } from "react";
import { Search, Download, FileText, BookOpen, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import {
  worksheets,
  getAllTags,
  type Tag,
  type Worksheet,
} from "../../../content/worksheets";

const difficultyColors: Record<string, string> = {
  Beginner:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Intermediate:
    "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  Advanced: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function WorksheetsPage() {
  const allTags = getAllTags();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<Tag>>(new Set());

  const toggleTag = (tag: Tag) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const filtered = useMemo(() => {
  let results = [...worksheets];

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    results = results.filter(
      (w) =>
        w.title.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  if (activeTags.size > 0) {
    results = results.filter((w) => w.tags.some((t) => activeTags.has(t)));
  }

  results.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.sortdate).getTime() - new Date(a.sortdate).getTime();
  });

  return results;
}, [searchQuery, activeTags]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Worksheets
        </h1>
        <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
          Downloadable problem sets and solutions — from beginner to olympiad
          level.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
            <Input
              placeholder="Search worksheets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              aria-label="Search worksheets"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                  activeTags.has(tag)
                    ? "bg-accent-600 text-white border-accent-600"
                    : "bg-transparent text-[hsl(var(--muted-foreground))] border-[hsl(var(--border))] hover:border-accent-400 hover:text-accent-600"
                }`}
                aria-pressed={activeTags.has(tag)}
                aria-label={`Filter by ${tag}`}
              >
                {tag}
              </button>
            ))}
            {activeTags.size > 0 && (
              <button
                onClick={() => setActiveTags(new Set())}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </FadeIn>

      <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))]">
        Showing {filtered.length} worksheet{filtered.length !== 1 ? "s" : ""}
      </p>

      <FadeInStagger className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((ws) => (
          <FadeInItem key={ws.id}>
            <WorksheetCard worksheet={ws} />
          </FadeInItem>
        ))}
      </FadeInStagger>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-[hsl(var(--muted-foreground))]">
          <FileText className="h-12 w-12 mx-auto mb-4 opacity-30" />
          <p className="text-lg">No worksheets match your search.</p>
        </div>
      )}

      <FadeIn delay={0.2}>
        <Card className="mt-16 border-dashed">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-[hsl(var(--muted-foreground))]" />
              <CardTitle className="text-base">For Maintainers</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-[hsl(var(--muted-foreground))] space-y-2">
            <p>
              To add a new worksheet, edit{" "}
              <code className="px-1 py-0.5 rounded bg-[hsl(var(--muted))] font-mono text-xs">
                content/worksheets.ts
              </code>{" "}
              and add a new entry to the array.
            </p>
            <p>
              Place the PDF file in{" "}
              <code className="px-1 py-0.5 rounded bg-[hsl(var(--muted))] font-mono text-xs">
                public/worksheets/
              </code>{" "}
              and reference it in the{" "}
              <code className="font-mono text-xs">pdfUrl</code> field.
            </p>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

function WorksheetCard({ worksheet }: { worksheet: Worksheet }) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow group">
      <CardHeader className="flex-1">
        <div className="flex flex-wrap gap-2 mb-2">
          {worksheet.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          <Badge className={difficultyColors[worksheet.difficulty]}>
            {worksheet.difficulty}
          </Badge>
        </div>
        <CardTitle className="text-base group-hover:text-accent-600 transition-colors">
          {worksheet.title}
        </CardTitle>
        <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
          {worksheet.date}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4 line-clamp-2">
          {worksheet.description}
        </p>
        <div className="flex flex-wrap gap-2">
          <a href={worksheet.pdfUrl} download>
            <Button size="sm" className="gap-1.5">
              <Download className="h-3.5 w-3.5" />
              PDF
            </Button>
          </a>
          {worksheet.solutionsUrl && (
            <a href={worksheet.solutionsUrl} download>
              <Button size="sm" variant="outline" className="gap-1.5">
                <BookOpen className="h-3.5 w-3.5" />
                Solutions
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
