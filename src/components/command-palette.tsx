"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import {
  Home,
  Trophy,
  FileText,
  Presentation,
  Info,
  Mail,
  Search,
} from "lucide-react";
import { worksheets } from "../../content/worksheets";
import { competitions } from "../../content/competitions";

const pages = [
  { name: "Home", href: "/", icon: Home },
  { name: "Competitions & Results", href: "/competitions", icon: Trophy },
  { name: "Worksheets", href: "/worksheets", icon: FileText },
  { name: "Resources", href: "/resources", icon: Presentation },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    },
    [open, onOpenChange]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => onOpenChange(false)}
      />
      {/* Dialog */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg">
        <Command
          className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--popover))] text-[hsl(var(--popover-foreground))] shadow-2xl overflow-hidden"
          label="Command palette"
        >
          <div className="flex items-center border-b border-[hsl(var(--border))] px-4">
            <Search className="h-4 w-4 shrink-0 text-[hsl(var(--muted-foreground))]" />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search pages, worksheets, competitions..."
              className="flex h-12 w-full bg-transparent px-3 text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))]"
            />
          </div>
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-[hsl(var(--muted-foreground))]">
              No results found.
            </Command.Empty>

            <Command.Group
              heading="Pages"
              className="text-xs font-semibold text-[hsl(var(--muted-foreground))] px-2 py-1.5"
            >
              {pages.map((page) => (
                <Command.Item
                  key={page.href}
                  value={page.name}
                  onSelect={() => {
                    router.push(page.href);
                    onOpenChange(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer aria-selected:bg-[hsl(var(--accent))]"
                >
                  <page.icon className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                  {page.name}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Worksheets"
              className="text-xs font-semibold text-[hsl(var(--muted-foreground))] px-2 py-1.5"
            >
              {worksheets.map((ws) => (
                <Command.Item
                  key={ws.id}
                  value={`worksheet ${ws.title} ${ws.tags.join(" ")}`}
                  onSelect={() => {
                    router.push("/worksheets");
                    onOpenChange(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer aria-selected:bg-[hsl(var(--accent))]"
                >
                  <FileText className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                  <div>
                    <div>{ws.title}</div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      {ws.difficulty} · {ws.tags.join(", ")}
                    </div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group
              heading="Competition Results"
              className="text-xs font-semibold text-[hsl(var(--muted-foreground))] px-2 py-1.5"
            >
              {competitions.slice(0, 5).map((c) => (
                <Command.Item
                  key={c.id}
                  value={`competition ${c.name} ${c.year} ${c.placement}`}
                  onSelect={() => {
                    router.push("/competitions");
                    onOpenChange(false);
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg cursor-pointer aria-selected:bg-[hsl(var(--accent))]"
                >
                  <Trophy className="h-4 w-4 text-[hsl(var(--muted-foreground))]" />
                  <div>
                    <div>{c.name}</div>
                    <div className="text-xs text-[hsl(var(--muted-foreground))]">
                      {c.year} · {c.placement}
                    </div>
                  </div>
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
