export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Johnson",
      company: "Sports Analytics Company",
      feedback:
        "Annotexia delivered high-quality sports video annotations with excellent accuracy and fast turnaround times.",
    },
    {
      name: "Sarah Williams",
      company: "Healthcare AI Startup",
      feedback:
        "Their annotation team helped us create medical imaging datasets that significantly improved our AI model performance.",
    },
    {
      name: "David Brown",
      company: "Computer Vision Solutions",
      feedback:
        "Professional communication, scalable workforce, and outstanding quality assurance process.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            We help businesses build high-quality AI training datasets
            through accurate and scalable data annotation services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic mb-6">
                "{testimonial.feedback}"
              </p>

              <div>
                <h3 className="font-semibold text-lg">
                  {testimonial.name}
                </h3>

                <p className="text-gray-500 text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}