import Link from "next/link";

const workflow = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "Every project begins with a detailed discussion to understand business objectives, AI use cases, annotation requirements, dataset complexity, output formats, and project-specific quality expectations.",
  },
  {
    step: "02",
    title: "Annotation Guidelines",
    description:
      "We develop clear annotation guidelines covering object classes, edge cases, labeling rules, review criteria, and quality standards to ensure consistency throughout the project lifecycle.",
  },
  {
    step: "03",
    title: "Expert Annotation",
    description:
      "Our experienced annotation specialists create high-quality labels using industry-leading annotation tools while following project-specific instructions and best practices.",
  },
  {
    step: "04",
    title: "Multi-Level Quality Review",
    description:
      "Every dataset undergoes multiple levels of human review to identify inconsistencies, missing labels, incorrect classifications, and annotation errors before approval.",
  },
  {
    step: "05",
    title: "Client Feedback Integration",
    description:
      "Client feedback is incorporated into annotation workflows, allowing continuous improvement and maintaining consistency across future annotation batches.",
  },
  {
    step: "06",
    title: "Final Validation & Delivery",
    description:
      "Before delivery, every dataset is validated against project guidelines, exported in the required format, and securely delivered with complete quality assurance checks.",
  },
];

const qualityMetrics = [
  {
    title: "Multi-Level QA Reviews",
    description:
      "Independent reviewers validate every annotation before final delivery.",
  },
  {
    title: "Project-Specific Guidelines",
    description:
      "Custom annotation instructions ensure consistent labeling across every dataset.",
  },
  {
    title: "Experienced Annotation Teams",
    description:
      "Dedicated specialists trained for industry-specific annotation projects.",
  },
  {
    title: "Secure Data Handling",
    description:
      "Confidential datasets handled using secure workflows and controlled access.",
  },
  {
    title: "Scalable Workforce",
    description:
      "Flexible annotation teams that can scale according to project requirements.",
  },
  {
    title: "Flexible Export Formats",
    description:
      "Datasets delivered in COCO, YOLO, Pascal VOC, JSON, XML, CSV, JSONL, and custom formats.",
  },
];
export default function QualityAssurance() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div className="scroll-reveal max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Quality Assurance

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">

            Enterprise-Grade Quality
            <br />
            for Every Annotation Project

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            High-performing AI models require accurate, consistent,
            and reliable training data. Annotexia follows a structured
            quality assurance workflow that combines experienced
            annotators, multi-level human reviews, project-specific
            guidelines, and continuous feedback to deliver datasets
            that meet enterprise AI standards.

          </p>

        </div>

        {/* Workflow */}

        <div className="scroll-reveal grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {workflow.map((item) => (

            <div
              key={item.step}
              className="relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-black">

                {item.step}

              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {item.title}

              </h3>

              <p className="mt-5 text-slate-600 leading-8">

                {item.description}

              </p>

            </div>

          ))}

        </div>
                {/* Quality Metrics */}

        <div className="scroll-reveal mt-24">

          <div className="text-center max-w-3xl mx-auto">

            <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

              Our Quality Commitment

            </span>

            <h3 className="mt-5 text-4xl font-black text-slate-900">

              Why Organizations Trust
              Annotexia

            </h3>

            <p className="mt-6 text-lg text-slate-600 leading-8">

              Every dataset is created using standardized workflows,
              experienced annotation specialists, and rigorous quality
              validation processes to ensure consistent and reliable
              AI training data.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

            {qualityMetrics.map((metric) => (

              <div
                key={metric.title}
                className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">

                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                </div>

                <h4 className="mt-6 text-xl font-bold text-slate-900">

                  {metric.title}

                </h4>

                <p className="mt-4 text-slate-600 leading-8">

                  {metric.description}

                </p>

              </div>

            ))}

          </div>

        </div>
                {/* Enterprise CTA */}

        <div className="scroll-reveal mt-24">

          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">

            <div className="max-w-5xl mx-auto px-10 py-20 text-center">

              <span className="uppercase tracking-[3px] text-blue-400 font-semibold">

                Enterprise AI Data Quality

              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">

                Build Better AI Models
                with Reliable Training Data

              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                High-quality annotations directly impact AI model
                performance. Annotexia combines experienced annotation
                specialists, structured quality assurance workflows,
                secure data handling, and scalable delivery models to
                provide reliable datasets for Computer Vision,
                Machine Learning, NLP, Large Language Models,
                Healthcare AI, Sports Analytics, Agriculture,
                Manufacturing, and Autonomous Vehicle applications.

              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-12">

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