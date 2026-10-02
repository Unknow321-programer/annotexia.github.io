"use client";

import { useEffect, useRef, useState } from "react";

export default function Process() {
  const steps = [
    "Requirement Analysis",
    "Dataset Preparation",
    "Annotation & Labeling",
    "Quality Assurance",
    "Final Delivery",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const particleRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const progressBar = progressRef.current;
    const stickyStage = section?.querySelector(".process-sticky-stage");
    const stepsContainer = section?.querySelector(".process-steps");
    const progressRail = section?.querySelector(".process-progress");
    const particle = particleRef.current;
    if (!section || !progressBar || !stickyStage || !stepsContainer || !progressRail) return;
    const media = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    let previousStep = -1;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!media.matches) return;
        const bounds = section.getBoundingClientRect();
        const stickyTop = Number.parseFloat(getComputedStyle(stickyStage).top) || 0;
        const range = Math.max(1, section.offsetHeight - stickyStage.offsetHeight);
        const progress = Math.max(0, Math.min(1, (stickyTop - bounds.top) / range));
        const stepIndex = Math.min(steps.length - 1, Math.floor(progress * steps.length));
        progressBar.style.setProperty("--workflow-progress", progress.toFixed(4));
        stepsContainer.style.setProperty("--workflow-progress", progress.toFixed(4));
        if (particle) {
          const travel = Math.max(0, progressRail.clientWidth - particle.offsetWidth);
          particle.style.transform = `translateX(${travel * progress}px)`;
          particle.style.opacity = progress > 0.015 && progress < 0.99 ? "1" : "0";
        }
        if (stepIndex !== previousStep) {
          previousStep = stepIndex;
          setActiveStep(stepIndex);
        }
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    media.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      media.removeEventListener("change", update);
    };
  }, [steps.length]);

  return (
    <section ref={sectionRef} className="process-section relative bg-slate-950 text-white">
      <div aria-hidden="true" className="process-glow process-glow-one" />
      <div aria-hidden="true" className="process-glow process-glow-two" />
      <div className="process-sticky-stage">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">

        <div className="scroll-reveal mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
            Managed annotation workflow
          </p>
          <h2 className="text-4xl font-bold">
            From Raw Data to Model-Ready Dataset
          </h2>
        </div>

        {/* Progress Line */}
        <div className="scroll-reveal process-progress relative mb-9 hidden md:block">
          <div className="h-1 rounded-full bg-white/15"></div>

          <div ref={progressRef} className="process-progress-value absolute left-0 top-0 h-1 w-full rounded-full bg-gradient-to-r from-teal-300 to-blue-400" />
          <span ref={particleRef} aria-hidden="true" className="process-data-particle" />
        </div>

        {/* Steps */}
        <div className="scroll-reveal process-steps grid gap-3 sm:grid-cols-2 md:grid-cols-5 md:gap-4">
          {steps.map((step, index) => (
            <div
              key={step}
              aria-current={activeStep === index ? "step" : undefined}
              className={`process-step relative rounded-2xl border p-5 text-center transition-all duration-300 sm:p-6 ${activeStep === index
                  ? "border-cyan-200 bg-white text-slate-950 shadow-xl"
                  : "border-white/15 bg-white/5 text-white"
                }`}
            >
              <span className="process-step-index mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/15 text-xl font-bold">
                {index + 1}
              </span>

              <h3
                className={`font-medium transition-colors ${activeStep === index
                    ? "text-slate-950"
                    : "text-slate-200"
                  }`}
              >
                {step}
              </h3>
            </div>
          ))}

        </div>

        {/* Description Panel */}
        <div className="scroll-reveal mt-12 text-center">
          <p key={activeStep} className="process-description mx-auto max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-6 text-slate-200">
            {activeStep === 0 && "We understand your project requirements in detail."}
            {activeStep === 1 && "We prepare and structure datasets for annotation."}
            {activeStep === 2 && "Expert annotators label data with precision."}
            {activeStep === 3 && "Multiple QA checks ensure high accuracy."}
            {activeStep === 4 && "Final validated dataset is delivered to you."}
          </p>
        </div>

      </div>
      </div>
    </section>
  );
}
