import Link from "next/link";

const features = [
  {
    icon: "🏆",
    title: "Enterprise-Grade Quality",
    description:
      "Every dataset passes through structured quality assurance with multiple review stages to ensure consistent, accurate, and production-ready annotations.",
  },
  {
    icon: "👥",
    title: "Scalable Annotation Teams",
    description:
      "Whether your project requires thousands or millions of annotations, our dedicated teams scale efficiently without compromising quality.",
  },
  {
    icon: "⚙️",
    title: "Flexible Engagement Models",
    description:
      "Choose project-based annotation, dedicated teams, or long-term partnerships tailored to your AI development requirements.",
  },
  {
    icon: "🌍",
    title: "Industry Expertise",
    description:
      "Supporting AI companies across Healthcare, Sports Analytics, Agriculture, Manufacturing, Retail, Autonomous Vehicles, Computer Vision, and NLP.",
  },
  {
    icon: "🔒",
    title: "Secure Data Handling",
    description:
      "Datasets are processed through secure workflows with controlled access and enterprise-level confidentiality practices.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description:
      "Efficient workflows, experienced teams, and structured project management help reduce delivery timelines.",
  },
  {
    icon: "🖥️",
    title: "Platform Agnostic",
    description:
      "Work seamlessly with CVAT, Label Studio, Labelbox, Roboflow, Supervisely, SuperAnnotate, or your own internal annotation platform.",
  },
  {
    icon: "🤖",
    title: "AI-Focused Expertise",
    description:
      "Purpose-built annotation services for Machine Learning, Computer Vision, NLP, Speech AI, Generative AI, and Large Language Models.",
  },
];

const comparison = [
  {
    traditional: "Generic annotation workflow",
    annotexia: "AI-focused annotation workflow",
  },
  {
    traditional: "Limited quality review",
    annotexia: "Multi-level quality assurance",
  },
  {
    traditional: "Fixed annotation teams",
    annotexia: "Scalable dedicated teams",
  },
  {
    traditional: "Limited dataset formats",
    annotexia: "COCO, YOLO, JSON, XML, CSV, JSONL & custom formats",
  },
  {
    traditional: "Basic communication",
    annotexia: "Dedicated project coordination",
  },
  {
    traditional: "Tool restrictions",
    annotexia: "Supports enterprise & custom platforms",
  },
];

const highlights = [
  "Enterprise Ready",
  "Dedicated QA",
  "Secure Workflow",
  "Platform Agnostic",
  "Scalable Teams",
  "AI Specialists",
];
export default function WhyChooseAnnotexia() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="scroll-reveal max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Why Choose Annotexia

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">

            Your Trusted
            <br />
            AI Training Data Partner

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            Building successful Artificial Intelligence models starts
            with high-quality training data. Annotexia combines
            experienced annotation specialists, enterprise-quality
            workflows, scalable production capabilities, and
            multi-level quality assurance to deliver reliable
            datasets for AI companies worldwide.

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

                {/* Comparison Section */}

        <div className="scroll-reveal mt-28">

          <div className="text-center max-w-3xl mx-auto">

            <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

              Enterprise Advantage

            </span>

            <h3 className="mt-5 text-4xl font-black text-slate-900">

              Why AI Teams Prefer Annotexia

            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-8">

              We combine experienced annotation specialists,
              structured quality assurance, flexible workflows,
              and enterprise-ready delivery to help organizations
              build reliable AI training datasets faster.

            </p>

          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg mt-16">

            {/* Table Header */}

            <div className="grid grid-cols-2 bg-slate-900 text-white">

              <div className="p-6 text-center font-bold text-lg">

                Traditional Annotation Vendors

              </div>

              <div className="p-6 text-center font-bold text-lg bg-blue-600">

                Annotexia

              </div>

            </div>

            {/* Comparison Rows */}

            {comparison.map((row) => (

              <div
                key={row.traditional}
                className="grid grid-cols-2 border-t border-slate-200"
              >

                <div className="p-6 bg-white text-slate-600">

                  {row.traditional}

                </div>

                <div className="p-6 bg-blue-50 font-medium text-slate-900">

                  ✓ {row.annotexia}

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Highlights */}

        <div className="scroll-reveal mt-24">

          <div className="text-center">

            <h3 className="text-3xl font-black text-slate-900">

              Built for Enterprise AI Projects

            </h3>

          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            {highlights.map((item) => (

              <div
                key={item}
                className="px-6 py-4 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-100"
              >

                ✓ {item}

              </div>

            ))}

          </div>

        </div>
                {/* Enterprise CTA */}

        <div className="scroll-reveal mt-24">

          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">

            <div className="max-w-5xl mx-auto px-10 py-20 text-center">

              <span className="uppercase tracking-[3px] text-blue-400 font-semibold">

                Start Your AI Project

              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">

                Looking for a Reliable
                AI Data Annotation Partner?

              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                Whether you're building Computer Vision models,
                Large Language Models, Healthcare AI solutions,
                Sports Analytics platforms, Agricultural AI,
                Autonomous Vehicle systems, or enterprise Machine
                Learning applications, Annotexia delivers accurate,
                scalable, and production-ready AI training datasets
                tailored to your workflow.

              </p>

              {/* Statistics */}

              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-14">

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <div className="text-3xl font-black text-blue-400">

                    8+

                  </div>

                  <p className="mt-3 text-slate-300">

                    Industries Served

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <div className="text-3xl font-black text-blue-400">

                    5+

                  </div>

                  <p className="mt-3 text-slate-300">

                    Annotation Services

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <div className="text-3xl font-black text-blue-400">

                    8+

                  </div>

                  <p className="mt-3 text-slate-300">

                    Dataset Formats

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <div className="text-3xl font-black text-blue-400">

                    7+

                  </div>

                  <p className="mt-3 text-slate-300">

                    Annotation Platforms

                  </p>

                </div>

              </div>

              {/* CTA Buttons */}

              <div className="flex flex-wrap justify-center gap-5 mt-14">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Request a Free Quote
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