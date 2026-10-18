'use client';

import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

// Helper to split children (strings or nested React elements) into animatable word spans
function parseWords(children) {
  const result = [];
  let keyCounter = 0;

  function traverse(child, inheritedProps = {}) {
    if (typeof child === 'string' || typeof child === 'number') {
      const text = String(child);
      const parts = text.split(/(\s+)/);
      parts.forEach((part) => {
        if (!part) return;
        if (part.match(/^\s+$/)) {
          result.push(part);
        } else {
          result.push(
            <span
              key={`w-${keyCounter++}`}
              className={`word inline-block ${inheritedProps.className || ''}`}
              style={inheritedProps.style}
            >
              {part}
            </span>
          );
        }
      });
    } else if (Array.isArray(child)) {
      child.forEach((c) => traverse(c, inheritedProps));
    } else if (React.isValidElement(child)) {
      traverse(child.props.children, {
        className: `${inheritedProps.className || ''} ${child.props.className || ''}`.trim(),
        style: { ...inheritedProps.style, ...child.props.style }
      });
    }
  }

  traverse(children);
  return result;
}

const ScrollReveal = ({
  children,
  scrollContainerRef,
  baseOpacity = 0.15,
  baseRotation = 2,
  enableBlur = false,
  blurStrength = 4,
  start = 'top 92%',
  end = 'top 45%',
  containerClassName = '',
  textClassName = '',
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => parseWords(children), [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;
    const ctx = gsap.context(() => {
      if (baseRotation !== 0) {
        gsap.fromTo(
          el,
          { transformOrigin: '0% 50%', rotate: baseRotation },
          {
            ease: 'power2.out',
            rotate: 0,
            scrollTrigger: {
              trigger: el,
              scroller,
              start,
              end,
              scrub: 0.8,
              fastScrollEnd: true,
            },
          }
        );
      }

      const wordElements = el.querySelectorAll('.word');

      const fromVars = {
        opacity: baseOpacity,
        y: 12,
        ...(enableBlur ? { filter: `blur(${blurStrength}px)` } : {}),
      };

      const toVars = {
        ease: 'power2.out',
        opacity: 1,
        y: 0,
        ...(enableBlur ? { filter: 'blur(0px)' } : {}),
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          scroller,
          start,
          end,
          scrub: 0.8,
          fastScrollEnd: true,
        },
      };

      gsap.fromTo(wordElements, fromVars, toVars);
    }, containerRef);

    return () => ctx.revert();
  }, [scrollContainerRef, baseRotation, baseOpacity, enableBlur, blurStrength, start, end]);

  return (
    <div ref={containerRef} className={`scroll-reveal-container ${containerClassName}`}>
      <div className={`scroll-reveal-text ${textClassName}`}>{splitText}</div>
    </div>
  );
};

export default ScrollReveal;
