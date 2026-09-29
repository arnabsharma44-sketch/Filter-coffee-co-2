import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Work',        sub: 'The Good Stuff',   href: '#work'     },
  { label: 'Services',    sub: "What's Brewing?",  href: '#services' },
  { label: 'About Us',    sub: 'Our Blend',        href: '#about'    },
  { label: 'Our Clients', sub: null,               href: '#clients'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const smoothTo = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
      className={`fixed top-0 inset-x-0 z-[500] h-[72px] flex items-center justify-between px-8 md:px-12 transition-all duration-500
        ${scrolled ? 'bg-ink/90 backdrop-blur-2xl border-b border-white/10' : 'bg-transparent'}`}
    >
      {/* Logo */}
      <a href="#home" onClick={e => { e.preventDefault(); smoothTo('#home'); }}
        className="text-chalk font-black text-2xl tracking-widest hover:opacity-60 transition-opacity">
        FCC
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-10">
        {links.map(l => (
          <li key={l.href}>
            <a href={l.href} onClick={e => { e.preventDefault(); smoothTo(l.href); }}
              className="group flex flex-col items-center cursor-none relative">
              <span className="text-[0.78rem] font-medium text-chalk tracking-wide">
                {l.label}
              </span>
              {l.sub && (
                <span className="text-[0.6rem] text-smoke mt-0.5 font-light">{l.sub}</span>
              )}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-chalk group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" onClick={e => { e.preventDefault(); smoothTo('#contact'); }}
        className="hidden md:inline-flex mag-btn border border-chalk text-chalk text-[0.72rem] font-semibold tracking-widest uppercase px-6 py-3">
        <span>Grab a Coffee</span>
      </a>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-[5px] p-1 cursor-none"
        onClick={() => setOpen(o => !o)} aria-label="menu">
        <motion.span animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[1.5px] bg-chalk origin-center transition-all" />
        <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-[1.5px] bg-chalk" />
        <motion.span animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[1.5px] bg-chalk origin-center transition-all" />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1,  y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
            className="absolute top-[72px] inset-x-0 bg-ink/95 backdrop-blur-2xl border-b border-white/10 flex flex-col p-8 gap-6 md:hidden"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={e => { e.preventDefault(); smoothTo(l.href); }}
                className="text-xl font-semibold text-chalk border-b border-white/10 pb-4">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={e => { e.preventDefault(); smoothTo('#contact'); }}
              className="mag-btn border border-chalk text-chalk text-sm font-bold tracking-widest uppercase px-6 py-4 text-center mt-2">
              <span>Grab a Coffee</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
