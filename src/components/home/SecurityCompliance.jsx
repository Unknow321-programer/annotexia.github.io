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
            <br />
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

        {/* Enterprise Highlights */}

        <div className="scroll-reveal mt-24">

          <div className="text-center">

            <h3 className="text-3xl font-black text-slate-900">

              Enterprise Security Highlights

            </h3>

            <p className="mt-6 text-lg text-slate-600">

              Built around confidentiality, transparency, and secure collaboration.

            </p>

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

                Trusted AI Annotation Partner

              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">

                Looking for a Secure
                AI Data Annotation Partner?

              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                Whether your project involves Computer Vision,
                Machine Learning, Healthcare AI, Sports Analytics,
                Agriculture, Retail, Manufacturing, or Large Language
                Models, Annotexia provides secure collaboration,
                confidentiality-first workflows, and high-quality
                annotation services tailored to your business.

              </p>

              {/* Trust Features */}

              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-14">

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    NDA Friendly

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Happy to work under customer-approved
                    confidentiality agreements.

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    Controlled Access

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Project access is restricted to authorized
                    annotation specialists only.

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    Flexible Delivery

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Datasets delivered through customer-approved
                    cloud storage or secure transfer methods.

                  </p>

                </div>

                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                  <h4 className="text-white font-bold">

                    Enterprise Ready

                  </h4>

                  <p className="mt-3 text-slate-300 text-sm leading-7">

                    Supporting startups, research teams,
                    and enterprise AI organizations.

                  </p>

                </div>

              </div>

              {/* CTA Buttons */}

              <div className="flex flex-wrap justify-center gap-5 mt-14">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Discuss Your Project
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition"
                >
                  Request an NDA
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}