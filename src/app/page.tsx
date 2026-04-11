"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Users,
  GraduationCap,
  Heart,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Download,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { KaTeXBlock } from "@/components/katex-render";
import { siteConfig } from "../../content/site";
import { competitions } from "../../content/competitions";
import { worksheets } from "../../content/worksheets";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="h-8 w-8" />,
  Users: <Users className="h-8 w-8" />,
  GraduationCap: <GraduationCap className="h-8 w-8" />,
  Heart: <Heart className="h-8 w-8" />,
};

export default function HomePage() {
  const recentResults = [...competitions]
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))
    .slice(0, 3);

  const featuredWorksheet = worksheets.find((w) => w.featured) || worksheets[0];

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={siteConfig.hero.backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[hsl(var(--background))]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 sm:py-44">
          <FadeIn>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              {siteConfig.hero.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
              {siteConfig.hero.subtitle}
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-accent-600 hover:bg-accent-700 text-white">
                  Join the Club
                </Button>
              </Link>
              <Link href="/worksheets">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Worksheets
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── What We Do ────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
              What We Do
            </h2>
            <p className="mt-4 text-center text-[hsl(var(--muted-foreground))] max-w-xl mx-auto">
              From friendly problem sessions to national competitions — there&apos;s something for everyone.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.activities.map((activity) => (
              <FadeInItem key={activity.title}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="mb-3 text-accent-600 group-hover:scale-110 transition-transform inline-block">
                      {iconMap[activity.icon] || <Trophy className="h-8 w-8" />}
                    </div>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {activity.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── Upcoming ──────────────────────────────────── */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
              Upcoming
            </h2>
          </FadeIn>

          <FadeInStagger className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Next Meeting */}
            <FadeInItem>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 text-accent-600 mb-1">
                    <Calendar className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      Next Meeting
                    </span>
                  </div>
                  <CardTitle className="text-xl">
                    {siteConfig.upcoming.nextMeeting.topic}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {siteConfig.upcoming.nextMeeting.date} at{" "}
                    {siteConfig.upcoming.nextMeeting.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {siteConfig.upcoming.nextMeeting.location}
                  </div>
                </CardContent>
              </Card>
            </FadeInItem>

            {/* Next Competition */}
            <FadeInItem>
              <Card className="h-full border-accent-200 dark:border-accent-900">
                <CardHeader>
                  <div className="flex items-center gap-2 text-accent-600 mb-1">
                    <Trophy className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      Next Competition
                    </span>
                  </div>
                  <CardTitle className="text-xl">
                    {siteConfig.upcoming.nextCompetition.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-[hsl(var(--muted-foreground))]">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {siteConfig.upcoming.nextCompetition.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {siteConfig.upcoming.nextCompetition.location}
                  </div>
                </CardContent>
              </Card>
            </FadeInItem>
          </FadeInStagger>
        </div>
      </section>

      {/* ── Problem of the Week ───────────────────────── */}
      {siteConfig.problemOfTheWeek.enabled && (
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <Card className="border-accent-200 dark:border-accent-900 overflow-hidden">
                <div className="bg-accent-600 px-6 py-3">
                  <div className="flex items-center gap-2 text-white">
                    <Lightbulb className="h-5 w-5" />
                    <span className="font-semibold">
                      {siteConfig.problemOfTheWeek.title}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-6 pb-6">
                  <div className="text-base leading-relaxed">
                    <KaTeXBlock content={siteConfig.problemOfTheWeek.problem} />
                  </div>
                  {siteConfig.problemOfTheWeek.hint && (
                    <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))] italic">
                      Hint: {siteConfig.problemOfTheWeek.hint}
                    </p>
                  )}
                  <p className="mt-2 text-xs text-[hsl(var(--muted-foreground))]">
                    Submit by {siteConfig.problemOfTheWeek.deadline}
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Recent Results ────────────────────────────── */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Recent Results
              </h2>
              <Link href="/competitions">
                <Button variant="ghost" className="text-accent-600">
                  View all <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentResults.map((result) => (
              <FadeInItem key={result.id}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-1">
                      <Badge
                        variant={
                          result.awardLevel === "gold"
                            ? "default"
                            : result.awardLevel === "none"
                              ? "secondary"
                              : "outline"
                        }
                        className={
                          result.awardLevel === "gold"
                            ? "bg-amber-500 text-white"
                            : result.awardLevel === "silver"
                              ? "bg-gray-400 text-white"
                              : result.awardLevel === "bronze"
                                ? "bg-amber-700 text-white"
                                : ""
                        }
                      >
                        {result.awardLevel === "none"
                          ? result.category
                          : result.awardLevel}
                      </Badge>
                      <span className="text-xs text-[hsl(var(--muted-foreground))]">
                        {result.date}
                      </span>
                    </div>
                    <CardTitle>{result.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-accent-600">
                      {result.placement}
                    </p>
                    {result.notes && (
                      <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">
                        {result.notes}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* ── Featured Worksheet ────────────────────────── */}
      {featuredWorksheet && (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12">
                Featured Worksheet
              </h2>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {featuredWorksheet.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                    <Badge variant="outline">{featuredWorksheet.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-xl">
                    {featuredWorksheet.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[hsl(var(--muted-foreground))] mb-4">
                    {featuredWorksheet.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href={featuredWorksheet.pdfUrl} download>
                      <Button>
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                    {featuredWorksheet.solutionsUrl && (
                      <a href={featuredWorksheet.solutionsUrl} download>
                        <Button variant="outline">View Solutions</Button>
                      </a>
                    )}
                    <Link href="/worksheets">
                      <Button variant="ghost" className="text-accent-600">
                        All worksheets <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── Gallery ───────────────────────────────────── */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12">
              Gallery
            </h2>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {siteConfig.gallery.map((img, i) => (
              <FadeInItem key={i}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                  </div>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </div>
      </section>
    </div>
  );
}
