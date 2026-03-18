import HeroSection from "@/components/sections/HeroSection";
import TerminalSection from "@/components/sections/TerminalSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillGalaxySection from "@/components/sections/SkillGalaxySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
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
          <meta itemProp="jobTitle" content="Senior Frontend Architect & Full Stack Developer" />
          <meta itemProp="url" content="https://prashantsingh.dev" />
          <HeroSection />
          <TerminalSection />
          <AboutSection />
          <SkillGalaxySection />
          <ExperienceSection />
          <ProjectsSection />
          <OpenSourceSection />
          <GithubSection />
          <ContactSection />
        </article>
      </main>
      <Footer />
    </>
  );
}
