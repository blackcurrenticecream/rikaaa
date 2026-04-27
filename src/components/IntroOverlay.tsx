import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function IntroOverlay() {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: 'blur(20px)',
            transition: { duration: 1.2, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] bg-jayrika-purple-dark flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-jayrika-neon-purple/20 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-jayrika-neon-pink/10 blur-[120px] rounded-full animate-pulse delay-1000" />
          </div>

          <div className="relative z-10 text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-6 inline-block"
              >
                <Heart className="w-16 h-16 text-jayrika-neon-pink fill-current drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]" />
              </motion.div>
              
              <h2 className="text-jayrika-neon-cyan text-xs uppercase tracking-[0.5em] font-bold mb-4 drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]">
                A Digital Tapestry of Souls
              </h2>
              
              <h1 className="text-5xl md:text-7xl font-header italic text-white mb-8 leading-tight">
                The Love Story of<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-jayrika-neon-purple via-white to-jayrika-neon-cyan drop-shadow-[0_0_10px_rgba(188,19,254,0.5)]">
                  Jayesh & Gaurika
                </span>
              </h1>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEnter}
                className="group relative px-10 py-4 bg-transparent text-white border border-jayrika-neon-purple/50 rounded-full text-xs font-black uppercase tracking-[0.3em] overflow-hidden"
              >
                <div className="absolute inset-0 bg-jayrika-neon-purple/20 group-hover:bg-jayrika-neon-purple/40 transition-colors" />
                <span className="relative flex items-center gap-3">
                  Unravel the Truth <Sparkles className="w-4 h-4 text-jayrika-neon-cyan" />
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Floating things */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: Math.random() * 100 + 'vw', 
                  y: Math.random() * 100 + 'vh',
                  opacity: 0 
                }}
                animate={{ 
                  opacity: [0, 0.5, 0],
                  scale: [0, 1, 0]
                }}
                transition={{ 
                  duration: Math.random() * 5 + 3,
                  delay: Math.random() * 2,
                  repeat: Infinity
                }}
                className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_8px_white]"
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
