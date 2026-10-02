import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollFloat from './ScrollFloat';

const services = [
  {
    num: '01', title: 'Social Media',           tagline: 'Always on. Never meh.',
    tags: ['Social strategy', 'Content calendars', 'Platform-first creative', 'Community'],
    img: 'https://picsum.photos/seed/service_social/800/450'
  },
  {
    num: '02', title: 'Creative Campaigns',     tagline: 'Big idea energy.',
    tags: ['Campaign concepts', 'Digital creative', 'Integrated campaigns', 'Launches'],
    img: 'https://picsum.photos/seed/service_campaigns/800/450'
  },
  {
    num: '03', title: 'Brand & Digital Strategy', tagline: 'Before we post, we plot.',
    tags: ['Brand strategy', 'Consumer insights', 'Communication', 'Digital strategy'],
    img: 'https://picsum.photos/seed/service_brand/800/450'
  },
  {
    num: '04', title: 'Content & Production',   tagline: 'Shoot. Edit. Post. Repeat.',
    tags: ['Reels', 'Films', 'Photography', 'CGI', 'AI-led content'],
    img: 'https://picsum.photos/seed/service_content/800/450'
  },
  {
    num: '05', title: 'Influencer Marketing',   tagline: 'Putting influence to work.',
    tags: ['Creator strategy', 'Collaborations', 'Campaigns', 'Amplification'],
    img: 'https://picsum.photos/seed/service_influencer/800/450'
  },
  {
    num: '06', title: 'E-Commerce',             tagline: 'Add creativity to cart.',
    tags: ['PDP', 'A+ Content', 'Marketplace creatives', 'Performance assets'],
    img: 'https://picsum.photos/seed/service_ecomm/800/450'
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
      className="service-card glass-card noise-card group relative rounded-3xl p-8 cursor-none
        overflow-hidden flex flex-col justify-between">

      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-black"
        initial={{ width: '0%' }}
        animate={{ width: hovered ? '100%' : '0%' }}
        transition={{ duration: 0.45, ease: [0.16,1,0.3,1] }}
      />

      <div>
        {/* Number & Tag */}
        <div className="flex items-center justify-between mb-6">
          <div className="service-num text-[0.68rem] font-bold tracking-widest text-black/60 glass-pill px-3 py-1 rounded-full">
            {svc.num}
          </div>
        </div>

        <h3 className="text-[1.35rem] font-bold tracking-tight mb-2 leading-tight text-black">
          {svc.title}
        </h3>
        <p className="text-smoke text-sm italic mb-6">{svc.tagline}</p>

        <ul className="space-y-2 mb-8">
          {svc.tags.map(t => (
            <li key={t} className="text-[0.78rem] text-black/70 flex items-center gap-2 font-medium">
              <span className="w-3 h-px bg-black/30 inline-block" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <div className="w-full aspect-video rounded-xl overflow-hidden relative border border-black/10">
        <img 
          src={svc.img} 
          alt={svc.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
      </div>
    </motion.div>
  );
}

export default function Services({ hideHeader = false }) {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="services" className="py-[120px] border-b border-black/10 bg-white/10 backdrop-blur-sm relative z-10">
      <div className="max-w-[1360px] mx-auto px-8 md:px-12">

        {/* Header */}
        {!hideHeader && (
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-4">
              WHAT'S BREWING?
            </p>
            <ScrollFloat
              animationDuration={3}
              textClassName="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[1.02] tracking-tight text-black"
            >
              Pick your
            </ScrollFloat>
            <ScrollFloat
              animationDuration={3}
              textClassName="text-[clamp(2.8rem,5vw,5.5rem)] font-extralight italic text-black/70 leading-[1.02] tracking-tight"
            >
              blend.
            </ScrollFloat>
          </div>

          {/* Fun badge */}
          <div className="w-28 h-28 rounded-full glass-panel flex items-center
            justify-center animate-spin-slow shrink-0 self-start md:self-auto shadow-md">
            <span className="text-[0.42rem] tracking-[0.16em] text-black/60 uppercase text-center leading-loose px-2 font-bold">
              SIX BLENDS · SIX BLENDS · SIX BLENDS ·
            </span>
          </div>
        </motion.div>
        )}

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
            <Link to="/contact"
              className="mag-btn border border-black bg-black text-white text-[0.78rem] font-black
                tracking-widest uppercase px-12 py-5 cursor-none rounded-full shadow-lg">
              <span>LET'S GET BREWING</span>
              <span className="ml-2">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
