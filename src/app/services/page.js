import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  ImageIcon,
  Video,
  FileText,
  Mic,
  Database,
  Brain,
  ShieldCheck,
  Clock3,
  Users,
  ScanLine,
  Map,
  Target,
} from "lucide-react";

export const metadata = {
  title:
    "Data Annotation Services | Image, Video, Text & Audio Annotation | Annotexia",

  description:
    "Annotexia provides professional data annotation and labeling services for AI and machine learning, including image, video, text, audio, OCR, LiDAR and computer vision datasets.",

  alternates: {
    canonical: "https://www.annotexia.com/services",
  },

  openGraph: {
    title: "Data Annotation Services | Annotexia",
    description:
      "Professional image, video, text, audio, OCR and LiDAR annotation services for AI and machine learning teams.",
    url: "https://www.annotexia.com/services",
    siteName: "Annotexia",
    images: [
      {
        url: "/images/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Annotexia data annotation services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Data Annotation Services | Annotexia",
    description:
      "Professional AI data annotation and labeling services for machine learning teams.",
    images: ["/images/services-hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const services = [
  {
    title: "Image Annotation",
    icon: ImageIcon,
    href: "/services/image-annotation",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Image annotation services for computer vision AI",
    description:
      "Create accurate image datasets using bounding boxes, polygons, segmentation, keypoints, OCR and object detection annotation.",
  },

  {
    title: "Video Annotation",
    icon: Video,
    href: "/services/video-annotation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Video annotation and object tracking services",
    description:
      "Frame-by-frame annotation, object tracking, event tagging and action recognition for computer vision and video AI.",
  },

  {
    title: "Text Annotation",
    icon: FileText,
    href: "/services/text-annotation",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    alt: "Text annotation services for NLP and language AI",
    description:
      "Build NLP training datasets through named entity recognition, intent classification, sentiment analysis and document annotation.",
  },

  {
    title: "Audio Annotation",
    icon: Mic,
    href: "/services/audio-annotation",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    alt: "Audio annotation and speech data services",
    description:
      "Speech transcription, speaker identification, audio classification and timestamped audio annotation for speech AI.",
  },

  {
    title: "Data Labeling",
    icon: Database,
    href: "/services/data-labeling",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "AI data labeling services for machine learning",
    description:
      "Scalable data labeling workflows designed for machine learning, computer vision, NLP and enterprise AI applications.",
  },

  {
    title: "LiDAR & Geospatial Annotation",
    icon: Map,
    href: "/services/lidar-annotation",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80",
    alt: "LiDAR and geospatial data annotation services",
    description:
      "Point cloud and geospatial annotation for autonomous vehicles, mapping, robotics, drones and location intelligence.",
  },
];

const industries = [
  {
    title: "Healthcare AI",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Sports Analytics",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Autonomous Vehicles",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Agriculture",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Retail AI",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Manufacturing",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Drone Mapping",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Robotics",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
  },
];

const faqs = [
  {
    q: "What is data annotation?",
    a: "Data annotation is the process of adding labels or metadata to images, videos, text, audio or other datasets so machine learning models can learn patterns and make accurate predictions.",
  },
  {
    q: "What types of data can Annotexia annotate?",
    a: "Annotexia provides image, video, text, audio, OCR, LiDAR and other custom data annotation and labeling services based on project requirements.",
  },
  {
    q: "Which annotation techniques do you support?",
    a: "Depending on the project, supported techniques include bounding boxes, polygons, semantic segmentation, instance segmentation, keypoints, object tracking, OCR, classification and custom labeling workflows.",
  },
  {
    q: "Which annotation formats can you deliver?",
    a: "We can work with formats such as COCO JSON, YOLO TXT, Pascal VOC XML, JSON, CSV and custom formats. Delivery formats can be aligned with your existing machine learning pipeline.",
  },
  {
    q: "How do you ensure annotation quality?",
    a: "Projects can use annotation guidelines, validation checks, reviewer workflows and quality assurance processes designed around the accuracy requirements of the dataset.",
  },
  {
    q: "Can you handle large annotation projects?",
    a: "Yes. Annotation workflows can be structured for both smaller projects and larger datasets, with scalable teams and quality processes based on project volume and timeline.",
  },
  {
    q: "Do you support confidential AI datasets?",
    a: "Yes. Project confidentiality, controlled access and NDA-based workflows can be incorporated when required by the client.",
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data Annotation Services",
    serviceType: [
      "Image Annotation",
      "Video Annotation",
      "Text Annotation",
      "Audio Annotation",
      "Data Labeling",
      "LiDAR Annotation",
    ],
    provider: {
      "@type": "Organization",
      name: "Annotexia",
      url: "https://www.annotexia.com",
    },
    areaServed: "Worldwide",
    description:
      "Professional data annotation and labeling services for AI and machine learning applications.",
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Annotexia Data Annotation Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: `https://www.annotexia.com${service.href}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* ================= STRUCTURED DATA ================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema),
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
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-8 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-300">
                AI Training Data & Annotation Services
              </span>

              <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-6xl">
                Data Annotation Services
                <span className="block text-cyan-400">
                  Built for AI & Machine Learning
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                Turn raw images, videos, text, audio and geospatial data into
                structured training datasets for computer vision, NLP,
                robotics, autonomous systems and other AI applications.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {[
                  "Project-specific annotation guidelines",
                  "Multi-level quality assurance",
                  "Scalable annotation workflows",
                  "Confidential & NDA-ready processes",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >
                    <CheckCircle2 className="shrink-0 text-green-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-wrap gap-5">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
                >
                  Request a Quote
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
                >
                  Explore Services
                </Link>
              </div>

              <p className="mt-5 text-sm text-slate-400">
                Tell us your data type, annotation requirements and expected
                volume. We can help define the right workflow.
              </p>
            </div>

            {/* HERO DASHBOARD */}

            <div>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      AI Dataset Workflow
                    </h2>

                    <p className="mt-1 text-slate-400">
                      Annotation & Quality Control
                    </p>
                  </div>

                  <div className="h-3 w-3 animate-pulse rounded-full bg-green-400" />
                </div>

                <div className="space-y-7">
                  {[
                    ["Image Annotation", "QA Review", "92%"],
                    ["Video Tracking", "Annotation", "78%"],
                    ["Text Annotation", "Validation", "86%"],
                    ["Audio Labeling", "Completed", "100%"],
                  ].map(([title, status, width]) => (
                    <div key={title}>
                      <div className="mb-2 flex justify-between text-white">
                        <span>{title}</span>
                        <span className="text-cyan-400">{status}</span>
                      </div>

                      <div className="h-2 rounded-full bg-slate-700">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div className="rounded-xl bg-slate-900 p-5 text-center">
                    <p className="text-2xl font-bold text-white">CV</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Computer Vision
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-900 p-5 text-center">
                    <p className="text-2xl font-bold text-white">NLP</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Language Data
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-900 p-5 text-center">
                    <p className="text-2xl font-bold text-white">QA</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Quality Control
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST / USE CASES ================= */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[5px] text-gray-500">
              AI Data Applications
            </p>

            <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
              Annotation for Modern AI Systems
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Build reliable training datasets for computer vision, language
              AI, speech systems, autonomous technologies and intelligent
              automation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Computer Vision",
              "NLP & LLMs",
              "Speech AI",
              "Robotics",
              "Autonomous Systems",
              "Geospatial AI",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border bg-white p-6 text-center font-semibold transition hover:-translate-y-1 hover:border-cyan-500 hover:shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
              Our Services
            </span>

            <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
              AI Data Annotation & Labeling Services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Choose the annotation workflow that matches your AI project.
              From individual datasets to ongoing enterprise labeling
              programs, we adapt the process to your requirements.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={700}
                      height={500}
                      className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                    <div className="absolute bottom-5 left-5">
                      <div className="rounded-xl bg-white/20 p-3 backdrop-blur-lg">
                        <Icon className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold">
                      {service.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-600">
                      {service.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-600 transition-all group-hover:gap-4">
                      View Service
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHAT WE ANNOTATE ================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-[5px] text-cyan-600">
                Annotation Capabilities
              </span>

              <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
                Annotation Techniques for Different AI Use Cases
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Different machine learning applications require different
                labeling methods. Our workflows can be customized according
                to your model requirements, dataset structure and output
                format.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  "Bounding Boxes",
                  "Polygon Annotation",
                  "Semantic Segmentation",
                  "Instance Segmentation",
                  "Keypoint Annotation",
                  "Object Tracking",
                  "OCR Annotation",
                  "Image Classification",
                  "Text Classification",
                  "Named Entity Recognition",
                  "Speech Transcription",
                  "LiDAR Labeling",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border bg-slate-50 p-4 text-center font-semibold transition hover:border-cyan-500 hover:bg-cyan-600 hover:text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80"
                alt="Machine learning data annotation and AI development workflow"
                width={900}
                height={700}
                className="rounded-3xl shadow-2xl"
              />

              <div className="absolute -bottom-8 -left-8 hidden rounded-2xl bg-white p-6 shadow-xl md:block">
                <Target className="text-cyan-600" size={32} />

                <p className="mt-3 font-bold">
                  Project-Specific Guidelines
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Built around your AI use case
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY ANNOTEXIA ================= */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-[5px] text-cyan-600">
                Why Annotexia
              </span>

              <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
                A Practical Data Partner for AI Teams
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                Annotation quality directly affects the quality of machine
                learning datasets. Our approach combines clear annotation
                guidelines, trained annotators, quality checks and structured
                delivery processes.
              </p>

              <div className="mt-10 space-y-7">
                {[
                  {
                    title: "Project-Specific Guidelines",
                    desc: "Annotation instructions are aligned with your classes, edge cases and expected output.",
                  },
                  {
                    title: "Quality Assurance",
                    desc: "Review and validation workflows help identify inconsistencies before dataset delivery.",
                  },
                  {
                    title: "Scalable Workflows",
                    desc: "Increase or decrease annotation capacity based on project volume and timelines.",
                  },
                  {
                    title: "Confidential Data Handling",
                    desc: "NDA and controlled-access workflows can be incorporated for sensitive projects.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-5"
                  >
                    <div className="rounded-xl bg-cyan-100 p-3">
                      <CheckCircle2 className="text-cyan-600" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-7">
              <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white transition hover:scale-[1.02]">
                <Brain size={40} />

                <h3 className="mt-6 text-2xl font-bold">
                  AI-Focused Workflows
                </h3>

                <p className="mt-4 leading-8 text-cyan-50">
                  Annotation processes designed around computer vision, NLP,
                  speech, OCR, robotics and autonomous AI applications.
                </p>
              </div>

              <div className="rounded-3xl bg-slate-900 p-8 text-white transition hover:scale-[1.02]">
                <ShieldCheck size={40} />

                <h3 className="mt-6 text-2xl font-bold">
                  Security & Confidentiality
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  Protect project information through controlled workflows,
                  confidentiality requirements and NDA-based engagement when
                  needed.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-7">
                <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
                  <Clock3 className="mx-auto text-cyan-600" />

                  <h4 className="mt-4 text-2xl font-bold">
                    Flexible
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Project Support
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
                  <Users className="mx-auto text-cyan-600" />

                  <h4 className="mt-4 text-2xl font-bold">
                    Scalable
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Annotation Teams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW ================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <span className="font-semibold uppercase tracking-[5px] text-cyan-600">
              Our Workflow
            </span>

            <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
              From Raw Data to AI-Ready Dataset
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              A structured annotation workflow helps maintain consistency,
              quality and predictable delivery throughout your project.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Understand Requirements",
                desc: "Review your data, classes, annotation guidelines, edge cases and expected outputs.",
              },
              {
                step: "02",
                title: "Prepare Dataset",
                desc: "Organize images, videos, text, audio or other source data for annotation.",
              },
              {
                step: "03",
                title: "Annotate & Review",
                desc: "Annotators label the data while quality checks and reviews identify inconsistencies.",
              },
              {
                step: "04",
                title: "Validate & Deliver",
                desc: "Final datasets are validated and delivered in the required format for your AI pipeline.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl font-black text-cyan-300">
                  {item.step}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
              Industries
            </span>

            <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
              Data Annotation Across AI Industries
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Support AI applications across healthcare, agriculture,
              autonomous systems, sports analytics, robotics, manufacturing,
              retail and geospatial intelligence.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} data annotation services`}
                    width={700}
                    height={500}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <Link
                    href="/industries"
                    className="mt-4 inline-flex items-center gap-2 font-semibold text-cyan-600"
                  >
                    Explore Industry
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORMATS ================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
                Dataset Delivery
              </span>

              <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
                Annotation Formats That Fit Your Workflow
              </h2>

              <p className="mt-7 text-lg leading-8 text-gray-600">
                We can structure annotation output according to your model
                training workflow, annotation platform or downstream
                application.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-5">
                {[
                  "COCO JSON",
                  "YOLO TXT",
                  "Pascal VOC XML",
                  "JSON",
                  "CSV",
                  "Label Studio",
                  "CVAT",
                  "Custom Format",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border bg-slate-50 p-6 text-center font-bold transition hover:border-cyan-500 hover:bg-cyan-600 hover:text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-10 text-white">
              <ScanLine className="text-cyan-400" size={48} />

              <h3 className="mt-8 text-3xl font-bold">
                Need a Custom Annotation Format?
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                If your application requires a specific JSON structure, XML
                schema, CSV layout or platform-specific output, share your
                requirements with our team.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold transition hover:bg-cyan-600"
              >
                Discuss Your Requirements
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="font-semibold uppercase tracking-[5px] text-cyan-100">
                Start Your Project
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight lg:text-5xl">
                Have an AI Dataset That Needs Annotation?
              </h2>

              <p className="mt-7 text-lg leading-8 text-cyan-50">
                Share your data type, annotation requirements, expected volume
                and timeline. We can help you determine the right annotation
                workflow for your project.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">
                <Link
                  href="/contact"
                  className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:bg-slate-100"
                >
                  Request a Quote
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                ["Image", "Annotation"],
                ["Video", "Tracking"],
                ["Text", "NLP Data"],
                ["Audio", "Speech Data"],
              ].map(([title, subtitle]) => (
                <div
                  key={title}
                  className="rounded-3xl bg-white/10 p-8 backdrop-blur-lg"
                >
                  <h3 className="text-3xl font-bold">
                    {title}
                  </h3>

                  <p className="mt-3 text-cyan-100">
                    {subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY DATA ANNOTATION ================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-semibold uppercase tracking-[5px] text-cyan-600">
            AI & Machine Learning
          </span>

          <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
            Why High-Quality Data Annotation Matters
          </h2>

          <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">
            <p>
              Machine learning models learn patterns from examples. When
              training data contains inconsistent, incomplete or incorrect
              labels, those issues can affect model performance and downstream
              predictions.
            </p>

            <p>
              Professional data annotation helps organizations create
              structured datasets for computer vision, natural language
              processing, speech recognition, recommendation systems,
              robotics, autonomous systems and other AI applications.
            </p>

            <p>
              A well-defined annotation workflow combines clear labeling
              guidelines, trained annotators, quality assurance and consistent
              dataset delivery. This makes the resulting data easier to use
              throughout the model development lifecycle.
            </p>

            <p>
              Annotexia works with organizations that need image annotation,
              video annotation, text annotation, audio labeling, OCR,
              geospatial annotation and custom AI training datasets.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <span className="font-semibold uppercase tracking-[4px] text-cyan-600">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
              Common questions about our data annotation and labeling
              services.
            </p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border bg-white p-7 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">
                  {faq.q}

                  <span className="text-2xl transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 leading-8 text-gray-600">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INTERNAL LINKS ================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold">
              Explore Annotexia
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
              Explore our annotation services, industry solutions and AI
              resources.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Link
              href="/industries"
              className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold">
                Industries We Serve
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Explore annotation applications across healthcare,
                agriculture, robotics, autonomous systems, sports and more.
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-cyan-600">
                Explore Industries
                <ArrowRight size={18} />
              </div>
            </Link>

            <Link
              href="/blog"
              className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold">
                AI & Data Resources
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Learn about data annotation, machine learning datasets,
                computer vision and AI development.
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-cyan-600">
                Read Our Blog
                <ArrowRight size={18} />
              </div>
            </Link>

            <Link
              href="/contact"
              className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold">
                Talk to Our Team
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Have a dataset to annotate? Tell us about your project and
                receive a tailored quotation.
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-cyan-600">
                Contact Annotexia
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}