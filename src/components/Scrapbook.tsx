import { motion } from 'motion/react';

const PHOTOS = [
  { id: 1, src: "/regenerated_image_1777321644281.png", rotation: "-5deg", caption: "Our Digital Genesis" },
  { id: 2, src: "/regenerated_image_1777321418288.png", rotation: "3deg", caption: "Late Night Sessions" },
  { id: 3, src: "/regenerated_image_1777321419946.png", rotation: "-2deg", caption: "Study Buddy Days" },
  { id: 4, src: "/regenerated_image_1777321421789.png", rotation: "4deg", caption: "Bestie Phase" },
  { id: 5, src: "/regenerated_image_1777320202204.png", rotation: "-3deg", caption: "The Realization" },
  { id: 6, src: "/regenerated_image_1777322191480.png", rotation: "2deg", caption: "The Pulse" },
];

export default function Scrapbook() {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto flex flex-wrap justify-center gap-8 md:gap-20">
      {PHOTOS.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 50, scale: 0.9, rotate: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: photo.rotation
          }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, zIndex: 50, rotate: "0deg" }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-jayrika-purple-dark p-3 md:p-4 pb-10 md:pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.6)] relative border border-white/5"
        >
          <div className="w-56 h-72 md:w-64 md:h-80 overflow-hidden bg-jayrika-purple-mid">
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="absolute bottom-3 left-0 right-0 text-center font-handwriting text-white/80 text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            {photo.caption}
          </p>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-jayrika-purple-dark pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
