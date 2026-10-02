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
    <section className="home-section formats-section py-20 bg-slate-50 sm:py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="scroll-reveal section-intro max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Supported Dataset Formats

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">

            Your Data, Your Format

          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-8">

            We deliver annotations in the format your ML pipeline requires—including COCO, YOLO, Pascal VOC, JSON, XML, CSV, JSONL and custom schemas.

          </p>

        </div>

        {/* Dataset Cards */}

        <div className="scroll-reveal grid format-card-grid lg:grid-cols-4 md:grid-cols-2 gap-5 sm:gap-7 mt-12 sm:mt-16">

          {formats.map((format) => (

            <div
              key={format.name}
              className="format-card group relative overflow-hidden bg-white rounded-3xl border border-slate-200 p-6 transition-all duration-500 sm:p-8"
            >

              {/* Icon */}

              <div aria-hidden="true" className="format-card-data absolute -right-8 -top-8 h-28 w-28 rounded-full" />

              <div className="format-icon relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">

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

      </div>

    </section>
  );
}
