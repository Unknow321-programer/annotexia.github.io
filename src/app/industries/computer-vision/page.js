export const metadata = {
  title: "Computer Vision Annotation Services",
  description:
    "Professional computer vision annotation services including image labeling, object detection, semantic segmentation, polygon annotation, and AI training datasets for machine learning.",
};

export default function ComputerVisionPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Computer Vision Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia delivers accurate computer vision data annotation
            services for AI companies, startups, research teams, and
            enterprises building intelligent visual recognition systems.
          </p>

        </div>
      </section>

      {/* Introduction */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            High-Quality Training Data for Computer Vision
          </h2>

          <p className="text-gray-600 mb-4">
            Computer vision enables machines to understand and analyze
            images and videos. The success of every computer vision model
            depends on accurate and consistent annotated training data.
          </p>

          <p className="text-gray-600 mb-4">
            Our experienced annotation team creates high-quality datasets
            for object detection, image segmentation, classification,
            pose estimation, OCR, and many other AI applications.
          </p>

          <p className="text-gray-600">
            Whether you're building a proof of concept or training
            production-ready AI models, Annotexia provides scalable
            annotation services with strict quality assurance.
          </p>

        </div>
      </section>

      {/* Services */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Computer Vision Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Bounding Box Annotation
              </h3>

              <p className="text-gray-600">
                Accurate object detection datasets for vehicles,
                people, products, animals, and industrial objects.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Polygon Annotation
              </h3>

              <p className="text-gray-600">
                High-precision polygon labeling for complex object
                boundaries and irregular shapes.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Semantic Segmentation
              </h3>

              <p className="text-gray-600">
                Pixel-level image annotation for advanced computer
                vision and scene understanding models.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Instance Segmentation
              </h3>

              <p className="text-gray-600">
                Separate and label multiple objects individually,
                even when they belong to the same class.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Keypoint Annotation
              </h3>

              <p className="text-gray-600">
                Landmark and pose estimation datasets for human
                movement, facial landmarks, and body tracking.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Image Classification
              </h3>

              <p className="text-gray-600">
                Organize and classify images into predefined
                categories for AI classification models.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Applications */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Computer Vision Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ul className="space-y-4 text-gray-600">
              <li>✓ Autonomous Driving</li>
              <li>✓ Sports Analytics</li>
              <li>✓ Medical Imaging</li>
              <li>✓ Agriculture AI</li>
              <li>✓ OCR & Document AI</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Manufacturing Inspection</li>
              <li>✓ Retail Analytics</li>
              <li>✓ Robotics</li>
              <li>✓ Smart Cities</li>
              <li>✓ Surveillance Systems</li>
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

              <h3 className="text-lg font-semibold mb-3">
                High Accuracy
              </h3>

              <p className="text-gray-600">
                Multi-level quality assurance ensures consistent,
                production-ready datasets.
              </p>

            </div>

            <div className="bg-white border rounded-xl p-6">

              <h3 className="text-lg font-semibold mb-3">
                Scalable Team
              </h3>

              <p className="text-gray-600">
                From small PoCs to millions of images, our team
                scales with your project needs.
              </p>

            </div>

            <div className="bg-white border rounded-xl p-6">

              <h3 className="text-lg font-semibold mb-3">
                Fast Turnaround
              </h3>

              <p className="text-gray-600">
                Efficient workflows help deliver high-quality
                datasets on time.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="bg-gray-900 text-white py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Better Computer Vision Models?
          </h2>

          <p className="text-gray-300 mb-8">
            Partner with Annotexia for reliable, scalable, and
            high-quality computer vision annotation services.
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