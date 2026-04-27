import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  caption?: string;
}

export default function VideoPlayer({ src, poster, caption }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
    setIsMuted(newVolume === 0);
  };


  return (
    <div 
      className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-black/10 group shadow-2xl"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        playsInline
        className="w-full h-full object-cover transition-all duration-700"
        onClick={togglePlay}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>

      {/* Romantic Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-jayrika-neon-purple/40 via-transparent to-transparent pointer-events-none opacity-60" />

      {/* Controls Overlay */}
      <AnimatePresence>
        {(showControls || !isPlaying) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-jayrika-purple-dark/30 backdrop-blur-[2px]"
          >
            <motion.button
              whileHover={{ scale: 1.1, shadow: "0 0 20px rgba(188,19,254,0.8)" }}
              whileActive={{ scale: 0.9 }}
              onClick={togglePlay}
              className="p-6 rounded-full bg-jayrika-purple-mid/40 backdrop-blur-md border border-jayrika-neon-purple/30 text-white shadow-[0_0_15px_rgba(188,19,254,0.4)] mb-4"
            >
              {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </motion.button>
            
            {caption && (
              <motion.p 
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                className="text-white font-header italic text-2xl drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
              >
                {caption}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom bar */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity bg-jayrika-purple-dark/60 backdrop-blur-md p-2 rounded-xl border border-white/5">
        <div className="flex items-center gap-4">
          <button onClick={togglePlay} className="text-white hover:text-jayrika-neon-cyan transition-colors">
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
          </button>
          
          <div className="flex items-center gap-2 group/volume">
            <button 
              onClick={() => {
                const newMute = !isMuted;
                setIsMuted(newMute);
                if (videoRef.current) videoRef.current.muted = newMute;
              }} 
              className="text-white/80 hover:text-white transition-colors"
            >
              {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.1" 
              value={isMuted ? 0 : volume} 
              onChange={handleVolumeChange}
              className="w-0 group-hover/volume:w-20 transition-all duration-300 accent-jayrika-neon-purple h-1 cursor-pointer"
            />
          </div>
        </div>
        
        <div className="text-[10px] uppercase tracking-widest text-jayrika-neon-cyan/60 font-bold px-2">
          Holi Moment
        </div>
      </div>
    </div>
  );
}
