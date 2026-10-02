"use client";

import { useEffect, useRef } from "react";

export default function AnnotationWorkspace({ compact = false }) {
  const workspaceRef = useRef(null);

  useEffect(() => {
    const workspace = workspaceRef.current;
    const hero = workspace?.closest(".hero-section");
    if (!workspace || !hero) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const box = workspace.querySelector(".annotation-region");
    const region = workspace.querySelector(".annotation-region-secondary");
    const polygon = workspace.querySelector(".annotation-link");
    const points = [...workspace.querySelectorAll(".annotation-point")];
    const crosshair = workspace.querySelector(".annotation-crosshair");
    const review = workspace.querySelector(".annotation-review-mark");
    const strip = workspace.querySelector(".annotation-data-strip");
    const length = (element, fallback) => {
      if (!element) return fallback;
      try { return element.getTotalLength(); } catch { return fallback; }
    };
    const boxLength = length(box, 520);
    const regionLength = length(region, 520);
    const polygonLength = length(polygon, 410);
    const progressBetween = (value, start, end) => Math.max(0, Math.min(1, (value - start) / (end - start)));
    const draw = (element, amount, pathLength) => {
      if (!element) return;
      element.style.strokeDasharray = `${pathLength}`;
      element.style.strokeDashoffset = `${pathLength * (1 - amount)}`;
      element.style.opacity = amount > 0 ? "1" : "0";
    };
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const heroTop = hero.getBoundingClientRect().top + window.scrollY;
        const distance = Math.max(420, Math.min(900, hero.offsetHeight * 0.7));
        const progress = reduced ? 1 : progressBetween(window.scrollY - heroTop, 0, distance);
        draw(box, progressBetween(progress, 0.02, 0.42), boxLength);
        draw(region, progressBetween(progress, 0.43, 0.76), regionLength);
        draw(polygon, progressBetween(progress, 0.22, 0.62), polygonLength);
        points.forEach((point, index) => {
          point.style.opacity = `${progressBetween(progress, 0.34 + index * 0.045, 0.48 + index * 0.045)}`;
          point.style.transform = `scale(${0.55 + progressBetween(progress, 0.34 + index * 0.045, 0.48 + index * 0.045) * 0.45})`;
        });
        if (crosshair) crosshair.style.opacity = `${progressBetween(progress, 0.48, 0.65)}`;
        if (review) {
          const confirm = progressBetween(progress, 0.72, 0.9);
          review.style.opacity = `${confirm}`;
          review.style.transform = `scale(${0.8 + confirm * 0.2})`;
        }
        if (strip) strip.style.opacity = `${progressBetween(progress, 0.52, 0.7)}`;
        workspace.style.setProperty("--annotation-progress", progress.toFixed(4));
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
    <div ref={workspaceRef} aria-hidden="true" className={`annotation-workspace${compact ? " annotation-workspace-compact" : ""}`}>
      <svg className="annotation-overlay" viewBox="0 0 720 670" fill="none" preserveAspectRatio="none">
        <path className="annotation-region" d="M151 185 247 154 300 185 289 314 209 337 158 286Z" />
        <path className="annotation-region annotation-region-secondary" d="M424 334 523 318 564 355 548 461 462 477 418 429Z" />
        <path className="annotation-link" d="M202 185 226 168 249 172 277 203 267 280 224 307 177 279 171 224Z" />
        <circle className="annotation-point point-one" cx="202" cy="185" r="5" />
        <circle className="annotation-point point-two" cx="249" cy="172" r="5" />
        <circle className="annotation-point point-three" cx="277" cy="203" r="5" />
        <circle className="annotation-point point-four" cx="267" cy="280" r="5" />
        <circle className="annotation-point point-five" cx="224" cy="307" r="5" />
        <circle className="annotation-point point-six" cx="177" cy="279" r="5" />
        <path className="annotation-crosshair" d="M145 185h-14m20-20v-14m99 34h14m-20-20v-14M418 334h-14m20-20v-14m99 34h14m-20-20v-14" />
      </svg>
      <span className="annotation-inspection" />
      <span className="annotation-review-mark"><svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4L19 6" /></svg></span>
      <span className="annotation-data-strip"><i /><i /><i /><i /><i /></span>
    </div>
  );
}
