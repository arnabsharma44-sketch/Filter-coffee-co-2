import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import ScrollFloat from './ScrollFloat';

const works = [
  { tag: 'Campaign',   label: 'Brand Story',          cls: 'span2',     slug: 'brand-story',          image: 'https://picsum.photos/seed/campaign/800/500' },
  { tag: 'Social',     label: 'Feed-First Creative',   cls: '',          slug: 'feed-first-creative',  image: 'https://picsum.photos/seed/socialfeed/800/600' },
  { tag: 'Branding',   label: 'Visual Identity',       cls: 'span-row2', slug: 'visual-identity',      image: 'https://picsum.photos/seed/branding/800/900' },
  { tag: 'Influencer', label: 'Creator Campaign',      cls: '',          slug: 'creator-campaign',     image: 'https://picsum.photos/seed/creator/800/600' },
  { tag: 'E-Commerce', label: 'Product Listing',       cls: '',          slug: 'product-listing',      image: 'https://picsum.photos/seed/shopify/800/600' },
  { tag: 'Digital',    label: 'Integrated Campaign',   cls: 'span2',     slug: 'integrated-campaign',  image: 'https://picsum.photos/seed/integrated/800/500' },
];

function WorkCard({ tag, label, cls, image, slug, index }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: [0, 2, 5].includes(index) ? -100 : 100 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: [0, 2, 5].includes(index) ? -100 : 100 }}
      transition={{ duration: 0.8, delay: inView ? 0.2 + (index * 0.2) : 0, ease: [0.16,1,0.3,1] }}
      className={`work-card glass-card noise-card group relative overflow-hidden rounded-2xl cursor-none ${cls}`}>

      <div className="w-full h-full min-h-[220px] flex items-center justify-center relative p-6">
        
        {image ? (
          <img src={image} alt={label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <>
            {/* Animated grid pattern fallback */}
            <div className="absolute inset-0"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)',
                backgroundSize: '32px 32px'
              }} />

            {/* Corner decorations */}
            <span className="absolute top-4 left-4 w-3 h-3 border-t border-l border-black/20" />
            <span className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-black/20" />

            {/* Center placeholder */}
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 mx-auto mb-3 border border-black/15 rounded-xl flex items-center
                justify-center text-black/30 text-2xl glass-pill">
                ◈
              </div>
              <span className="text-[0.62rem] font-bold tracking-widest uppercase text-black/40">
                Visual
              </span>
            </div>
          </>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/90 backdrop-blur-md flex flex-col items-center
          justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-400 z-20 p-6 text-center">
          <span className="text-[0.6rem] font-bold tracking-widest uppercase border
            border-black/20 text-black/70 px-3 py-1 rounded-full glass-pill">
            {tag}
          </span>
          <span className="text-xl font-black tracking-tight text-black">{label}</span>
          <Link 
            to={`/work/${slug}`} 
            className="text-xs font-semibold text-smoke mt-1 hover:text-black transition-colors cursor-pointer relative z-30 inline-block px-4 py-2 border border-black/10 rounded-full hover:bg-black hover:text-white"
          >
            View Project →
          </Link>
        </div>
      </div>

      {/* Bottom label — always visible */}
      <div className="absolute bottom-0 inset-x-0 px-5 py-4 bg-gradient-to-t from-white/95 via-white/70 to-transparent
        flex items-end justify-between group-hover:opacity-0 transition-opacity z-10">
        <span className="text-[0.58rem] font-bold tracking-widest uppercase text-black/70
          border border-black/15 px-2.5 py-1 rounded-full glass-pill">
          {tag}
        </span>
        <span className="text-sm font-bold text-black">{label}</span>
      </div>
    </motion.div>
  );
}

export default function Work({ hideHeader = false }) {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="work" className="py-[120px] border-b border-black/10 relative z-10 backdrop-blur-md" style={{ backgroundColor: 'rgba(207, 235, 255, 0.4)' }}>
      <div className="max-w-[1360px] mx-auto px-8 md:px-12">

        {/* Header */}
        {!hideHeader && (
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-4">
              FRESHLY BREWED
            </p>
            <ScrollFloat
              animationDuration={3}
              textClassName="text-[clamp(2.8rem,5vw,5.5rem)] font-black leading-[1.02] tracking-tight text-black"
            >
              Work worth a
            </ScrollFloat>
            <ScrollFloat
              animationDuration={3}
              textClassName="text-[clamp(2.8rem,5vw,5.5rem)] font-extralight italic text-black/70 leading-[1.02] tracking-tight"
            >
              double tap.
            </ScrollFloat>
          </div>
          <p className="text-smoke text-sm max-w-xs leading-relaxed md:text-right font-medium">
            A fresh pour of campaigns, content and social-first ideas we've brewed for brands.
          </p>
        </motion.div>
        )}

        {/* Masonry Grid */}
        <div className="work-masonry">
          {works.map((w, i) => <WorkCard key={i} {...w} index={i} />)}
        </div>
      </div>
    </section>
  );
}
