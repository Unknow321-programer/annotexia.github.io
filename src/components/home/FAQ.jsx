"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is data annotation?",
    answer:
      "Data annotation is the process of labeling images, videos, text, audio, LiDAR, or documents so AI and machine learning models can learn to recognize patterns and make accurate predictions.",
  },

  {
    question: "Why is high-quality data annotation important for AI?",
    answer:
      "AI models are only as good as the data used to train them. Accurate annotation improves model performance, reduces bias, increases prediction accuracy, and accelerates AI development.",
  },

  {
    question: "Which data annotation services does Annotexia provide?",
    answer:
      "Annotexia provides Image Annotation, Video Annotation, Text Annotation, Audio Annotation, and Data Labeling services for Computer Vision, NLP, Healthcare AI, Sports Analytics, Agriculture AI, Retail AI, and Manufacturing AI projects.",
  },

  {
    question: "Which industries do you support?",
    answer:
      "We support Sports Analytics, Healthcare AI, Autonomous Vehicles, Computer Vision, Agriculture, Drone & Aerial Imagery, Retail & E-commerce, Manufacturing, and Industrial AI applications.",
  },

  {
    question: "Which annotation tools do you use?",
    answer:
      "Our team has experience with CVAT, Label Studio, Labelbox, Roboflow, Supervisely, SuperAnnotate, and customer-specific annotation platforms.",
  },

  {
    question: "Which annotation formats do you support?",
    answer:
      "We support COCO, YOLO, Pascal VOC, JSON, XML, CSV, JSONL, and custom formats depending on your AI pipeline.",
  },

  {
    question: "Can you work on our annotation platform?",
    answer:
      "Yes. Our team can work directly within your preferred annotation platform or enterprise workflow, reducing migration effort and maintaining project consistency.",
  },

  {
    question: "How do you ensure annotation quality?",
    answer:
      "We follow multi-level quality assurance workflows including annotation guidelines, reviewer validation, quality sampling, feedback loops, and final verification before dataset delivery.",
  },

  {
    question: "Can you scale annotation teams?",
    answer:
      "Yes. Annotexia can scale dedicated annotation teams according to project size, complexity, and delivery timelines.",
  },

  {
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. We are happy to sign Non-Disclosure Agreements (NDAs) before project discussions and maintain strict confidentiality throughout the project lifecycle.",
  },

  {
    question: "How long does a data annotation project take?",
    answer:
      "Project timelines depend on dataset size, annotation complexity, quality requirements, and review cycles. We provide realistic delivery estimates after reviewing project requirements.",
  },

  {
    question: "Do you support long-term annotation projects?",
    answer:
      "Yes. We support both short-term pilot projects and long-term dedicated annotation engagements for enterprise AI teams.",
  },

  {
    question: "How can I request a quote?",
    answer:
      "Simply contact us through our Contact page with your dataset details, annotation requirements, expected formats, and timeline. Our team will provide a customized proposal.",
  },

  {
    question: "What makes Annotexia different?",
    answer:
      "Annotexia combines experienced annotation specialists, structured QA workflows, flexible engagement models, enterprise-ready communication, and scalable AI data annotation services tailored to customer requirements.",
  },

  {
    question: "Do you support custom annotation guidelines?",
    answer:
      "Yes. We follow customer-provided annotation guidelines or help create detailed annotation instructions before production begins to ensure consistent labeling quality.",
  },
];
export default function HomeFAQ() {

  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-slate-50">

      <div className="scroll-reveal max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="scroll-reveal text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Frequently Asked Questions

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900">

            Questions About
            <br />
            AI Data Annotation

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600 max-w-3xl mx-auto">

            Find answers to common questions about AI data annotation,
            data labeling services, annotation quality, supported
            formats, project workflows, and enterprise collaboration.

          </p>

        </div>

        {/* FAQ */}

        <div className="scroll-reveal mt-20 space-y-5">

          {faqs.map((faq, index) => {

            const open = active === index;

            return (

              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm"
              >

                <button
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  className="w-full flex items-center justify-between px-8 py-7 text-left"
                >

                  <h3 className="text-lg lg:text-xl font-bold text-slate-900 pr-6">

                    {faq.question}

                  </h3>

                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-8 pb-8 text-slate-600 leading-8">

                      {faq.answer}

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>
                {/* Bottom CTA */}

        <div className="scroll-reveal mt-24">

          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

            <div className="max-w-4xl mx-auto px-10 py-20 text-center">

              <span className="uppercase tracking-[3px] text-blue-400 font-semibold">
                Still Have Questions?
              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">

                Let's Discuss Your
                AI Annotation Project

              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300">

                Every AI project is unique. Whether you're building
                Computer Vision models, Healthcare AI, Sports Analytics,
                Agriculture AI, Manufacturing AI, or Large Language Models,
                our experts are ready to understand your requirements and
                recommend the best annotation workflow.

              </p>

              {/* Stats */}

              <div className="grid md:grid-cols-3 gap-8 mt-14">

                <div>

                  <div className="text-3xl font-black text-white">

                    5+

                  </div>

                  <p className="mt-2 text-slate-300">

                    Annotation Services

                  </p>

                </div>

                <div>

                  <div className="text-3xl font-black text-white">

                    8+

                  </div>

                  <p className="mt-2 text-slate-300">

                    Industries Supported

                  </p>

                </div>

                <div>

                  <div className="text-3xl font-black text-white">

                    Global

                  </div>

                  <p className="mt-2 text-slate-300">

                    Project Delivery

                  </p>

                </div>

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap justify-center gap-5 mt-14">

                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Request a Quote
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition"
                >
                  Explore Services
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}