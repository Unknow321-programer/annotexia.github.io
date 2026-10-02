import Link from "next/link";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/annotexia",
  }
];

const seoLinks = [
  {
    label: "Google AI",
    href: "https://ai.google/",
  },
  {
    label: "OpenML",
    href: "https://www.openml.org/",
  },
  {
    label: "NIST AI",
    href: "https://airc.nist.gov/",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer bg-slate-950 text-white">
      <div className="footer-candle-scene" aria-hidden="true">
        <span className="footer-candle-glow" />
        <svg className="footer-candle" viewBox="0 0 72 112">
          <path className="footer-candle-flame" d="M36 4C31 14 24 19 26 28c1 7 5 10 10 10s10-4 10-10C47 19 40 12 36 4Z" />
          <path className="footer-candle-core" d="M36 14c-2 6-5 9-4 14 0 3 2 5 4 5s4-2 4-5c0-4-2-8-4-14Z" />
          <path className="footer-candle-wick" d="M36 30v8" />
          <path className="footer-candle-body" d="M22 39c4 2 24 2 28 0v55c0 5-4 8-9 8H31c-5 0-9-3-9-8V39Z" />
          <path className="footer-candle-rim" d="M22 40c5 4 23 4 28 0" />
          <path className="footer-candle-shine" d="M28 49v36" />
          <ellipse className="footer-candle-base" cx="36" cy="103" rx="18" ry="3" />
        </svg>
        <svg className="footer-robot-hands" viewBox="0 0 220 112" preserveAspectRatio="none">
          <g className="footer-robot-hand hand-left">
            <path className="robot-arm" d="M4 89h34l17-15h23" />
            <path className="robot-arm-highlight" d="M6 86h31l15-13h22" />
            <path className="robot-joint" d="M32 80l9-7 9 9-9 9-9-4Z" />
            <path className="robot-palm" d="M67 64h17l10 8-5 9 9 6-5 11-19-5-9-9Z" />
            <path className="robot-finger" d="M81 71h10l8 8M78 91l12 3 9-5" />
            <circle className="robot-joint-cap" cx="41" cy="82" r="2.8" />
          </g>
          <g className="footer-robot-hand hand-right">
            <path className="robot-arm" d="M216 89h-34l-17-15h-23" />
            <path className="robot-arm-highlight" d="M214 86h-31l-15-13h-22" />
            <path className="robot-joint" d="M188 80l-9-7-9 9 9 9 9-4Z" />
            <path className="robot-palm" d="M153 64h-17l-10 8 5 9-9 6 5 11 19-5 9-9Z" />
            <path className="robot-finger" d="M139 71h-10l-8 8M142 91l-12 3-9-5" />
            <circle className="robot-joint-cap" cx="179" cy="82" r="2.8" />
          </g>
        </svg>
        <i className="footer-candle-spark spark-one" />
        <i className="footer-candle-spark spark-two" />
        <i className="footer-candle-spark spark-three" />
      </div>
      <div className="footer-inner mx-auto max-w-7xl px-6 py-20">
        <div className="footer-grid grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-3xl font-bold tracking-tight">Annotexia</h3>

            <p className="max-w-md text-slate-300">
              Professional AI data annotation, data labeling, image annotation,
              video annotation, text annotation, and audio annotation services.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/15 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-200 hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Business Information */}
            <div className="mt-6 text-sm text-slate-400">
              <h4 className="mb-2 font-semibold text-slate-300">
                Business Information
              </h4>

              <div className="flex flex-col gap-1">
                <p>
                  GSTIN: <span className="text-slate-400">27DMUPG1013A1ZI</span>
                </p>

                <p>
                  Udyam Registration No.:{" "}
                  <span className="text-slate-400">UDYAM-MH-26-0092131</span>
                </p>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="mb-4 font-semibold">Company</h4>

            <div className="flex flex-col gap-2 text-slate-300">
              <Link className="hover:text-cyan-200" href="/about">
                About
              </Link>

              <Link className="hover:text-cyan-200" href="/contact">
                Contact
              </Link>

              <Link className="hover:text-cyan-200" href="/blog">
                Blog
              </Link>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="mb-4 font-semibold">Services</h4>

            <div className="flex flex-col gap-2 text-slate-300">
              <Link
                className="hover:text-cyan-200"
                href="/services/image-annotation"
              >
                Image Annotation
              </Link>

              <Link
                className="hover:text-cyan-200"
                href="/services/video-annotation"
              >
                Video Annotation
              </Link>

              <Link
                className="hover:text-cyan-200"
                href="/services/text-annotation"
              >
                Text Annotation
              </Link>

              <Link
                className="hover:text-cyan-200"
                href="/services/audio-annotation"
              >
                Audio Annotation
              </Link>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="mb-4 font-semibold">Resources</h4>

            <div className="flex flex-col gap-2 text-slate-300">
              {seoLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-200"
                >
                  {link.label}
                </a>
              ))}

              <Link className="hover:text-cyan-200" href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link
                className="hover:text-cyan-200"
                href="/terms-and-conditions"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-legal mt-12 border-t border-white/10 pt-8 text-center text-slate-400">
          &copy; {new Date().getFullYear()} Annotexia. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
