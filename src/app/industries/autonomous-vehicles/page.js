import Image from "next/image";
import Link from "next/link";
import {
  Car,
  ShieldCheck,
  Cpu,
  Route,
  Camera,
  ScanSearch,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title:
    "Autonomous Vehicle Data Annotation Services | LiDAR Annotation | Annotexia",

  description:
    "Enterprise autonomous vehicle annotation services including LiDAR annotation, 3D point cloud labeling, camera annotation, sensor fusion, lane detection, traffic sign recognition, semantic segmentation, and ADAS training datasets.",

  keywords: [
    "Autonomous Vehicle Annotation",
    "LiDAR Annotation",
    "3D Point Cloud Annotation",
    "ADAS Annotation",
    "Autonomous Driving Dataset",
    "Self Driving Car Annotation",
    "Road Scene Annotation",
    "Lane Detection Annotation",
    "Traffic Sign Annotation",
    "Computer Vision Dataset",
  ],
};

export default function AutonomousVehiclesPage() {
  return (
    <main className="overflow-hidden">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-28">

        <div className="absolute inset-0 opacity-10">

          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500 blur-3xl"></div>

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500 blur-3xl"></div>

        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 px-5 py-2 rounded-full border border-cyan-400/20 mb-8">

                <Car className="w-5 h-5" />

                Autonomous Driving AI

              </span>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">

                Autonomous Vehicle

                <span className="block text-cyan-400">

                  Data Annotation Services

                </span>

              </h1>

              <p className="mt-8 text-xl leading-9 text-slate-300">

                Build safer autonomous driving systems with
                enterprise-grade AI training datasets.

                Annotexia provides professional
                <strong className="text-white">
                  {" "}LiDAR annotation,
                </strong>

                <strong className="text-white">
                  {" "}3D point cloud labeling,
                </strong>

                <strong className="text-white">
                  {" "}camera annotation,
                </strong>

                <strong className="text-white">
                  {" "}sensor fusion,
                </strong>

                <strong className="text-white">
                  {" "}lane detection,
                </strong>

                <strong className="text-white">
                  {" "}traffic sign recognition
                </strong>

                and ADAS dataset creation for next-generation autonomous vehicles.

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link
                  href="/contact"
                  className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 rounded-xl text-white font-semibold transition"
                >

                  Request Free Sample

                </Link>

                <Link
                  href="/contact"
                  className="px-8 py-4 border border-white/20 rounded-xl text-white hover:bg-white/10 transition flex items-center gap-2"
                >

                  Talk to an Expert

                  <ArrowRight size={18} />

                </Link>

              </div>

              {/* Trust */}

              <div className="grid grid-cols-2 gap-6 mt-14">

                <div className="flex items-center gap-3 text-white">

                  <ShieldCheck className="text-cyan-400" />

                  NDA Protected

                </div>

                <div className="flex items-center gap-3 text-white">

                  <CheckCircle2 className="text-cyan-400" />

                  Multi-Level QA

                </div>

                <div className="flex items-center gap-3 text-white">

                  <Cpu className="text-cyan-400" />

                  Enterprise Scale

                </div>

                <div className="flex items-center gap-3 text-white">

                  <Route className="text-cyan-400" />

                  Fast Delivery

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <Image
                src="/images/industries/autonomous/hero-autonomous.avif"
                width={900}
                height={700}
                alt="Autonomous vehicle using AI computer vision with LiDAR and sensor fusion technology"
                className="rounded-3xl shadow-2xl border border-white/10 hover:scale-[1.02] transition duration-500"
                priority
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* STORY */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <Image
                src="/images/industries/autonomous/ai-driving.avif"
                width={800}
                height={700}
                alt="AI powered autonomous vehicle analyzing road scene with object detection"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="text-cyan-600 font-semibold uppercase tracking-widest">

                The Future Begins With Data

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Every Safe Journey Starts
                With Millions of Accurate Annotations

              </h2>

              <p className="text-gray-600 leading-9 text-lg mb-8">

                Imagine an autonomous vehicle approaching one of the busiest intersections in a city.

                A cyclist suddenly changes lanes.
                A pedestrian steps onto the crosswalk.
                The traffic signal switches from green to yellow.

                Within milliseconds, the vehicle's AI must understand everything happening around it and make the safest possible decision.

              </p>

              <p className="text-gray-600 leading-9 text-lg mb-8">

                But before artificial intelligence can recognize a pedestrian, detect a traffic sign, predict vehicle movement, or safely navigate through complex environments, it must first learn from millions of accurately annotated images, videos, LiDAR point clouds, and sensor datasets.

              </p>

              <p className="text-gray-600 leading-9 text-lg">

                That's where Annotexia comes in.

                We help autonomous driving companies transform raw sensor data into high-quality AI training datasets that improve perception models, increase object detection accuracy, and accelerate autonomous vehicle development.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* WHY ANNOTATION MATTERS */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto">

            <span className="text-cyan-600 uppercase tracking-widest font-semibold">

              Why Data Annotation Matters

            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">

              AI Can Only Be As Intelligent As
              The Data It Learns From

            </h2>

            <p className="text-lg text-gray-600 leading-9">

              High-quality annotation is the foundation of every successful autonomous driving system.
              Accurate labels enable AI models to understand road environments, classify objects,
              recognize lane boundaries, detect traffic signs, avoid collisions,
              predict object movement, and safely navigate real-world driving conditions.

              Poor annotations lead to unreliable perception models, inaccurate predictions,
              and safety risks. That's why enterprise AI companies invest heavily in professional
              annotation workflows with rigorous quality assurance.

            </p>

          </div>

        </div>

      </section>
      {/* ===================================================== */}
      {/* ANNOTATION SERVICES */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="text-cyan-600 uppercase tracking-widest font-semibold">
              Our Expertise
            </span>

            <h2 className="text-5xl font-bold mt-5 mb-6">
              Autonomous Vehicle Annotation Services
            </h2>

            <p className="text-lg text-gray-600 leading-9">
              From camera images to complex LiDAR point clouds, Annotexia
              delivers enterprise-grade annotation services that power
              perception models for autonomous driving, robotics, ADAS,
              and intelligent transportation systems.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {[
              {
                title: "Bounding Box Annotation",
                image: "/images/industries/autonomous/road-scene.avif",
                desc: "High-quality object detection for vehicles, pedestrians, bicycles, motorcycles, buses, trucks, and roadside infrastructure.",
              },
              {
                title: "Semantic Segmentation",
                image: "/images/industries/autonomous/segmentation.webp",
                desc: "Pixel-level segmentation for roads, sidewalks, lane markings, vegetation, buildings, sky, and driving environments.",
              },
              {
                title: "Instance Segmentation",
                image: "/images/industries/autonomous/city-driving.webp",
                desc: "Separate every object individually for advanced perception and scene understanding.",
              },
              {
                title: "LiDAR Annotation",
                image: "/images/industries/autonomous/lidar.avif",
                desc: "3D point cloud annotation for autonomous vehicles, robotics, and intelligent navigation systems.",
              },
              {
                title: "Sensor Fusion",
                image: "/images/industries/autonomous/sensor-fusion.webp",
                desc: "Synchronize LiDAR, RGB cameras, GPS, IMU, and radar datasets into a unified AI training dataset.",
              },
              {
                title: "Lane Detection",
                image: "/images/industries/autonomous/lane-marking.webp",
                desc: "Lane boundaries, road edges, centerlines, intersections, and driving path annotations.",
              },
              {
                title: "Traffic Sign Recognition",
                image: "/images/industries/autonomous/road-traffic-sign.avif",
                desc: "Label speed limits, warning signs, traffic signals, road markings, and directional indicators.",
              },
              {
                title: "Vehicle Tracking",
                image: "/images/industries/autonomous/vehicle-tracking.webp",
                desc: "Multi-object tracking across video frames for trajectory prediction and autonomous navigation.",
              },
              {
                title: "Pedestrian Annotation",
                image: "/images/industries/autonomous/pedestrian.webp",
                desc: "Pedestrian detection, pose estimation, movement prediction, and vulnerable road user labeling.",
              },
              {
                title: "Cuboid Annotation",
                image: "/images/industries/autonomous/pointcloud.webp",
                desc: "3D cuboid annotation for precise localization and spatial understanding of surrounding objects.",
              },
              {
                title: "Road Scene Annotation",
                image: "/images/industries/autonomous/highway.webp",
                desc: "Comprehensive urban and highway scene labeling to improve AI perception accuracy.",
              },
              {
                title: "ADAS Dataset Labeling",
                image: "/images/industries/autonomous/adas.webp",
                desc: "Training datasets for Adaptive Cruise Control, Lane Keeping Assist, Collision Avoidance, and Smart Parking.",
              },
            ].map((service) => (

              <div
                key={service.title}
                className="bg-white rounded-3xl shadow-lg overflow-hidden border hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >

                <Image
                  src={service.image}
                  width={500}
                  height={320}
                  alt={service.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-7">

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

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-cyan-600 uppercase tracking-widest font-semibold">

              Industries & Applications

            </span>

            <h2 className="text-5xl font-bold mt-5">

              AI Applications We Support

            </h2>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              "Self Driving Cars",
              "Robotaxis",
              "ADAS Systems",
              "Smart Transportation",
              "Autonomous Trucks",
              "Warehouse Robotics",
              "Agricultural Vehicles",
              "Mining Equipment",
              "Construction Vehicles",
              "Delivery Robots",
              "Industrial Automation",
              "Defense Robotics",
            ].map((item) => (

              <div
                key={item}
                className="bg-white rounded-2xl shadow-md p-8 text-center hover:bg-cyan-600 hover:text-white transition duration-300"
              >

                <Car className="mx-auto w-12 h-12 mb-5" />

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
                src="/images/industries/autonomous/lidar.avif"
                width={800}
                height={700}
                alt="LiDAR Point Cloud Annotation Services"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="text-cyan-600 uppercase tracking-widest font-semibold">

                Dataset Expertise

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                We Annotate Every Sensor That Powers Autonomous AI

              </h2>

              <p className="text-gray-600 text-lg leading-9 mb-8">

                Modern autonomous vehicles rely on multiple sensors working together.
                Our annotation specialists create high-quality training datasets for every
                major sensor used in perception systems.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "RGB Camera Images",
                  "Stereo Cameras",
                  "LiDAR Point Clouds",
                  "Radar Data",
                  "Thermal Images",
                  "Drone Imagery",
                  "Dashcam Videos",
                  "360° Camera Data",
                  "Sensor Fusion Data",
                  "GPS + IMU Data",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle2 className="text-cyan-500" />

                    <span className="text-gray-700 text-lg">

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

              Our Annotation Process

            </h2>

            <p className="text-slate-300 mt-6 max-w-3xl mx-auto text-lg leading-9">

              Every autonomous driving project follows a structured workflow
              designed to maximize annotation accuracy, consistency, scalability,
              and delivery speed.

            </p>

          </div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8">

            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "Understand dataset structure, annotation guidelines, AI model objectives, and delivery format.",
              },
              {
                step: "02",
                title: "Pilot Annotation",
                desc: "Prepare a small sample dataset for client approval before production begins.",
              },
              {
                step: "03",
                title: "Production",
                desc: "Dedicated annotation specialists process datasets following detailed guidelines.",
              },
              {
                step: "04",
                title: "Quality Review",
                desc: "Multiple reviewers verify annotation quality and consistency.",
              },
              {
                step: "05",
                title: "Client Validation",
                desc: "Clients review pilot samples before final delivery.",
              },
              {
                step: "06",
                title: "Final Delivery",
                desc: "Datasets delivered in COCO, YOLO, KITTI, JSON, XML or custom formats.",
              },
            ].map((item) => (

              <div
                key={item.step}
                className="relative bg-slate-900 rounded-3xl p-8 border border-slate-800 hover:border-cyan-500 transition"
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

                Every Annotation Goes Through
                Multiple Quality Checks

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Quality is the foundation of successful autonomous driving AI.
                Even small annotation inconsistencies can significantly reduce
                perception model accuracy.

                That's why every dataset produced by Annotexia passes through a
                rigorous multi-stage quality assurance workflow.

              </p>

              <div className="space-y-6">

                {[
                  "Primary Annotation by trained specialists",
                  "Peer Review by senior annotators",
                  "Dedicated Quality Assurance review",
                  "Random quality audits",
                  "Client feedback integration",
                  "Final validation before delivery",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex gap-4 items-start"
                  >

                    <CheckCircle2 className="text-cyan-500 mt-1" />

                    <p className="text-lg text-gray-700">

                      {item}

                    </p>

                  </div>

                ))}

              </div>

            </div>

            <div>

              <Image
                src="/images/industries/autonomous/quality.avif"
                width={800}
                height={700}
                alt="Quality assurance for autonomous vehicle annotation"
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

          <div className="text-center mb-16">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Delivery Formats

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Annotation Formats We Support

            </h2>

          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">

            {[
              "COCO",
              "YOLO",
              "KITTI",
              "Pascal VOC",
              "JSON",
              "XML",
              "CSV",
              "TXT",
              "Label Studio",
              "CVAT",
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

            <h2 className="text-5xl font-bold mt-5">

              Trusted Annotation Partner
              For AI Companies

            </h2>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                title: "99% Annotation Accuracy",
                desc: "Multi-level quality assurance ensures highly reliable datasets.",
              },
              {
                title: "Enterprise Security",
                desc: "NDA protection and secure annotation workflows.",
              },
              {
                title: "Scalable Workforce",
                desc: "From thousands to millions of images and frames.",
              },
              {
                title: "Fast Turnaround",
                desc: "Efficient project management with predictable delivery timelines.",
              },
              {
                title: "Dedicated Project Manager",
                desc: "One communication point throughout the project.",
              },
              {
                title: "Flexible Team Size",
                desc: "Scale resources according to project requirements.",
              },
              {
                title: "Custom Annotation Guidelines",
                desc: "Every project follows your exact annotation standards.",
              },
              {
                title: "Free Pilot Project",
                desc: "Evaluate our annotation quality before committing to a larger engagement.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="group bg-white rounded-3xl border p-8 hover:bg-cyan-600 hover:text-white hover:-translate-y-2 transition-all duration-300 shadow-lg"
              >

                <ShieldCheck className="w-10 h-10 mb-6 text-cyan-500 group-hover:text-white" />

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

                Multi-QA

              </h3>

              <p className="mt-4 text-lg">

                Review Process

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

                  Test Our Annotation Quality
                  Before You Hire Us

                </h2>

                <p className="text-xl leading-9 text-cyan-100 mb-10">

                  Choosing the right annotation partner is important.
                  That's why Annotexia offers a
                  <strong className="text-white">
                    {" "}FREE sample dataset annotation{" "}
                  </strong>
                  so your team can evaluate our quality, consistency,
                  turnaround time, and communication before starting a project.

                </p>

                <ul className="space-y-4 mb-10">

                  {[
                    "No hidden charges",
                    "No long-term commitment",
                    "Enterprise quality review",
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

                  Request Your Free Sample

                </Link>

              </div>

              <div>

                <Image
                  src="/images/industries/autonomous/cta-autonomous.avif"
                  width={900}
                  height={800}
                  alt="Autonomous vehicle AI dataset quality assurance"
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

              Questions Our Clients Ask

            </h2>

          </div>

          <div className="space-y-8">

            {[
              {
                q: "How can we trust Annotexia with our autonomous vehicle datasets?",
                a: "We follow strict confidentiality agreements (NDA), secure workflows, and multi-level quality assurance. Every project is handled with enterprise-level data security and dedicated project management.",
              },
              {
                q: "Can we test your annotation quality before starting a project?",
                a: "Yes. We provide a FREE sample annotation service so you can evaluate our quality, consistency, turnaround time, and communication without any obligation or cost.",
              },
              {
                q: "Which annotation formats do you support?",
                a: "We deliver datasets in COCO, YOLO, KITTI, Pascal VOC, JSON, XML, CSV, CVAT, Label Studio, and custom client-specific formats.",
              },
              {
                q: "Can you annotate LiDAR point clouds?",
                a: "Absolutely. We provide professional 3D point cloud annotation, cuboid labeling, semantic segmentation, and sensor fusion annotation for autonomous driving systems.",
              },
              {
                q: "Can your team scale for large enterprise projects?",
                a: "Yes. Our workflow is designed to support projects ranging from thousands to millions of images, videos, and LiDAR frames while maintaining consistent quality.",
              },
              {
                q: "Do you support custom annotation guidelines?",
                a: "Yes. We strictly follow client-provided annotation guidelines or help create detailed labeling instructions for your AI project.",
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

            Professional Autonomous Vehicle Annotation Services for AI Training

          </h2>

          <div className="space-y-8 text-lg leading-9 text-gray-600">

            <p>

              Autonomous vehicles depend on high-quality training datasets to
              accurately understand complex road environments. Every perception
              model used in self-driving cars, Advanced Driver Assistance Systems
              (ADAS), delivery robots, autonomous trucks, and intelligent
              transportation systems learns from professionally annotated data.
              Annotexia provides enterprise-grade autonomous vehicle annotation
              services that improve model accuracy, reduce training errors, and
              accelerate AI development.

            </p>

            <p>

              Our experienced annotation specialists work with camera images,
              LiDAR point clouds, radar data, thermal imagery, and sensor fusion
              datasets to produce highly accurate labels for object detection,
              semantic segmentation, lane detection, traffic sign recognition,
              pedestrian tracking, vehicle tracking, and road scene
              understanding. Every annotation follows detailed project
              guidelines and passes multiple quality assurance reviews before
              delivery.

            </p>

            <p>

              Whether your organization is developing autonomous driving
              software, ADAS solutions, fleet intelligence platforms, warehouse
              robotics, agricultural automation, or industrial autonomous
              vehicles, our scalable workforce can support projects of any size.
              We deliver datasets in COCO, YOLO, KITTI, JSON, XML, Pascal VOC,
              CVAT, Label Studio, and custom formats to integrate seamlessly
              into your existing machine learning pipeline.

            </p>

            <p>

              At Annotexia, we believe long-term partnerships are built on
              transparency and quality. That is why we offer a free sample
              annotation service, allowing you to evaluate our workflow,
              annotation accuracy, turnaround time, and communication before
              committing to a larger engagement. Our mission is to become a
              trusted annotation partner for organizations building the next
              generation of intelligent mobility solutions.

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

            Ready to Build Better Autonomous Driving AI?

          </h2>

          <p className="text-xl leading-9 text-slate-300 max-w-3xl mx-auto mb-10">

            Partner with Annotexia for enterprise-grade autonomous vehicle
            annotation services, LiDAR labeling, sensor fusion datasets,
            semantic segmentation, and high-quality AI training data.

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