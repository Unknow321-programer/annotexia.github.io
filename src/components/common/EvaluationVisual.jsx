"use client";

import { useEffect, useRef } from "react";

export default function EvaluationVisual() {
  const visualRef = useRef(null);

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual) return;
    const path = visual.querySelector(".evaluation-route");
    const ring = visual.querySelector(".evaluation-ring");
    const bars = [...visual.querySelectorAll(".evaluation-bar")];
    const length = path?.getTotalLength?.() ?? 260;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      if (path) {
        path.style.strokeDasharray = `${length}`;
        path.style.strokeDashoffset = "0";
      }
      if (ring) ring.style.transform = "none";
      bars.forEach((bar, index) => { bar.style.transform = `scaleY(${0.6 + index * 0.09})`; });
      visual.style.opacity = ".28";
      return;
    }
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const bounds = visual.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.82 - bounds.top) / (window.innerHeight * 0.9 + bounds.height)));
        if (path) {
          path.style.strokeDasharray = `${length}`;
          path.style.strokeDashoffset = `${length * (1 - progress)}`;
        }
        if (ring) ring.style.transform = `rotate(${progress * 210}deg)`;
        bars.forEach((bar, index) => {
          const level = Math.max(0, Math.min(1, (progress - index * 0.12) / 0.62));
          bar.style.transform = `scaleY(${0.12 + level * (0.48 + index * 0.09)})`;
        });
        visual.style.opacity = `${0.18 + progress * 0.38}`;
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

  return (
    <div ref={visualRef} aria-hidden="true" className="quality-evaluation-visual">
      <svg viewBox="0 0 280 150" fill="none">
        <path className="evaluation-route" d="M8 112h54l26-48 28 24 28-48 34 42h94" />
        <circle className="evaluation-ring" cx="226" cy="84" r="31" />
        <circle cx="226" cy="84" r="4" fill="currentColor" />
      </svg>
      <div className="evaluation-bars"><i className="evaluation-bar" /><i className="evaluation-bar" /><i className="evaluation-bar" /><i className="evaluation-bar" /></div>
    </div>
  );
}
