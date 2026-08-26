"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of data can Annotexia annotate?",
    answer:
      "Annotexia provides annotation and labeling services for images, videos, text, audio, LiDAR and other structured or unstructured data. We support AI applications across Computer Vision, NLP, LLMs, Robotics, Healthcare, Sports Analytics, Agriculture, Retail and other industries.",
  },

  {
    question: "What annotation services do you provide?",
    answer:
      "Our services include bounding box annotation, polygon annotation, semantic and instance segmentation, keypoint annotation, image and video classification, object tracking, OCR, text annotation, NLP labeling, audio annotation and LLM-related data evaluation.",
  },

  {
    question: "Can you work with our existing annotation platform?",
    answer:
      "Yes. Our teams can work with platforms such as CVAT, Label Studio, Labelbox, Roboflow, SuperAnnotate, Supervisely and customer-specific annotation platforms.",
  },

  {
    question: "Can you follow our existing annotation guidelines?",
    answer:
      "Yes. We can work from customer-provided annotation guidelines, class definitions, attributes and edge-case instructions. We can also help identify unclear cases during project setup.",
  },

  {
    question: "How do you maintain annotation quality?",
    answer:
      "We establish project-specific guidelines, validate the workflow using sample data and use quality-review processes during production. Client feedback can also be incorporated into the workflow to improve consistency.",
  },

  {
    question: "Can I start with a small pilot project?",
    answer:
      "Yes. A pilot project can help validate the annotation approach, quality expectations, workflow and estimated turnaround before scaling to a larger dataset.",
  },

  {
    question: "What dataset formats do you deliver?",
    answer:
      "Depending on the project, we can provide formats such as COCO, YOLO, Pascal VOC, JSON, XML, CSV, JSONL and custom schemas based on your requirements.",
  },

  {
    question: "How is annotation pricing calculated?",
    answer:
      "Pricing depends on factors such as data type, annotation complexity, dataset volume, quality requirements and turnaround time. Contact us with your project details and we can provide a project-specific estimate.",
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

                Let&apos;s Discuss Your
                AI Annotation Project

              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300">

                Every AI project is unique. Whether you&apos;re building
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