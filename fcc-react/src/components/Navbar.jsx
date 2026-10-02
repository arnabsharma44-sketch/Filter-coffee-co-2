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
      className="fixed top-0 inset-x-0 z-[500] flex items-center justify-center px-4 md:px-6 pt-3"
    >
      {/* Floating pill container */}
      <div
        className={`relative w-full max-w-[1300px] flex items-center justify-between px-6 md:px-8 py-3 transition-all duration-500`}
        style={{
          borderRadius: '60px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 60%, rgba(220,210,230,0.45) 100%)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: scrolled
            ? '0 8px 32px -8px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)'
            : '0 4px 20px -6px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.03), inset 0 1px 0 rgba(255,255,255,0.9)',
        }}
      >
        {/* Logo - text */}
        <Link to="/"
          className="font-nunito font-black text-[1.35rem] tracking-[0.08em] text-black cursor-none shrink-0 hover:opacity-70 transition-opacity flex items-baseline"
        >
          <span>FILTER COFFEE</span>
          <span className="ml-1 text-[1.05rem]">co.</span>
        </Link>

        {/* Desktop links and CTA wrapper */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 lg:gap-10">
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to}
                  className={`group flex flex-col items-center cursor-none relative
                    ${location.pathname === l.to ? 'opacity-100' : ''}`}>
                  <span className="text-[0.72rem] font-sans font-bold text-brand-navy tracking-[0.18em] uppercase transition-colors group-hover:text-brand-yellow leading-tight">
                    {l.label}
                  </span>
                  {l.sub && (
                    <span className="text-[0.58rem] text-brand-navy/40 mt-[1px] font-serif italic leading-tight">{l.sub}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link to="/contact"
            className="mag-btn inline-flex items-center justify-center bg-[#1a1a1a] text-white text-[0.68rem] font-bold tracking-[0.18em] uppercase px-6 py-2.5 rounded-full overflow-hidden shadow-md shrink-0"
            style={{ borderRadius: '50px' }}
          >
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
              className="absolute top-[calc(100%+8px)] inset-x-4 flex flex-col p-8 gap-6 md:hidden shadow-xl"
              style={{
                borderRadius: '24px',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(0,0,0,0.08)',
              }}
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
      </div>
    </motion.nav>
  );
}
