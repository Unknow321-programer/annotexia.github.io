const resources = [
  {
    title: "Google Machine Learning Glossary",
    href: "https://developers.google.com/machine-learning/glossary",
    text: "Understand essential machine learning, artificial intelligence, and data annotation terminology used across modern AI projects.",
  },
  {
    title: "Google Dataset Search",
    href: "https://datasetsearch.research.google.com/",
    text: "Discover publicly available datasets for AI research, computer vision, natural language processing, and machine learning applications.",
  },
  {
    title: "NIST AI Resource Center",
    href: "https://airc.nist.gov/",
    text: "Explore best practices, AI governance, risk management, and trustworthy AI frameworks from the U.S. National Institute of Standards and Technology.",
  },
];

export default function SEOResources() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="scroll-reveal mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            Trusted Resources
          </p>

          <h2 className="text-4xl font-bold text-slate-950">
            Learn More About Artificial Intelligence & Data Annotation
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We believe informed decisions lead to better AI solutions.
            Explore these trusted resources to deepen your understanding
            of machine learning, AI datasets, and industry best practices.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {resources.map((resource, index) => (
            <a
              key={resource.href}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl scroll-reveal"
              style={{ "--reveal-delay": `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-teal-700">
                {resource.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {resource.text}
              </p>

              <span className="mt-6 inline-flex items-center font-semibold text-teal-700 group-hover:translate-x-1 transition-transform">
                Explore Resource →
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}