// ============================================================
// Edit everything in this file — the rest of the app reads from here.
// ============================================================

export const profile = {
  name: "Mathew Garzón",
  handle: "mattg",
  role: "Systems Engineering Student",
  location: "Bogotá, Colombia",
  bio: "Systems engineering student building full-stack tools — from React front ends to Spring Boot services. I like working with web development anc loud environments.",
  status: "online", // online | busy | offline
  email: "mgl08.personal@gmail.com",
  github: "https://github.com/toxychug",
  linkedin: "https://www.linkedin.com/in/mathew-garz%C3%B3n-808a65231/",
};

// Skills grouped like system resources. "load" is 0-100, roughly your
// comfort/experience level — tune these to taste.
export const skillGroups = [
  {
    label: "frontend",
    items: [
      { name: "React", load: 82 },
      { name: "JavaScript", load: 85 },
      { name: "Astro", load: 60 },
    ],
  },
  {
    label: "backend",
    items: [
      { name: "Java", load: 75 },
      { name: "Spring Boot", load: 70 },
      { name: "Python", load: 78 },
      { name: "Django", load: 70 },
      { name: "Go Lang", load: 50 },
    ],
  },
  {
    label: "core",
    items: [
      { name: "Data Structures", load: 72 },
      { name: "SQL / Databases", load: 68 },
    ],
  },
  {
    label: "Cloud Services",
    items: [
      { name: "AWS", load: 50 },
    ],
  },
];

// Each project renders as a row in a "process list". status: RUNNING (live)
// | BUILDING (in progress) | STOPPED (archived/offline)
export const projects = [
  {
    pid: "1001",
    name: "flowcrm-lite",
    description:
      "Lightweight CRM built to practice authentication flows, dashboards, and CRUD-heavy React UI.",
    status: "RUNNING",
    stack: ["React", "JavaScript"],
    url: "https://github.com/toxychug/FlowCRM-Lite",
    repo: "https://github.com/toxychug/FlowCRM-Lite",
  },
  {
    pid: "1002",
    name: "next-project",
    description: "Reserved slot — swap this for your next build.",
    status: "BUILDING",
    stack: ["React", "Go Lang"],
    url: null,
    repo: null,
  },
];

// Rendered like a commit log — order newest first.
export const timeline = [
  {
    hash: "e4ba045",
    date: "2026",
    title: "Full-Stack Developer",
    org: "The Dwelling Collection",
    detail: "Developing and giving maintenance to a CRM software, perfomring QA tests and providing technical support.",
  },
  {
    hash: "a3f9c2e",
    date: "2026",
    title: "Systems Engineering — in progress",
    org: "Universidad El Bosque",
    detail: "Coursework in software architecture, databases, and networks.",
  },
  {
    hash: "7d1b8a4",
    date: "2025",
    title: "Started FlowCRM-Lite",
    org: "Personal project",
    detail: "Designed and shipped a CRM UI end-to-end, deployed to GitHub Pages.",
  },
  {
    hash: "0e4f612",
    date: "2023",
    title: "Began systems engineering studies",
    org: "University El Bosque",
    detail: "Foundations in programming, algorithms, and computer systems.",
  },
];
