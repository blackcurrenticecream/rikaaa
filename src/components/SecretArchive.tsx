import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Lock, Heart, Stars } from 'lucide-react';

const LETTER_TEXT = "Idk what to say love you so so much endlessly forever ever. Hope you stay by my side forever always like idk i just want to be with you lmao. Couldn't even confess properly like i intended but whvrrrrrrrrrrrrrr i felt too much happy knowing the feeling was mutual. Cant explain legit like you talked about me with your friends lol. This is so funny you dont knoow like not funny just so soo idk. Loveeeeeeee youu so soom muchh thanks for everything gaurika. you even being you is a blessing lol, idk what to say more. ahh lets just meettttttttt somedayy soonishlly and well you said doing smtg on meetup lol! Excited asf XD. Mwuahhh hugss kisses everythingg lovee yalylllyyl i thought like tbh confession itni sochi thi ye wo lol but it kinda just became smtg idk like it just happened at the moment. thinking back this is like such a big step in life and i genuinely cherish you sm. i still cant believe it tbh. I'm really grateful to have youuuuuuuuu gaurika, idk what im saying rn but thankyouu. muwahh lyysmm lol thankyou for having me as your bf. This is smtg new for both of us, lets take it tooo highh to the PEAKKKKKK!! and kind of about my texts like which might get ltrly kind of really bold lol idk i tbh enjoyy ahaa, hoping for you as well. Andd mhmm idk i feel like admiring you rn idk i havent seen the pretty face of yours since so long, the last time it was with the video along with your brother. I wanted to see you today too tbh but ahh bheji hi ni tune toh, burii. Next time thouuuuu idkk pta ni lmaoo, lemme get my phone then dekh tu beta. and idk like ahh i feel like wanting to talk to you rn ahhhhhhhhhhhh fuckk you thou for making me worried over calls, you just wait till we meet up then im gonna showw you. Lmaooo anndd mhmm fukkk tu sorhi hogi kese soti hogi thou kumbkharan ki trah lmaoo, wish i couldd have the glimpse but not so soon ig tskkk. Soonishhhh ahhhh, like everything will depend on my result and performance with next one year and tbh for everything i have to pull it off eitherways even to be w you ehe. And about you Amennnnnnnn I hope so bilkul acha sab jaye tera abhi hi hojaye you should be happyy happyyyyy and mhmm bold hojaye ahhhhh 3 may baad toh tu hi hogi romantic rikaa me bhagraa lol. And mhmmhmm post relationship confession hi samjh le tbh idk kya bolra but whvrr ahhhhhh lylylyll bolne ka man krrrrrrrra kitna idkk samne hoti face to face toh- nvm. but mhmmhm idkk i want to talkk to you ahhhhhhhhhhhh listen your voice lol. Tskk me hi akela itna kinda pagal hu kyaaaaa ig. Like dont mind tbh and tu bhi zada mysterious ni bnio bhoot pitegi lol. alrr then babe thats what i'll say, im writing this at 4am midnight lmaoo. took some time to make overall thing too but aha had to do efforts somewhere idk. dont mindd and letsssssssss goo, together till the very end!💗 muwahh so manyy hugss kisses everythingg soosoo lovee foreverrrrrrrrr infinity timessssssss!!";
export default function SecretArchive() {
  const [code, setCode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleUnlock = () => {
    // Password is now "Love" (case sensitive or insensitive? User said "Love" but usually these are case insensitive in simple apps, I'll make it lower to be safe or strict as requested. User said "Love", I'll check for "Love")
    if (code.trim().toLowerCase() === 'love') {
      setIsUnlocked(true);
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#fbcfe8', '#ec4899', '#fdf2f8', '#ff0000']
      });
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  useEffect(() => {
    if (isUnlocked && typedText.length < LETTER_TEXT.length) {
      const timeout = setTimeout(() => {
        setTypedText(LETTER_TEXT.slice(0, typedText.length + 1));
      }, 35); // Adjust typing speed here
      return () => clearTimeout(timeout);
    } else if (isUnlocked && typedText.length === LETTER_TEXT.length) {
      setIsTypingComplete(true);
    }
  }, [isUnlocked, typedText]);

  // Auto scroll to bottom during typing
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [typedText]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 relative z-10 font-sans">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="lock"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#8b5e3c]/10 blur-xl -z-10 rounded-[2rem] opacity-40 animate-pulse" />
            
            <div className="bg-[#fdf9f3] p-8 md:p-14 rounded-[2rem] text-center shadow-[0_20px_60px_rgba(45,34,16,0.25)] border-[12px] border-[#f4ece1] relative overflow-hidden group">
              {/* Vintage Paper Texture */}
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
              
              <div className="flex justify-center mb-10">
                <motion.div 
                  animate={{ 
                    rotate: error ? [0, -10, 10, -10, 10, 0] : 0,
                    scale: error ? [1, 1.1, 1] : 1
                  }}
                  className="p-6 rounded-full bg-[#f4ece1] text-[#8b5e3c] shadow-md border-2 border-[#d9c5a3]/30"
                >
                  <Lock className="w-10 h-10" />
                </motion.div>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-header italic mb-3 text-[#4a3728] tracking-tight">The Eternal Fragment</h2>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.5em] text-[#8b5e3c]/70 mb-10 font-bold flex items-center justify-center gap-3">
                <Stars className="w-3 h-3 text-[#d4af37]" /> SEALED WITH A MEMORY <Stars className="w-3 h-3 text-[#d4af37]" />
              </p>

            <div className="flex flex-col items-center gap-8 relative z-10 w-full">
              <div className="relative group w-full max-w-sm">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                  className={`bg-white/95 border-2 ${
                    error ? 'border-rose-500' : 'border-[#d4af37]/20 group-hover:border-[#d4af37]/40'
                  } rounded-2xl px-6 py-5 text-xl text-center w-full text-[#4a3728] font-body focus:outline-none focus:ring-4 focus:ring-[#d4af37]/10 transition-all placeholder-[#d9c5a3]/50 shadow-sm`}
                  placeholder="The secret word..."
                />
                <div className="absolute -bottom-10 left-0 right-0 overflow-hidden h-6">
                  {error && (
                    <motion.p 
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-rose-600 text-[9px] font-bold tracking-[0.2em] uppercase text-center"
                    >
                      That's not it, love...
                    </motion.p>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#3a2b1f" }}
                whileTap={{ scale: 0.98 }}
                onClick={handleUnlock}
                className="px-12 py-5 bg-[#4a3728] text-[#f4ece1] text-xs font-black rounded-2xl transition-all shadow-lg uppercase tracking-[0.3em] w-full max-w-sm flex items-center justify-center gap-3 group"
              >
                Reveal Memory <Heart className="w-3 h-3 group-hover:scale-125 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative"
          >
            {/* Mixed Neon Mesh Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-jayrika-neon-purple/20 via-jayrika-neon-pink/10 to-jayrika-neon-cyan/20 blur-3xl -z-10 rounded-full scale-125 opacity-60 animate-pulse" />
            
            <div className="bg-[#fdf9f3] p-8 md:p-16 rounded-[2rem] border-[12px] border-[#f4ece1] relative overflow-hidden min-h-[700px] flex flex-col group shadow-[0_30px_100px_rgba(45,34,16,0.3)]">
              {/* Vintage Paper Texture */}
              <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
              
              <div className="relative z-10 flex-grow" ref={scrollRef}>
                <header className="mb-12 border-b border-[#d9c5a3]/30 pb-8 flex justify-between items-end">
                  <div>
                    <h3 className="font-handwriting text-4xl text-[#4a3728]">To my dearest,</h3>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#d4af37] to-[#8b5e3c] rounded-full mt-3 shadow-sm" />
                  </div>
                  <div className="text-[10px] font-bold text-[#8b5e3c]/40 tracking-[0.5em] uppercase">
                    Channel: Eternal
                  </div>
                </header>

                <div className="font-letter text-3xl md:text-5xl leading-[1.6] text-[#4a3728] whitespace-pre-wrap min-h-[350px]">
                  {typedText}
                  <motion.span 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className={`inline-block w-2 lg:w-3 h-8 bg-[#8b5e3c] align-middle ml-2 ${isTypingComplete ? 'hidden' : ''}`}
                  />
                </div>

                {isTypingComplete && (
                  <motion.footer 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-20 pt-10 border-t border-[#d9c5a3]/30"
                  >
                    <p className="font-handwriting text-4xl text-[#8b5e3c]">Yours infinitely,</p>
                    <p className="font-handwriting text-5xl md:text-6xl text-[#4a3728] mt-6 underline decoration-[#d4af37]/40 underline-offset-8">Jayesh</p>
                    
                    <div className="mt-16 flex items-center gap-6">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[#8b5e3c]"
                      >
                        <Heart className="w-8 h-8 fill-current" />
                      </motion.div>
                      <div className="h-px flex-grow bg-gradient-to-r from-[#d9c5a3]/40 to-transparent" />
                      <Stars className="w-6 h-6 text-[#d4af37] animate-pulse" />
                    </div>
                  </motion.footer>
                )}
              </div>
            </div>

            {/* Vintage Floating Elements */}
            <div className="absolute -top-12 -right-12 w-28 h-28 text-[#d4af37] animate-float opacity-30 blur-[1px]">
              <Heart className="w-full h-full fill-current" />
            </div>
            <div className="absolute top-1/2 -left-16 w-16 h-16 text-[#8b5e3c] animate-float-slow opacity-15 blur-[2px]">
              <Stars className="w-full h-full" />
            </div>
            <div className="absolute -bottom-16 left-1/4 w-32 h-32 text-[#d9c5a3] animate-float-slow opacity-25 blur-[3px]">
              <Heart className="w-full h-full fill-current" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
