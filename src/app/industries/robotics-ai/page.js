export const metadata = {
  title: "Robotics AI Annotation Services",
  description:
    "Robotics AI data annotation services for autonomous robots, warehouse automation, industrial robotics, and robot vision systems.",
};

export default function RoboticsAIPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Robotics AI Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia delivers high-quality AI training datasets for
            robotics companies building autonomous robots, warehouse
            automation systems, industrial robots, and intelligent
            robotic vision applications.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            AI Training Data for Robotics
          </h2>

          <p className="text-gray-600 mb-4">
            Modern robots rely on computer vision and machine learning
            to recognize objects, understand environments, and make
            intelligent decisions.
          </p>

          <p className="text-gray-600 mb-4">
            High-quality annotated datasets improve robot navigation,
            manipulation, safety, and automation across multiple
            industries.
          </p>

          <p className="text-gray-600">
            Annotexia provides scalable annotation services for
            robotics startups, research labs, and automation companies.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Robotics Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Object Detection</h3>
              <p className="text-gray-600">
                Label objects for robot perception and autonomous navigation.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Instance Segmentation</h3>
              <p className="text-gray-600">
                Pixel-level annotation for robotic vision applications.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Pose Estimation</h3>
              <p className="text-gray-600">
                Human and object pose labeling for robotic interaction.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">3D Bounding Boxes</h3>
              <p className="text-gray-600">
                Accurate 3D annotation for robot navigation systems.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Grasp Point Annotation</h3>
              <p className="text-gray-600">
                Identify optimal grasp locations for robotic arms.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Robot Navigation</h3>
              <p className="text-gray-600">
                Build datasets for SLAM and autonomous navigation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Robotics AI Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ul className="space-y-4 text-gray-600">
              <li>✓ Warehouse Robotics</li>
              <li>✓ Industrial Automation</li>
              <li>✓ Service Robots</li>
              <li>✓ Autonomous Mobile Robots</li>
              <li>✓ Pick & Place Systems</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Human-Robot Interaction</li>
              <li>✓ Factory Automation</li>
              <li>✓ Logistics Robotics</li>
              <li>✓ Robotic Inspection</li>
              <li>✓ AI Research</li>
            </ul>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Need Robotics AI Training Data?
          </h2>

          <p className="text-gray-300 mb-8">
            Partner with Annotexia for accurate annotation services that
            accelerate robotics AI development.
          </p>

          <a href="/contact" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium">
            Get a Free Consultation
          </a>

        </div>
      </section>

    </main>
  );
}