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
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold">Annotexia</h3>

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
          </div>

          <div>
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

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>

            <div className="flex flex-col gap-2 text-slate-300">
              <Link className="hover:text-cyan-200" href="/services/image-annotation">
                Image Annotation
              </Link>

              <Link className="hover:text-cyan-200" href="/services/video-annotation">
                Video Annotation
              </Link>

              <Link className="hover:text-cyan-200" href="/services/text-annotation">
                Text Annotation
              </Link>

              <Link className="hover:text-cyan-200" href="/services/audio-annotation">
                Audio Annotation
              </Link>
            </div>
          </div>

          <div>
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
              <Link className="hover:text-cyan-200" href="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-slate-400">
          &copy; {new Date().getFullYear()} Annotexia. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
