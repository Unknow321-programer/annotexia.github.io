import Link from "next/link";

const features = [
  {
    icon: "🔄",
    title: "Work With Your Existing Workflow",
    description:
      "Already using CVAT, Label Studio, Labelbox, Roboflow, SuperAnnotate, Supervisely, or another platform? Our teams can work within your existing annotation workflow.",
  },
  {
    icon: "📋",
    title: "Project-Specific Guidelines",
    description:
      "We follow your classes, attributes, annotation rules, edge cases, and quality requirements to maintain consistency across your dataset.",
  },
  {
    icon: "🚀",
    title: "Start Small, Scale With Confidence",
    description:
      "Begin with a representative pilot dataset, validate the workflow, and scale annotation capacity as your project grows.",
  },
  {
    icon: "✅",
    title: "Multi-Level Quality Review",
    description:
      "Quality checks can include sample validation, reviewer checks, guideline verification, and final review based on your project requirements.",
  },
  {
    icon: "📦",
    title: "Flexible Data & Output Formats",
    description:
      "Receive your completed dataset in formats such as COCO, YOLO, JSON, XML, CSV, JSONL, or a custom schema required by your ML pipeline.",
  },
  {
    icon: "🎯",
    title: "Domain-Focused Annotation Teams",
    description:
      "Support for specialized AI applications including Computer Vision, Sports Analytics, Healthcare, Agriculture, Robotics, Retail, Manufacturing, and Autonomous Systems.",
  },
  {
    icon: "🔒",
    title: "Confidential Project Handling",
    description:
      "We support NDA-based engagements, controlled project access, confidential project handling, and customer-approved data delivery workflows.",
  },
  {
    icon: "💬",
    title: "Dedicated Project Communication",
    description:
      "Stay aligned throughout the project with clear communication for requirements, feedback, quality issues, progress, and final delivery.",
  },
];

export default function WhyChooseAnnotexia() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="scroll-reveal max-w-3xl mx-auto text-center">
          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">
            Why Annotexia
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
            Why AI Teams Choose Annotexia
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Choosing an annotation partner is about more than labeling data.
            We build workflows around your data, project requirements, quality
            standards, existing tools, and delivery needs — from pilot datasets
            to large-scale production projects.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="scroll-reveal grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-slate-50 rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-slate-600 leading-8">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Project CTA */}
        <div className="scroll-reveal mt-24">
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 lg:py-20 text-center">

              <span className="uppercase tracking-[3px] text-blue-400 font-semibold">
                Start With Annotexia
              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">
                Have a Dataset That Needs Annotation?
              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
                Tell us what you&apos;re building, what data you have, and what you
                need labeled. We&apos;ll review your requirements and help determine
                the right annotation workflow for your project.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Get a Free Project Assessment →
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition"
                >
                  Start a Pilot Project
                </Link>

              </div>

              {/* Reassurance */}
              <p className="mt-8 text-sm text-slate-400">
                Image • Video • Text • Audio • LiDAR • OCR • NLP • Computer
                Vision • LLM Data
              </p>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}