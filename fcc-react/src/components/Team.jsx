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
    <section className="py-[120px] border-b border-black/10 bg-white/50 relative z-10" ref={ref}>
      <div className="max-w-[1360px] mx-auto px-8 md:px-12">

        {/* CEO */}
        <div className="mb-28 grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16,1,0.3,1] }}
            className="relative">
            <div className="aspect-[3/4] glass-panel rounded-3xl relative overflow-hidden noise-card shadow-xl p-8 border border-black/10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.02) 1px,transparent 1px)',
                backgroundSize: '40px 40px'
              }} />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
                <span className="text-black/20 text-6xl">◈</span>
                <span className="text-[0.65rem] font-bold tracking-widest uppercase text-black/40">Anuja Deora</span>
              </div>
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 bg-black text-white px-6 py-2.5
              text-[0.65rem] font-black tracking-widest uppercase rounded-2xl shadow-lg">
              CEO
            </div>
            {/* Decorative tag */}
            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 glass-pill
                text-[0.6rem] font-mono text-black/70 px-4 py-2 rounded-xl shadow-md">
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
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-black tracking-tight leading-tight mb-2 text-black">
              Anuja Deora
            </h2>
            <p className="text-smoke text-[0.85rem] font-semibold tracking-wide mb-8 pb-8 border-b border-black/10">
              Founder & CEO, Filter Coffee Co.
            </p>
            <p className="text-black/80 text-xl italic mb-5 leading-relaxed font-light">
              "The mind behind the briefs, the ideas and probably a few too many open tabs."
            </p>
            <p className="text-black/70 text-[0.98rem] leading-[1.85] mb-8 font-normal">
              Anuja built Filter Coffee Co. with a simple belief: creativity should never feel filtered.
              From building brands to building teams, she leads FCC with a sharp eye for culture,
              a love for ideas and an instinct for what gets people to stop, look and engage.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Big-picture thinker.', 'Brand builder.'].map(t => (
                <span key={t} className="text-[0.72rem] font-bold tracking-wide glass-pill
                  px-4 py-2 text-black/80 uppercase rounded-full">
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
                  ${i === teamRoles.length - 1 ? 'italic font-semibold text-black' : 'text-smoke'} px-2`}>
                {r}
              </motion.span>
            ))}
          </div>
          <p className="text-smoke text-base max-w-md mx-auto leading-relaxed">
            Different roles. Different playlists. Different coffee orders.<br />
            <strong className="text-black font-semibold">One shared obsession: making good work.</strong>
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {['Strategist','Copywriter','Designer','Social Media Manager','Content Creator','Tab-Hoarder'].map((role, i) => (
            <motion.div key={role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="glass-card flex flex-col items-center rounded-2xl overflow-hidden group cursor-none">
              <div className="w-full aspect-square bg-white/40 flex items-center justify-center
                border-b border-black/8 relative overflow-hidden">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.02) 1px,transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
                <span className="text-black/20 text-3xl relative z-10">◈</span>
              </div>
              <span className="text-[0.6rem] font-bold tracking-widest uppercase text-black/60 py-4 px-2 text-center">
                {role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
