import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CLIENTS = Array.from({ length: 12 }, (_, i) => `Brand ${String(i+1).padStart(2,'0')}`);

const stats = [
  { value: 'XX+',    label: 'Brands in the blend' },
  { value: 'XXM+',   label: 'Impressions served' },
  { value: 'XXM+',   label: 'Engagements stirred up' },
  { value: 'XXX+',   label: 'Campaigns gone live' },
  { value: 'XXXX+',  label: 'Creatives sent into the feed' },
  { value: 'XX+ YRS',label: 'Still brewing.' },
];

function LogoGrid() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  return (
    <div ref={ref} className="grid grid-cols-3 md:grid-cols-6 divide-x divide-y divide-white/8 border border-white/8">
      {CLIENTS.map((name, i) => (
        <motion.div
          key={name}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: i * 0.04, duration: 0.5 }}
          className="logo-slot aspect-[3/2] flex items-center justify-center p-5 cursor-none">
          <span className="text-[0.68rem] font-semibold tracking-widest uppercase text-white/25
            transition-all duration-300 group-hover:text-white">
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function StatCard({ value, label, index }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const isAccent = index === 5;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.65, ease: [0.16,1,0.3,1] }}
      className={`noise-card p-12 flex flex-col gap-4 border-r border-b border-white/8
        ${isAccent ? 'bg-chalk text-ink' : 'bg-[#080808] hover:bg-[#0f0f0f] transition-colors'}`}>

      <span className={`text-[clamp(2.2rem,4vw,3.6rem)] font-black tracking-tight leading-none
        ${isAccent ? 'text-ink' : 'text-chalk'}`}>
        {value}
      </span>
      <span className={`text-[0.8rem] leading-snug ${isAccent ? 'text-ink/50' : 'text-smoke'}`}>
        {label}
      </span>

      {isAccent && (
        <span className="text-[0.55rem] font-bold tracking-widest uppercase text-ink/30 mt-auto">
          ☕ EST. FCC
        </span>
      )}
    </motion.div>
  );
}

export default function About() {
  const [hRef, hInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [sRef, sInView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <>
      {/* ── ABOUT / OUR BLEND ── */}
      <section id="about" className="py-[120px] border-b border-white/10 bg-ink">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12">
          <motion.div ref={hRef}
            initial={{ opacity: 0, y: 40 }}
            animate={hInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
            <p className="text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-4">
              OUR BLEND
            </p>
            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[1.02] tracking-tight mb-6">
              From skincare shelves<br />
              <em className="font-extralight italic">to social feeds.</em>
            </h2>
            <p className="text-smoke text-lg max-w-xl leading-relaxed">
              We've partnered with brands to serve ideas that keep conversations brewing.
            </p>
          </motion.div>

          {/* Client Logo Wall */}
          <div id="clients" className="mt-20">
            <p className="text-[0.62rem] font-bold tracking-widest2 uppercase text-smoke/50 mb-6">
              OUR CLIENTS
            </p>
            <LogoGrid />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section ref={sRef} className="border-b border-white/10 bg-[#050505]">
        <div className="max-w-[1360px] mx-auto px-8 md:px-12 pt-[100px] pb-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={sInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
            className="mb-16">
            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[1.02] tracking-tight mb-4">
              Big ideas.<br />
              <em className="font-extralight italic">Bigger numbers.</em>
            </h2>
            <p className="text-smoke text-lg">
              Because good creatives get attention,<br />
              Great creatives get results.
            </p>
          </motion.div>
        </div>

        {/* Stats grid — full bleed */}
        <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-white/8">
          {stats.map((s, i) => <StatCard key={s.label} {...s} index={i} />)}
        </div>
      </section>
    </>
  );
}
