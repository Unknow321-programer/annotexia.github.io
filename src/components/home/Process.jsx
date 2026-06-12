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
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          Our Process
        </h2>

        {/* Progress Line */}
        <div className="relative mb-12">
          <div className="h-1 bg-gray-200 rounded-full"></div>

          <div
            className="h-1 bg-black rounded-full absolute top-0 left-0 transition-all duration-500"
            style={{
              width: `${(activeStep / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={step}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer bg-white border rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                activeStep === index
                  ? "border-black shadow-md"
                  : "border-gray-200"
              }`}
            >
              <div
                className={`text-3xl font-bold mb-3 transition-colors ${
                  activeStep === index
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                {index + 1}
              </div>

              <h3
                className={`font-medium transition-colors ${
                  activeStep === index
                    ? "text-black"
                    : "text-gray-600"
                }`}
              >
                {step}
              </h3>
            </div>
          ))}

        </div>

        {/* Description Panel */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
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