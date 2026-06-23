import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    title: "Sports Analytics",
    href: "/industries/sports-analytics",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Healthcare AI",
    href: "/industries/healthcare-ai",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Agriculture",
    href: "/industries/farming",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Computer Vision",
    href: "/industries/computer-vision",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="scroll-reveal mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Domain expertise
            </p>
            <h2 className="text-4xl font-bold text-slate-950">
              Industries We Serve
            </h2>
          </div>
          <p className="max-w-lg text-slate-600">
            Annotexia supports AI teams building production systems across
            healthcare, sports, agriculture, computer vision, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {industries.map((industry, index) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group card scroll-reveal overflow-hidden"
              style={{ "--reveal-delay": `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={`${industry.title} data annotation use case`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="image-zoom object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 text-xl font-semibold text-white">
                  {industry.title}
                </h3>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
