export const metadata = {
  title: "Data Labeling Services",
  description:
    "Professional data labeling services for AI, machine learning, computer vision, NLP, and training data preparation. Scalable, accurate, and secure data labeling solutions.",
};

export default function DataLabelingPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Data Labeling Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia provides reliable and scalable data labeling
            services that help organizations build high-quality
            training datasets for Artificial Intelligence and
            Machine Learning applications.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            High-Quality Data Labeling for AI Success
          </h2>

          <p className="text-gray-600 mb-4">
            Data labeling is one of the most critical steps in the
            machine learning lifecycle. AI models rely on properly
            labeled datasets to learn patterns, recognize objects,
            understand language, and make accurate predictions.
          </p>

          <p className="text-gray-600 mb-4">
            Poor-quality labels can significantly impact model
            performance. Annotexia ensures consistent, accurate,
            and scalable labeling processes that improve the
            quality of AI training data.
          </p>

          <p className="text-gray-600">
            Whether you need image, video, text, or audio data
            labeling, our experienced teams deliver datasets that
            meet the highest quality standards.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Data Labeling Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Image Labeling
              </h3>

              <p className="text-gray-600">
                Object detection, segmentation, bounding boxes,
                polygons, and landmark annotations.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Video Labeling
              </h3>

              <p className="text-gray-600">
                Object tracking, event detection, sports analytics,
                and frame-by-frame annotation.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Text Labeling
              </h3>

              <p className="text-gray-600">
                NLP datasets, sentiment analysis, NER, intent
                classification, and content categorization.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Audio Labeling
              </h3>

              <p className="text-gray-600">
                Speech transcription, speaker identification,
                emotion recognition, and voice AI training.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            <div className="border rounded-lg p-5 text-center">
              Healthcare
            </div>

            <div className="border rounded-lg p-5 text-center">
              Retail
            </div>

            <div className="border rounded-lg p-5 text-center">
              Agriculture
            </div>

            <div className="border rounded-lg p-5 text-center">
              Sports
            </div>

            <div className="border rounded-lg p-5 text-center">
              Robotics
            </div>

            <div className="border rounded-lg p-5 text-center">
              Automotive
            </div>

          </div>

        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Data Labeling Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="font-semibold mb-3">
                1. Requirement Analysis
              </h3>

              <p className="text-gray-600">
                Understand project goals and labeling guidelines.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                2. Dataset Preparation
              </h3>

              <p className="text-gray-600">
                Organize and prepare raw data for annotation.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                3. Quality Annotation
              </h3>

              <p className="text-gray-600">
                Expert annotators create accurate labels.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                4. QA & Delivery
              </h3>

              <p className="text-gray-600">
                Multi-level reviews before final delivery.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Annotexia?
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✓ Scalable annotation workforce</li>
            <li>✓ High-quality training datasets</li>
            <li>✓ Fast turnaround times</li>
            <li>✓ Secure and confidential workflows</li>
            <li>✓ Industry-specific expertise</li>
            <li>✓ Dedicated quality assurance process</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Ready to Scale Your AI Project?
          </h2>

          <p className="text-gray-300 mb-8">
            Get high-quality data labeling services from Annotexia
            and accelerate your machine learning initiatives.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium"
          >
            Get a Free Quote
          </a>

        </div>
      </section>

    </main>
  );
}