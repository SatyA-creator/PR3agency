import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const mediaItems = [
  { alt: "Swarm Network Twitter profile", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2016.33.16.png" },
  { alt: "Agents Unplugged live event", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2016.33.42.png" },
  { alt: "Blockchain and quantum technology", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.59.56.png" },
  { alt: "Wired quantum apocalypse", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2015.03.09.png" },
  { alt: "Nokia quantum internet", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2015.02.31.png" },
  { alt: "Crypto traders Binance", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.57.37.png" },
  { alt: "Binance traders Financial Times", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.57.11.png" },
  { alt: "Quranium testnet launch", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2015.01.16.png" },
  { alt: "Quranium mainnet Quantum Insider", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2015.00.16.png" },
  { alt: "UBS bankers crypto-bank", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.58.04.png" },
  { alt: "Media coverage", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.57.27.png" },
  { alt: "Media coverage", src: "https://img1.wsimg.com/isteam/ip/f1002561-3d42-40f9-9ebe-f6606a14bfce/Screenshot%202025-12-12%20at%2014.58.11.png" },
];

const ITEMS_PER_SLIDE = 6;
const SLIDE_DURATION = 7000;

export function MediaFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = Math.ceil(mediaItems.length / ITEMS_PER_SLIDE);
  const currentSlide = Math.floor(activeIndex / ITEMS_PER_SLIDE);

  // AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % mediaItems.length);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  const visibleThumbnails = mediaItems.slice(
    currentSlide * ITEMS_PER_SLIDE,
    currentSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  );

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Creating Noise <span className="gradient-text">Where It Matters</span>
          </h2>
        </div>

       {/* MAIN IMAGE */}
<div className="w-full h-full object-contain bg-muted/20">
  <AnimatePresence mode="wait">
    <motion.img
      key={activeIndex}
      src={mediaItems[activeIndex].src}
      alt={mediaItems[activeIndex].alt}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full object-cover"
    />
  </AnimatePresence>
</div>


        {/* THUMBNAILS */}
        <div className="relative h-[100px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center gap-4 absolute inset-0"
            >
              {visibleThumbnails.map((item, index) => {
                const realIndex = currentSlide * ITEMS_PER_SLIDE + index;
                const isActive = realIndex === activeIndex;

                return (
                  <button
                    key={realIndex}
                    onClick={() => setActiveIndex(realIndex)}
                    className={`rounded-lg overflow-hidden border-2 transition
                      ${isActive ? "border-white" : "border-transparent opacity-70 hover:opacity-100"}
                    `}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-20 h-20 object-cover"
                    />
                  </button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
