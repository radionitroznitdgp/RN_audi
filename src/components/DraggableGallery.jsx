import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

// --- 1. The Container Component ---
const DraggableCardContainer = ({ children, className }) => {
  return (
    <div
      className={`relative flex min-h-screen w-full items-center justify-center overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

// --- 2. The Draggable Card Component ---
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
      onDragStart={() => setZIndex(50)} // Bring to front when dragging
      onDragEnd={() => setZIndex(0)}
      className={className}
      style={{ zIndex }}
    >
      {children}
    </motion.div>
  );
};

// --- 3. The Main Gallery Component ---
export default function DraggableGallery() {
  const items = [
    {
      title: "Tyler Durden",
      image:
        "https://images.unsplash.com/photo-1732310216648-603c0255c000?q=80&w=3540&auto=format&fit=crop",
      className: "absolute top-10 left-[10%] md:left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image:
        "https://images.unsplash.com/photo-1697909623564-3dae17f6c20b?q=80&w=2667&auto=format&fit=crop",
      className: "absolute top-40 left-[15%] md:left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop",
      className: "absolute top-5 left-[30%] md:left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop",
      className: "absolute top-32 left-[45%] md:left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop",
      className: "absolute top-20 right-[10%] md:right-[15%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop",
      className: "absolute top-24 left-[35%] md:left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop",
      className: "absolute top-8 left-[25%] md:left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Section Header */}
      <h2 className="text-center text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f3ff] to-[#a855f7] mb-12 relative z-20">
        Gallery
      </h2>

      <DraggableCardContainer className="h-[600px] w-full max-w-7xl mx-auto">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl md:text-6xl font-black text-neutral-800 pointer-events-none select-none z-0 opacity-50">
          NITROZ VIBES
        </p>

        {items.map((item, index) => (
          <DraggableCardBody
            key={index}
            className={`${item.className} cursor-grab active:cursor-grabbing`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00f3ff] to-[#a855f7] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
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
