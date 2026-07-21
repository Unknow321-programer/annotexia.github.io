import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Brain,
  Cpu,
  ScanSearch,
} from "lucide-react";

export const metadata = {
  title:
    "Computer Vision Annotation Services | Image Annotation for AI & Machine Learning | Annotexia",
  description:
    "Professional Computer Vision Annotation Services including Image Annotation, Bounding Box, Polygon Annotation, Semantic Segmentation, OCR, Keypoint Labeling, Object Detection, Image Classification, and AI Training Data for Machine Learning.",
  keywords: [
    "Computer Vision Annotation Services",
    "Image Annotation Services",
    "Image Labeling Company",
    "AI Training Data",
    "Bounding Box Annotation",
    "Semantic Segmentation",
    "Polygon Annotation",
    "Image Classification",
    "Object Detection Dataset",
    "Computer Vision Dataset",
    "Machine Learning Annotation",
    "AI Dataset Annotation",
  ],
};

export default function ComputerVisionPage() {
  return (
    <main className="min-h-screen">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-24">

        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold mb-8">

                <Eye className="w-5 h-5" />

                Enterprise Computer Vision Annotation

              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">

                Computer Vision
                <span className="block text-cyan-400">

                  Annotation Services

                </span>

              </h1>

              <p className="text-slate-300 text-xl leading-9 mt-10">

                Build reliable Computer Vision AI with accurately labeled
                training datasets. Annotexia provides enterprise-grade
                image annotation, semantic segmentation, object detection,
                OCR labeling, polygon annotation, keypoint annotation,
                and custom AI data labeling services that help machine
                learning models achieve higher accuracy and faster deployment.

              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-white font-semibold transition"
                >
                  Request Free Sample

                  <ArrowRight className="w-5 h-5" />

                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl text-white transition"
                >
                  Explore Services

                </Link>

              </div>

              <div className="grid grid-cols-2 gap-6 mt-14">

                {[
                  "99% Annotation Accuracy",
                  "Enterprise Security",
                  "Fast Delivery",
                  "Scalable Workforce",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2 className="text-cyan-400" />

                    <span className="text-slate-300">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-500 blur-[120px] opacity-30" />

              <div className="absolute -bottom-10 right-0 h-40 w-40 rounded-full bg-blue-500 blur-[120px] opacity-30" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">

                <Image
                  src="/images/industries/computervision/hero-computer-vision.webp"
                  alt="Computer Vision Annotation Services"
                  width={900}
                  height={850}
                  className="w-full h-auto object-cover"
                  priority
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* WHY COMPUTER VISION */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <Image
                src="/images/industries/computervision/ai-vision.webp"
                alt="Computer Vision AI Training"
                width={900}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Why It Matters

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Every Intelligent Vision System
                Starts With High-Quality Data

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Modern Artificial Intelligence relies on computer vision
                to understand images, videos, documents, medical scans,
                industrial equipment, retail shelves, sports broadcasts,
                agricultural fields, and autonomous vehicles.

                However, AI models can only perform as well as the data
                they learn from.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Poor annotations lead to inaccurate predictions,
                inconsistent object detection, reduced segmentation
                quality, and lower production performance.

                That's why organizations across the world invest in
                professional annotation partners capable of producing
                highly consistent, scalable, and enterprise-quality
                training datasets.

              </p>

              <p className="text-lg text-gray-600 leading-9">

                At Annotexia, we transform raw visual data into structured,
                AI-ready datasets that improve model performance,
                reduce training iterations, and accelerate deployment.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CORE EXPERTISE */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Core Expertise

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Powering Modern Computer Vision AI

            </h2>

            <p className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto leading-9">

              Our annotation specialists work across diverse industries,
              helping AI teams build reliable Computer Vision solutions
              with accurate, scalable, and production-ready datasets.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                icon: Eye,
                title: "Image Recognition",
              },
              {
                icon: Brain,
                title: "Deep Learning",
              },
              {
                icon: Cpu,
                title: "Machine Learning",
              },
              {
                icon: ScanSearch,
                title: "AI Perception",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="bg-white rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 transition"
                >

                  <Icon className="w-12 h-12 text-cyan-600 mx-auto mb-6" />

                  <h3 className="text-2xl font-bold">

                    {item.title}

                  </h3>

                </div>

              );

            })}

          </div>

        </div>

      </section>
            {/* ===================================================== */}
      {/* COMPUTER VISION SERVICES */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Our Services

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Computer Vision Annotation Services

            </h2>

            <p className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto leading-9">

              From simple image classification to pixel-perfect segmentation,
              Annotexia provides comprehensive annotation services that support
              every stage of computer vision AI development.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {[
              {
                title: "Bounding Box Annotation",
                image: "/images/industries/computervision/object-detection.webp",
                desc: "Accurate object localization for vehicles, humans, products, animals, industrial equipment, and retail products.",
              },
              {
                title: "Polygon Annotation",
                image: "/images/industries/computervision/polygon.webp",
                desc: "High-precision polygon labeling for irregular object boundaries requiring detailed segmentation.",
              },
              {
                title: "Semantic Segmentation",
                image: "/images/industries/computervision/segmentation.webp",
                desc: "Pixel-level annotation for scene understanding, autonomous systems, medical AI, and robotics.",
              },
              {
                title: "Instance Segmentation",
                image: "/images/industries/computervision/instance-segmentation.webp",
                desc: "Identify and separate multiple objects individually, even within the same category.",
              },
              {
                title: "Keypoint Annotation",
                image: "/images/industries/computervision/pose-estimation.webp",
                desc: "Human pose estimation, body joints, facial landmarks, and gesture recognition datasets.",
              },
              {
                title: "Image Classification",
                image: "/images/industries/computervision/classification.webp",
                desc: "Categorize images into predefined classes for supervised machine learning models.",
              },
              {
                title: "OCR Annotation",
                image: "/images/industries/computervision/ocr-document.webp",
                desc: "Document labeling, handwriting recognition, invoices, receipts, IDs, and forms.",
              },
              {
                title: "Video Annotation",
                image: "/images/industries/computervision/video-analysis.webp",
                desc: "Frame-by-frame object tracking, activity recognition, and motion analysis datasets.",
              },
              {
                title: "Object Tracking",
                image: "/images/industries/computervision/tracking.webp",
                desc: "Track moving objects across video sequences for surveillance, sports, and autonomous systems.",
              },
              {
                title: "Facial Landmark Annotation",
                image: "/images/industries/computervision/face-landmark.webp",
                desc: "Precise facial keypoint annotation for emotion detection, biometrics, and AR applications.",
              },
              {
                title: "Medical Image Annotation",
                image: "/images/industries/computervision/medical-imaging.webp",
                desc: "Medical imaging datasets including CT, MRI, X-ray, ultrasound, and pathology slides.",
              },
              {
                title: "Satellite & Aerial Annotation",
                image: "/images/industries/computervision/satellite.webp",
                desc: "Satellite imagery labeling for agriculture, mapping, urban planning, and environmental monitoring.",
              },
            ].map((service) => (

              <div
                key={service.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >

                <div className="overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={450}
                    className="group-hover:scale-110 transition duration-500 w-full h-56 object-cover"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold mb-4">

                    {service.title}

                  </h3>

                  <p className="text-gray-600 leading-8">

                    {service.desc}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* AI APPLICATIONS */}
      {/* ===================================================== */}

      <section className="bg-slate-950 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-400 font-semibold">

              AI Applications

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Where Computer Vision Powers Innovation

            </h2>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {[
              "Autonomous Vehicles",
              "Medical Imaging",
              "Retail Analytics",
              "Sports Analytics",
              "Agriculture AI",
              "Manufacturing Inspection",
              "Robotics",
              "Smart Cities",
              "Document AI & OCR",
              "Security & Surveillance",
              "Drone Analytics",
              "Industrial Automation",
            ].map((item) => (

              <div
                key={item}
                className="border border-slate-700 rounded-2xl p-8 hover:bg-cyan-600 hover:border-cyan-600 transition"
              >

                <CheckCircle2 className="mb-5 text-cyan-400" />

                <h3 className="text-xl font-semibold">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* DATASET TYPES */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <Image
                src="/images/industries/computervision/dataset-types.avif"
                alt="Computer Vision Dataset Types"
                width={900}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Dataset Expertise

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                We Annotate Every
                Type of Visual Data

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                Our experienced annotation specialists work with diverse
                datasets collected from cameras, smartphones, drones,
                satellites, industrial sensors, medical devices, and
                surveillance systems.

              </p>

              <div className="grid grid-cols-2 gap-6">

                {[
                  "Images",
                  "Videos",
                  "Medical Scans",
                  "Satellite Images",
                  "Drone Imagery",
                  "Retail Shelf Images",
                  "Industrial Cameras",
                  "Smart City Footage",
                  "Sports Broadcasts",
                  "OCR Documents",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2 className="text-cyan-600" />

                    <span className="text-lg">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ===================================================== */}
      {/* WORKFLOW */}
      {/* ===================================================== */}

      <section className="bg-slate-950 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-400 font-semibold">

              Enterprise Workflow

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Our Computer Vision Annotation Process

            </h2>

            <p className="text-slate-300 mt-8 max-w-3xl mx-auto text-lg leading-9">

              Every computer vision dataset follows a structured annotation
              workflow designed to maximize accuracy, consistency, scalability,
              and delivery speed while meeting enterprise AI standards.

            </p>

          </div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8">

            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "Understand annotation guidelines, AI objectives, dataset size, and delivery format.",
              },
              {
                step: "02",
                title: "Pilot Dataset",
                desc: "Annotate a small sample dataset for client approval before production begins.",
              },
              {
                step: "03",
                title: "Production",
                desc: "Dedicated annotation specialists label datasets according to approved guidelines.",
              },
              {
                step: "04",
                title: "Quality Review",
                desc: "Senior reviewers verify annotation consistency and correctness.",
              },
              {
                step: "05",
                title: "Client Validation",
                desc: "Pilot review and continuous feedback ensure complete alignment with project goals.",
              },
              {
                step: "06",
                title: "Dataset Delivery",
                desc: "Final datasets delivered in the required annotation format with QA reports.",
              },
            ].map((item) => (

              <div
                key={item.step}
                className="bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-500 transition"
              >

                <div className="text-5xl font-black text-cyan-500 mb-6">

                  {item.step}

                </div>

                <h3 className="text-xl font-bold mb-4">

                  {item.title}

                </h3>

                <p className="text-slate-300 leading-8">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* QUALITY ASSURANCE */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Quality Assurance

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Every Dataset Undergoes
                Multiple Quality Reviews

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                High-performing computer vision models depend on precise,
                consistent, and unbiased annotations. Our quality assurance
                process combines human expertise with structured validation
                to ensure production-ready datasets.

              </p>

              <div className="space-y-6">

                {[
                  "Primary annotation by trained specialists",
                  "Peer review for consistency",
                  "Dedicated Quality Assurance verification",
                  "Random sampling and audit checks",
                  "Client feedback integration",
                  "Final validation before delivery",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >

                    <CheckCircle2 className="text-cyan-600 mt-1" />

                    <span className="text-lg text-gray-700">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <Image
                src="/images/industries/computervision/quality-cv.webp"
                alt="Computer Vision Quality Assurance"
                width={900}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* SUPPORTED FORMATS */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Annotation Formats

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Formats We Support

            </h2>

            <p className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto">

              We deliver datasets compatible with the world's leading AI
              frameworks and annotation platforms.

            </p>

          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">

            {[
              "COCO",
              "YOLO",
              "Pascal VOC",
              "JSON",
              "XML",
              "CSV",
              "TXT",
              "KITTI",
              "CVAT",
              "Label Studio",
            ].map((format) => (

              <div
                key={format}
                className="bg-white rounded-2xl shadow-md py-10 text-center text-xl font-bold hover:bg-cyan-600 hover:text-white transition"
              >

                {format}

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* WHY ANNOTEXIA */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Why Annotexia

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Your Trusted Computer Vision
              Annotation Partner

            </h2>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                title: "99% Annotation Accuracy",
                desc: "Rigorous QA ensures highly reliable AI training datasets.",
              },
              {
                title: "Enterprise Security",
                desc: "NDA protection, secure infrastructure, and controlled workflows.",
              },
              {
                title: "Scalable Workforce",
                desc: "Handle projects from thousands to millions of images.",
              },
              {
                title: "Fast Turnaround",
                desc: "Efficient workflows reduce project delivery time.",
              },
              {
                title: "Dedicated Project Manager",
                desc: "A single point of contact throughout the project lifecycle.",
              },
              {
                title: "Flexible Teams",
                desc: "Resources scale according to project complexity and deadlines.",
              },
              {
                title: "Custom Guidelines",
                desc: "We strictly follow your annotation specifications and QA standards.",
              },
              {
                title: "Free Sample Project",
                desc: "Evaluate our annotation quality before committing to production.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group bg-white rounded-3xl border p-8 shadow-lg hover:bg-cyan-600 hover:text-white hover:-translate-y-2 transition-all"
              >

                <Brain className="w-10 h-10 mb-6 text-cyan-500 group-hover:text-white" />

                <h3 className="text-xl font-bold mb-4">

                  {item.title}

                </h3>

                <p className="leading-8 text-gray-600 group-hover:text-white">

                  {item.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* STATS */}
      {/* ===================================================== */}

      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-20 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 text-center">

            <div>

              <h3 className="text-5xl font-black">

                99%

              </h3>

              <p className="mt-4 text-lg">

                Annotation Accuracy

              </p>

            </div>

            <div>

              <h3 className="text-5xl font-black">

                24/7

              </h3>

              <p className="mt-4 text-lg">

                Project Support

              </p>

            </div>

            <div>

              <h3 className="text-5xl font-black">

                Multi-Level

              </h3>

              <p className="mt-4 text-lg">

                Quality Assurance

              </p>

            </div>

            <div>

              <h3 className="text-5xl font-black">

                NDA

              </h3>

              <p className="mt-4 text-lg">

                Enterprise Security

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ===================================================== */}
      {/* FREE SAMPLE CTA */}
      {/* ===================================================== */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-cyan-700 to-blue-800 text-white">

            <div className="grid lg:grid-cols-2 items-center">

              <div className="p-16">

                <span className="uppercase tracking-widest text-cyan-200 font-semibold">

                  FREE QUALITY EVALUATION

                </span>

                <h2 className="text-5xl font-bold mt-6 mb-8">

                  Evaluate Our Annotation
                  Quality Before You Commit

                </h2>

                <p className="text-xl leading-9 text-cyan-100 mb-10">

                  We understand that selecting the right annotation
                  partner is an important decision.

                  That's why Annotexia offers a

                  <strong className="text-white">

                    {" "}FREE sample annotation service

                  </strong>

                  allowing your team to evaluate our quality,
                  consistency, turnaround time, and communication
                  before starting production.

                </p>

                <ul className="space-y-4 mb-10">

                  {[
                    "No hidden cost",
                    "No obligation",
                    "Enterprise-quality review",
                    "Delivered in your preferred format",
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle2 className="text-green-300" />

                      {item}

                    </li>

                  ))}

                </ul>

                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition"
                >

                  Request Free Sample

                </Link>

              </div>

              <div>

                <Image
                  src="/images/industries/computervision/cta-cv.webp"
                  width={900}
                  height={750}
                  alt="Computer Vision Annotation Services"
                  className="w-full h-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FAQ */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Frequently Asked Questions

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Questions We Often Receive

            </h2>

          </div>

          <div className="space-y-8">

            {[
              {
                q: "How can we trust Annotexia with our AI datasets?",
                a: "We work under strict NDAs, secure workflows, and enterprise-level quality assurance processes. Every dataset is reviewed multiple times before delivery.",
              },
              {
                q: "Can we test your service before placing a project?",
                a: "Yes. We provide FREE sample annotation so you can evaluate our annotation quality, consistency, and delivery speed before committing to a full project.",
              },
              {
                q: "Which annotation formats do you support?",
                a: "We support COCO, YOLO, Pascal VOC, JSON, XML, CSV, KITTI, CVAT, Label Studio, and custom client-specific formats.",
              },
              {
                q: "Can you handle enterprise-scale datasets?",
                a: "Absolutely. Our scalable annotation team supports projects ranging from thousands to millions of images while maintaining consistent quality.",
              },
              {
                q: "Do you follow custom annotation guidelines?",
                a: "Yes. Every project follows client-specific annotation instructions and validation criteria.",
              },
              {
                q: "What industries do you serve?",
                a: "Healthcare, Autonomous Vehicles, Manufacturing, Retail, Agriculture, Sports Analytics, Robotics, Smart Cities, Document AI, and many more.",
              },
            ].map((faq) => (

              <div
                key={faq.q}
                className="border rounded-2xl p-8 hover:shadow-lg transition"
              >

                <h3 className="text-2xl font-bold mb-4">

                  {faq.q}

                </h3>

                <p className="text-gray-600 leading-8">

                  {faq.a}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* SEO CONTENT */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">

            Professional Computer Vision Annotation Services for AI & Machine Learning

          </h2>

          <div className="space-y-8 text-lg leading-9 text-gray-600">

            <p>

              Computer vision is transforming industries by enabling machines
              to interpret and understand visual information with remarkable
              accuracy. From autonomous vehicles and medical imaging to retail
              analytics, robotics, agriculture, manufacturing, and smart city
              applications, computer vision technologies rely on high-quality
              annotated datasets to train reliable artificial intelligence
              models.

            </p>

            <p>

              Annotexia provides professional computer vision annotation
              services designed to support every stage of AI model development.
              Our experienced annotation specialists create accurate datasets
              using bounding boxes, polygons, semantic segmentation, instance
              segmentation, keypoint annotation, OCR labeling, image
              classification, object tracking, and custom annotation workflows.
              Every annotation project follows detailed client guidelines and
              undergoes multiple quality assurance reviews to ensure exceptional
              consistency and production-ready results.

            </p>

            <p>

              We support startups, research organizations, enterprise AI teams,
              and Fortune 500 companies building advanced computer vision
              systems. Whether you are developing intelligent surveillance,
              autonomous driving solutions, healthcare AI, retail automation,
              agricultural analytics, industrial inspection systems, or smart
              robotics, our scalable workforce delivers high-quality training
              datasets in COCO, YOLO, Pascal VOC, JSON, XML, KITTI, CVAT, Label
              Studio, and custom formats.

            </p>

            <p>

              At Annotexia, we believe trust is earned through quality. That is
              why every new client can evaluate our annotation quality with a
              FREE sample dataset before committing to a production project.
              Our mission is to become your long-term annotation partner by
              delivering accurate datasets, transparent communication, and
              reliable project execution that accelerates AI innovation.

            </p>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">

            Build Better Computer Vision Models
            With High-Quality Training Data

          </h2>

          <p className="text-xl leading-9 text-slate-300 max-w-3xl mx-auto mb-10">

            Whether you're developing next-generation AI products,
            enterprise automation, medical imaging solutions, or
            intelligent robotics, Annotexia provides reliable,
            scalable, and enterprise-grade computer vision annotation
            services tailored to your project requirements.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="px-8 py-4 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition font-semibold"
            >
              Request Free Consultation
            </Link>

            <Link
              href="/services"
              className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition"
            >
              Explore All Services
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}