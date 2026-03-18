import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/animations/PageTransition";
import ThemeApplier from "@/components/ui/ThemeApplier";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import ScrollController from "@/components/ui/ScrollController";

const siteUrl = "https://prashantsingh.dev";

export const viewport: Viewport = {
  themeColor: "#7c6cfc",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prashant Singh — Module Lead | Senior Frontend & AI Migration Specialist",
    template: "%s | Prashant Singh",
  },
  description:
    "Prashant Singh is a Module Lead and Senior Frontend Engineer with 6+ years of experience building enterprise web platforms. Specializes in Angular, React, Next.js, TypeScript, AI-powered automation, and AngularJS-to-React migrations. Led Moglix, Tele-MANAS (100K+ users), and Tendershark. Open to Senior / Lead / Architect roles.",
  keywords: [
    "Prashant Singh",
    "Prashant Singh Mangat",
    "Module Lead Frontend",
    "Senior Frontend Engineer",
    "Senior Web Application Developer",
    "Angular Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "AI Automation Developer",
    "AngularJS to React Migration",
    "SSR Developer",
    "IONIC Developer",
    "React Native Developer",
    "Frontend Engineer India",
    "SEO Optimization",
    "UI Performance Engineering",
    "Enterprise Web Platforms",
    "Moglix Developer",
    "Taazaa Inc",
    "Tele-MANAS",
    "e-Manas Karnataka",
    "IIIT Bangalore",
    "Agile Methodologies",
    "tracebug-sdk",
    "Tendershark",
    "Portfolio",
    "Hire Frontend Developer",
    "Remote Frontend Developer India",
  ],
  authors: [{ name: "Prashant Singh", url: siteUrl }],
  creator: "Prashant Singh",
  publisher: "Prashant Singh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prashant Singh — Portfolio",
    title: "Prashant Singh — Module Lead | Senior Frontend & AI Migration Specialist",
    description:
      "6+ years building enterprise web platforms. Angular · React · Next.js · AI Automation. Led Moglix, Tele-MANAS (100K+ users), Tendershark. Open to Senior / Lead / Architect roles.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Prashant Singh — Senior Frontend Architect & Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Singh — Module Lead | Senior Frontend & AI Migration Specialist",
    description:
      "6+ years · Angular · React · Next.js · AI Automation · Led Moglix, Tele-MANAS, Tendershark. Open to Senior / Lead roles.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@prashantsinghmangat",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "google-site-verification": "",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prashant Singh",
  alternateName: "Prashant Singh Mangat",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: "Module Lead | Frontend – AI & Migration Specialist",
  description:
    "Senior Frontend Engineer with 6+ years of experience building enterprise web platforms. Specializes in Angular, React, Next.js, TypeScript, AI-powered development automation, and AngularJS-to-React migrations. Led Moglix, Tele-MANAS (100K+ users), and Tendershark.",
  knowsAbout: [
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Server-Side Rendering (SSR)",
    "REST APIs",
    "Node.js",
    "Java",
    "IONIC",
    "Cordova",
    "React Native",
    "Android Development",
    "Figma",
    "Webpack",
    "Jenkins",
    "CI/CD",
    "SEO Optimization",
    "AI Automation",
    "Agile Methodologies",
    "Frontend Architecture",
    "UI Performance Engineering",
    "AngularJS to React Migration",
  ],
  sameAs: [
    "https://github.com/prashantsinghmangat",
    "https://www.linkedin.com/in/prashantsinghmangat/",
    "https://www.npmjs.com/package/tracebug-sdk",
    "https://prashantsinghmangat.netlify.app",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Lovely Professional University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Phagwara",
      addressCountry: "IN",
    },
  },
  worksFor: {
    "@type": "Organization",
    name: "Taazaa Inc.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "ReactJS and Angular",
      credentialCategory: "Certificate",
      recognizedBy: { "@type": "Organization", name: "Udemy" },
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Ethical Hacking",
      credentialCategory: "Certificate",
      recognizedBy: { "@type": "Organization", name: "TechDefence" },
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prashant Singh Portfolio",
  url: siteUrl,
  description:
    "Portfolio of Prashant Singh — Senior Frontend Architect & Full Stack Developer",
  author: {
    "@type": "Person",
    name: "Prashant Singh",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" dir="ltr">
      <head>
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className="bg-bg text-zinc-200 antialiased">
        <ThemeApplier />
        <ScrollController />
        <CustomCursor />
        <Navbar />
        <ThemeSwitcher />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
