import React from "react";
import InfiniteMovingCards from "./ui/InfiniteMovingCards";
import { motion } from "framer-motion";
const eventContent = [
  {
    name: "Bollywood Day",
    quote:
      "Lights. Camera. Drama! 🎬 Bollywood Day is where the campus turns filmy. From iconic Bollywood characters to retro looks and dramatic dialogues, students dress up, act out, and live their Bollywood dreams. Expect music, madness, and full-on desi vibes.",
  },
  {
    name: "Talent X",
    quote:
      "No rules. No limits. Just talent. 🔥 Talent X is the ultimate open stage where students can showcase anything — singing, dancing, stand-up comedy, beatboxing, poetry, mimicry, or something totally unexpected. If you’ve got the spark, this is your spotlight.",
  },
  {
    name: "Glam It Up",
    quote:
      "Style. Confidence. Attitude. ✨ Glam It Up is Radio NITroz’s fashion showcase where students walk the floor with confidence and creativity. From traditional elegance to street fashion and experimental looks — it’s all about owning the spotlight.",
  },
  {
    name: "Cogniverse",
    quote:
      "An online challenge where logic bends and curiosity rules. Face tricky questions, clever riddles, and brain-teasing twists designed to push your thinking beyond the obvious.",
  },
  {
    name: "Freshers’ Introduction Video Shoot",
    quote:
      "We invite all first-year students to step into the spotlight. We record and showcase your introductions to the campus — giving you the stage to share your personality, talents, humour, and vibe with the Radio NITroz family.",
  },
  {
    name: "Limelight",
    quote:
      "Celebrate the festive season by showcasing your best traditional attire. Submit a photo featuring Diwali elements like rangoli or lights. Winners are decided by Instagram likes and comments.",
  },
  {
    name: "Wavecraze",
    quote:
      "NIT Durgapur’s biggest cultural celebration. From fashion showcases and cinematic challenges to raw talent performances and comedy nights — Wavecraze brings the campus alive.",
  },
];



export default function InfiniteMovingCards({
  items,
  direction = "left",
  speed = "slow",
}) {
  const animationDuration =
    speed === "fast" ? 15 : speed === "normal" ? 25 : 35;

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "32px",
          width: "max-content",
        }}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.35)",
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
              cursor: "pointer",
            }}
          >
            {/* Event Title */}
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                marginBottom: "12px",
                background: "linear-gradient(90deg, #a855f7, #00f3ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {item.name}
            </h3>

            {/* Event Description */}
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
