import { NextResponse } from "next/server";
import { competitions } from "../../../content/competitions";
import { worksheets } from "../../../content/worksheets";
import { siteConfig } from "../../../content/site";

export async function GET() {
  const feed = {
    title: `${siteConfig.schoolName} ${siteConfig.clubName}`,
    description: siteConfig.description,
    lastUpdated: new Date().toISOString(),
    competitions: competitions.map((c) => ({
      id: c.id,
      name: c.name,
      date: c.date,
      year: c.year,
      placement: c.placement,
      awardLevel: c.awardLevel,
    })),
    worksheets: worksheets.map((w) => ({
      id: w.id,
      title: w.title,
      date: w.date,
      difficulty: w.difficulty,
      tags: w.tags,
      pdfUrl: w.pdfUrl,
    })),
  };

  return NextResponse.json(feed, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
