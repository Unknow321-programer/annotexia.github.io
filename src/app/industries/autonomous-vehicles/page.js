export const metadata = {
  title: "Autonomous Vehicle Annotation Services",
  description:
    "Professional autonomous vehicle annotation services including LiDAR labeling, camera annotation, sensor fusion, lane detection, traffic sign recognition, and AI training datasets for self-driving vehicles.",
};

export default function AutonomousVehiclesPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Autonomous Vehicle Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia provides high-quality data annotation services for
            autonomous driving companies, automotive manufacturers,
            robotics firms, and AI teams developing safer self-driving
            technologies.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            AI Training Data for Autonomous Driving
          </h2>

          <p className="text-gray-600 mb-4">
            Autonomous vehicles rely on computer vision, LiDAR,
            cameras, radar, and sensor fusion to understand their
            surroundings and make safe driving decisions.
          </p>

          <p className="text-gray-600 mb-4">
            High-quality annotated datasets are essential for training
            AI models to detect vehicles, pedestrians, traffic signs,
            road lanes, and other objects in complex driving
            environments.
          </p>

          <p className="text-gray-600">
            Annotexia delivers scalable and accurate annotation
            services that help autonomous driving companies build
            reliable perception systems.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Autonomous Vehicle Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Bounding Box Annotation
              </h3>

              <p className="text-gray-600">
                Detect and label vehicles, pedestrians, cyclists,
                traffic lights, and roadside objects.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Semantic Segmentation
              </h3>

              <p className="text-gray-600">
                Pixel-level annotation for roads, sidewalks, lane
                markings, vegetation, buildings, and driving scenes.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                LiDAR Annotation
              </h3>

              <p className="text-gray-600">
                3D point cloud labeling for accurate object detection,
                localization, and scene understanding.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Lane Detection
              </h3>

              <p className="text-gray-600">
                Annotate lane boundaries, road edges, and driving
                paths for autonomous navigation systems.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Traffic Sign Annotation
              </h3>

              <p className="text-gray-600">
                Label traffic signs, signals, road symbols, and speed
                limits to improve driving safety.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Sensor Fusion Annotation
              </h3>

              <p className="text-gray-600">
                Combine LiDAR, camera, radar, and GPS data for
                advanced perception model training.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Autonomous Driving AI Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ul className="space-y-4 text-gray-600">
              <li>✓ Self-Driving Cars</li>
              <li>✓ Advanced Driver Assistance Systems (ADAS)</li>
              <li>✓ Road Scene Understanding</li>
              <li>✓ Object Detection</li>
              <li>✓ Collision Avoidance</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Lane Keeping Systems</li>
              <li>✓ Traffic Sign Recognition</li>
              <li>✓ Autonomous Navigation</li>
              <li>✓ Smart Transportation</li>
              <li>✓ Fleet Intelligence</li>
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
                Multi-level quality reviews ensure reliable AI training
                datasets.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                Scalable Workforce
              </h3>

              <p className="text-gray-600">
                Capable of handling millions of images, videos, and
                LiDAR frames.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-600">
                Efficient workflows help accelerate autonomous vehicle
                AI development.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Build Smarter Autonomous Driving AI
          </h2>

          <p className="text-gray-300 mb-8">
            Partner with Annotexia to create high-quality training
            datasets for autonomous vehicles, ADAS, and intelligent
            transportation systems.
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
