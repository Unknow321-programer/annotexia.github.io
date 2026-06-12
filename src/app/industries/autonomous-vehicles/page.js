export const metadata = {
  title: "Autonomous Vehicle Annotation Services",
  description:
    "Autonomous vehicle data annotation services including LiDAR labeling, object detection, segmentation, and sensor fusion datasets.",
};

export default function AutonomousVehiclesPage() {
  return (
    <main className="min-h-screen">

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-6">
            Autonomous Vehicle Annotation Services
          </h1>

          <p className="text-gray-600 mb-6">
            Build safer self-driving systems with high-quality training
            datasets created by Annotexia.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Annotation Services
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✓ Bounding Box Annotation</li>
            <li>✓ Semantic Segmentation</li>
            <li>✓ LiDAR Labeling</li>
            <li>✓ Lane Detection</li>
            <li>✓ Traffic Sign Recognition</li>
            <li>✓ Sensor Fusion Annotation</li>
          </ul>

        </div>
      </section>

    </main>
  );
}