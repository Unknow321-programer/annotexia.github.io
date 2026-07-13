"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="scroll-reveal text-center mb-14">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 md:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Find answers to common questions about our AI data annotation,
            computer vision, machine learning datasets, pricing, security,
            project workflow, and delivery process.
          </p>
        </div>

        {/* FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="scroll-reveal overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
                style={{
                  "--reveal-delay": `${index * 80}ms`,
                }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-6">
                    {faq.question}
                  </h3>

                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl font-semibold transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-blue-600 text-white"
                        : ""
                    }`}
                  >
                    +
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-6 text-slate-600 leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}