import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const teamRoles = [
  'Strategists.',
  'Copywriters.',
  'Designers.',
  'Social media managers.',
  'Content creators.',
  'And professional tab-hoarders.',
];

export default function Team() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-[120px] border-b border-white/10 bg-ink" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-8 md:px-12">

        {/* CEO */}
        <div className="mb-28 grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16,1,0.3,1] }}
            className="relative">
            <div className="aspect-[3/4] border border-white/10 bg-[#0f0f0f] relative overflow-hidden noise-card">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                <span className="text-white/10 text-5xl">◈</span>
                <span className="text-[0.6rem] tracking-widest uppercase text-white/15">Anuja Deora</span>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-chalk text-ink px-5 py-2
              text-[0.6rem] font-black tracking-widest uppercase shadow-[4px_4px_0_#333]">
              CEO
            </div>
            {/* Decorative tag */}
            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 bg-[#111] border border-white/15
                text-[0.55rem] font-mono text-white/40 px-3 py-1.5 tracking-wide">
              founder_mode = true;
            </motion.div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16,1,0.3,1] }}>
            <p className="text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-4">
              MEET OUR CEO
            </p>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-black tracking-tight leading-tight mb-2">
              Anuja Deora
            </h2>
            <p className="text-smoke text-[0.82rem] tracking-wide mb-8 pb-8 border-b border-white/10">
              Founder & CEO, Filter Coffee Co.
            </p>
            <p className="text-white/60 text-lg italic mb-5 leading-relaxed">
              "The mind behind the briefs, the ideas and probably a few too many open tabs."
            </p>
            <p className="text-smoke text-[0.95rem] leading-[1.85] mb-8">
              Anuja built Filter Coffee Co. with a simple belief: creativity should never feel filtered.
              From building brands to building teams, she leads FCC with a sharp eye for culture,
              a love for ideas and an instinct for what gets people to stop, look and engage.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Big-picture thinker.', 'Brand builder.'].map(t => (
                <span key={t} className="text-[0.72rem] font-semibold tracking-wide border
                  border-white/15 px-4 py-2 text-ash uppercase">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Brew Crew */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="text-center mb-16">
          <p className="text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-6">
            MEET THE BREW CREW
          </p>
          <div className="flex flex-wrap justify-center gap-1 mb-6">
            {teamRoles.map((r, i) => (
              <motion.span key={r}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`text-[clamp(1rem,1.8vw,1.6rem)] font-light tracking-tight
                  ${i === teamRoles.length - 1 ? 'italic text-chalk' : 'text-smoke'} px-2`}>
                {r}
              </motion.span>
            ))}
          </div>
          <p className="text-smoke text-base max-w-md mx-auto leading-relaxed">
            Different roles. Different playlists. Different coffee orders.<br />
            <strong className="text-chalk font-semibold">One shared obsession: making good work.</strong>
          </p>
        </motion.div>

        {/* Team grid — 6 placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-px bg-white/8 border border-white/8">
          {['Strategist','Copywriter','Designer','Social Media Manager','Content Creator','Tab-Hoarder'].map((role, i) => (
            <motion.div key={role}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-[#080808] flex flex-col items-center overflow-hidden group cursor-none hover:bg-[#111] transition-colors">
              <div className="w-full aspect-square bg-[#0d0d0d] flex items-center justify-center
                border-b border-white/8 relative overflow-hidden">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                <span className="text-white/10 text-2xl relative z-10">◈</span>
              </div>
              <span className="text-[0.58rem] tracking-widest uppercase text-smoke/50 py-3 px-2 text-center">
                {role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
