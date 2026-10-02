import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-section home-cta relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">

      {/* Background Decoration */}

      <div aria-hidden="true" className="cta-decoration absolute inset-0 opacity-10">

        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white blur-3xl"></div>

        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-white blur-3xl"></div>

      </div>

      <div className="scroll-reveal relative max-w-6xl mx-auto px-5 py-20 sm:px-6 sm:py-24">

        <div className="cta-panel mx-auto max-w-4xl text-center">

          <span className="uppercase tracking-[4px] text-blue-100 font-semibold">

            Ready To Build Better AI?

          </span>

          <h2 className="mt-6 text-4xl lg:text-6xl font-black text-white leading-tight">

            Let&apos;s Build
            <br />

            High-Quality AI
            Training Data

          </h2>

          <p className="mt-8 text-xl leading-9 text-blue-50">

            Whether you&apos;re developing Computer Vision,
            Machine Learning, Healthcare AI,
            Sports Analytics, Agriculture,
            Manufacturing, Retail,
            or Large Language Models,
            Annotexia delivers scalable,
            accurate,
            enterprise-ready data annotation services.

          </p>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-6 mt-14">

            <Link
              href="/contact"
            className="cta-primary inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-base font-bold text-blue-700 transition hover:-translate-y-1 hover:shadow-2xl sm:px-10 sm:py-5 sm:text-lg"
            >
              Request a Free Quote
            </Link>

            <Link
              href="/services"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-blue-700 sm:px-10 sm:py-5 sm:text-lg"
            >
              Explore Services
            </Link>

          </div>

          {/* Bottom Text */}

          <p className="mt-14 text-blue-100 text-lg">

            Image Annotation • Video Annotation • Text Annotation •
            Audio Annotation • Data Labeling

          </p>

        </div>

      </div>

    </section>
  );
}
