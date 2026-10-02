"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const animatedItems = document.querySelectorAll(".scroll-reveal");
    const caseStudyGrid = document.querySelector(".case-study-grid");
    const caseStudyCards = caseStudyGrid?.querySelectorAll(".case-study-card") ?? [];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const footer = document.querySelector(".site-footer");
    const contactSection = document.querySelector(".contact-form-section");

    let frame = 0;
    let observer;
    let contactObserver;
    const updateFooterProgress = () => {
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const pastMidpoint = Math.max(0, window.innerHeight * 0.52 - rect.top);
      const ignition = reduceMotion ? 1 : Math.min(1, pastMidpoint / 24);
      const burn = reduceMotion ? 0 : Math.min(1, pastMidpoint / 76);
      const candleShadow = ignition * 0.55;
      footer.style.setProperty("--footer-scroll-progress", (pastMidpoint / 76).toFixed(3));
      footer.style.setProperty("--footer-ignition-progress", ignition.toFixed(3));
      footer.style.setProperty("--footer-burn-progress", burn.toFixed(3));
      footer.style.setProperty("--footer-candle-shadow-opacity", candleShadow.toFixed(3));
      footer.style.setProperty("--footer-hand-left-shift", `${ignition * 3}px`);
      footer.style.setProperty("--footer-hand-right-shift", `${ignition * -3}px`);
      footer.classList.add("footer-scroll-ready");
      footer.classList.toggle("footer-burning", reduceMotion || pastMidpoint > 0);
      footer.classList.toggle("footer-copy-visible", reduceMotion || pastMidpoint >= 30);
      footer.classList.toggle("footer-spark-active", !reduceMotion && pastMidpoint >= 54);
    };
    const scheduleFooterProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateFooterProgress();
      });
    };

    if (reduceMotion || !("IntersectionObserver" in window)) {
      animatedItems.forEach((item) => item.classList.add("is-visible"));
      contactSection?.classList.add("contact-scroll-ready");
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
      );

      animatedItems.forEach((item) => observer.observe(item));
      if (contactSection) {
        contactObserver = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("contact-scroll-ready");
            contactObserver.unobserve(entry.target);
          },
          { rootMargin: "-12% 0px -78% 0px", threshold: 0 }
        );
        contactObserver.observe(contactSection);
      }
      if (caseStudyGrid && caseStudyCards.length) {
        caseStudyGrid.classList.add("case-study-grid-reveal-ready");
        caseStudyCards.forEach((card) => observer.observe(card));
      }
    }

    window.addEventListener("scroll", scheduleFooterProgress, { passive: true });
    window.addEventListener("resize", scheduleFooterProgress);
    updateFooterProgress();
    return () => {
      observer?.disconnect();
      contactObserver?.disconnect();
      window.removeEventListener("scroll", scheduleFooterProgress);
      window.removeEventListener("resize", scheduleFooterProgress);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
