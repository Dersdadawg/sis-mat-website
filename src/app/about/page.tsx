"use client";

import Image from "next/image";
import { Calendar, Mail, Target, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { siteConfig } from "../../../content/site";

export default function AboutPage() {
  const { about } = siteConfig;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <FadeIn>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          About Us
        </h1>
        <p className="mt-4 text-lg text-[hsl(var(--muted-foreground))] max-w-2xl">
          Get to know the {siteConfig.schoolName} {siteConfig.clubName}.
        </p>
      </FadeIn>

      {/* Mission */}
      <FadeIn delay={0.1}>
        <Card className="mt-12">
          <CardHeader>
            <div className="flex items-center gap-2 text-accent-600">
              <Target className="h-5 w-5" />
              <CardTitle>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-lg">
              {about.mission}
            </p>
          </CardContent>
        </Card>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="mt-8 flex items-center gap-3 text-[hsl(var(--muted-foreground))]">
          <Calendar className="h-5 w-5 text-accent-600" />
          <span className="font-medium">{about.meetingSchedule}</span>
        </div>
      </FadeIn>

      {/* Officers */}
      <section className="mt-16">
        <FadeIn>
          <div className="flex items-center gap-2 mb-8">
            <Users className="h-6 w-6 text-accent-600" />
            <h2 className="text-3xl font-bold tracking-tight">Officers</h2>
          </div>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.officers.map((officer) => (
            <FadeInItem key={officer.name}>
              <Card className="h-full text-center hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 rounded-full bg-[hsl(var(--muted))] overflow-hidden mb-3 relative">
                    <Image
                      src={officer.photo}
                      alt={officer.name}
                      fill
                      className="object-cover"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-[hsl(var(--muted-foreground))]">
                      {officer.name.charAt(0)}
                    </div>
                  </div>
                  <CardTitle className="text-base">{officer.name}</CardTitle>
                  <p className="text-sm font-medium text-accent-600">
                    {officer.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    {officer.bio}
                  </p>
                  {officer.email && (
                    <a
                      href={`mailto:${officer.email}`}
                      className="inline-flex items-center gap-1 mt-3 text-xs text-accent-600 hover:underline"
                    >
                      <Mail className="h-3 w-3" />
                      {officer.email}
                    </a>
                  )}
                </CardContent>
              </Card>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </section>

      {/* Timeline */}
      <section className="mt-16">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-8">
            Our Journey
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-[hsl(var(--border))]" />

          <div className="space-y-8">
            {about.milestones.map((milestone, i) => (
              <FadeIn key={milestone.year + milestone.event} delay={i * 0.05}>
                <div
                  className={`relative flex items-start gap-6 ${
                    i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-600 border-2 border-[hsl(var(--background))] z-10 mt-1.5" />

                  <div
                    className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                    }`}
                  >
                    <span className="text-sm font-bold text-accent-600">
                      {milestone.year}
                    </span>
                    <p className="text-[hsl(var(--muted-foreground))] mt-1">
                      {milestone.event}
                    </p>
                  </div>

                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
