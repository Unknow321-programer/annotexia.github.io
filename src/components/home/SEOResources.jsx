const resources = [
  {
    title: "Google Machine Learning Glossary",
    href: "https://developers.google.com/machine-learning/glossary",
    text: "A useful reference for AI, ML, and training data terminology.",
  },
  {
    title: "Google Dataset Search",
    href: "https://datasetsearch.research.google.com/",
    text: "Explore public datasets and compare what additional labeled data your model may need.",
  },
  {
    title: "NIST AI Resource Center",
    href: "https://airc.nist.gov/",
    text: "Guidance and resources for trustworthy AI programs and governance.",
  },
];

export default function SEOResources() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            AI resources
          </p>
          <h2 className="text-4xl font-bold text-slate-950">
            Helpful AI Data Annotation References
          </h2>
          <p className="mt-4 text-slate-600">
            These external resources help visitors understand machine learning
            terms, dataset discovery, and trustworthy AI practices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map((resource, index) => (
            <a
              key={resource.href}
              href={resource.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card scroll-reveal p-6"
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {resource.title}
              </h3>
              <p className="mt-3 text-slate-600">{resource.text}</p>
              <span className="mt-5 inline-flex font-semibold text-teal-700">
                Visit resource
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
