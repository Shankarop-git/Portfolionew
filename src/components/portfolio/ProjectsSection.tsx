import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Project {
  n: string;
  name: string;
  subtitle: string;
  category: string;
  desc: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    n: "01",
    name: "PaperTradeX",
    subtitle: "Full-Stack Paper Trading Platform",
    category: "Full-Stack • FinTech",
    desc: "A full-stack paper trading platform built using Java and Spring Boot, exposing REST APIs for portfolio tracking, order placement, and transactional data processing. A normalized MySQL database handles portfolio and transaction data, while JWT-based stateless authentication protects user-specific trading information.",
    tags: ["Java", "Spring Boot", "REST APIs", "MySQL", "JWT", "JDBC"],
    github: "https://github.com/AkshathKalal18/PaperTradeX",
    image: "/projects/papertradex.jpg",
  },
  {
    n: "02",
    name: "PrepWise AI",
    subtitle: "AI-Powered Interview & Study Preparation Platform",
    category: "AI • Full-Stack • Education",
    desc: "A full-stack platform developed collaboratively by a 4-person team. Combines coding practice, personalized study planning, and mock interviews. Integrates speech recognition and emotion analysis using Ollama-hosted models for AI-powered interview feedback and real-time progress tracking.",
    tags: ["React", "FastAPI", "Flask", "Firebase", "Ollama", "AI"],
    github: "https://github.com/AkshathKalal18",
    image: "/projects/prepwise.jpg",
  },
  {
    n: "03",
    name: "Network IDS",
    subtitle: "Cybersecurity Monitoring Tool",
    category: "Cybersecurity • Network Security",
    desc: "A monitoring tool designed to identify potentially malicious network activity and unauthorized access attempts. Provides exposure to intrusion detection, network monitoring, and security analysis fundamentals.",
    tags: ["Cybersecurity", "Network Monitoring", "Intrusion Detection", "Security Analysis"],
    github: "https://github.com/AkshathKalal18",
    image: "/projects/network_ids.jpg",
  },
];

function ProjectCard({
  project,
  index,
  total,
  containerRef,
}: {
  project: Project;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [index / total, 1], [1, targetScale]);

  return (
    <div
      className="min-h-[85vh] sticky flex items-start justify-center pb-12"
      style={{ top: `${index * 28 + 84}px` }}
    >
      <motion.div
        style={{ scale, background: "#111111" }}
        className="w-full rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-[#D7E2EA]/15 p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden backdrop-blur-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Info & Details */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-5">
            {/* Header row */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex items-baseline gap-4 sm:gap-6">
                <span
                  className="hero-heading font-black"
                  style={{ fontSize: "clamp(2.2rem, 6vw, 80px)", lineHeight: 1 }}
                >
                  {project.n}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs font-semibold">
                    {project.category}
                  </span>
                  <span
                    className="text-[#D7E2EA] font-black uppercase tracking-tight"
                    style={{ fontSize: "clamp(1.2rem, 2.2vw, 2rem)", lineHeight: 1.1 }}
                  >
                    {project.name}
                  </span>
                  <span
                    className="text-[#D7E2EA]/60 font-light"
                    style={{ fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)" }}
                  >
                    {project.subtitle}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-[#D7E2EA]/70 font-light leading-relaxed"
              style={{ fontSize: "clamp(0.85rem, 1.2vw, 1rem)" }}
            >
              {project.desc}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/80 border border-[#D7E2EA]/15"
                  style={{ background: "rgba(215,226,234,0.05)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-widest border border-[#D7E2EA]/30 text-[#D7E2EA] hover:border-[#D7E2EA]/80 hover:bg-[#D7E2EA]/5 transition-all duration-200 inline-flex items-center gap-2"
              >
                GitHub Code
                <span>→</span>
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-white transition-all duration-200"
                  style={{
                    background:
                      "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  }}
                >
                  Live Demo →
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Preview Image */}
          <div className="lg:col-span-6 xl:col-span-5 w-full">
            <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D7E2EA]/20 bg-[#0C0C0C]/80 shadow-xl aspect-video sm:aspect-[16/10] flex items-center justify-center">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section
      id="projects"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 md:mb-20"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </h2>
      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.n}
            project={p}
            index={i}
            total={PROJECTS.length}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
}
