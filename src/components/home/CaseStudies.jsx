import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "Sports Player Tracking",
    category: "Sports Analytics",
    image: "/images/case-studies/sports-tracking.webp",
    description:
      "Annotated football players, ball tracking, player identities, positional coordinates, and match events for AI-powered sports analytics platforms.",
    tags: ["Tracking", "Bounding Box", "Player ID", "Events"],
  },

  {
    title: "Vehicle Inspection & Damage Detection",
    category: "Insurance AI",
    image: "/images/case-studies/vehicle-damage.webp",
    description:
      "Annotated scratches, dents, broken vehicle parts, collision damage, and inspection datasets for AI-powered vehicle assessment systems.",
    tags: ["Polygon", "Damage", "Inspection", "Segmentation"],
  },

  {
    title: "Precision Agriculture AI",
    category: "Agriculture",
    image: "/images/case-studies/agriculture.webp",
    description:
      "Annotated crops, weeds, diseases, plantations, and drone imagery supporting precision agriculture and crop monitoring solutions.",
    tags: ["Drone", "Plants", "Detection", "Segmentation"],
  },

  {
    title: "Retail Shelf Monitoring",
    category: "Retail AI",
    image: "/images/case-studies/retail.webp",
    description:
      "Annotated products, shelves, inventory layouts, empty spaces, and barcodes for retail analytics and inventory management.",
    tags: ["Shelf", "OCR", "Inventory", "Products"],
  },

  {
    title: "License Plate Recognition",
    category: "Transportation AI",
    image: "/images/case-studies/license-plate.webp",
    description:
      "Annotated vehicles, license plates, OCR regions, and traffic scenes for intelligent transportation and ANPR systems.",
    tags: ["OCR", "Vehicles", "Detection", "Text"],
  },

  {
    title: "Industrial Quality Inspection",
    category: "Manufacturing",
    image: "/images/case-studies/manufacturing.webp",
    description:
      "Annotated production defects, industrial components, damaged parts, and inspection datasets for manufacturing automation.",
    tags: ["Inspection", "Quality", "Defects", "AI"],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="scroll-reveal max-w-3xl mx-auto text-center">

          <span className="uppercase tracking-[3px] text-blue-600 font-semibold">
            AI Projects We've Supported
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900">
            Real-World AI
            <br />
            Training Data Projects
          </h2>

          <p className="mt-8 text-lg text-slate-600 leading-8">
            Our annotation experience spans Computer Vision,
            Sports Analytics, Agriculture, Retail, Manufacturing,
            Transportation, Healthcare, and AI-powered automation.
            Every project follows structured quality assurance,
            scalable workflows, and enterprise-ready delivery.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {caseStudies.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8">

                <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 rounded-full px-4 py-2">
                  {project.category}
                </span>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-5 text-slate-600 leading-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
                {/* Industries Summary */}

        <div className="scroll-reveal mt-24">

          <div className="bg-white rounded-3xl border border-slate-200 p-10 lg:p-14 shadow-sm">

            <div className="text-center">

              <span className="uppercase tracking-[3px] text-blue-600 font-semibold">
                Industry Experience
              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-slate-900">
                Supporting AI Innovation
                <br />
                Across Multiple Industries
              </h3>

              <p className="mt-6 text-lg text-slate-600 leading-8 max-w-3xl mx-auto">
                Our annotation specialists support organizations
                developing Computer Vision, Machine Learning,
                Generative AI, Healthcare AI, Sports Analytics,
                Retail AI, Manufacturing AI, Agriculture AI,
                and Autonomous Vehicle solutions.
              </p>

            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-14">

              {[
                "Sports Analytics",
                "Healthcare AI",
                "Autonomous Vehicles",
                "Computer Vision",
                "Agriculture",
                "Drone & Aerial Imagery",
                "Retail & E-commerce",
                "Manufacturing & Industrial AI",
              ].map((industry) => (

                <div
                  key={industry}
                  className="rounded-xl bg-slate-50 border border-slate-200 p-5 text-center font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition"
                >
                  {industry}
                </div>

              ))}

            </div>

          </div>

        </div>

        {/* CTA */}

        <div className="scroll-reveal mt-24">

          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 overflow-hidden">

            <div className="max-w-5xl mx-auto px-10 py-20 text-center">

              <span className="uppercase tracking-[3px] text-blue-400 font-semibold">
                Let's Build Together
              </span>

              <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">
                Have a Similar AI Project?
              </h3>

              <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
                Whether you're developing AI for healthcare,
                agriculture, autonomous driving, retail,
                manufacturing, sports analytics, or computer vision,
                Annotexia can provide scalable, high-quality
                annotation services tailored to your workflow.
              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-14">

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                >
                  Start Your Project
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition"
                >
                  View Services
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}