import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    BrainCircuit,
    Microscope,
    ScanLine,
    FileSearch,
    Activity,
    Stethoscope,
    Database,
} from "lucide-react";

export const metadata = {
    title:
        "Healthcare AI Data Annotation Services | Medical Image Labeling | Annotexia",

    description:
        "Annotexia provides high-quality healthcare AI data annotation services including medical image annotation, segmentation, radiology labeling, pathology annotation, OCR, and clinical AI datasets.",

    keywords: [
        "healthcare AI annotation",
        "medical image annotation",
        "medical data annotation",
        "radiology annotation",
        "medical image segmentation",
        "pathology annotation",
        "CT scan annotation",
        "MRI annotation",
        "X-ray annotation",
        "healthcare AI training data",
        "medical AI datasets",
        "clinical AI annotation",
        "medical OCR",
        "Annotexia",
    ],

    alternates: {
        canonical: "https://www.annotexia.com/industries/healthcare-ai",
    },

    openGraph: {
        title:
            "Healthcare AI Data Annotation Services | Annotexia",

        description:
            "Build reliable healthcare AI models with accurate medical image annotation, segmentation, radiology labeling, pathology datasets, and clinical data annotation.",

        url: "https://www.annotexia.com/industries/healthcare-ai",

        siteName: "Annotexia",

        type: "website",

        images: [
            {
                url: "https://www.annotexia.com/images/industries/healthcare-ai.webp",
                width: 1200,
                height: 630,
                alt: "Healthcare AI medical image annotation services",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Healthcare AI Data Annotation Services | Annotexia",
        description:
            "Accurate medical image annotation and healthcare AI training datasets for machine learning and computer vision.",
        images: [
            "https://www.annotexia.com/images/industries/healthcare-ai.webp",
        ],
    },
};

const annotationServices = [
    {
        title: "Medical Image Annotation",
        description:
            "Label anatomical structures, abnormalities, lesions, organs, and other clinically relevant regions across medical images.",
        icon: ScanLine,
    },

    {
        title: "Medical Image Segmentation",
        description:
            "Create pixel-level and region-level masks for organs, tumors, lesions, tissues, and other structures used in medical AI.",
        icon: Activity,
    },

    {
        title: "Radiology Annotation",
        description:
            "Support radiology AI with annotations for X-rays, CT scans, MRI studies, ultrasound images, and other diagnostic imaging datasets.",
        icon: Stethoscope,
    },

    {
        title: "Pathology Annotation",
        description:
            "Create structured annotations for pathology and histopathology datasets to support computer vision and diagnostic research.",
        icon: Microscope,
    },

    {
        title: "Medical OCR & Document Annotation",
        description:
            "Extract and label information from medical documents, reports, prescriptions, forms, and clinical records.",
        icon: FileSearch,
    },

    {
        title: "Custom Healthcare AI Datasets",
        description:
            "Build project-specific datasets around your model requirements, annotation guidelines, classes, and output formats.",
        icon: Database,
    },
];

const dataTypes = [
    "X-Ray Images",
    "CT Scans",
    "MRI Images",
    "Ultrasound",
    "Pathology Images",
    "Histology Slides",
    "Medical Documents",
    "Clinical Text",
];

const useCases = [
    {
        title: "Disease Detection",
        description:
            "Create labeled datasets that help AI systems identify abnormalities and disease-related patterns in medical images.",
    },

    {
        title: "Medical Image Segmentation",
        description:
            "Generate precise segmentation masks for organs, tumors, lesions, tissues, and anatomical structures.",
    },

    {
        title: "Clinical Decision Support",
        description:
            "Prepare structured datasets that support AI-assisted clinical workflows and decision-support applications.",
    },

    {
        title: "Radiology AI",
        description:
            "Train computer vision systems to identify and classify findings across X-ray, CT, MRI, and ultrasound datasets.",
    },

    {
        title: "Digital Pathology",
        description:
            "Annotate tissue structures, cells, abnormalities, and regions of interest in pathology and histopathology images.",
    },

    {
        title: "Healthcare Document AI",
        description:
            "Label medical documents and clinical text for OCR, information extraction, classification, and NLP applications.",
    },
];

const qualityPoints = [
    {
        title: "Detailed Annotation Guidelines",
        description:
            "Project-specific guidelines define classes, boundaries, edge cases, and annotation rules before production begins.",
        icon: CheckCircle2,
    },

    {
        title: "Multi-Level Quality Review",
        description:
            "Annotations can pass through multiple review stages to identify inconsistencies and improve dataset reliability.",
        icon: ShieldCheck,
    },

    {
        title: "Domain-Aware Workflows",
        description:
            "Healthcare datasets require careful handling of terminology, anatomy, imaging structures, and project-specific requirements.",
        icon: BrainCircuit,
    },

    {
        title: "Secure Data Handling",
        description:
            "Confidential project workflows, access controls, NDAs, and secure data practices help protect sensitive project information.",
        icon: ShieldCheck,
    },
];

export default function HealthcareAIPage() {
    return (
        <main className="bg-white">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

                {/* Background effects */}

                <div className="absolute inset-0 pointer-events-none">

                    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm font-semibold mb-8">

                                <HeartPulseIcon />

                                Healthcare AI Data Annotation

                            </div>

                            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">

                                Build Smarter

                                <span className="block text-cyan-400">
                                    Healthcare AI
                                </span>

                                With Better Data

                            </h1>

                            <p className="mt-8 text-lg lg:text-xl text-slate-300 leading-8 max-w-2xl">

                                Healthcare AI depends on accurate, carefully labeled
                                training data. Annotexia helps AI teams create
                                reliable medical datasets through image annotation,
                                segmentation, radiology labeling, pathology
                                annotation, OCR, and custom healthcare data
                                labeling workflows.

                            </p>

                            <div className="flex flex-wrap gap-4 mt-10">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition shadow-xl shadow-cyan-500/20"
                                >
                                    Start Healthcare AI Project
                                    <ArrowRight size={20} />
                                </Link>

                                <Link
                                    href="/services/data-labeling"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 hover:border-cyan-400 transition"
                                >
                                    Explore Data Labeling
                                </Link>

                            </div>

                            <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-300">

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Medical Image Annotation
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Segmentation
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Quality Assurance
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

                            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-2xl">

                                <Image
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80"
                                    alt="Healthcare AI medical image annotation and artificial intelligence"
                                    width={900}
                                    height={650}
                                    priority
                                    className="w-full h-[420px] lg:h-[520px] object-cover rounded-2xl"
                                />

                            </div>

                            {/* Floating card */}

                            <div className="absolute -left-8 top-10 hidden md:block rounded-2xl bg-slate-900 border border-white/10 px-6 py-5 shadow-2xl">

                                <p className="text-cyan-400 text-sm font-semibold">
                                    Medical AI
                                </p>

                                <p className="text-white text-xl font-bold mt-1">
                                    Image Segmentation
                                </p>

                            </div>

                            <div className="absolute -right-8 bottom-10 hidden md:block rounded-2xl bg-slate-900 border border-white/10 px-6 py-5 shadow-2xl">

                                <p className="text-green-400 text-sm font-semibold">
                                    Quality Workflow
                                </p>

                                <p className="text-white text-xl font-bold mt-1">
                                    Multi-Level QA
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                INTRODUCTION
            ========================================================= */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-4xl mx-auto text-center">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                            Healthcare AI Training Data
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Medical AI Starts With Reliable Training Data
                        </h2>

                        <p className="mt-7 text-lg text-slate-600 leading-8">

                            Developing healthcare AI is not simply about building
                            sophisticated algorithms. AI models need carefully
                            prepared datasets that accurately represent the
                            medical conditions, anatomical structures, and
                            clinical patterns they are designed to recognize.

                        </p>

                        <p className="mt-5 text-lg text-slate-600 leading-8">

                            Annotexia helps healthcare technology companies,
                            medical AI teams, research organizations, and
                            computer vision developers transform raw medical
                            data into structured training datasets.

                        </p>

                    </div>

                </div>

            </section>

            {/* =========================================================
                SERVICES
            ========================================================= */}

            <section className="py-24 bg-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-3xl mb-16">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                            Our Healthcare Annotation Services
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Annotation Built Around Your Medical AI Workflow
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-8">
                            From medical imaging to clinical documents, our
                            annotation workflows can be adapted to your dataset,
                            annotation guidelines, model requirements, and
                            delivery format.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {annotationServices.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="group relative bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                                >

                                    <div className="absolute top-0 left-0 h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500" />

                                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-600 transition">

                                        <Icon
                                            size={28}
                                            className="text-cyan-600 group-hover:text-white transition"
                                        />

                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mt-7 group-hover:text-cyan-600 transition">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 leading-7">
                                        {service.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =========================================================
                DATA TYPES
            ========================================================= */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                                Medical Data Types
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                                Work With the Data Your AI Needs
                            </h2>

                            <p className="mt-6 text-lg text-slate-600 leading-8">

                                Different healthcare AI applications require
                                different types of training data. Our annotation
                                workflows can be adapted to a wide range of
                                medical images and healthcare datasets.

                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mt-10">

                                {dataTypes.map((type) => (

                                    <div
                                        key={type}
                                        className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                                    >

                                        <CheckCircle2
                                            size={20}
                                            className="text-cyan-600 shrink-0"
                                        />

                                        <span className="font-medium text-slate-800">
                                            {type}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        <div className="relative">

                            <div className="rounded-3xl overflow-hidden shadow-2xl">

                                <Image
                                    src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1400&q=80"
                                    alt="Medical imaging and healthcare artificial intelligence technology"
                                    width={900}
                                    height={700}
                                    className="w-full h-[520px] object-cover"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                USE CASES
            ========================================================= */}

            <section className="py-24 bg-slate-900">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="text-cyan-400 font-semibold uppercase tracking-widest">
                            Healthcare AI Applications
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
                            Where Medical Annotation Makes a Difference
                        </h2>

                        <p className="mt-6 text-lg text-slate-300 leading-8">
                            Structured training data can support a wide range of
                            healthcare AI and medical computer vision applications.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {useCases.map((item) => (

                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition"
                            >

                                <div className="flex items-start gap-4">

                                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">

                                        <CheckCircle2
                                            size={20}
                                            className="text-cyan-400"
                                        />

                                    </div>

                                    <div>

                                        <h3 className="text-xl font-bold text-white">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-slate-300 leading-7">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                QUALITY
            ========================================================= */}

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                            Quality & Security
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Quality Matters Even More in Healthcare AI
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-8">

                            Healthcare datasets demand consistency, precision,
                            clear guidelines, and careful quality control.
                            Our workflows are designed to reduce annotation
                            errors and maintain dataset consistency.

                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {qualityPoints.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:shadow-xl transition"
                                >

                                    <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center shrink-0">

                                        <Icon
                                            size={28}
                                            className="text-cyan-600"
                                        />

                                    </div>

                                    <div>

                                        <h3 className="text-2xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-slate-600 leading-7">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =========================================================
                WORKFLOW
            ========================================================= */}

            <section className="py-24 bg-gradient-to-b from-slate-50 to-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                                Our Workflow
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                                From Medical Data to AI-Ready Dataset
                            </h2>

                            <p className="mt-6 text-lg text-slate-600 leading-8">

                                We follow a structured workflow to transform raw
                                healthcare data into consistent, machine-learning-
                                ready datasets.

                            </p>

                        </div>

                        <div className="space-y-5">

                            {[
                                "Understand your medical AI requirements",
                                "Review dataset and annotation guidelines",
                                "Create project-specific labeling instructions",
                                "Train and assign annotation teams",
                                "Perform annotation and quality review",
                                "Validate and deliver the final dataset",
                            ].map((step, index) => (

                                <div
                                    key={step}
                                    className="flex items-center gap-5 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
                                >

                                    <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold shrink-0">
                                        {index + 1}
                                    </div>

                                    <p className="font-medium text-slate-800">
                                        {step}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                INTERNAL LINKS
            ========================================================= */}

            <section className="py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="rounded-3xl bg-slate-50 border border-slate-200 p-10">

                        <h2 className="text-3xl font-bold text-slate-900">
                            Explore More AI Data Annotation Services
                        </h2>

                        <p className="mt-4 text-slate-600 leading-7 max-w-3xl">
                            Explore our other annotation services and industry
                            solutions designed to support computer vision,
                            machine learning, and AI development.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-8">

                            <Link
                                href="/services/image-annotation"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition"
                            >
                                Image Annotation
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="/services/video-annotation"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition"
                            >
                                Video Annotation
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="/services/text-annotation"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition"
                            >
                                Text Annotation
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="/services/data-labeling"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition"
                            >
                                Data Labeling
                                <ArrowRight size={17} />
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="py-24 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700">

                <div className="max-w-5xl mx-auto px-6 text-center text-white">

                    <span className="uppercase tracking-widest text-cyan-100 font-semibold">
                        Build Better Healthcare AI
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-5">
                        Have a Medical AI Dataset to Annotate?
                    </h2>

                    <p className="mt-6 text-xl text-cyan-50 leading-8 max-w-3xl mx-auto">

                        Share your dataset, annotation requirements, and project
                        goals with our team. We can help you determine the right
                        annotation workflow for your healthcare AI application.

                    </p>

                    <div className="flex justify-center flex-wrap gap-5 mt-10">

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 bg-white text-cyan-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition"
                        >
                            Request Free Consultation
                            <ArrowRight size={20} />
                        </Link>

                        <Link
                            href="/services"
                            className="inline-flex items-center px-8 py-4 rounded-xl border border-white/40 text-white font-semibold hover:bg-white/10 transition"
                        >
                            View All Services
                        </Link>

                    </div>

                </div>

            </section>

            {/* =========================================================
                SEO CONTENT
            ========================================================= */}

            <section className="py-20 bg-white">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-slate-900 mb-7">
                        Healthcare AI Data Annotation Services
                    </h2>

                    <p className="text-slate-600 leading-8 mb-6">

                        Annotexia provides healthcare AI data annotation services
                        for organizations developing medical artificial
                        intelligence, computer vision, machine learning, and
                        clinical AI applications. Our workflows support medical
                        image annotation, segmentation, radiology labeling,
                        pathology annotation, OCR, clinical document labeling,
                        and custom healthcare datasets.

                    </p>

                    <p className="text-slate-600 leading-8 mb-6">

                        Medical AI systems depend on high-quality training data.
                        Accurate annotations help machine learning models learn
                        how to identify anatomical structures, abnormalities,
                        lesions, tissues, and other clinically relevant patterns.
                        Our annotation specialists follow project-specific
                        guidelines and quality assurance workflows to maintain
                        consistency across healthcare datasets.

                    </p>

                    <p className="text-slate-600 leading-8">

                        Whether you are developing a radiology AI application,
                        medical imaging solution, digital pathology platform,
                        healthcare document AI system, or another machine
                        learning product, Annotexia can provide scalable and
                        structured annotation support tailored to your project.

                    </p>

                </div>

            </section>

            {/* =========================================================
                FINAL CTA
            ========================================================= */}

            <section className="py-20 bg-slate-950 text-white">

                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Better Medical AI Starts With Better Data
                    </h2>

                    <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8">

                        Build reliable healthcare AI training datasets with
                        accurate annotation, structured workflows, and scalable
                        project support.

                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-9 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition"
                    >
                        Talk to an Annotation Expert
                        <ArrowRight size={20} />
                    </Link>

                </div>

            </section>

        </main>
    );
}

/* =========================================================
   Small reusable icon component
========================================================= */

function HeartPulseIcon() {
    return (
        <span className="inline-flex">
            <Activity size={17} />
        </span>
    );
}