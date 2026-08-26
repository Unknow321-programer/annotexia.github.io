
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

export const metadata = {
  title: "AI Data Annotation & Data Labeling Services",
  description:
    "Annotexia provides image annotation, video annotation, text annotation, audio annotation, and managed data labeling services for AI, machine learning, computer vision, and NLP teams.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Annotexia | AI Data Annotation & Data Labeling Services",
    description:
      "Scalable, quality-reviewed AI training data services for computer vision, NLP, speech, healthcare AI, sports analytics, and agriculture.",
    url: "https://www.annotexia.com",
    images: [
      {
        url: "/images/company/CompanyLogo.png",
        width: 512,
        height: 512,
        alt: "Annotexia AI Data Annotation Services",
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
      <AboutAnnotexia/>
      <Services />
      <Industries />
      <WhyChooseAnnotexia />
      <CaseStudies />
      <QualityAssurance />
      <SupportedTools />
      <SupportedFormats />
      <Process/>
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
