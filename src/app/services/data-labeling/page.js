import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Target,
    Layers3,
    BrainCircuit,
    Database,
    ImageIcon,
    Video,
    FileText,
    Mic,
    ScanLine,
    Workflow,
    Users,
    Zap,
    BarChart3,
} from "lucide-react";

export const metadata = {
    title:
        "Data Labeling Services | AI Training Data & Machine Learning | Annotexia",
    description:
        "Annotexia provides accurate and scalable data labeling services for AI and machine learning, including image, video, text, audio, LiDAR, OCR, segmentation, object detection, and custom datasets.",
    keywords: [
        "data labeling services",
        "data annotation services",
        "AI data labeling",
        "machine learning data labeling",
        "image labeling services",
        "video labeling services",
        "text annotation services",
        "audio annotation services",
        "LiDAR labeling",
        "OCR annotation",
        "AI training data",
        "custom data labeling",
    ],
};

const services = [
    {
        title: "Image Data Labeling",
        description:
            "Create high-quality computer vision datasets using bounding boxes, polygons, segmentation, keypoints, classification, and object detection.",
        icon: ImageIcon,
        features: [
            "Bounding Boxes",
            "Polygon Annotation",
            "Semantic Segmentation",
            "Keypoint Annotation",
        ],
    },
    {
        title: "Video Data Labeling",
        description:
            "Turn video content into structured training data through object tracking, event detection, action recognition, and frame-level annotation.",
        icon: Video,
        features: [
            "Object Tracking",
            "Event Detection",
            "Action Recognition",
            "Frame Annotation",
        ],
    },
    {
        title: "Text Data Labeling",
        description:
            "Build NLP and language AI datasets with entity labeling, sentiment analysis, intent classification, categorization, and custom text annotation.",
        icon: FileText,
        features: [
            "Named Entity Recognition",
            "Sentiment Analysis",
            "Intent Classification",
            "Text Categorization",
        ],
    },
    {
        title: "Audio Data Labeling",
        description:
            "Prepare speech and audio datasets for AI applications using transcription, speaker identification, emotion, and sound classification.",
        icon: Mic,
        features: [
            "Speech Transcription",
            "Speaker Identification",
            "Audio Classification",
            "Emotion Detection",
        ],
    },
    {
        title: "LiDAR & 3D Labeling",
        description:
            "Generate structured 3D training data for autonomous systems, robotics, mapping, and perception models.",
        icon: ScanLine,
        features: [
            "3D Bounding Boxes",
            "Point Cloud Annotation",
            "Cuboids",
            "3D Object Tracking",
        ],
    },
    {
        title: "OCR & Document Labeling",
        description:
            "Transform documents, invoices, forms, receipts, and scanned content into structured datasets for document AI systems.",
        icon: FileText,
        features: [
            "Text Extraction",
            "Document Classification",
            "Entity Labeling",
            "Layout Annotation",
        ],
    },
];

const process = [
    {
        number: "01",
        title: "Understand",
        description:
            "We analyze your dataset, annotation requirements, classes, edge cases, output format, and project objectives.",
        icon: BrainCircuit,
    },
    {
        number: "02",
        title: "Define Guidelines",
        description:
            "Clear annotation guidelines are created so every annotator follows the same rules throughout the project.",
        icon: Workflow,
    },
    {
        number: "03",
        title: "Annotate",
        description:
            "Trained annotation specialists label your data using professional annotation tools and project-specific workflows.",
        icon: Target,
    },
    {
        number: "04",
        title: "Quality Review",
        description:
            "Annotations go through structured quality checks to identify missing labels, inconsistencies, and incorrect classifications.",
        icon: ShieldCheck,
    },
    {
        number: "05",
        title: "Validate",
        description:
            "Our team validates the final dataset against your guidelines and project requirements before delivery.",
        icon: CheckCircle2,
    },
    {
        number: "06",
        title: "Deliver",
        description:
            "Validated datasets are delivered in your required format and prepared for model training or further processing.",
        icon: Database,
    },
];

const benefits = [
    {
        title: "High-Quality Training Data",
        description:
            "Structured annotation workflows and quality checks help create consistent datasets for machine learning.",
        icon: Target,
    },
    {
        title: "Scalable Workforce",
        description:
            "Scale annotation capacity according to your project volume, from small pilot datasets to large production workloads.",
        icon: Users,
    },
    {
        title: "Multiple Data Types",
        description:
            "Work with image, video, text, audio, LiDAR, OCR, and custom annotation requirements under one partner.",
        icon: Layers3,
    },
    {
        title: "Secure Workflows",
        description:
            "Confidential project handling, controlled access, NDA support, and secure data workflows help protect your datasets.",
        icon: ShieldCheck,
    },
    {
        title: "Faster AI Development",
        description:
            "Reliable labeled data helps your machine learning team spend less time preparing datasets and more time improving models.",
        icon: Zap,
    },
    {
        title: "Production-Ready Delivery",
        description:
            "Receive validated datasets in formats and structures designed around your downstream machine learning workflow.",
        icon: BarChart3,
    },
];

const formats = [
    "COCO",
    "YOLO",
    "Pascal VOC",
    "JSON",
    "XML",
    "CSV",
    "Label Studio",
    "CVAT",
    "Roboflow",
    "Custom Formats",
];

const industries = [
    "Autonomous Vehicles",
    "Healthcare AI",
    "Sports Analytics",
    "Agriculture AI",
    "Retail & E-commerce",
    "Robotics",
    "Drone & Aerial Imaging",
    "Manufacturing",
];

export default function DataLabelingPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[130px]" />
                    <div className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full bg-blue-600/20 blur-[140px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-semibold mb-7">
                                <Database size={16} />
                                AI Training Data Services
                            </span>

                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08]">

                                Data Labeling

                                <span className="block text-cyan-400">
                                    Built for Better AI
                                </span>

                            </h1>

                            <p className="mt-8 text-lg lg:text-xl text-slate-300 leading-8 max-w-2xl">

                                Raw data doesn&apos;t train an AI model.

                                <span className="text-white font-semibold">
                                    {" "}Well-labeled data does.
                                </span>

                                {" "}Annotexia helps AI teams transform images,
                                videos, text, audio, LiDAR, and documents into
                                accurate, structured training datasets.

                            </p>

                            <div className="flex flex-wrap gap-4 mt-10">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold transition shadow-xl shadow-cyan-500/20"
                                >
                                    Get Free Consultation
                                    <ArrowRight size={19} />
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 hover:border-cyan-400/50 transition font-semibold"
                                >
                                    Explore Services
                                </Link>

                            </div>

                            <div className="flex flex-wrap gap-x-8 gap-y-4 mt-10 text-sm text-slate-300">

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Multi-level QA
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Scalable Workforce
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Secure Workflows
                                </div>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

                            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-2xl">

                                <Image
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                                    alt="AI data labeling and machine learning training data"
                                    width={900}
                                    height={650}
                                    priority
                                    className="w-full h-[420px] lg:h-[500px] object-cover rounded-2xl"
                                />

                            </div>

                            <div className="absolute -left-6 top-12 hidden md:block bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 shadow-2xl">

                                <p className="text-cyan-400 text-sm font-semibold">
                                    Data Types
                                </p>

                                <p className="text-white text-xl font-bold">
                                    Image • Video • Text
                                </p>

                            </div>

                            <div className="absolute -right-6 bottom-12 hidden md:block bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 shadow-2xl">

                                <p className="text-cyan-400 text-sm font-semibold">
                                    Workflow
                                </p>

                                <p className="text-white text-xl font-bold">
                                    Label → Review → Validate
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                INTRO
            ========================================================= */}

            <section className="py-24">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">
                                Why Data Labeling Matters
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                                Your AI model can only learn from what you teach it.
                            </h2>

                        </div>

                        <div className="text-lg text-slate-600 leading-8">

                            <p className="mb-6">
                                A machine learning model doesn&apos;t automatically know
                                what a pedestrian, product, tumor, crop, document,
                                player, or vehicle represents.
                            </p>

                            <p>
                                Data labeling converts raw information into structured
                                training examples that allow AI systems to recognize
                                patterns, understand objects, and make better predictions.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                SERVICES
            ========================================================= */}

            <section className="py-24 bg-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">
                            Our Data Labeling Services
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                            Label Almost Any Data Your AI Needs
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-8">
                            From computer vision and NLP to speech, LiDAR, and
                            document AI, our annotation workflows can be customized
                            around your model requirements.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {services.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                                >

                                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center group-hover:bg-cyan-500 transition">

                                        <Icon
                                            size={28}
                                            className="text-cyan-600 group-hover:text-white transition"
                                        />

                                    </div>

                                    <h3 className="text-2xl font-bold mt-7">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 leading-7">
                                        {service.description}
                                    </p>

                                    <div className="mt-7 space-y-3">

                                        {service.features.map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-center gap-3 text-sm font-medium"
                                            >

                                                <CheckCircle2
                                                    size={17}
                                                    className="text-cyan-600 shrink-0"
                                                />

                                                {feature}

                                            </div>

                                        ))}

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =========================================================
                PROCESS
            ========================================================= */}

            <section className="py-24 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">
                            Our Workflow
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                            From Raw Data to AI-Ready Dataset
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-8">
                            A structured workflow keeps annotation projects
                            consistent, measurable, and ready for production.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {process.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.number}
                                    className="relative rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition"
                                >

                                    <div className="flex items-center justify-between">

                                        <span className="text-5xl font-black text-slate-100">
                                            {item.number}
                                        </span>

                                        <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                                            <Icon
                                                className="text-cyan-600"
                                                size={24}
                                            />
                                        </div>

                                    </div>

                                    <h3 className="text-2xl font-bold mt-6">
                                        {item.title}
                                    </h3>

                                    <p className="text-slate-600 leading-7 mt-4">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =========================================================
                BENEFITS
            ========================================================= */}

            <section className="py-24 bg-slate-950 text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="text-cyan-400 font-bold uppercase tracking-widest text-sm">
                                Why Annotexia
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                                More Than Labeling.
                                <span className="block text-cyan-400">
                                    A Better Data Pipeline.
                                </span>
                            </h2>

                            <p className="mt-7 text-lg text-slate-300 leading-8">
                                Your annotation partner should understand more than
                                where to draw a box or assign a label. We focus on
                                consistency, quality, scalability, and the requirements
                                of your downstream AI system.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 mt-9 px-7 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 font-bold transition"
                            >
                                Discuss Your Dataset
                                <ArrowRight size={19} />
                            </Link>

                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">

                            {benefits.map((benefit) => {

                                const Icon = benefit.icon;

                                return (
                                    <div
                                        key={benefit.title}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition"
                                    >

                                        <Icon
                                            size={28}
                                            className="text-cyan-400"
                                        />

                                        <h3 className="text-xl font-bold mt-5">
                                            {benefit.title}
                                        </h3>

                                        <p className="mt-3 text-sm text-slate-300 leading-6">
                                            {benefit.description}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                INDUSTRIES
            ========================================================= */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-14">

                        <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">
                            Industry Applications
                        </span>

                        <h2 className="text-4xl font-bold mt-4">
                            Data Labeling Across AI Industries
                        </h2>

                        <p className="mt-5 text-lg text-slate-600">
                            Our workflows can be adapted to different industries,
                            datasets, annotation standards, and model objectives.
                        </p>

                    </div>

                    <div className="flex flex-wrap justify-center gap-4">

                        {industries.map((industry) => (

                            <div
                                key={industry}
                                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50 transition"
                            >

                                <CheckCircle2
                                    size={19}
                                    className="text-cyan-600"
                                />

                                <span className="font-semibold">
                                    {industry}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                FORMATS
            ========================================================= */}

            <section className="py-20 bg-slate-50">

                <div className="max-w-6xl mx-auto px-6 text-center">

                    <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">
                        Output Formats
                    </span>

                    <h2 className="text-4xl font-bold mt-4">
                        Dataset Formats That Fit Your Workflow
                    </h2>

                    <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
                        We can deliver annotated datasets in commonly used formats
                        or work with your custom schema and output requirements.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-10">

                        {formats.map((format) => (

                            <span
                                key={format}
                                className="px-5 py-3 rounded-xl bg-white border border-slate-200 font-semibold text-slate-700 shadow-sm"
                            >
                                {format}
                            </span>

                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 text-white p-12 lg:p-20">

                        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative grid lg:grid-cols-2 gap-12 items-center">

                            <div>

                                <span className="text-cyan-100 font-semibold uppercase tracking-widest text-sm">
                                    Start Your AI Project
                                </span>

                                <h2 className="text-4xl lg:text-5xl font-extrabold mt-4 leading-tight">
                                    Have Data?
                                    <span className="block">
                                        Let&apos;s Make It AI-Ready.
                                    </span>
                                </h2>

                                <p className="mt-6 text-lg text-cyan-50 leading-8 max-w-2xl">
                                    Share your dataset, annotation requirements,
                                    expected volume, and timeline. Our team will
                                    help you determine the right labeling workflow
                                    for your AI project.
                                </p>

                            </div>

                            <div className="lg:text-right">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 bg-white text-cyan-700 px-9 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition shadow-xl"
                                >
                                    Request Free Consultation
                                    <ArrowRight size={21} />
                                </Link>

                                <p className="mt-5 text-sm text-cyan-100">
                                    Discuss your project with our annotation specialists.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                FAQ
            ========================================================= */}

            <section className="py-24 bg-slate-50">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="text-center mb-14">

                        <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">
                            Frequently Asked Questions
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                            Data Labeling Questions
                        </h2>

                    </div>

                    <div className="space-y-5">

                        {[
                            {
                                q: "What types of data can Annotexia label?",
                                a: "We support image, video, text, audio, LiDAR, documents, OCR, and custom datasets for AI and machine learning applications.",
                            },
                            {
                                q: "Can you handle large-scale data labeling projects?",
                                a: "Yes. Our workflows are designed to scale according to project volume and requirements, from small proof-of-concept datasets to large production workloads.",
                            },
                            {
                                q: "Which annotation formats do you support?",
                                a: "We support formats such as COCO, YOLO, Pascal VOC, JSON, XML, CSV, Label Studio, CVAT, Roboflow, and custom formats.",
                            },
                            {
                                q: "How do you maintain annotation quality?",
                                a: "We use project-specific guidelines, trained annotators, quality reviews, validation workflows, and feedback loops to maintain annotation consistency.",
                            },
                            {
                                q: "Can you sign an NDA before receiving our data?",
                                a: "Yes. NDA and confidential project workflows can be arranged before accessing sensitive project datasets.",
                            },
                            {
                                q: "Can we test your annotation quality before starting a large project?",
                                a: "Yes. You can discuss a sample annotation or pilot project with our team before committing to a larger production workflow.",
                            },
                        ].map((faq) => (

                            <details
                                key={faq.q}
                                className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm"
                            >

                                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 font-bold text-lg">

                                    {faq.q}

                                    <span className="text-cyan-600 text-2xl group-open:rotate-45 transition-transform">
                                        +
                                    </span>

                                </summary>

                                <p className="mt-5 text-slate-600 leading-7">
                                    {faq.a}
                                </p>

                            </details>

                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                SEO CONTENT
            ========================================================= */}

            <section className="py-20 bg-white">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold">
                        Professional Data Labeling Services for AI
                    </h2>

                    <p className="mt-6 text-slate-600 leading-8">
                        Annotexia provides professional data labeling and data
                        annotation services for organizations developing Artificial
                        Intelligence and Machine Learning applications. Our services
                        cover image labeling, video annotation, text annotation,
                        audio labeling, LiDAR annotation, OCR, document AI,
                        segmentation, object detection, classification, tracking,
                        and custom annotation workflows.
                    </p>

                    <p className="mt-6 text-slate-600 leading-8">
                        High-quality labeled data is essential for training reliable
                        machine learning models. Our annotation workflows combine
                        trained annotation specialists, detailed project guidelines,
                        quality assurance processes, and scalable production workflows
                        to help businesses create consistent AI training datasets.
                    </p>

                    <p className="mt-6 text-slate-600 leading-8">
                        Whether you are developing autonomous vehicles, healthcare AI,
                        sports analytics, agriculture systems, robotics, retail
                        applications, computer vision models, or document intelligence,
                        Annotexia can help transform your raw data into structured,
                        machine-learning-ready datasets.
                    </p>

                </div>

            </section>

            {/* =========================================================
                FINAL CTA
            ========================================================= */}

            <section className="py-20 bg-slate-950 text-white">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <Database
                        size={42}
                        className="mx-auto text-cyan-400"
                    />

                    <h2 className="text-4xl lg:text-5xl font-bold mt-7">
                        Your AI Starts With Your Data.
                    </h2>

                    <p className="mt-6 text-lg text-slate-300 leading-8 max-w-3xl mx-auto">
                        Turn raw datasets into reliable training data with
                        Annotexia&apos;s professional data labeling services.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 mt-9 px-9 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg transition shadow-xl shadow-cyan-500/20"
                    >
                        Start Your Project
                        <ArrowRight size={21} />
                    </Link>

                </div>

            </section>

        </main>
    );
}