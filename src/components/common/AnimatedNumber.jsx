"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const match = String(value).match(/^(\d+)(.*)$/);
    const node = ref.current;
    if (!match || !node) return;

    const target = Number(match[1]);
    const suffix = match[2];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;

      const start = performance.now();
      const duration = 1100;
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(`${Math.round(target * eased)}${suffix}`);
        if (progress < 1) frame = requestAnimationFrame(tick);
      };

      frame = requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.6 });

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <span ref={ref} aria-label={String(value)}>{displayValue}</span>;
}
