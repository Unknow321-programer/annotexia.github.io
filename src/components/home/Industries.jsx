import Image from "next/image";
import Link from "next/link";

const industries = [
  {
    title: "Computer Vision AI",
    image: "/images/industries/computer-vision.webp",
    alt: "Computer Vision AI Data Annotation",
    description:
      "Develop advanced computer vision applications using high-quality image annotation, semantic segmentation, instance segmentation, OCR annotation, object detection, image classification, and landmark labeling datasets.",
    href: "/contact",
  },
  {
    title: "Autonomous Vehicles",
    image: "/images/industries/autonomous-vehicles.webp",
    alt: "Autonomous Vehicle Data Annotation",
    description:
      "Train self-driving vehicle models with accurate lane detection, traffic sign annotation, pedestrian labeling, vehicle tracking, semantic segmentation, and road scene understanding datasets.",
    href: "/contact",
  },
  {
    title: "Sports Analytics",
    image: "/images/industries/sport-analytics.webp",
    alt: "Sports Analytics Annotation",
    description:
      "Power AI-driven sports analytics with player tracking, ball tracking, event tagging, pose estimation, tactical analysis, and performance datasets for football, cricket, tennis, and more.",
    href: "/contact",
  },
  {
    title: "Healthcare AI",
    image: "/images/industries/healthcare.webp",
    alt: "Healthcare AI Data Annotation",
    description:
      "Support medical AI solutions with expert annotation of X-rays, MRI scans, CT scans, pathology images, ultrasound, healthcare documents, and medical computer vision datasets.",
    href: "/contact",
  },
  {
    title: "Agriculture",
    image: "/images/industries/agriculture.webp",
    alt: "Agriculture AI Annotation",
    description:
      "Enable precision agriculture using crop monitoring, weed detection, disease identification, fruit counting, livestock monitoring, and smart farming datasets.",
    href: "/contact",
  },
  {
    title: "Drone & Aerial Imagery",
    image: "/images/industries/drone.webp",
    alt: "Drone Image Annotation",
    description:
      "Annotate drone and satellite imagery for infrastructure inspection, land mapping, environmental monitoring, disaster response, construction analysis, and geospatial AI.",
    href: "/contact",
  },
  {
    title: "Retail & E-commerce",
    image: "/images/industries/retail.webp",
    alt: "Retail AI Data Labeling",
    description:
      "Improve retail automation with product recognition, shelf monitoring, inventory management, OCR, barcode annotation, customer behavior analysis, and checkout automation datasets.",
    href: "/contact",
  },
  {
    title: "Manufacturing & Industrial AI",
    image: "/images/industries/manufacturing.webp",
    alt: "Industrial AI Annotation",
    description:
      "Enhance industrial automation through defect detection, quality inspection, machine monitoring, safety compliance, assembly verification, and manufacturing AI datasets.",
    href: "/contact",
  },
];

export default function Industries() {
  return (
    <section className="home-section industries-section py-20 bg-slate-50 sm:py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="scroll-reveal section-intro max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

            Industries We Serve

          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900">

            Industry-specific annotation<br /> For real-world AI applications.

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            Different AI applications require different annotation expertise. 
            Our teams work with project-specific guidelines to create datasets for Computer Vision, 
            Sports Analytics, Healthcare, Agriculture, Robotics, Retail, Manufacturing and Autonomous Systems.

          </p>

        </div>

        {/* Cards */}

        <div className="scroll-reveal grid industry-card-grid lg:grid-cols-4 md:grid-cols-2 gap-5 sm:gap-7 mt-12 sm:mt-16">

          {industries.map((industry) => (

            <div
              key={industry.title}
              className="industry-card group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm transition-all duration-500"
            >

              <div className="industry-image-wrap relative h-52 overflow-hidden sm:h-56">

                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  className="industry-image object-cover transition duration-700 group-hover:scale-105"
                />
                <div aria-hidden="true" className="industry-image-shade absolute inset-0" />

              </div>

              <div className="flex h-full flex-col p-6 sm:p-7">

                <h3 className="text-2xl font-bold text-slate-900">

                  {industry.title}

                </h3>

                <p className="mt-4 text-slate-600 leading-7">

                  {industry.description}

                </p>

                <Link
                  href={industry.href}
                  className="industry-card-link mt-auto inline-flex items-center pt-7 font-semibold text-blue-600 transition hover:text-blue-800"
                >

                  Discuss Your Project →

                </Link>

              </div>

            </div>

          ))}

        </div>
                {/* Bottom CTA */}

        <div className="scroll-reveal mt-24">

          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden">

            <div className="max-w-5xl mx-auto px-10 py-16 text-center">

              <span className="uppercase tracking-[3px] text-blue-400 font-semibold">

                Industry-Focused AI Training Data

              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">

                Looking for a Data Annotation Partner
                for Your Industry?

              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                Every AI project requires domain-specific expertise.
                Whether you&apos;re building Computer Vision models,
                Healthcare AI solutions, Sports Analytics platforms,
                Agriculture AI systems, Retail automation,
                Manufacturing inspection tools, or Autonomous Vehicle
                applications, Annotexia delivers accurate, scalable,
                and quality-reviewed datasets tailored to your business.

              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-12">

                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Request a Free Quote
                </Link>

                <Link
                  href="/services"
                  className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Explore Our Services
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
