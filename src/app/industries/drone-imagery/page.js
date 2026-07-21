import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Plane,
  ScanSearch,
  Mountain,
  Map,
} from "lucide-react";

export const metadata = {
  title:
    "Drone & Aerial Imagery Annotation Services | Drone Image Labeling Company | Annotexia",

  description:
    "Professional Drone & Aerial Imagery Annotation Services including Drone Image Annotation, Aerial Object Detection, Building Extraction, Crop Monitoring, Remote Sensing, GIS Annotation, and AI Training Data for Computer Vision.",

  keywords: [
    "Drone Image Annotation",
    "Drone Annotation Services",
    "Aerial Image Annotation",
    "Remote Sensing Annotation",
    "Drone AI",
    "Geospatial AI",
    "GIS Annotation",
    "Satellite Image Annotation",
    "Crop Monitoring",
    "Drone Mapping",
    "Drone Dataset",
    "Aerial Dataset",
    "Construction Inspection AI",
    "Infrastructure Inspection",
  ],
};

export default function DroneAerialPage() {

  return (

    <main className="min-h-screen">

      {/* ==================================================== */}
      {/* HERO */}
      {/* ==================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 py-24">

        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold mb-8">

                <Plane className="w-5 h-5" />

                Enterprise Drone AI Annotation

              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight">

                Drone &

                <span className="block text-cyan-400">

                  Aerial Imagery

                </span>

                Annotation Services

              </h1>

              <p className="text-slate-300 text-xl leading-9 mt-10">

                Transform aerial imagery into AI-ready datasets with enterprise-grade
                drone annotation services. Annotexia helps organizations develop
                high-performance computer vision models for agriculture,
                construction, smart cities, environmental monitoring,
                infrastructure inspection, surveying, GIS mapping,
                and remote sensing applications.

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
                  "Free Sample Dataset",
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
                  src="/images/industries/drone/hero-drone.webp"
                  alt="Drone Annotation Services"
                  width={900}
                  height={850}
                  priority
                  className="w-full h-auto object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================== */}
      {/* STORY */}
      {/* ==================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <Image
                src="/images/industries/drone/aerial-story.webp"
                width={900}
                height={700}
                alt="Drone AI"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Why Drone Annotation Matters

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Building Intelligent
                Aerial Vision Systems

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                Modern drones collect enormous volumes of aerial imagery every day.
                However, raw aerial images alone cannot power Artificial Intelligence.

                To recognize roads, crops, buildings, power lines, solar farms,
                construction progress, disaster zones, or environmental changes,
                AI models require precisely annotated datasets.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-8">

                High-quality drone image annotation enables AI systems to understand
                complex aerial scenes with greater accuracy, allowing organizations
                to automate inspections, improve decision-making,
                reduce operational costs, and accelerate digital transformation.

              </p>

              <p className="text-lg text-gray-600 leading-9">

                Annotexia transforms drone imagery into structured AI training data
                using enterprise-quality annotation workflows trusted by
                computer vision teams across multiple industries.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==================================================== */}
      {/* INDUSTRY EXPERTISE */}
      {/* ==================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Industry Expertise

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Powering Next-Generation
              Drone AI

            </h2>

            <p className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto leading-9">

              We help organizations convert aerial imagery into production-ready
              datasets that improve object detection, mapping accuracy,
              geospatial intelligence, and autonomous inspection systems.

            </p>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              {
                icon: Plane,
                title: "Drone Vision",
              },
              {
                icon: Map,
                title: "GIS Intelligence",
              },
              {
                icon: Mountain,
                title: "Remote Sensing",
              },
              {
                icon: ScanSearch,
                title: "Computer Vision",
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

              )

            })}

          </div>

        </div>

      </section>
      {/* ===================================================== */}
      {/* DRONE ANNOTATION SERVICES */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Our Services

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Drone & Aerial Annotation Services

            </h2>

            <p className="text-lg text-gray-600 mt-8 max-w-3xl mx-auto leading-9">

              From precision agriculture to infrastructure inspection,
              our drone annotation specialists create accurate datasets
              that enable AI systems to interpret aerial imagery with
              confidence.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {[
              {
                title: "Drone Image Annotation",
                image: "/images/industries/drone/drone-annotation.webp",
                desc: "Professional annotation of high-resolution drone imagery for AI model development.",
              },
              {
                title: "Aerial Object Detection",
                image: "/images/industries/drone/object-tracking.webp",
                desc: "Detect buildings, vehicles, people, ships, aircraft, roads, and other aerial objects.",
              },
              {
                title: "Building Extraction",
                image: "/images/industries/drone/building-segmentation.webp",
                desc: "Accurate building footprints for mapping, GIS, and urban planning applications.",
              },
              {
                title: "Road Network Extraction",
                image: "/images/industries/drone/road-mapping.webp",
                desc: "Road centerlines, highways, intersections, and transportation infrastructure annotation.",
              },
              {
                title: "Crop Monitoring",
                image: "/images/industries/drone/crop-monitoring.webp",
                desc: "Crop health monitoring, field boundaries, irrigation analysis, and agricultural AI.",
              },
              {
                title: "Power Line Inspection",
                image: "/images/industries/drone/utility-inspection.webp",
                desc: "Transmission towers, electrical infrastructure, and utility asset inspection datasets.",
              },
              {
                title: "Solar Farm Detection",
                image: "/images/industries/drone/solar-panel.webp",
                desc: "Solar panel identification and renewable energy asset monitoring.",
              },
              {
                title: "Wind Turbine Inspection",
                image: "/images/industries/drone/wind-turbine.webp",
                desc: "Blade damage detection and wind farm maintenance automation.",
              },
              {
                title: "Roof Damage Assessment",
                image: "/images/industries/drone/roof-damage.webp",
                desc: "Insurance inspection datasets for roof defects and disaster assessment.",
              },
              {
                title: "Land Cover Classification",
                image: "/images/industries/drone/forestry.webp",
                desc: "Forest, water, agriculture, buildings, roads, and vegetation classification.",
              },
              {
                title: "Environmental Monitoring",
                image: "/images/industries/drone/disaster-monitoring.webp",
                desc: "Wildlife monitoring, deforestation analysis, coastal management, and conservation.",
              },
              {
                title: "Change Detection",
                image: "/images/industries/drone/flood-mapping.webp",
                desc: "Compare multi-temporal aerial imagery to identify environmental and structural changes.",
              },
            ].map((service) => (

              <div
                key={service.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
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

              Where Drone AI Creates Business Value

            </h2>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            {[
              "Precision Agriculture",
              "Infrastructure Inspection",
              "Construction Monitoring",
              "Mining Operations",
              "Disaster Response",
              "Flood Mapping",
              "Urban Planning",
              "Environmental Monitoring",
              "Utility Inspection",
              "Renewable Energy",
              "Smart Cities",
              "GIS Mapping",
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
                src="/images/industries/drone/dataset-types.avif"
                alt="Drone Annotation Dataset Types"
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

                Supporting Every
                Type of Drone Dataset

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                Annotexia works with aerial imagery collected from
                drones, UAVs, satellites, helicopters, and aircraft.
                We prepare high-quality datasets for geospatial AI,
                remote sensing, precision agriculture, inspection,
                and mapping projects.

              </p>

              <div className="grid grid-cols-2 gap-6">

                {[
                  "RGB Images",
                  "Thermal Images",
                  "Satellite Images",
                  "Multispectral Data",
                  "Orthomosaics",
                  "Drone Videos",
                  "GeoTIFF",
                  "NDVI Images",
                  "Remote Sensing",
                  "GIS Maps",
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
              Our Drone Annotation Workflow
            </h2>

            <p className="text-slate-300 mt-8 max-w-3xl mx-auto text-lg leading-9">
              Every aerial imagery project follows a structured workflow that
              guarantees consistency, scalability, and enterprise-quality datasets.
            </p>

          </div>

          <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-8">

            {[
              {
                step: "01",
                title: "Requirement Analysis",
                desc: "Review aerial imagery, project goals, annotation guidelines, and AI objectives.",
              },
              {
                step: "02",
                title: "Sample Dataset",
                desc: "Annotate a pilot dataset for validation before full production begins.",
              },
              {
                step: "03",
                title: "Production",
                desc: "Dedicated annotation specialists label large-scale aerial datasets.",
              },
              {
                step: "04",
                title: "Quality Review",
                desc: "Senior QA experts review annotations for precision and consistency.",
              },
              {
                step: "05",
                title: "Client Validation",
                desc: "Continuous feedback ensures complete alignment with your AI goals.",
              },
              {
                step: "06",
                title: "Final Delivery",
                desc: "Datasets delivered in the required format with complete QA reports.",
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

                Enterprise-Level Quality
                For Every Drone Dataset

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                Drone imagery often covers complex environments with thousands
                of small objects, making annotation accuracy critical.

                Our multi-stage quality assurance workflow ensures every image
                meets enterprise AI standards before delivery.

              </p>

              <div className="space-y-6">

                {[
                  "Expert drone annotation specialists",
                  "Peer review process",
                  "Dedicated QA verification",
                  "Random quality audits",
                  "Client-specific validation",
                  "Final production approval",
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
                src="/images/industries/drone/quality-drone.webp"
                alt="Drone Annotation QA"
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

          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-6">

            {[
              "COCO",
              "YOLO",
              "Pascal VOC",
              "GeoJSON",
              "Shapefile",
              "GeoTIFF",
              "KITTI",
              "JSON",
              "XML",
              "CSV",
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

              Why Global AI Teams
              Choose Annotexia

            </h2>

          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {[
              "99% Annotation Accuracy",
              "Enterprise Security",
              "Scalable Workforce",
              "Fast Turnaround",
              "Dedicated Project Manager",
              "Flexible Production Teams",
              "Custom Annotation Guidelines",
              "Free Sample Dataset",
            ].map((item) => (

              <div
                key={item}
                className="bg-white rounded-3xl border p-8 shadow-lg hover:bg-cyan-600 hover:text-white hover:-translate-y-2 transition"
              >

                <CheckCircle2 className="w-10 h-10 text-cyan-500 mb-6" />

                <h3 className="text-xl font-bold">

                  {item}

                </h3>

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
                Millions
              </h3>

              <p className="mt-4 text-lg">
                Images Supported
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

                  FREE SAMPLE DATASET

                </span>

                <h2 className="text-5xl font-bold mt-6 mb-8">

                  Experience Our Quality
                  Before Starting Your Project

                </h2>

                <p className="text-xl leading-9 text-cyan-100 mb-10">

                  Choosing an annotation partner is an important decision.
                  That's why Annotexia offers a completely

                  <strong className="text-white">

                    {" "}FREE sample annotation service{" "}

                  </strong>

                  allowing your team to evaluate our quality,
                  consistency, turnaround time, and communication
                  before committing to production.

                </p>

                <ul className="space-y-4 mb-10">

                  {[
                    "100% Free Sample Dataset",
                    "No Hidden Charges",
                    "Enterprise Quality Review",
                    "Delivered in Your Preferred Format",
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
                  src="/images/industries/drone/cta-drone.webp"
                  alt="Drone Annotation Company"
                  width={900}
                  height={700}
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

              Everything You Need to Know

            </h2>

          </div>

          <div className="space-y-8">

            {[
              {
                q: "How can we trust Annotexia with confidential drone imagery?",
                a: "We sign NDAs, use secure workflows, and follow enterprise-quality standards. Your aerial datasets remain confidential throughout the project lifecycle.",
              },
              {
                q: "Can we test your annotation quality before placing an order?",
                a: "Absolutely. We provide a FREE sample dataset so you can evaluate our annotation quality, consistency, and turnaround time without any cost.",
              },
              {
                q: "Which drone annotation formats do you support?",
                a: "We support COCO, YOLO, Pascal VOC, GeoJSON, GeoTIFF, KITTI, XML, JSON, CSV, Shapefile, CVAT, Label Studio, and custom formats.",
              },
              {
                q: "Can you annotate large aerial datasets?",
                a: "Yes. Our scalable annotation workforce supports projects ranging from thousands to millions of drone images and videos.",
              },
              {
                q: "Which industries use drone annotation services?",
                a: "Agriculture, construction, mining, utilities, renewable energy, environmental monitoring, surveying, GIS, smart cities, disaster management, and infrastructure inspection.",
              },
              {
                q: "Do you follow custom annotation guidelines?",
                a: "Yes. Every project follows client-specific annotation instructions and quality assurance standards.",
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

            Professional Drone & Aerial Imagery Annotation Services for AI Applications

          </h2>

          <div className="space-y-8 text-lg leading-9 text-gray-600">

            <p>

              Drone technology has revolutionized the way organizations collect
              visual data. From precision agriculture and construction monitoring
              to utility inspection, environmental analysis, disaster management,
              mining operations, and smart city planning, aerial imagery provides
              valuable insights that improve operational efficiency and decision
              making. However, raw drone imagery alone cannot train Artificial
              Intelligence systems. High-quality drone image annotation is essential
              for creating accurate AI models capable of understanding complex
              aerial environments.

            </p>

            <p>

              Annotexia provides professional drone image annotation services that
              transform aerial imagery into production-ready AI training datasets.
              Our experienced annotation specialists label buildings, roads,
              vehicles, agricultural fields, power lines, solar farms, wind
              turbines, construction sites, water bodies, forests, and countless
              other aerial objects using bounding boxes, polygons, semantic
              segmentation, instance segmentation, and custom annotation techniques.

            </p>

            <p>

              We support organizations developing AI solutions for remote sensing,
              geospatial intelligence, GIS mapping, precision agriculture,
              infrastructure inspection, surveying, disaster response, and
              autonomous drone navigation. Every project follows client-specific
              annotation guidelines and undergoes multiple quality assurance reviews
              to ensure maximum consistency, scalability, and enterprise-grade
              accuracy.

            </p>

            <p>

              At Annotexia, we believe trust begins with transparency. That's why
              every new client can evaluate our services through a completely FREE
              sample dataset before committing to a production project. Our goal is
              to become a long-term annotation partner by delivering exceptional
              quality, responsive communication, and reliable turnaround times for
              AI teams worldwide.

            </p>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FINAL CTA */}
      {/* ===================================================== */}

      <section className="bg-cyan-950 py-24 text-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">

            Ready to Build Smarter Drone AI Systems?

          </h2>

          <p className="text-xl leading-9 text-slate-300 max-w-3xl mx-auto mb-10">

            Whether you're developing precision agriculture solutions,
            GIS platforms, infrastructure inspection systems,
            remote sensing applications, or autonomous drone technology,
            Annotexia delivers enterprise-grade drone annotation services
            designed to accelerate AI innovation.

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