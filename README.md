# Math Club Website

A modern, static website for a school Math Club built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing Content

All site content lives in the `content/` directory. No code changes needed for routine updates.

### `content/site.ts`

The main configuration file. Edit this to change:

- **School/club name** and hero text
- **Announcement banner** (toggle with `enabled: true/false`)
- **Problem of the Week** (supports LaTeX: `$...$` for inline, `$$...$$` for display)
- **Activities** shown on the home page (icon, title, description)
- **Upcoming events** (next meeting date/time/location, next competition)
- **Photo gallery** images (array of `{ src, alt }`)
- **Officer list** (name, role, bio, photo, email)
- **About page** content (mission, meeting schedule, milestones timeline)
- **Contact info** (club email, advisor, QR code image)
- **Social links** (set to `""` to hide any platform)

### `content/competitions.ts`

Array of competition results. Each entry:

```ts
{
  id: "unique-id",
  name: "AMC 10/12 A",
  date: "November 6, 2025",
  year: 2025,
  category: "individual" | "team",
  participants: ["Name1", "Name2"],
  placement: "3 AIME Qualifiers",
  awardLevel: "gold" | "silver" | "bronze" | "honorable" | "qualifier" | "none",
  notes: "Optional notes",
  photosUrl: "/images/photo.jpg",  // optional
  featured: true,                   // optional, pins to top
}
```

### `content/worksheets.ts`

Array of downloadable worksheets. Each entry:

```ts
{
  id: "unique-id",
  title: "AMC 10 Algebra Drills",
  date: "January 28, 2026",
  difficulty: "Beginner" | "Intermediate" | "Advanced",
  tags: ["Algebra", "Geometry", "Combinatorics", "Number Theory", "Mixed", "Beginner", "Advanced"],
  description: "Short description...",
  pdfUrl: "/worksheets/filename.pdf",
  solutionsUrl: "/worksheets/filename-solutions.pdf",  // optional
  featured: true,                                       // optional
}
```

## Adding Images

Place images in `public/images/`:

| Image | Path | Notes |
|-------|------|-------|
| Hero background | `public/images/hero.svg` (or .jpg/.png) | Recommended 1920x1080+ |
| Gallery photos | `public/images/gallery-*.svg` | 4:3 aspect ratio recommended |
| Officer photos | `public/images/officers/*.svg` | Square, will be cropped to circle |
| QR code | `public/images/qr-code.svg` | Square |

Then update the paths in `content/site.ts`.

## Adding Worksheets

1. Place the PDF in `public/worksheets/`
2. Add an entry to `content/worksheets.ts`
3. Optionally add solutions PDF and set `solutionsUrl`

## Features

- **Dark mode** -- toggle in the navbar, persisted via system preference
- **Command palette** -- press `Cmd+K` (or `Ctrl+K`) to search pages, worksheets, and competitions
- **Problem of the Week** -- LaTeX rendering via KaTeX
- **Announcement banner** -- dismissible, toggleable via `site.ts`
- **JSON feed** -- available at `/feed` for programmatic access
- **Print-friendly** -- competition results page has a print button
- **Responsive** -- mobile-first design with card layout on small screens
- **Accessible** -- ARIA labels, keyboard navigation, good contrast

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide React](https://lucide.dev/) for icons
- [KaTeX](https://katex.org/) for LaTeX rendering
- [cmdk](https://cmdk.paco.me/) for command palette
- [next-themes](https://github.com/pacocoursey/next-themes) for dark mode

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Or connect the repo to [Vercel](https://vercel.com) for automatic deployments.

## Project Structure

```
content/
  site.ts            # Main site configuration
  competitions.ts    # Competition results data
  worksheets.ts      # Worksheets data
public/
  images/            # Site images (hero, gallery, officers, QR)
  worksheets/        # Downloadable PDF files
src/
  app/
    page.tsx         # Home page
    layout.tsx       # Root layout
    competitions/    # Competitions & Results page
    worksheets/      # Worksheets page
    about/           # About page
    contact/         # Contact page
    feed/            # JSON feed API route
  components/
    ui/              # Base UI components (Button, Card, Badge, Input, Skeleton)
    navbar.tsx       # Top navigation
    footer.tsx       # Footer with social links
    theme-*.tsx      # Dark mode provider and toggle
    announcement-banner.tsx
    command-palette.tsx
    motion.tsx       # Framer Motion animation wrappers
    katex-render.tsx # LaTeX rendering components
    app-shell.tsx    # Main app shell (nav + footer + command palette)
  lib/
    utils.ts         # Utility functions (cn)
```
