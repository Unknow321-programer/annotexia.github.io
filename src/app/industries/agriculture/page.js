import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title:
    "Agriculture AI Annotation Services | Crop Monitoring & Precision Farming | Annotexia",

  description:
    "Professional agriculture AI annotation services including crop monitoring, plant disease detection, weed detection, drone image annotation, satellite imagery labeling, precision farming datasets, and agricultural machine learning data labeling.",

  keywords: [
    "Agriculture AI Annotation",
    "Crop Annotation Services",
    "Plant Disease Annotation",
    "Drone Agriculture Annotation",
    "Agriculture Image Annotation",
    "Precision Farming Annotation",
    "Satellite Image Annotation",
    "Agricultural Data Labeling",
    "Computer Vision Agriculture",
    "Agritech Annotation Company",
  ],
};

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1800&q=80"
            alt="Agriculture AI Annotation"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/75" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-3xl">

            <span className="inline-flex bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase">

              Agriculture AI Training Data

            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-8 leading-tight">

              Agriculture &
              Precision Farming
              Annotation Services

            </h1>

            <p className="text-xl text-slate-300 leading-9 mt-8">

              Transform drone imagery, satellite imagery,
              field photographs, and agricultural datasets into
              accurate AI training data for precision farming,
              crop monitoring, disease detection, agricultural robotics,
              yield prediction, and next-generation AgriTech solutions.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold text-white transition"
              >

                Request Free Sample

                <ArrowRight size={20} />

              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl text-white transition"
              >

                Explore Services

              </Link>

            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-16 text-white">

              <div>

                <h3 className="text-4xl font-bold">

                  99%

                </h3>

                <p className="text-slate-300 mt-2">

                  Annotation Accuracy

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  10M+

                </h3>

                <p className="text-slate-300 mt-2">

                  Images Scalable

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  24/7

                </h3>

                <p className="text-slate-300 mt-2">

                  Dedicated Support

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* STORY */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Helping Agriculture Become Smarter

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Every Intelligent Farm
                Starts with
                Reliable Data

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Agriculture is experiencing one of the largest digital
                transformations in history. Farmers, agritech startups,
                research institutions, and global food companies are adopting
                Artificial Intelligence to maximize crop yields, reduce operational
                costs, improve sustainability, and make better farming decisions.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Modern AI systems analyze thousands of aerial drone images,
                satellite imagery, greenhouse photographs, and field inspection
                images every day. However, these intelligent systems cannot learn
                without accurately annotated datasets.

              </p>

              <p className="text-lg leading-9 text-gray-600">

                At Annotexia, we partner with agriculture technology companies
                to create enterprise-quality training datasets that power
                computer vision models capable of identifying crop diseases,
                monitoring plant health, detecting weeds, estimating crop yield,
                tracking irrigation systems, and automating farm operations.

              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-10">

                {[
                  "Crop Monitoring",
                  "Plant Disease Detection",
                  "Weed Detection",
                  "Drone Mapping",
                  "Fruit Detection",
                  "Yield Prediction",
                  "Livestock Monitoring",
                  "Satellite Image Annotation",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2 className="text-cyan-500" />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80"
                alt="Agriculture AI"
                width={700}
                height={800}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>
      {/* ====================================================== */}
      {/* AGRICULTURE AI SERVICES */}
      {/* ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Agriculture AI Services

            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">

              Complete Annotation Solutions for
              Smart Agriculture

            </h2>

            <p className="text-lg leading-9 text-gray-600">

              From drone imagery to satellite imagery, greenhouse monitoring,
              crop disease detection and agricultural robotics, Annotexia
              provides end-to-end annotation services that enable AI models
              to understand farms with exceptional accuracy.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                title: "Crop Detection",
                desc: "Identify and label crops, plantations and vegetation for precision farming AI."
              },
              {
                title: "Plant Disease Annotation",
                desc: "Detect diseases, leaf infections, discoloration, pest damage and nutrient deficiencies."
              },
              {
                title: "Weed Detection",
                desc: "Create datasets that distinguish crops from weeds for automated spraying systems."
              },
              {
                title: "Fruit Detection & Counting",
                desc: "Annotate fruits for harvesting robots, yield estimation and inventory management."
              },
              {
                title: "Drone Image Annotation",
                desc: "High-resolution aerial image annotation for precision agriculture and farm analytics."
              },
              {
                title: "Satellite Image Labeling",
                desc: "Land cover classification, vegetation analysis and remote sensing datasets."
              },
              {
                title: "Field Segmentation",
                desc: "Pixel-perfect segmentation of crop fields, irrigation systems and farming zones."
              },
              {
                title: "Livestock Monitoring",
                desc: "Detect cattle, poultry, sheep and livestock for smart farm management."
              },
              {
                title: "Yield Prediction",
                desc: "Training datasets for estimating production volumes and crop maturity."
              },
              {
                title: "Agricultural Machinery",
                desc: "Annotate tractors, harvesters, irrigation equipment and autonomous farm vehicles."
              },
              {
                title: "Greenhouse Monitoring",
                desc: "AI datasets for indoor farming, vertical farming and greenhouse automation."
              },
              {
                title: "Multispectral & Hyperspectral Annotation",
                desc: "Advanced annotation for vegetation health analysis using multispectral imagery."
              }

            ].map((item) => (

              <div
                key={item.title}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="w-16 h-16 rounded-xl bg-cyan-50 flex items-center justify-center mb-6">

                  🌱

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

      {/* ====================================================== */}
      {/* LARGE IMAGE SECTION */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80"
                alt="Precision Agriculture AI"
                width={700}
                height={900}
                className="rounded-3xl shadow-2xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Precision Farming

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Turning Agricultural
                Images Into
                Actionable AI Insights

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Every drone flight, satellite image, greenhouse inspection,
                and field survey generates valuable agricultural information.
                Our annotation specialists transform these raw images into
                structured datasets that enable AI systems to identify crop
                health, estimate yield, detect weeds, monitor irrigation,
                and optimize farming operations.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-8">

                Whether you're developing precision agriculture software,
                autonomous farming robots, smart irrigation platforms,
                or crop disease detection systems, high-quality annotated
                datasets are the foundation of accurate machine learning
                models.

              </p>

              <div className="space-y-5">

                {[
                  "Drone Imagery Annotation",
                  "Satellite Image Analysis",
                  "Precision Farming AI",
                  "Smart Irrigation Systems",
                  "Agricultural Robotics",
                  "Crop Health Monitoring",

                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <CheckCircle2 className="text-cyan-500" />

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
      {/* ====================================================== */}
      {/* AGRICULTURE AI APPLICATIONS */}
      {/* ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              AI Applications

            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">

              Supporting Every Stage of
              Modern Agriculture

            </h2>

            <p className="text-lg text-gray-600 leading-9">

              Agriculture Artificial Intelligence is rapidly transforming
              how farms monitor crops, manage resources, predict yields,
              and improve productivity. Our annotation services support
              AI systems across every stage of the agricultural lifecycle.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Precision Farming",
              "Crop Health Monitoring",
              "Plant Disease Detection",
              "Weed Detection",
              "Fruit Counting",
              "Yield Prediction",
              "Greenhouse Automation",
              "Drone Mapping",
              "Satellite Monitoring",
              "Livestock Monitoring",
              "Agricultural Robotics",
              "Smart Irrigation",
            ].map((item) => (

              <div
                key={item}
                className="bg-white rounded-2xl border p-8 hover:shadow-xl transition"
              >

                <div className="text-4xl mb-5">

                  🌾

                </div>

                <h3 className="font-bold text-xl">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* ANNOTATION TYPES */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Annotation Expertise

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Every Annotation Type
                Required for
                Agriculture AI

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-10">

                Different agricultural AI models require different annotation
                techniques. Our specialists create precise datasets using
                industry-standard annotation methods tailored to your
                machine learning objectives.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "Bounding Boxes",
                  "Polygon Annotation",
                  "Semantic Segmentation",
                  "Instance Segmentation",
                  "Image Classification",
                  "Keypoint Annotation",
                  "3D Cuboids",
                  "LiDAR Annotation",
                  "Multispectral Images",
                  "Hyperspectral Images",
                  "Satellite Imagery",
                  "Drone Video Tracking",

                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2 className="text-cyan-500" />

                    <span>

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80"
                alt="Crop Disease Detection"
                width={700}
                height={850}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* DATASET FORMATS */}
      {/* ====================================================== */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-400 font-semibold">

              Dataset Formats

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Delivered In Your Preferred Format

            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {[
              "YOLO",
              "COCO",
              "Pascal VOC",
              "GeoJSON",
              "GeoTIFF",
              "JSON",
              "CSV",
              "XML",
              "CVAT",
              "Label Studio",

            ].map((item) => (

              <div
                key={item}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-cyan-600 transition"
              >

                <h3 className="font-semibold">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* WORKFLOW */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Our Workflow

            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">

              How We Deliver
              Enterprise Quality
              Datasets

            </h2>

          </div>

          <div className="grid md:grid-cols-5 gap-8">

            {[
              {
                step: "01",
                title: "Requirement Analysis",
              },
              {
                step: "02",
                title: "Pilot Annotation",
              },
              {
                step: "03",
                title: "Production Labeling",
              },
              {
                step: "04",
                title: "Multi-Level QA",
              },
              {
                step: "05",
                title: "Dataset Delivery",
              },

            ].map((item) => (

              <div
                key={item.step}
                className="text-center"
              >

                <div className="w-20 h-20 mx-auto rounded-full bg-cyan-500 text-white flex items-center justify-center text-2xl font-bold">

                  {item.step}

                </div>

                <h3 className="font-bold text-xl mt-6">

                  {item.title}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ====================================================== */}
      {/* WHY ANNOTEXIA */}
      {/* ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Why Annotexia

            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">

              Why Agriculture AI Companies
              Choose Annotexia

            </h2>

            <p className="text-lg text-gray-600 leading-9">

              Building successful agriculture AI solutions requires more than
              just annotations. It requires a partner who understands quality,
              scalability, security, and AI training data standards.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "99% Annotation Accuracy",
                desc: "Every dataset goes through multiple quality assurance reviews before delivery."
              },
              {
                title: "Agriculture Domain Experts",
                desc: "Experienced annotators familiar with crops, plants, irrigation systems, weeds and agricultural equipment."
              },
              {
                title: "Scalable Workforce",
                desc: "Whether your project contains 5,000 images or 5 million images, we scale seamlessly."
              },
              {
                title: "Fast Turnaround",
                desc: "Optimized production workflows ensure timely delivery without compromising quality."
              },
              {
                title: "Enterprise Security",
                desc: "Strict NDA compliance, secure infrastructure and confidential project handling."
              },
              {
                title: "Dedicated Project Manager",
                desc: "One point of contact throughout the project for transparent communication."
              }

            ].map((item) => (

              <div
                key={item.title}
                className="bg-white rounded-2xl border p-8 hover:shadow-xl transition"
              >

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

      {/* ====================================================== */}
      {/* FREE SAMPLE */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80"
                alt="Agriculture Dataset"
                width={700}
                height={850}
                className="rounded-3xl shadow-2xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Try Before You Commit

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Get Your First
                Sample Dataset
                Completely Free

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Choosing an annotation partner is an important decision.
                Instead of asking you to trust our claims, we invite you to
                experience our quality firsthand.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-10">

                Send us a small batch of your agriculture images,
                drone imagery, satellite images, or crop datasets.
                We'll annotate them completely free so you can
                evaluate our accuracy, consistency, and delivery
                speed before starting your full project.

              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition"
              >

                Request Free Sample Dataset

                <ArrowRight size={20} />

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* FAQ */}
      {/* ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-16">

            Frequently Asked Questions

          </h2>

          <div className="space-y-8">

            <div>

              <h3 className="text-2xl font-semibold mb-4">

                How can we trust Annotexia?

              </h3>

              <p className="text-gray-600 leading-8">

                We understand that selecting an annotation partner
                requires confidence. That's why we offer a completely
                free sample annotation service. You can evaluate our
                accuracy, consistency, communication, and turnaround
                time before committing to a larger engagement.

              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-4">

                Do you provide a free sample?

              </h3>

              <p className="text-gray-600 leading-8">

                Yes. We provide a free sample dataset so your team can
                verify annotation quality before placing a production order.

              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-4">

                Can you handle enterprise-scale agriculture datasets?

              </h3>

              <p className="text-gray-600 leading-8">

                Absolutely. Our scalable annotation workforce can process
                millions of images, drone videos, satellite imagery,
                and agricultural datasets while maintaining strict
                quality standards.

              </p>

            </div>

            <div>

              <h3 className="text-2xl font-semibold mb-4">

                Which annotation formats do you support?

              </h3>

              <p className="text-gray-600 leading-8">

                We support COCO, YOLO, Pascal VOC, GeoJSON,
                GeoTIFF, CVAT, Label Studio, XML, JSON,
                CSV and custom formats.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* FINAL CTA */}
      {/* ====================================================== */}

      <section className="bg-slate-900 text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">

            Ready to Build
            Next-Generation
            Agriculture AI?

          </h2>

          <p className="text-xl text-slate-300 leading-9 mb-10">

            Whether you're developing precision farming software,
            drone analytics platforms, crop monitoring solutions,
            or autonomous agricultural robots, Annotexia provides
            the high-quality training data your AI models need
            to achieve production-level performance.

          </p>

          <div className="flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
            >

              Request Free Consultation

            </Link>

            <Link
              href="/services"
              className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl transition"
            >

              Explore Services

            </Link>

          </div>

        </div>

      </section>
      </main>
  )
};