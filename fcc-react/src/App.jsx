import Cursor   from './components/Cursor';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import Ticker   from './components/Ticker';
import Work     from './components/Work';
import Services from './components/Services';
import About    from './components/About';
import Team     from './components/Team';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

/* About blurb between ticker and work */
function Blurb() {
  return (
    <section className="py-[100px] md:py-[130px] border-b border-white/10 bg-ink">
      <div className="max-w-[1360px] mx-auto px-8 md:px-12">
        <p className="text-[clamp(1.5rem,2.8vw,2.8rem)] font-light leading-[1.45] tracking-tight max-w-[900px]">
          We're an advertising and social media agency blending{' '}
          <em className="italic font-semibold text-chalk not-italic">strategy</em>,{' '}
          <em className="italic font-semibold text-chalk not-italic">creativity</em> and{' '}
          <em className="italic font-semibold text-chalk not-italic">culture</em>{' '}
          to create work that gets seen, shared, saved and remembered.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="grain bg-ink min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <Ticker />
      <Blurb />
      <Work />
      <Services />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}
