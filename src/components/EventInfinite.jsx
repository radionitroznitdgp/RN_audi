import React from "react";
import InfiniteMovingCards from "./ui/InfiniteMovingCards";

const eventContent = [
  {
    quote:
      "An online challenge where logic bends and curiosity rules. Face tricky questions, clever riddles, and brain-teasing twists designed to push your thinking beyond the obvious.",
    name: "Cogniverse",
  },
  {
    quote:
      "We invite all 1st-year students to step into the spotlight! We record and showcase your introductions to the campus—giving you the stage to share your personality, talents, and humor with the Radio NITroz family.",
    name: "Freshers' Introduction Video Shoot",
  },
  {
    quote:
      "Team RN hit the grounds of the food fest to capture the vibe. We grabbed candid reviews of the food from seniors and interviewed 1st-year students to hear their unfiltered thoughts on their new college life.",
    name: "RJ Wars",
  },
  {
    quote:
      "Celebrate the festive season by showcasing your best traditional attire. Submit a photo featuring Diwali elements (like rangoli or crackers) for a chance to win. Winners are decided by Instagram likes and comments",
    name: "Limelight",
  },
  {
    quote:
      "NIT Durgapur’s biggest cultural celebration returns. Highlights include the style and flair of Glamit Up, the cinematic challenges of Movie Mystic, the raw talent of TalentX, and the laughter of Comedy Night.",
    name: "Wavecraze",
  },
];

export default function EventInfinite() {
  return (
    // CHANGED: Removed 'min-h-screen' and 'bg-black' (let the parent handle bg)
    // Added 'h-auto' so it fits the content size only
    // Added 'py-4' for a little breathing room
    <div className="h-auto w-full flex items-center justify-center py-4 overflow-hidden">
      <InfiniteMovingCards items={eventContent} direction="left" speed="slow" />
    </div>
  );
}