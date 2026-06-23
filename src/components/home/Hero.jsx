import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#071317] text-white">
      <Image
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80"
        alt="AI training data analytics dashboard for data annotation projects"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-48"
      />
      <div className="absolute inset-0 bg-slate-950/62" />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(2,6,23,0.9)_0%,rgba(6,78,59,0.82)_42%,rgba(37,99,235,0.52)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_36%,rgba(14,165,233,0.2),transparent_32rem)]" />
      <div className="absolute left-1/2 top-16 h-40 w-40 rounded-full border border-cyan-300/30 pulse-glow" />
      <div className="absolute bottom-12 right-10 h-28 w-28 rounded-full border border-teal-200/30 float-slow" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div className="reveal-up max-w-4xl rounded-lg border border-white/15 bg-slate-950/42 p-6 shadow-2xl shadow-slate-950/30 backdrop-blur-md md:p-8">
          <p className="mb-4 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur">
            Human-reviewed training data for production AI
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight [text-shadow:0_4px_22px_rgba(0,0,0,0.58)]">
            AI Data Annotation & Data Labeling Services
          </h1>

          <p className="text-lg md:text-xl text-white max-w-3xl mb-8 [text-shadow:0_2px_14px_rgba(0,0,0,0.62)]">
            High-quality image, video, text, and audio annotation services for
            Artificial Intelligence, Machine Learning, Computer Vision, and NLP
            teams that need accurate, scalable datasets.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary bg-white">
              Get a Quote
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/45 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
            {["99% QA focus", "5 data types", "Secure workflow"].map((item) => (
              <div key={item} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-cyan-50">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="card float-slow overflow-hidden bg-white/10 p-3 backdrop-blur">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=80"
              alt="Machine learning team reviewing labeled AI training data"
              width={820}
              height={620}
              className="h-[460px] rounded-lg object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-8 rounded-lg bg-white p-5 text-slate-900 shadow-2xl">
            <p className="text-sm font-semibold text-teal-700">Annotation Pipeline</p>
            <p className="text-2xl font-bold">Label. QA. Deliver.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
