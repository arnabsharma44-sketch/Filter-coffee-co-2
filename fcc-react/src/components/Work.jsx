import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const works = [
  { tag: 'Campaign',   label: 'Brand Story',          cls: 'span2' },
  { tag: 'Social',     label: 'Feed-First Creative',   cls: '' },
  { tag: 'Branding',   label: 'Visual Identity',       cls: 'span-row2' },
  { tag: 'Influencer', label: 'Creator Campaign',      cls: '' },
  { tag: 'E-Commerce', label: 'Product Listing',       cls: '' },
  { tag: 'Digital',    label: 'Integrated Campaign',   cls: 'span2' },
];

function WorkCard({ tag, label, cls, index }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16,1,0.3,1] }}
      className={`work-card noise-card group relative overflow-hidden bg-[#0f0f0f] border
        border-white/8 cursor-none ${cls}`}>

      {/* Placeholder visual */}
      <div className="w-full h-full min-h-[200px] flex items-center justify-center relative">
        {/* Animated grid pattern */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)',
            backgroundSize: '32px 32px'
          }} />

        {/* Corner decorations */}
        <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/20" />
        <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/20" />

        {/* Center placeholder */}
        <div className="relative z-10 text-center">
          <div className="w-12 h-12 mx-auto mb-3 border border-white/15 flex items-center
            justify-center text-white/15 text-2xl">
            ◈
          </div>
          <span className="text-[0.6rem] tracking-widest uppercase text-white/15">
            Visual
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm flex flex-col items-center
          justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400 z-20">
          <span className="text-[0.58rem] font-semibold tracking-widest uppercase border
            border-white/30 text-white/60 px-3 py-1">
            {tag}
          </span>
          <span className="text-lg font-bold tracking-tight">{label}</span>
          <span className="text-sm text-smoke mt-1">View →</span>
        </div>
      </div>

      {/* Bottom label — always visible */}
      <div className="absolute bottom-0 inset-x-0 px-4 py-3 bg-gradient-to-t from-ink to-transparent
        flex items-end justify-between group-hover:opacity-0 transition-opacity z-10">
        <span className="text-[0.58rem] font-semibold tracking-widest uppercase text-smoke/60
          border border-white/15 px-2 py-0.5">
          {tag}
        </span>
        <span className="text-sm font-semibold">{label}</span>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="work" className="py-[120px] border-b border-white/10 bg-ink">
      <div className="max-w-[1360px] mx-auto px-8 md:px-12">

        {/* Header */}
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-4">
              FRESHLY BREWED
            </p>
            <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[1.02] tracking-tight">
              Work worth a<br />
              <em className="font-extralight italic">double tap.</em>
            </h2>
          </div>
          <p className="text-smoke text-sm max-w-xs leading-relaxed md:text-right">
            A fresh pour of campaigns, content and social-first ideas we've brewed for brands.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="work-masonry">
          {works.map((w, i) => <WorkCard key={i} {...w} index={i} />)}
        </div>
      </div>
    </section>
  );
}
