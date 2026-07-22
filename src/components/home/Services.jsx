import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Image Annotation",
    href: "/services/image-annotation",
    image: "/images/services/image-annotation.webp",
    description:
      "High-quality image annotation services including bounding box annotation, polygon annotation, semantic segmentation, instance segmentation, keypoint labeling, cuboid annotation, image classification, and landmark annotation for computer vision and AI applications.",
  },
  {
    title: "Video Annotation",
    href: "/services/video-annotation",
    image: "/images/services/video-annotation.webp",
    description:
      "Professional video annotation services including object tracking, frame-by-frame labeling, action recognition, event detection, lane annotation, sports analytics, surveillance datasets, and autonomous driving video annotation.",
  },
  {
    title: "Text Annotation",
    href: "/services/text-annotation",
    image: "/images/services/text-annotation.webp",
    description:
      "Enterprise text annotation services for NLP, Named Entity Recognition (NER), sentiment analysis, document classification, intent annotation, chatbot datasets, and Large Language Model (LLM) training.",
  },
  {
    title: "Audio Annotation",
    href: "/services/audio-annotation",
    image: "/images/services/audio-annotation.webp",
    description:
      "Accurate audio annotation services including speech transcription, speaker diarization, intent recognition, emotion detection, acoustic event labeling, conversational AI datasets, and speech recognition training data.",
  },
  {
    title: "Data Labeling",
    href: "/services/data-labeling",
    image: "/images/services/data-labeling.webp",
    description:
      "Comprehensive data labeling services covering image, video, text, and audio datasets with scalable annotation teams, rigorous quality assurance, and secure workflows for enterprise AI projects.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="scroll-reveal max-w-7xl mx-auto px-6">

        <div className="scroll-reveal text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Our Services

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black">

            Enterprise AI Data Annotation Services

          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">

            Annotexia delivers high-quality AI training datasets
            through professional image, video, text, audio,
            LiDAR, OCR, and RLHF annotation services.
            Our scalable annotation teams support AI companies,
            startups, enterprises, and research organizations
            worldwide.

          </p>

        </div>

        <div className="scroll-reveal grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-16">

          {services.map((service) => (

            <Link
              key={service.title}
              href={service.href}
              className="group rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border hover:border-blue-600"
            >

              <Image
                src={service.image}
                alt={service.description}
                width={600}
                height={350}
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold group-hover:text-blue-600">

                  {service.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8">

                  {service.description}

                </p>

                <div className="mt-8 text-blue-600 font-semibold">

                  Learn More →

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}