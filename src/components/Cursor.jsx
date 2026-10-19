import { useEffect, useRef, useState } from 'react';
import TextCursor from './TextCursor';

/**
 * Custom Cursor with TextCursor integration from React Bits.
 * Displays a sleek trailing "FCC" stamp trail with an optional precision point.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.style.cursor = 'auto';
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <>
      {/* Precision Tip Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#111318] pointer-events-none z-[100000] will-change-transform"
      />

      {/* React Bits TextCursor Stamp Trail */}
      <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden text-cursor--global">
        <TextCursor
          text="FCC"
          mode="stamp"
          fontSize={22}
          fontWeight={800}
          color="#111318"
          fontFamily="Outfit, 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
          spacing={76}
          maxPoints={7}
          shrink={0.5}
          fade={0.65}
          smoothing={0.25}
          exitDuration={0.45}
          removalInterval={28}
          followMouseDirection={true}
          keepUpright={true}
          randomFloat={true}
          popIn={true}
        />
      </div>
    </>
  );
}
