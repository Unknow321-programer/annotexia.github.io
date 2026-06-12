export const metadata = {
  title: "Video Annotation Services",
  description:
    "Professional video annotation services for AI, machine learning, sports analytics, object tracking, action recognition, and computer vision applications.",
};

export default function VideoAnnotationPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Video Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            High-quality video annotation services for machine learning,
            computer vision, sports analytics, autonomous vehicles,
            surveillance systems, and AI-powered applications.
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Accurate Video Annotation for AI Training
          </h2>

          <p className="text-gray-600 mb-4">
            Video annotation is the process of labeling objects,
            activities, movements, and events across video frames.
            These annotations help machine learning models understand
            temporal relationships and object behavior.
          </p>

          <p className="text-gray-600 mb-4">
            Annotexia delivers high-quality video labeling solutions
            that improve the accuracy of computer vision systems,
            object tracking models, activity recognition systems,
            and sports analytics platforms.
          </p>

          <p className="text-gray-600">
            Our annotation experts work with complex datasets and
            large-scale projects while maintaining consistency,
            precision, and fast turnaround times.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Video Annotation Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Object Tracking
              </h3>
              <p className="text-gray-600">
                Track objects across multiple frames for autonomous
                systems and surveillance applications.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Action Recognition
              </h3>
              <p className="text-gray-600">
                Label human actions and activities to train
                behavior recognition models.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Event Detection
              </h3>
              <p className="text-gray-600">
                Identify and annotate key events within
                sports and surveillance videos.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Multi-Object Tracking
              </h3>
              <p className="text-gray-600">
                Track multiple moving objects simultaneously
                across video sequences.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Frame-by-Frame Labeling
              </h3>
              <p className="text-gray-600">
                Detailed annotation of every frame for
                maximum training data accuracy.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Pose Estimation
              </h3>
              <p className="text-gray-600">
                Annotate body landmarks and keypoints
                for movement analysis models.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Sports Analytics */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Sports Video Annotation
          </h2>

          <p className="text-gray-600 mb-4">
            Annotexia specializes in sports video annotation
            services for football, cricket, basketball, tennis,
            hockey, and other professional sports.
          </p>

          <p className="text-gray-600 mb-4">
            Our team can annotate player positions, ball tracking,
            player actions, tactical events, and match situations
            to support advanced sports analytics platforms.
          </p>

          <p className="text-gray-600">
            Sports organizations, performance analysts, and
            AI companies rely on our annotation expertise to
            build intelligent sports analysis systems.
          </p>

        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="border rounded-lg p-6 bg-white text-center">
              Sports Analytics
            </div>

            <div className="border rounded-lg p-6 bg-white text-center">
              Surveillance
            </div>

            <div className="border rounded-lg p-6 bg-white text-center">
              Autonomous Vehicles
            </div>

            <div className="border rounded-lg p-6 bg-white text-center">
              Robotics
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Annotexia for Video Annotation?
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✓ High-precision video labeling</li>
            <li>✓ Sports analytics expertise</li>
            <li>✓ Large-scale annotation support</li>
            <li>✓ Multi-object tracking experience</li>
            <li>✓ Fast delivery timelines</li>
            <li>✓ Dedicated quality assurance process</li>
          </ul>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Looking for Video Annotation Services?
          </h2>

          <p className="mb-8 text-gray-300">
            Partner with Annotexia to create accurate video datasets
            for machine learning and computer vision projects.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium"
          >
            Contact Us Today
          </a>

        </div>
      </section>

    </main>
  );
}