import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.4, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgba(215, 226, 234, 0.45)", "rgba(255, 255, 255, 1)"]
  );

  return (
    <span className="relative inline-block mr-2 my-0.5">
      <motion.span style={{ opacity, color }}>
        {word}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = Math.min(1, start + 1.2 / words.length);
        return <Word key={i} word={w} progress={scrollYProgress} range={[start, end]} />;
      })}
    </p>
  );
}
