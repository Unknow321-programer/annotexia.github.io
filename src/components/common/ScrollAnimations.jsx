"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const animatedItems =
        document.querySelectorAll(".scroll-reveal");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.16,
        }
      );

      animatedItems.forEach((item) => {
        item.classList.remove("is-visible");
        observer.observe(item);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}