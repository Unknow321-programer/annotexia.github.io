import Image from "next/image";
import Link from "next/link";

export default function AboutAnnotexia() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="scroll-reveal grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div>

            <Image
              src="/images/home/about-annotexia.webp"
              alt="Annotexia AI data annotation specialists working on image, video, text and LiDAR datasets"
              width={700}
              height={650}
              className="rounded-3xl shadow-xl"
            />

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-[3px]">

              About Annotexia

            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">

              Building High-Quality
              <br />
              AI Training Data
              <br />
              for the Next Generation
              of Intelligent Systems

            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-8">

              Annotexia is a professional AI data annotation company
              specializing in image annotation, video annotation,
              text annotation, audio annotation, LiDAR annotation,
              OCR annotation, RLHF, and enterprise data labeling
              services for Artificial Intelligence and Machine Learning.

            </p>

            <p className="mt-6 text-lg text-slate-600 leading-8">

              Our annotation specialists create accurate,
              scalable, and quality-reviewed datasets that
              help organizations train Computer Vision,
              Natural Language Processing (NLP),
              Large Language Models (LLMs),
              speech recognition systems,
              autonomous vehicles,
              healthcare AI,
              retail analytics,
              agriculture AI,
              robotics,
              and sports analytics solutions.

            </p>

            <p className="mt-6 text-lg text-slate-600 leading-8">

              Every dataset is reviewed through structured
              quality assurance workflows to ensure consistency,
              precision, and reliability before delivery.
              Our flexible teams can support pilot projects,
              enterprise-scale annotation programs,
              and long-term managed data labeling operations.

            </p>

            {/* FEATURES */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                  ✅

                </div>

                <div>

                  <h3 className="font-bold">

                    Quality Reviewed

                  </h3>

                  <p className="text-slate-600">

                    Multi-level quality assurance
                    on every dataset.

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                  🌍

                </div>

                <div>

                  <h3 className="font-bold">

                    Global Delivery

                  </h3>

                  <p className="text-slate-600">

                    Supporting AI teams worldwide.

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                  🔒

                </div>

                <div>

                  <h3 className="font-bold">

                    Secure Workflows

                  </h3>

                  <p className="text-slate-600">

                    NDA-friendly and secure
                    annotation environments.

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">

                  ⚡

                </div>

                <div>

                  <h3 className="font-bold">

                    Scalable Teams

                  </h3>

                  <p className="text-slate-600">

                    From pilot projects to
                    enterprise-scale datasets.

                  </p>

                </div>

              </div>

            </div>

            {/* CTA */}

            <div className="mt-12">

              <Link
                href="/about"
                className="inline-flex items-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 font-semibold transition"
              >

                Learn More About Annotexia →

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}