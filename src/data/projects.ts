export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  id: string;
  title: string;
  featured: boolean;
  summary: string;
  stack: readonly string[];
  links: readonly ProjectLink[];
};

export const projects: readonly Project[] = [
  {
    id: "meetingbrief",
    title: "MeetingBrief",
    featured: true,
    summary:
      "AI-powered meeting-briefing SaaS. Connects to Google Calendar and generates briefing reports on attendees and agenda ahead of each meeting. My own product, now past the MVP stage.",
    stack: ["Next.js 14", "Supabase", "Clerk", "Stripe"],
    links: [],
  },
  {
    id: "hychef",
    title: "HyChef",
    featured: true,
    summary:
      "Three-tier food-safety SaaS for UK restaurants. A native Android app handles weekly food diaries, temperature checks, and PDF reporting against SFBB (Safer Food, Better Business) and HACCP standards, backed by a Laravel API and a Next.js dashboard.",
    stack: [
      "Laravel 12",
      "PHP 8.2",
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
    links: [],
  },
  {
    id: "nagomi",
    title: "Nagomi",
    featured: true,
    summary:
      "Anime-themed matching app, live on Google Play. Tinder-style card swiping, an anime catalogue powered by the Jikan API, and a quiz bank that drives matches.",
    stack: ["React Native", "Expo", "TypeScript", "Firebase / Firestore", "NativeWind", "Zustand"],
    links: [
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.anidate.app",
      },
    ],
  },
  {
    id: "ironpilgrim",
    title: "Iron Pilgrim",
    featured: true,
    summary:
      "A top-down roguelike autoshooter where you pilot a growing war-train instead of a character. Builds come from wagon composition: attack wagons fire automatically, buff wagons react to in-game events, and hidden buff pairings trigger Resonance mutations. Every wagon adds power but also lengthens your hitbox and turning radius, so strength costs control. Built in Unity by a three-person indie team.",
    stack: ["Unity", "C#"],
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/4960060/Iron_Pilgrim/" },
    ],
  },
  // Reserved (deliberately excluded from the public portfolio; keep for later):
  // {
  //   id: "indirici", title: "Indirici (Spotify → MP3)", featured: false,
  //   summary: "A batch Spotify-to-MP3 downloader (co-built with Eray Karakaşlı). Reads an exportify.net CSV and converts tracks to MP3 via yt-dlp + ffmpeg. Ships as a PyInstaller-compiled .exe.",
  //   stack: ["Python", "Tkinter", "yt-dlp", "ffmpeg", "PyInstaller"], links: [],
  // },
  // {
  //   id: "altamira", title: "Altamira (Stitch Mockups)", featured: false,
  //   summary: "UI mockup collection for the 'Altamira' art platform — 7 screens produced with Google Stitch. 'Editorial Noir & The Digital Gallery' design system documented. Not yet coded.",
  //   stack: ["Design", "Google Stitch", "DESIGN.md"], links: [],
  // },
  // {
  //   id: "rustbound", title: "RustBound", featured: false,
  //   summary: "Promo / landing page for 'Rust Bound — A War-Train Roguelike'. Pure HTML+CSS+JS with a canvas particle background and multiple sections (hero, pillars, locomotives, wagons, enemies) in a steampunk aesthetic.",
  //   stack: ["HTML", "CSS", "Vanilla JS", "Canvas"], links: [],
  // },
];
