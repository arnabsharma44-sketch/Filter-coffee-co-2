import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

function useScramble(text, trigger) {
  const [display, setDisplay] = useState(text);
  const raf = useRef(null);

  useEffect(() => {
    if (!trigger) return;
    let iteration = 0;
    clearInterval(raf.current);
    raf.current = setInterval(() => {
      setDisplay(
        text.split('').map((c, i) => {
          if (c === ' ') return ' ';
          if (i < iteration) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('')
      );
      if (iteration >= text.length) clearInterval(raf.current);
      iteration += 0.5;
    }, 40);
    return () => clearInterval(raf.current);
  }, [trigger, text]);

  return display;
}

function ScrambleWord({ text, className = '' }) {
  const [hover, setHover] = useState(false);
  const scrambled = useScramble(text, hover);
  return (
    <span className={`scramble ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {scrambled}
    </span>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16,1,0.3,1] } },
};

/* Floating sticker component */
function Sticker({ children, className = '', delay = 0, rotate = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotate: rotate - 20 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ delay, duration: 0.8, ease: [0.16,1,0.3,1] }}
      className={`sticker select-none pointer-events-none ${className}`}
      style={{ animationDelay: `${delay}s` }}>
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home"
      className="relative min-h-screen flex items-center pt-[72px] overflow-hidden bg-ink">

      {/* Giant ghost text */}
      <div className="animate-drift absolute -right-16 bottom-0 text-[clamp(180px,26vw,380px)]
        font-black leading-none select-none pointer-events-none text-transparent"
        style={{ WebkitTextStroke: '1px rgba(255,255,255,0.04)', zIndex: 0 }}>
        FCC
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="animate-scanline absolute left-0 right-0 h-[2px] bg-gradient-to-r
          from-transparent via-white/10 to-transparent" />
      </div>

      {/* Grid lines bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      {/* Floating stickers */}
      <Sticker delay={1.2} rotate={-12}
        className="absolute top-[20%] right-[8%] md:right-[18%]">
        <div className="bg-chalk text-ink text-[0.6rem] font-black uppercase tracking-widest
          px-3 py-2 border-2 border-ink shadow-[4px_4px_0_#888]">
          ☕ NO COFFEE
        </div>
      </Sticker>

      <Sticker delay={1.4} rotate={8}
        className="absolute top-[32%] right-[4%] md:right-[10%]">
        <div className="border border-white/20 text-white/50 text-[0.55rem] font-mono uppercase
          tracking-widest px-3 py-1.5 backdrop-blur-sm">
          BRANDS_ADDICTIVE.exe
        </div>
      </Sticker>

      <Sticker delay={1.6} rotate={-5}
        className="absolute bottom-[25%] right-[12%] hidden md:block">
        <div className="w-20 h-20 rounded-full border border-white/15 flex items-center
          justify-content-center text-center p-2 animate-spin-slow">
          <span className="text-[0.48rem] tracking-[0.18em] text-white/30 uppercase leading-tight">
            CREATIVITY · NEVER · FILTERED ·
          </span>
        </div>
      </Sticker>

      {/* Main content */}
      <div className="relative z-10 px-8 md:px-12 max-w-[1200px] mx-auto w-full">
        <motion.div variants={stagger} initial="hidden" animate="show">

          <motion.p variants={fadeUp}
            className="flex items-center gap-4 text-[0.68rem] font-semibold tracking-widest2
              uppercase text-smoke mb-6">
            <span className="w-10 h-px bg-smoke inline-block" />
            Filter Coffee Co.
          </motion.p>

          <motion.h1 variants={fadeUp}
            className="text-[clamp(3.2rem,8.5vw,9rem)] font-black leading-[0.95] tracking-[-0.04em] mb-6">
            <span className="block">Espresso</span>
            <span className="block italic font-extralight">Your</span>
            <span className="block relative">
              <ScrambleWord text="CREATIVITY" className="hover:text-smoke cursor-none transition-colors duration-300" />
              <span className="absolute -bottom-2 left-0 w-full h-px bg-white/20" />
            </span>
          </motion.h1>

          <motion.div variants={fadeUp}
            className="mt-10 mb-12 space-y-2">
            {[
              { text: 'Yes, our name is Filter Coffee Co.', muted: true },
              { text: "No, we don't make coffee.",          muted: true },
              { text: 'We make brands addictive.',          muted: false },
            ].map(({ text, muted }) => (
              <p key={text}
                className={`text-[clamp(1rem,1.8vw,1.3rem)] tracking-tight
                  ${muted ? 'text-smoke font-light' : 'text-chalk font-semibold'}`}>
                {text}
              </p>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#work"
              onClick={e => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior:'smooth' }); }}
              className="mag-btn border border-chalk text-chalk text-[0.75rem] font-bold
                tracking-widest uppercase px-8 py-4 cursor-none">
              <span>See Our Work</span>
              <span className="ml-1">↓</span>
            </a>
            <a href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior:'smooth' }); }}
              className="text-smoke text-[0.72rem] font-medium tracking-wide border-b
                border-smoke/40 pb-0.5 hover:text-chalk hover:border-chalk transition-colors cursor-none self-end">
              or grab a coffee →
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-12 right-8 md:right-12 flex flex-col items-center gap-3">
        <span className="text-[0.58rem] tracking-widest uppercase text-smoke/50
          [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-smoke/50 to-transparent animate-pulse2" />
      </motion.div>
    </section>
  );
}
