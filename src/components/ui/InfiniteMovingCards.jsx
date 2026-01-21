import { motion } from "framer-motion";

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
}) {
  const durationMap = {
    slow: 40,
    normal: 25,
    fast: 15,
  };

  return (
    // Ensure this container doesn't have a fixed height (like h-[40rem]) in the parent component
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-3 w-max" // Reduced gap between cards
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: durationMap[speed],
        }}
      >
        {/* Repeating 4 times to ensure smooth scrolling without gaps */}
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div
            key={idx}
            className="w-[200px] md:w-[260px] flex-shrink-0 flex flex-col items-center text-center justify-center
                       rounded-xl p-3 
                       border border-white/10 backdrop-blur-sm"
            style={{
              // Explicit background color as requested
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* NAME: Top and Center, Font size adjusted */}
            <h4 className="text-white font-bold text-sm mb-1">{item.name}</h4>

            {/* Title */}
            <span className="text-[10px] text-pink-400 font-medium mb-2 uppercase tracking-wider">
              {item.title}
            </span>

            {/* QUOTE: Text size reduced for compact look */}
            <p className="text-xs text-white/80 leading-relaxed">
              "{item.quote}"
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}