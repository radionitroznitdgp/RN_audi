"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Mic2, Radio, Users, Video } from "lucide-react";

// Content Array (Same as before)
const content = [
  {
    title: "Voice Hunt 2024",
    description:
      "The flagship event of Radio Nitroz. Over 500+ participants compete in rounds of RJ-ing, Storytelling, and Standup Comedy to find the next voice of the campus.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
        <Mic2 size={80} />
      </div>
    ),
  },
  {
    title: "Open Mic Night",
    description:
      "A cozy evening under the stars. Students showcase poetry, acoustic music, and raw storytelling. An unfiltered platform for pure artistic expression.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-black">
        <img
          src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop"
          className="h-full w-full object-cover opacity-80"
          alt="Open Mic"
        />
      </div>
    ),
  },
  {
    title: "RJ Wars",
    description:
      "Battle of the wits. Participants are given random high-pressure situations to host on-air. Tests humor, presence of mind, and spontaneity.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white">
        <Radio size={80} />
      </div>
    ),
  },
  {
    title: "Neon Musical Eve",
    description:
      "Get ready to lose yourself in the music. Featuring the best campus bands followed by an electrifying DJ set. Wear neon to glow in the dark!",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white bg-black">
        <img
          src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop"
          className="h-full w-full object-cover opacity-80"
          alt="Musical Eve"
        />
      </div>
    ),
  },
  {
    title: "Podcast Workshop",
    description:
      "Learn the art of audio storytelling. From recording techniques to editing software, our seniors guide you through creating your own podcast series.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white">
        <Users size={80} />
      </div>
    ),
  },
  {
    title: "Radio Drama",
    description:
      "Theater for the ears. Script, voice-act, and produce soundscapes for gripping audio plays broadcasted to the entire campus network.",
    content: (
      <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center text-white">
        <Video size={80} />
      </div>
    ),
  },
];

export default function EventStickyScroll() {
  return (
    // Added 'flex justify-center' to ensure the sticky scroll stays in the middle
    <div className="w-full max-w-6xl mx-auto py-10 px-4 flex justify-center">
      <StickyScroll content={content} />
    </div>
  );
}
