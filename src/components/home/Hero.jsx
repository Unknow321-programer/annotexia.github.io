"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import AnimatedNumber from "@/components/common/AnimatedNumber";

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const selectors = [
      ".hero-eyebrow",
      ".hero-copy h1",
      ".hero-copy > p",
      ".hero-tags",
      ".hero-actions",
      ".hero-stats",
    ];
    const textLayers = selectors.map((selector) => section.querySelector(selector)).filter(Boolean);
    textLayers.forEach((layer) => layer.style.removeProperty("opacity"));
    const dataField = section.querySelector(".hero-data-field");
    const paths = [...section.querySelectorAll(".hero-data-path")];
    const pathLengths = paths.map((path) => {
      try {
        const length = path.getTotalLength();
        path.style.strokeDasharray = `${length}`;
        return length;
      } catch { return 1; }
    });
    let frame = 0;

    const update = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (reducedMotion.matches) {
          section.classList.remove("hero-motion-enabled");
          section.classList.remove("hero-copy-entered");
          textLayers.forEach((layer) => {
            layer.style.removeProperty("opacity");
            layer.style.removeProperty("transform");
          });
          dataField?.style.removeProperty("transform");
          paths.forEach((path) => path.style.removeProperty("stroke-dashoffset"));
          return;
        }
        section.classList.add("hero-motion-enabled");

        const bounds = section.getBoundingClientRect();
        const travel = Math.max(1, window.innerHeight + bounds.height);
        const progress = Math.max(0, Math.min(1, (window.innerHeight - bounds.top) / travel));
        section.classList.toggle("hero-copy-entered", progress >= 0.12);

        textLayers.forEach((layer, index) => {
          const reveal = Math.max(0, Math.min(1, (progress - index * 0.045) / 0.3));
          layer.style.transform = `translate3d(0, ${(1 - reveal) * 22}px, 0)`;
        });

        paths.forEach((path, index) => {
          const reveal = Math.max(0, Math.min(1, (progress - index * 0.1) / 0.68));
          path.style.strokeDashoffset = `${pathLengths[index] * (1 - reveal)}`;
        });
        if (dataField) {
          const mobile = window.matchMedia("(max-width: 767px)").matches;
          dataField.style.transform = `translate3d(0, ${-18 * progress}px, 0) rotate(${(mobile ? 3 : 9) * progress}deg) scale(${1 + (mobile ? 0.025 : 0.06) * progress})`;
        }
        section.style.setProperty("--hero-scroll-progress", progress.toFixed(4));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    reducedMotion.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <section ref={sectionRef} className="hero-section home-hero relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
      <div aria-hidden="true" className="hero-orbit hero-orbit-one" />
      <div aria-hidden="true" className="hero-orbit hero-orbit-two" />
      <div aria-hidden="true" className="hero-grid absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb20,transparent_45%)]" />

      <div aria-hidden="true" className="hero-data-field">
        <svg viewBox="0 0 760 520" fill="none" preserveAspectRatio="xMidYMid meet">
          <path className="hero-data-path" d="M78 353 190 276 292 314 405 190 520 232 674 104" />
          <path className="hero-data-path" d="M112 125 230 203 324 107 405 190 528 385 665 306" />
          <path className="hero-data-path" d="M190 276 230 203 324 107M405 190 520 232 528 385" />
          <path className="hero-data-contour" d="M78 353h112v-77h134V107h81v83h115v42h154v72H528v79H405V190" />
          <rect className="hero-data-region" x="366" y="151" width="78" height="78" rx="3" />
          <circle className="hero-data-node" cx="78" cy="353" r="5" />
          <circle className="hero-data-node" cx="190" cy="276" r="5" />
          <circle className="hero-data-node" cx="230" cy="203" r="5" />
          <circle className="hero-data-node" cx="324" cy="107" r="5" />
          <circle className="hero-data-node" cx="405" cy="190" r="7" />
          <circle className="hero-data-node" cx="520" cy="232" r="5" />
          <circle className="hero-data-node" cx="528" cy="385" r="5" />
          <circle className="hero-data-node" cx="674" cy="104" r="5" />
          <circle className="hero-data-node" cx="665" cy="306" r="5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="relative z-[1] grid">
          <div className="hero-copy mx-auto w-full max-w-6xl">
            <div className="hero-eyebrow inline-flex items-center rounded-full border border-cyan-200/20 bg-white/8 px-5 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
              Image, Video, Text, Audio & LiDAR Annotation
            </div>

            <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[1.04] tracking-[-0.055em] text-white sm:text-5xl lg:text-[5rem]">
              AI Data Annotation Services for High-Quality Training Data
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Turn raw <strong>images, videos, text, audio and LiDAR </strong> into accurate, production-ready training datasets.
              Annotexia helps AI teams scale data annotation with<strong> project-specific guidelines, quality assurance, flexible teams and delivery </strong>in the formats and platforms they already use.
            </p>

            <div className="hero-tags mt-8 flex flex-wrap gap-2.5">
              {[
                "Image Annotation",
                "Video Annotation",
                "Text Annotation",
                "Audio Annotation",
                "LiDAR Annotation",
                "OCR",
                "RLHF",
                "Data Labeling",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.055] px-3.5 py-2 text-xs font-medium text-blue-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-actions mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="hero-primary-link rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700 sm:px-8"
              >
                Get Your Free Assessment
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-white/40 hover:bg-white/10 sm:px-8"
              >
                Explore Services
              </Link>
            </div>

            <div className="hero-stats mt-12 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-white/10 pt-7 sm:mt-14 sm:grid-cols-4 sm:gap-5">
              <div>
                <div className="hero-stat-value text-3xl font-black text-white sm:text-4xl"><AnimatedNumber value="15+" /></div>
                <p className="mt-2 text-slate-400">Annotation Services</p>
              </div>
              <div>
                <div className="hero-stat-value text-3xl font-black text-white sm:text-4xl"><AnimatedNumber value="12+" /></div>
                <p className="mt-2 text-slate-400">Industries Supported</p>
              </div>
              <div>
                <div className="hero-stat-value text-2xl font-black text-white sm:text-3xl">Multi-Level</div>
                <p className="mt-2 text-slate-400">Quality Assurance</p>
              </div>
              <div>
                <div className="hero-stat-value text-2xl font-black text-white sm:text-3xl">Global</div>
                <p className="mt-2 text-slate-400">Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
