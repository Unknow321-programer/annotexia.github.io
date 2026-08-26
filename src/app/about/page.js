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
    "Learn about Annotexia, an AI data annotation company helping organizations create reliable training datasets for Computer Vision, NLP, Generative AI, Robotics, Healthcare, Sports Analytics, Agriculture, and other AI applications.",

  keywords: [
    "About Annotexia",
    "AI Data Annotation Company",
    "Data Annotation Company",
    "AI Training Data",
    "Machine Learning Data",
    "Image Annotation",
    "Video Annotation",
    "Text Annotation",
    "Audio Annotation",
    "Computer Vision",
  ],

  alternates: {
    canonical: "https://www.annotexia.com/about",
  },

  openGraph: {
    title: "About Annotexia | AI Data Annotation Company",
    description:
      "Learn how Annotexia helps AI teams turn raw data into structured, reliable training datasets.",
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

const expertise = [
  "Image Annotation",
  "Video Annotation",
  "Object Detection",
  "Semantic Segmentation",
  "Polygon Annotation",
  "Keypoint Annotation",
  "Text Annotation",
  "Audio Annotation",
  "OCR & Document AI",
  "LiDAR Annotation",
];

const values = [
  {
    title: "Quality First",
    text: "We establish clear annotation guidelines and quality requirements to improve consistency throughout the project.",
  },
  {
    title: "Customer-Centered Workflows",
    text: "We adapt workflows around your data, tools, annotation requirements, feedback and delivery expectations.",
  },
  {
    title: "Data Confidentiality",
    text: "We support NDA-based engagements and controlled project workflows for customers with confidentiality requirements.",
  },
  {
    title: "Continuous Improvement",
    text: "Project feedback and quality findings are used to improve guidelines, workflows and annotation consistency.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Requirement Analysis",
    desc: "Understand your dataset, AI objective, annotation requirements, guidelines and expected output.",
  },
  {
    step: "02",
    title: "Annotation Planning",
    desc: "Define the annotation workflow, classes, attributes, edge cases, quality criteria and project process.",
  },
  {
    step: "03",
    title: "Annotation",
    desc: "Our annotation teams label the dataset according to the approved project guidelines.",
  },
  {
    step: "04",
    title: "Quality Review",
    desc: "Annotations are reviewed for consistency, missing labels, incorrect classifications and project-specific errors.",
  },
  {
    step: "05",
    title: "Client Feedback",
    desc: "Customer feedback and review findings can be incorporated before the final production delivery.",
  },
  {
    step: "06",
    title: "Dataset Delivery",
    desc: "Validated datasets are delivered in the required format through the agreed delivery workflow.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">

        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />
          <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-cyan-300 text-sm">
                <Sparkles className="w-4 h-4" />
                About Annotexia
              </span>

              <h1 className="mt-8 text-5xl lg:text-7xl font-black text-white leading-tight">

                We Help AI Teams Turn

                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Raw Data Into Reliable Training Data
                </span>

              </h1>

              <p className="mt-8 text-lg leading-9 text-slate-300 max-w-xl">

                Annotexia provides professional data annotation and
                labeling services that help organizations create structured
                datasets for Computer Vision, NLP, Generative AI,
                Robotics, Healthcare, Sports Analytics, Agriculture,
                and other AI applications.

              </p>

              <p className="mt-5 text-lg leading-9 text-slate-300 max-w-xl">

                From pilot datasets to ongoing production workflows,
                we build annotation processes around your data,
                guidelines, quality requirements and delivery needs.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-600 transition"
                >
                  Get a Free Project Assessment
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

            {/* RIGHT */}

            <div className="relative">

              <div className="absolute inset-0 rounded-[35px] bg-gradient-to-r from-cyan-500 to-indigo-500 blur-3xl opacity-30" />

              <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

                <Image
                  src="/images/about/about-banner.webp"
                  alt="Annotexia AI data annotation and training data services"
                  width={900}
                  height={700}
                  className="w-full object-cover"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute top-8 left-8 rounded-2xl bg-white p-5 shadow-2xl">

                  <BrainCircuit className="text-cyan-600 mb-2" />

                  <h3 className="font-bold text-gray-900">
                    AI Training Data
                  </h3>

                  <p className="text-sm text-gray-500">
                    Image • Video • Text • Audio
                  </p>

                </div>

                <div className="absolute bottom-8 right-8 rounded-2xl bg-slate-900/90 backdrop-blur-xl p-6 border border-white/10">

                  <p className="text-xl font-black text-cyan-400">
                    Project-Specific
                  </p>

                  <p className="text-slate-300 mt-1">
                    Annotation Workflows
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          WHO WE ARE
      ========================================================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="/images/about/team.webp"
                alt="Annotexia data annotation team working on AI training datasets"
                width={800}
                height={650}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                WHO WE ARE
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-black text-gray-900">
                We Don&apos;t Just Label Data.
                <br />
                We Build AI Foundations.
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                AI models depend on training data that is accurate,
                consistent and aligned with the problem the model needs
                to solve.

              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                Annotexia helps organizations transform raw images,
                videos, text, audio and other data into structured
                datasets that can support machine learning development.

              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Computer Vision & AI Data Expertise",
                  "Project-Specific Annotation Guidelines",
                  "Structured Quality Review",
                  "Flexible Pilot-to-Production Workflows",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <CheckCircle2 className="text-cyan-500 w-6 h-6 flex-shrink-0" />

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


      {/* =========================================================
          OUR STORY
      ========================================================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                OUR STORY
              </span>

              <h2 className="mt-4 text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                Every Great AI Model Begins With Great Data.
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                AI is transforming industries, but building reliable
                AI requires more than a capable model. The quality,
                consistency and structure of the underlying data also
                play an important role in machine learning development.

              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                Annotexia was created to help bridge the gap between
                raw data and usable AI training datasets.

              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                Our approach starts with understanding the customer&apos;s
                requirements, defining clear annotation guidelines,
                validating the workflow and then delivering structured
                datasets according to the agreed requirements.

              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                Whether you are validating an initial dataset or
                building an ongoing annotation workflow, our goal is
                to make the data preparation process more practical,
                consistent and scalable.

              </p>

            </div>

            <div>

              <Image
                src="/images/about/story.webp"
                alt="AI training data preparation and professional data annotation"
                width={850}
                height={700}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          MISSION & VISION
      ========================================================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-24">

        <div className="absolute inset-0">

          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[120px]" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Mission */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-2xl">

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-8">

                <Target className="text-cyan-400 w-8 h-8" />

              </div>

              <h3 className="text-3xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-6 leading-9 text-slate-300">

                To help AI teams build reliable machine learning systems
                by providing accurate, scalable and well-managed data
                annotation services.

              </p>

            </div>


            {/* Vision */}

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-2xl">

              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8">

                <BrainCircuit className="text-indigo-300 w-8 h-8" />

              </div>

              <h3 className="text-3xl font-bold text-white">
                Our Vision
              </h3>

              <p className="mt-6 leading-9 text-slate-300">

                To become a trusted AI training data partner for
                organizations developing the next generation of
                intelligent systems.

              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          OUR VALUES
      ========================================================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
              OUR VALUES
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-black text-gray-900">
              Principles That Drive Our Work
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">

              Our approach is built around quality, customer
              requirements, confidentiality and continuous improvement.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

            {values.map((item) => (

              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500 hover:shadow-2xl"
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


      {/* =========================================================
          HOW WE WORK WITH AI TEAMS
      ========================================================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="uppercase tracking-[0.3em] text-cyan-600 font-semibold text-sm">
              BUILT AROUND YOUR WORKFLOW
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-black text-gray-900">
              Your Data. Your Guidelines. Your Workflow.
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">

              Every AI project has different data, annotation requirements
              and quality expectations. We adapt the annotation workflow
              around the requirements of your project.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">

            {[
              {
                title: "Your Data",
                text: "Images, video, text, audio, LiDAR and other datasets.",
              },
              {
                title: "Your Guidelines",
                text: "Classes, attributes, edge cases and annotation instructions.",
              },
              {
                title: "Your Platform",
                text: "CVAT, Label Studio, Labelbox, Roboflow, SuperAnnotate or your own platform.",
              },
              {
                title: "Your Output",
                text: "COCO, YOLO, JSON, XML, CSV, JSONL or custom formats.",
              },
              {
                title: "Your Scale",
                text: "Start with a pilot and expand the workflow as requirements grow.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-white border border-slate-200 p-7 hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          OUR EXPERTISE
      ========================================================= */}

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

              <h2 className="mt-5 text-4xl lg:text-5xl font-black text-gray-900">
                Annotation Services Built Around Your AI Goals
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">

                We support a range of annotation requirements across
                Computer Vision, NLP, audio, document AI, LiDAR and
                specialized AI applications.

              </p>

              <div className="mt-10 grid md:grid-cols-2 gap-x-10 gap-y-6">

                {expertise.map((service) => (

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

              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-10 font-semibold text-cyan-600 hover:text-cyan-700"
              >
                Explore All Annotation Services
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          HOW WE DELIVER
      ========================================================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="uppercase tracking-[0.35em] text-cyan-600 font-semibold text-sm">
              HOW WE WORK
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-black text-gray-900">
              A Structured Workflow From Requirement to Delivery
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-9">

              Every project starts with understanding the requirements
              and moves through annotation, quality review, feedback
              and final delivery.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            {workflow.map((item) => (

              <div
                key={item.step}
                className="group rounded-3xl border border-gray-200 bg-white p-8 hover:border-cyan-500 hover:shadow-xl transition duration-300"
              >

                <div className="text-5xl font-black text-cyan-500 mb-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
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


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative overflow-hidden bg-slate-950 py-28">

        <div className="absolute inset-0">

          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <span className="uppercase tracking-[0.35em] text-cyan-400 font-semibold text-sm">
            START WITH ANNOTEXIA
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-black text-white leading-tight">
            Have a Dataset That Needs Annotation?
          </h2>

          <p className="mt-8 text-lg leading-9 text-slate-300 max-w-3xl mx-auto">

            Tell us what you&apos;re building, what data you have,
            and what you need labeled. We&apos;ll review your requirements
            and help determine the right annotation workflow for your project.

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-600 transition"
            >
              Get a Free Project Assessment
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition"
            >
              Start a Pilot Project
            </Link>

          </div>

          <p className="mt-8 text-sm text-slate-400">
            Image • Video • Text • Audio • LiDAR • OCR • NLP • Computer Vision • LLM Data
          </p>

        </div>

      </section>


      {/* =========================================================
          SEO CONTENT
      ========================================================= */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl lg:text-4xl font-black text-gray-900">
            About Annotexia
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

            <p>
              Annotexia is an AI data annotation company helping
              organizations create structured training datasets for
              machine learning and artificial intelligence applications.
            </p>

            <p>
              Our services include image annotation, video annotation,
              object detection, semantic segmentation, polygon annotation,
              keypoint annotation, text annotation, audio annotation,
              OCR, LiDAR annotation and other custom data labeling
              workflows.
            </p>

            <p>
              We support AI applications across Computer Vision,
              Sports Analytics, Healthcare, Agriculture, Robotics,
              Retail, Manufacturing, Autonomous Systems and other
              machine learning use cases.
            </p>

            <p>
              Our workflows are designed around project-specific
              annotation guidelines, quality requirements, data formats,
              existing annotation platforms and delivery expectations.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================================
          ORGANIZATION SCHEMA
      ========================================================= */}

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
              "Annotexia provides professional AI data annotation and labeling services for machine learning and artificial intelligence applications.",
            email: "contact@annotexia.com",
            sameAs: [
              "https://www.linkedin.com/company/annotexia",
            ],
            knowsAbout: [
              "Data Annotation",
              "Image Annotation",
              "Video Annotation",
              "Object Detection",
              "Semantic Segmentation",
              "Text Annotation",
              "Audio Annotation",
              "OCR",
              "LiDAR Annotation",
              "Machine Learning",
              "Artificial Intelligence",
              "Computer Vision",
            ],
          }),
        }}
      />

    </main>
  );
}