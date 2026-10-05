import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ExperienceSection } from "@/components/portfolio/ExperienceSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")(
  {
    component: Index,
  }
);

function Index() {
  return (
    <main style={{ overflowX: "clip", background: "#0C0C0C", fontFamily: "'Kanit', sans-serif" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
