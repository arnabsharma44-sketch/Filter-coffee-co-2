import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BackgroundShapes from './BackgroundShapes';

const OPTIONS = [
  { value: 'social',      label: 'Social Media' },
  { value: 'campaigns',   label: 'Creative Campaigns' },
  { value: 'strategy',    label: 'Brand & Digital Strategy' },
  { value: 'content',     label: 'Content & Production' },
  { value: 'influencer',  label: 'Influencer Marketing' },
  { value: 'ecom',        label: 'E-Commerce' },
  { value: 'all',         label: 'All of the above (let\'s talk)' },
];

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validate = (data) => {
    const e = {};
    if (!data.name.trim())  e.name  = true;
    if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = true;
    if (!data.brief.trim()) e.brief = true;
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(formRef.current);
    const data = Object.fromEntries(fd.entries());
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus('success');
    setTimeout(() => { setStatus('idle'); formRef.current?.reset(); }, 4500);
  };

  const fieldCls = (name) =>
    `w-full glass-input text-black text-sm px-5 py-4 rounded-2xl outline-none
    placeholder-black/30 font-sans transition-colors duration-300
    ${errors[name] ? 'border-red-400' : 'border-black/10 focus:border-black/40'}`;

  return (
    <section id="contact"
      className="py-[120px] border-b border-black/10 bg-white/10 backdrop-blur-sm relative z-10"
      ref={ref}>
      <BackgroundShapes variant="contact" />
      <div className="max-w-[900px] mx-auto px-8 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-6 glass-pill px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-brand-yellow inline-block animate-pulse" />
            START A CONVERSATION
          </div>

          <h2 className="text-[clamp(2.8rem,6vw,5.5rem)] font-black leading-[0.98] tracking-[-0.035em] text-black uppercase mb-3">
            GOT A BRIEF?
          </h2>
          <h3 className="text-[clamp(2rem,4.2vw,3.8rem)] font-serif italic font-light text-black/80 leading-[1.1] tracking-tight mb-8">
            Let’s make it a big deal.
          </h3>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto mb-8">
            {[
              'New campaign?',
              'Social refresh?',
              'Launch loading?',
              'Idea sitting in your Notes app?',
            ].map((q) => (
              <span
                key={q}
                className="glass-pill px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-black/75 border border-black/10 bg-white/60 shadow-sm"
              >
                {q}
              </span>
            ))}
          </div>

          <p className="text-xl md:text-2xl font-black text-black tracking-tight mb-8">
            We’re all ears.
          </p>

          <a href="mailto:hello@filtercoffeeco.in"
            className="mag-btn border border-black bg-black text-white text-[0.78rem] font-black
              tracking-widest uppercase px-12 py-5 cursor-none mx-auto rounded-full shadow-lg inline-flex hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-300">
            <span>SEND THE BRIEF</span>
            <span className="ml-2">→</span>
          </a>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16,1,0.3,1] }}
          className="glass-panel p-10 md:p-14 rounded-3xl noise-card shadow-xl border border-black/10">

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-7">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                  Your Name
                </label>
                <input id="contact-name" name="name" type="text" placeholder="What do we call you?"
                  className={fieldCls('name')} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-brand" className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                  Brand / Company
                </label>
                <input id="contact-brand" name="brand" type="text" placeholder="Brand in the blend?"
                  className={fieldCls('brand')} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-email" className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                Email
              </label>
              <input id="contact-email" name="email" type="email" placeholder="hello@yourbrand.com"
                className={fieldCls('email')} />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-service" className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                What's brewing?
              </label>
              <select id="contact-service" name="service" aria-label="What's brewing? Select a service blend" defaultValue=""
                className={`${fieldCls('service')} cursor-none appearance-none`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23000' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center' }}>
                <option value="" disabled>Pick a blend</option>
                {OPTIONS.map(o => <option key={o.value} value={o.value} style={{ background: '#ffffff', color: '#000000' }}>{o.label}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="contact-brief" className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                The Brief
              </label>
              <textarea id="contact-brief" name="brief" rows={5}
                placeholder="Spill it. What's the idea, the problem, the dream?"
                className={fieldCls('brief')} />
            </div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              disabled={status === 'success'}
              className={`mag-btn w-full border text-[0.78rem] font-black tracking-widest
                uppercase py-5 justify-center transition-all rounded-full shadow-md
                ${status === 'success'
                  ? 'bg-emerald-600 border-emerald-600 text-white cursor-not-allowed'
                  : 'bg-black border-black text-white cursor-none'}`}>
              <span>
                {status === 'success' ? '☕ BRIEF RECEIVED. WE\'RE BREWING.' : 'BREW IT UP →'}
              </span>
            </motion.button>

            {Object.keys(errors).length > 0 && (
              <p className="text-[0.7rem] text-red-500 font-semibold text-center">
                Looks like some fields need attention ↑
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
