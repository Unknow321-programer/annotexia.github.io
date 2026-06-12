export const metadata = {
  title: "Image Annotation Services",
  description:
    "Professional image annotation services including bounding box annotation, polygon annotation, semantic segmentation, keypoint labeling, and computer vision datasets.",
};

export default function ImageAnnotationPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Image Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia provides high-quality image annotation services
            for machine learning, computer vision, artificial intelligence,
            healthcare, retail analytics, autonomous vehicles, and
            enterprise AI applications.
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Professional Image Annotation for AI Training
          </h2>

          <p className="text-gray-600 mb-4">
            Image annotation is the process of labeling visual data so
            machine learning models can recognize objects, patterns,
            and relationships within images.
          </p>

          <p className="text-gray-600 mb-4">
            High-quality annotated datasets are essential for training
            computer vision systems used in object detection,
            facial recognition, medical imaging, autonomous vehicles,
            surveillance, retail intelligence, and sports analytics.
          </p>

          <p className="text-gray-600">
            At Annotexia, our experienced annotation specialists
            deliver accurate, scalable, and quality-controlled image
            labeling solutions tailored to your AI project requirements.
          </p>

        </div>
      </section>

      {/* Annotation Types */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Types of Image Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3">
                Bounding Box Annotation
              </h3>

              <p className="text-gray-600">
                Label objects using rectangular boxes for object
                detection and classification models.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3">
                Polygon Annotation
              </h3>

              <p className="text-gray-600">
                Create precise object boundaries for complex shapes
                and detailed object segmentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3">
                Semantic Segmentation
              </h3>

              <p className="text-gray-600">
                Pixel-level labeling for advanced computer vision
                and autonomous driving applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3">
                Keypoint Annotation
              </h3>

              <p className="text-gray-600">
                Label human poses, body joints, facial landmarks,
                and object points.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3">
                Cuboid Annotation
              </h3>

              <p className="text-gray-600">
                3D object labeling for autonomous vehicle and robotics
                applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3">
                Landmark Annotation
              </h3>

              <p className="text-gray-600">
                Identify specific points and features within images
                for AI model training.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-lg p-6 text-center">
              Healthcare AI
            </div>

            <div className="border rounded-lg p-6 text-center">
              Autonomous Vehicles
            </div>

            <div className="border rounded-lg p-6 text-center">
              Retail Analytics
            </div>

            <div className="border rounded-lg p-6 text-center">
              Sports Analytics
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Annotexia?
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✓ High-accuracy image annotation workflows</li>
            <li>✓ Experienced annotation specialists</li>
            <li>✓ Quality assurance and review processes</li>
            <li>✓ Scalable annotation teams</li>
            <li>✓ Fast project turnaround</li>
            <li>✓ Secure data handling procedures</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Need Image Annotation Services?
          </h2>

          <p className="text-gray-600 mb-8">
            Contact Annotexia today to discuss your image annotation,
            computer vision, and AI training data requirements.
          </p>

          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg"
          >
            Request a Free Consultation
          </a>

        </div>
      </section>

    </main>
  );
}