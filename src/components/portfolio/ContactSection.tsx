import { FadeIn } from "./FadeIn";

const CONTACT_ITEMS = [
  {
    label: "Email",
    value: "akshathkalal2004@gmail.com",
    href: "mailto:akshathkalal2004@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/akshathkalal",
    href: "https://linkedin.com/in/akshathkalal",
  },
  {
    label: "GitHub",
    value: "github.com/AkshathKalal18",
    href: "https://github.com/AkshathKalal18",
  },
  {
    label: "Location",
    value: "Bangalore, Karnataka",
    href: null,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: "#0C0C0C" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-16 md:gap-24">
        {/* Heading block */}
        <FadeIn delay={0} y={40}>
          <div className="flex flex-col gap-4">
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 140px)" }}
            >
              Let's Build
            </h2>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 12vw, 140px)" }}
            >
              Together.
            </h2>
            <p
              className="text-[#D7E2EA]/60 font-light leading-relaxed max-w-xl mt-4"
              style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.1rem)" }}
            >
              I'm open to software development opportunities, interesting projects, and
              collaborations. If you'd like to discuss a project, opportunity, or simply
              connect, feel free to reach out.
            </p>
          </div>
        </FadeIn>

        {/* Contact items */}
        <div className="flex flex-col gap-0">
          {CONTACT_ITEMS.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1} y={20}>
              <div
                className="flex items-center justify-between py-6 sm:py-7"
                style={{ borderTop: "1px solid rgba(215,226,234,0.12)" }}
              >
                <span
                  className="text-[#D7E2EA]/40 uppercase tracking-widest font-medium"
                  style={{ fontSize: "clamp(0.65rem, 1vw, 0.8rem)" }}
                >
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-[#D7E2EA] font-medium hover:opacity-70 transition-opacity duration-200"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)" }}
                  >
                    {item.value} →
                  </a>
                ) : (
                  <span
                    className="text-[#D7E2EA]/70 font-medium"
                    style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)" }}
                  >
                    {item.value}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
          <div style={{ borderTop: "1px solid rgba(215,226,234,0.12)" }} />
        </div>

        {/* CTA button */}
        <FadeIn delay={0.4} y={20}>
          <a
            href="mailto:akshathkalal2004@gmail.com"
            className="inline-flex rounded-full text-white font-medium uppercase tracking-widest px-12 py-5 text-sm self-start"
            style={{
              background:
                "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
              boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
              outline: "2px solid white",
              outlineOffset: "-3px",
            }}
          >
            Get In Touch →
          </a>
        </FadeIn>

        {/* Footer */}
        <FadeIn delay={0.5} y={20}>
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10"
            style={{ borderTop: "1px solid rgba(215,226,234,0.12)" }}
          >
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <span
                className="text-[#D7E2EA] font-black uppercase tracking-widest"
                style={{ fontSize: "clamp(0.85rem, 1.4vw, 1rem)" }}
              >
                Akshat Kalal
              </span>
              <span
                className="text-[#D7E2EA]/40 uppercase tracking-widest"
                style={{ fontSize: "clamp(0.6rem, 0.9vw, 0.72rem)" }}
              >
                Software Developer
              </span>
              <span
                className="text-[#D7E2EA]/30 italic"
                style={{ fontSize: "clamp(0.6rem, 0.9vw, 0.72rem)" }}
              >
                Building software. Solving problems. Learning continuously.
              </span>
            </div>
            <span
              className="text-[#D7E2EA]/30 uppercase tracking-widest text-center"
              style={{ fontSize: "clamp(0.55rem, 0.8vw, 0.68rem)" }}
            >
              © 2026 Akshat Kalal. All rights reserved.
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
