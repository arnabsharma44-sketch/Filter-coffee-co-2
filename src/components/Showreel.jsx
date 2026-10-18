import ScrollReveal from './ScrollReveal';

export default function Showreel() {
  return (
    <section
      id="manifesto"
      className="py-[80px] md:py-[120px] relative z-10 overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="max-w-[2000px] mx-auto px-4 md:px-10">
        <div
          className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[640px] flex items-center p-8 md:p-16 border border-white/10 shadow-2xl"
          style={{ backgroundColor: '#000000' }}
        >
          {/* ── Top Status Badge ── */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10 z-[3] flex items-center gap-3">
            <span className="glass-pill px-4 py-1.5 rounded-full text-[0.65rem] font-black uppercase tracking-widest text-white/90 bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-yellow inline-block animate-pulse" />
              AGENCY MANIFESTO
            </span>
          </div>

          {/* ── Content Narrative Context with ScrollReveal ── */}
          <div className="relative z-[2] w-full max-w-[1050px]">
            <ScrollReveal
              baseOpacity={0.12}
              enableBlur={true}
              blurStrength={3}
              baseRotation={0}
              start="top 85%"
              end="bottom 55%"
              textClassName="text-[clamp(1.75rem,3.4vw,3.4rem)] font-serif italic font-normal leading-[1.35] tracking-tight text-white mb-6"
            >
              We're an advertising and social media agency blending{' '}
              <span className="font-sans not-italic font-black text-brand-yellow">strategy</span>,{' '}
              <span className="font-sans not-italic font-black text-white">creativity</span> and{' '}
              <span className="font-sans not-italic font-black text-[#f731a5]">culture</span>{' '}
              to create work that gets seen, shared, saved and remembered.
            </ScrollReveal>

            <ScrollReveal
              baseOpacity={0.15}
              enableBlur={true}
              blurStrength={2}
              baseRotation={0}
              start="top 80%"
              end="bottom 60%"
              textClassName="text-white/60 text-sm md:text-base font-medium max-w-xl leading-relaxed"
            >
              Multi-platform campaigns, 3D motion, CGI spectacles, and viral moments crafted for high-growth brands.
            </ScrollReveal>
          </div>

          {/* ── Subtle Decorative Watermark / Accent in bottom right ── */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-[2] hidden sm:flex items-center gap-2 text-white/20 select-none">
            <span className="text-[11px] font-mono tracking-widest uppercase">FILTER COFFEE CO.</span>
            <span className="text-brand-yellow text-xs">✦</span>
          </div>
        </div>
      </div>
    </section>
  );
}
