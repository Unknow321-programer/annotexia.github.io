import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import WhyChooseAnnotexia from "@/components/home/WhyChooseAnnotexia";
import Process from "@/components/home/Process";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import SEOResources from "@/components/home/SEOResources";
import AboutAnnotexia from "@/components/home/AboutAnnotexia";
import QualityAssurance from "@/components/home/QualityAssurance";
import SupportedTools from "@/components/home/SupportedTools";
import SupportedFormats from "@/components/home/SupportedFormats";
import Technologies from "@/components/home/Technologies";
import SecurityCompliance from "@/components/home/SecurityCompliance";
import CaseStudies from "@/components/home/CaseStudies";
import LatestInsights from "@/components/home/LatestInsights";

// ✅ FIXED: Strong, compelling metadata that overrides layout.js default
export const metadata = {
  title: "Data Annotation in 2-4 Weeks | Computer Vision & Healthcare | Annotexia",
  description:
    "Label 10k+ images in 2-4 weeks. Quality-reviewed datasets for Computer Vision, Healthcare, Robotics & more. Used by funded startups. Get free quote.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Data Annotation in 2-4 Weeks | Annotexia",
    // ✅ Stronger for social shares
    description:
      "Label images, videos & text in 2-4 weeks. Quality-reviewed datasets for Computer Vision, Healthcare, Robotics. Trusted by funded AI startups.",
    url: "https://www.annotexia.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Annotexia - Professional Data Annotation Services",
      },
    ],
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is data annotation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Data annotation is the process of labeling data for AI and machine learning models.",
        },
      },
      {
        "@type": "Question",
        name: "Do you support large-scale data labeling projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Annotexia can scale annotation teams according to project requirements.",
        },
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Annotexia",
    url: "https://www.annotexia.com",
    serviceType: "AI Data Annotation and Data Labeling Services",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Data Annotation Services",
      itemListElement: [
        "Image Annotation",
        "Video Annotation",
        "Text Annotation",
        "Audio Annotation",
        "Data Labeling",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Hero />
      <AboutAnnotexia />
      <Services />
      <Industries />
      <WhyChooseAnnotexia />
      <CaseStudies />
      <QualityAssurance />
      <SupportedTools />
      <SupportedFormats />
      <Process />
      <Technologies />
      <SecurityCompliance />
      <FAQ />
      <LatestInsights />
      {/* <Testimonials /> */}
      <SEOResources />
      <CTA />
    </>
  );
}