import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  BrainCircuit,
  Target,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "About Annotexia | AI Data Annotation Company",
  description:
    "Learn about Annotexia, a trusted AI data annotation company delivering high-quality image annotation, video annotation, text annotation, audio annotation, and data labeling services for machine learning projects worldwide.",

  keywords: [
    "About Annotexia",
    "AI Annotation Company",
    "Data Annotation Company",
    "Machine Learning Data",
    "Image Annotation",
    "Video Annotation",
    "Text Annotation",
    "Audio Annotation",
    "Training Data",
    "Computer Vision",
  ],

  alternates: {
    canonical: "https://www.annotexia.com/about",
  },

  openGraph: {
    title: "About Annotexia",
    description:
      "Professional AI Data Annotation Services for Computer Vision, NLP, Sports Analytics and Machine Learning.",
    url: "https://www.annotexia.com/about",
    siteName: "Annotexia",
    images: [
      {
        url: "/images/about/about-banner.webp",
        width: 1200,
        height: 630,
        alt: "Annotexia AI Data Annotation Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

        {/* Background Blur */}

        <div className="absolute inset-0">

          <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-[120px]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 text-sm">

                <Sparkles className="w-4 h-4" />

                Trusted AI Training Data Partner

              </span>

              <h1 className="mt-8 text-5xl lg:text-7xl font-black text-white leading-tight">

                Building the

                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">

                  Future of AI

                </span>

                One Annotation at a Time

              </h1>

              <p className="mt-8 text-lg leading-9 text-slate-300 max-w-xl">

                Behind every intelligent AI model lies millions of accurately
                labeled data points.

                At <strong>Annotexia</strong>, we transform raw data into
                high-quality training datasets that help organizations build
                smarter Computer Vision, NLP, Healthcare, Robotics, Sports
                Analytics and Autonomous Driving solutions.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-600 transition"
                >
                  Start Your Project

                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white hover:bg-slate-800 transition"
                >
                  Explore Services
                </Link>

              </div>

            </div>
            {/* Right */}

            <div className="relative">

              <div className="absolute inset-0 rounded-[35px] bg-gradient-to-r from-cyan-500 to-indigo-500 blur-3xl opacity-30" />

              <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

                <Image
                  src="/images/about/about-banner.webp"
                  alt="Professional AI Data Annotation Team Working on Computer Vision Projects"
                  width={900}
                  height={700}
                  className="w-full object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating Cards */}

                <div className="absolute top-8 left-8 rounded-2xl bg-white p-5 shadow-2xl">

                  <BrainCircuit className="text-cyan-600 mb-2" />

                  <h3 className="font-bold text-gray-900">

                    AI Training Data

                  </h3>

                  <p className="text-sm text-gray-500">

                    Image • Video • Text

                  </p>

                </div>

                <div className="absolute bottom-8 right-8 rounded-2xl bg-slate-900/90 backdrop-blur-xl p-6 border border-white/10">

                  <p className="text-4xl font-black text-cyan-400">

                    99%

                  </p>

                  <p className="text-slate-300">

                    Annotation Accuracy

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="/images/about/team.webp"
                alt="Annotexia Professional Data Annotation Team"
                width={800}
                height={650}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="text-cyan-600 font-semibold uppercase tracking-widest">

                WHO WE ARE

              </span>

              <h2 className="mt-4 text-4xl font-black text-gray-900">

                We Don't Just Label Data.

                <br />

                We Build AI Foundations.

              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                Every successful Artificial Intelligence product starts with
                one critical ingredient — clean, accurate, and consistent
                training data.

                That's where Annotexia comes in.

              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                We specialize in transforming raw datasets into reliable,
                machine-learning-ready assets through professional image,
                video, text, audio, and custom data annotation services.

              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Computer Vision Experts",
                  "Enterprise Quality Assurance",
                  "Scalable Annotation Teams",
                  "Fast Project Delivery",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-cyan-500 w-6 h-6" />

                    <span className="text-lg text-gray-700">

                      {item}

                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= OUR STORY ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="text-cyan-600 font-semibold uppercase tracking-widest">

                OUR STORY

              </span>

              <h2 className="mt-4 text-4xl font-black text-gray-900 leading-tight">

                Every Great AI Model Begins
                <br />
                with Great Data.

              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                Artificial Intelligence is transforming industries across
                healthcare, autonomous vehicles, retail, agriculture,
                manufacturing, sports analytics, and robotics.

                Yet even the most advanced AI algorithms cannot learn
                without properly labeled training data.

              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                Annotexia was founded with a simple vision:
                to bridge the gap between raw data and intelligent AI.

                Our experienced annotation specialists combine domain
                expertise with rigorous quality control to create datasets
                that help organizations train accurate, reliable,
                and production-ready machine learning models.

              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                Whether it's millions of images for computer vision,
                hours of video annotation, NLP datasets,
                or custom enterprise labeling projects,
                our team delivers scalable annotation solutions
                tailored to your business goals.

              </p>

            </div>

            <div>

              <Image
                src="/images/about/story.webp"
                alt="AI engineers preparing machine learning datasets with professional data annotation"
                width={850}
                height={700}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>



      {/* ================= MISSION VISION ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-24">

        <div className="absolute inset-0">

          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Mission */}

            <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition duration-500 hover:-translate-y-3 hover:border-cyan-500/40 hover:shadow-2xl">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-8">

                <Target className="text-cyan-400 w-8 h-8" />

              </div>

              <h3 className="text-3xl font-bold text-white">

                Our Mission

              </h3>

              <p className="mt-6 leading-9 text-slate-300">

                To accelerate Artificial Intelligence innovation by
                delivering accurate, scalable, and secure data annotation
                services that empower businesses to build reliable machine
                learning models with confidence.

              </p>

            </div>



            {/* Vision */}

            <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition duration-500 hover:-translate-y-3 hover:border-cyan-500/40 hover:shadow-2xl">

              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8">

                <BrainCircuit className="text-indigo-300 w-8 h-8" />

              </div>

              <h3 className="text-3xl font-bold text-white">

                Our Vision

              </h3>

              <p className="mt-6 leading-9 text-slate-300">

                To become one of the world's most trusted AI training
                data partners by helping organizations transform raw
                information into intelligent systems that positively
                impact industries worldwide.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= CORE VALUES ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-600 font-semibold uppercase tracking-widest">

              OUR VALUES

            </span>

            <h2 className="mt-4 text-5xl font-black text-gray-900">

              Principles That Drive Everything We Do

            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">

              Every annotation project we deliver follows the same
              standards of quality, integrity, security,
              and customer success.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

            {[
              {
                title: "Quality First",
                text: "Every dataset undergoes rigorous multi-level quality assurance before delivery.",
              },
              {
                title: "Data Security",
                text: "Confidentiality and secure workflows protect your sensitive business data.",
              },
              {
                title: "Customer Success",
                text: "We work as an extension of your AI team to achieve outstanding results.",
              },
              {
                title: "Continuous Innovation",
                text: "We continuously improve workflows, tools, and annotation accuracy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-4 hover:border-cyan-500 hover:shadow-2xl"
              >

                <div className="w-16 h-16 rounded-2xl bg-cyan-50 flex items-center justify-center mb-8 group-hover:bg-cyan-500 transition">

                  <CheckCircle2 className="text-cyan-600 group-hover:text-white w-8 h-8" />

                </div>

                <h3 className="text-2xl font-bold text-gray-900">

                  {item.title}

                </h3>

                <p className="mt-5 text-gray-600 leading-8">

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= WHY CHOOSE ANNOTEXIA ================= */}

      <section className="relative overflow-hidden bg-slate-950 py-24">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute top-0 left-0 h-96 w-96 bg-cyan-500/10 blur-[160px]" />

          <div className="absolute bottom-0 right-0 h-96 w-96 bg-indigo-500/10 blur-[160px]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">

              WHY ANNOTEXIA

            </span>

            <h2 className="mt-5 text-5xl font-black text-white">

              More Than an Annotation Company

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-300">

              We don't simply draw bounding boxes or label datasets.

              We become an extension of your AI development team,
              ensuring every annotation contributes to building
              reliable, accurate, and production-ready machine learning
              models.

            </p>

          </div>



          <div className="grid lg:grid-cols-2 gap-8 mt-20">

            {[
              {
                title: "High Precision Annotation",
                desc: "Every dataset passes through multiple QA reviews to ensure consistency and exceptional accuracy.",
                icon: "/images/about/accuracy.webp",
              },
              {
                title: "Scalable Workforce",
                desc: "Whether you have 5,000 images or 5 million, our team scales seamlessly with your project.",
                icon: "/images/about/team_work.webp",
              },
              {
                title: "Fast Turnaround",
                desc: "Optimized workflows help us deliver enterprise-quality datasets within agreed timelines.",
                icon: "/images/about/time.webp",
              },
              {
                title: "Industry Expertise",
                desc: "Healthcare, Sports Analytics, Agriculture, Robotics, Retail, Autonomous Vehicles and more.",
                icon: "/images/about/industry.webp",
              },
              {
                title: "Enterprise Security",
                desc: "Strict NDAs, secure infrastructure, and controlled workflows protect sensitive client data.",
                icon: "/images/about/security.webp",
              },
              {
                title: "Dedicated Project Manager",
                desc: "One dedicated contact ensures transparent communication throughout the project lifecycle.",
                icon: "/images/about/support.webp",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.18)]"
              >

                <div className="flex gap-6">

                  <div className="flex-shrink-0">

                    <div className="h-20 w-20 rounded-2xl bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500 transition">

                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={42}
                        height={42}
                      />

                    </div>

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-white">

                      {item.title}

                    </h3>

                    <p className="mt-4 text-slate-300 leading-8">

                      {item.desc}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= OUR EXPERTISE ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="/images/about/expertise.webp"
                alt="AI data annotation expertise for machine learning projects"
                width={800}
                height={700}
                className="rounded-3xl shadow-2xl"
              />

            </div>

            <div>

              <span className="text-cyan-600 uppercase tracking-[0.3em] font-semibold text-sm">

                OUR EXPERTISE

              </span>

              <h2 className="mt-5 text-5xl font-black text-gray-900">

                Annotation Services
                Built Around
                Your AI Goals

              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                Every Artificial Intelligence application has unique
                data requirements.

                Our annotation specialists adapt workflows,
                guidelines, and quality assurance processes
                specifically for your project.

              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-6">

                {[
                  "Image Annotation",
                  "Video Annotation",
                  "Semantic Segmentation",
                  "Bounding Boxes",
                  "Polygon Annotation",
                  "Text Annotation",
                  "Audio Annotation",
                  "LiDAR Annotation",
                  "OCR & Document AI",
                  "Sports Analytics",
                ].map((service) => (

                  <div
                    key={service}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-cyan-500 w-6 h-6 flex-shrink-0" />

                    <span className="text-lg text-gray-700">
                      {service}
                    </span>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= COMPANY STATS ================= */}

      <section className="relative py-24 bg-gradient-to-br from-cyan-600 via-sky-600 to-indigo-700 overflow-hidden">

        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="uppercase tracking-[0.35em] text-cyan-100 font-semibold text-sm">

              ANNOTEXIA IN NUMBERS

            </span>

            <h2 className="mt-5 text-5xl font-black text-white">

              Building High-Quality
              AI Training Data

            </h2>

            <p className="mt-8 text-lg leading-9 text-cyan-50">

              Our goal is simple —
              help organizations build better AI with
              scalable, accurate and secure annotation services.

            </p>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

            {[
              {
                value: "99%",
                title: "Annotation Accuracy",
              },
              {
                value: "24/7",
                title: "Project Support",
              },
              {
                value: "8+",
                title: "AI Industries",
              },
              {
                value: "100%",
                title: "Data Confidentiality",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-10 text-center transition duration-500 hover:-translate-y-3 hover:bg-white/20"
              >

                <h3 className="text-6xl font-black text-white">

                  {item.value}

                </h3>

                <p className="mt-5 text-cyan-100 text-lg">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= INDUSTRIES ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="uppercase tracking-[0.3em] text-cyan-600 font-semibold text-sm">

              INDUSTRIES WE SERVE

            </span>

            <h2 className="mt-5 text-5xl font-black text-gray-900">

              AI Annotation Solutions
              Across Multiple Industries

            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">

              From healthcare to autonomous vehicles,
              our annotation specialists create
              production-ready datasets for AI companies
              around the world.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

            {[
              {
                title: "Healthcare AI",
                image: "/images/about/healthcare.webp",
              },
              {
                title: "Sports Analytics",
                image: "/images/about/sports.webp",
              },
              {
                title: "Autonomous Vehicles",
                image: "/images/about/autonomous.webp",
              },
              {
                title: "Agriculture AI",
                image: "/images/about/agriculture.webp",
              },
              {
                title: "Retail AI",
                image: "/images/about/retail.webp",
              },
              {
                title: "Manufacturing",
                image: "/images/about/manufacturing.webp",
              },
              {
                title: "Computer Vision",
                image: "/images/about/computervision.webp",
              },
              {
                title: "Drone Imagery",
                image: "/images/about/drone.webp",
              },
            ].map((industry) => (

              <div
                key={industry.title}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-4 hover:shadow-2xl"
              >

                <div className="relative h-60 overflow-hidden">

                  <Image
                    src={industry.image}
                    alt={`${industry.title} data annotation services`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute bottom-6 left-6">

                    <h3 className="text-2xl font-bold text-white">

                      {industry.title}

                    </h3>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= TRUST SECTION ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[40px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-16">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="uppercase tracking-[0.35em] text-cyan-400 font-semibold text-sm">

                  TRUSTED WORKFLOW

                </span>

                <h2 className="mt-6 text-5xl font-black text-white">

                  Why AI Teams
                  Choose Annotexia

                </h2>

                <p className="mt-8 text-slate-300 leading-9 text-lg">

                  Every dataset passes through standardized annotation,
                  validation, quality assurance, and final review before
                  reaching your machine learning pipeline.

                  This ensures consistency, scalability,
                  and enterprise-grade annotation quality.

                </p>

              </div>

              <div className="grid grid-cols-2 gap-6">

                {[
                  "Multi-Level QA",
                  "Project Manager",
                  "Secure NDA",
                  "Scalable Teams",
                  "Fast Delivery",
                  "Expert Annotators",
                ].map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl bg-white/5 border border-white/10 p-8 text-center hover:bg-cyan-500 transition duration-300"
                  >

                    <CheckCircle2 className="mx-auto text-cyan-400 group-hover:text-white mb-5" />

                    <p className="text-white font-semibold">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* ================= WORKFLOW ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="uppercase tracking-[0.35em] text-cyan-600 font-semibold text-sm">
              OUR WORKFLOW
            </span>

            <h2 className="mt-5 text-5xl font-black text-gray-900">
              How We Deliver
              High-Quality Annotation
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">
              Every annotation project follows a structured workflow
              designed to maximize quality, consistency and delivery speed.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10 mt-20">

            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "Understand dataset type, annotation guidelines, model objectives and delivery format.",
              },
              {
                step: "02",
                title: "Annotation Planning",
                desc: "Prepare workflows, assign specialists and create project documentation.",
              },
              {
                step: "03",
                title: "Annotation Execution",
                desc: "Experienced annotators label every image, video, text or audio sample accurately.",
              },
              {
                step: "04",
                title: "Quality Assurance",
                desc: "Multi-level reviews validate consistency and remove annotation errors.",
              },
              {
                step: "05",
                title: "Client Review",
                desc: "Datasets are shared for feedback before final approval.",
              },
              {
                step: "06",
                title: "Delivery",
                desc: "Receive production-ready datasets in your preferred annotation format.",
              },
            ].map((item) => (

              <div
                key={item.step}
                className="group rounded-3xl border border-gray-200 p-8 hover:border-cyan-500 hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >

                <div className="text-6xl font-black text-cyan-500 mb-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= FAQ ================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <span className="uppercase tracking-[0.3em] text-cyan-600 font-semibold text-sm">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="mt-5 text-5xl font-black text-gray-900">
              Common Questions
            </h2>

          </div>

          <div className="space-y-6 mt-16">

            {[
              {
                q: "What industries do you support?",
                a: "We support Healthcare, Sports Analytics, Computer Vision, Retail, Agriculture, Autonomous Vehicles, Manufacturing, Robotics, OCR, Drone Imagery and many more.",
              },
              {
                q: "Which annotation formats do you provide?",
                a: "COCO, YOLO, Pascal VOC, JSON, CSV, XML and custom formats.",
              },
              {
                q: "Can Annotexia handle large datasets?",
                a: "Yes. Our scalable workforce allows us to efficiently process projects ranging from thousands to millions of annotations.",
              },
              {
                q: "How do you ensure annotation quality?",
                a: "Every project follows detailed guidelines with multiple QA review stages and consistency checks before delivery.",
              },
              {
                q: "Do you sign NDAs?",
                a: "Yes. We sign Non-Disclosure Agreements and maintain strict confidentiality for every client.",
              },
            ].map((faq) => (

              <div
                key={faq.q}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-cyan-500 transition"
              >

                <h3 className="text-xl font-bold mb-4">
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

      {/* ================= FINAL CTA ================= */}

      <section className="relative overflow-hidden bg-slate-950 py-28">

        {/* Background Glow */}

        <div className="absolute inset-0">

          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[0.35em] text-cyan-400 font-semibold text-sm">

            LET'S BUILD AI TOGETHER

          </span>

          <h2 className="mt-6 text-5xl md:text-6xl font-black text-white leading-tight">

            Looking for a Reliable
            <br />
            Data Annotation Partner?

          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300 max-w-4xl mx-auto">

            Whether you're building the next breakthrough in
            Computer Vision, Autonomous Driving,
            Healthcare AI, Agriculture,
            Sports Analytics, Robotics,
            Retail Intelligence, or Generative AI,
            Annotexia provides high-quality annotation services
            that help machine learning models perform at their best.

          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-14">

            <Link
              href="/contact"
              className="rounded-full bg-cyan-500 px-10 py-5 text-lg font-semibold text-white transition hover:scale-105 hover:bg-cyan-600"
            >
              Start Your Project
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white px-10 py-5 text-lg font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </section>



      {/* ================= SEO CONTENT ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-black text-gray-900 mb-8">

            About Annotexia

          </h2>

          <div className="space-y-8 text-lg leading-9 text-gray-600">

            <p>

              Annotexia is a professional data annotation company
              helping organizations create high-quality AI training
              datasets for machine learning and artificial intelligence
              applications.

            </p>

            <p>

              Our annotation specialists deliver accurate image
              annotation, video annotation, text annotation,
              audio annotation, semantic segmentation,
              object detection, polygon annotation,
              keypoint labeling, OCR annotation,
              LiDAR annotation, and custom data labeling
              solutions for startups, enterprises,
              and research organizations worldwide.

            </p>

            <p>

              We serve industries including Healthcare AI,
              Computer Vision, Autonomous Vehicles,
              Sports Analytics, Agriculture,
              Drone Mapping, Robotics,
              Retail, Manufacturing,
              Logistics, Smart Cities,
              and Generative AI.

            </p>

            <p>

              Every dataset is reviewed using strict quality assurance
              processes to ensure consistency,
              scalability,
              and enterprise-grade annotation accuracy.

            </p>

          </div>

        </div>

      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Annotexia",
            url: "https://www.annotexia.com",
            logo: "https://www.annotexia.com/logo.png",
            description:
              "Annotexia provides professional data annotation services including image annotation, video annotation, text annotation, audio annotation, LiDAR annotation, and AI training datasets.",
            email: "contact@annotexia.com",
            sameAs: [
              "https://www.linkedin.com/company/annotexia"
            ],
            knowsAbout: [
              "Image Annotation",
              "Video Annotation",
              "Text Annotation",
              "Audio Annotation",
              "Data Labeling",
              "Machine Learning",
              "Artificial Intelligence",
              "Computer Vision"
            ]
          }),
        }}
      />
    </main>
  )
};