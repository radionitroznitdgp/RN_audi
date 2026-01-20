"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      // KEY CHANGES:
      // 1. 'mx-auto' centers the whole card on the screen.
      // 2. 'max-w-6xl' gives it a max width so margins can actually work.
      // 3. 'p-8 md:p-16' adds the requested inside padding.
      className="h-[80vh] w-full max-w-6xl mx-auto overflow-y-auto flex items-start justify-center gap-10 md:gap-24 relative rounded-3xl p-8 md:p-16 no-scrollbar bg-white/5 border border-white/10 shadow-2xl"
      ref={ref}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* Text Content Wrapper */}
      <div className="div relative flex items-start px-4 w-full md:w-auto">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-3xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>

              {/* MOBILE ONLY: Visual content inline */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: activeCard === index ? 1 : 0.8, scale: 1 }}
                className="block md:hidden mt-6 mb-6 rounded-2xl overflow-hidden h-60 w-full shadow-lg border border-white/10"
              >
                {item.content}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg text-slate-300 max-w-sm mt-4 leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}

          {/* Bottom spacer to allow scrolling past the last item */}
          <div className="h-[60vh]" />
        </div>
      </div>

      {/* DESKTOP ONLY: Sticky Visual (Pinned to Right) */}
      <div
        className={`hidden md:block h-96 w-96 rounded-2xl sticky top-16 overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.3)] ${contentClassName}`}
      >
        <motion.div
          key={activeCard}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          {content[activeCard].content ?? null}
        </motion.div>
      </div>
    </motion.div>
  );
};
