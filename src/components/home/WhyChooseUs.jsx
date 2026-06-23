export default function WhyChooseUs() {
  const features = [
    {
      title: "High Accuracy",
      text: "Multi-pass review and clear labeling guidelines reduce rework before datasets reach your model team.",
    },
    {
      title: "Scalable Workforce",
      text: "Ramp annotation capacity up or down for pilots, production batches, and ongoing AI operations.",
    },
    {
      title: "Fast Delivery",
      text: "Structured milestones keep image, video, text, and audio annotation projects moving quickly.",
    },
    {
      title: "Dedicated QA Process",
      text: "Sample audits, consensus review, and escalation paths protect label consistency.",
    },
    {
      title: "Secure Data Handling",
      text: "Your training data stays organized through privacy-aware, access-controlled workflows.",
    },
    {
      title: "Industry Expertise",
      text: "Specialized teams understand healthcare AI, sports analytics, agriculture, and computer vision.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="scroll-reveal mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            Quality you can measure
          </p>
          <h2 className="text-4xl font-bold text-slate-950">
            Why Choose Annotexia?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={item.title}
              className="card scroll-reveal p-6"
              style={{ "--reveal-delay": `${index * 80}ms` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-lg font-bold text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600">{item.text}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
