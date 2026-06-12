import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          AI Data Annotation & Data Labeling Services
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mb-8">
          High-quality image, video, text, and audio annotation
          services for Artificial Intelligence, Machine Learning,
          Computer Vision, and NLP projects.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link
            href="/contact"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium"
          >
            Get a Quote
          </Link>

          <Link
            href="/services"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Explore Services
          </Link>
        </div>

      </div>
    </section>
  );
}