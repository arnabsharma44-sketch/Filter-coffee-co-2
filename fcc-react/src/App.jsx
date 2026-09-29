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
    <section className="py-[90px] md:py-[120px] border-b border-black/10 bg-white/40 backdrop-blur-md relative z-10">
      <div className="max-w-[1360px] mx-auto px-8 md:px-12">
        <div className="glass-panel p-10 md:p-16 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-100/40 via-orange-100/20 to-transparent blur-3xl pointer-events-none -z-10" />
          <p className="text-[clamp(1.5rem,2.8vw,2.8rem)] font-light leading-[1.45] tracking-tight max-w-[950px] text-black">
            We're an advertising and social media agency blending{' '}
            <em className="italic font-bold text-black not-italic bg-gradient-to-r from-black to-zinc-700 bg-clip-text">strategy</em>,{' '}
            <em className="italic font-bold text-black not-italic bg-gradient-to-r from-black to-zinc-700 bg-clip-text">creativity</em> and{' '}
            <em className="italic font-bold text-black not-italic bg-gradient-to-r from-black to-zinc-700 bg-clip-text">culture</em>{' '}
            to create work that gets seen, shared, saved and remembered.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="grain bg-white text-black min-h-screen relative selection:bg-black selection:text-white">
      {/* Background ambient gradient glow for rich glassmorphism depth */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden opacity-60">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-amber-100/40 via-orange-50/30 to-transparent blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-bl from-amber-50/50 via-zinc-100/50 to-transparent blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tr from-stone-100/60 via-amber-100/30 to-transparent blur-[150px]" />
      </div>

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
