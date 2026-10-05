import { FadeIn } from "./FadeIn";

const SKILL_GROUPS = [
  {
    group: "Languages",
    items: ["Java"],
  },
  {
    group: "Backend",
    items: ["Spring Boot", "REST APIs", "JDBC", "Hibernate", "JSP"],
  },
  {
    group: "Frontend",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    group: "Database",
    items: ["MySQL"],
  },
  {
    group: "CS Fundamentals",
    items: ["OOP", "Data Structures & Algorithms", "DBMS", "Operating Systems", "SDLC", "Exception Handling", "Design Patterns", "Multithreading"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Maven"],
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-[5]"
      style={{ background: "#FFFFFF", color: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {SKILL_GROUPS.map((group, gi) => (
          <FadeIn key={group.group} delay={gi * 0.1} y={30}>
            <div className="flex flex-col gap-4">
              <h3
                className="font-black uppercase tracking-widest"
                style={{ fontSize: "clamp(0.65rem, 1vw, 0.8rem)", opacity: 0.4 }}
              >
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-medium uppercase tracking-wide rounded-full px-4 py-2 text-sm border border-[#0C0C0C]/15 hover:border-[#0C0C0C]/40 transition-colors duration-200"
                    style={{ color: "#0C0C0C", background: "rgba(12,12,12,0.04)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
