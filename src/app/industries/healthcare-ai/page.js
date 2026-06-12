export const metadata = {
  title: "Healthcare AI Annotation Services",
  description:
    "Medical image annotation services for healthcare AI, diagnostics, radiology, and machine learning applications.",
};

export default function HealthcareAIPage() {
  return (
    <main className="min-h-screen">

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-6">
            Healthcare AI Annotation Services
          </h1>

          <p className="text-gray-600 mb-6">
            We help healthcare organizations build accurate AI models
            using high-quality annotated medical datasets.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Healthcare Data Solutions
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✓ X-Ray Annotation</li>
            <li>✓ MRI Annotation</li>
            <li>✓ CT Scan Labeling</li>
            <li>✓ Medical Segmentation</li>
            <li>✓ Diagnostic AI Datasets</li>
            <li>✓ Healthcare NLP Annotation</li>
          </ul>

        </div>
      </section>

    </main>
  );
}