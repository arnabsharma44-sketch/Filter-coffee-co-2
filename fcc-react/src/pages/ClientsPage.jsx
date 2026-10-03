import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Contact from '../components/Contact';
import ScrollReveal from '../components/ScrollReveal';

const CLIENTS = Array.from({ length: 12 }, (_, i) => `Brand ${String(i+1).padStart(2,'0')}`);

function LogoGrid() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  /* 12 cards spread over 3s — each card's delay = i * (3s / 12) = i * 0.25s
     But we use a shorter individual duration so they feel snappy,
     while the stagger creates the 3s left-to-right wave effect. */
  const total = CLIENTS.length;
  const totalDuration = 3; // seconds to reveal all cards

  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {CLIENTS.map((name, i) => {
        const delay = (i / (total - 1)) * totalDuration * 0.65; // spread across ~2s, last card at 2s
        return (
          <motion.div
            key={name}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="logo-slot glass-card aspect-[3/2] flex items-center justify-center p-5 cursor-none rounded-2xl"
          >
            <span className="text-[0.68rem] font-bold tracking-widest uppercase text-brand-navy/50
              transition-all duration-300 group-hover:text-brand-navy">
              {name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function ClientsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-[140px] pb-[80px] overflow-hidden bg-transparent">
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 relative z-10">
          <div>
            <div className="flex items-center gap-4 text-[0.7rem] font-bold tracking-widest2 uppercase text-smoke mb-6">
              <span className="w-10 h-px bg-brand-navy/30 inline-block" />
              The Roster
            </div>
            <ScrollReveal
              baseOpacity={0.1} enableBlur baseRotation={3} blurStrength={4}
              textClassName="text-[clamp(3rem,7vw,7rem)] font-black leading-[0.95] tracking-[-0.04em] mb-6 text-brand-navy"
            >
              Brands we've brewed with.
            </ScrollReveal>
            <ScrollReveal
              baseOpacity={0.1} enableBlur baseRotation={0} blurStrength={2}
              textClassName="text-smoke text-lg max-w-xl leading-relaxed font-medium"
            >
              50+ brands. Countless campaigns. One shared obsession — making great work.
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-[120px] border-b border-black/10 bg-transparent relative z-10">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12">
          <LogoGrid />
        </div>
      </section>

      <Contact />
    </>
  );
}
