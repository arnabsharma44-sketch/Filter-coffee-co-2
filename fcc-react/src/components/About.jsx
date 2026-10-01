import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollFloat from './ScrollFloat';
import CountUp from './CountUp';

const CLIENTS = Array.from({ length: 12 }, (_, i) => `Brand ${String(i+1).padStart(2,'0')}`);

const stats = [
  { numericValue: 50,   suffix: '+',     label: 'Brands in the blend',           separator: '' },
  { numericValue: 500,  suffix: 'M+',    label: 'Impressions served',            separator: '' },
  { numericValue: 25,   suffix: 'M+',    label: 'Engagements stirred up',        separator: '' },
  { numericValue: 1200, suffix: '+',     label: 'Campaigns gone live',           separator: ',' },
  { numericValue: 15,   suffix: 'K+',    label: 'Creatives sent into the feed',  separator: '' },
  { numericValue: 8,    suffix: '+ YRS', label: 'Still brewing.',                separator: '' },
];

function LogoGrid() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  return (
    <div ref={ref} className="grid grid-cols-3 md:grid-cols-6 gap-3">
      {CLIENTS.map((name, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.04, duration: 0.5 }}
          className="logo-slot glass-card aspect-[3/2] flex items-center justify-center p-5 cursor-none rounded-2xl">
          <span className="text-[0.68rem] font-bold tracking-widest uppercase text-black/50
            transition-all duration-300 group-hover:text-black">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function StatCard({ numericValue, suffix, separator, label, index }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const isAccent = index === 5;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.65, ease: [0.16,1,0.3,1] }}
      className={`noise-card p-10 flex flex-col gap-4 rounded-3xl border border-black/10 transition-all duration-300
        ${isAccent ? 'bg-black text-white shadow-xl' : 'glass-card text-black shadow-sm'}`}>

      <span className={`text-[clamp(2.2rem,4vw,3.6rem)] font-black tracking-tight leading-none
        ${isAccent ? 'text-white' : 'text-black'}`}>
        <CountUp
          from={0}
          to={numericValue}
          separator={separator}
          direction="up"
          duration={2.5}
          delay={1.5}
          className="inline"
        />
        {suffix}
      </span>
      <span className={`text-[0.85rem] font-medium leading-snug ${isAccent ? 'text-white/70' : 'text-smoke'}`}>
        {label}
      </span>

      {isAccent && (
        <span className="text-[0.58rem] font-bold tracking-widest uppercase text-white/50 mt-auto">
          EST. FCC
        </span>
      )}
    </motion.div>
  );
}

export default function About({ hideHeader = false }) {
  const [hRef, hInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [sRef, sInView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <>
      {/* ── ABOUT / OUR BLEND ── */}
      <section id="about" className="py-[120px] border-b border-black/10 bg-white/50 relative z-10">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12">
          {!hideHeader && (
          <motion.div ref={hRef}
            initial={{ opacity: 0, y: 40 }}
            animate={hInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
            <p className="text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-4">
              OUR BLEND
            </p>
            <ScrollFloat
              animationDuration={3}
              textClassName="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[1.02] tracking-tight text-black mb-6"
            >
              From skincare shelves
            </ScrollFloat>
            <ScrollFloat
              animationDuration={3}
              textClassName="text-[clamp(2.8rem,5vw,5.5rem)] font-extralight italic text-black/70 leading-[1.02] tracking-tight mb-6"
            >
              to social feeds.
            </ScrollFloat>
            <p className="text-smoke text-lg max-w-xl leading-relaxed font-medium">
              We've partnered with brands to serve ideas that keep conversations brewing.
            </p>
          </motion.div>
          )}

          {/* Client Logo Wall */}
          <div id="clients" className="mt-20">
            <p className="text-[0.65rem] font-bold tracking-widest2 uppercase text-smoke mb-6">
              OUR CLIENTS
            </p>
            <LogoGrid />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={sRef} className="py-[120px] border-b border-black/10 bg-white/70 relative z-10">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={sInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
            <ScrollFloat
              animationDuration={3}
              textClassName="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[1.02] tracking-tight text-black mb-4"
            >
              Big ideas.
            </ScrollFloat>
            <ScrollFloat
              animationDuration={3}
              textClassName="text-[clamp(2.8rem,5vw,5.5rem)] font-extralight italic text-black/70 leading-[1.02] tracking-tight mb-4"
            >
              Bigger numbers.
            </ScrollFloat>
            <p className="text-smoke text-lg font-medium">
              Because good creatives get attention,<br />
              Great creatives get results.
            </p>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((s, i) => <StatCard key={s.label} {...s} index={i} />)}
        </div>
      </section>
    </>
  );
}
