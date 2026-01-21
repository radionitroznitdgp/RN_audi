import React from "react";
import InfiniteMovingCards from "./ui/InfiniteMovingCards";

const eventContent = [
  {
    name: "Bollywood Day",
    quote:
      "Lights. Camera. Drama! 🎬 Bollywood Day is where the campus turns filmy. From iconic Bollywood characters to retro looks and dramatic dialogues, students dress up, act out, and live their Bollywood dreams.",
  },
  {
    name: "Talent X",
    quote:
      "No rules. No limits. Just talent. 🔥 Talent X is the ultimate open stage where students can showcase anything — singing, dancing, stand-up comedy, beatboxing, poetry, mimicry, or something totally unexpected.",
  },
  {
    name: "Glam It Up",
    quote:
      "Style. Confidence. Attitude. ✨ Glam It Up is Radio NITroz’s fashion showcase where students walk the floor with confidence and creativity.",
  },
  {
    name: "Cogniverse",
    quote:
      "An online challenge where logic bends and curiosity rules. Face tricky questions, clever riddles, and brain-teasing twists designed to push your thinking beyond the obvious.",
  },
  {
    name: "Freshers’ Introduction Video Shoot",
    quote:
      "We invite all first-year students to step into the spotlight and showcase their personality, talents, humour, and vibe with the Radio NITroz family.",
  },
  {
    name: "Limelight",
    quote:
      "Celebrate the festive season by showcasing your best traditional attire. Winners are decided by Instagram engagement.",
  },
  {
    name: "Wavecraze",
    quote:
      "NIT Durgapur’s biggest cultural celebration packed with fashion, talent, cinema, and comedy.",
  },
];

export default function EventInfinite() {
  return (
    <div className="h-auto w-full flex items-center justify-center py-6 overflow-hidden">
      <InfiniteMovingCards
        items={eventContent}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

