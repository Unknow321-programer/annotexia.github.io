import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Better AI Models?
        </h2>

        <p className="text-gray-300 mb-8">
          Get high-quality AI training datasets from Annotexia.
        </p>

        <Link
          href="/contact"
          className="bg-white text-black px-8 py-3 rounded-lg inline-block"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
}