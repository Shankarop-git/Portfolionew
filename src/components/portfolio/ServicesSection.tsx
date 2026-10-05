import { FadeIn } from "./FadeIn";

const SERVICES = [
  {
    n: "01",
    name: "Software Development",
    desc: "I develop software applications with a focus on clean logic, maintainable code, and solving real-world problems.",
  },
  {
    n: "02",
    name: "Backend Development",
    desc: "I build backend applications using Java, Spring Boot, REST APIs, JDBC, and database technologies for scalable server-side logic.",
  },
  {
    n: "03",
    name: "API Development",
    desc: "I design and implement REST APIs for CRUD operations, authentication, transaction processing, and data management.",
  },
  {
    n: "04",
    name: "Full-Stack Development",
    desc: "I work across frontend, backend, APIs, and databases to deliver complete end-to-end application experiences.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-[5]"
      style={{ background: "#FFFFFF", color: "#0C0C0C" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Services
      </h2>
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1}>
            <div
              className="flex items-center gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: "1px solid rgba(12,12,12,0.15)",
                ...(i === SERVICES.length - 1
                  ? { borderBottom: "1px solid rgba(12,12,12,0.15)" }
                  : {}),
              }}
            >
              <div
                className="font-black shrink-0"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)", lineHeight: 1 }}
              >
                {s.n}
              </div>
              <div className="flex flex-col gap-3 md:gap-4">
                <div
                  className="font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)", lineHeight: 1.1 }}
                >
                  {s.name}
                </div>
                <div
                  className="font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
                >
                  {s.desc}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
