export const metadata = {
  title: "About Us",
  description:
    "Learn about Annotexia, our mission, expertise, and commitment to delivering high-quality data annotation services for AI and machine learning projects.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Annotexia
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia is a specialized data annotation company helping
            organizations build high-quality datasets for Artificial
            Intelligence, Machine Learning, Computer Vision, and
            Natural Language Processing applications.
          </p>

        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Who We Are
              </h2>

              <p className="text-gray-600 mb-4">
                At Annotexia, we provide professional data annotation
                and labeling services that help businesses train
                accurate and reliable AI models.
              </p>

              <p className="text-gray-600 mb-4">
                Our experienced annotation team delivers precise
                image annotation, video annotation, text annotation,
                and data labeling solutions tailored to the needs of
                startups, enterprises, and research organizations.
              </p>

              <p className="text-gray-600">
                We focus on quality, scalability, and consistency to
                ensure your machine learning models receive the
                highest-quality training data possible.
              </p>
            </div>

            <div>
              <img
                src="/images/about/About.png"
                alt="About Annotexia"
                className="rounded-xl shadow-lg"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">
                Our Mission
              </h2>

              <p className="text-gray-600">
                To empower AI innovation by providing reliable,
                scalable, and high-quality data annotation services
                that accelerate machine learning development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">
                Our Vision
              </h2>

              <p className="text-gray-600">
                To become a trusted global partner for AI training
                data solutions, helping businesses unlock the full
                potential of Artificial Intelligence.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Annotexia
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                High Accuracy
              </h3>

              <p className="text-gray-600">
                Quality assurance processes ensure precise and
                consistent annotations.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Scalable Workforce
              </h3>

              <p className="text-gray-600">
                We can efficiently handle projects of any size,
                from small datasets to enterprise-scale annotation.
              </p>
            </div>

            <div className="p-6 border rounded-xl">
              <h3 className="text-xl font-semibold mb-3">
                Fast Turnaround
              </h3>

              <p className="text-gray-600">
                Delivering quality results within agreed timelines
                to keep your AI projects moving forward.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Industries We Support
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="bg-white p-6 rounded-lg shadow-sm">
              Healthcare AI
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              Sports Analytics
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              Computer Vision
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              Autonomous Vehicles
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}