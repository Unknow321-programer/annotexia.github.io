export const metadata = {
  title: "Drone & Aerial Imagery Annotation Services",
  description:
    "Drone image annotation services for aerial imagery, mapping, surveying, infrastructure inspection, agriculture, and AI-powered remote sensing.",
};

export default function DroneAerialPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Drone & Aerial Imagery Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia provides high-quality annotation services for drone
            imagery, aerial mapping, remote sensing, agriculture,
            infrastructure inspection, and geospatial AI applications.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            AI Training Data for Drone Vision
          </h2>

          <p className="text-gray-600 mb-4">
            Drone technology is transforming industries by providing
            accurate aerial data for inspection, monitoring, mapping,
            surveying, and environmental analysis.
          </p>

          <p className="text-gray-600 mb-4">
            High-quality annotated drone datasets enable AI models to
            detect objects, classify land, monitor infrastructure, and
            automate aerial inspections.
          </p>

          <p className="text-gray-600">
            Annotexia helps organizations create accurate training
            datasets for computer vision models powered by drone imagery.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Drone Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Drone Image Annotation
              </h3>

              <p className="text-gray-600">
                Label aerial images captured by drones for AI model training.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Aerial Object Detection
              </h3>

              <p className="text-gray-600">
                Detect vehicles, buildings, roads, trees, and other objects.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Building Segmentation
              </h3>

              <p className="text-gray-600">
                Pixel-level annotation of buildings and infrastructure.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Road Extraction
              </h3>

              <p className="text-gray-600">
                Create datasets for road network detection and mapping.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Power Line Detection
              </h3>

              <p className="text-gray-600">
                Annotate utility infrastructure for automated inspections.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Change Detection
              </h3>

              <p className="text-gray-600">
                Compare aerial images to identify environmental or structural changes.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Drone AI Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ul className="space-y-4 text-gray-600">
              <li>✓ Drone Mapping</li>
              <li>✓ Infrastructure Inspection</li>
              <li>✓ Construction Monitoring</li>
              <li>✓ Agriculture Monitoring</li>
              <li>✓ Land Surveying</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Disaster Management</li>
              <li>✓ Environmental Monitoring</li>
              <li>✓ Mining Operations</li>
              <li>✓ Utility Inspection</li>
              <li>✓ Smart City Projects</li>
            </ul>

          </div>

        </div>
      </section>

      {/* Why Annotexia */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Annotexia?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">High Accuracy</h3>
              <p className="text-gray-600">
                Precise aerial image annotation with strict QA.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Scalable Teams</h3>
              <p className="text-gray-600">
                Handle thousands of drone images efficiently.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Reliable turnaround without compromising quality.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Need Drone AI Training Data?
          </h2>

          <p className="text-gray-300 mb-8">
            Partner with Annotexia to build high-quality datasets for
            drone vision and remote sensing applications.
          </p>

          <a href="/contact" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium">
            Get a Free Consultation
          </a>

        </div>
      </section>

    </main>
  );
}