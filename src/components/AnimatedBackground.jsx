import { useEffect, useState } from 'react';

/**
 * AnimatedBackground — ultra-high performance butter-smooth background.
 *
 * Uses hardware-accelerated CSS transforms and natural soft radial gradients
 * WITHOUT expensive filter: blur() passes, allowing solid 60/120fps scrolling
 * on both low-power phones and laptops.
 */
export default function AnimatedBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches || 'ontouchstart' in window);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      style={{ background: '#EAE9E6', contain: 'strict' }}
    >
      {/* Light subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blob 1 — Pastel Sky Blue (top-right) */}
      <div
        className={`absolute -top-[15%] -right-[15%] w-[70vw] h-[70vw] rounded-full pointer-events-none ${
          isMobile ? '' : 'animate-blob1'
        }`}
        style={{
          background:
            'radial-gradient(circle at center, rgba(147,197,253,0.45) 0%, rgba(196,181,253,0.22) 40%, rgba(196,181,253,0.05) 60%, transparent 75%)',
          willChange: isMobile ? 'auto' : 'transform',
        }}
      />

      {/* Blob 2 — Warm Peach/Cream (bottom-left) */}
      <div
        className={`absolute -bottom-[15%] -left-[15%] w-[65vw] h-[65vw] rounded-full pointer-events-none ${
          isMobile ? '' : 'animate-blob2'
        }`}
        style={{
          background:
            'radial-gradient(circle at center, rgba(254,215,170,0.45) 0%, rgba(253,186,116,0.2) 40%, rgba(253,186,116,0.05) 60%, transparent 75%)',
          willChange: isMobile ? 'auto' : 'transform',
        }}
      />

      {/* Blob 3 — Soft Pink-Lavender (center-left) */}
      <div
        className={`absolute top-[25%] -left-[10%] w-[55vw] h-[55vw] rounded-full pointer-events-none ${
          isMobile ? '' : 'animate-blob3'
        }`}
        style={{
          background:
            'radial-gradient(circle at center, rgba(249,168,212,0.35) 0%, rgba(216,180,254,0.18) 40%, rgba(216,180,254,0.04) 60%, transparent 75%)',
          willChange: isMobile ? 'auto' : 'transform',
        }}
      />

      {/* Blob 4 — Blue-Purple tint (top-left) */}
      <div
        className={`absolute -top-[5%] -left-[10%] w-[45vw] h-[45vw] rounded-full pointer-events-none ${
          isMobile ? '' : 'animate-blob4'
        }`}
        style={{
          background:
            'radial-gradient(circle at center, rgba(165,180,252,0.35) 0%, rgba(196,181,253,0.16) 40%, rgba(196,181,253,0.04) 60%, transparent 75%)',
          willChange: isMobile ? 'auto' : 'transform',
        }}
      />
    </div>
  );
}
