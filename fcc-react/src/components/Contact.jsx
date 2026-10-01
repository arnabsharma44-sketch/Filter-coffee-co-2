import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollFloat from './ScrollFloat';

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
      className="py-[120px] border-b border-black/10 bg-white/70 relative z-10"
      ref={ref}>
      <div className="max-w-[900px] mx-auto px-8 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
          className="text-center mb-16">

          <p className="text-[0.68rem] font-bold tracking-widest2 uppercase text-smoke mb-6">
            GOT A BRIEF?
          </p>

          <ScrollFloat
            animationDuration={3}
            textClassName="text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[1] tracking-tight text-black mb-6"
          >
            Spill the beans.
          </ScrollFloat>
          <ScrollFloat
            animationDuration={3}
            textClassName="text-[clamp(2.8rem,6vw,6.5rem)] font-extralight italic text-black/70 leading-[1] tracking-tight mb-6"
          >
            We'll brew the idea.
          </ScrollFloat>

          <p className="text-smoke text-base max-w-lg mx-auto leading-relaxed mb-10 font-medium">
            New campaign? Social needs a refresh? Launch loading? Or just an idea sitting in your notes app?
            Slide into our inbox.
          </p>

          <a href="mailto:hello@filtercoffeeco.in"
            className="mag-btn border border-black bg-black text-white text-[0.78rem] font-black
              tracking-widest uppercase px-12 py-5 cursor-none mx-auto rounded-full shadow-lg inline-flex">
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
                <label className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                  Your Name
                </label>
                <input name="name" type="text" placeholder="What do we call you?"
                  className={fieldCls('name')} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                  Brand / Company
                </label>
                <input name="brand" type="text" placeholder="Brand in the blend?"
                  className={fieldCls('brand')} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                Email
              </label>
              <input name="email" type="email" placeholder="hello@yourbrand.com"
                className={fieldCls('email')} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                What's brewing?
              </label>
              <select name="service" defaultValue=""
                className={`${fieldCls('service')} cursor-none appearance-none`}
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23000' d='M6 8L0 0h12z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 20px center' }}>
                <option value="" disabled>Pick a blend</option>
                {OPTIONS.map(o => <option key={o.value} value={o.value} style={{ background: '#ffffff', color: '#000000' }}>{o.label}</option>)}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.65rem] font-bold tracking-widest uppercase text-black/70">
                The Brief
              </label>
              <textarea name="brief" rows={5}
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
