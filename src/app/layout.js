import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  metadataBase: new URL("https://www.annotexia.com"),

  title: {
    default: "Annotexia | AI Data Annotation & Data Labeling Services",
    template: "%s | Annotexia",
  },

  description:
    "Annotexia provides professional AI data annotation, image annotation, video annotation, text annotation, audio annotation, and data labeling services for machine learning and artificial intelligence projects.",

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

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Annotexia | AI Data Annotation Services",
    description:
      "Professional data annotation and AI training data solutions for machine learning projects.",

    url: "https://www.annotexia.com",

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

    title: "Annotexia",

    description:
      "Professional AI Data Annotation Services",

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

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}