"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll(".scroll-reveal");

    if (!animatedItems.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      }
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return null;
}
