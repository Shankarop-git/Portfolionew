import { FadeIn } from "./FadeIn";
import { AnimatedText } from "./AnimatedText";

const SKILLS = [
  "Java",
  "Spring Boot",
  "REST APIs",
  "MySQL",
  "DSA",
  "OOP",
  "DBMS",
  "Git",
  "Full Stack",
  "Cybersecurity",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
      style={{ background: "#0C0C0C" }}
    >
      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10 max-w-3xl mx-auto text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 140px)" }}
          >
            About Me
          </h2>
        </FadeIn>

        <AnimatedText
          text="I am Akshat Kalal, an Information Science graduate passionate about building practical software solutions. I have a strong foundation in Java, Spring Boot, REST APIs, MySQL, Data Structures & Algorithms, and OOP. I've independently built full-stack applications including a paper trading platform and an AI-powered interview preparation tool, and I have hands-on experience in cybersecurity through internship work in intrusion detection and security analysis."
          className="font-medium text-center leading-relaxed text-[#D7E2EA] text-[clamp(1.05rem,2vw,1.35rem)] max-w-2xl px-2"
        />

        <FadeIn delay={0.3} y={20}>
          <div className="flex flex-wrap justify-center gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-medium uppercase tracking-widest border border-[#D7E2EA]/20 rounded-full px-4 py-2 text-xs hover:border-[#D7E2EA]/50 transition-colors duration-200"
                style={{ color: "#D7E2EA", background: "rgba(215,226,234,0.04)" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.45} y={20}>
          <a
            href="#contact"
            className="rounded-full text-white font-medium uppercase tracking-widest px-10 py-4 text-sm hover:scale-105 transition-transform duration-200"
            style={{
              background:
                "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow:
                "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid white",
              outlineOffset: "-3px",
            }}
          >
            Let's Connect
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
