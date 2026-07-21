import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title:
    "Healthcare AI Annotation Services | Medical Image Annotation Company | Annotexia",

  description:
    "Professional healthcare AI annotation services including medical image annotation, X-ray labeling, MRI annotation, CT scan annotation, pathology annotation, DICOM annotation, medical NLP, and AI training datasets for healthcare organizations.",

  keywords: [
    "Healthcare AI Annotation",
    "Medical Image Annotation",
    "Medical Data Labeling",
    "MRI Annotation",
    "CT Scan Annotation",
    "X-Ray Annotation",
    "Radiology Annotation",
    "Medical Segmentation",
    "Healthcare AI Training Data",
    "Pathology Annotation",
    "Medical Computer Vision",
    "Medical Dataset Annotation",
  ],
};

export default function HealthcareAIPage() {

  return (

    <main className="min-h-screen bg-white">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0">

          <Image
            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1800&q=80"
            alt="Healthcare AI Annotation"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-slate-900/75" />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <div className="max-w-3xl">

            <span className="inline-flex bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-widest">

              Healthcare AI Training Data

            </span>

            <h1 className="text-5xl lg:text-7xl font-black text-white mt-8 leading-tight">

              Healthcare AI
              Annotation
              Services

            </h1>

            <p className="text-xl text-slate-300 leading-9 mt-8">

              Accelerate healthcare innovation with high-quality
              medical image annotation, radiology labeling,
              pathology annotation, medical NLP, and AI training
              datasets designed for hospitals, healthcare startups,
              research organizations, and medical AI companies.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition"
              >

                Request Free Sample

                <ArrowRight size={20} />

              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl transition"
              >

                Explore Services

              </Link>

            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-16 text-white">

              <div>

                <h3 className="text-4xl font-bold">

                  99%

                </h3>

                <p className="text-slate-300 mt-2">

                  Medical Annotation Accuracy

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  Multi-Level

                </h3>

                <p className="text-slate-300 mt-2">

                  Quality Assurance

                </p>

              </div>

              <div>

                <h3 className="text-4xl font-bold">

                  Enterprise

                </h3>

                <p className="text-slate-300 mt-2">

                  Secure Workflow

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* STORY */}
      {/* ================================================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Building Smarter Healthcare AI

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Better Medical AI
                Starts With
                Reliable Data

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Artificial Intelligence is transforming modern healthcare.
                From assisting radiologists in identifying abnormalities
                to helping pathologists detect diseases and supporting
                clinical decision-making, AI has become an essential
                technology across hospitals and healthcare institutions.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                However, the effectiveness of every medical AI model
                depends on one critical factor—accurately annotated
                medical datasets. Without reliable training data,
                even the most advanced machine learning algorithms
                cannot produce trustworthy clinical predictions.

              </p>

              <p className="text-lg leading-9 text-gray-600">

                Annotexia partners with healthcare organizations,
                medical AI startups, research laboratories,
                diagnostic imaging companies, and digital health
                platforms to create secure, scalable, and
                high-quality annotation datasets that improve
                AI model performance while maintaining
                strict quality standards.

              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-10">

                {[
                  "Medical Image Annotation",
                  "Radiology AI",
                  "Medical Segmentation",
                  "Pathology Annotation",
                  "Medical NLP",
                  "DICOM Annotation",
                  "Healthcare Computer Vision",
                  "Medical Dataset Labeling",
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
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
                alt="Healthcare AI"
                width={700}
                height={850}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>
      {/* ====================================================== */}
      {/* HEALTHCARE AI SERVICES */}
      {/* ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Healthcare AI Services

            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">

              Comprehensive Medical
              Annotation Solutions

            </h2>

            <p className="text-lg leading-9 text-gray-600">

              We provide high-quality medical data annotation services
              for healthcare organizations, AI startups, hospitals,
              diagnostic imaging companies, pharmaceutical research,
              and medical device manufacturers developing next-generation
              healthcare AI solutions.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                title: "X-Ray Annotation",
                desc: "Accurate annotation of fractures, lungs, bones, chest abnormalities, orthopedic findings, and radiographic structures."
              },
              {
                title: "MRI Annotation",
                desc: "Detailed MRI image labeling for neurological disorders, musculoskeletal imaging, and soft tissue analysis."
              },
              {
                title: "CT Scan Annotation",
                desc: "Precise CT scan annotation for organ segmentation, trauma assessment, tumor localization, and disease detection."
              },
              {
                title: "Ultrasound Annotation",
                desc: "High-quality ultrasound image labeling for obstetrics, cardiology, abdominal imaging, and diagnostic AI."
              },
              {
                title: "Pathology Annotation",
                desc: "Microscopic slide annotation supporting cancer detection, tissue classification, and digital pathology AI."
              },
              {
                title: "Medical Image Segmentation",
                desc: "Pixel-perfect segmentation of organs, tumors, lesions, blood vessels, and anatomical structures."
              },
              {
                title: "Medical NLP",
                desc: "Annotation of electronic health records, physician notes, discharge summaries, and clinical documentation."
              },
              {
                title: "DICOM Annotation",
                desc: "Professional annotation of DICOM medical imaging datasets for enterprise healthcare AI applications."
              },
              {
                title: "Medical Object Detection",
                desc: "Detection of tumors, fractures, nodules, organs, implants, and other medical abnormalities."
              },
              {
                title: "Image Classification",
                desc: "Classification datasets for disease diagnosis, severity grading, and automated medical screening."
              },
              {
                title: "Medical Keypoint Annotation",
                desc: "Landmark annotation for orthopedic measurements, anatomical structures, and surgical planning."
              },
              {
                title: "Quality Assurance",
                desc: "Every dataset undergoes multiple QA stages to ensure annotation consistency and production-level quality."
              }

            ].map((service) => (

              <div
                key={service.title}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-xl bg-cyan-50 flex items-center justify-center text-3xl mb-6">

                  🏥

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

      {/* ====================================================== */}
      {/* MEDICAL IMAGING */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&w=1400&q=80"
                alt="Medical Imaging AI"
                width={700}
                height={900}
                className="rounded-3xl shadow-2xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Medical Imaging AI

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Supporting Medical
                Imaging with
                Accurate Annotation

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Medical imaging is one of the fastest-growing applications
                of Artificial Intelligence. AI systems assist radiologists
                and clinicians by analyzing X-rays, CT scans, MRI scans,
                ultrasound images, and pathology slides with remarkable speed.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-8">

                At Annotexia, we create high-quality medical datasets that
                enable AI systems to recognize diseases, identify anatomical
                structures, detect abnormalities, and improve clinical
                decision-making while maintaining exceptional annotation quality.

              </p>

              <div className="space-y-5">

                {[
                  "Radiology AI",
                  "Computer Vision in Healthcare",
                  "Tumor Segmentation",
                  "Organ Detection",
                  "Clinical Imaging",
                  "DICOM Dataset Preparation",

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
      {/* HEALTHCARE AI APPLICATIONS */}
      {/* ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Healthcare AI Applications

            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">

              Powering the Next Generation
              of Intelligent Healthcare

            </h2>

            <p className="text-lg text-gray-600 leading-9">

              Healthcare Artificial Intelligence is rapidly changing how
              clinicians diagnose diseases, monitor patients, interpret
              medical images, and improve patient outcomes. Our annotation
              services support AI development across numerous healthcare
              specialties.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              "Radiology AI",
              "Cancer Detection",
              "Disease Diagnosis",
              "Clinical Decision Support",
              "Medical Imaging",
              "Digital Pathology",
              "Hospital Automation",
              "Electronic Health Records",
              "Healthcare NLP",
              "Remote Patient Monitoring",
              "Medical Robotics",
              "Telemedicine AI",

            ].map((item) => (

              <div
                key={item}
                className="bg-white rounded-2xl border p-8 hover:shadow-xl transition"
              >

                <div className="text-4xl mb-5">

                  🩺

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

                Every Annotation
                Technique Required
                for Healthcare AI

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-10">

                Healthcare AI requires multiple annotation methods depending
                on the imaging modality, clinical objective, and machine
                learning model. Our experienced annotation specialists
                deliver precise labels for every medical use case.

              </p>

              <div className="grid md:grid-cols-2 gap-5">

                {[
                  "Bounding Boxes",
                  "Polygon Annotation",
                  "Semantic Segmentation",
                  "Instance Segmentation",
                  "Medical Image Classification",
                  "Keypoint Annotation",
                  "Tumor Segmentation",
                  "Organ Segmentation",
                  "Lesion Annotation",
                  "DICOM Annotation",
                  "Medical NLP",
                  "OCR for Healthcare",

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
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=1400&q=80"
                alt="Radiology Annotation"
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

              Supported Formats

            </span>

            <h2 className="text-5xl font-bold mt-4">

              Delivered In Your
              Preferred Annotation Format

            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

            {[
              "DICOM",
              "NIfTI",
              "COCO",
              "YOLO",
              "Pascal VOC",
              "JSON",
              "XML",
              "CSV",
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

              Workflow

            </span>

            <h2 className="text-5xl font-bold mt-4 mb-8">

              Our Healthcare AI
              Annotation Process

            </h2>

            <p className="text-lg text-gray-600 leading-9">

              Every healthcare project follows a structured workflow
              to ensure consistent quality, compliance, and secure
              delivery of medical datasets.

            </p>

          </div>

          <div className="grid md:grid-cols-5 gap-8">

            {[
              {
                step: "01",
                title: "Project Planning",
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
                title: "Medical QA Review",
              },
              {
                step: "05",
                title: "Secure Dataset Delivery",
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
      {/* WHY CHOOSE ANNOTEXIA */}
      {/* ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">
              Why Annotexia
            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">
              Trusted Partner for
              Healthcare AI Annotation
            </h2>

            <p className="text-lg leading-9 text-gray-600">
              Healthcare AI demands exceptional accuracy, secure workflows,
              and reliable delivery. At Annotexia, we combine experienced
              annotation specialists, structured quality assurance, and
              enterprise-grade processes to help organizations develop
              dependable AI solutions.
            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                title: "Medical Domain Understanding",
                desc: "Annotation teams follow detailed project guidelines and understand complex healthcare annotation requirements."
              },
              {
                title: "Multi-Level Quality Assurance",
                desc: "Every dataset passes multiple review stages before final delivery to maintain consistency and annotation accuracy."
              },
              {
                title: "Scalable Workforce",
                desc: "From pilot projects to millions of medical images, our team scales according to project requirements."
              },
              {
                title: "Enterprise Security",
                desc: "Strict NDA processes, controlled access, secure infrastructure, and confidential project handling."
              },
              {
                title: "Flexible Delivery",
                desc: "Datasets delivered in DICOM, COCO, YOLO, JSON, XML, CSV, CVAT, Label Studio and custom formats."
              },
              {
                title: "Dedicated Project Manager",
                desc: "A single point of contact ensures transparent communication and faster project execution."
              }

            ].map((item) => (

              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
              >

                <CheckCircle2
                  className="text-cyan-500 mb-5"
                  size={36}
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

      {/* ====================================================== */}
      {/* FREE SAMPLE */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-cyan-600 rounded-3xl p-16 text-center text-white">

            <h2 className="text-5xl font-bold mb-8">

              Evaluate Our Annotation Quality
              Before You Commit

            </h2>

            <p className="text-xl leading-9 max-w-4xl mx-auto mb-10">

              We understand that healthcare AI projects require absolute confidence.
              That's why we provide a FREE sample dataset so your team can evaluate
              our annotation accuracy, consistency, and quality before starting
              a full production project.

            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">

              <div>

                <h3 className="font-bold text-2xl mb-3">

                  ✓ No Cost

                </h3>

                <p>

                  Receive a professionally annotated sample completely free.

                </p>

              </div>

              <div>

                <h3 className="font-bold text-2xl mb-3">

                  ✓ No Commitment

                </h3>

                <p>

                  Evaluate our quality before making any business decision.

                </p>

              </div>

              <div>

                <h3 className="font-bold text-2xl mb-3">

                  ✓ Production Quality

                </h3>

                <p>

                  The sample follows the exact workflow used for enterprise projects.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* FAQ */}
      {/* ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center mb-20">

            Frequently Asked Questions

          </h2>

          <div className="space-y-8">

            {[
              {
                q: "How can we trust Annotexia for healthcare annotation projects?",
                a: "We follow structured annotation workflows, multi-level quality assurance, secure project handling, and transparent communication throughout every project. We also offer a free sample dataset so you can evaluate our quality before moving forward."
              },
              {
                q: "Do you provide a free sample dataset?",
                a: "Yes. We provide a free annotated sample so you can verify our quality, consistency, and annotation guidelines before beginning production."
              },
              {
                q: "Can you work with confidential healthcare data?",
                a: "Yes. We support NDA agreements, secure file handling, restricted project access, and enterprise confidentiality practices."
              },
              {
                q: "Which annotation tools do you support?",
                a: "We work with CVAT, Label Studio, SuperAnnotate, Labelbox, Roboflow, DICOM viewers, and custom annotation platforms."
              },
              {
                q: "What medical image formats do you support?",
                a: "We support DICOM, NIfTI, PNG, JPG, TIFF, COCO, YOLO, JSON, XML, CSV, Pascal VOC, and many custom formats."
              },
              {
                q: "Can you scale large healthcare AI projects?",
                a: "Yes. Our scalable annotation team supports projects ranging from proof-of-concept datasets to enterprise-scale medical AI initiatives."
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

      {/* ====================================================== */}
      {/* SEO CONTENT */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">

            Healthcare AI Annotation Services for Next-Generation Medical Intelligence

          </h2>

          <div className="space-y-8 text-lg leading-9 text-gray-600">

            <p>

              Healthcare organizations worldwide are increasingly adopting Artificial Intelligence to improve diagnostics, automate clinical workflows, accelerate medical research, and enhance patient care. These intelligent systems rely on high-quality annotated medical datasets that accurately represent real-world clinical scenarios. Annotexia provides professional healthcare AI annotation services designed to help hospitals, medical AI startups, healthcare technology companies, research institutions, and diagnostic imaging providers develop reliable machine learning models.

            </p>

            <p>

              Our expertise includes medical image annotation, radiology image labeling, MRI annotation, CT scan annotation, pathology annotation, DICOM image annotation, semantic segmentation, medical NLP annotation, healthcare computer vision datasets, and production-quality AI training data. Every project follows strict quality assurance procedures to deliver consistent, accurate, and scalable datasets for healthcare AI development.

            </p>

            <p>

              Whether you're building disease detection systems, radiology AI, cancer detection models, healthcare robotics, digital pathology solutions, or medical imaging software, Annotexia provides secure, scalable, and enterprise-ready annotation services tailored to your project requirements.

            </p>

          </div>

        </div>

      </section>

      {/* ====================================================== */}
      {/* CTA */}
      {/* ====================================================== */}

      <section className="bg-slate-900 text-white py-28">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">

            Build Better Healthcare AI
            With Better Training Data

          </h2>

          <p className="text-xl text-slate-300 leading-9 max-w-3xl mx-auto mb-12">

            From medical image annotation and radiology labeling to healthcare NLP
            and pathology datasets, Annotexia helps healthcare organizations build
            accurate, secure, and scalable AI training datasets that improve model
            performance and accelerate innovation.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
            >

              Request Free Sample Dataset

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