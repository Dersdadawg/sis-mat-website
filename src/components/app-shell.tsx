"use client";

import { useState } from "react";
import { AnnouncementBanner } from "./announcement-banner";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { CommandPalette } from "./command-palette";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <>
      <AnnouncementBanner />
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
      <main className="min-h-[calc(100vh-4rem)]">{children}</main>
      <Footer />
      <CommandPalette
        open={commandPaletteOpen}
        onOpenChange={setCommandPaletteOpen}
      />
    </>
  );
}
