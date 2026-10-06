import { useEffect, useRef, useState } from 'react';

/**
 * Custom cursor — optimised version.
 *
 * Only runs rAF while the mouse is actually moving. Pauses after 100ms idle
 * to avoid burning CPU/GPU when the cursor is stationary.
 * On touch devices, nothing renders and default cursor is restored.
 */
export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.style.cursor = 'auto';
      setIsTouch(true);
      return;
    }

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = null;
    let idleTimer = null;
    let running = false;

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;

      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%,-50%)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%,-50%)`;
      }

      // Stop rAF loop when ring has caught up (close enough)
      if (Math.abs(mx - rx) < 0.5 && Math.abs(my - ry) < 0.5) {
        running = false;
        return;
      }

      raf = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      startLoop();
    };

    window.addEventListener('mousemove', onMove, { passive: true });

    // Delegate hover detection — uses event delegation instead of querySelectorAll
    const onOver = (e) => {
      const target = e.target.closest('a, button, .mag-btn, .work-card, .service-card, .logo-slot');
      if (target && ring.current) ring.current.classList.add('hovered');
    };
    const onOut = (e) => {
      const target = e.target.closest('a, button, .mag-btn, .work-card, .service-card, .logo-slot');
      if (target && ring.current) ring.current.classList.remove('hovered');
    };

    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      if (raf) cancelAnimationFrame(raf);
      if (idleTimer) clearTimeout(idleTimer);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={dot}  className="cursor-dot" style={{ top: 0, left: 0 }} />
      <div ref={ring} className="cursor-ring" style={{ top: 0, left: 0 }} />
    </>
  );
}
