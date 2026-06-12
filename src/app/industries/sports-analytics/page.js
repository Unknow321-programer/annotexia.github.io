export const metadata = {
  title: "Sports Analytics Annotation Services",
  description:
    "Sports video annotation services for player tracking, ball tracking, event detection, and AI-powered sports analytics.",
};

export default function SportsAnalyticsPage() {
  return (
    <main className="min-h-screen">

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-6">
            Sports Analytics Annotation Services
          </h1>

          <p className="text-gray-600 mb-6">
            Annotexia provides sports video annotation services for
            football, cricket, basketball, tennis, hockey, and other
            professional sports.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Our Sports Annotation Expertise
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li>✓ Player Tracking</li>
            <li>✓ Ball Tracking</li>
            <li>✓ Event Detection</li>
            <li>✓ Pose Estimation</li>
            <li>✓ Tactical Analysis</li>
            <li>✓ Performance Analytics</li>
          </ul>

        </div>
      </section>

    </main>
  );
}