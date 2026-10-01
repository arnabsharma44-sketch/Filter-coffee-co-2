import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import FlipCard from '../components/FlipCard';

const galleryItems = [
  {
    src: 'https://picsum.photos/seed/creative/800/600',
    title: 'Creative Direction',
    description: 'Bringing visual identities to life with striking aesthetics.',
    className: 'md:col-span-2 md:row-span-2 min-h-[350px] md:min-h-[500px]',
  },
  {
    src: 'https://picsum.photos/seed/social/800/500',
    title: 'Social Strategy',
    description: 'Crafting campaigns that stop the scroll and start conversations.',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
  },
  {
    src: 'https://picsum.photos/seed/content/800/700',
    title: 'Content Production',
    description: 'From raw concepts to polished, feed-ready digital assets.',
    className: 'md:col-span-1 md:row-span-2 min-h-[350px] md:min-h-[500px]',
  },
  {
    src: 'https://picsum.photos/seed/brand/800/550',
    title: 'Brand Storytelling',
    description: 'Connecting brands with audiences through authentic narratives.',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
  },
  {
    src: 'https://picsum.photos/seed/influencer/800/650',
    title: 'Influencer Marketing',
    description: 'Leveraging creator voices for maximum reach and impact.',
    className: 'md:col-span-2 md:row-span-1 min-h-[250px]',
  },
  {
    src: 'https://picsum.photos/seed/ecommerce/800/500',
    title: 'E-Commerce',
    description: 'Optimizing the digital shelf to turn views into conversions.',
    className: 'md:col-span-2 md:row-span-2 min-h-[350px] md:min-h-[500px]',
  },
  {
    src: 'https://picsum.photos/seed/artdir/800/750',
    title: 'Art Direction',
    description: 'Curating bold, memorable aesthetics that demand attention.',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
  },
  {
    src: 'https://picsum.photos/seed/digital/800/600',
    title: 'Digital Campaigns',
    description: 'Integrated marketing strategies built for the modern web.',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
  },
  {
    src: 'https://picsum.photos/seed/product/800/550',
    title: 'Product Styling',
    description: 'Showcasing products in their best light to drive desire.',
    className: 'md:col-span-1 md:row-span-2 min-h-[350px] md:min-h-[500px]',
  },
  {
    src: 'https://picsum.photos/seed/copywrite/800/700',
    title: 'Copywriting',
    description: 'Words that punch above their weight and capture brand voice.',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
  },
  {
    src: 'https://picsum.photos/seed/community/800/500',
    title: 'Community Management',
    description: 'Building and nurturing loyal brand advocates online.',
    className: 'md:col-span-2 md:row-span-1 min-h-[250px]',
  },
  {
    src: 'https://picsum.photos/seed/video/800/650',
    title: 'Video Production',
    description: 'Dynamic motion graphics and live-action storytelling.',
    className: 'md:col-span-2 md:row-span-2 min-h-[350px] md:min-h-[500px]',
  },
  {
    src: 'https://picsum.photos/seed/analytics/800/600',
    title: 'Analytics & Insights',
    description: 'Data-driven decisions to continuously optimize performance.',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
  },
  {
    src: 'https://picsum.photos/seed/research/800/500',
    title: 'Market Research',
    description: 'Understanding consumer behavior to stay ahead of trends.',
    className: 'md:col-span-1 md:row-span-1 min-h-[250px]',
  },
  {
    src: 'https://picsum.photos/seed/platform/800/700',
    title: 'Platform Strategy',
    description: 'Tailoring content natively for TikTok, Instagram, and beyond.',
    className: 'md:col-span-1 md:row-span-2 min-h-[350px] md:min-h-[500px]',
  },
  {
    src: 'https://picsum.photos/seed/grind/800/550',
    title: 'The Daily Grind',
    description: 'Behind the scenes at FCC where the magic is brewed daily.',
    className: 'md:col-span-3 md:row-span-1 min-h-[250px]',
  },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-light pt-32 pb-24 px-8 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <div className="text-[0.7rem] font-sans font-bold tracking-widest2 uppercase text-brand-navy/60 mb-4">
            Visual Identity
          </div>
          <ScrollReveal
            baseOpacity={0.1} enableBlur baseRotation={3} blurStrength={4}
            textClassName="text-[clamp(3rem,6vw,5rem)] font-serif font-black leading-none text-brand-navy"
          >
            Our Gallery
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[minmax(0,1fr)]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`rounded-2xl ${item.className || 'min-h-[250px]'}`}
            >
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
                hoverScale={1.02}
                perspective={1200}
                background="#1a1a1a"
                color="#ffffff"
                shadow
                shadowOpacity={0.3}
                front={
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                  />
                }
                back={
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center pointer-events-none">
                    <h3 className="text-[clamp(1.4rem,2.5vw,1.8rem)] font-black leading-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[0.9rem] font-medium text-white/60 max-w-[240px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
