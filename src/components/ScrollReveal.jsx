'use client';

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  baseOpacity = 0.15,
  baseRotation = 2,
  containerClassName = '',
  textClassName = '',
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word inline-block" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'power2.out',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 92%',
            end: 'top 45%',
            scrub: 1.5,
          },
        }
      );

      const wordElements = el.querySelectorAll('.word');

      gsap.fromTo(
        wordElements,
        { opacity: baseOpacity, y: 12 },
        {
          ease: 'power2.out',
          opacity: 1,
          y: 0,
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top 92%',
            end: 'top 45%',
            scrub: 1.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [scrollContainerRef, baseRotation, baseOpacity]);

  return (
    <div ref={containerRef} className={`scroll-reveal-container ${containerClassName}`}>
      <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
    </div>
  );
};

export default ScrollReveal;
