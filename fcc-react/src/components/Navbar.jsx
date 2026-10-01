import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Work',        sub: 'The Good Stuff',   to: '/work'     },
  { label: 'Services',    sub: "What's Brewing?",   to: '/services' },
  { label: 'Gallery',     sub: 'Visual Identity',   to: '/gallery'  },
  { label: 'About Us',    sub: 'Our Blend',         to: '/about'    },
  { label: 'Our Clients', sub: null,                to: '/clients'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
      className={`fixed top-0 inset-x-0 z-[500] h-[80px] flex items-center justify-between px-8 md:px-12 transition-all duration-500
        ${scrolled ? 'bg-brand-light/80 backdrop-blur-md border-b border-brand-navy/10 shadow-sm' : 'bg-transparent'}`}
    >
      {/* Logo */}
      <Link to="/"
        className="text-brand-navy font-serif font-black text-2xl tracking-widest hover:text-brand-yellow transition-colors">
        FCC.
      </Link>

      {/* Desktop links and CTA wrapper */}
      <div className="hidden md:flex items-center gap-10">
        <ul className="flex items-center gap-10">
          {links.map(l => (
            <li key={l.to}>
              <Link to={l.to}
                className={`group flex flex-col items-center cursor-none relative
                  ${location.pathname === l.to ? 'opacity-100' : ''}`}>
                <span className="text-[0.8rem] font-sans font-semibold text-brand-navy tracking-widest2 uppercase transition-colors group-hover:text-brand-yellow">
                  {l.label}
                </span>
                {l.sub && (
                  <span className="text-[0.65rem] text-brand-navy/50 mt-0.5 font-serif italic">{l.sub}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact"
          className="mag-btn inline-flex items-center justify-center border border-black bg-black text-white text-[0.75rem] font-bold tracking-widest uppercase px-7 py-3 rounded-full overflow-hidden shadow-lg">
          <span>Grab a Coffee</span>
        </Link>
      </div>

      {/* Hamburger */}
      <button className="md:hidden flex flex-col gap-[6px] p-2 cursor-none"
        onClick={() => setOpen(o => !o)} aria-label="menu">
        <motion.span animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[1.5px] bg-black origin-center transition-all" />
        <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-[1.5px] bg-black" />
        <motion.span animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[1.5px] bg-black origin-center transition-all" />
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1,  y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
            className="absolute top-[72px] inset-x-0 glass-panel border-b border-black/10 flex flex-col p-8 gap-6 md:hidden shadow-xl"
          >
            {links.map(l => (
              <Link key={l.to} to={l.to}
                className={`text-xl font-semibold text-black border-b border-black/10 pb-4
                  ${location.pathname === l.to ? 'opacity-70' : ''}`}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact"
              className="mag-btn border border-black text-black text-sm font-bold tracking-widest uppercase px-6 py-4 text-center mt-2 rounded-full">
              <span>Grab a Coffee</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
