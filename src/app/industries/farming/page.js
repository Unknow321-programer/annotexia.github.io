export const metadata = {
  title: "Agriculture & Farming AI Annotation Services",
  description:
    "Agriculture AI data annotation services for crop monitoring, drone imagery, precision farming, disease detection, yield prediction, and agricultural machine learning models.",
};

export default function FarmingPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Agriculture & Farming AI Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia provides high-quality data annotation services
            for agriculture technology companies, precision farming
            platforms, drone analytics providers, and AI-powered
            agricultural solutions.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            AI Training Data for Smart Agriculture
          </h2>

          <p className="text-gray-600 mb-4">
            Modern agriculture increasingly relies on Artificial
            Intelligence, Computer Vision, drones, and machine learning
            to improve crop productivity, reduce costs, and optimize
            farm operations.
          </p>

          <p className="text-gray-600 mb-4">
            High-quality annotated datasets are essential for training
            AI systems that identify crop diseases, detect weeds,
            monitor plant growth, estimate yields, and automate
            agricultural processes.
          </p>

          <p className="text-gray-600">
            Annotexia helps agritech companies build accurate and
            scalable datasets that power next-generation farming
            technologies.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Agriculture Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Crop Detection
              </h3>

              <p className="text-gray-600">
                Annotate crops and plants for computer vision systems
                used in crop monitoring and farm automation.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Disease Identification
              </h3>

              <p className="text-gray-600">
                Label diseased plants and crop conditions to support
                AI-powered disease detection solutions.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Weed Detection
              </h3>

              <p className="text-gray-600">
                Create datasets for automated weed identification
                and precision spraying systems.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Drone Image Annotation
              </h3>

              <p className="text-gray-600">
                Annotate aerial imagery collected by drones for
                agricultural monitoring and analysis.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Field Segmentation
              </h3>

              <p className="text-gray-600">
                Semantic segmentation of fields, crops, irrigation
                systems, and agricultural infrastructure.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Yield Prediction Datasets
              </h3>

              <p className="text-gray-600">
                Build datasets that support crop yield estimation
                and agricultural forecasting models.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Agriculture AI Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ul className="space-y-4 text-gray-600">
              <li>✓ Precision Agriculture</li>
              <li>✓ Smart Farming Platforms</li>
              <li>✓ Crop Health Monitoring</li>
              <li>✓ Weed Management Systems</li>
              <li>✓ Automated Harvesting</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Drone-Based Monitoring</li>
              <li>✓ Yield Prediction Models</li>
              <li>✓ Irrigation Optimization</li>
              <li>✓ Agricultural Robotics</li>
              <li>✓ Farm Analytics Platforms</li>
            </ul>

          </div>

        </div>
      </section>

      {/* Why Annotexia */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Annotexia for Agriculture AI?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                High Accuracy
              </h3>

              <p className="text-gray-600">
                Precise annotations for agricultural AI training data.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Scalable Teams
              </h3>

              <p className="text-gray-600">
                Support for large drone imagery and farming datasets.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-600">
                Quick turnaround for agricultural AI projects.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Need Agriculture AI Training Data?
          </h2>

          <p className="text-gray-300 mb-8">
            Partner with Annotexia to build high-quality datasets
            for precision agriculture and smart farming solutions.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium"
          >
            Get a Free Consultation
          </a>

        </div>
      </section>

    </main>
  );
}