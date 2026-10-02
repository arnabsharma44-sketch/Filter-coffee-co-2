import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
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
      className="relative min-h-screen flex items-center pt-[80px] overflow-hidden bg-transparent">

      {/* Background radial glow */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-brand-yellow/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Giant ghost text */}
      <div className="animate-drift absolute -right-16 bottom-0 text-[clamp(180px,26vw,380px)]
        font-serif font-black leading-none select-none pointer-events-none text-transparent opacity-20"
        style={{ WebkitTextStroke: '1.5px rgba(11,19,43,0.1)', zIndex: 0 }}>
        FCC.
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-15">
        <div className="animate-scanline absolute left-0 right-0 h-[2px] bg-gradient-to-r
          from-transparent via-black/20 to-transparent" />
      </div>

      {/* Grid lines bg */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      {/* Floating stickers with glassmorphism */}
      <Sticker delay={1.2} rotate={-12}
        className="absolute top-[20%] right-[8%] md:right-[18%]">
        <div className="glass-pill text-brand-navy text-[0.65rem] font-bold uppercase tracking-widest
          px-4 py-2.5 rounded-2xl shadow-lg border border-brand-navy/10 bg-white">
          ☕ NO COFFEE
        </div>
      </Sticker>

      <Sticker delay={1.4} rotate={8}
        className="absolute top-[32%] right-[4%] md:right-[10%]">
        <div className="glass-card text-brand-navy/80 text-[0.6rem] font-mono uppercase
          tracking-widest px-4 py-2 rounded-xl backdrop-blur-md shadow-md border border-brand-navy/10 bg-white">
          BRANDS_ADDICTIVE.exe
        </div>
      </Sticker>

      <Sticker delay={1.6} rotate={-5}
        className="absolute bottom-[25%] right-[12%] hidden md:block">
        <div className="w-24 h-24 rounded-full glass-panel flex items-center
          justify-center text-center p-2 animate-spin-slow shadow-lg border border-brand-navy/10 bg-brand-yellow/10">
          <span className="text-[0.48rem] tracking-[0.18em] text-brand-navy/80 uppercase leading-tight font-bold">
            CREATIVITY · NEVER · FILTERED ·
          </span>
        </div>
      </Sticker>

      {/* Main content */}
      <div className="relative z-10 px-8 md:px-12 max-w-[1200px] mx-auto w-full py-12">
        <motion.div variants={stagger} initial="hidden" animate="show">

          <motion.p variants={fadeUp}
            className="flex items-center gap-4 text-[0.7rem] font-sans font-bold tracking-widest2
              uppercase text-brand-navy/60 mb-6">
            <span className="w-10 h-px bg-brand-navy/30 inline-block" />
            Filter Coffee Co.
          </motion.p>

          <motion.h1 variants={fadeUp}
            className="text-[clamp(3.5rem,8.5vw,9.5rem)] font-serif font-black leading-[0.95] tracking-[-0.02em] mb-6 text-brand-navy">
            <span className="block">Espresso</span>
            <span className="block italic font-light text-brand-navy/80">Your</span>
            <span className="block relative">
              <ScrambleWord text="CREATIVITY" className="hover:text-brand-yellow cursor-none transition-colors duration-300" />
            </span>
          </motion.h1>

          <motion.div variants={fadeUp}
            className="mt-10 mb-12 space-y-2">
            <p className="text-[clamp(1rem,1.8vw,1.35rem)] font-sans tracking-tight text-brand-navy/60 font-light">
              Yes, our name is <span className="font-bold underline underline-offset-4 text-brand-navy">Filter Coffee Co.</span>
            </p>
            <p className="text-[clamp(1rem,1.8vw,1.35rem)] font-sans tracking-tight text-brand-navy/60 font-light">
              No, we don't make coffee.
            </p>
            <p className="text-[clamp(1rem,1.8vw,1.35rem)] font-sans tracking-tight text-brand-navy font-semibold">
              We make brands addictive.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Link to="/work"
              className="mag-btn bg-black text-white text-[0.75rem] font-bold
                tracking-widest uppercase px-8 py-4 cursor-none rounded-full shadow-lg transition-all duration-300">
              <span>See Our Work</span>
              <span className="ml-1">→</span>
            </Link>
            <Link to="/contact"
              className="mag-btn border border-black/20 bg-transparent text-black text-[0.75rem] font-bold tracking-widest uppercase
                px-6 py-4 rounded-full transition-colors cursor-none self-end">
              <span>GRAB A COFFEE</span>
              <span className="ml-1">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-12 right-8 md:right-12 flex flex-col items-center gap-3">
        <span className="text-[0.6rem] tracking-widest uppercase text-smoke font-semibold
          [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-px h-14 bg-gradient-to-b from-black/40 to-transparent animate-pulse2" />
      </motion.div>
    </section>
  );
}
