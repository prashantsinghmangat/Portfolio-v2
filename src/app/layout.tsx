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
    default: "Prashant Singh — Senior Frontend Architect & Full Stack Developer",
    template: "%s | Prashant Singh",
  },
  description:
    "Prashant Singh is a Senior Frontend Architect & Full Stack Developer with 5+ years of experience building enterprise-scale React platforms, leading AngularJS-to-React migrations, and shipping 35+ production projects. Expertise in React, Next.js, TypeScript, Angular, Node.js, and UI performance engineering.",
  keywords: [
    "Prashant Singh",
    "Prashant Singh Mangat",
    "Senior Frontend Architect",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Expert",
    "Angular Developer",
    "Frontend Engineer India",
    "UI Performance Engineering",
    "AngularJS to React Migration",
    "Enterprise Web Platforms",
    "tracebug-sdk",
    "NexGenGram",
    "Kanban Board",
    "NexGenStocks",
    "Portfolio",
    "Hire Frontend Developer",
    "Remote Frontend Developer",
    "Senior React Developer",
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
    title: "Prashant Singh — Senior Frontend Architect & Full Stack Developer",
    description:
      "5+ years building enterprise React platforms. Expertise in React, Next.js, TypeScript, Angular, and Node.js. 35+ projects shipped. Open to senior frontend & lead roles.",
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
    title: "Prashant Singh — Senior Frontend Architect & Full Stack Developer",
    description:
      "5+ years building enterprise React platforms. 35+ projects shipped. Open to senior frontend & lead roles.",
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
  jobTitle: "Senior Frontend Architect",
  description:
    "Senior Frontend Architect & Full Stack Developer with 5+ years of experience building enterprise-scale React platforms and leading AngularJS-to-React migrations.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Angular",
    "Node.js",
    "JavaScript",
    "Tailwind CSS",
    "GraphQL",
    "REST APIs",
    "Docker",
    "CI/CD",
    "UI Performance",
    "Frontend Architecture",
    "Design Systems",
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
    "@type": "Organization",
    name: "Taazaa Inc.",
  },
  worksFor: {
    "@type": "Organization",
    name: "Taazaa Inc.",
  },
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
