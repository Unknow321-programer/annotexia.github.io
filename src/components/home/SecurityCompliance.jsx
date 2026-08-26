import Link from "next/link";

const securityFeatures = [
  {
    icon: "🔒",
    title: "Non-Disclosure Agreements",
    description:
      "We are happy to sign Non-Disclosure Agreements (NDAs) before project discussions and follow strict confidentiality practices throughout every engagement.",
  },
  {
    icon: "🛡️",
    title: "Controlled Data Access",
    description:
      "Project datasets are accessible only to authorized annotation specialists assigned to your project through controlled workflows.",
  },
  {
    icon: "📁",
    title: "Confidential AI Projects",
    description:
      "Many customer projects remain confidential. We never disclose client information, datasets, or project details without written permission.",
  },
  {
    icon: "🌍",
    title: "Privacy-Focused Workflows",
    description:
      "Our annotation workflows are designed to support customer privacy requirements and responsible handling of sensitive project data.",
  },
  {
    icon: "🏢",
    title: "Enterprise Collaboration",
    description:
      "Dedicated communication channels, structured project management, and transparent collaboration throughout the annotation lifecycle.",
  },
  {
    icon: "🚀",
    title: "Secure Dataset Delivery",
    description:
      "Completed datasets are delivered through customer-approved storage platforms, cloud environments, or secure transfer methods.",
  },
];

const highlights = [
  "NDA Support",
  "Controlled Access",
  "Confidential Projects",
  "Secure Delivery",
  "Enterprise Workflow",
  "Dedicated Communication",
];
export default function SecurityCompliance() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="scroll-reveal max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Security & Compliance

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">

            Your AI Data
            Stays Secure

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">

            We understand that AI datasets are valuable business assets.
            Annotexia follows secure annotation workflows, controlled
            project access, and confidentiality-first practices to help
            organizations protect their data throughout every stage of
            the annotation lifecycle.

          </p>

        </div>

        {/* Security Cards */}

        <div className="scroll-reveal grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {securityFeatures.map((item) => (

            <div
              key={item.title}
              className="bg-slate-50 rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl">

                {item.icon}

              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-bold text-slate-900">

                {item.title}

              </h3>

              {/* Description */}

              <p className="mt-5 text-slate-600 leading-8">

                {item.description}

              </p>

            </div>

          ))}

        </div>

        <div className="scroll-reveal text-center mt-20">

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
          >

            Discuss Your Security Requirements →

          </Link>

        </div>

      </div>

    </section>
  );
}