import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  BrainCircuit,
  Car,
  HeartPulse,
  Trophy,
  Users,
  ShieldCheck,
  Database,
  Factory,
  Plane,
  ShoppingCart,
  Wheat,
} from "lucide-react";

export const metadata = {
  title:
    "AI Data Annotation Services by Industry | Healthcare, Sports, Automotive & More | Annotexia",

  description:
    "Explore AI data annotation services for healthcare, sports analytics, autonomous vehicles, computer vision, agriculture, retail, drone imagery, manufacturing and other AI applications.",

  keywords: [
    "AI data annotation services",
    "data annotation services by industry",
    "healthcare data annotation",
    "sports analytics annotation",
    "autonomous vehicle annotation",
    "computer vision annotation",
    "agriculture data annotation",
    "retail data annotation",
    "drone imagery annotation",
    "manufacturing AI annotation",
    "LiDAR annotation services",
    "medical image annotation",
    "AI training data",
    "machine learning datasets",
    "image annotation services",
    "video annotation services",
  ],

  alternates: {
    canonical: "https://www.annotexia.com/industries",
  },

  openGraph: {
    title:
      "AI Data Annotation Services by Industry | Annotexia",
    description:
      "Professional AI data annotation and labeling services for healthcare, sports, autonomous vehicles, agriculture, retail, manufacturing and more.",
    url: "https://www.annotexia.com/industries",
    siteName: "Annotexia",
    images: [
      {
        url: "https://www.annotexia.com/images/industries-hero.jpg",
        width: 1200,
        height: 630,
        alt: "AI data annotation services across industries",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "AI Data Annotation Services by Industry | Annotexia",
    description:
      "Industry-specific AI training data and annotation services for computer vision, healthcare, sports, automotive, agriculture and more.",
    images: [
      "https://www.annotexia.com/images/industries-hero.jpg",
    ],
  },
};

const industries = [
  {
    title: "Sports Analytics",
    href: "/industries/sports-analytics",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=80",
    alt: "AI sports analytics player tracking and video annotation",
    icon: Trophy,
    description:
      "Build sports AI datasets from match footage with player tracking, ball tracking, event detection, pose estimation and positional analysis.",
    features: [
      "Player Tracking",
      "Ball Tracking",
      "Pose Estimation",
      "Event Detection",
    ],
  },

  {
    title: "Healthcare AI",
    href: "/industries/healthcare-ai",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    alt: "Medical image annotation and healthcare AI training data",
    icon: HeartPulse,
    description:
      "Create high-quality medical AI datasets for imaging, segmentation, radiology, pathology and other healthcare machine learning applications.",
    features: [
      "Medical Imaging",
      "Image Segmentation",
      "Radiology",
      "Pathology",
    ],
  },

  {
    title: "Autonomous Vehicles",
    href: "/industries/autonomous-vehicles",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
    alt: "Autonomous vehicle image and LiDAR annotation datasets",
    icon: Car,
    description:
      "Support autonomous driving and ADAS development with image, video and LiDAR annotation for objects, lanes, road scenes and sensor data.",
    features: [
      "LiDAR Annotation",
      "Lane Detection",
      "3D Bounding Boxes",
      "Semantic Segmentation",
    ],
  },

  {
    title: "Computer Vision",
    href: "/industries/computer-vision",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    alt: "Computer vision data annotation and AI training datasets",
    icon: BrainCircuit,
    description:
      "Develop reliable computer vision datasets using object detection, image classification, OCR, segmentation and keypoint annotation.",
    features: [
      "Image Annotation",
      "OCR",
      "Object Detection",
      "Segmentation",
    ],
  },

  {
    title: "Agriculture AI",
    href: "/industries/agriculture",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
    alt: "Agriculture AI crop monitoring and plant image annotation",
    icon: Wheat,
    description:
      "Create agricultural AI datasets for crop monitoring, plant disease detection, weed identification, yield analysis and precision farming.",
    features: [
      "Crop Monitoring",
      "Plant Disease",
      "Drone Imagery",
      "Precision Farming",
    ],
  },

  {
    title: "Drone & Aerial Imagery",
    href: "/industries/drone-imagery",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=80",
    alt: "Drone aerial imagery annotation and geospatial AI datasets",
    icon: Plane,
    description:
      "Transform drone and aerial imagery into structured datasets for mapping, surveying, infrastructure inspection, construction and remote sensing.",
    features: [
      "Aerial Mapping",
      "Infrastructure",
      "Surveying",
      "Remote Sensing",
    ],
  },

  {
    title: "Retail & E-commerce",
    href: "/industries/retail-ecommerce",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80",
    alt: "Retail product recognition and shelf monitoring annotation",
    icon: ShoppingCart,
    description:
      "Build retail AI datasets for product recognition, shelf monitoring, inventory detection, barcode OCR and visual search applications.",
    features: [
      "Shelf Monitoring",
      "Barcode OCR",
      "Inventory Detection",
      "Visual Search",
    ],
  },

  {
    title: "Manufacturing & Industrial AI",
    href: "/industries/industrial-ai",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
    alt: "Manufacturing defect detection and industrial AI annotation",
    icon: Factory,
    description:
      "Support industrial AI with datasets for defect detection, quality inspection, production monitoring, robotics and automated visual inspection.",
    features: [
      "Defect Detection",
      "Quality Inspection",
      "Industrial Robotics",
      "Automation",
    ],
  },
];

const capabilities = [
  {
    title: "High-Quality Annotation",
    description:
      "Structured annotation workflows, project guidelines and multi-level quality checks help produce consistent AI training datasets.",
    icon: CheckCircle2,
  },
  {
    title: "Scalable Workforce",
    description:
      "Scale annotation capacity from smaller pilot datasets to large enterprise projects without changing your workflow.",
    icon: Users,
  },
  {
    title: "Secure Data Handling",
    description:
      "Confidential project workflows, NDA support and controlled access help protect sensitive client datasets.",
    icon: ShieldCheck,
  },
  {
    title: "AI-Focused Expertise",
    description:
      "Annotation workflows designed for computer vision, NLP, OCR, sports analytics, healthcare, robotics and other AI applications.",
    icon: BrainCircuit,
  },
];

const faqs = [
  {
    question: "What industries does Annotexia provide data annotation services for?",
    answer:
      "Annotexia provides AI data annotation services for sports analytics, healthcare, autonomous vehicles, computer vision, agriculture, drone and aerial imagery, retail, manufacturing and other machine learning applications.",
  },
  {
    question: "Can you create industry-specific AI training datasets?",
    answer:
      "Yes. Annotation workflows can be customized around your industry, dataset type, annotation classes, labeling guidelines, quality requirements and required output format.",
  },
  {
    question: "Do you provide healthcare data annotation?",
    answer:
      "Yes. Healthcare annotation can include medical image labeling, segmentation, radiology datasets, pathology imagery and other AI training data workflows based on project requirements.",
  },
  {
    question: "Do you support autonomous vehicle annotation?",
    answer:
      "Yes. Autonomous vehicle projects can include 2D and 3D bounding boxes, LiDAR annotation, lane detection, object tracking, semantic segmentation and other perception datasets.",
  },
  {
    question: "Can Annotexia handle large annotation projects?",
    answer:
      "Yes. Our workflows are designed to scale according to project volume, annotation complexity, turnaround requirements and quality expectations.",
  },
  {
    question: "Which annotation formats do you support?",
    answer:
      "Depending on the project, we can work with formats such as COCO JSON, YOLO TXT, Pascal VOC XML, JSON, CSV and platform-specific or custom formats.",
  },
];

export default function IndustriesPage() {
  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "AI Data Annotation Services by Industry",
    description:
      "Industry-specific AI data annotation and labeling services provided by Annotexia.",
    url: "https://www.annotexia.com/industries",
    isPartOf: {
      "@type": "WebSite",
      name: "Annotexia",
      url: "https://www.annotexia.com",
    },
    about: {
      "@type": "Thing",
      name: "AI Data Annotation",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: industries.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: industry.title,
        url: `https://www.annotexia.com${industry.href}`,
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.annotexia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://www.annotexia.com/industries",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="bg-white overflow-hidden">

      {/* ================= SCHEMA ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(industrySchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">

        <div className="absolute inset-0 pointer-events-none">

          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">

                Industry-Specific AI Training Data

              </span>

              <h1 className="mt-8 text-5xl lg:text-6xl font-extrabold leading-tight text-white">

                AI Data Annotation

                <span className="block text-cyan-400">

                  Services by Industry

                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

                Annotexia provides professional data annotation and labeling
                services for industries building computer vision, machine
                learning and AI applications.

              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">

                From healthcare and sports analytics to autonomous vehicles,
                agriculture, retail, drone imagery and manufacturing, we create
                structured datasets tailored to your AI project requirements.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white shadow-xl transition hover:bg-cyan-600"
                >
                  Discuss Your Project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl border border-white/20 px-8 py-4 text-white transition hover:border-cyan-400 hover:bg-white/5"
                >
                  Explore Annotation Services
                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">

                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                  alt="AI data annotation services across multiple industries"
                  width={1200}
                  height={800}
                  priority
                  className="h-[420px] w-full rounded-2xl object-cover"
                />

              </div>

              <div className="absolute -top-6 -left-6 hidden rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl sm:block">

                <p className="text-sm font-semibold text-cyan-400">
                  AI Applications
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  Computer Vision
                </p>

              </div>

              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl sm:block">

                <p className="text-sm text-green-400">
                  Dataset Quality
                </p>

                <p className="mt-1 text-xl font-bold text-white">
                  Multi-Level QA
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
            AI Data Solutions
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Annotation Services Built Around Your Industry
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-slate-600">

            Different AI applications require different datasets, annotation
            classes and quality standards. Annotexia combines trained
            annotation teams, defined guidelines and quality assurance
            workflows to create datasets aligned with your machine learning
            objectives.

          </p>

        </div>

      </section>

      {/* ================= INDUSTRIES ================= */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16 text-center">

            <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
              Industries We Serve
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
              Industry-Specific AI Training Data
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

              Explore annotation solutions designed for different industries
              and AI applications.

            </p>

          </div>

          <div className="grid gap-10 lg:grid-cols-2">

            {industries.map((industry) => {

              const Icon = industry.icon;

              return (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  <div className="relative overflow-hidden">

                    <Image
                      src={industry.image}
                      alt={industry.alt}
                      width={1000}
                      height={650}
                      className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <div className="absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-lg">

                      <Icon className="text-white" size={28} />

                    </div>

                  </div>

                  <div className="p-8">

                    <h3 className="text-3xl font-bold text-slate-900">
                      {industry.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-600">
                      {industry.description}
                    </p>

                    <div className="mt-7 grid grid-cols-2 gap-4">

                      {industry.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm font-medium text-slate-700"
                        >
                          <CheckCircle2
                            size={18}
                            className="shrink-0 text-cyan-600"
                          />

                          {feature}

                        </div>
                      ))}

                    </div>

                    <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-600 transition-all group-hover:gap-4">

                      Explore {industry.title}

                      <ArrowRight size={18} />

                    </div>

                  </div>

                </Link>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= CAPABILITIES ================= */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16 text-center">

            <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
              Why Annotexia
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
              Built for AI Teams That Need Reliable Data
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

              Our annotation workflows are designed to support accuracy,
              consistency, scalability and secure handling of AI training data.

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {capabilities.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900 hover:shadow-2xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 transition group-hover:bg-white">

                    <Icon
                      size={30}
                      className="text-cyan-600"
                    />

                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-slate-900 group-hover:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-slate-600 group-hover:text-slate-300">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= ANNOTATION TYPES ================= */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="font-semibold uppercase tracking-[4px] text-cyan-400">
                Annotation Capabilities
              </span>

              <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
                Annotation Types for Modern AI Systems
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-300">

                Our teams can support different annotation requirements across
                image, video, text, audio and geospatial datasets.

              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">

                {[
                  "Bounding Boxes",
                  "Polygon Annotation",
                  "Semantic Segmentation",
                  "Instance Segmentation",
                  "Keypoint Annotation",
                  "Object Tracking",
                  "OCR Annotation",
                  "LiDAR Annotation",
                  "Image Classification",
                  "Video Annotation",
                  "Text Annotation",
                  "Audio Annotation",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-semibold transition hover:border-cyan-400 hover:bg-white/10"
                  >
                    {item}
                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg">

              <div className="flex items-center gap-4">

                <Database className="text-cyan-400" size={40} />

                <div>

                  <h3 className="text-2xl font-bold">
                    AI-Ready Datasets
                  </h3>

                  <p className="mt-1 text-slate-400">
                    Structured for your machine learning workflow
                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-5">

                {[
                  "COCO JSON",
                  "YOLO TXT",
                  "Pascal VOC XML",
                  "JSON / CSV",
                  "Label Studio",
                  "CVAT",
                  "Custom Formats",
                ].map((format) => (

                  <div
                    key={format}
                    className="flex items-center gap-3 rounded-xl bg-slate-900 p-4"
                  >

                    <CheckCircle2
                      size={20}
                      className="text-cyan-400"
                    />

                    <span>
                      {format}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SEO CONTENT ================= */}

      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
            Industry AI Data Annotation
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
            Professional AI Data Annotation Services for Multiple Industries
          </h2>

          <div className="mt-10 space-y-7 text-lg leading-9 text-slate-600">

            <p>
              Artificial intelligence applications depend on training data
              that accurately represents the environments in which AI models
              operate. Different industries require different annotation
              techniques, labeling guidelines and quality standards.
            </p>

            <p>
              Annotexia provides industry-specific data annotation services
              for organizations developing computer vision, machine learning
              and AI solutions. Our services cover image annotation, video
              annotation, object tracking, segmentation, OCR, LiDAR labeling
              and other dataset preparation requirements.
            </p>

            <p>
              In healthcare, annotated medical images can support the
              development of diagnostic and medical imaging AI. Sports
              organizations can use player tracking, ball tracking and event
              annotation to build sports analytics systems. Automotive and
              autonomous driving teams can use 2D, 3D and LiDAR annotation for
              perception and sensor-based AI systems.
            </p>

            <p>
              Agriculture and drone companies can use annotated aerial imagery
              for crop monitoring, mapping, inspection and remote sensing.
              Retail businesses can create datasets for product recognition,
              shelf monitoring and visual search, while manufacturers can use
              annotated images and video for defect detection and automated
              quality inspection.
            </p>

            <p>
              By combining structured annotation processes, trained teams and
              quality assurance workflows, Annotexia helps organizations turn
              raw data into datasets that are ready for machine learning model
              development.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="mb-16 text-center">

            <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900 lg:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Common questions about our industry-specific AI annotation
              services.
            </p>

          </div>

          <div className="space-y-5">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-slate-900">

                  {faq.question}

                  <span className="text-2xl transition group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="mt-5 leading-8 text-slate-600">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

      {/* ================= INTERNAL LINKS ================= */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-8 md:grid-cols-3">

            <Link
              href="/services"
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                Explore Data Annotation Services
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Explore our image, video, text, audio and data labeling
                services.
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-cyan-600 group-hover:gap-4">
                View Services
                <ArrowRight size={18} />
              </div>

            </Link>

            <Link
              href="/blog"
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                AI & Data Annotation Resources
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Learn more about AI training data, annotation techniques and
                machine learning workflows.
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-cyan-600 group-hover:gap-4">
                Read Our Blog
                <ArrowRight size={18} />
              </div>

            </Link>

            <Link
              href="/contact"
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h3 className="text-2xl font-bold text-slate-900">
                Need an Annotation Partner?
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Tell us about your dataset, annotation requirements and
                project timeline.
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-cyan-600 group-hover:gap-4">
                Talk to Our Team
                <ArrowRight size={18} />
              </div>

            </Link>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 py-24 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="font-semibold uppercase tracking-[4px] text-cyan-200">
            Build Better AI
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Need Industry-Specific AI Training Data?
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-blue-100">

            Share your dataset, annotation requirements and project goals.
            Our team can help you plan an annotation workflow around your AI
            application.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
            >
              Get a Free Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-700"
            >
              View Annotation Services
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}