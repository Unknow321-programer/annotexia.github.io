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
  ];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">

          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg mb-3">
                {faq.q}
              </h3>

              <p className="text-gray-600">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}