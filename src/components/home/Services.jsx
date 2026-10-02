"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const stage = section?.querySelector(".services-scroll-stage");
    if (!section || !track || !stage) return;
    const media = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!media.matches) {
          track.style.transform = "none";
          return;
        }
        const bounds = section.getBoundingClientRect();
        const stickyTop = Number.parseFloat(getComputedStyle(stage).top) || 0;
        const range = Math.max(1, section.offsetHeight - stage.offsetHeight);
        const progress = Math.max(0, Math.min(1, (stickyTop - bounds.top) / range));
        const viewportWidth = track.parentElement?.clientWidth || window.innerWidth;
        const travel = Math.max(0, track.scrollWidth - viewportWidth);
        track.style.transform = `translate3d(${-travel * progress}px, 0, 0)`;
        track.style.setProperty("--services-progress", progress.toFixed(4));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    media.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      media.removeEventListener("change", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="home-section services-section py-20 bg-slate-50 sm:py-24">

      <div className="services-scroll-stage max-w-7xl mx-auto px-5 sm:px-6">

        <div className="scroll-reveal is-visible section-intro text-center max-w-3xl mx-auto">

          {/* <span className="services-eyebrow uppercase tracking-[3px] text-blue-600 font-semibold">

            Our Services

          </span> */}

          <h2 className="mt-5 text-4xl lg:text-5xl font-black">

            Choose the annotation service your AI project needs.

          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">

            From individual image labeling to large-scale video, 
            NLP, audio and multimodal datasets, 
            Annotexia provides project-specific annotation workflows designed around your data, 
            guidelines, quality requirements and delivery format.

          </p>

        </div>

        <div className="service-track-window mt-12 sm:mt-16">
        <div ref={trackRef} className="scroll-reveal service-card-grid">

          {services.map((service) => (

            <Link
              key={service.title}
              href={service.href}
              className="service-card group relative flex flex-col rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-500"
            >

              <div className="service-image-wrap relative overflow-hidden">
              <Image
                src={service.image}
                alt={service.description}
                width={600}
                height={350}
                className="service-image h-56 w-full object-cover"
              />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">

                <h3 className="text-2xl font-bold group-hover:text-blue-600">

                  {service.title}

                </h3>

                <p className="mt-5 text-slate-600 leading-8">

                  {service.description}

                </p>

                <div className="service-card-link mt-auto flex items-center justify-between pt-7 font-semibold text-blue-600">

                  Learn More →
                  <ArrowUpRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={19} />

                </div>

              </div>

            </Link>

          ))}

        </div>
        </div>

      </div>

    </section>
  );
}
