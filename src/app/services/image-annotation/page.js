import Image from "next/image";

export const metadata = {
  title: "Image Annotation Services | AI Image Labeling Company | Annotexia",
  description:
    "Professional image annotation services for AI, machine learning, and computer vision. Bounding box, polygon, semantic segmentation, keypoint, cuboid, and landmark annotation with enterprise-grade quality assurance.",
  keywords: [
    "Image Annotation Services",
    "Image Labeling",
    "AI Image Annotation",
    "Computer Vision Annotation",
    "Bounding Box Annotation",
    "Polygon Annotation",
    "Semantic Segmentation",
    "Keypoint Annotation",
    "Cuboid Annotation",
    "Machine Learning Data Labeling",
    "Image Dataset Annotation",
  ],
};

export default function ImageAnnotationPage() {
  return (
    <main className="min-h-screen">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-b from-orange-200 via-white to-cyan-500 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="inline-flex rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium mb-5">
                Computer Vision Training Data
              </span>

              <h1 className="text-5xl font-bold leading-tight mb-6">
                Professional Image Annotation Services for
                AI & Computer Vision
              </h1>

              <p className="text-xl text-gray-600 leading-8 mb-8">

                Annotexia delivers enterprise-grade image annotation
                services that help AI companies build accurate,
                scalable, and production-ready computer vision models.

              </p>

              <p className="text-gray-600 leading-8 mb-8">

                From autonomous vehicles and medical imaging to retail,
                manufacturing, agriculture, robotics, and smart cities,
                our expert annotation teams create high-quality labeled
                datasets that improve AI model accuracy while reducing
                training time.

              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="/contact"
                  className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
                >
                  Get Free Consultation
                </a>

                <a
                  href="/services"
                  className="px-8 py-4 rounded-lg border border-gray-300 hover:border-gray-500 transition"
                >
                  Explore Services
                </a>

              </div>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt="Image Annotation Services"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= OVERVIEW ================= */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-6">
              High-Quality Image Annotation for Artificial Intelligence
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-8">

              Image annotation is one of the most important stages in
              building successful Artificial Intelligence and Machine
              Learning models. Every computer vision application relies
              on accurately labeled images so AI algorithms can identify,
              classify, detect, segment, and understand visual information.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Computer Vision AI"
                width={1200}
                height={800}
                className="rounded-xl shadow-lg"
              />

            </div>

            <div className="space-y-6 text-gray-600 leading-8">

              <p>

                Whether you're developing an autonomous driving platform,
                healthcare diagnostic solution, retail analytics system,
                security surveillance software, or industrial inspection
                application, the quality of your AI model depends directly
                on the quality of your training data.

              </p>

              <p>

                At Annotexia, we combine experienced human annotators,
                robust quality assurance workflows, and industry-leading
                annotation tools to create highly accurate image datasets
                for computer vision projects of every size.

              </p>

              <p>

                Our scalable teams support startups, enterprise AI
                companies, research institutions, and Fortune 500
                organizations with reliable image annotation services
                that accelerate machine learning development while
                maintaining exceptional labeling consistency.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHAT IS IMAGE ANNOTATION ================= */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-4xl font-bold mb-8">
                What is Image Annotation?
              </h2>

              <p className="text-gray-600 leading-8 mb-6">

                Image annotation is the process of labeling objects,
                people, products, roads, medical structures, agricultural
                crops, vehicles, animals, documents, or any visual
                element within an image so machine learning algorithms
                can understand what they are seeing.

              </p>

              <p className="text-gray-600 leading-8 mb-6">

                These annotations become the "ground truth" data used to
                train deep learning models for object detection,
                classification, segmentation, pose estimation,
                facial recognition, OCR, visual inspection,
                robotics, and countless other AI applications.

              </p>

              <p className="text-gray-600 leading-8">

                Without accurately annotated datasets, even the most
                advanced AI models cannot achieve high prediction
                accuracy or reliable real-world performance.

              </p>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80"
                alt="AI Image Annotation Workflow"
                width={1200}
                height={800}
                className="rounded-xl shadow-lg"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= BENEFITS ================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-6">
              Why Accurate Image Annotation Matters
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto text-lg">

              High-quality annotation directly impacts AI model
              performance, deployment speed, and business success.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white border rounded-xl p-8">

              <h3 className="font-semibold text-xl mb-4">
                Better AI Accuracy
              </h3>

              <p className="text-gray-600">
                Reduce model errors through consistent,
                high-quality image labeling.
              </p>

            </div>

            <div className="bg-white border rounded-xl p-8">

              <h3 className="font-semibold text-xl mb-4">
                Faster Training
              </h3>

              <p className="text-gray-600">
                Clean datasets accelerate machine learning
                model convergence.
              </p>

            </div>

            <div className="bg-white border rounded-xl p-8">

              <h3 className="font-semibold text-xl mb-4">
                Lower Development Cost
              </h3>

              <p className="text-gray-600">
                Reduce expensive model retraining caused by
                poor annotation quality.
              </p>

            </div>

            <div className="bg-white border rounded-xl p-8">

              <h3 className="font-semibold text-xl mb-4">
                Scalable Production
              </h3>

              <p className="text-gray-600">
                Support millions of images using dedicated
                annotation teams.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=80"
            alt="Image annotation services for AI training"
            className="h-full w-full object-cover opacity-10"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Content */}

            <div>

              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-6">
                AI Training Data • Computer Vision • Image Labeling
              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">

                Professional
                <span className="text-blue-600"> Image Annotation </span>
                Services for AI & Machine Learning

              </h1>

              <p className="mt-8 text-xl leading-8 text-slate-600">

                Build highly accurate AI models with enterprise-grade image
                annotation services from Annotexia. We deliver precise
                bounding boxes, polygons, semantic segmentation,
                instance segmentation, keypoints, cuboids, and custom
                image labeling for computer vision projects.

              </p>

              <p className="mt-6 text-lg leading-8 text-slate-600">

                Our expert annotation teams help startups, research labs,
                Fortune 500 companies, and AI solution providers create
                reliable datasets for autonomous vehicles, healthcare,
                retail, agriculture, robotics, manufacturing,
                satellite imagery, sports analytics, and intelligent
                automation systems.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="/contact"
                  className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Get Free Consultation
                </a>

                <a
                  href="/services"
                  className="rounded-xl border border-slate-300 px-8 py-4 font-semibold hover:bg-slate-100 transition"
                >
                  Explore Services
                </a>

              </div>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">

                <div>
                  <h3 className="text-3xl font-bold text-blue-600">
                    99%
                  </h3>
                  <p className="text-sm text-slate-600">
                    Annotation Accuracy
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-600">
                    1M+
                  </h3>
                  <p className="text-sm text-slate-600">
                    Images Annotated
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-600">
                    20+
                  </h3>
                  <p className="text-sm text-slate-600">
                    Annotation Experts
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-600">
                    24/7
                  </h3>
                  <p className="text-sm text-slate-600">
                    Project Support
                  </p>
                </div>

              </div>

            </div>

            {/* Right Image */}

            <div>

              <img
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80"
                alt="Computer vision image annotation"
                className="rounded-3xl shadow-2xl border"
              />

            </div>

          </div>

        </div>

      </section>
      {/* ================= WHAT IS IMAGE ANNOTATION ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
                alt="AI image annotation workflow"
                className="rounded-2xl shadow-xl border"
                loading="lazy"
              />

            </div>

            <div>

              <span className="text-blue-600 font-semibold uppercase tracking-wider">
                Image Labeling for Artificial Intelligence
              </span>

              <h2 className="text-4xl font-bold mt-4 mb-8">
                What is Image Annotation?
              </h2>

              <p className="text-gray-600 leading-8 mb-6">

                Image annotation is the process of labeling visual content so
                Artificial Intelligence (AI) and Machine Learning (ML) models
                can understand what appears inside an image. Every labeled
                object becomes valuable training data that teaches computer
                vision systems how to recognize, classify, detect, segment,
                and interpret real-world scenes.

              </p>

              <p className="text-gray-600 leading-8 mb-6">

                During annotation, human experts identify objects such as
                people, vehicles, traffic signs, medical structures,
                industrial components, agricultural crops, retail products,
                animals, buildings, roads, documents, or any custom object
                required for an AI application.

              </p>

              <p className="text-gray-600 leading-8">

                These annotations become the "ground truth" datasets used
                for training deep learning algorithms, enabling AI models
                to deliver highly accurate predictions in production
                environments.

              </p>

            </div>

          </div>

        </div>
      </section>



      {/* ================= WHY IMAGE ANNOTATION ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-6">

              Why Image Annotation is Critical for AI Success

            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">

              Every successful computer vision system starts with
              accurately labeled training data.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            <div className="bg-white rounded-xl border p-8">

              <h3 className="font-bold text-2xl mb-5">
                Better Model Accuracy
              </h3>

              <p className="text-gray-600 leading-8">

                High-quality annotations allow AI models to correctly
                identify objects, understand complex scenes, reduce false
                positives, and improve prediction confidence across
                real-world datasets.

              </p>

            </div>

            <div className="bg-white rounded-xl border p-8">

              <h3 className="font-bold text-2xl mb-5">
                Faster AI Development
              </h3>

              <p className="text-gray-600 leading-8">

                Clean, consistent datasets reduce model retraining,
                shorten development cycles, improve validation accuracy,
                and accelerate deployment into production environments.

              </p>

            </div>

            <div className="bg-white rounded-xl border p-8">

              <h3 className="font-bold text-2xl mb-5">
                Scalable Machine Learning
              </h3>

              <p className="text-gray-600 leading-8">

                Professional annotation enables organizations to scale
                from thousands to millions of images while maintaining
                consistent labeling quality across every dataset.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= AI APPLICATIONS ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-6">

              Image Annotation Applications

            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">

              Image annotation powers nearly every modern computer vision
              application across industries.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">

              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=900&q=80"
                alt="Autonomous vehicle AI"
                className="h-52 w-full object-cover"
                loading="lazy"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl mb-3">
                  Autonomous Driving
                </h3>

                <p className="text-gray-600">

                  Lane detection, traffic signs,
                  pedestrians, vehicles,
                  road markings, LiDAR,
                  and ADAS systems.

                </p>

              </div>

            </div>

            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">

              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                alt="Medical imaging annotation"
                className="h-52 w-full object-cover"
                loading="lazy"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl mb-3">
                  Healthcare AI
                </h3>

                <p className="text-gray-600">

                  Medical imaging,
                  tumor segmentation,
                  X-ray analysis,
                  MRI annotation,
                  and diagnostics.

                </p>

              </div>

            </div>

            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">

              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80"
                alt="Retail computer vision"
                className="h-52 w-full object-cover"
                loading="lazy"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl mb-3">
                  Retail AI
                </h3>

                <p className="text-gray-600">

                  Shelf monitoring,
                  product recognition,
                  cashierless checkout,
                  OCR,
                  and inventory analytics.

                </p>

              </div>

            </div>

            <div className="bg-white border rounded-xl overflow-hidden shadow-sm">

              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
                alt="Agriculture computer vision"
                className="h-52 w-full object-cover"
                loading="lazy"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl mb-3">
                  Agriculture AI
                </h3>

                <p className="text-gray-600">

                  Crop detection,
                  weed recognition,
                  drone imagery,
                  yield prediction,
                  and disease detection.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Why Choose Annotexia */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
              Why Annotexia
            </span>

            <h2 className="text-4xl font-bold mt-5 mb-5">
              Why Companies Choose Annotexia for Image Annotation
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine experienced annotation professionals, AI-assisted
              workflows, and multi-level quality assurance to deliver
              enterprise-grade computer vision datasets.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl border p-8">
              <h3 className="text-xl font-semibold mb-4">
                99%+ Annotation Accuracy
              </h3>

              <p className="text-gray-600">
                Every dataset undergoes multiple QA stages to ensure
                consistency, precision, and annotation guideline
                compliance.
              </p>
            </div>

            <div className="bg-white rounded-xl border p-8">
              <h3 className="text-xl font-semibold mb-4">
                Scalable Annotation Teams
              </h3>

              <p className="text-gray-600">
                From pilot projects to millions of images, our dedicated
                teams scale according to your project requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl border p-8">
              <h3 className="text-xl font-semibold mb-4">
                Secure Data Handling
              </h3>

              <p className="text-gray-600">
                NDA compliance, secure infrastructure, confidential
                workflows, and enterprise-ready security practices.
              </p>
            </div>

            <div className="bg-white rounded-xl border p-8">
              <h3 className="text-xl font-semibold mb-4">
                Tool Agnostic
              </h3>

              <p className="text-gray-600">
                Experience with CVAT, Labelbox, Label Studio,
                SuperAnnotate, V7, Roboflow, and custom annotation
                platforms.
              </p>
            </div>

            <div className="bg-white rounded-xl border p-8">
              <h3 className="text-xl font-semibold mb-4">
                Flexible Output Formats
              </h3>

              <p className="text-gray-600">
                Deliver datasets in COCO, YOLO, Pascal VOC, JSON,
                XML, CSV, Mask PNG, and custom formats.
              </p>
            </div>

            <div className="bg-white rounded-xl border p-8">
              <h3 className="text-xl font-semibold mb-4">
                Dedicated Project Managers
              </h3>

              <p className="text-gray-600">
                Regular communication, milestone tracking, and transparent
                reporting throughout your annotation project.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-5">
              Frequently Asked Questions
            </h2>

            <p className="text-lg text-gray-600">
              Common questions about professional image annotation services.
            </p>
          </div>

          <div className="space-y-6">

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                What is image annotation?
              </h3>

              <p className="text-gray-600">
                Image annotation is the process of labeling objects,
                regions, landmarks, or pixels within images so AI and
                machine learning models can recognize and understand
                visual information.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Which annotation formats do you support?
              </h3>

              <p className="text-gray-600">
                We support COCO, YOLO, Pascal VOC, JSON, XML,
                segmentation masks, CSV, and custom client formats.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                Can you annotate medical or industrial datasets?
              </h3>

              <p className="text-gray-600">
                Yes. Our teams work on healthcare imaging,
                manufacturing inspection, retail, agriculture,
                autonomous vehicles, robotics, sports analytics,
                and many other industries.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-xl mb-3">
                How do you ensure annotation quality?
              </h3>

              <p className="text-gray-600">
                We implement guideline reviews, multi-stage quality
                checks, expert validation, random audits, and final QA
                before every dataset delivery.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Build High-Quality Image Datasets?
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Whether you're developing AI for healthcare, autonomous
            vehicles, agriculture, robotics, retail, or computer vision,
            Annotexia delivers accurate, scalable, and enterprise-ready
            image annotation services tailored to your project.
          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <a
              href="/contact"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get a Free Consultation
            </a>

            <a
              href="/services"
              className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Explore All Services
            </a>

          </div>

        </div>
      </section>
      </main>
  );
}