export default function FAQ() {
  const faqs = [
    {
      q: "What is data annotation?",
      a: "Data annotation is the process of labeling data for AI and machine learning models.",
    },
    {
      q: "What industries do you serve?",
      a: "Healthcare, Sports Analytics, Agriculture, Computer Vision, Retail, and more.",
    },
    {
      q: "Do you support large-scale projects?",
      a: "Yes. We can scale annotation teams according to project requirements.",
    },
    {
      q: "Can Annotexia help improve AI dataset quality?",
      a: "Yes. We combine annotation guidelines, quality checks, and review feedback loops to improve label consistency.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <div className="scroll-reveal mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
            Answers for AI teams
          </p>
          <h2 className="text-4xl font-bold text-slate-950">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={faq.q}
              className="card scroll-reveal p-6"
              style={{ "--reveal-delay": `${index * 80}ms` }}
            >
              <h3 className="font-semibold text-lg mb-3 text-slate-950">
                {faq.q}
              </h3>

              <p className="text-slate-600">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
