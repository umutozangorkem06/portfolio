export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  emoji: string;
  title: string;
  featured: boolean;
  summary: string;
  stack: readonly string[];
  image: string;
  links: readonly ProjectLink[];
};

export const projects: readonly Project[] = [
  {
    id: "meetingbrief",
    emoji: "📋",
    title: "MeetingBrief",
    featured: true,
    summary:
      "AI-powered meeting-briefing SaaS. Analyzes your Google Calendar and auto-generates briefing reports on attendees and agenda. My own product — past the MVP stage, with an April 2026 feasibility report. Newspaper-style 'Editorial' theme.",
    stack: ["Next.js 14", "Supabase", "Clerk", "Stripe"],
    image: "/projects/meetingbrief.png",
    links: [],
  },
  {
    id: "hychef",
    emoji: "🍽️",
    title: "HyChef",
    featured: true,
    summary:
      "Three-tier restaurant / food-safety SaaS. The mobile app handles weekly food diaries, temperature checks, and PDF reporting against the UK's SFBB (Safer Food, Better Business) and HACCP standards; the web side is the dashboard; the backend serves the API.",
    stack: [
      "Laravel 12 / PHP 8.2",
      "Sanctum",
      "Stripe Cashier",
      "Next.js 15",
      "React 19",
      "shadcn/ui",
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Hilt",
    ],
    image: "/projects/hychef.png",
    links: [],
  },
  {
    id: "anidate",
    emoji: "🎴",
    title: "AniDate",
    featured: true,
    summary:
      "Anime-themed dating / matching mobile app. Tinder-style card swiping, an anime catalogue from the Jikan API, and a quiz bank to drive matches.",
    stack: ["React Native", "Expo", "Firebase/Firestore", "TypeScript", "NativeWind", "Zustand"],
    image: "/projects/anidate.png",
    links: [],
  },
  {
    id: "ironpilgrimage",
    emoji: "🚂",
    title: "Iron Pilgrimage",
    featured: false,
    summary:
      "A top-down roguelike autoshooter where you pilot a growing war-train instead of a character. Builds form through a wagon-composition system: Attack Wagons fire automatically, Buff Wagons attach event-driven listeners, and specific buff pairs trigger hidden Resonance mutations that replace their listeners with a single, stronger combined effect. The core twist is physical growth as the risk model — every wagon raises damage but extends your hitbox and turning radius, so stronger equals less control. Pre-demo, Unity, three-person indie team targeting a Sector 0 → Sector 1 vertical slice for Steam.",
    stack: ["Unity", "C#"],
    image: "/projects/ironpilgrimage.png",
    links: [],
  },
  // Reserved (deliberately excluded from the public portfolio; keep for later):
  // {
  //   id: "indirici", emoji: "🎵", title: "Indirici (Spotify → MP3)", featured: false,
  //   summary: "A batch Spotify-to-MP3 downloader (co-built with Eray Karakaşlı). Reads an exportify.net CSV and converts tracks to MP3 via yt-dlp + ffmpeg. Ships as a PyInstaller-compiled .exe.",
  //   stack: ["Python", "Tkinter", "yt-dlp", "ffmpeg", "PyInstaller"], image: "/projects/indirici.png", links: [],
  // },
  // {
  //   id: "altamira", emoji: "🎨", title: "Altamira (Stitch Mockups)", featured: false,
  //   summary: "UI mockup collection for the 'Altamira' art platform — 7 screens produced with Google Stitch. 'Editorial Noir & The Digital Gallery' design system documented. Not yet coded.",
  //   stack: ["Design", "Google Stitch", "DESIGN.md"], image: "/projects/altamira.png", links: [],
  // },
  // {
  //   id: "rustbound", emoji: "🚂", title: "RustBound", featured: false,
  //   summary: "Promo / landing page for 'Rust Bound — A War-Train Roguelike'. Pure HTML+CSS+JS with a canvas particle background and multiple sections (hero, pillars, locomotives, wagons, enemies) in a steampunk aesthetic.",
  //   stack: ["HTML", "CSS", "Vanilla JS", "Canvas"], image: "/projects/rustbound.png", links: [],
  // },
];
