import Link from "next/link";

export const metadata = {
  title: "Data Annotation Services",
  description:
    "Professional data annotation services including image annotation, video annotation, text annotation, audio annotation, and AI training data labeling.",
};

const services = [
  {
    title: "Image Annotation",
    href: "/services/image-annotation",
    description:
      "Bounding boxes, polygons, segmentation, keypoint annotation, and object detection datasets.",
  },
  {
    title: "Video Annotation",
    href: "/services/video-annotation",
    description:
      "Frame-by-frame video labeling, object tracking, action recognition, and sports analytics annotation.",
  },
  {
    title: "Text Annotation",
    href: "/services/text-annotation",
    description:
      "Named entity recognition, sentiment analysis, intent classification, and NLP datasets.",
  },
  {
    title: "Audio Annotation",
    href: "/services/audio-annotation",
    description:
      "Speech recognition datasets, speaker identification, transcription, and audio classification.",
  },
  {
    title: "Data Labeling",
    href: "/services/data-labeling",
    description:
      "Scalable data labeling solutions for machine learning and artificial intelligence projects.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Data Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Annotexia provides high-quality data annotation and labeling
            services for machine learning, computer vision, natural
            language processing, and artificial intelligence projects.
          </p>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="border rounded-xl p-8 hover:shadow-lg transition"
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h2>

                <p className="text-gray-600">
                  {service.description}
                </p>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            AI Training Data Annotation Services
          </h2>

          <p className="text-gray-600 mb-4">
            Data annotation is a critical step in developing reliable
            machine learning and artificial intelligence systems.
            High-quality labeled datasets enable AI models to identify
            patterns, classify information, and make accurate predictions.
          </p>

          <p className="text-gray-600 mb-4">
            At Annotexia, our annotation specialists create accurate
            datasets for computer vision, natural language processing,
            speech recognition, healthcare AI, sports analytics,
            autonomous vehicles, and enterprise automation.
          </p>

          <p className="text-gray-600">
            Whether you require image annotation, video labeling,
            text annotation, or custom data labeling solutions,
            our team can scale according to your project needs.
          </p>

        </div>
      </section>

    </main>
  );
}