export const metadata = {
  title: "Computer Vision Annotation Services",
  description:
    "Computer vision annotation services including image labeling, segmentation, object detection, and AI training datasets.",
};

export default function ComputerVisionPage() {
  return (
    <main className="min-h-screen">

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-6">
            Computer Vision Annotation Services
          </h1>

          <p className="text-gray-600 mb-6">
            Annotexia provides high-quality image annotation services
            for computer vision and machine learning applications.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Computer Vision Solutions
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✓ Object Detection</li>
            <li>✓ Image Segmentation</li>
            <li>✓ Polygon Annotation</li>
            <li>✓ Landmark Annotation</li>
            <li>✓ Keypoint Labeling</li>
            <li>✓ Dataset Preparation</li>
          </ul>

        </div>
      </section>

    </main>
  );
}