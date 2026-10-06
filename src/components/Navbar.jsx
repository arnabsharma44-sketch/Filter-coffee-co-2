import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Work',        sub: 'The Good Stuff',   to: '/work'     },
  { label: 'Services',    sub: "What's Brewing?",   to: '/services' },
  { label: 'Gallery',     sub: 'Visual Identity',   to: '/gallery'  },
  { label: 'About Us',    sub: 'Our Blend',         to: '/about'    },
  { label: 'Our Clients', sub: null,                to: '/clients'  },
];

const springConfig = { type: 'spring', stiffness: 340, damping: 28, mass: 0.8 };

export default function Navbar() {
  const [minimized, setMinimized] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const handleScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (currentY <= 30) {
        // At top of page: always full expanded bar
        setMinimized(false);
      } else if (currentY > 70 && diff > 4) {
        // Scrolling down: smoothly shrink to centered logo pill
        setMinimized(true);
        setOpen(false);
      } else if (diff < -8) {
        // Scrolling up: reopen with all options
        setMinimized(false);
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handlePillClick = (e) => {
    if (!minimized) return;
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMinimized(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-[500] flex items-center justify-center px-4 md:px-8 pt-3 pointer-events-none"
    >
      {/* ── Glassmorphism Pill Container ── */}
      <motion.div
        layout
        transition={springConfig}
        onClick={handlePillClick}
        whileHover={minimized ? { scale: 1.04 } : undefined}
        whileTap={minimized ? { scale: 0.97 } : undefined}
        className={`pointer-events-auto relative flex items-center transition-colors duration-300 ${
          minimized ? 'cursor-pointer' : ''
        }`}
        style={{
          borderRadius: 9999,
          background: minimized
            ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.78) 100%)'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.72) 100%)',
          backdropFilter: 'blur(24px) saturate(190%)',
          WebkitBackdropFilter: 'blur(24px) saturate(190%)',
          border: '1px solid rgba(255, 255, 255, 0.85)',
          boxShadow: minimized
            ? '0 16px 38px -10px rgba(0, 0, 0, 0.14), 0 2px 8px rgba(0,0,0,0.03), inset 0 1px 1px rgba(255, 255, 255, 0.95)'
            : '0 8px 30px -8px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0,0,0,0.02), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
          paddingLeft: minimized ? '22px' : '28px',
          paddingRight: minimized ? '22px' : '28px',
          paddingTop: minimized ? '10px' : '12px',
          paddingBottom: minimized ? '10px' : '12px',
          maxWidth: minimized ? '260px' : '1180px',
          width: minimized ? 'auto' : '100%',
        }}
      >
        <div
          className={`w-full flex items-center transition-all ${
            minimized ? 'justify-center' : 'justify-between'
          }`}
        >
          {/* Logo */}
          <motion.div layout="position" transition={springConfig} className="flex items-center shrink-0">
            <Link
              to="/"
              onClick={(e) => {
                if (minimized) {
                  handlePillClick(e);
                }
              }}
              className="font-nunito font-black text-[1.28rem] tracking-[0.08em] text-black shrink-0 hover:opacity-75 transition-opacity flex items-center select-none"
            >
              <span>FILTER COFFEE</span>
              <span className="ml-1 text-[0.98rem] opacity-80">co.</span>
              {minimized && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.4, x: -4 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="ml-2 inline-flex items-center justify-center w-4 h-4 rounded-full bg-black/5 text-[9px] text-black/60 font-bold"
                  title="Scroll to top"
                >
                  ↑
                </motion.span>
              )}
            </Link>
          </motion.div>

          {/* Desktop links and CTA — completely unmounted when minimized so logo is 100% centered */}
          <AnimatePresence mode="wait">
            {!minimized && (
              <motion.div
                key="desktop-links"
                initial={{ opacity: 0, scale: 0.92, x: 15 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.92, x: 15 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:flex items-center gap-8 ml-auto pl-8"
              >
                <ul className="flex items-center gap-7 lg:gap-9">
                  {links.map((l) => (
                    <li key={l.to}>
                      <Link
                        to={l.to}
                        className={`group flex flex-col items-center relative transition-opacity ${
                          location.pathname === l.to ? 'opacity-100 font-extrabold' : 'opacity-85 hover:opacity-100'
                        }`}
                      >
                        <span className="text-[0.72rem] font-sans font-bold text-brand-navy tracking-[0.18em] uppercase transition-colors group-hover:text-brand-yellow leading-tight">
                          {l.label}
                        </span>
                        {l.sub && (
                          <span className="text-[0.58rem] text-brand-navy/45 mt-[1px] font-serif italic leading-tight">
                            {l.sub}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact"
                  className="mag-btn inline-flex items-center justify-center bg-[#1a1a1a] text-white text-[0.68rem] font-bold tracking-[0.18em] uppercase px-6 py-2.5 rounded-full overflow-hidden shadow-md shrink-0 transition-transform hover:scale-105 active:scale-95"
                  style={{ borderRadius: '50px' }}
                >
                  <span>Grab a Coffee</span>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile hamburger — only visible when not minimized */}
          <AnimatePresence>
            {!minimized && (
              <motion.button
                key="mobile-hamburger"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden flex flex-col gap-[6px] p-2 ml-auto"
                onClick={() => setOpen((o) => !o)}
                aria-label="menu"
              >
                <motion.span
                  animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-[1.5px] bg-black origin-center transition-all"
                />
                <motion.span
                  animate={open ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-[1.5px] bg-black"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                  className="block w-6 h-[1.5px] bg-black origin-center transition-all"
                />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {open && !minimized && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[calc(100%+10px)] inset-x-0 flex flex-col p-8 gap-5 md:hidden shadow-2xl"
              style={{
                borderRadius: '24px',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15)',
              }}
            >
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-lg font-semibold text-black border-b border-black/8 pb-3.5 transition-colors
                    ${location.pathname === l.to ? 'opacity-100 font-bold' : 'opacity-70'}`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mag-btn bg-[#1a1a1a] text-white text-xs font-bold tracking-widest uppercase px-6 py-3.5 text-center mt-2 rounded-full shadow-md"
              >
                <span>Grab a Coffee</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
