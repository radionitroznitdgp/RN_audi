import { motion } from "framer-motion";

export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
}) {
  const duration = speed === "fast" ? 15 : speed === "normal" ? 25 : 35;

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <motion.div
        style={{ display: "flex", gap: "32px", width: "max-content" }}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168,85,247,0.35)",
            }}
            style={{
              width: "320px",
              minHeight: "230px",
              padding: "24px",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(0,243,255,0.08))",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                background: "linear-gradient(90deg,#a855f7,#00f3ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.name}
            </h3>

            <p
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.75)",
              }}
            >
              {item.quote}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
