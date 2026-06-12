export default function WhyChooseUs() {
  const features = [
    "High Accuracy",
    "Scalable Workforce",
    "Fast Delivery",
    "Dedicated QA Process",
    "Secure Data Handling",
    "Industry Expertise",
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Annotexia?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item) => (
            <div
              key={item}
              className="border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}