import Hero     from '../components/Hero';
import Ticker   from '../components/Ticker';
import Work     from '../components/Work';
import Services from '../components/Services';
import About    from '../components/About';
import Team     from '../components/Team';
import Contact  from '../components/Contact';
import BackgroundShapes from '../components/BackgroundShapes';

import ScrollReveal from '../components/ScrollReveal';

/* About blurb between ticker and work */
function Blurb() {
  return (
    <section className="py-[90px] md:py-[120px] bg-brand-navy relative z-10">
      <BackgroundShapes variant="blurb" />
      <div className="max-w-[1360px] mx-auto px-8 md:px-12">
        <div className="p-10 md:p-16 rounded-3xl relative overflow-hidden">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            textClassName="text-[clamp(1.5rem,2.8vw,2.8rem)] font-serif leading-[1.45] tracking-tight max-w-[950px] text-brand-light"
          >
            We're an advertising and social media agency blending strategy, creativity and culture to create work that gets seen, shared, saved and remembered.
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Blurb />
      <Work />
      <Services />
      <About />
      <Team />
      <Contact />
    </>
  );
}
