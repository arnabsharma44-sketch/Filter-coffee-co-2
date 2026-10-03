import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import Masonry from '../components/Masonry';
import BackgroundShapes from '../components/BackgroundShapes';

/* Lightweight CSS-only flip card for mobile */
function MobileFlipCard({ img, title, description }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="mobile-flip-card flex-shrink-0 w-[220px] h-[340px] rounded-2xl shadow-lg"
      style={{ scrollSnapAlign: 'start', perspective: '900px' }}
      onClick={() => setFlipped(f => !f)}
    >
      <div
        className="mobile-flip-inner w-full h-full relative"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.5s ease',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
          <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="inline-block bg-white/15 text-white/90 text-[0.55rem] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border border-white/10 mb-2">
              {title.split(' ')[0]}
            </span>
            <h3 className="text-white text-sm font-bold leading-tight">{title}</h3>
          </div>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl bg-[#1a1a1a] flex flex-col items-center justify-center p-6 text-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-white text-[1.15rem] font-black leading-tight mb-3">{title}</h3>
          <p className="text-white/60 text-[0.75rem] leading-relaxed">{description}</p>
          <span className="mt-4 text-white/30 text-[0.55rem] uppercase tracking-widest font-bold">Tap to flip back</span>
        </div>
      </div>
    </div>
  );
}

const galleryItems = [
  {
    id: '1',
    img: 'https://picsum.photos/seed/creative/800/600',
    title: 'Creative Direction',
    description: 'Bringing visual identities to life with striking aesthetics.',
    height: 400
  },
  {
    id: '2',
    img: 'https://picsum.photos/seed/social/800/500',
    title: 'Social Strategy',
    description: 'Crafting campaigns that stop the scroll and start conversations.',
    height: 250
  },
  {
    id: '3',
    img: 'https://picsum.photos/seed/content/800/700',
    title: 'Content Production',
    description: 'From raw concepts to polished, feed-ready digital assets.',
    height: 500
  },
  {
    id: '4',
    img: 'https://picsum.photos/seed/brand/800/550',
    title: 'Brand Storytelling',
    description: 'Connecting brands with audiences through authentic narratives.',
    height: 300
  },
  {
    id: '5',
    img: 'https://picsum.photos/seed/influencer/800/650',
    title: 'Influencer Marketing',
    description: 'Leveraging creator voices for maximum reach and impact.',
    height: 450
  },
  {
    id: '6',
    img: 'https://picsum.photos/seed/ecommerce/800/500',
    title: 'E-Commerce',
    description: 'Optimizing the digital shelf to turn views into conversions.',
    height: 350
  },
  {
    id: '7',
    img: 'https://picsum.photos/seed/artdir/800/750',
    title: 'Art Direction',
    description: 'Curating bold, memorable aesthetics that demand attention.',
    height: 550
  },
  {
    id: '8',
    img: 'https://picsum.photos/seed/digital/800/600',
    title: 'Digital Campaigns',
    description: 'Integrated marketing strategies built for the modern web.',
    height: 400
  },
  {
    id: '9',
    img: 'https://picsum.photos/seed/product/800/550',
    title: 'Product Styling',
    description: 'Showcasing products in their best light to drive desire.',
    height: 350
  },
  {
    id: '10',
    img: 'https://picsum.photos/seed/copywrite/800/700',
    title: 'Copywriting',
    description: 'Words that punch above their weight and capture brand voice.',
    height: 480
  },
  {
    id: '11',
    img: 'https://picsum.photos/seed/community/800/500',
    title: 'Community Management',
    description: 'Building and nurturing loyal brand advocates online.',
    height: 280
  },
  {
    id: '12',
    img: 'https://picsum.photos/seed/video/800/650',
    title: 'Video Production',
    description: 'Dynamic motion graphics and live-action storytelling.',
    height: 420
  },
  {
    id: '13',
    img: 'https://picsum.photos/seed/analytics/800/600',
    title: 'Analytics & Insights',
    description: 'Data-driven decisions to continuously optimize performance.',
    height: 380
  },
  {
    id: '14',
    img: 'https://picsum.photos/seed/research/800/500',
    title: 'Market Research',
    description: 'Understanding consumer behavior to stay ahead of trends.',
    height: 300
  },
  {
    id: '15',
    img: 'https://picsum.photos/seed/platform/800/700',
    title: 'Platform Strategy',
    description: 'Tailoring content natively for TikTok, Instagram, and beyond.',
    height: 500
  },
  {
    id: '16',
    img: 'https://picsum.photos/seed/grind/800/550',
    title: 'The Daily Grind',
    description: 'Behind the scenes at FCC where the magic is brewed daily.',
    height: 320
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-light pt-32 pb-24 md:px-8 relative overflow-hidden">
      <BackgroundShapes variant="gallery" />
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10 md:mb-16 px-4 md:px-0">
          <div className="text-[0.7rem] font-sans font-bold tracking-widest2 uppercase text-brand-navy/60 mb-4 md:px-4">
            Visual Identity
          </div>
          <ScrollReveal
            baseOpacity={0.1} enableBlur baseRotation={3} blurStrength={4}
            textClassName="text-[clamp(3rem,6vw,5rem)] font-serif font-black leading-none text-brand-navy md:px-4"
          >
            Our Gallery
          </ScrollReveal>
        </div>

        {/* Desktop View: Masonry */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block w-full relative min-h-[800px] px-4 md:px-0"
        >
          <Masonry
            items={galleryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.98}
            blurToFocus
            colorShiftOnHover={false}
          />
        </motion.div>

        {/* Mobile View: Horizontal Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="block md:hidden w-full relative"
        >
          <div
            className="flex gap-4 px-4 pb-6 overflow-x-auto"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {galleryItems.map((item) => (
              <MobileFlipCard
                key={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
            {/* End spacer so last card doesn't hug edge */}
            <div className="flex-shrink-0 w-4" />
          </div>

          {/* Scroll hint */}
          <div className="flex items-center justify-center gap-2 mt-2 text-brand-navy/40">
            <span className="text-[0.6rem] font-bold tracking-widest uppercase">Swipe</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
