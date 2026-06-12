import Link from "next/link";

const services = [
  {
    title: "Image Annotation",
    href: "/services/image-annotation",
  },
  {
    title: "Video Annotation",
    href: "/services/video-annotation",
  },
  {
    title: "Text Annotation",
    href: "/services/text-annotation",
  },
  {
    title: "Audio Annotation",
    href: "/services/audio-annotation",
  },
  {
    title: "Data Labeling",
    href: "/services/data-labeling",
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="border rounded-xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold">
                {service.title}
              </h3>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}