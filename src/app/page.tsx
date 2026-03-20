import HeroSection from "@/components/sections/HeroSection";
import TrustStripSection from "@/components/sections/TrustStripSection";
import WhyHireMeSection from "@/components/sections/WhyHireMeSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import IndustryProjectsSection from "@/components/sections/IndustryProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillGalaxySection from "@/components/sections/SkillGalaxySection";
import TerminalSection from "@/components/sections/TerminalSection";
import AboutSection from "@/components/sections/AboutSection";
import OpenSourceSection from "@/components/sections/OpenSourceSection";
import GithubSection from "@/components/sections/GithubSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main role="main">
        <article itemScope itemType="https://schema.org/Person">
          <meta itemProp="name" content="Prashant Singh" />
          <meta itemProp="jobTitle" content="Module Lead | Senior Frontend & AI Migration Specialist" />
          <meta itemProp="url" content="https://prashantsingh.dev" />
          {/* 1. Hero */}
          <HeroSection />
          {/* 2. Trust Strip — credibility at a glance */}
          <TrustStripSection />
          {/* 3. Why Hire Me */}
          <WhyHireMeSection />
          {/* 4. Case Studies */}
          <CaseStudiesSection />
          {/* 5. Leadership & Impact + Trusted By */}
          <LeadershipSection />
          {/* 6. Industry & Client Projects */}
          <IndustryProjectsSection />
          {/* 7. Work Experience */}
          <ExperienceSection />
          {/* 8-9. Featured Projects + Other Projects */}
          <ProjectsSection />
          {/* 10. Skills */}
          <SkillGalaxySection />
          {/* 11. Terminal + About */}
          <TerminalSection />
          <AboutSection />
          {/* 12. Open Source / GitHub */}
          <OpenSourceSection />
          <GithubSection />
          {/* 13. Contact — Final CTA */}
          <ContactSection />
        </article>
      </main>
      <Footer />
    </>
  );
}
