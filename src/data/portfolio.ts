export interface Skill {
  name: string;
  icon: string;
  years: string;
  level: number;
  category: "frontend" | "backend" | "tools";
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  color: string;
  points: string[];
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  stack: string[];
  github: string;
  live: string;
  featured: boolean;
}

export interface IndustryProject {
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  stack: string[];
  live: string;
  category: string;
}

export interface TerminalLine {
  text: string;
  type: "success" | "info" | "warn" | "normal" | "error" | "header";
}

export interface TerminalCommand {
  lines: TerminalLine[];
}

export const personalInfo = {
  name: "Prashant Singh",
  title: "Senior Frontend Architect & Full Stack Developer",
  shortTitle: "Senior Frontend Architect",
  experience: "5+",
  location: "India",
  email: "prashantsinghmangat@gmail.com",
  github: "https://github.com/prashantsinghmangat",
  linkedin: "https://www.linkedin.com/in/prashantsinghmangat/",
  portfolio: "https://prashantsinghmangat.netlify.app",
  npm: "https://www.npmjs.com/package/tracebug-sdk",
  stats: [
    { label: "Years Exp", value: 5, suffix: "+" },
    { label: "Features Shipped", value: 50, suffix: "+" },
    { label: "Projects Built", value: 35, suffix: "+" },
  ],
  typingStrings: [
    "High-Performance UIs",
    "Scalable React Architectures",
    "Full Stack Solutions",
    "Enterprise Web Platforms",
    "Developer Experiences",
  ],
  floatingTechs: ["React", "Next.js", "Angular", "TypeScript", "Node.js"],
} as const;

export const skills: Skill[] = [
  { name: "React", icon: "⚛️", years: "5+", level: 95, category: "frontend" },
  { name: "Next.js", icon: "▲", years: "4+", level: 92, category: "frontend" },
  { name: "Angular", icon: "🅰️", years: "4+", level: 88, category: "frontend" },
  { name: "TypeScript", icon: "🔷", years: "4+", level: 93, category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", years: "3+", level: 90, category: "frontend" },
  { name: "Framer Motion", icon: "✨", years: "3+", level: 85, category: "frontend" },
  { name: "Node.js", icon: "🟢", years: "4+", level: 85, category: "backend" },
  { name: "Express.js", icon: "🔧", years: "4+", level: 83, category: "backend" },
  { name: "GraphQL", icon: "🔺", years: "3+", level: 78, category: "backend" },
  { name: "REST APIs", icon: "🔗", years: "5+", level: 90, category: "backend" },
  { name: "Docker", icon: "🐳", years: "3+", level: 80, category: "tools" },
  { name: "Git", icon: "📦", years: "5+", level: 95, category: "tools" },
  { name: "CI/CD", icon: "🔄", years: "3+", level: 82, category: "tools" },
  { name: "Vite", icon: "⚡", years: "3+", level: 88, category: "tools" },
];

export const experiences: Experience[] = [
  {
    period: "2022 — Present",
    role: "Senior Frontend Engineer",
    company: "Taazaa Inc.",
    color: "#7c6cfc",
    points: [
      "Led architecture of enterprise-scale React platforms",
      "Spearheaded complete AngularJS → React migration (bundle -35%)",
      "Improved LCP from 4.2s → 1.8s, CLS from 0.3 → 0.05",
      "Built design system with 60+ components for 10+ teams",
      "Mentored 4 junior developers",
    ],
    tags: ["React", "Next.js", "TypeScript", "Performance", "Design Systems"],
  },
  {
    period: "2020 — 2022",
    role: "Frontend Developer",
    company: "Product Company",
    color: "#22d3ee",
    points: [
      "Built real-time data visualization dashboards (D3.js, Chart.js)",
      "Developed reusable Angular component library",
      "Integrated REST & GraphQL APIs",
    ],
    tags: ["Angular", "RxJS", "GraphQL", "D3.js", "SASS"],
  },
  {
    period: "2019 — 2020",
    role: "Junior Frontend Developer",
    company: "Tech Startup",
    color: "#4ade80",
    points: [
      "Delivered 15+ responsive React interfaces",
      "Collaborated with designers for pixel-perfect output",
    ],
    tags: ["React", "JavaScript", "CSS3", "Webpack"],
  },
];

export const projects: Project[] = [
  {
    title: "TraceBug AI",
    description:
      "AI-powered bug tracking and debugging platform. Automatically captures, classifies, and resolves bugs with intelligent root cause analysis for modern web applications.",
    emoji: "🐛",
    gradient: "from-purple-900 to-indigo-900",
    stack: ["TypeScript", "React", "AI/ML", "Node.js"],
    github: "https://github.com/prashantsinghmangat/tracebug-ai",
    live: "https://tracebug.netlify.app/",
    featured: true,
  },
  {
    title: "NexGenGram",
    description:
      "A modern Instagram clone with stories, posts, likes, comments, and user authentication. Full social media experience with real-time interactions and responsive design.",
    emoji: "📸",
    gradient: "from-pink-900 to-rose-900",
    stack: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    github: "https://github.com/prashantsinghmangat/nexgenGram-Instagram-Clone",
    live: "https://nexgengram.netlify.app/",
    featured: true,
  },
  {
    title: "Kanban Board",
    description:
      "A robust project management tool to visualize workflows and optimize team collaboration. Drag-and-drop task management with real-time updates and customizable boards.",
    emoji: "📋",
    gradient: "from-cyan-900 to-teal-900",
    stack: ["React", "TypeScript", "DnD Kit", "Zustand"],
    github: "https://github.com/prashantsinghmangat/Prashant-Kanban-Board",
    live: "https://prashant-kanban-board.netlify.app/",
    featured: true,
  },
  {
    title: "NexGenStocks",
    description:
      "Indian stock market tracker with real-time price updates, interactive charts, portfolio tracking, and market analysis for NSE/BSE listed stocks.",
    emoji: "📈",
    gradient: "from-emerald-900 to-green-900",
    stack: ["React", "TypeScript", "Chart.js", "REST API"],
    github: "https://github.com/prashantsinghmangat/NexGenStocks",
    live: "https://nexgenstocks.netlify.app/",
    featured: false,
  },
  {
    title: "NexGenMusic",
    description:
      "A modern, responsive music player with sleek UI, playlist management, audio visualizations, and seamless playback experience built with React.",
    emoji: "🎵",
    gradient: "from-violet-900 to-purple-900",
    stack: ["React", "TypeScript", "Tailwind CSS", "Web Audio API"],
    github: "https://github.com/prashantsinghmangat/NexGenMusic",
    live: "https://nexgenmusic.netlify.app/",
    featured: false,
  },
  {
    title: "AI Governor",
    description:
      "AI governance and compliance platform for monitoring, auditing, and managing AI model behavior with policy enforcement and risk assessment dashboards.",
    emoji: "🤖",
    gradient: "from-amber-900 to-orange-900",
    stack: ["TypeScript", "React", "Node.js", "AI/ML"],
    github: "https://github.com/prashantsinghmangat/AIGovernor",
    live: "#",
    featured: false,
  },
  {
    title: "NexGenTools",
    description:
      "A collection of developer and productivity tools including text utilities, converters, and code helpers — all in one fast, responsive web app.",
    emoji: "🛠️",
    gradient: "from-sky-900 to-blue-900",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/prashantsinghmangat/Nexgentools",
    live: "https://nexgentools.netlify.app/",
    featured: false,
  },
  {
    title: "MyEdu",
    description:
      "A modern e-learning platform with course management, video lectures, quizzes, and progress tracking for students and educators.",
    emoji: "🎓",
    gradient: "from-lime-900 to-green-900",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/prashantsinghmangat/myedu-final",
    live: "https://myedu-demo.netlify.app/",
    featured: false,
  },
];

export const industryProjects: IndustryProject[] = [
  {
    title: "TenderShark",
    description:
      "Enterprise tender & procurement management platform helping businesses discover, track, and bid on government and private tenders in real time.",
    emoji: "🦈",
    gradient: "from-blue-900 to-cyan-900",
    stack: ["React", "TypeScript", "Node.js", "REST API"],
    live: "https://www.tendershark.com/",
    category: "Enterprise SaaS",
  },
  {
    title: "LetsTalk Life Forum",
    description:
      "Mental health community platform offering peer support forums, expert articles, and anonymous discussions to promote emotional well-being.",
    emoji: "💬",
    gradient: "from-rose-900 to-pink-900",
    stack: ["React", "Node.js", "MongoDB", "Socket.io"],
    live: "https://www.letstalklifeforum.in/home",
    category: "Healthcare",
  },
  {
    title: "Tele-MANAS",
    description:
      "Government telemedicine platform by Ministry of Health & Family Welfare enabling mental health teleconsultations across India.",
    emoji: "🏥",
    gradient: "from-green-900 to-teal-900",
    stack: ["Angular", "TypeScript", "REST API", "WebRTC"],
    live: "https://telemanas.mohfw.gov.in/home",
    category: "Govt. / Healthcare",
  },
  {
    title: "The Paperless",
    description:
      "Digital document management solution enabling organizations to go paperless with smart workflows, e-signatures, and secure file storage.",
    emoji: "📄",
    gradient: "from-yellow-900 to-amber-900",
    stack: ["React", "TypeScript", "Node.js", "AWS"],
    live: "https://the-paperless.netlify.app/",
    category: "Productivity",
  },
  {
    title: "Yatharth Eye Care",
    description:
      "Healthcare website for a leading eye care hospital chain featuring appointment booking, doctor profiles, treatment info, and patient resources.",
    emoji: "👁️",
    gradient: "from-indigo-900 to-violet-900",
    stack: ["React", "TypeScript", "Tailwind CSS", "CMS"],
    live: "https://www.yathartheyecare.com/",
    category: "Healthcare",
  },
  {
    title: "e-MANAS Karnataka",
    description:
      "Karnataka government mental health digital platform providing assessment tools, resource directories, and access to mental health services.",
    emoji: "🧠",
    gradient: "from-orange-900 to-red-900",
    stack: ["Angular", "TypeScript", "REST API", "Node.js"],
    live: "https://e-manas.karnataka.gov.in/#/",
    category: "Govt. Portal",
  },
  {
    title: "Moglix",
    description:
      "India's largest B2B industrial eCommerce platform — contributed to procurement workflows, product listing engines, and supplier integrations.",
    emoji: "🏭",
    gradient: "from-slate-900 to-zinc-900",
    stack: ["React", "TypeScript", "Redux", "Node.js"],
    live: "https://www.moglix.com/",
    category: "eCommerce",
  },
];

export const terminalCommands: Record<string, TerminalCommand> = {
  about: {
    lines: [
      { text: "→ About Prashant Singh", type: "header" },
      { text: "", type: "normal" },
      { text: "  Role:     Senior Frontend Architect & Full Stack Developer", type: "info" },
      { text: "  Exp:      5+ years building enterprise web platforms", type: "normal" },
      { text: "  Stack:    React · Next.js · Angular · TypeScript · Node.js", type: "info" },
      { text: "  Special:  AngularJS → React migrations at scale", type: "warn" },
      { text: "  Repos:    35 public repositories on GitHub", type: "normal" },
      { text: "  Status:   ✓ Open to Senior Frontend opportunities", type: "success" },
    ],
  },
  projects: {
    lines: [
      { text: "→ Projects", type: "header" },
      { text: "", type: "normal" },
      { text: "  🐛 TraceBug AI — AI-powered bug tracking & debugging", type: "info" },
      { text: "     TypeScript · React · AI/ML · Node.js", type: "normal" },
      { text: "", type: "normal" },
      { text: "  📸 NexGenGram — Instagram clone with stories & real-time", type: "info" },
      { text: "     React · TypeScript · Tailwind CSS · Firebase", type: "normal" },
      { text: "", type: "normal" },
      { text: "  📋 Kanban Board — Project management & workflow tool", type: "info" },
      { text: "     React · TypeScript · DnD Kit · Zustand", type: "normal" },
      { text: "", type: "normal" },
      { text: "  📈 NexGenStocks — Indian stock market tracker", type: "info" },
      { text: "     React · TypeScript · Chart.js · REST API", type: "normal" },
      { text: "", type: "normal" },
      { text: "  🎵 NexGenMusic — Modern music player app", type: "info" },
      { text: "     React · TypeScript · Tailwind CSS · Web Audio API", type: "normal" },
      { text: "", type: "normal" },
      { text: "  🤖 AI Governor — AI governance & compliance platform", type: "info" },
      { text: "     TypeScript · React · Node.js · AI/ML", type: "normal" },
      { text: "", type: "normal" },
      { text: "  🛠️ NexGenTools — Developer & productivity tools suite", type: "info" },
      { text: "     React · TypeScript · Tailwind CSS · Vite", type: "normal" },
      { text: "", type: "normal" },
      { text: "  🎓 MyEdu — E-learning platform with courses & quizzes", type: "info" },
      { text: "     React · TypeScript · Node.js · MongoDB", type: "normal" },
      { text: "", type: "normal" },
      { text: "  ── Industry & Client Work ──", type: "warn" },
      { text: "", type: "normal" },
      { text: "  🦈 TenderShark — Enterprise tender management platform", type: "info" },
      { text: "  💬 LetsTalk Life Forum — Mental health community platform", type: "info" },
      { text: "  🏥 Tele-MANAS — Govt. mental health telemedicine (MOHFW)", type: "info" },
      { text: "  📄 The Paperless — Digital document management solution", type: "info" },
      { text: "  👁️ Yatharth Eye Care — Hospital chain website & booking", type: "info" },
      { text: "  🧠 e-MANAS Karnataka — Karnataka Govt. mental health portal", type: "info" },
      { text: "  🏭 Moglix — B2B industrial eCommerce platform", type: "info" },
    ],
  },
  skills: {
    lines: [
      { text: "→ Skills", type: "header" },
      { text: "", type: "normal" },
      { text: "  React        ████████████████████ 95%", type: "info" },
      { text: "  TypeScript   ███████████████████  93%", type: "info" },
      { text: "  Next.js      ██████████████████   92%", type: "info" },
      { text: "  Tailwind     ██████████████████   90%", type: "info" },
      { text: "  REST APIs    ██████████████████   90%", type: "info" },
      { text: "  Angular      █████████████████    88%", type: "warn" },
      { text: "  Vite         █████████████████    88%", type: "warn" },
      { text: "  Node.js      ████████████████     85%", type: "success" },
      { text: "  Express.js   ████████████████     83%", type: "success" },
      { text: "  CI/CD        ████████████████     82%", type: "success" },
      { text: "  Docker       ███████████████      80%", type: "normal" },
      { text: "  GraphQL      ██████████████       78%", type: "normal" },
    ],
  },
  experience: {
    lines: [
      { text: "→ Career Timeline", type: "header" },
      { text: "", type: "normal" },
      { text: "  2022 — Now   Senior Frontend Engineer @ Taazaa Inc.", type: "info" },
      { text: "               Led React architecture & AngularJS migration", type: "normal" },
      { text: "", type: "normal" },
      { text: "  2020 — 2022  Frontend Developer @ Product Company", type: "warn" },
      { text: "               Data visualization dashboards & Angular libs", type: "normal" },
      { text: "", type: "normal" },
      { text: "  2019 — 2020  Junior Frontend Developer @ Tech Startup", type: "success" },
      { text: "               15+ responsive React interfaces", type: "normal" },
    ],
  },
  contact: {
    lines: [
      { text: "→ Contact", type: "header" },
      { text: "", type: "normal" },
      { text: "  🐙 GitHub:    github.com/prashantsinghmangat", type: "info" },
      { text: "  💼 LinkedIn:  linkedin.com/in/prashantsinghmangat", type: "info" },
      { text: "  📦 npm:       npmjs.com/package/tracebug-sdk", type: "warn" },
      { text: "  ✉️  Email:     prashantsinghmangat@gmail.com", type: "success" },
    ],
  },
  help: {
    lines: [
      { text: "→ Available Commands", type: "header" },
      { text: "", type: "normal" },
      { text: "  about       — Who is Prashant?", type: "info" },
      { text: "  projects    — View all projects", type: "info" },
      { text: "  skills      — Skill levels & proficiency", type: "info" },
      { text: "  experience  — Career timeline", type: "info" },
      { text: "  contact     — Get in touch", type: "info" },
      { text: "  clear       — Clear terminal", type: "info" },
      { text: "  help        — Show this menu", type: "info" },
    ],
  },
};

export const githubStats = {
  contributions: 847,
  repositories: 35,
  stars: 156,
  prs: 38,
};

export const featuredRepos = [
  {
    name: "TraceBug-ai",
    description: "AI-powered bug tracking and debugging platform",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 48,
    forks: 12,
    url: "https://github.com/prashantsinghmangat/TraceBug-ai",
  },
  {
    name: "nexgenGram-Instagram-Clone",
    description: "Modern social media app with stories, posts & real-time features",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 31,
    forks: 8,
    url: "https://github.com/prashantsinghmangat/nexgenGram-Instagram-Clone",
  },
  {
    name: "Prashant-Kanban-Board",
    description: "Kanban board for workflow visualization & team collaboration",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 27,
    forks: 15,
    url: "https://github.com/prashantsinghmangat/Prashant-Kanban-Board",
  },
];
