import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title:
    "Robotics AI Annotation Services | Robot Vision & Automation Training Data | Annotexia",

  description:
    "Professional robotics AI annotation services including robot vision annotation, warehouse automation datasets, industrial robotics labeling, SLAM datasets, 3D bounding boxes, semantic segmentation, and AI training data for autonomous robots.",

  keywords: [
    "Robotics AI Annotation",
    "Robot Vision Annotation",
    "Warehouse Robotics Dataset",
    "Industrial Robotics Annotation",
    "Robot Perception Dataset",
    "Robot Navigation Annotation",
    "Autonomous Robot Training Data",
    "SLAM Dataset Annotation",
    "3D Bounding Box Annotation",
    "AI Data Labeling for Robotics",
  ],
};

export default function RoboticsAIPage() {
  return (
    <main className="min-h-screen">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="absolute inset-0">

          <Image
            src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=1800&q=80"
            alt="Robotics AI"
            fill
            className="object-cover opacity-20"
          />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-4xl">

            <span className="uppercase tracking-[5px] text-cyan-400 font-semibold">

              Robotics AI Annotation Services

            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-6 mb-8">

              High-Precision
              Training Data
              for Intelligent
              Robotics

            </h1>

            <p className="text-xl leading-10 text-slate-300 max-w-3xl">

              From warehouse robots and autonomous mobile robots (AMRs)
              to industrial automation, robotic manipulation, and service
              robots, Annotexia provides production-ready AI training
              datasets that enable robots to perceive, understand,
              navigate, and interact with the physical world accurately.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                href="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-xl font-semibold"
              >

                Request Free Sample

              </Link>

              <Link
                href="/services"
                className="border border-white/20 hover:bg-white/10 transition px-8 py-4 rounded-xl"
              >

                Explore Services

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* STORY */}
      {/* ===================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Why Robotics Needs Quality Data

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Teaching Robots
                to Understand
                the Real World

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Modern robots are no longer limited to repetitive factory
                operations. Today's intelligent robots navigate warehouses,
                assist surgeons, inspect infrastructure, collaborate with
                humans, deliver products, and perform complex industrial
                tasks autonomously.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                To achieve these capabilities, robotic systems rely heavily
                on Artificial Intelligence, Computer Vision, Sensor Fusion,
                and Machine Learning models trained using accurately
                annotated datasets.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-8">

                Every object a robot identifies, every obstacle it avoids,
                and every movement it performs begins with high-quality
                training data. Poor annotation leads to unreliable robot
                behavior, while precise annotation enables safer navigation,
                better manipulation, and improved decision-making.

              </p>

              <div className="space-y-5">

                {[
                  "Autonomous Navigation",
                  "Robot Vision",
                  "Obstacle Detection",
                  "Warehouse Automation",
                  "Industrial Robotics",
                  "Human-Robot Collaboration",

                ].map((item) => (

                  <div
                    key={item}
                    className="flex gap-4 items-center"
                  >

                    <CheckCircle2 className="text-cyan-500" />

                    <span className="text-lg">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1400&q=80"
                alt="Robot Vision"
                width={700}
                height={900}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* ROBOT PERCEPTION */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=80"
                alt="Robot Perception"
                width={700}
                height={850}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Robot Perception

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Helping Robots
                See, Understand
                and React

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Robot perception combines cameras, LiDAR, depth sensors,
                radar, and artificial intelligence to create a complete
                understanding of surrounding environments.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-8">

                Annotexia develops accurate perception datasets for robots
                performing navigation, localization, object recognition,
                inventory management, industrial inspection, agricultural
                automation, and collaborative manufacturing.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "Object Recognition",
                  "3D Perception",
                  "SLAM",
                  "Scene Understanding",
                  "Depth Estimation",
                  "Obstacle Detection",
                  "Localization",
                  "Motion Planning",

                ].map((item) => (

                  <div
                    key={item}
                    className="flex gap-3 items-center"
                  >

                    <CheckCircle2 className="text-cyan-500" />

                    <span>

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
      {/* ROBOTICS AI ANNOTATION SERVICES */}
      {/* ===================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Robotics Annotation Services

            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">

              Comprehensive Annotation
              Services for Robotics AI

            </h2>

            <p className="text-lg leading-9 text-gray-600">

              Robotics systems rely on precise perception and environmental
              understanding to operate safely and efficiently. Annotexia
              delivers production-quality datasets that improve robot vision,
              manipulation, localization, navigation, and autonomous decision-making.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                title: "Object Detection",
                desc: "Accurate labeling of machinery, pallets, shelves, humans, robots, tools, packages, and industrial assets for robotic perception."
              },
              {
                title: "Semantic Segmentation",
                desc: "Pixel-level segmentation enabling robots to understand complex environments and differentiate navigable areas."
              },
              {
                title: "Instance Segmentation",
                desc: "Separate multiple instances of identical objects for robotic manipulation and warehouse automation."
              },
              {
                title: "3D Bounding Box Annotation",
                desc: "High-precision 3D cuboid annotation for autonomous navigation, warehouse robotics, and industrial automation."
              },
              {
                title: "Robot Pose Estimation",
                desc: "Body keypoints and pose annotation supporting collaborative robots and human-robot interaction."
              },
              {
                title: "Grasp Point Annotation",
                desc: "Identify optimal pick-and-place positions enabling robotic arms to manipulate objects accurately."
              },
              {
                title: "Robot Navigation Dataset",
                desc: "Training datasets for localization, obstacle avoidance, mapping, and autonomous navigation."
              },
              {
                title: "SLAM Dataset Annotation",
                desc: "Accurate annotation supporting Simultaneous Localization and Mapping (SLAM) algorithms."
              },
              {
                title: "Warehouse Scene Annotation",
                desc: "Annotate shelves, pallets, inventory, forklifts, workers, conveyors, and storage environments."
              },
              {
                title: "Industrial Inspection",
                desc: "Detect manufacturing defects, damaged components, missing parts, and production anomalies."
              },
              {
                title: "Depth & Sensor Fusion",
                desc: "Combine RGB cameras, depth sensors, LiDAR, and IMU data into synchronized AI datasets."
              },
              {
                title: "Quality Assurance",
                desc: "Every robotics dataset undergoes multi-stage quality reviews to ensure production-ready accuracy."
              }

            ].map((service) => (

              <div
                key={service.title}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-xl bg-cyan-50 flex items-center justify-center text-3xl mb-6">

                  🤖

                </div>

                <h3 className="text-2xl font-bold mb-4">

                  {service.title}

                </h3>

                <p className="text-gray-600 leading-8">

                  {service.desc}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* WAREHOUSE AUTOMATION */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Warehouse Automation

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Training Intelligent
                Warehouse Robots
                for Faster Logistics

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Warehouse robotics has transformed logistics by automating
                inventory movement, package sorting, pallet handling, and
                real-time inventory tracking. These robots depend entirely
                on reliable computer vision datasets.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-8">

                Annotexia creates annotation datasets that enable warehouse
                robots to recognize packages, shelves, barcodes, workers,
                forklifts, autonomous vehicles, and warehouse infrastructure.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "Inventory Detection",
                  "Pallet Recognition",
                  "Shelf Detection",
                  "Barcode Reading",
                  "Forklift Detection",
                  "Worker Detection",
                  "Package Classification",
                  "AMR Navigation"

                ].map((item) => (

                  <div
                    key={item}
                    className="flex gap-3 items-center"
                  >

                    <CheckCircle2 className="text-cyan-500" />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                alt="Warehouse Robotics"
                width={700}
                height={850}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* INDUSTRIAL ROBOTICS */}
      {/* ===================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1400&q=80"
                alt="Industrial Robotics"
                width={700}
                height={850}
                className="rounded-3xl shadow-2xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Industrial Automation

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Building Reliable
                Industrial AI
                Systems

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Industrial robots perform welding, assembly, quality inspection,
                sorting, packaging, painting, and precision manufacturing.
                Accurate AI training datasets enable these robots to operate
                safely while increasing productivity.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-8">

                Our annotation specialists prepare high-quality datasets
                for industrial computer vision systems that improve robotic
                inspection, predictive maintenance, defect detection, and
                factory automation.

              </p>

              <div className="space-y-5">

                {[
                  "Manufacturing Inspection",
                  "Factory Automation",
                  "Assembly Line AI",
                  "Quality Control",
                  "Machine Vision",
                  "Industrial Defect Detection"

                ].map((item) => (

                  <div
                    key={item}
                    className="flex gap-4 items-center"
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
      {/* ===================================================== */}
      {/* ROBOTICS AI APPLICATIONS */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Applications

            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">

              Where Robotics AI
              Creates Business Value

            </h2>

            <p className="text-lg text-gray-600 leading-9">

              Our robotics annotation services support companies building
              next-generation autonomous systems across logistics,
              manufacturing, healthcare, agriculture, retail,
              construction, and smart infrastructure.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {[
              "Warehouse Automation",
              "Autonomous Mobile Robots",
              "Industrial Robots",
              "Factory Automation",
              "Pick & Place Robots",
              "Collaborative Robots (Cobots)",
              "Agricultural Robotics",
              "Inspection Robots",
              "Construction Robotics",
              "Healthcare Robotics",
              "Delivery Robots",
              "Service Robotics",

            ].map((item) => (

              <div
                key={item}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition"
              >

                <h3 className="font-bold text-xl">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* SUPPORTED FORMATS */}
      {/* ===================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20">

            <div>

              <h2 className="text-5xl font-bold mb-10">

                Supported Annotation
                Formats

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-10">

                We work with industry-standard robotics datasets and
                annotation platforms to integrate seamlessly into your
                machine learning pipeline.

              </p>

              <div className="grid grid-cols-2 gap-5">

                {[
                  "COCO",
                  "YOLO",
                  "Pascal VOC",
                  "CVAT",
                  "Label Studio",
                  "JSON",
                  "XML",
                  "CSV",
                  "KITTI",
                  "ROS",
                  "Point Cloud",
                  "Custom Formats"

                ].map((item) => (

                  <div
                    key={item}
                    className="border rounded-xl p-4 text-center font-semibold"
                  >

                    {item}

                  </div>

                ))}

              </div>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80"
                alt="Robot Dataset"
                width={700}
                height={850}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* WHY ANNOTEXIA */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <h2 className="text-5xl font-bold">

              Why Robotics Companies
              Choose Annotexia

            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                title: "Production-Ready Quality",
                desc: "Every robotics dataset undergoes structured quality assurance before delivery."
              },
              {
                title: "Scalable Workforce",
                desc: "From pilot datasets to millions of images and sensor frames."
              },
              {
                title: "Fast Delivery",
                desc: "Efficient workflows reduce project timelines without sacrificing quality."
              },
              {
                title: "Secure Infrastructure",
                desc: "Enterprise-grade confidentiality, NDA support, and secure project handling."
              },
              {
                title: "Dedicated Project Manager",
                desc: "Transparent communication throughout the annotation lifecycle."
              },
              {
                title: "Flexible Engagement",
                desc: "Hourly, project-based, dedicated teams, or enterprise partnerships."
              }

            ].map((item) => (

              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >

                <CheckCircle2
                  className="text-cyan-500 mb-5"
                  size={34}
                />

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

      {/* ===================================================== */}
      {/* FREE SAMPLE */}
      {/* ===================================================== */}

      <section className="py-28">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-cyan-600 rounded-3xl p-16 text-white text-center">

            <h2 className="text-5xl font-bold mb-8">

              Request a Free
              Sample Dataset

            </h2>

            <p className="text-xl leading-9 max-w-4xl mx-auto mb-12">

              Evaluate our annotation quality before starting your robotics
              AI project. We provide a free annotated sample so your team
              can verify accuracy, consistency, and workflow without
              any commitment.

            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">

              <div>

                <h3 className="font-bold text-2xl mb-4">

                  ✓ Free Sample

                </h3>

                <p>

                  Experience our production-quality annotation.

                </p>

              </div>

              <div>

                <h3 className="font-bold text-2xl mb-4">

                  ✓ No Obligation

                </h3>

                <p>

                  Evaluate quality before making a decision.

                </p>

              </div>

              <div>

                <h3 className="font-bold text-2xl mb-4">

                  ✓ Enterprise Workflow

                </h3>

                <p>

                  Receive the same quality used in production projects.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FAQ */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-20">

            Frequently Asked Questions

          </h2>

          <div className="space-y-8">

            {[
              {
                q: "Can you annotate datasets for warehouse robots?",
                a: "Yes. We annotate shelves, pallets, inventory, workers, forklifts, robots, and warehouse environments."
              },
              {
                q: "Do you support LiDAR and 3D robotics datasets?",
                a: "Yes. We provide LiDAR annotation, 3D cuboids, point cloud labeling, and sensor fusion datasets."
              },
              {
                q: "Can you annotate grasp points for robotic arms?",
                a: "Yes. We create grasp point datasets for robotic manipulation and pick-and-place automation."
              },
              {
                q: "Do you provide a free sample dataset?",
                a: "Yes. Every client can evaluate our annotation quality with a free sample before production."
              },
              {
                q: "Which annotation tools do you support?",
                a: "CVAT, Label Studio, Roboflow, SuperAnnotate, Labelbox, and custom platforms."
              },
              {
                q: "Can your team scale enterprise robotics projects?",
                a: "Absolutely. We support startups, research labs, and enterprise robotics companies worldwide."
              }

            ].map((faq) => (

              <div
                key={faq.q}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >

                <h3 className="font-bold text-2xl mb-4">

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

      <section className="py-28">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">

            Professional Robotics AI Annotation Services

          </h2>

          <div className="space-y-8 text-lg leading-9 text-gray-600">

            <p>

              Annotexia provides enterprise-grade robotics AI annotation services for autonomous robots, warehouse automation systems, industrial robotics, service robots, collaborative robots, agricultural robotics, and intelligent machine vision applications. Our annotation experts develop accurate AI training datasets that improve robot perception, navigation, localization, manipulation, obstacle avoidance, and autonomous decision-making.

            </p>

            <p>

              Our robotics annotation capabilities include object detection, semantic segmentation, instance segmentation, pose estimation, grasp point annotation, LiDAR labeling, 3D bounding boxes, robot navigation datasets, warehouse scene annotation, industrial inspection datasets, and SLAM annotation. Every dataset undergoes multiple quality assurance stages to ensure production-ready accuracy for machine learning applications.

            </p>

            <p>

              Whether you're developing autonomous mobile robots (AMRs), robotic arms, warehouse automation systems, factory inspection robots, delivery robots, or advanced industrial AI solutions, Annotexia delivers scalable, secure, and high-quality annotation services that accelerate robotics innovation.

            </p>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="bg-slate-900 text-white py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">

            Build Smarter Robots
            With Better
            Training Data

          </h2>

          <p className="text-xl text-slate-300 leading-9 max-w-3xl mx-auto mb-12">

            Accelerate robotics AI development with enterprise-grade
            annotation services for robot vision, autonomous navigation,
            warehouse automation, and industrial robotics.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
            >

              Request Free Sample

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

  );
}
