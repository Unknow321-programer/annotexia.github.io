import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0f766e] text-white py-20">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,118,110,0.96),rgba(37,99,235,0.86))]" />
      <div className="absolute -right-12 top-8 h-52 w-52 rounded-full border border-white/20 float-slow" />
      <div className="scroll-reveal relative max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Better AI Models?
        </h2>

        <p className="text-cyan-50 mb-8">
          Get high-quality AI training datasets from Annotexia, delivered with
          clear guidelines, scalable annotation teams, and quality review.
        </p>

        <Link
          href="/contact"
          className="inline-flex rounded-lg bg-white px-8 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}
