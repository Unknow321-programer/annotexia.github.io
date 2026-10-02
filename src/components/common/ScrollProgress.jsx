"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const indicator = document.querySelector(".page-scroll-progress");
    if (!indicator || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const range = document.documentElement.scrollHeight - window.innerHeight;
        const progress = range > 0 ? Math.max(0, Math.min(1, window.scrollY / range)) : 0;
        indicator.style.transform = `scaleX(${progress})`;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return <div aria-hidden="true" className="page-scroll-progress" />;
}
