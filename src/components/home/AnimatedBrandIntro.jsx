"use client";

import { useEffect, useRef } from "react";

export default function AnimatedBrandIntro() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const frame = requestAnimationFrame(() => stage.classList.add("is-ready"));
    const formTimer = window.setTimeout(() => stage.classList.add("is-forming"), 4600);
    const formedTimer = window.setTimeout(() => stage.classList.add("is-formed"), 7900);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(formTimer);
      window.clearTimeout(formedTimer);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    if (!section || !stage) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    const update = () => {
      if (reducedMotion.matches) return;
      const stageTop = Number.parseFloat(getComputedStyle(stage).top) || 0;
      const travel = Math.max(1, section.offsetHeight - stage.offsetHeight);
      const bounds = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (stageTop - bounds.top) / travel));
      stage.style.setProperty("--intro-progress", progress.toFixed(4));
      stage.style.opacity = `${1 - Math.max(0, (progress - 0.12) / 0.88)}`;
      const back = stage.querySelector(".brand-network-back");
      const front = stage.querySelector(".brand-network-front");
      const grid = stage.querySelector(".brand-intro-grid");
      if (back) back.style.transform = `translate3d(0, ${-32 * progress}px, 0) rotate(${-8 * progress}deg) scale(${1 + 0.18 * progress})`;
      if (front) front.style.transform = `translate3d(0, ${18 * progress}px, 0) rotate(${12 * progress}deg) scale(${1 + 0.26 * progress})`;
      if (grid) grid.style.transform = `translate3d(0, ${-14 * progress}px, 0)`;
    };
    let frame = 0;
    const requestUpdate = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };
    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    const mark = stageRef.current?.querySelector(".brand-mark");
    const pupils = mark?.querySelector(".brand-eye-pupils");
    if (!mark || !pupils) return;
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;
    let blinkTimer = 0;
    let blinkResetTimer = 0;
    let antennaTimer = 0;
    const antenna = mark.querySelector(".brand-antenna-head");
    const blink = () => {
      if (!document.hidden) {
        mark.classList.add("is-blinking");
        window.clearTimeout(blinkResetTimer);
        blinkResetTimer = window.setTimeout(() => {
          mark.classList.remove("is-blinking");
        }, 170);
      }
    };
    const moveAntenna = () => {
      if (!antenna) return;
      const x = (Math.random() * 2 - 1) * 1.7;
      const y = (Math.random() * 2 - 1) * 1.1;
      antenna.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
      antennaTimer = window.setTimeout(moveAntenna, 900 + Math.random() * 1500);
    };
    const moveEyes = (event) => {
      const bounds = mark.getBoundingClientRect();
      const x = ((event.clientX - (bounds.left + bounds.width / 2)) / bounds.width) * 200;
      const y = ((event.clientY - (bounds.top + bounds.height / 2)) / bounds.height) * 150;
      const tx = Math.max(-2.4, Math.min(2.4, x * 0.18));
      const ty = Math.max(-2.1, Math.min(2.1, y * 0.18));
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        pupils.setAttribute("transform", `translate(${tx.toFixed(2)} ${ty.toFixed(2)})`);
      });
    };
    const resetEyes = () => {
      cancelAnimationFrame(frame);
      pupils.setAttribute("transform", "translate(0 0)");
    };
    blinkTimer = window.setInterval(blink, 5000);
    moveAntenna();
    window.addEventListener("pointermove", moveEyes, { passive: true });
    window.addEventListener("blur", resetEyes);
    return () => {
      cancelAnimationFrame(frame);
      window.clearInterval(blinkTimer);
      window.clearTimeout(blinkResetTimer);
      window.clearTimeout(antennaTimer);
      window.removeEventListener("pointermove", moveEyes);
      window.removeEventListener("blur", resetEyes);
    };
  }, []);

  return (
    <section ref={sectionRef} className="brand-intro-scene" aria-hidden="true">
      <div ref={stageRef} className="brand-intro-stage">
        <div className="brand-intro-grid" />
        <div className="brand-data-dots" aria-hidden="true">
          <span className="brand-data-point brand-data-point-one"><i /></span>
          <span className="brand-data-point brand-data-point-two"><i /></span>
          <span className="brand-data-point brand-data-point-three"><i /></span>
          <span className="brand-data-point brand-data-point-four"><i /></span>
          <span className="brand-wave-node brand-wave-node-one"><i /></span>
          <span className="brand-wave-node brand-wave-node-two"><i /></span>
          <span className="brand-wave-node brand-wave-node-three"><i /></span>
          <span className="brand-wave-node brand-wave-node-four"><i /></span>
        </div>
        <div className="brand-network brand-network-back" />
        <div className="brand-network brand-network-front" />
        <div className="brand-mark-wrap">
          <svg className="brand-mark" viewBox="0 0 200 136" fill="none">
            <path className="brand-link" d="M100 25V43M88 38 96 43M112 38 104 43" />
            <g className="brand-antenna-head">
              <circle className="brand-node brand-node-main" cx="100" cy="20" r="5" />
            </g>
            <g className="brand-eye" aria-hidden="true">
              <ellipse className="brand-eye-white" cx="88" cy="33.5" rx="5.8" ry="5.3" />
            </g>
            <g className="brand-eye" aria-hidden="true">
              <ellipse className="brand-eye-white" cx="112" cy="33.5" rx="5.8" ry="5.3" />
            </g>
            <rect className="brand-layer brand-layer-top" x="60" y="43" width="80" height="14" rx="5" />
            <rect className="brand-layer brand-layer-mid" x="50" y="62" width="100" height="14" rx="5" />
            <rect className="brand-layer brand-layer-base" x="40" y="81" width="120" height="14" rx="5" />
            <g className="brand-eye-pupils" aria-hidden="true">
              <circle cx="88" cy="33.5" r="2.4" />
              <circle cx="112" cy="33.5" r="2.4" />
            </g>
            <path className="brand-base-line" d="M30 101q70 30 140 0" />
            <path className="brand-data-trace" d="M34 102q66 25 132 0" />
          </svg>
          <span className="brand-word">Annotexia</span>
          <span className="brand-tagline" aria-label="Your Data is our responsibility">
            {Array.from("Your Data is our responsibility", (character, index) => {
              const pileX = Math.round(Math.sin((index + 1) * 12.9898) * 38);
              const pileY = Math.round(Math.cos((index + 1) * 4.141) * 28);
              const pileRotation = Math.round(Math.sin((index + 1) * 7.31) * 68);
              const startX = Math.round(Math.sin((index + 1) * 2.17) * 32);
              return (
              <span
                key={`${character}-${index}`}
                style={{
                  "--char-index": index,
                  "--pile-x": `${pileX}px`,
                  "--pile-y": `${pileY}px`,
                  "--pile-rotation": `${pileRotation}deg`,
                  "--start-x": `${startX}vw`,
                }}
              >
                {character === " " ? "\u00a0" : character}
              </span>
              );
            })}
          </span>
        </div>
        <span className="brand-flow-node brand-flow-one" />
        <span className="brand-flow-node brand-flow-two" />
        <span className="brand-flow-node brand-flow-three" />
      </div>
    </section>
  );
}
