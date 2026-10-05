import { FadeIn } from "./FadeIn";
import { ComputersCanvas } from "./ComputersCanvas";

const NAV = ["About", "Services", "Projects", "Experience", "Skills", "Contact"];

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: "clip" }}>
      <FadeIn delay={0} y={-20}>
        <nav className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-30 flex-wrap gap-2">
          <span
            className="text-[#D7E2EA] font-black uppercase tracking-widest"
            style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.2rem)" }}
          >
            Akshat Kalal
          </span>
          <div className="flex gap-4 md:gap-8 flex-wrap">
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="text-[#D7E2EA]/70 font-medium uppercase tracking-wider text-xs md:text-sm hover:text-[#D7E2EA] transition-colors duration-200"
              >
                {n}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-end relative">
        {/* 3D Desktop PC Canvas */}
        <div className="absolute inset-0 z-10">
          <ComputersCanvas />
        </div>

        {/* Hero heading */}
        <div className="overflow-hidden relative z-20 pointer-events-none mb-1 sm:mb-2">
          <FadeIn delay={0.15} y={40}>
            <h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center select-none"
              style={{ fontSize: "clamp(4.5rem, 11vw, 12.5vw)" }}
            >
              Hi, I'm Akshat
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-30 pointer-events-none">
          <FadeIn delay={0.35} y={20}>
            <div className="flex flex-col gap-2">
              <p
                className="text-[#D7E2EA]/80 font-light uppercase tracking-widest select-none"
                style={{ fontSize: "clamp(0.65rem, 1.2vw, 1rem)" }}
              >
                Software Developer
              </p>
              <p
                className="text-[#D7E2EA]/55 font-light leading-snug max-w-[200px] sm:max-w-[260px] md:max-w-[320px] select-none"
                style={{ fontSize: "clamp(0.65rem, 1.1vw, 0.95rem)" }}
              >
                Building practical, scalable software solutions that turn ideas into reality.
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {["JAVA", "SPRING BOOT", "REST APIs", "MYSQL"].map((t) => (
                  <span
                    key={t}
                    className="text-[#D7E2EA]/40 font-medium uppercase tracking-widest select-none"
                    style={{ fontSize: "clamp(0.5rem, 0.8vw, 0.7rem)" }}
                  >
                    {t} ·
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="pointer-events-auto flex gap-3">
            <FadeIn delay={0.5} y={20}>
              <a
                href="#projects"
                className="rounded-full text-white font-medium uppercase tracking-widest px-6 py-3 text-xs sm:text-sm border border-[#D7E2EA]/30 hover:border-[#D7E2EA]/70 transition-colors duration-200"
              >
                View My Work
              </a>
            </FadeIn>
            <FadeIn delay={0.6} y={20}>
              <a
                href="#contact"
                className="rounded-full text-white font-medium uppercase tracking-widest px-6 py-3 text-xs sm:text-sm"
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
        </div>
      </div>
    </section>
  );
}
