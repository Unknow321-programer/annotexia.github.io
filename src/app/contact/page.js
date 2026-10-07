export const metadata = {
  title: "Contact Us",
  description:
    "Talk with Annotexia about image, video, text, audio, LiDAR, or egocentric video data collection. Share your project goals to request a tailored assessment.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Annotexia | AI Data Annotation Projects",
    description:
      "Discuss your image, video, text, audio, LiDAR, or egocentric video project with Annotexia and request a tailored assessment.",
    url: "https://www.annotexia.com/contact",
    siteName: "Annotexia",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Annotexia | AI Data Annotation Projects",
    description:
      "Discuss your AI training data requirements and request a tailored assessment.",
  },
};

import ContactClient from "./ContactClient";

export default function ContactPage() {
  return <ContactClient />;
}
