import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollAnimations from "@/components/common/ScrollAnimations";
import ScrollProgress from "@/components/common/ScrollProgress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { organizationSchema } from "@/lib/schema";

export const metadata = {
  metadataBase: new URL("https://www.annotexia.com"),

  title: {
    default: "AI Data Annotation Services | Annotexia",
    template: "%s | Annotexia",
  },

  description:
    "Annotexia helps AI teams build reliable training datasets with professional image, video, text, audio, LiDAR, and egocentric video collection services.",

  keywords: [
    "Data Annotation",
    "Data Labeling",
    "AI Training Data",
    "Image Annotation",
    "Video Annotation",
    "Text Annotation",
    "Audio Annotation",
    "Machine Learning Datasets",
    "Computer Vision Annotation",
    "Sports Analytics Annotation",
    "Healthcare AI Annotation",
    "Agriculture AI Annotation",
  ],

  authors: [
    {
      name: "Annotexia",
    },
  ],

  creator: "Annotexia",

  publisher: "Annotexia",

  openGraph: {
    siteName: "Annotexia",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Annotexia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Annotexia",
              url: "https://www.annotexia.com",
              logo:
                "https://www.annotexia.com/images/company/CompanyLogo.png",
              email: "contact@annotexia.com",
              description:
                "AI Data Annotation & Data Labeling Services",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navbar />
        <ScrollProgress />
        <ScrollAnimations />
        {children}
        <Footer />

        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
