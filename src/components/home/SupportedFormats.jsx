import Link from "next/link";

const formats = [
  {
    name: "COCO",
    icon: "📦",
    title: "COCO Dataset",
    description:
      "Industry-standard annotation format supporting object detection, instance segmentation, semantic segmentation, keypoints, captions, and computer vision datasets.",
    tags: [
      "Object Detection",
      "Segmentation",
      "Keypoints",
      "Computer Vision",
    ],
  },

  {
    name: "YOLO",
    icon: "🎯",
    title: "YOLO Format",
    description:
      "Optimized annotation format for YOLO object detection models widely used for real-time AI applications and edge deployment.",
    tags: [
      "Detection",
      "Bounding Box",
      "Real-Time AI",
      "Training",
    ],
  },

  {
    name: "Pascal VOC",
    icon: "📄",
    title: "Pascal VOC XML",
    description:
      "XML-based dataset format commonly used for object detection, image classification, and academic computer vision benchmarks.",
    tags: [
      "XML",
      "Detection",
      "Benchmark",
      "Vision",
    ],
  },

  {
    name: "JSON",
    icon: "{}",
    title: "JSON Annotation",
    description:
      "Flexible structured annotation format supporting OCR, NLP, AI pipelines, custom metadata, and enterprise integrations.",
    tags: [
      "Flexible",
      "Metadata",
      "API",
      "Custom",
    ],
  },

  {
    name: "XML",
    icon: "</>",
    title: "XML Dataset",
    description:
      "Structured markup format used for enterprise annotation workflows and legacy AI systems requiring hierarchical data.",
    tags: [
      "Structured",
      "Enterprise",
      "Custom",
      "Legacy",
    ],
  },

  {
    name: "CSV",
    icon: "📊",
    title: "CSV Labels",
    description:
      "Simple tabular annotation format supporting machine learning datasets, analytics, OCR exports, and structured data.",
    tags: [
      "Analytics",
      "ML",
      "Structured",
      "Simple",
    ],
  },

  {
    name: "JSONL",
    icon: "🤖",
    title: "JSONL",
    description:
      "Preferred dataset format for Large Language Models, RLHF, conversational AI, prompt engineering, and Generative AI.",
    tags: [
      "LLMs",
      "RLHF",
      "NLP",
      "Generative AI",
    ],
  },

  {
    name: "Custom",
    icon: "⚙️",
    title: "Custom Formats",
    description:
      "Need another format? We convert datasets into customer-specific formats and integrate directly with existing AI workflows.",
    tags: [
      "Conversion",
      "Custom",
      "Enterprise",
      "API",
    ],
  },
];
export default function SupportedFormats() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="scroll-reveal max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Supported Dataset Formats

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">

            AI-Ready Dataset Formats
            <br />
            for Every Machine Learning Pipeline

          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-8">

            Annotexia delivers datasets in industry-standard annotation
            formats used across Computer Vision, Machine Learning,
            Natural Language Processing, Large Language Models,
            Healthcare AI, Sports Analytics, Autonomous Vehicles,
            Agriculture AI, and enterprise AI applications.

          </p>

        </div>

        {/* Dataset Cards */}

        <div className="scroll-reveal grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {formats.map((format) => (

            <div
              key={format.name}
              className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">

                {format.icon}

              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {format.title}

              </h3>

              {/* Description */}

              <p className="mt-5 text-slate-600 leading-8">

                {format.description}

              </p>

              {/* Tags */}

              <div className="flex flex-wrap gap-2 mt-8">

                {format.tags.map((tag) => (

                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium"
                  >
                    {tag}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>
                {/* Format Conversion CTA */}

        <div className="scroll-reveal mt-24">

          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">

            <div className="max-w-5xl mx-auto px-10 py-20 text-center">

              <span className="uppercase tracking-[3px] text-blue-400 font-semibold">

                Flexible Dataset Delivery

              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">

                Need a Different Dataset Format?
                We've Got You Covered.

              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                Every AI team has unique data requirements. Annotexia can
                export annotations in industry-standard formats or convert
                datasets into customer-specific structures that integrate
                seamlessly with your existing AI training pipeline, machine
                learning workflow, or enterprise annotation platform.

              </p>

              {/* Feature Cards */}

              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-14">

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    Format Conversion

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Convert between COCO, YOLO, XML, JSON, CSV, JSONL,
                    and custom annotation formats.

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    Enterprise Ready

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Compatible with enterprise AI workflows,
                    annotation platforms, and cloud-based pipelines.

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    Custom Schemas

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    We can deliver annotations in your own proprietary
                    schema or annotation structure.

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    AI Pipeline Integration

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Datasets prepared for seamless integration into
                    Computer Vision, NLP, and Machine Learning workflows.

                  </p>

                </div>

              </div>

              {/* CTA Buttons */}

              <div className="flex flex-wrap justify-center gap-5 mt-14">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Request Custom Format
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition"
                >
                  View Our Services
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}