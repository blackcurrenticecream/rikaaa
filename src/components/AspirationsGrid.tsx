import { motion } from 'motion/react';
import { Plane, GraduationCap, Heart, Sparkles, Mountain, Music, Video, MessageCircle, TrendingUp, Loader2 } from 'lucide-react';

const QUESTS = [
  {
    title: "Traveling the World",
    description: "From Iceland's Northern lights to sunsets in Greece, exploring every corner with you.",
    icon: <Plane className="w-8 h-8" />
  },
  {
    title: "Post-NEET Era",
    description: "Conquering our medical dreams side by side. Doctors by title, partners by soul.",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    title: "Home Foundation",
    description: "Building our dream sanctuary filled with laughter, coffee, and peace.",
    icon: <Heart className="w-8 h-8" />
  },
  {
    title: "Eternal Love",
    description: "Being together always, through every high and low. Infinite and beyond.",
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    title: "Climbing Everest",
    description: "Scaling the highest peaks together, literally and figuratively.",
    icon: <Mountain className="w-8 h-8" />
  },
  {
    title: "Dancing Together",
    description: "Finding our rhythm in a crowded room or just alone in our living room.",
    icon: <Music className="w-8 h-8" />
  },
  {
    title: "Crazy Vlogs",
    description: "Capturing our chaotic and beautiful life. Making vlogs together like crazy!",
    icon: <Video className="w-8 h-8" />
  },
  {
    title: "Bold Rika Unleashed",
    description: "I'm so excited to see the bold Rika who can express herself too much!",
    icon: <MessageCircle className="w-8 h-8" />
  },
  {
    title: "Growing Together",
    description: "Evolving side by side, becoming the best versions of ourselves together.",
    icon: <TrendingUp className="w-8 h-8" />
  },
  {
    title: "More Loading...",
    description: "Our story is just beginning. Infinite possibilities still to be unraveled.",
    icon: <Loader2 className="w-8 h-8 animate-spin" />
  }
];

export default function AspirationsGrid() {
  const scrollQuests = [...QUESTS, ...QUESTS, ...QUESTS]; // Tripled for seamless loop

  return (
    <div className="py-20 overflow-hidden relative">
      {/* Edge Gradients for fading effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-jayrika-purple-dark to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-jayrika-purple-dark to-transparent z-20 pointer-events-none" />

      <motion.div 
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ 
          duration: 40, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-8 w-max px-6"
      >
        {scrollQuests.map((quest, index) => (
          <motion.div
            key={index}
            animate={{ 
              y: [0, Math.sin(index) * 10, 0],
            }}
            transition={{ 
              y: { duration: 3 + (index % 3), repeat: Infinity, ease: "easeInOut" },
            }}
            className="w-80 bg-jayrika-purple-mid/40 backdrop-blur-md p-8 rounded-3xl group border-l-4 border-jayrika-neon-purple shadow-[0_0_20px_rgba(188,19,254,0.1)] transition-all hover:-translate-y-2 relative overflow-hidden shrink-0"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-jayrika-neon-purple/5 blur-3xl -z-10 group-hover:bg-jayrika-neon-purple/10 transition-all" />
            
            <div className="mb-6 p-4 rounded-2xl bg-jayrika-neon-purple/10 text-jayrika-neon-purple group-hover:scale-110 group-hover:bg-jayrika-neon-purple/20 group-hover:shadow-[0_0_15px_rgba(188,19,254,0.5)] transition-all inline-block">
              {quest.icon}
            </div>
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold mb-2 text-jayrika-neon-cyan drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]">{quest.title}</h3>
            <p className="text-white/60 text-[11px] leading-relaxed font-body font-bold uppercase tracking-widest">{quest.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
