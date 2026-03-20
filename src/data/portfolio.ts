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
  companyDesc: string;
  color: string;
  points: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
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
  title: "Senior Web Application Developer & Frontend Architect",
  shortTitle: "Module Lead | Frontend – AI & Migration Specialist",
  tagline: "Senior Web Application Developer | Agile Methodologies | Front-End Expertise",
  summary:
    "Experienced Senior Frontend Engineer skilled in full-stack development, API integration, and Agile methodologies. Proficient in Angular, ReactJS, Next.js, JavaScript, TypeScript, and modern DevOps practices. Expert in building scalable, high-performance web applications with a focus on UI/UX optimization, SEO, and cloud solutions.",
  experience: "6+",
  location: "India",
  email: "prashantsinghmangat@gmail.com",
  github: "https://github.com/prashantsinghmangat",
  linkedin: "https://www.linkedin.com/in/prashantsinghmangat/",
  portfolio: "https://prashantsinghmangat.netlify.app",
  npm: "https://www.npmjs.com/package/tracebug-sdk",
  stats: [
    { label: "Years Exp", value: 6, suffix: "+" },
    { label: "Features Shipped", value: 50, suffix: "+" },
    { label: "Projects Built", value: 35, suffix: "+" },
  ],
  typingStrings: [
    "High-Performance UIs",
    "Scalable React Architectures",
    "AI-Powered Automations",
    "Enterprise Web Platforms",
    "Angular → React Migrations",
    "Full Stack Solutions",
  ],
  floatingTechs: ["React", "Next.js", "Angular", "TypeScript", "AI Tools"],
} as const;

export const skills: Skill[] = [
  { name: "React", icon: "⚛️", years: "5+", level: 95, category: "frontend" },
  { name: "Angular", icon: "🅰️", years: "6+", level: 92, category: "frontend" },
  { name: "Next.js", icon: "▲", years: "4+", level: 90, category: "frontend" },
  { name: "TypeScript", icon: "🔷", years: "5+", level: 93, category: "frontend" },
  { name: "JavaScript", icon: "🟡", years: "6+", level: 95, category: "frontend" },
  { name: "HTML / CSS", icon: "🎨", years: "6+", level: 95, category: "frontend" },
  { name: "SSR", icon: "🖥️", years: "3+", level: 88, category: "frontend" },
  { name: "Figma / UI-UX", icon: "🖌️", years: "4+", level: 82, category: "frontend" },
  { name: "IONIC / Cordova", icon: "📱", years: "3+", level: 78, category: "frontend" },
  { name: "React Native", icon: "📲", years: "2+", level: 75, category: "frontend" },
  { name: "REST APIs", icon: "🔗", years: "6+", level: 92, category: "backend" },
  { name: "Node.js", icon: "🟢", years: "4+", level: 82, category: "backend" },
  { name: "Java", icon: "☕", years: "3+", level: 72, category: "backend" },
  { name: "WordPress", icon: "🌐", years: "3+", level: 75, category: "backend" },
  { name: "Git", icon: "📦", years: "6+", level: 95, category: "tools" },
  { name: "Webpack", icon: "📦", years: "4+", level: 85, category: "tools" },
  { name: "Jenkins / CI-CD", icon: "🔄", years: "3+", level: 80, category: "tools" },
  { name: "AI Automation", icon: "🤖", years: "2+", level: 85, category: "tools" },
  { name: "SEO Optimization", icon: "🔍", years: "3+", level: 82, category: "tools" },
  { name: "Postman", icon: "📬", years: "5+", level: 88, category: "tools" },
  { name: "Agile / Scrum", icon: "🏃", years: "5+", level: 90, category: "tools" },
];

export const experiences: Experience[] = [
  {
    period: "Aug 2025 — Present",
    role: "Module Lead | Frontend – AI & Migration Specialist",
    company: "Taazaa Inc.",
    companyDesc:
      "Taazaa is your single source for technology solutions — from AI to consulting, design, engineering, systems integration, and support.",
    color: "#7c6cfc",
    points: [
      "Led enterprise-level AngularJS → React migration ensuring full UI and business logic parity without production disruption.",
      "Upgraded legacy Angular applications to modern Angular architecture using TypeScript and modular component design.",
      "Built centralized React UI component library (buttons, tables, forms, dialogs, cards) for scalable shell architecture.",
      "Automated route migration, parity validation, and testing workflows using AI tools (Claude Code, GPT), reducing development effort by 40%.",
      "Implemented AI-powered PR review workflows to detect logic issues, security gaps, and code readability improvements.",
      "Standardized frontend architecture and development practices for scalable modernization initiatives.",
    ],
    tags: ["AngularJS", "React", "TypeScript", "AI Automation", "SSR", "CI/CD", ".Net"],
  },
  {
    period: "Apr 2024 — Aug 2025",
    role: "Senior Frontend Developer",
    company: "Moglix (Moglix.com, Credlix.com)",
    companyDesc:
      "Moglix is an Indian e-commerce company headquartered in Singapore, established in 2015. Operates in India, USA, UK, and Europe.",
    color: "#22d3ee",
    points: [
      "Developed and optimized Credlix.com using ReactJS and Next.js, improving SEO rankings by 20% and page load speed by 15%.",
      "Led Tendershark.com end-to-end with Angular SSR, enhancing UI and increasing traffic by 45%.",
      "Revamped Moglix.com L2/L3 pages using Angular and TypeScript, integrating responsive widgets with RESTful APIs for a 30% UX improvement.",
      "Built and maintained Shield Finance, Credlix Exim, and domestic platforms.",
      "Contributed to DigiMRO using ReactJS and NextJS.",
      "Awarded Top Performance Pratibha Award in tech team for Q2.",
    ],
    tags: ["Angular SSR", "React", "Next.js", "Webpack", "REST APIs", "Jenkins", "Agile", "SEO"],
  },
  {
    period: "Oct 2019 — Apr 2024",
    role: "Full-Stack Developer",
    company: "E-Health Research Center, IIIT-B",
    companyDesc:
      "The E-Health Research Center @ IIIT-B is an interdisciplinary research center spanning all areas of research to meet healthcare needs.",
    color: "#4ade80",
    points: [
      "Developed the frontend of Let's Talk Life (NIMHANS) using Angular 17 and Figma, enhancing accessibility by 40% with responsive design.",
      "Created the Tele-MANAS frontend (government initiative) with Angular 16, supporting 100,000+ users.",
      "Integrated ABHA card into e-Manas (Karnataka Govt.), ensuring secure authentication for 10,000+ records.",
      "Contributed to MHMS, MOSIP, and COVID-19 Mental Health projects using Angular, backend, and Android.",
    ],
    tags: ["Angular", "TypeScript", "Figma", "Android", "IONIC", "REST APIs", "Java"],
  },
];

export const education: Education[] = [
  {
    degree: "B.Tech. in Computer Science & Engineering",
    institution: "Lovely Professional University",
    period: "Aug 2016 – Aug 2020",
    location: "Phagwara, Punjab",
  },
];

export const certifications: Certification[] = [
  { name: "ReactJS and Angular", issuer: "Udemy", year: "2024" },
  { name: "Ethical Hacking", issuer: "TechDefence", year: "2021" },
  { name: "Ethical Hacking", issuer: "Lucideus", year: "2021" },
  { name: "Digital Marketing", issuer: "Internshala", year: "2020" },
  { name: "C++, HTML, CSS", issuer: "SoloLearn", year: "2019" },
];

export const projects: Project[] = [
  {
    title: "Indexa MCP",
    description:
      "Local-first MCP server-based code intelligence engine that integrates with AI tools to deliver structured, dependency-aware context using hybrid search (semantic + keyword + graph), reducing LLM token usage by 50–70% and improving developer productivity.",
    emoji: "🧠",
    gradient: "from-violet-900 to-fuchsia-900",
    stack: ["TypeScript", "MCP", "AI/ML", "Graph Search"],
    github: "https://github.com/prashantsinghmangat/Indexa",
    live: "https://github.com/prashantsinghmangat/Indexa",
    featured: true,
  },
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
    title: "Safeguard Properties",
    description:
      "USA's largest field services company for mortgage & real estate — built enterprise dashboards, property inspection workflows, and vendor management modules.",
    emoji: "🏠",
    gradient: "from-blue-900 to-indigo-900",
    stack: ["React", "TypeScript", ".Net", "REST API"],
    live: "https://safeguardproperties.com/",
    category: "Enterprise SaaS",
  },
  {
    title: "TP Dispatch",
    description:
      "Transit logistics & dispatch management platform — developed real-time route optimization, driver scheduling, and fleet tracking interfaces.",
    emoji: "🚚",
    gradient: "from-cyan-900 to-sky-900",
    stack: ["React", "TypeScript", "Node.js", "REST API"],
    live: "https://www.transit-partners.co/",
    category: "Logistics",
  },
  {
    title: "Moglix",
    description:
      "India's largest B2B industrial eCommerce platform — revamped L2/L3 pages with Angular, integrated responsive widgets with RESTful APIs for 30% UX improvement.",
    emoji: "🏭",
    gradient: "from-slate-900 to-zinc-900",
    stack: ["Angular", "TypeScript", "REST APIs", "Webpack"],
    live: "https://www.moglix.com/",
    category: "eCommerce",
  },
  {
    title: "TenderShark",
    description:
      "Enterprise tender & procurement platform — led end-to-end with Angular SSR, enhanced UI and increased traffic by 45%.",
    emoji: "🦈",
    gradient: "from-blue-900 to-cyan-900",
    stack: ["Angular SSR", "TypeScript", "REST API", "Jenkins"],
    live: "https://www.tendershark.com/",
    category: "Enterprise SaaS",
  },
  {
    title: "Credlix",
    description:
      "Supply chain finance platform by Moglix — optimized with ReactJS and Next.js, improving SEO rankings by 20% and page load speed by 15%.",
    emoji: "💳",
    gradient: "from-emerald-900 to-teal-900",
    stack: ["React", "Next.js", "TypeScript", "SSR"],
    live: "https://www.credlix.com/",
    category: "FinTech",
  },
  {
    title: "LetsTalk Life Forum",
    description:
      "NIMHANS mental health platform — developed frontend with Angular 17 and Figma, enhancing accessibility by 40% with responsive design.",
    emoji: "💬",
    gradient: "from-rose-900 to-pink-900",
    stack: ["Angular 17", "TypeScript", "Figma", "REST API"],
    live: "https://www.letstalklifeforum.in/",
    category: "Healthcare",
  },
  {
    title: "e-MANAS Karnataka",
    description:
      "Karnataka govt. mental health portal — integrated ABHA card ensuring secure authentication for 10,000+ patient records.",
    emoji: "🧠",
    gradient: "from-orange-900 to-red-900",
    stack: ["Angular", "TypeScript", "REST API", "Node.js"],
    live: "https://e-manas.karnataka.gov.in/#/",
    category: "Govt. Portal",
  },
  {
    title: "Tele-MANAS",
    description:
      "Government telemedicine platform (MOHFW) — built frontend with Angular 16 enabling mental health teleconsultations for 100,000+ users across India.",
    emoji: "🏥",
    gradient: "from-green-900 to-teal-900",
    stack: ["Angular 16", "TypeScript", "REST API", "WebRTC"],
    live: "https://telemanas.mohfw.gov.in/home",
    category: "Govt. / Healthcare",
  },
  {
    title: "Yatharth Eye Care",
    description:
      "Eye care hospital website with appointment booking, doctor profiles, treatment info, and patient management system.",
    emoji: "👁️",
    gradient: "from-indigo-900 to-violet-900",
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    live: "https://www.yathartheyecare.com/",
    category: "Healthcare",
  },
  {
    title: "The Paperless",
    description:
      "Digital document management solution — smart workflows, e-signatures, and secure file storage for paperless organizations.",
    emoji: "📄",
    gradient: "from-yellow-900 to-amber-900",
    stack: ["React", "TypeScript", "Node.js", "AWS"],
    live: "https://the-paperless.netlify.app/",
    category: "Productivity",
  },
];

export const terminalCommands: Record<string, TerminalCommand> = {
  whoami: {
    lines: [
      { text: "→ Prashant Singh", type: "header" },
      { text: "", type: "normal" },
      { text: "  Module Lead | Frontend – AI & Migration Specialist", type: "info" },
      { text: "  India · 6+ years · Open to Senior / Lead / Architect roles", type: "normal" },
      { text: "", type: "normal" },
      { text: "  I build scalable frontend systems — React, Angular, Next.js.", type: "success" },
      { text: "  I automate workflows with AI tools — 40% dev effort saved.", type: "success" },
      { text: "  I migrate legacy apps — AngularJS → React at enterprise scale.", type: "success" },
      { text: "  I own the architecture and ship production-grade code.", type: "success" },
    ],
  },
  "hire-me": {
    lines: [
      { text: "→ Why Hire Prashant?", type: "header" },
      { text: "", type: "normal" },
      { text: "  ① I ship production-grade systems across enterprise scale", type: "success" },
      { text: "     Moglix · Tendershark · Tele-MANAS (100K+ users) · e-Manas", type: "normal" },
      { text: "", type: "normal" },
      { text: "  ② I drive measurable impact with every release", type: "success" },
      { text: "     SEO +20% · Traffic +45% · UX +30% · Dev effort -40% via AI", type: "normal" },
      { text: "", type: "normal" },
      { text: "  ③ I lead teams and modernize legacy systems", type: "success" },
      { text: "     AngularJS → React migrations · centralized component libraries", type: "normal" },
      { text: "", type: "normal" },
      { text: "  ④ I bring AI to real development workflows", type: "success" },
      { text: "     Claude Code · GPT · AI-powered PR reviews · automated testing", type: "normal" },
      { text: "", type: "normal" },
      { text: "  ✉  prashantsinghmangat@gmail.com", type: "warn" },
      { text: "  💼 linkedin.com/in/prashantsinghmangat", type: "warn" },
    ],
  },
  "open github": {
    lines: [
      { text: "→ Opening GitHub...", type: "info" },
      { text: "  🐙 github.com/prashantsinghmangat", type: "success" },
      { text: "  (link opened in new tab)", type: "normal" },
    ],
  },
  "open linkedin": {
    lines: [
      { text: "→ Opening LinkedIn...", type: "info" },
      { text: "  💼 linkedin.com/in/prashantsinghmangat", type: "success" },
      { text: "  (link opened in new tab)", type: "normal" },
    ],
  },
  "open npm": {
    lines: [
      { text: "→ Opening npm...", type: "info" },
      { text: "  📦 npmjs.com/package/tracebug-sdk", type: "success" },
      { text: "  (link opened in new tab)", type: "normal" },
    ],
  },
  "theme default": {
    lines: [{ text: "✓ Theme set to Default (purple)", type: "success" }],
  },
  "theme cyberpunk": {
    lines: [{ text: "✓ Theme set to Cyberpunk (neon)", type: "success" }],
  },
  "theme minimal": {
    lines: [{ text: "✓ Theme set to Minimal (light)", type: "success" }],
  },
  "theme matrix": {
    lines: [{ text: "✓ Theme set to Matrix (green)", type: "success" }],
  },
  "goto hero": {
    lines: [{ text: "✓ Navigating to Hero section...", type: "success" }],
  },
  "goto about": {
    lines: [{ text: "✓ Navigating to About section...", type: "success" }],
  },
  "goto projects": {
    lines: [{ text: "✓ Navigating to Projects section...", type: "success" }],
  },
  "goto skills": {
    lines: [{ text: "✓ Navigating to Skills section...", type: "success" }],
  },
  "goto experience": {
    lines: [{ text: "✓ Navigating to Experience section...", type: "success" }],
  },
  "goto contact": {
    lines: [{ text: "✓ Navigating to Contact section...", type: "success" }],
  },
  about: {
    lines: [
      { text: "→ About Prashant Singh", type: "header" },
      { text: "", type: "normal" },
      { text: "  Role:     Module Lead | Frontend – AI & Migration Specialist", type: "info" },
      { text: "  Exp:      6+ years building enterprise web & mobile platforms", type: "normal" },
      { text: "  Stack:    React · Angular · Next.js · TypeScript · IONIC · Android", type: "info" },
      { text: "  AI:       Claude Code · GPT · automated PR reviews & migrations", type: "warn" },
      { text: "  Edu:      B.Tech CSE · Lovely Professional University (2020)", type: "normal" },
      { text: "  Repos:    35 public repositories on GitHub", type: "normal" },
      { text: "  Award:    Top Performance Pratibha Award Q2 @ Moglix", type: "warn" },
      { text: "  Status:   ✓ Open to Senior / Lead / Architect roles", type: "success" },
    ],
  },
  projects: {
    lines: [
      { text: "→ Projects", type: "header" },
      { text: "", type: "normal" },
      { text: "  🧠 Indexa MCP — AI code intelligence with hybrid search", type: "info" },
      { text: "     TypeScript · MCP · AI/ML · Graph Search", type: "normal" },
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
      { text: "  🏠 Safeguard Properties — US mortgage field services platform", type: "info" },
      { text: "  🚚 TP Dispatch — Transit logistics & fleet dispatch", type: "info" },
      { text: "  🏭 Moglix — B2B industrial eCommerce platform", type: "info" },
      { text: "  🦈 TenderShark — Enterprise tender management platform", type: "info" },
      { text: "  💳 Credlix — Supply chain finance platform", type: "info" },
      { text: "  💬 LetsTalk Life Forum — NIMHANS mental health platform", type: "info" },
      { text: "  🧠 e-MANAS Karnataka — Karnataka Govt. mental health portal", type: "info" },
      { text: "  🏥 Tele-MANAS — Govt. mental health telemedicine (100K+ users)", type: "info" },
      { text: "  👁️ Yatharth Eye Care — Hospital chain website & booking", type: "info" },
      { text: "  📄 The Paperless — Digital document management solution", type: "info" },
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
      { text: "  Aug 2025 — Now   Module Lead | AI & Migration @ Taazaa Inc.", type: "info" },
      { text: "                   AngularJS→React migration · AI workflows · -40% dev effort", type: "normal" },
      { text: "", type: "normal" },
      { text: "  Apr 2024 — Aug 2025  Senior Frontend Dev @ Moglix", type: "warn" },
      { text: "                       Credlix · Tendershark · Moglix L2/L3 · Pratibha Award", type: "normal" },
      { text: "", type: "normal" },
      { text: "  Oct 2019 — Apr 2024  Full-Stack Dev @ E-Health Research Center, IIIT-B", type: "success" },
      { text: "                       Tele-MANAS · e-Manas · LetsTalk Life · MOSIP", type: "normal" },
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
      { text: "  about              — Who is Prashant?", type: "info" },
      { text: "  whoami             — Quick identity card", type: "info" },
      { text: "  hire-me            — Why you should hire him", type: "info" },
      { text: "  projects           — View all projects", type: "info" },
      { text: "  skills             — Skill levels & proficiency", type: "info" },
      { text: "  experience         — Career timeline", type: "info" },
      { text: "  contact            — Get in touch", type: "info" },
      { text: "", type: "normal" },
      { text: "  open github        — Open GitHub profile", type: "warn" },
      { text: "  open linkedin      — Open LinkedIn profile", type: "warn" },
      { text: "  open npm           — Open npm package", type: "warn" },
      { text: "", type: "normal" },
      { text: "  goto <section>     — Scroll to section", type: "success" },
      { text: "    sections: hero · about · projects · skills · experience · contact", type: "normal" },
      { text: "", type: "normal" },
      { text: "  theme <name>       — Switch theme", type: "success" },
      { text: "    themes: default · cyberpunk · minimal · matrix", type: "normal" },
      { text: "", type: "normal" },
      { text: "  clear              — Clear terminal", type: "info" },
      { text: "  help               — Show this menu", type: "info" },
      { text: "", type: "normal" },
      { text: "  Tip: Press Tab to autocomplete commands", type: "normal" },
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
    name: "Indexa",
    description: "Local-first MCP server code intelligence engine with hybrid search — reduces LLM token usage by 50–70%",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 12,
    forks: 3,
    url: "https://github.com/prashantsinghmangat/Indexa",
  },
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
