import Link from "next/link";

const industries = [
  {
    title: "Sports Analytics",
    href: "/industries/sports-analytics",
  },
  {
    title: "Healthcare AI",
    href: "/industries/healthcare-ai",
  },
  {
    title: "Agriculture",
    href: "/industries/farming",
  },
  {
    title: "Computer Vision",
    href: "/industries/computer-vision",
  },
];

export default function Industries() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Industries We Serve
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="bg-white border rounded-xl p-6 text-center hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">
                {industry.title}
              </h3>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}