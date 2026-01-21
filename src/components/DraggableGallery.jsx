import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// ✅ Import local images
import Tyler from "../assets/tyler.jpg";
import Narrator from "../assets/narrator.jpg";
import Iceland from "../assets/iceland.jpg";
import Japan from "../assets/japan.jpg";
import Norway from "../assets/norway.jpg";
import NewZealand from "../assets/newzealand.jpg";
import Canada from "../assets/canada.jpg";

// --- 1. Container Component ---
const DraggableCardContainer = ({ children, className }) => {
  return (
    <div
      className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

// --- 2. Draggable Card Component ---
const DraggableCardBody = ({ children, className }) => {
  const ref = useRef(null);
  const [zIndex, setZIndex] = useState(0);

  return (
    <motion.div
      ref={ref}
      drag
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      dragConstraints={{
        left: -200,
        right: 200,
        top: -200,
        bottom: 200,
      }}
      onDragStart={() => setZIndex(50)}
      onDragEnd={() => setZIndex(0)}
      className={className}
      style={{ zIndex }}
    >
      {children}
    </motion.div>
  );
};

// --- 3. Main Gallery Component ---
export default function DraggableGallery() {
  const items = [
    {
      title: "Bollywood Day",
      image: Tyler,
      className: "absolute top-10 left-[10%] md:left-[20%] rotate-[-5deg]",
    },
    {
      title: "Recrave Shoot",
      image: Narrator,
      className: "absolute top-40 left-[15%] md:left-[25%] rotate-[-7deg]",
    },
    {
      title: "Cogni Verse",
      image: Iceland,
      className: "absolute top-5 left-[30%] md:left-[40%] rotate-[8deg]",
    },
    {
      title: "Freshers Intro",
      image: Japan,
      className: "absolute top-32 left-[45%] md:left-[55%] rotate-[10deg]",
    },
    
    {
      title: "Wave Craze",
      image: NewZealand,
      className: "absolute top-24 left-[35%] md:left-[45%] rotate-[-7deg]",
    },
    {
      title: "WaveCraze",
      image: Norway,
      className: "absolute top-20 right-[10%] md:right-[15%] rotate-[2deg]",
    },
    
  ];

  return (
    <section className="relative w-full py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Header */}
      <h2 className="text-center text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f3ff] to-[#a855f7] mb-12 relative z-20">
        Gallery
      </h2>

      <DraggableCardContainer className="h-[600px] w-full max-w-7xl mx-auto">
        {/* Background Text */}
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl md:text-6xl font-black text-neutral-800 pointer-events-none select-none z-0 opacity-50">
          NITROZ VIBES
        </p>

        {items.map((item, index) => (
          <DraggableCardBody
            key={index}
            className={`${item.className} cursor-grab active:cursor-grabbing`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f3ff] to-[#a855f7] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200" />
              
              <div className="relative bg-[#1a1a2e] p-2 rounded-xl border border-white/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none h-64 w-64 md:h-80 md:w-80 object-cover rounded-lg"
                />
                <h3 className="mt-3 text-center text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}
