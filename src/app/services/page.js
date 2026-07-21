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
} from "lucide-react";

export const metadata = {
  title: "Professional Data Annotation Services | Image, Video, Text & Audio Annotation | Annotexia",

  description:
    "Enterprise data annotation services including image annotation, video annotation, text annotation, audio annotation, data labeling, LiDAR annotation, OCR annotation and AI training datasets for machine learning.",

  keywords: [
    "Data Annotation",
    "Image Annotation",
    "Video Annotation",
    "Text Annotation",
    "Audio Annotation",
    "Data Labeling",
    "AI Training Data",
    "Machine Learning Datasets",
    "Computer Vision Annotation",
    "OCR Annotation",
    "Polygon Annotation",
    "Bounding Box Annotation",
    "Semantic Segmentation",
    "Sports Annotation",
    "Healthcare Annotation",
    "Agriculture Annotation",
    "Autonomous Vehicle Annotation",
    "Annotation Company",
  ],

  alternates: {
    canonical: "https://www.annotexia.com/services",
  },

  openGraph: {
    title: "Professional Data Annotation Services | Annotexia",
    description:
      "High-quality AI training data annotation services for computer vision, NLP and machine learning projects.",
    url: "https://www.annotexia.com/services",
    siteName: "Annotexia",
    images: [
      {
        url: "/images/services-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Professional AI Data Annotation Services by Annotexia",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Professional Data Annotation Services | Annotexia",
    description:
      "Enterprise AI annotation services for image, video, text and audio datasets.",
    images: ["/images/services-hero.jpg"],
  },
};

const services = [
  {
    title: "Image Annotation",
    icon: ImageIcon,
    href: "/services/image-annotation",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",

    alt: "Professional image annotation services for AI and computer vision",

    description:
      "Bounding boxes, polygons, semantic segmentation, keypoints, OCR and object detection datasets.",
  },

  {
    title: "Video Annotation",

    icon: Video,

    href: "/services/video-annotation",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",

    alt: "Video annotation and object tracking services",

    description:
      "Frame-by-frame annotation, object tracking, action recognition and sports analytics.",
  },

  {
    title: "Text Annotation",

    icon: FileText,

    href: "/services/text-annotation",

    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",

    alt: "Text annotation services for natural language processing",

    description:
      "NER, intent classification, sentiment analysis and document annotation.",
  },

  {
    title: "Audio Annotation",

    icon: Mic,

    href: "/services/audio-annotation",

    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",

    alt: "Audio annotation and speech recognition datasets",

    description:
      "Speech transcription, speaker identification and audio classification.",
  },

  {
    title: "Data Labeling",

    icon: Database,

    href: "/services/data-labeling",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",

    alt: "Enterprise data labeling services for machine learning",

    description:
      "Scalable AI data labeling solutions for enterprise machine learning projects.",
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Data Annotation Services",
    provider: {
      "@type": "Organization",
      name: "Annotexia",
      url: "https://www.annotexia.com",
      logo: "https://www.annotexia.com/logo.png",
    },
    areaServed: "Worldwide",
    description:
      "Professional image annotation, video annotation, text annotation, audio annotation and AI data labeling services for machine learning.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
    },
  };
  return (

    <main className="overflow-hidden bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">

        <div className="absolute inset-0">

          <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-400/30 px-5 py-2 text-cyan-300 text-sm font-semibold mb-8">

                Enterprise AI Training Data Services

              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white">

                Professional

                <span className="block text-cyan-400">

                  Data Annotation Services

                </span>

                for AI & Machine Learning

              </h1>

              <p className="mt-8 text-slate-300 text-lg leading-8">

                Annotexia helps organizations build accurate AI models through
                high-quality image annotation, video annotation, text annotation,
                audio annotation, and enterprise data labeling services.

              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-10">

                {[
                  "99% Annotation Accuracy",
                  "Dedicated QA Team",
                  "Scalable Workforce",
                  "NDA & Secure Workflow",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-white"
                  >

                    <CheckCircle2 className="text-green-400" />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

              <div className="flex flex-wrap gap-5 mt-12">

                <Link
                  href="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2"
                >

                  Start Your Project

                  <ArrowRight size={18} />

                </Link>

                <Link
                  href="/industries"
                  className="border border-white px-8 py-4 rounded-xl text-white hover:bg-white hover:text-black transition"
                >

                  Explore Industries

                </Link>

              </div>

            </div>
            <div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-8">

                <div className="flex justify-between items-center mb-10">

                  <div>

                    <h3 className="text-white text-2xl font-bold">

                      AI Annotation Dashboard

                    </h3>

                    <p className="text-slate-400">

                      Live Dataset Processing

                    </p>

                  </div>

                  <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

                </div>

                <div className="space-y-7">

                  {[
                    ["Image Annotation", "Completed", "100%"],
                    ["Video Tracking", "Processing", "85%"],
                    ["Text Annotation", "Review", "92%"],
                    ["Audio Labeling", "Completed", "100%"],
                  ].map(([title, status, width]) => (

                    <div key={title}>

                      <div className="flex justify-between mb-2 text-white">

                        <span>{title}</span>

                        <span className="text-cyan-400">

                          {status}

                        </span>

                      </div>

                      <div className="h-2 rounded-full bg-slate-700">

                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                          style={{ width }}
                        ></div>

                      </div>

                    </div>

                  ))}

                </div>

                <div className="grid grid-cols-3 gap-5 mt-10">

                  <div className="rounded-xl bg-slate-900 p-5 text-center">

                    <p className="text-3xl text-white font-bold">

                      99%

                    </p>

                    <p className="text-sm text-slate-400">

                      Accuracy

                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-900 p-5 text-center">

                    <p className="text-3xl text-white font-bold">

                      5M+

                    </p>

                    <p className="text-sm text-slate-400">

                      Objects

                    </p>

                  </div>

                  <div className="rounded-xl bg-slate-900 p-5 text-center">

                    <p className="text-3xl text-white font-bold">

                      24/7

                    </p>

                    <p className="text-sm text-slate-400">

                      Support

                    </p>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

      </section>

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[5px] text-center text-gray-500 font-semibold">

            Trusted AI Solutions

          </p>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8 mt-12">

            {[
              "Computer Vision",
              "Healthcare AI",
              "Sports Analytics",
              "Robotics",
              "Autonomous Driving",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border bg-white p-8 text-center font-semibold hover:border-cyan-500 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= SERVICES ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-cyan-600 font-semibold uppercase tracking-[4px]">

              Our Services

            </span>

            <h2 className="text-5xl font-bold mt-5">

              Complete AI Data Annotation Solutions

            </h2>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">

              From computer vision to NLP, Annotexia provides enterprise-grade
              annotation services designed to improve the accuracy of your AI
              models while reducing development time.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">

            {services.map((service) => {

              const Icon = service.icon;

              return (

                <Link
                  key={service.title}
                  href={service.href}
                  className="group rounded-3xl overflow-hidden bg-white shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
                >

                  <div className="relative overflow-hidden">

                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={700}
                      height={500}
                      className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    <div className="absolute bottom-5 left-5">

                      <div className="bg-white/20 backdrop-blur-lg p-3 rounded-xl">

                        <Icon className="text-white" />

                      </div>

                    </div>

                  </div>

                  <div className="p-8">

                    <h3 className="text-2xl font-bold mb-4">

                      {service.title}

                    </h3>

                    <p className="text-gray-600 leading-8">

                      {service.description}

                    </p>

                    <div className="mt-8 flex items-center gap-2 font-semibold text-cyan-600 group-hover:gap-4 transition-all">

                      Learn More

                      <ArrowRight size={18} />

                    </div>

                  </div>

                </Link>

              )

            })}

          </div>

        </div>

      </section>
      {/* ================= WHY CHOOSE ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="text-cyan-600 uppercase tracking-[5px] font-semibold">

                Why Choose Us

              </span>

              <h2 className="text-5xl font-bold mt-5">

                Built for Enterprise AI Teams

              </h2>

              <p className="mt-8 text-gray-600 leading-8 text-lg">

                Every successful AI model begins with high-quality data.
                Our dedicated annotation specialists follow strict quality
                guidelines to ensure every dataset is accurate,
                consistent, and production-ready.

              </p>

              <div className="mt-10 space-y-6">

                {[
                  {
                    title: "99% Quality Assurance",
                    desc: "Multi-level quality checks and experienced reviewers."
                  },

                  {
                    title: "Scalable Teams",
                    desc: "From hundreds to millions of annotations."
                  },

                  {
                    title: "Fast Turnaround",
                    desc: "Optimized workflows for faster delivery."
                  },

                  {
                    title: "Enterprise Security",
                    desc: "NDA support and secure infrastructure."
                  },

                ].map((item) => (

                  <div
                    key={item.title}
                    className="flex gap-5 items-start"
                  >

                    <div className="bg-cyan-100 p-3 rounded-xl">

                      <CheckCircle2 className="text-cyan-600" />

                    </div>

                    <div>

                      <h3 className="font-bold text-xl">

                        {item.title}

                      </h3>

                      <p className="text-gray-600 mt-2">

                        {item.desc}

                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>
            <div className="grid gap-8">

              <div className="group rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 hover:scale-105 transition duration-500">

                <Brain size={40} />

                <h3 className="text-2xl font-bold mt-6">

                  AI Focused

                </h3>

                <p className="mt-4 leading-8">

                  Purpose-built datasets for Computer Vision,
                  LLMs, NLP, OCR and Autonomous AI.

                </p>

              </div>

              <div className="group rounded-3xl bg-slate-900 text-white p-8 hover:scale-105 transition duration-500">

                <ShieldCheck size={40} />

                <h3 className="text-2xl font-bold mt-6">

                  Enterprise Security

                </h3>

                <p className="mt-4 leading-8">

                  Secure annotation workflows with NDA,
                  access control and confidential data handling.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-8">

                <div className="rounded-3xl bg-slate-50 p-8 text-center hover:shadow-xl transition">

                  <Clock3 className="mx-auto text-cyan-600" />

                  <h4 className="text-3xl font-bold mt-4">

                    24/7

                  </h4>

                  <p className="text-gray-600 mt-2">

                    Support

                  </p>

                </div>

                <div className="rounded-3xl bg-slate-50 p-8 text-center hover:shadow-xl transition">

                  <Users className="mx-auto text-cyan-600" />

                  <h4 className="text-3xl font-bold mt-4">

                    50+

                  </h4>

                  <p className="text-gray-600 mt-2">

                    Experts

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= STATS ================= */}

      <section className="py-24 bg-slate-950">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

            {[
              ["5M+", "Objects Annotated"],
              ["99%", "Accuracy"],
              ["8+", "Industries"],
              ["24/7", "Support"],
            ].map(([number, title]) => (

              <div
                key={title}
                className="text-center"
              >

                <h2 className="text-6xl font-bold text-cyan-400">

                  {number}

                </h2>

                <p className="text-gray-300 mt-4 text-lg">

                  {title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WORKFLOW ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[5px] text-cyan-600 font-semibold">

              Workflow

            </span>

            <h2 className="text-5xl font-bold mt-5">

              Our AI Data Annotation Workflow

            </h2>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">

              Every successful AI project starts with a structured annotation workflow.
              Our proven process ensures accuracy, scalability, and consistent datasets.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "Understand your AI project, annotation guidelines and expected output."
              },

              {
                step: "02",
                title: "Dataset Preparation",
                desc: "Organize raw images, videos, text or audio before annotation begins."
              },

              {
                step: "03",
                title: "Annotation & QA",
                desc: "Expert annotators create datasets followed by multiple quality reviews."
              },

              {
                step: "04",
                title: "Delivery",
                desc: "Receive AI-ready datasets in COCO, YOLO, Pascal VOC, JSON, CSV or custom formats."
              },

            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border bg-white p-8 shadow hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >

                <div className="text-6xl font-black text-cyan-300">

                  {item.step}

                </div>

                <h3 className="text-2xl font-bold mt-6">

                  {item.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-8">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= TECHNIQUES ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image

                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"

                alt="AI image annotation techniques including bounding box segmentation and polygon annotation"

                width={900}

                height={700}

                className="rounded-3xl shadow-2xl"

              />

            </div>

            <div>

              <span className="uppercase tracking-[4px] text-cyan-600 font-semibold">

                Annotation Techniques

              </span>

              <h2 className="text-5xl font-bold mt-5">

                Everything Your AI Model Needs

              </h2>

              <p className="mt-8 text-gray-600 leading-8 text-lg">

                Different AI applications require different annotation methods.
                Our experts deliver highly accurate annotations for every computer vision
                and machine learning project.

              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">

                {[
                  "Bounding Box",
                  "Polygon",
                  "Semantic Segmentation",
                  "Instance Segmentation",
                  "Keypoint Annotation",
                  "Object Tracking",
                  "OCR Annotation",
                  "LiDAR Labeling",
                ].map((item) => (
                  <div

                    key={item}

                    className="rounded-xl bg-white border p-5 text-center font-semibold hover:bg-cyan-600 hover:text-white transition"

                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= INDUSTRIES ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-cyan-600 font-semibold">

              Industries

            </span>

            <h2 className="text-5xl font-bold mt-5">

              Trusted Across Multiple Industries

            </h2>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">

              Our AI training datasets power innovative solutions across healthcare,
              autonomous vehicles, sports analytics, agriculture, robotics and many more.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                title: "Healthcare AI",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
              },
              {
                title: "Sports Analytics",
                image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
              },
              {
                title: "Autonomous Vehicles",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
              },
              {
                title: "Agriculture",
                image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
              },
              {
                title: "Retail AI",
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
              },
              {
                title: "Manufacturing",
                image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=900&q=80"
              },
              {
                title: "Drone Mapping",
                image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=900&q=80"
              },
              {
                title: "Robotics",
                image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80"
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition duration-500"
              >

                <div className="overflow-hidden">

                  <Image

                    src={item.image}

                    alt={`${item.title} AI data annotation services`}

                    width={700}

                    height={500}

                    className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"

                  />

                </div>

                <div className="p-6 bg-white">

                  <h3 className="text-xl font-bold">

                    {item.title}

                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= PROCESS ================= */}

      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <h2 className="text-5xl font-bold">

                Why Enterprise Companies Trust Annotexia

              </h2>

              <p className="mt-8 text-lg leading-8 text-cyan-100">

                From startups to enterprise AI companies, we help teams accelerate
                machine learning development with scalable, secure and high-quality
                annotation workflows.

              </p>

            </div>

            <div className="grid gap-6">

              {[
                "Dedicated Annotation Team",
                "Custom Annotation Guidelines",
                "Multi-Level Quality Assurance",
                "Fast Turnaround Time",
                "Scalable Workforce",
                "Enterprise Security & NDA",
              ].map((item) => (

                <div
                  key={item}
                  className="bg-white/10 backdrop-blur-lg rounded-xl px-6 py-5 flex items-center gap-4"
                >

                  <CheckCircle2 className="text-green-300" />

                  <span className="text-lg">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY DATA ANNOTATION ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-[5px] text-cyan-600 font-semibold">

                Machine Learning

              </span>

              <h2 className="text-5xl font-bold mt-5">

                Why Data Annotation Matters

              </h2>

              <p className="mt-8 text-lg text-gray-600 leading-9">

                Artificial Intelligence learns from examples, not assumptions. Every
                successful machine learning model depends on accurately labeled training
                data. Without high-quality annotations, even the most advanced AI models
                can produce inaccurate predictions.

              </p>

              <p className="mt-6 text-lg text-gray-600 leading-9">

                Professional annotation improves object detection, image classification,
                natural language processing, speech recognition, recommendation systems,
                robotics, and autonomous driving models.

              </p>

              <p className="mt-6 text-lg text-gray-600 leading-9">

                At Annotexia, our annotation specialists transform raw data into
                production-ready datasets that help organizations build more reliable,
                accurate, and scalable AI solutions.

              </p>

            </div>

            <div>

              <Image

                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80"

                alt="Machine learning data annotation workflow"

                width={900}

                height={700}

                className="rounded-3xl shadow-2xl"

              />

            </div>

          </div>

        </div>

      </section>
      {/* ================= DATASETS ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">

              Supported Annotation Formats

            </h2>

            <p className="text-gray-600 mt-6 max-w-3xl mx-auto">

              We deliver AI-ready datasets compatible with leading machine learning
              frameworks and annotation platforms.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              "COCO JSON",
              "YOLO TXT",
              "Pascal VOC XML",
              "CSV",
              "JSON",
              "Label Studio",
              "CVAT",
              "Custom Format",
            ].map((item) => (

              <div

                key={item}

                className="rounded-2xl border bg-slate-50 p-8 text-center font-bold hover:bg-cyan-600 hover:text-white transition duration-300"

              >

                {item}

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= FAQ ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-5xl font-bold">

              Frequently Asked Questions

            </h2>

            <p className="text-gray-600 mt-5">

              Everything you need to know about AI data annotation services.

            </p>

          </div>

          <div className="space-y-6">

            {[
              {
                q: "What is data annotation?",
                a: "Data annotation is the process of labeling images, videos, text, or audio so machine learning models can recognize patterns and make accurate predictions."
              },

              {
                q: "Which industries use data annotation?",
                a: "Healthcare, agriculture, retail, robotics, autonomous vehicles, sports analytics, manufacturing, geospatial mapping, and many other AI-driven industries."
              },

              {
                q: "Which annotation formats do you support?",
                a: "COCO, YOLO, Pascal VOC, JSON, CSV, Label Studio, CVAT and custom formats."
              },

              {
                q: "How do you ensure annotation quality?",
                a: "Every dataset goes through multi-level quality assurance including peer review, QA specialists, validation rules, and project audits."

              },

              {
                q: "Can Annotexia handle enterprise projects?",

                a: "Yes. We provide scalable annotation teams capable of processing thousands to millions of annotations while maintaining consistent quality."

              },

              {
                q: "Do you sign NDAs?",

                a: "Yes. Client confidentiality and data security are part of every project."

              },

            ].map((faq) => (

              <details

                key={faq.q}

                className="group rounded-2xl bg-white border p-8 shadow-sm"

              >

                <summary className="cursor-pointer text-xl font-bold list-none flex justify-between">

                  {faq.q}

                  <span className="group-open:rotate-45 transition">

                    +

                  </span>

                </summary>

                <p className="mt-6 text-gray-600 leading-8">

                  {faq.a}

                </p>

              </details>

            ))}

          </div>

        </div>

      </section>
      {/* ================= CTA ================= */}

      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">

                Let's Build AI Together

              </span>

              <h2 className="text-5xl font-bold mt-6 leading-tight">

                Need High-Quality AI Training Data?

              </h2>

              <p className="mt-8 text-lg leading-8 text-slate-300">

                Whether you're building computer vision models, autonomous systems,
                LLMs, or healthcare AI, Annotexia delivers enterprise-grade data
                annotation services tailored to your project.

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link

                  href="/contact"

                  className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"

                >

                  Request a Quote

                </Link>

                <Link

                  href="/industries"

                  className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"

                >

                  Explore Industries

                </Link>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-3xl bg-white/10 backdrop-blur-lg p-8">

                <h3 className="text-4xl font-bold text-cyan-400">

                  99%

                </h3>

                <p className="mt-3">

                  Annotation Accuracy

                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-lg p-8">

                <h3 className="text-4xl font-bold text-cyan-400">

                  24/7

                </h3>

                <p className="mt-3">

                  Project Support

                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-lg p-8">

                <h3 className="text-4xl font-bold text-cyan-400">

                  5M+

                </h3>

                <p className="mt-3">

                  Objects Labeled

                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-lg p-8">

                <h3 className="text-4xl font-bold text-cyan-400">

                  8+

                </h3>

                <p className="mt-3">

                  Industries Served

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= SEO CONTENT ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">

            Professional Data Annotation Services for AI & Machine Learning

          </h2>

          <div className="space-y-8 text-lg text-gray-700 leading-9">

            <p>

              Artificial intelligence is only as powerful as the data used to train it.
              Organizations building computer vision systems, autonomous vehicles,
              large language models, healthcare AI, retail automation, sports analytics,
              and robotics require accurate, consistent, and scalable annotation
              services to develop reliable machine learning models.

            </p>

            <p>

              At Annotexia, we specialize in creating high-quality AI training datasets
              through image annotation, video annotation, text annotation, audio
              annotation, and custom data labeling services. Our experienced annotation
              teams follow detailed project guidelines and multi-level quality assurance
              processes to ensure every annotation meets enterprise standards.

            </p>

            <p>

              Whether your project involves object detection, semantic segmentation,
              instance segmentation, OCR, keypoint annotation, speech transcription,
              named entity recognition, sentiment analysis, or LiDAR labeling,
              Annotexia provides scalable annotation solutions that accelerate AI
              development while maintaining exceptional accuracy.

            </p>

            <p>

              Our services support industries including healthcare, agriculture,
              manufacturing, retail, autonomous driving, robotics, sports analytics,
              drone mapping, logistics, satellite imagery, and enterprise AI.
              From startups to global enterprises, we help organizations build
              better machine learning models with trusted AI training data.

            </p>

          </div>

        </div>

      </section>
      {/* ================= INTERNAL LINKS ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">

            Explore More Annotation Solutions

          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <Link
              href="/industries"
              className="rounded-3xl bg-white shadow p-8 hover:shadow-xl transition"
            >

              <h3 className="text-2xl font-bold">

                Industries We Serve

              </h3>

              <p className="mt-4 text-gray-600">

                Discover AI solutions across healthcare,
                robotics, agriculture and autonomous vehicles.

              </p>

            </Link>

            <Link
              href="/blog"
              className="rounded-3xl bg-white shadow p-8 hover:shadow-xl transition"
            >

              <h3 className="text-2xl font-bold">

                AI Resources

              </h3>

              <p className="mt-4 text-gray-600">

                Learn about data annotation,
                machine learning and AI best practices.

              </p>

            </Link>

            <Link
              href="/contact"
              className="rounded-3xl bg-white shadow p-8 hover:shadow-xl transition"
            >

              <h3 className="text-2xl font-bold">

                Talk to Our Experts

              </h3>

              <p className="mt-4 text-gray-600">

                Request a custom quotation for your
                next AI annotation project.

              </p>

            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}
