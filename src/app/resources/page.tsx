"use client";

import { useState, useMemo } from "react";
import { Search, Presentation, ExternalLink, Download, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import {
  resources,
  getAllResourceTags,
  type ResourceTag,
  type Resource,
} from "../../../content/resources";

export default function ResourcesPage() {
  const allTags = getAllResourceTags();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<ResourceTag>>(new Set());

  const toggleTag = (tag: ResourceTag) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const filtered = useMemo(() => {
    let results = [...resources];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (activeTags.size > 0) {
      results = results.filter((r) => r.tags.some((t) => activeTags.has(t)));
    }

    results.sort(
      (a, b) =>
        new Date(b.sortdate).getTime() - new Date(a.sortdate).getTime()
    );

    return results;
  }, [searchQuery, activeTags]);

  const isExternal = (url: string) =>
    url.startsWith("http://") || url.startsWith("https://");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Resources
        </h1>
        <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
          Slides and materials from our weekly meetings.
        </p>
      </FadeIn>

      {resources.length > 0 && (
        <FadeIn delay={0.1}>
          <div className="mt-8 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[hsl(var(--muted-foreground))]" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                aria-label="Search resources"
              />
            </div>

            {allTags.length > 0 && (
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
            )}

            <p className="text-sm text-[hsl(var(--muted-foreground))]">
              Showing {filtered.length} resource{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
        </FadeIn>
      )}

      {resources.length === 0 ? (
        <FadeIn delay={0.1}>
          <div className="mt-20 text-center text-[hsl(var(--muted-foreground))]">
            <Presentation className="h-14 w-14 mx-auto mb-4 opacity-20" />
            <p className="text-lg font-medium">No resources yet</p>
            <p className="mt-2 text-sm">
              Slides will appear here once they&apos;re added.
            </p>
          </div>
        </FadeIn>
      ) : (
        <>
          <FadeInStagger className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource) => (
              <FadeInItem key={resource.id}>
                <ResourceCard resource={resource} isExternal={isExternal} />
              </FadeInItem>
            ))}
          </FadeInStagger>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[hsl(var(--muted-foreground))]">
              <Presentation className="h-12 w-12 mx-auto mb-4 opacity-30" />
              <p className="text-lg">No resources match your search.</p>
            </div>
          )}
        </>
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
              To add slides, edit{" "}
              <code className="px-1 py-0.5 rounded bg-[hsl(var(--muted))] font-mono text-xs">
                content/resources.ts
              </code>{" "}
              and add a new entry to the array.
            </p>
            <p>
              For PDF slides, place the file in{" "}
              <code className="px-1 py-0.5 rounded bg-[hsl(var(--muted))] font-mono text-xs">
                public/resources/
              </code>{" "}
              and set{" "}
              <code className="font-mono text-xs">slideUrl</code> to{" "}
              <code className="font-mono text-xs">&quot;/resources/filename.pdf&quot;</code>.
              For Google Slides, paste the full share URL instead.
            </p>
          </CardContent>
        </Card>
      </FadeIn>
    </div>
  );
}

function ResourceCard({
  resource,
  isExternal,
}: {
  resource: Resource;
  isExternal: (url: string) => boolean;
}) {
  const external = isExternal(resource.slideUrl);

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow group">
      <CardHeader className="flex-1">
        <div className="flex flex-wrap gap-2 mb-2">
          {resource.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-base group-hover:text-accent-600 transition-colors">
          {resource.title}
        </CardTitle>
        <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
          {resource.date}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[hsl(var(--muted-foreground))] mb-4 line-clamp-2">
          {resource.description}
        </p>
        <a
          href={resource.slideUrl}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={!external || undefined}
        >
          <Button size="sm" className="gap-1.5">
            {external ? (
              <>
                <ExternalLink className="h-3.5 w-3.5" />
                Open Slides
              </>
            ) : (
              <>
                <Download className="h-3.5 w-3.5" />
                Download
              </>
            )}
          </Button>
        </a>
      </CardContent>
    </Card>
  );
}
