import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import Masonry from '../components/Masonry';
import FlipCard from '../components/FlipCard';
import BackgroundShapes from '../components/BackgroundShapes';

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
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block md:hidden w-full relative"
        >
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-10 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {galleryItems.map((item) => (
              <div key={item.id} className="snap-center shrink-0 w-[260px] h-[400px]">
                <FlipCard
                  width="100%"
                  height="100%"
                  radius={16}
                  stiffness={80}
                  damping={14}
                  flipOnClick
                  draggable={false}
                  tilt
                  tiltMax={8}
                  glare
                  glareOpacity={0.18}
                  hoverScale={1.0}
                  perspective={1200}
                  background="#1a1a1a"
                  color="#ffffff"
                  shadow
                  shadowOpacity={0.3}
                  front={
                    <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title ?? ''}
                        className="w-full h-full object-cover pointer-events-none"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 pointer-events-none">
                        <span className="bg-[#1a1a24]/80 backdrop-blur-md text-white/90 text-[0.6rem] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/10">
                          {item.title.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                  }
                  back={
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center pointer-events-none rounded-[16px] bg-[#1a1a1a]">
                      <h3 className="text-[1.2rem] font-black leading-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[0.8rem] font-medium text-white/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  }
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </div>
  );
}
