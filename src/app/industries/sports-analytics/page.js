export const metadata = {
  title: "Sports Analytics Annotation Services",
  description:
    "Sports video annotation services for player tracking, ball tracking, event detection, pose estimation, and AI-powered sports analytics.",
};

export default function SportsAnalyticsPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sports Analytics Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia provides professional sports video annotation
            services for AI companies, sports analytics platforms,
            broadcasters, and performance analysis providers.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            AI Training Data for Sports Analytics
          </h2>

          <p className="text-gray-600 mb-4">
            Modern sports analytics relies on computer vision and AI to
            understand player movement, ball position, and match events.
          </p>

          <p className="text-gray-600 mb-4">
            High-quality annotated sports datasets enable AI models to
            deliver accurate insights for coaches, clubs, broadcasters,
            and performance analysts.
          </p>

          <p className="text-gray-600">
            We support projects across football, cricket, basketball,
            hockey, tennis, rugby, volleyball, and more.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Sports Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Player Tracking</h3>
              <p className="text-gray-600">
                Track players frame-by-frame for movement and tactical analysis.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Ball Tracking</h3>
              <p className="text-gray-600">
                Accurate ball tracking for AI-powered sports analytics.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Event Annotation</h3>
              <p className="text-gray-600">
                Label goals, passes, fouls, assists, shots, and key match events.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Pose Estimation</h3>
              <p className="text-gray-600">
                Annotate body keypoints for performance and movement analysis.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Team & Jersey Labeling</h3>
              <p className="text-gray-600">
                Identify players by team, jersey number, and roles.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                Multi-level quality checks ensure accurate sports datasets.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Sports AI Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ul className="space-y-4 text-gray-600">
              <li>✓ Player Performance Analysis</li>
              <li>✓ Tactical Analysis</li>
              <li>✓ Event Detection</li>
              <li>✓ Match Statistics</li>
              <li>✓ Broadcast Analytics</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Athlete Tracking</li>
              <li>✓ AI Coaching Platforms</li>
              <li>✓ Sports Research</li>
              <li>✓ Computer Vision Models</li>
              <li>✓ Automated Highlights</li>
            </ul>

          </div>

        </div>
      </section>

      {/* Why */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Annotexia?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Sports Expertise</h3>
              <p className="text-gray-600">
                Experienced in player tracking, ball tracking, and event annotation.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">High Accuracy</h3>
              <p className="text-gray-600">
                Consistent annotation with multi-level quality reviews.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Scalable teams to handle large sports datasets efficiently.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Looking for Sports AI Training Data?
          </h2>

          <p className="text-gray-300 mb-8">
            Partner with Annotexia to build accurate datasets for sports analytics and computer vision.
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