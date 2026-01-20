import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Clock, MapPin, X } from "lucide-react";

// --- Internal Hook ---
function useOutsideClick(ref, callback) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      callback(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}

export default function EventsCards() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      {/* 1. Dark Overlay */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 w-full h-full"
          />
        )}
      </AnimatePresence>

      {/* 2. Expanded Card Modal */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute top-4 right-4 lg:hidden bg-white rounded-full h-8 w-8 flex items-center justify-center z-[110] cursor-pointer"
              onClick={() => setActive(null)}
            >
              <X size={18} className="text-black" />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-[#1a1a2e] border border-[#00f3ff]/30 sm:rounded-3xl rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,243,255,0.2)]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="flex-1 overflow-y-auto">
                <div className="flex justify-between items-start p-6">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-white mb-1"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-[#00f3ff] text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-6 py-2 text-sm rounded-full font-bold bg-[#00f3ff] text-black hover:bg-white transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="px-6 pb-6 pt-0 relative">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-300 text-sm md:text-base flex flex-col gap-4"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* 3. The Grid List */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-white/5 border border-white/10 rounded-2xl cursor-pointer group hover:bg-white/10 hover:border-[#00f3ff]/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.15)] transition-all"
          >
            <div className="flex gap-4 flex-col w-full h-full">
              <motion.div
                layoutId={`image-${card.title}-${id}`}
                className="w-full"
              >
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-52 w-full rounded-xl object-cover object-top"
                />
              </motion.div>
              <div className="flex flex-col justify-between flex-1 mt-2">
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-bold text-white text-xl text-center group-hover:text-[#00f3ff] transition-colors"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-gray-400 text-sm mt-1 text-center"
                  >
                    {card.description}
                  </motion.p>
                </div>
                <motion.button
                  layoutId={`button-${card.title}-${id}`}
                  className="px-4 py-2 mt-4 text-sm rounded-full font-bold bg-white/10 text-white w-full group-hover:bg-[#00f3ff] group-hover:text-black transition-colors"
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

// --- DATA ---
const events = [
  {
    title: "Open Mic Night",
    description: "Poetry, Music & Storytelling",
    src: "https://images.unsplash.com/photo-1595131838531-1e948c5417fa?q=80&w=800&auto=format&fit=crop",
    ctaText: "Register Now",
    ctaLink: "/register",
    content: () => (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Calendar size={16} className="text-[#00f3ff]" /> Mar 15
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Clock size={16} className="text-[#00f3ff]" /> 6:00 PM
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MapPin size={16} className="text-[#00f3ff]" /> SAC Amphitheatre
          </div>
        </div>
        <p className="leading-relaxed">
          The stage is set, the mic is open.{" "}
          <strong className="text-white">Open Mic Night</strong> is your chance
          to showcase your hidden talents.
        </p>
        <p className="leading-relaxed">
          Join us for an evening of raw talent and artistic expression under the
          stars.
        </p>
      </div>
    ),
  },
  {
    title: "RJ Hunt 2024",
    description: "The Search for the Next Voice",
    src: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=800&auto=format&fit=crop",
    ctaText: "Audition Now",
    ctaLink: "/register",
    content: () => (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Calendar size={16} className="text-[#ff006e]" /> Apr 02
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Clock size={16} className="text-[#ff006e]" /> 10:00 AM
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MapPin size={16} className="text-[#ff006e]" /> Main Auditorium
          </div>
        </div>
        <p className="leading-relaxed">
          Do you have the wit, the charm, and the voice to captivate thousands?{" "}
          <strong>Radio Nitroz</strong> presents the annual{" "}
          <strong>RJ Hunt</strong>.
        </p>
        <p className="leading-relaxed">
          We are looking for charismatic individuals who can rule the airwaves.
        </p>
      </div>
    ),
  },
  {
    title: "Neon Musical Eve",
    description: "Live Concert & DJ Night",
    src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop",
    ctaText: "Get Pass",
    ctaLink: "/register",
    content: () => (
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-3 bg-white/5 p-3 rounded-lg border border-white/10">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Calendar size={16} className="text-[#a855f7]" /> Apr 20
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Clock size={16} className="text-[#a855f7]" /> 7:00 PM
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <MapPin size={16} className="text-[#a855f7]" /> OAT
          </div>
        </div>
        <p className="leading-relaxed">
          Get ready to lose yourself in the music.{" "}
          <strong>Neon Musical Eve</strong> brings you the best campus bands
          followed by an electrifying DJ set.
        </p>
        <p className="leading-relaxed">
          Wear white or neon colors to glow in the dark!
        </p>
      </div>
    ),
  },
];
