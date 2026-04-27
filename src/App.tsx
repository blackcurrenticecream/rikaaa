import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Music, Music2, ChevronDown, Sparkles, Heart } from 'lucide-react';
import Starfield from './components/Starfield';
import RelationshipTimer from './components/RelationshipTimer';
import Scrapbook from './components/Scrapbook';
import AspirationsGrid from './components/AspirationsGrid';
import SecretArchive from './components/SecretArchive';
import VideoPlayer from './components/VideoPlayer';
import IntroOverlay from './components/IntroOverlay';
import FloatingElements from './components/FloatingElements';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { scrollYProgress } = useScroll();
  
  // Shifting Nebula Background
  const gradientPos = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundGradient = useTransform(scrollYProgress, [0, 1], [
    `radial-gradient(circle at 20% 30%, rgba(188, 19, 254, 0.15) 0%, transparent 70%)`,
    `radial-gradient(circle at 80% 70%, rgba(255, 0, 255, 0.1) 0%, transparent 70%)`
  ]);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/i_think_they_call_this_love.mp3');
      audioRef.current.loop = true;
    }
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div ref={containerRef} className="relative min-h-screen bg-jayrika-purple-dark text-white selection:bg-jayrika-neon-purple/30 selection:text-white overflow-x-hidden">
      <IntroOverlay />
      <Starfield />
      <FloatingElements />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
        <svg className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] text-jayrika-neon-purple" fill="currentColor" viewBox="0 0 200 200">
          <path d="M100 0 C120 50 180 50 180 100 C180 150 120 150 100 200 C80 150 20 150 20 100 C20 50 80 50 100 0" />
        </svg>
      </div>

      {/* Dynamic Nebula Overlay (Refined for light theme) */}
      <motion.div 
        style={{ 
          background: backgroundGradient
        }}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Audio Toggle */}
      <button 
        onClick={toggleAudio}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-[60] p-3 md:p-4 rounded-full bg-jayrika-purple-mid shadow-[0_0_20px_rgba(188,19,254,0.3)] hover:scale-110 transition-transform active:scale-95 group border border-jayrika-neon-purple/20"
      >
        {isPlaying ? <Music className="w-5 h-5 md:w-6 md:h-6 text-jayrika-neon-cyan animate-pulse" /> : <Music2 className="w-5 h-5 md:w-6 md:h-6 text-white/20" />}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-jayrika-neon-purple text-white px-3 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
          {isPlaying ? "Click to Pause" : "Play a Song"}
        </span>
      </button>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div className="mb-4">
            <h1 
              style={{ borderColor: '#2e260a' }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-header italic tracking-tighter text-white drop-shadow-[0_0_20px_rgba(188,19,254,0.8)]"
            >
              Jayrika
            </h1>
          </motion.div>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-6">
            <div className="h-[1px] w-8 md:w-12 bg-jayrika-neon-purple/30" />
            <p 
              style={{ borderColor: '#786831' }}
              className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-body font-bold text-jayrika-neon-cyan drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]"
            >
              Lets Bloom Together
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-jayrika-neon-purple/30" />
          </div>
          <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-[0.3em] max-w-lg mx-auto font-bold px-4 leading-relaxed">
            Established • April 26, 2026 • Digital Pings to Soulmates
          </p>
        </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-jayrika-neon-purple drop-shadow-[0_0_10px_rgba(188,19,254,0.8)] cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
      </header>

      <main className="relative z-10 space-y-32 md:space-y-64 pb-32">
        
        {/* Act I: The Digital Genesis */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-jayrika-neon-purple/10 text-jayrika-neon-cyan border border-jayrika-neon-purple/20 shadow-[0_0_15px_rgba(0,255,255,0.2)]">
              <Sparkles className="w-4 h-4" />
              <span className="uppercase tracking-widest text-[10px] font-bold">Chapter One: The Genesis</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-header italic text-white leading-tight">
              A journey from pings to <span className="text-jayrika-neon-purple drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]">purpose.</span>
            </h2>
            <div className="space-y-6 text-xl text-white/80 leading-relaxed font-header italic pb-8 border-b border-dashed border-jayrika-neon-purple/30">
              <p>
                "Who knew a 2:00 AM study timer would lead me to you? No school hallways, just digital pings that became my favorite sound."
              </p>
            </div>
            <div className="pt-4">
              <span className="text-[10px] uppercase font-bold text-jayrika-neon-cyan tracking-widest block mb-1">The Constant in Chaos</span>
              <p className="text-sm leading-relaxed text-white/50 max-w-md font-body uppercase tracking-wider">
                From YPT study buddies to waking each other up for early morning sessions. You weren't just a bestie; you were the steady pulse in my digital world.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(188,19,254,0.15)] p-2 bg-jayrika-purple-mid/40 backdrop-blur-sm"
          >
            <VideoPlayer 
              src="/holi_moment.mp4"
              poster="/regenerated_image_1777321414012.png"
              caption="sweet holi moment!"
            />
          </motion.div>
        </section>

        {/* Act II: The Bestie Phase */}
        <section className="bg-jayrika-purple-mid/30 text-white py-32 md:py-64 relative overflow-hidden">
          {/* Subtle Decorative Circle */}
          <svg className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] text-jayrika-neon-purple opacity-5" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="10 5" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="80" />
          </svg>

          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-12"
            >
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-jayrika-neon-cyan">The Interlude</span>
              <h2 className="text-6xl md:text-8xl font-header italic tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">Our Little World</h2>
              <p className="text-xl md:text-2xl font-header italic leading-relaxed text-white/60 max-w-2xl mx-auto">
                "The phase of waking each other up for early morning sessions, sharing every minor detail of the day, and loving everything about you without even realizing it."
              </p>
            </motion.div>
            <Scrapbook />
          </div>
        </section>

        {/* Act III: The Realization */}
        <section className="max-w-6xl mx-auto px-6 text-center space-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-jayrika-neon-cyan">Relationship Metric</span>
            <h2 className="text-5xl md:text-8xl font-header italic text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">The Pulse</h2>
          </motion.div>
          
          <RelationshipTimer />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-xl md:text-2xl text-white/40 italic font-header border-t border-jayrika-neon-purple/20 pt-12 relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-jayrika-purple-dark px-6">
              <Heart className="w-5 h-5 text-jayrika-neon-pink fill-current drop-shadow-[0_0_10px_rgba(255,0,255,0.8)]" />
            </div>
            "It was April 26, 2026, at exactly 11:11 AM... the moment I unraveled the truth and well, the feelings just leaked out. A digital confession that changed everything forever."
          </motion.div>
        </section>

        {/* Act IV: The Forever Horizon */}
        <section className="space-y-12 max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end border-b border-jayrika-neon-purple/30 pb-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-jayrika-neon-cyan">Future Quests</span>
              <h2 className="text-5xl font-header italic text-white mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">The Forever Horizon</h2>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="w-12 h-[1px] bg-jayrika-neon-purple mt-4 shadow-[0_0_8px_rgba(188,19,254,0.8)]" />
            </div>
          </div>
          <AspirationsGrid />
        </section>

        {/* Act V: Secret Archive */}
        <section className="relative py-20 bg-jayrika-purple-mid/20 backdrop-blur-sm border-y border-jayrika-neon-purple/10">
          <SecretArchive />
        </section>

      </main>

      <footer className="py-20 text-center border-t border-jayrika-neon-purple/20 relative z-10">
        <div className="flex flex-col items-center gap-6">
          <div className="text-white text-4xl font-header italic drop-shadow-[0_0_10px_rgba(188,19,254,0.6)]">J + G</div>
          <div className="text-white/40 space-y-2 uppercase tracking-[0.4em] text-[10px] font-bold">
            <p>A Journey for Eternity</p>
            <p>Jayesh Sharma • Gaurika Tiwari <span className="text-jayrika-neon-pink/60">(soon to be sharma)</span></p>
          </div>
          <div className="h-12 w-[1px] bg-jayrika-neon-purple/30" />
          <p className="text-jayrika-neon-cyan/40 text-[9px] tracking-[0.5em] uppercase font-bold">Established 04.26.2026 | 11:11 AM</p>
        </div>
      </footer>
    </div>
  );
}
