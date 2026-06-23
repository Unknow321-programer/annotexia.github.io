"use client";

import { useState } from "react";

export default function Process() {
  const steps = [
    "Requirement Analysis",
    "Dataset Preparation",
    "Annotation & Labeling",
    "Quality Assurance",
    "Final Delivery",
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="scroll-reveal mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
            Managed annotation workflow
          </p>
          <h2 className="text-4xl font-bold">
            Our Process
          </h2>
        </div>

        {/* Progress Line */}
        <div className="scroll-reveal relative mb-12">
          <div className="h-1 bg-white/15 rounded-full"></div>

          <div
            className="h-1 bg-gradient-to-r from-teal-300 to-blue-400 rounded-full absolute top-0 left-0 transition-all duration-500"
            style={{
              width: `${(activeStep / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="scroll-reveal grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={step}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer rounded-lg border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${activeStep === index
                  ? "border-cyan-200 bg-white text-slate-950 shadow-xl"
                  : "border-white/15 bg-white/5 text-white"
                }`}
            >
              <div
                className={`text-3xl font-bold mb-3 transition-colors ${activeStep === index
                    ? "text-teal-700"
                    : "text-cyan-100"
                  }`}
              >
                {index + 1}
              </div>

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
          <p className="mx-auto max-w-2xl rounded-lg border border-white/15 bg-white/5 p-6 text-slate-200">
            {activeStep === 0 && "We understand your project requirements in detail."}
            {activeStep === 1 && "We prepare and structure datasets for annotation."}
            {activeStep === 2 && "Expert annotators label data with precision."}
            {activeStep === 3 && "Multiple QA checks ensure high accuracy."}
            {activeStep === 4 && "Final validated dataset is delivered to you."}
          </p>
        </div>

      </div>
    </section>
  );
}
