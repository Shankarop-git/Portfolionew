import { FadeIn } from "./FadeIn";

const EXPERIENCE = [
  {
    role: "Java Full Stack Development Intern",
    company: "JSpiders",
    location: "Bangalore",
    period: "Feb 2026 – Aug 2026",
    desc: "Built and tested backend modules using Java, Spring Boot, JDBC, and MySQL, implementing CRUD operations for core application features.",
    tags: ["Java", "Spring Boot", "JDBC", "MySQL", "CRUD"],
  },
  {
    role: "Cybersecurity Intern",
    company: "Athreya Technologies Pvt. Ltd.",
    location: "",
    period: "Jan 2023 – Apr 2023",
    desc: "Completed a 640-hour internship covering intrusion detection, system monitoring, and security analysis fundamentals.",
    tags: ["Intrusion Detection", "System Monitoring", "Security Analysis"],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 md:mb-24"
          style={{ fontSize: "clamp(3rem, 12vw, 140px)" }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-4xl mx-auto flex flex-col gap-1">
        {EXPERIENCE.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.15} y={30}>
            <div
              className="flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-14 py-10 sm:py-12 md:py-14"
              style={{ borderTop: "1px solid rgba(215,226,234,0.12)" }}
            >
              {/* Left: period */}
              <div className="shrink-0 sm:w-40 md:w-52">
                <span
                  className="font-medium text-[#D7E2EA]/50 uppercase tracking-widest"
                  style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)" }}
                >
                  {exp.period}
                </span>
              </div>

              {/* Right: content */}
              <div className="flex flex-col gap-3">
                <div>
                  <h3
                    className="text-[#D7E2EA] font-black uppercase"
                    style={{ fontSize: "clamp(1rem, 2vw, 1.6rem)", lineHeight: 1.2 }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="text-[#D7E2EA]/50 font-medium uppercase tracking-widest mt-1"
                    style={{ fontSize: "clamp(0.7rem, 1.2vw, 0.9rem)" }}
                  >
                    {exp.company}
                    {exp.location ? ` — ${exp.location}` : ""}
                  </p>
                </div>
                <p
                  className="text-[#D7E2EA]/60 font-light leading-relaxed"
                  style={{ fontSize: "clamp(0.82rem, 1.4vw, 1rem)" }}
                >
                  {exp.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#D7E2EA]/60 border border-[#D7E2EA]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
        <div style={{ borderTop: "1px solid rgba(215,226,234,0.12)" }} />
      </div>
    </section>
  );
}
