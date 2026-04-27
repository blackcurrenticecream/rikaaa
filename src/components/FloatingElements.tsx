import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const FLOATING_HEARTS = Array.from({ length: 15 }).map((_, i) => ({
  id: i,
  size: Math.random() * 20 + 10,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 5,
  color: i % 2 === 0 ? 'text-jayrika-neon-purple' : 'text-jayrika-neon-pink',
}));

const GLOW_DOTS = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 10 + 5,
  delay: Math.random() * 3,
}));

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden overflow-x-hidden">
      {/* Floating Hearts */}
      {FLOATING_HEARTS.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, y: '110vh', x: `${heart.x}vw` }}
          animate={{ 
            opacity: [0, 0.4, 0.4, 0], 
            y: '-10vh',
            rotate: [0, 45, -45, 0]
          }}
          transition={{ 
            duration: heart.duration, 
            delay: heart.delay, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className={`absolute ${heart.color} drop-shadow-[0_0_15px_rgba(188,19,254,0.6)]`}
        >
          <Heart size={heart.size} fill="currentColor" />
        </motion.div>
      ))}

      {/* Glowing Dots */}
      {GLOW_DOTS.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
            x: `${dot.x}vw`,
            y: `${dot.y}vh`
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bg-white/40 blur-[1px] rounded-full shadow-[0_0_20px_10px_rgba(188,19,254,0.3)]"
          style={{ width: dot.size, height: dot.size }}
        />
      ))}

      {/* Large Soft Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-jayrika-neon-purple/10 blur-[100px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-jayrika-neon-cyan/5 blur-[100px] rounded-full animate-pulse delay-1000 pointer-events-none" />
    </div>
  );
}
