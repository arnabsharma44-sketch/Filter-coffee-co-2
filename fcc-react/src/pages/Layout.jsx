import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Cursor   from '../components/Cursor';
import Navbar   from '../components/Navbar';
import Footer   from '../components/Footer';

export default function Layout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

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
      <Outlet />
      <Footer />
    </div>
  );
}
