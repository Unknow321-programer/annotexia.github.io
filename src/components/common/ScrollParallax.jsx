"use client";

import { useEffect, useRef } from "react";

export default function ScrollParallax({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = node.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, -bounds.top / (window.innerHeight * 0.9)));
        const mobile = window.matchMedia("(max-width: 767px)").matches;
        const distance = mobile ? 18 : 46;
        node.style.setProperty("--parallax-y", `${-distance * progress}px`);
        node.style.setProperty("--parallax-x", `${(node.dataset.pointerX || 0) * (mobile ? 2 : 5)}px`);
        node.style.setProperty("--parallax-scale", `${1 - progress * (mobile ? 0.025 : 0.055)}`);
        node.style.setProperty("--parallax-rotate", `${progress * (mobile ? 0.15 : 0.65)}deg`);
        node.style.setProperty("--parallax-opacity", `${1 - progress * 0.18}`);
        node.style.setProperty("--scroll-progress", progress.toFixed(4));
      });
    };

    const onPointerMove = (event) => {
      const bounds = node.getBoundingClientRect();
      const normalizedX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      node.dataset.pointerX = Math.max(-1, Math.min(1, normalizedX)).toFixed(3);
      update();
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    node.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      node.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <div ref={ref} className={`scroll-parallax ${className}`}>{children}</div>;
}
