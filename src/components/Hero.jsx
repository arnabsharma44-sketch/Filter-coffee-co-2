import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section 
      id="home" 
      ref={container}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-[100px] pb-12 overflow-hidden bg-brand-navy"
    >
      {/* Full landscape background video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="https://res.cloudinary.com/qxtrlo6i/video/upload/v1791541205/new-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-brand-navy/30 to-brand-navy" />
      </div>

      {/* Small intro text at the top */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[100px] md:top-[120px] left-6 md:left-12 max-w-[280px] z-10"
      >
        <p className="text-[0.8rem] md:text-[0.95rem] font-sans font-medium text-brand-cream leading-snug tracking-tight">
          Creative Agency. <br/>
          We make brands a damn sight better. <br/>
          (Or in our case, addictive.)
        </p>
      </motion.div>

      {/* Massive Typography section */}
      <motion.div 
        style={{ y: y1 }}
        className="relative z-10 w-full max-w-[1600px] mx-auto mt-[10vh] md:mt-[5vh] flex flex-col items-start"
      >
        <h1 className="text-[clamp(4.5rem,14vw,18rem)] font-display font-normal leading-[0.85] text-brand-cream uppercase">
          
          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 md:gap-6"
            >
              <span>we make</span>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 md:gap-6"
            >
              {/* Inline video pill */}
              <motion.div 
                style={{ scale: scaleVideo }}
                className="w-[1.2em] h-[0.75em] rounded-full overflow-hidden relative inline-block align-middle shrink-0"
              >
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="https://res.cloudinary.com/qxtrlo6i/video/upload/v1791541217/hero-pill.mp4" type="video/mp4" />
                </video>
              </motion.div>
              <span>brands</span>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "100%" }} 
              animate={{ y: 0 }} 
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 md:gap-6"
            >
              <span>addictive.</span>
            </motion.div>
          </div>

        </h1>
      </motion.div>

      {/* Bottom CTA / Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-12 flex items-center gap-6 z-10"
      >
        <p className="text-[0.75rem] uppercase font-bold tracking-widest2 text-brand-cream/60 hidden md:block">
          Scroll to explore
        </p>
        <a href="#about" className="w-[80px] h-[80px] rounded-full bg-brand-cream text-brand-navy flex items-center justify-center group hover:bg-brand-yellow hover:text-brand-navy transition-colors duration-300">
          <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
