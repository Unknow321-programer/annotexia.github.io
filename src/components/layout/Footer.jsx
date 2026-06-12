import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Annotexia
            </h3>

            <p className="text-gray-400">
              Professional AI Data Annotation and
              Data Labeling Services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Company
            </h4>

            <div className="flex flex-col gap-2">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Services
            </h4>

            <div className="flex flex-col gap-2">
              <Link href="/services/image-annotation">
                Image Annotation
              </Link>

              <Link href="/services/video-annotation">
                Video Annotation
              </Link>

              <Link href="/services/text-annotation">
                Text Annotation
              </Link>

              <Link href="/services/audio-annotation">
                Audio Annotation
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">
              Legal
            </h4>

            <div className="flex flex-col gap-2">
              <Link href="/privacy-policy">
                Privacy Policy
              </Link>

              <Link href="/terms-and-conditions">
                Terms & Conditions
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Annotexia.
          All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}