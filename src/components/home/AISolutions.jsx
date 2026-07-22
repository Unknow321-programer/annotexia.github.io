import Image from "next/image";
import Link from "next/link";

const aiSolutions = [
  {
    title: "Computer Vision AI",
    image: "/images/ai/computer-vision.webp",
    alt: "Computer Vision AI",
    description:
      "Build intelligent computer vision systems using professionally annotated datasets for object detection, image classification, semantic segmentation, OCR, defect detection, and visual recognition.",
  },
  {
    title: "Machine Learning",
    image: "/images/ai/machine-learning.webp",
    alt: "Machine Learning Training Data",
    description:
      "High-quality labeled datasets that improve supervised, unsupervised, and deep learning models across enterprise AI applications and predictive analytics.",
  },
  {
    title: "Natural Language Processing",
    image: "/images/ai/nlp.webp",
    alt: "Natural Language Processing",
    description:
      "Power NLP solutions using Named Entity Recognition, sentiment analysis, intent classification, document categorization, and text annotation services.",
  },
  {
    title: "Large Language Models",
    image: "/images/ai/llm.webp",
    alt: "Large Language Models",
    description:
      "Support LLM development through prompt evaluation, response ranking, human feedback datasets, and high-quality language annotation workflows.",
  },
  {
    title: "Speech Recognition",
    image: "/images/ai/speech.webp",
    alt: "Speech Recognition",
    description:
      "Improve speech AI using audio transcription, speaker diarization, intent annotation, emotion recognition, and multilingual speech datasets.",
  },
  {
    title: "OCR & Document AI",
    image: "/images/ai/ocr.webp",
    alt: "OCR Annotation",
    description:
      "Train intelligent document processing systems using OCR annotation, invoice extraction, form recognition, handwritten text annotation, and document classification.",
  },
  {
    title: "Predictive Analytics",
    image: "/images/ai/predictive.webp",
    alt: "Predictive Analytics",
    description:
      "Create structured datasets that enable forecasting, recommendation engines, customer analytics, fraud detection, and intelligent business insights.",
  },
  {
    title: "Intelligent Automation",
    image: "/images/ai/automation.webp",
    alt: "Intelligent Automation",
    description:
      "Support industrial automation, robotics, smart manufacturing, warehouse automation, and enterprise AI using high-quality training datasets.",
  },
];
export default function AISolutions() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="scroll-reveal max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            AI Solutions

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">

            AI Training Data
            <br />
            for Every Intelligent System

          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-8">

            Annotexia supports organizations developing Artificial
            Intelligence, Machine Learning, Computer Vision,
            Natural Language Processing, Large Language Models,
            Speech AI, OCR, and Intelligent Automation by
            delivering high-quality training datasets that improve
            model accuracy, reliability, and real-world performance.

          </p>

        </div>

        {/* Cards */}

        <div className="scroll-reveal grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {aiSolutions.map((solution) => (

            <div
              key={solution.title}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={solution.image}
                  alt={solution.alt}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">

                  {solution.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8">

                  {solution.description}

                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center mt-8 text-blue-600 font-semibold hover:text-blue-800 transition"
                >

                  Explore Services →

                </Link>

              </div>

            </div>

          ))}

        </div>
                {/* Bottom CTA */}

        <div className="scroll-reveal mt-24">

          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

            <div className="max-w-5xl mx-auto px-10 py-16 text-center">

              <span className="uppercase tracking-[3px] text-blue-400 font-semibold">

                End-to-End AI Training Data Partner

              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">

                Accelerate Your AI Models
                with High-Quality Training Data

              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                Whether you're building Computer Vision systems,
                Machine Learning models, Natural Language Processing,
                Large Language Models, Speech AI, OCR solutions,
                or Intelligent Automation platforms, Annotexia
                provides scalable, secure, and quality-reviewed
                annotation services that help improve model
                accuracy and reduce development time.

              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-12">

                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Start Your AI Project
                </Link>

                <Link
                  href="/services"
                  className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition"
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