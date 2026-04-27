import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function RelationshipTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date('2026-04-26T11:11:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = now - startDate;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto py-12 px-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-jayrika-purple-mid/40 backdrop-blur-md border border-jayrika-neon-purple/30 shadow-[0_0_20px_rgba(188,19,254,0.15)] aspect-square flex flex-col items-center justify-center rounded-3xl p-4 md:p-6 group hover:border-jayrika-neon-purple/60 transition-all"
        >
          <span className="text-4xl sm:text-5xl md:text-7xl font-header italic text-white drop-shadow-[0_0_10px_rgba(188,19,254,0.8)] group-hover:text-jayrika-neon-cyan transition-colors">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-jayrika-neon-cyan/60 mt-2 group-hover:text-jayrika-neon-cyan transition-colors">
            {unit}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
