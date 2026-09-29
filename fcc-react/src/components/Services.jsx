import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    num: '01', title: 'Social Media',           tagline: 'Always on. Never meh.',
    tags: ['Social strategy', 'Content calendars', 'Platform-first creative', 'Community'],
    emoji: '📱',
  },
  {
    num: '02', title: 'Creative Campaigns',     tagline: 'Big idea energy.',
    tags: ['Campaign concepts', 'Digital creative', 'Integrated campaigns', 'Launches'],
    emoji: '💡',
  },
  {
    num: '03', title: 'Brand & Digital Strategy', tagline: 'Before we post, we plot.',
    tags: ['Brand strategy', 'Consumer insights', 'Communication', 'Digital strategy'],
    emoji: '🎯',
  },
  {
    num: '04', title: 'Content & Production',   tagline: 'Shoot. Edit. Post. Repeat.',
    tags: ['Reels', 'Films', 'Photography', 'CGI', 'AI-led content'],
    emoji: '🎬',
  },
  {
    num: '05', title: 'Influencer Marketing',   tagline: 'Putting influence to work.',
    tags: ['Creator strategy', 'Collaborations', 'Campaigns', 'Amplification'],
    emoji: '✨',
  },
  {
    num: '06', title: 'E-Commerce',             tagline: 'Add creativity to cart.',
    tags: ['PDP', 'A+ Content', 'Marketplace creatives', 'Performance assets'],
    emoji: '🛒',
  },
];

function ServiceCard({ svc, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.07, ease: [0.16,1,0.3,1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="service-card noise-card group relative border border-white/10 p-10 cursor-none
        bg-[#080808] overflow-hidden">

      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-chalk"
        initial={{ width: '0%' }}
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.45, ease: [0.16,1,0.3,1] }}
      />

      {/* BG emoji (decorative) */}
      <div className="absolute -right-4 -bottom-4 text-[80px] opacity-[0.04] select-none
        pointer-events-none group-hover:opacity-[0.07] transition-opacity duration-500
        group-hover:scale-110 transform origin-bottom-right">
        {svc.emoji}
      </div>

      {/* Number */}
      <div className="service-num text-[0.6rem] font-bold tracking-widest text-white/20 mb-6">
        {svc.num}
      </div>

      <h3 className="text-[1.4rem] font-bold tracking-tight mb-2 leading-tight">
        {svc.title}
      </h3>
      <p className="text-smoke text-sm italic mb-6">{svc.tagline}</p>

      <ul className="space-y-2 mb-8">
        {svc.tags.map(t => (
          <li key={t} className="text-[0.78rem] text-ash/70 flex items-center gap-2">
            <span className="w-4 h-px bg-smoke/40 inline-block" />
            {t}
          </li>
        ))}
      </ul>

      {/* Placeholder visual */}
      <div className="w-full aspect-video bg-[#0f0f0f] border border-white/8 flex items-center
        justify-center relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <span className="text-white/10 text-3xl relative z-10">◈</span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="services" className="py-[120px] border-b border-white/10 bg-[#050505]">
      <div className="max-w-[1360px] mx-auto px-8 md:px-12">

        {/* Header */}
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-4">
              WHAT'S BREWING?
            </p>
            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[1.02] tracking-tight">
              Pick your<br />
              <em className="font-extralight italic">blend.</em>
            </h2>
          </div>

          {/* Fun badge */}
          <div className="w-28 h-28 rounded-full border border-white/15 flex items-center
            justify-center animate-spin-slow shrink-0 self-start md:self-auto">
            <span className="text-[0.4rem] tracking-[0.16em] text-white/25 uppercase text-center leading-loose px-2">
              SIX BLENDS · SIX BLENDS · SIX BLENDS ·
            </span>
          </div>
        </motion.div>

        {/* Bento-style grid */}
        <div className="bento-grid mb-20">
          {services.map((s, i) => <ServiceCard key={s.num} svc={s} index={i} />)}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}>
            <a href="#contact"
              onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior:'smooth' }); }}
              className="mag-btn border border-chalk text-chalk text-[0.78rem] font-black
                tracking-widest uppercase px-12 py-5 cursor-none">
              <span>LET'S GET BREWING</span>
              <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
