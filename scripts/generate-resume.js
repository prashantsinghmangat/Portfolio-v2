// scripts/generate-resume.js
// Generates ATS-friendly Resume as DOCX and PDF
// Run: node scripts/generate-resume.js

const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
  HeadingLevel,
  UnderlineType,
  TabStopType,
  TabStopLeader,
} = require("docx");
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// ─── RESUME DATA ──────────────────────────────────────────────────────────────
const DATA = {
  name: "PRASHANT SINGH",
  title: "Senior Web Application Developer | Agile Methodologies | Front-End Expertise",
  contact: {
    email: "prashantsinghmangat@gmail.com",
    phone: "+91-9457182128 | +91-8360334018",
    location: "Meerut, India",
    portfolio: "prashantsinghmangat.netlify.app",
    linkedin: "linkedin.com/in/prashant-singh-mangat-03748314b",
    github: "github.com/prashantsinghmangat",
  },
  summary:
    "Experienced Senior Frontend Engineer skilled in full-stack development, API integration, and Agile methodologies. Proficient in Angular, ReactJS, Next.js, JavaScript, TypeScript, and modern DevOps practices. Expert in building scalable, high-performance web applications with a focus on UI/UX optimization, SEO, and cloud solutions.",
  skills: [
    "Angular", "ReactJS", "Next.js", "JavaScript", "TypeScript",
    "Server-Side Rendering (SSR)", "Webpack", "HTML", "CSS",
    "UI/UX Design", "Responsive Design", "RESTful APIs", "Figma",
    "WordPress", "Java", "Agile Methodologies", "SEO Optimization",
    "Android", "IONIC", "Cordova", "React Native", "GIT",
    "Jenkins", "Postman", "JSON", "AI & Automations",
  ],
  experience: [
    {
      role: "Module Lead | Frontend – AI & Migration Specialist",
      company: "Taazaa Inc.",
      location: "Noida, India",
      period: "08/2025 – Present",
      bullets: [
        "Led enterprise-level AngularJS to React migration ensuring full UI and business logic parity without production disruption.",
        "Upgraded legacy Angular applications to modern Angular architecture using TypeScript and modular component design.",
        "Built centralized React UI component library (buttons, tables, forms, dialogs, cards) for scalable shell architecture.",
        "Automated route migration, parity validation, and testing workflows using AI tools (Claude Code, GPT), reducing development effort by 40%.",
        "Implemented AI-powered PR review workflows to detect logic issues, security gaps, and code readability improvements.",
        "Standardized frontend architecture and development practices for scalable modernization initiatives.",
      ],
      tech: "AngularJS | Angular | ReactJS | TypeScript | AI Automation | SSR | CI/CD | .Net",
    },
    {
      role: "Senior Frontend Developer",
      company: "Moglix (Moglix.com, Credlix.com)",
      location: "Noida, India",
      period: "04/2024 – 08/2025",
      bullets: [
        "Developed and optimized Credlix.com using ReactJS and Next.js, improving SEO rankings by 20% and page load speed by 15%.",
        "Led Tendershark.com end-to-end with Angular SSR, enhancing UI and increasing traffic by 45%.",
        "Revamped Moglix.com L2/L3 pages using Angular and TypeScript, integrating responsive widgets with RESTful APIs for a 30% UX improvement.",
        "Built and maintained Shield Finance, Credlix Exim, and domestic platforms.",
        "Contributed to DigiMRO using ReactJS and Next.js.",
        "Awarded Top Performance Pratibha Award in tech team for Q2.",
      ],
      tech: "Angular SSR | ReactJS | Next.js | Webpack | REST APIs | Jenkins | Agile | Scrum | Git",
    },
    {
      role: "Full-Stack Developer (Angular, Android, IONIC, React Native, Figma)",
      company: "E-Health Research Center, IIIT Bangalore",
      location: "Bangalore, India",
      period: "10/2019 – 04/2024",
      bullets: [
        "Developed the frontend of Let's Talk Life (NIMHANS) using Angular 17 and Figma, enhancing accessibility by 40% with responsive design principles.",
        "Created the Tele-MANAS frontend (government initiative) with Angular 16, supporting 100,000+ users.",
        "Integrated the ABHA card into e-Manas (Karnataka Govt.), ensuring secure authentication for 10,000+ records.",
        "Contributed to projects including MHMS, MOSIP, and COVID-19 Mental Health using Angular, backend, and Android.",
      ],
      tech: "Angular | TypeScript | Android | IONIC | Cordova | React Native | Figma | REST APIs",
    },
  ],
  projects: [
    {
      name: "AI GitHub PR Reviewer",
      tech: "Next.js | Webhook | OpenAI",
      desc: "Reviews PRs automatically, leaves comments, and flags logic bugs, security issues, and poor readability. Functions as a virtual senior developer using OpenAI's code interpreter models.",
    },
    {
      name: "Personal Portfolio",
      tech: "React JS | Next.js | Framer Motion | Tailwind CSS",
      desc: "Built and deployed a portfolio website showcasing projects. Live: prashantsinghmangat.netlify.app",
    },
    {
      name: "NexGenTalk.com",
      tech: "WordPress",
      desc: "Created a tech blog focused on widgets, technology, and innovation.",
    },
    {
      name: "MyEduSync.com",
      tech: "Angular",
      desc: "Developed an Angular-based online tuition platform for students and job opportunities. Live: myedu-demo.netlify.app",
    },
    {
      name: "Defence Exam Android App",
      tech: "Android | Java",
      desc: "Developed an Android app to help candidates prepare for Indian Defence Exams with mock tests and real-time analysis.",
    },
  ],
  education: {
    degree: "B.Tech. in Computer Science & Engineering",
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    period: "08/2016 – 08/2020",
  },
  certifications: [
    "ReactJS and Angular – Udemy, 2024",
    "Ethical Hacking – TechDefence, 2021",
    "Ethical Hacking – Lucideus, 2021",
    "Digital Marketing – Internshala, 2020",
    "C++, HTML, CSS – SoloLearn, 2019",
  ],
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const FONT = "Calibri";
const COLOR_BLACK = "000000";
const COLOR_GRAY = "444444";
const SIZE_NAME = 28;      // 14pt
const SIZE_TITLE = 20;     // 10pt
const SIZE_CONTACT = 18;   // 9pt
const SIZE_SECTION = 22;   // 11pt
const SIZE_BODY = 20;      // 10pt
const SIZE_SMALL = 18;     // 9pt

function hr() {
  return new Paragraph({
    border: {
      bottom: { color: "000000", space: 1, value: BorderStyle.SINGLE, size: 6 },
    },
    spacing: { after: 80 },
  });
}

function sectionHeading(text) {
  return new Paragraph({
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: SIZE_SECTION,
        font: FONT,
        color: COLOR_BLACK,
      }),
    ],
    spacing: { before: 240, after: 80 },
    border: {
      bottom: { color: "000000", space: 1, value: BorderStyle.SINGLE, size: 4 },
    },
  });
}

function bullet(text) {
  return new Paragraph({
    children: [
      new TextRun({ text, size: SIZE_BODY, font: FONT, color: COLOR_BLACK }),
    ],
    bullet: { level: 0 },
    spacing: { after: 40 },
  });
}

// ─── DOCX GENERATION ──────────────────────────────────────────────────────────
async function generateDOCX() {
  const d = DATA;

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: FONT, size: SIZE_BODY, color: COLOR_BLACK },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: { top: 720, bottom: 720, left: 900, right: 900 }, // ~1in sides, 0.75in top/bottom
          },
        },
        children: [
          // ── NAME ──
          new Paragraph({
            children: [
              new TextRun({
                text: d.name,
                bold: true,
                size: SIZE_NAME,
                font: FONT,
                color: COLOR_BLACK,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 60 },
          }),

          // ── TITLE ──
          new Paragraph({
            children: [
              new TextRun({
                text: d.title,
                size: SIZE_TITLE,
                font: FONT,
                color: COLOR_GRAY,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 80 },
          }),

          // ── CONTACT LINE 1 ──
          new Paragraph({
            children: [
              new TextRun({ text: `${d.contact.email}  |  ${d.contact.phone}`, size: SIZE_CONTACT, font: FONT, color: COLOR_GRAY }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
          }),

          // ── CONTACT LINE 2 ──
          new Paragraph({
            children: [
              new TextRun({ text: `${d.contact.location}  |  ${d.contact.portfolio}`, size: SIZE_CONTACT, font: FONT, color: COLOR_GRAY }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 40 },
          }),

          // ── CONTACT LINE 3 ──
          new Paragraph({
            children: [
              new TextRun({ text: `${d.contact.linkedin}  |  ${d.contact.github}`, size: SIZE_CONTACT, font: FONT, color: COLOR_GRAY }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
          }),

          // ── PROFESSIONAL SUMMARY ──
          sectionHeading("Professional Summary"),
          new Paragraph({
            children: [new TextRun({ text: d.summary, size: SIZE_BODY, font: FONT, color: COLOR_BLACK })],
            spacing: { after: 80 },
            alignment: AlignmentType.JUSTIFIED,
          }),

          // ── SKILLS ──
          sectionHeading("Technical Skills"),
          new Paragraph({
            children: [
              new TextRun({ text: d.skills.join("  |  "), size: SIZE_BODY, font: FONT, color: COLOR_BLACK }),
            ],
            alignment: AlignmentType.JUSTIFIED,
            spacing: { after: 80 },
          }),

          // ── WORK EXPERIENCE ──
          sectionHeading("Work Experience"),

          ...d.experience.flatMap((exp) => [
            // Role + Period on same line
            new Paragraph({
              children: [
                new TextRun({ text: exp.role, bold: true, size: SIZE_BODY, font: FONT, color: COLOR_BLACK }),
                new TextRun({ text: `  |  ${exp.period}`, size: SIZE_BODY, font: FONT, color: COLOR_GRAY }),
              ],
              spacing: { before: 120, after: 20 },
            }),
            // Company + Location
            new Paragraph({
              children: [
                new TextRun({ text: `${exp.company}`, bold: true, italics: true, size: SIZE_SMALL, font: FONT, color: COLOR_GRAY }),
                new TextRun({ text: `  –  ${exp.location}`, italics: true, size: SIZE_SMALL, font: FONT, color: COLOR_GRAY }),
              ],
              spacing: { after: 60 },
            }),
            // Bullets
            ...exp.bullets.map(bullet),
            // Tech stack
            new Paragraph({
              children: [
                new TextRun({ text: "Technologies: ", bold: true, size: SIZE_SMALL, font: FONT, color: COLOR_BLACK }),
                new TextRun({ text: exp.tech, size: SIZE_SMALL, font: FONT, color: COLOR_GRAY }),
              ],
              spacing: { before: 40, after: 120 },
            }),
          ]),

          // ── PROJECTS ──
          sectionHeading("Personal Projects"),

          ...d.projects.flatMap((proj) => [
            new Paragraph({
              children: [
                new TextRun({ text: proj.name, bold: true, size: SIZE_BODY, font: FONT, color: COLOR_BLACK }),
                new TextRun({ text: `  |  ${proj.tech}`, size: SIZE_SMALL, font: FONT, color: COLOR_GRAY }),
              ],
              spacing: { before: 80, after: 20 },
            }),
            new Paragraph({
              children: [new TextRun({ text: proj.desc, size: SIZE_SMALL, font: FONT, color: COLOR_BLACK })],
              spacing: { after: 60 },
            }),
          ]),

          // ── EDUCATION ──
          sectionHeading("Education"),
          new Paragraph({
            children: [
              new TextRun({ text: d.education.degree, bold: true, size: SIZE_BODY, font: FONT, color: COLOR_BLACK }),
            ],
            spacing: { before: 80, after: 20 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: `${d.education.institution}, ${d.education.location}`, italics: true, size: SIZE_SMALL, font: FONT, color: COLOR_GRAY }),
              new TextRun({ text: `  |  ${d.education.period}`, size: SIZE_SMALL, font: FONT, color: COLOR_GRAY }),
            ],
            spacing: { after: 80 },
          }),

          // ── CERTIFICATIONS ──
          sectionHeading("Certifications"),
          ...d.certifications.map((cert) => bullet(cert)),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(__dirname, "../resume/Prashant_Singh_Resume.docx");
  fs.writeFileSync(outPath, buffer);
  console.log(`✅ DOCX saved: ${outPath}`);
}

// ─── PDF GENERATION ───────────────────────────────────────────────────────────
function generatePDF() {
  const d = DATA;
  const outPath = path.join(__dirname, "../resume/Prashant_Singh_Resume.pdf");
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 45, bottom: 45, left: 55, right: 55 },
    info: {
      Title: "Prashant Singh - Resume",
      Author: "Prashant Singh",
      Subject: "Senior Web Application Developer Resume",
    },
  });

  doc.pipe(fs.createWriteStream(outPath));

  const pageW = doc.page.width - 110; // usable width
  const LEFT = 55;
  let y = 45;

  // ── helpers ──
  const setY = (val) => { y = val; };
  const getY = () => doc.y;

  function drawHR(color = "#cccccc") {
    doc.moveTo(LEFT, doc.y + 4).lineTo(LEFT + pageW, doc.y + 4).strokeColor(color).lineWidth(0.5).stroke();
    doc.moveDown(0.4);
  }

  function sectionTitle(text) {
    doc.moveDown(0.6);
    doc.font("Helvetica-Bold").fontSize(10).fillColor("#000000").text(text.toUpperCase(), LEFT, doc.y);
    doc.moveDown(0.1);
    drawHR("#000000");
  }

  function bodyText(text, opts = {}) {
    doc.font("Helvetica").fontSize(9.5).fillColor("#000000").text(text, LEFT, doc.y, { width: pageW, align: "justify", ...opts });
  }

  function smallText(text, opts = {}) {
    doc.font("Helvetica").fontSize(8.5).fillColor("#444444").text(text, LEFT, doc.y, { width: pageW, ...opts });
  }

  function bulletText(text) {
    doc.font("Helvetica").fontSize(9.5).fillColor("#000000")
      .text(`\u2022  ${text}`, LEFT + 10, doc.y, { width: pageW - 10, align: "left" });
    doc.moveDown(0.15);
  }

  // ── NAME ──
  doc.font("Helvetica-Bold").fontSize(18).fillColor("#000000")
    .text(d.name, LEFT, y, { align: "center", width: pageW });
  doc.moveDown(0.2);

  // ── TITLE ──
  doc.font("Helvetica").fontSize(9.5).fillColor("#444444")
    .text(d.title, LEFT, doc.y, { align: "center", width: pageW });
  doc.moveDown(0.3);

  // ── CONTACT ──
  doc.font("Helvetica").fontSize(8.5).fillColor("#444444")
    .text(`${d.contact.email}  |  ${d.contact.phone}`, LEFT, doc.y, { align: "center", width: pageW });
  doc.moveDown(0.15);
  doc.font("Helvetica").fontSize(8.5).fillColor("#444444")
    .text(`${d.contact.location}  |  ${d.contact.portfolio}`, LEFT, doc.y, { align: "center", width: pageW });
  doc.moveDown(0.15);
  doc.font("Helvetica").fontSize(8.5).fillColor("#444444")
    .text(`${d.contact.linkedin}  |  ${d.contact.github}`, LEFT, doc.y, { align: "center", width: pageW });
  doc.moveDown(0.3);

  // ── SUMMARY ──
  sectionTitle("Professional Summary");
  bodyText(d.summary, { align: "justify" });
  doc.moveDown(0.2);

  // ── SKILLS ──
  sectionTitle("Technical Skills");
  bodyText(d.skills.join("  |  "), { align: "justify" });
  doc.moveDown(0.2);

  // ── EXPERIENCE ──
  sectionTitle("Work Experience");

  for (const exp of d.experience) {
    doc.moveDown(0.3);
    // Role bold + period right
    const roleText = exp.role;
    const periodText = exp.period;
    doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#000000").text(roleText, LEFT, doc.y, { continued: false, width: pageW * 0.72 });
    const roleEndY = doc.y;
    doc.font("Helvetica").fontSize(9).fillColor("#444444").text(periodText, LEFT + pageW * 0.72, roleEndY - 13, { width: pageW * 0.28, align: "right" });
    doc.moveDown(0.05);

    // Company + location
    doc.font("Helvetica-Oblique").fontSize(8.5).fillColor("#555555")
      .text(`${exp.company}  –  ${exp.location}`, LEFT, doc.y, { width: pageW });
    doc.moveDown(0.25);

    for (const b of exp.bullets) {
      bulletText(b);
    }
    doc.moveDown(0.15);
    doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#000000")
      .text("Technologies: ", LEFT, doc.y, { continued: true, width: pageW });
    doc.font("Helvetica").fontSize(8.5).fillColor("#555555")
      .text(exp.tech, { width: pageW });
    doc.moveDown(0.1);
  }

  // ── PROJECTS ──
  sectionTitle("Personal Projects");

  for (const proj of d.projects) {
    doc.moveDown(0.3);
    doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#000000")
      .text(proj.name, LEFT, doc.y, { continued: true });
    doc.font("Helvetica").fontSize(8.5).fillColor("#555555")
      .text(`  |  ${proj.tech}`);
    doc.moveDown(0.1);
    smallText(proj.desc, { fillColor: "#000000", fontSize: 9 });
    doc.moveDown(0.1);
  }

  // ── EDUCATION ──
  sectionTitle("Education");
  doc.moveDown(0.2);
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#000000")
    .text(d.education.degree, LEFT, doc.y, { width: pageW });
  doc.moveDown(0.1);
  doc.font("Helvetica-Oblique").fontSize(8.5).fillColor("#555555")
    .text(`${d.education.institution}, ${d.education.location}  |  ${d.education.period}`, LEFT, doc.y, { width: pageW });
  doc.moveDown(0.2);

  // ── CERTIFICATIONS ──
  sectionTitle("Certifications");
  for (const cert of d.certifications) {
    bulletText(cert);
  }

  doc.end();
  console.log(`✅ PDF  saved: ${outPath}`);
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log("Generating ATS-friendly resume...\n");
  await generateDOCX();
  generatePDF();
  console.log("\nDone! Check the /resume folder.");
}

main().catch(console.error);
