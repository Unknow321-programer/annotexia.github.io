import Link from "next/link";

const technologies = [
  {
    category: "Computer Vision",
    icon: "👁️",
    items: [
      "OpenCV",
      "YOLO",
      "Segment Anything (SAM)",
      "Grounding DINO",
      "Detectron2",
      "MediaPipe",
    ],
  },

  {
    category: "Machine Learning",
    icon: "🧠",
    items: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "ONNX",
      "Hugging Face",
      "MLflow",
    ],
  },

  {
    category: "Large Language Models",
    icon: "🤖",
    items: [
      "GPT",
      "Llama",
      "Gemini",
      "Claude",
      "Mistral",
      "DeepSeek",
    ],
  },

  {
    category: "Annotation Platforms",
    icon: "🖥️",
    items: [
      "CVAT",
      "Label Studio",
      "Labelbox",
      "Roboflow",
      "SuperAnnotate",
      "Supervisely",
    ],
  },

  {
    category: "Dataset Formats",
    icon: "📦",
    items: [
      "COCO",
      "YOLO",
      "Pascal VOC",
      "JSON",
      "XML",
      "CSV",
    ],
  },

  {
    category: "Cloud & Storage",
    icon: "☁️",
    items: [
      "AWS",
      "Google Cloud",
      "Azure",
      "S3",
      "Cloud Storage",
      "API Integration",
    ],
  },
];
export default function Technologies() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="scroll-reveal max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Technologies We Work With

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">

            Supporting Modern AI
            <br />
            Development Workflows

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            Annotexia prepares high-quality AI training data compatible
            with today's leading computer vision frameworks, machine
            learning ecosystems, large language models, annotation
            platforms, and cloud-based AI pipelines. Our focus is on
            delivering datasets that integrate smoothly into your
            existing development workflow.

          </p>

        </div>

        {/* Technology Categories */}

        <div className="scroll-reveal grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {technologies.map((tech) => (

            <div
              key={tech.category}
              className="bg-white rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">

                {tech.icon}

              </div>

              {/* Category */}

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {tech.category}

              </h3>

              {/* Technologies */}

              <div className="flex flex-wrap gap-3 mt-8">

                {tech.items.map((item) => (

                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    {item}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>
                {/* Enterprise CTA */}

        <div className="scroll-reveal mt-24">

          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">

            <div className="max-w-5xl mx-auto px-10 py-20 text-center">

              <span className="uppercase tracking-[3px] text-blue-400 font-semibold">

                AI-Ready Training Data

              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">

                Datasets Built for Modern
                AI Development

              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                Whether you're developing Computer Vision models,
                Machine Learning applications, Large Language Models,
                OCR systems, or Generative AI solutions, Annotexia
                delivers structured, high-quality datasets compatible
                with your preferred frameworks, annotation platforms,
                and deployment workflows.

              </p>

              {/* Feature Cards */}

              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-14">

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    AI Compatible

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Training datasets prepared for modern AI
                    frameworks and production pipelines.

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    Enterprise Workflows

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Flexible annotation processes designed around
                    enterprise AI development teams.

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    Format Flexibility

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Export datasets in COCO, YOLO, JSON,
                    XML, CSV, JSONL, and custom formats.

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    Scalable Delivery

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Dedicated annotation teams capable of
                    supporting projects of any scale.

                  </p>

                </div>

              </div>

              {/* CTA */}

              <div className="flex flex-wrap justify-center gap-5 mt-14">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Discuss Your AI Project
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition"
                >
                  Explore Our Services
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}