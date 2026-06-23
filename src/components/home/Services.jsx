import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Image Annotation",
    href: "/services/image-annotation",
    text: "Bounding boxes, polygons, segmentation, keypoints, and classification for computer vision teams.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Video Annotation",
    href: "/services/video-annotation",
    text: "Frame-by-frame tracking, object detection, and event tagging for motion-rich AI datasets.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Text Annotation",
    href: "/services/text-annotation",
    text: "Entity extraction, sentiment labels, intent classification, and NLP-ready training corpora.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Audio Annotation",
    href: "/services/audio-annotation",
    text: "Speech labeling, audio classification, transcription review, and conversation intelligence datasets.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Data Labeling",
    href: "/services/data-labeling",
    text: "Flexible managed labeling teams for large-scale supervised learning and model evaluation.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mx-auto mb-12 max-w-3xl text-center scroll-reveal">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-teal-700">
            AI data services
          </p>
          <h2 className="text-4xl font-bold text-slate-950">
            Our Services
          </h2>
          <p className="mt-4 text-slate-600">
            Build better models with labeled datasets prepared for vision, NLP,
            speech, analytics, and multimodal AI workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group card scroll-reveal overflow-hidden"
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={`${service.title} service for AI training data`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="image-zoom object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-600">
                  {service.text}
                </p>
                <span className="mt-5 inline-flex font-semibold text-teal-700">
                  Learn more
                </span>
              </div>
            </Link>
          ))}

          <div className="card scroll-reveal flex min-h-80 flex-col justify-between bg-slate-950 p-8 text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Custom dataset?
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                Get a tailored labeling workflow for your model.
              </h3>
            </div>
            <Link href="/contact" className="mt-8 inline-flex font-semibold text-cyan-200">
              Talk to Annotexia
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
