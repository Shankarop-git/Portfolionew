const MARQUEE_TEXT =
  "SOFTWARE DEVELOPER • JAVA • SPRING BOOT • REST APIs • FULL-STACK DEVELOPMENT • MYSQL • AI APPLICATIONS • CYBERSECURITY • PROBLEM SOLVING • SOFTWARE ENGINEERING •  ";

export function MarqueeSection() {
  return (
    <section
      className="py-8 sm:py-10 overflow-hidden relative z-20"
      style={{ background: "#D7E2EA" }}
    >
      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animation: "marqueeScroll 30s linear infinite",
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="font-black uppercase tracking-widest shrink-0"
            style={{
              fontSize: "clamp(0.9rem, 2vw, 1.5rem)",
              color: "#0C0C0C",
              letterSpacing: "0.12em",
            }}
          >
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
