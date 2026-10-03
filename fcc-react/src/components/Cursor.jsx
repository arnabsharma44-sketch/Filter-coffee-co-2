import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    // Don't run the cursor on touch devices at all
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      // Restore default cursor for touch
      document.body.style.cursor = 'auto';
      return;
    }

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;

      if (dot.current) {
        dot.current.style.left  = mx + 'px';
        dot.current.style.top   = my + 'px';
        dot.current.style.transform = 'translate(-50%,-50%)';
      }
      if (ring.current) {
        ring.current.style.left  = rx + 'px';
        ring.current.style.top   = ry + 'px';
        ring.current.style.transform = 'translate(-50%,-50%)';
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    const hoverEls = document.querySelectorAll('a, button, .mag-btn, .work-card, .service-card, .logo-slot');
    const enter = () => ring.current?.classList.add('hovered');
    const leave = () => ring.current?.classList.remove('hovered');
    hoverEls.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Don't render cursor elements on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      <div ref={dot}  className="cursor-dot"  />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
