import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import DriftWall from '../components/DriftWall';

const galleryItems = [
  {
    src: 'https://picsum.photos/seed/creative/800/600',
    title: 'Creative Direction',
    description: 'Bringing visual identities to life with striking aesthetics.',
  },
  {
    src: 'https://picsum.photos/seed/social/800/500',
    title: 'Social Strategy',
    description: 'Crafting campaigns that stop the scroll and start conversations.',
  },
  {
    src: 'https://picsum.photos/seed/content/800/700',
    title: 'Content Production',
    description: 'From raw concepts to polished, feed-ready digital assets.',
  },
  {
    src: 'https://picsum.photos/seed/brand/800/550',
    title: 'Brand Storytelling',
    description: 'Connecting brands with audiences through authentic narratives.',
  },
  {
    src: 'https://picsum.photos/seed/influencer/800/650',
    title: 'Influencer Marketing',
    description: 'Leveraging creator voices for maximum reach and impact.',
  },
  {
    src: 'https://picsum.photos/seed/ecommerce/800/500',
    title: 'E-Commerce',
    description: 'Optimizing the digital shelf to turn views into conversions.',
  },
  {
    src: 'https://picsum.photos/seed/artdir/800/750',
    title: 'Art Direction',
    description: 'Curating bold, memorable aesthetics that demand attention.',
  },
  {
    src: 'https://picsum.photos/seed/digital/800/600',
    title: 'Digital Campaigns',
    description: 'Integrated marketing strategies built for the modern web.',
  },
  {
    src: 'https://picsum.photos/seed/product/800/550',
    title: 'Product Styling',
    description: 'Showcasing products in their best light to drive desire.',
  },
  {
    src: 'https://picsum.photos/seed/copywrite/800/700',
    title: 'Copywriting',
    description: 'Words that punch above their weight and capture brand voice.',
  },
  {
    src: 'https://picsum.photos/seed/community/800/500',
    title: 'Community Management',
    description: 'Building and nurturing loyal brand advocates online.',
  },
  {
    src: 'https://picsum.photos/seed/video/800/650',
    title: 'Video Production',
    description: 'Dynamic motion graphics and live-action storytelling.',
  },
  {
    src: 'https://picsum.photos/seed/analytics/800/600',
    title: 'Analytics & Insights',
    description: 'Data-driven decisions to continuously optimize performance.',
  },
  {
    src: 'https://picsum.photos/seed/research/800/500',
    title: 'Market Research',
    description: 'Understanding consumer behavior to stay ahead of trends.',
  },
  {
    src: 'https://picsum.photos/seed/platform/800/700',
    title: 'Platform Strategy',
    description: 'Tailoring content natively for TikTok, Instagram, and beyond.',
  },
  {
    src: 'https://picsum.photos/seed/grind/800/550',
    title: 'The Daily Grind',
    description: 'Behind the scenes at FCC where the magic is brewed daily.',
  },
  // Adding more items to fill up the space
  {
    src: 'https://picsum.photos/seed/design/800/600',
    title: 'Graphic Design',
    description: 'Pixel-perfect designs that elevate your brand presence.',
  },
  {
    src: 'https://picsum.photos/seed/uiux/800/500',
    title: 'UI/UX Design',
    description: 'Seamless digital experiences built for users and conversions.',
  },
  {
    src: 'https://picsum.photos/seed/events/800/700',
    title: 'Event Activation',
    description: 'Immersive on-ground experiences that leave a mark.',
  },
  {
    src: 'https://picsum.photos/seed/pr/800/550',
    title: 'Public Relations',
    description: 'Shaping the narrative and securing top-tier media placements.',
  },
  {
    src: 'https://picsum.photos/seed/seo/800/650',
    title: 'Search Optimization',
    description: 'Ensuring your brand is found exactly when it matters most.',
  },
  {
    src: 'https://picsum.photos/seed/packaging/800/500',
    title: 'Packaging Design',
    description: 'Tactile, beautiful packaging that jumps off the shelf.',
  },
  {
    src: 'https://picsum.photos/seed/motion/800/750',
    title: 'Motion Graphics',
    description: 'Breathing life into static assets with fluid animation.',
  },
  {
    src: 'https://picsum.photos/seed/photo/800/600',
    title: 'Photography',
    description: 'Capturing moments and products with artistic precision.',
  },
  {
    src: 'https://picsum.photos/seed/audio/800/550',
    title: 'Audio Branding',
    description: 'Sonic identities that make your brand instantly recognizable.',
  },
  {
    src: 'https://picsum.photos/seed/consulting/800/700',
    title: 'Strategy Consulting',
    description: 'Expert guidance to navigate complex marketing challenges.',
  },
  {
    src: 'https://picsum.photos/seed/activation/800/500',
    title: 'Brand Activation',
    description: 'Igniting brand awareness through strategic initiatives.',
  },
  {
    src: 'https://picsum.photos/seed/media/800/650',
    title: 'Media Buying',
    description: 'Strategic ad placements across digital and traditional channels.',
  },
  {
    src: 'https://picsum.photos/seed/print/800/600',
    title: 'Print Media',
    description: 'Classic, tangible marketing materials crafted to perfection.',
  },
  {
    src: 'https://picsum.photos/seed/web/800/500',
    title: 'Web Development',
    description: 'High-performance websites tailored to your unique goals.',
  },
  {
    src: 'https://picsum.photos/seed/app/800/700',
    title: 'App Design',
    description: 'Intuitive mobile applications for iOS and Android platforms.',
  },
  {
    src: 'https://picsum.photos/seed/growth/800/550',
    title: 'Growth Hacking',
    description: 'Rapid experimentation to identify the most effective ways to grow.',
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-brand-light pt-32 pb-24 px-8 md:px-12 overflow-hidden">
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

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[700px] rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <DriftWall
            items={galleryItems}
            columns={5}
            tileWidth={280}
            tileHeight={360}
            gap={24}
            tilt={12}
            turn={-10}
            perspective={1200}
            depth={120}
            speed={35}
            direction="up"
            variance={0.45}
            parallax={0.6}
            lift={64}
            fade={0}
            dim={0.85}
            overlayColor="#060010"
            radius={16}
            roll={0}
            pauseOnHover={false}
            grayscale={false}
          />
        </motion.div>
      </div>
    </div>
  );
}
