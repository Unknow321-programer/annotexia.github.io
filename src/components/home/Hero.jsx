import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

      {/* Background Glow */}

      <div className="scroll-reveal absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_45%)]" />

      <div className="scroll-reveal max-w-7xl mx-auto px-6 py-24 lg:py-32 relative">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div className="scroll-reveal">

            <div className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-5 py-2 text-sm font-semibold">

              High-Quality Training Data in 2-4 Weeks

            </div>

            <h1 className="mt-8 text-5xl lg:text-6xl font-black leading-tight text-white">
              High-Quality Training Data for AI Models
            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-9">
              Turn raw <strong>images, videos, text, audio and LiDAR </strong> into accurate, production-ready training datasets. 
              Annotexia helps AI teams scale data annotation with<strong> project-specific guidelines, quality assurance, flexible teams and delivery </strong>in the formats and platforms they already use.
            </p>

            {/* SERVICES */}

            <div className="mt-10 flex flex-wrap gap-3">

              {[
                "Image Annotation",
                "Video Annotation",
                "Text Annotation",
                "Audio Annotation",
                "LiDAR Annotation",
                "OCR",
                "RLHF",
                "Data Labeling",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200"
                >
                  {item}
                </span>
              ))}

            </div>

            {/* BUTTONS */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="rounded-xl bg-blue-600 hover:bg-blue-700 px-8 py-4 font-semibold text-white transition"
              >
                Get a Free Project Assessment
              </Link>

              <Link
                href="/services"
                className="rounded-xl border border-white/20 hover:bg-white/10 px-8 py-4 font-semibold text-white transition"
              >
                Explore Services
              </Link>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

              <div>

                <div className="text-4xl font-black text-white">

                  15+

                </div>

                <p className="text-slate-400 mt-2">

                  Annotation Services

                </p>

              </div>

              <div>

                <div className="text-4xl font-black text-white">

                  12+

                </div>

                <p className="text-slate-400 mt-2">

                  Industries Supported

                </p>

              </div>

              <div>

                <div className="text-4xl font-black text-white">

                  Multi-Level

                </div>

                <p className="text-slate-400 mt-2">

                  Quality Assurance

                </p>

              </div>

              <div>

                <div className="text-4xl font-black text-white">

                  Global

                </div>

                <p className="text-slate-400 mt-2">

                  Delivery

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="scroll-reveal relative">

            <Image
              src="/images/home/hero-ai-annotation.webp"
              width={720}
              height={720}
              priority
              alt="AI Data Annotation and Data Labeling Services by Annotexia"
              className="rounded-3xl shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}