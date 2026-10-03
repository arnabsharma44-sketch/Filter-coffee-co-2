import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches || 'ontouchstart' in window);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // On mobile: static gradient patches — no animation, no blur filters, but
  // colors are mixed from all corners so it doesn't look flat/yellow
  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" style={{ background: '#EAE9E6' }}>
        {/* Cool blue-lavender — top right */}
        <div
          className="absolute -top-[10%] -right-[15%] w-[70vw] h-[70vw] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(147,197,253,0.35) 0%, rgba(196,181,253,0.2) 40%, transparent 70%)',
          }}
        />
        {/* Warm peach — bottom left */}
        <div
          className="absolute -bottom-[10%] -left-[15%] w-[65vw] h-[65vw] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(254,215,170,0.3) 0%, rgba(253,186,116,0.15) 40%, transparent 70%)',
          }}
        />
        {/* Soft pink — center left */}
        <div
          className="absolute top-[30%] -left-[10%] w-[50vw] h-[50vw] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(249,168,212,0.2) 0%, rgba(216,180,254,0.12) 40%, transparent 70%)',
          }}
        />
        {/* Blue-purple — top left */}
        <div
          className="absolute -top-[5%] -left-[10%] w-[45vw] h-[45vw] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(165,180,252,0.25) 0%, rgba(196,181,253,0.12) 40%, transparent 70%)',
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" style={{ background: '#EAE9E6' }}>

      {/* Light subtle grid pattern */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

      {/* ── Large soft patch 1 — Pastel Sky Blue (top-right) ── */}
      <motion.div
        className="absolute -top-[20%] -right-[15%] w-[75vw] h-[75vw] rounded-[50%] opacity-35"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(147,197,253,0.9) 0%, rgba(196,181,253,0.5) 50%, transparent 75%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
        animate={{
          x: [0, -60, 30, 0],
          y: [0, 60, -30, 0],
          scaleX: [1, 1.15, 0.95, 1],
          scaleY: [1, 0.9, 1.1, 1],
          rotate: [0, 25, -15, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Large soft patch 2 — Warm Peach/Cream (bottom-left) ── */}
      <motion.div
        className="absolute -bottom-[20%] -left-[15%] w-[70vw] h-[70vw] rounded-[50%] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(254,215,170,0.95) 0%, rgba(253,186,116,0.4) 45%, transparent 75%)',
          filter: 'blur(90px)',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 70, -40, 0],
          y: [0, -50, 30, 0],
          scaleX: [1, 0.9, 1.15, 1],
          scaleY: [1, 1.1, 0.92, 1],
          rotate: [0, -20, 10, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Large soft patch 3 — Soft Pink-Lavender (center-left) ── */}
      <motion.div
        className="absolute top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-[50%] opacity-25"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(249,168,212,0.85) 0%, rgba(216,180,254,0.45) 50%, transparent 75%)',
          filter: 'blur(100px)',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 80, -30, 0],
          y: [0, -60, 40, 0],
          scaleX: [1, 1.2, 0.88, 1],
          scaleY: [1, 0.85, 1.12, 1],
          rotate: [0, 30, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Subtle Accent — Blue-Purple tint (top-left corner) ── */}
      <motion.div
        className="absolute -top-[10%] -left-[10%] w-[45vw] h-[45vw] rounded-[50%] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(165,180,252,0.9) 0%, rgba(196,181,253,0.4) 50%, transparent 75%)',
          filter: 'blur(80px)',
          willChange: 'transform',
        }}
        animate={{
          x: [0, 50, -20, 0],
          y: [0, 40, -25, 0],
          scaleX: [1, 1.1, 0.92, 1],
          scaleY: [1, 0.9, 1.08, 1],
          rotate: [0, -25, 15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

    </div>
  );
}
