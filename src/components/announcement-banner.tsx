"use client";

import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { siteConfig } from "../../content/site";

export function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);
  const { announcement } = siteConfig;

  if (!announcement.enabled || dismissed) return null;

  return (
    <div className="relative bg-accent-600 text-white text-sm text-center py-2.5 px-4">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span>{announcement.message}</span>
        {announcement.link && (
          <Link
            href={announcement.link}
            className="underline underline-offset-2 font-medium hover:opacity-80"
          >
            {announcement.linkText || "Learn more"}
          </Link>
        )}
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Dismiss announcement"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
