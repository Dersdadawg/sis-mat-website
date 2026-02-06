export const siteConfig = {
  schoolName: "Westfield Academy",
  clubName: "Math Club",
  tagline: "Where curiosity meets proof.",
  description:
    "We are a group of students passionate about mathematics — from contest prep to collaborative problem-solving. Everyone is welcome, from beginners to competition veterans.",

  // Hero section
  hero: {
    title: "Westfield Academy Math Club",
    subtitle:
      "Explore the beauty of mathematics through competitions, workshops, and community.",
    // Place your hero image in /public/images/hero.jpg (recommended: 1920×1080 or larger)
    backgroundImage: "/images/hero.svg",
  },

  // Announcement banner (set enabled: false to hide)
  announcement: {
    enabled: true,
    message: "🎉 Registration for AMC 2026 is now open — sign up by Feb 20!",
    link: "/competitions",
    linkText: "Learn more",
  },

  // Problem of the Week (supports LaTeX via KaTeX)
  problemOfTheWeek: {
    enabled: true,
    title: "Problem of the Week",
    // Use LaTeX notation: wrap math in $...$ for inline or $$...$$ for display
    problem:
      "Let $a, b, c$ be positive reals with $a + b + c = 1$. Prove that $$a^2 + b^2 + c^2 \\geq \\frac{1}{3}.$$",
    hint: "Try Cauchy-Schwarz or QM-AM.",
    deadline: "February 14, 2026",
  },

  // What we do cards
  activities: [
    {
      title: "Contest Prep",
      description:
        "Weekly sessions focused on AMC, AIME, MATHCOUNTS, and olympiad-level problems.",
      icon: "Trophy",
    },
    {
      title: "Peer Tutoring",
      description:
        "Upper-class mentors help underclassmen build strong foundations in algebra, geometry, and beyond.",
      icon: "Users",
    },
    {
      title: "Guest Lectures",
      description:
        "Professors and alumni visit to talk about research, careers, and the cutting edge of math.",
      icon: "GraduationCap",
    },
    {
      title: "Community",
      description:
        "Game nights, pi day celebrations, and a welcoming space for anyone who loves math.",
      icon: "Heart",
    },
  ],

  // Upcoming events
  upcoming: {
    nextMeeting: {
      date: "February 12, 2026",
      time: "3:30 PM",
      location: "Room 214, Science Building",
      topic: "AIME Preparation — Combinatorics Focus",
    },
    nextCompetition: {
      name: "AMC 10/12 B",
      date: "February 18, 2026",
      location: "Main Auditorium",
    },
  },

  // Photo gallery (place images in /public/images/)
  gallery: [
    { src: "/images/gallery-1.svg", alt: "Team at state competition" },
    { src: "/images/gallery-2.svg", alt: "Workshop session" },
    { src: "/images/gallery-3.svg", alt: "Pi Day celebration" },
  ],

  // About page
  about: {
    mission:
      "Our mission is to foster a love of mathematics, support students in math competitions, and build a collaborative community of problem solvers.",
    founded: 2018,
    meetingSchedule: "Every Wednesday, 3:30–5:00 PM in Room 214",
    milestones: [
      { year: 2018, event: "Math Club founded with 12 members" },
      { year: 2019, event: "First team qualifies for state MATHCOUNTS" },
      { year: 2020, event: "Launched virtual problem sets during remote learning" },
      { year: 2021, event: "Grew to 45 active members" },
      { year: 2022, event: "Three students qualify for AIME" },
      { year: 2023, event: "Hosted first inter-school math relay" },
      { year: 2024, event: "Two students qualify for USAMO" },
      { year: 2025, event: "Launched online worksheet archive" },
    ],
    officers: [
      {
        name: "Alex Chen",
        role: "President",
        bio: "Senior. AIME qualifier. Loves number theory.",
        photo: "/images/officers/alex.svg",
        email: "alex@example.com",
      },
      {
        name: "Priya Patel",
        role: "Vice President",
        bio: "Junior. Passionate about geometry and outreach.",
        photo: "/images/officers/priya.svg",
        email: "priya@example.com",
      },
      {
        name: "Marcus Johnson",
        role: "Treasurer",
        bio: "Senior. Combinatorics enthusiast.",
        photo: "/images/officers/marcus.svg",
        email: "marcus@example.com",
      },
      {
        name: "Sophie Williams",
        role: "Secretary",
        bio: "Junior. Organizes workshops and social events.",
        photo: "/images/officers/sophie.svg",
        email: "sophie@example.com",
      },
    ],
  },

  // Contact
  contact: {
    email: "mathclub@westfieldacademy.edu",
    advisorName: "Ms. Rivera",
    advisorEmail: "m.rivera@westfieldacademy.edu",
    qrCodeImage: "/images/qr-code.svg",
    formSubjectPrefix: "[Math Club Inquiry]",
  },

  // Social links (set to "" or remove to hide)
  socials: {
    instagram: "https://instagram.com/wamathclub",
    twitter: "",
    github: "https://github.com/wa-math-club",
    youtube: "",
    discord: "https://discord.gg/example",
    email: "mathclub@westfieldacademy.edu",
  },

  // Footer
  footer: {
    blurb:
      "Westfield Academy Math Club — inspiring the next generation of mathematicians since 2018.",
  },

  // Accent color (Tailwind class name)
  accentColor: "indigo",
};

export type SiteConfig = typeof siteConfig;
