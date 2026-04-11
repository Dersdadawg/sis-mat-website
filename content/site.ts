export const siteConfig = {
  schoolName: "Seoul International School",
  clubName: "Mu Alpha Theta",
  tagline: "The one and only Math Club at SIS",
  description:
    "Mu Alpha Theta (or MAΘ) aims to foster a love for mathematics and train problem solving skills. Our competition team allows members to take part in a variety of global competitions, while our general branch encourages exploration of recreational and pure mathematics.",

  // Hero section
  hero: {
    title: "SIS Mu Alpha Theta",
    subtitle:
      "Explore the beauty of mathematics through competitions, general meetings, and more.",
    // Place your hero image in /public/images/hero.jpg (recommended: 1920×1080 or larger)
    backgroundImage: "/images/hero.svg",
  },

  // Announcement banner (set enabled: false to hide)
  announcement: {
    enabled: true,
    message: "Registration for SKISMC is due soon. Sign up soon!",
    link: "/competitions",
    linkText: "Learn more",
  },

  // Problem of the Week (supports LaTeX via KaTeX)
  problemOfTheWeek: {
    enabled: false,
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
        "Weekly sessions focused on AMC, AIME, CEMC, and olympiad-level problems.",
      icon: "Trophy",
    },
    {
      title: "General Meeting",
      description:
        "Exploration of interesting topics and games in mathematics such as codebreakers.",
      icon: "Users",
    },
  ],

  // Upcoming events
  upcoming: {
    nextMeeting: {
      date: "February 13, 2026",
      time: "1:10 PM",
      location: "Room 116, Mr. Warkentin's Room",
      topic: "TBD",
    },
    nextCompetition: {
      name: "CEMC",
      date: "To be announced",
      location: "M116",
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
    meetingSchedule: "Every Friday, 1:10–1:40 PM in Room 116",
    milestones: [
      { year: 2025, event: "Launched online worksheet archive" },
    ],
    officers: [
      {
        name: "Jiwu Lee",
        role: "President",
        bio: "Yeth",
        photo: "/images/officers/alex.svg",
        email: "jiwu.lee27@siskorea.org",
      },
      {
        name: "Dom Min",
        role: "Vice President",
        bio: "I love math",
        photo: "/images/officers/priya.svg",
        email: "dom.min27@stu.siskorea.org",
      },
      {
        name: "Jion Choi",
        role: "Public Relations",
        bio: "On the gram",
        photo: "/images/officers/marcus.svg",
        email: "jion.choi29@stu.siskorea.org",
      },
      {
        name: "Anders Christensen",
        role: "Competition Team Captain",
        bio: "Da big ders",
        photo: "/images/officers/sophie.svg",
        email: "anders.christensen27@stu.siskorea.org",
      },
      {
        name: "Minjoo Kim",
        role: "Competition Team Captain",
        bio: "That's fire",
        photo: "/images/officers/marcus.svg",
        email: "minjoo.kim28@stu.siskorea.org",
      },
    ],
  },

  // Contact
  contact: {
    email: "jiwu.lee27@stu.siskorea.org",
    advisorName: "Mr. Warkentin, Mr. Sydow",
    advisorEmail: "warkentinn@siskorea.org, sydowa@siskorea.org",
    qrCodeImage: "/images/qr-code.svg",
    formSubjectPrefix: "[Math Club Inquiry]",
  },

  // Social links (set to "" or remove to hide)
  socials: {
    instagram: "https://instagram.com/sis.mualphatheta",
    youtube: "Coming Soon!",
  },

  // Footer
  footer: {
    blurb:
      "SIS Mu Alpha Theta — the best.",
  },

  // Accent color (just a label — actual colors are in globals.css)
  accentColor: "rose",
};

export type SiteConfig = typeof siteConfig;
