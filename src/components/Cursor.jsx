import { useEffect, useRef, useState } from 'react';

/**
 * Standard Animated Custom Cursor — Smooth fluid follow ring + precision center dot.
 * Completely trail-free, responsive with rAF lerp, hover expansion, and click animation.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return false;
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  });

  useEffect(() => {
    if (isTouch) {
      document.body.style.cursor = 'auto';
      return;
    }

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let rafId = null;
    let isMoving = false;
    let isVisible = false;

    const setVisibility = (visible) => {
      isVisible = visible;
      const opacity = visible ? '1' : '0';
      if (dotRef.current) dotRef.current.style.opacity = opacity;
      if (ringRef.current) ringRef.current.style.opacity = opacity;
    };

    const loop = () => {
      // Smooth interpolation for the outer ring
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }

      // Stop loop when close enough to save CPU
      if (Math.abs(mx - rx) < 0.25 && Math.abs(my - ry) < 0.25) {
        isMoving = false;
        return;
      }

      rafId = requestAnimationFrame(loop);
    };

    const startLoop = () => {
      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      if (!isVisible) {
        rx = mx;
        ry = my;
        setVisibility(true);
      }

      // Center dot follows directly with 0 latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }

      startLoop();
    };

    const onMouseDown = () => {
      if (ringRef.current) ringRef.current.classList.add('active');
    };

    const onMouseUp = () => {
      if (ringRef.current) ringRef.current.classList.remove('active');
    };

    const onMouseLeave = () => {
      setVisibility(false);
    };

    const onMouseEnter = () => {
      setVisibility(true);
    };

    // Hover detection for interactive elements
    const onMouseOver = (e) => {
      const el = e.target;
      if (
        el &&
        (el.tagName === 'A' ||
          el.tagName === 'BUTTON' ||
          el.getAttribute('role') === 'button' ||
          el.closest('a, button, .mag-btn, .work-card, .logo-slot, .service-card, input, select, textarea'))
      ) {
        if (ringRef.current) ringRef.current.classList.add('hovered');
      }
    };

    const onMouseOut = (e) => {
      const el = e.target;
      if (
        el &&
        (el.tagName === 'A' ||
          el.tagName === 'BUTTON' ||
          el.getAttribute('role') === 'button' ||
          el.closest('a, button, .mag-btn, .work-card, .logo-slot, .service-card, input, select, textarea'))
      ) {
        if (ringRef.current) ringRef.current.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        className="cursor-dot opacity-0 transition-opacity duration-200 pointer-events-none"
      />
      {/* Fluid Outer Following Ring */}
      <div
        ref={ringRef}
        className="cursor-ring opacity-0 transition-opacity duration-200 pointer-events-none"
      />
    </>
  );
}
