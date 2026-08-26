import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    BrainCircuit,
    Factory,
    ScanSearch,
    Bot,
    Settings2,
    Eye,
    Boxes,
    Workflow,
} from "lucide-react";

export const metadata = {
    title:
        "Industrial AI Data Annotation Services | Manufacturing AI | Annotexia",

    description:
        "Annotexia provides industrial AI data annotation services for manufacturing, defect detection, quality inspection, robotics vision, assembly lines, safety monitoring, and industrial computer vision.",

    keywords: [
        "industrial AI data annotation",
        "manufacturing data annotation",
        "manufacturing AI training data",
        "industrial computer vision",
        "defect detection annotation",
        "quality inspection annotation",
        "factory image annotation",
        "robotics vision annotation",
        "industrial image annotation",
        "manufacturing computer vision",
        "PPE detection annotation",
        "assembly line annotation",
        "product defect annotation",
        "Annotexia",
    ],

    alternates: {
        canonical:
            "https://www.annotexia.com/industries/industrial-ai",
    },

    openGraph: {
        title:
            "Industrial AI Data Annotation Services | Annotexia",

        description:
            "Build reliable manufacturing and industrial AI systems with accurate image, video, object detection, segmentation, and defect annotation.",

        url:
            "https://www.annotexia.com/industries/industrial-ai",

        siteName: "Annotexia",

        type: "website",

        images: [
            {
                url:
                    "https://www.annotexia.com/images/industries/industrial-ai.webp",
                width: 1200,
                height: 630,
                alt:
                    "Industrial AI and manufacturing data annotation services",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Industrial AI Data Annotation Services | Annotexia",

        description:
            "Accurate training data for manufacturing AI, defect detection, robotics vision, and industrial computer vision.",

        images: [
            "https://www.annotexia.com/images/industries/industrial-ai.webp",
        ],
    },
};

const annotationServices = [
    {
        title: "Defect Detection Annotation",
        description:
            "Identify and label product defects, surface imperfections, cracks, scratches, dents, missing components, and manufacturing abnormalities.",
        icon: ScanSearch,
    },

    {
        title: "Quality Inspection Annotation",
        description:
            "Create structured datasets for automated visual inspection systems used to identify defective or non-conforming products.",
        icon: Eye,
    },

    {
        title: "Industrial Object Detection",
        description:
            "Annotate machines, components, tools, products, workers, equipment, and other objects required by industrial computer vision models.",
        icon: Boxes,
    },

    {
        title: "Robotics Vision Annotation",
        description:
            "Prepare image and video datasets that help industrial robots understand objects, workspaces, components, and production environments.",
        icon: Bot,
    },

    {
        title: "Assembly Line Annotation",
        description:
            "Track products, components, processes, and events across manufacturing and production-line video datasets.",
        icon: Workflow,
    },

    {
        title: "Safety & PPE Annotation",
        description:
            "Label helmets, safety vests, gloves, workers, restricted areas, and other safety-related objects for industrial monitoring systems.",
        icon: ShieldCheck,
    },
];

const dataTypes = [
    "Factory Images",
    "Production Line Images",
    "Industrial Video",
    "Product Images",
    "Machine Images",
    "Equipment Images",
    "Robotics Camera Data",
    "Inspection Images",
];

const useCases = [
    {
        title: "Automated Defect Detection",
        description:
            "Train computer vision systems to identify manufacturing defects automatically during production and inspection.",
    },

    {
        title: "Visual Quality Inspection",
        description:
            "Create labeled datasets for AI-powered quality control and automated inspection systems.",
    },

    {
        title: "Predictive Manufacturing",
        description:
            "Prepare visual datasets that support AI systems designed to monitor machines, production environments, and operational conditions.",
    },

    {
        title: "Industrial Robotics",
        description:
            "Help robots recognize components, products, tools, and workspaces through accurately annotated vision datasets.",
    },

    {
        title: "Worker Safety Monitoring",
        description:
            "Build datasets for detecting workers, PPE compliance, restricted zones, and potentially unsafe situations.",
    },

    {
        title: "Production Line Monitoring",
        description:
            "Annotate objects, processes, and events across production-line footage for automated monitoring and analytics.",
    },
];

const qualityFeatures = [
    {
        title: "Consistent Annotation Guidelines",
        description:
            "Project-specific instructions define object classes, defect categories, boundaries, edge cases, and labeling rules.",
        icon: CheckCircle2,
    },

    {
        title: "Multi-Level Quality Assurance",
        description:
            "Review workflows help identify missed objects, incorrect labels, inconsistent boundaries, and other annotation errors.",
        icon: ShieldCheck,
    },

    {
        title: "Industrial Domain Workflows",
        description:
            "Annotation workflows can be adapted to manufacturing environments, product categories, inspection requirements, and production processes.",
        icon: Settings2,
    },

    {
        title: "Scalable Production",
        description:
            "Scale annotation teams according to dataset volume, project timelines, and changing production requirements.",
        icon: Factory,
    },
];

export default function IndustrialAIPage() {
    return (
        <main className="bg-white">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0 pointer-events-none">

                    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[140px]" />

                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />

                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm font-semibold mb-8">

                                <Factory size={17} />

                                Industrial AI Data Annotation

                            </div>

                            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">

                                Power Industrial AI

                                <span className="block text-cyan-400">
                                    With Better Training Data
                                </span>

                            </h1>

                            <p className="mt-8 text-lg lg:text-xl text-slate-300 leading-8 max-w-2xl">

                                Modern manufacturing depends on intelligent
                                computer vision systems. Annotexia helps
                                industrial AI teams build reliable training
                                datasets for defect detection, quality
                                inspection, robotics, production monitoring,
                                and worker safety.

                            </p>

                            <div className="flex flex-wrap gap-4 mt-10">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition shadow-xl shadow-cyan-500/20"
                                >
                                    Start Your Industrial AI Project
                                    <ArrowRight size={20} />
                                </Link>

                                <Link
                                    href="/services/image-annotation"
                                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 hover:border-cyan-400 transition"
                                >
                                    Explore Image Annotation
                                </Link>

                            </div>

                            <div className="flex flex-wrap gap-6 mt-10 text-sm text-slate-300">

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Defect Detection
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Quality Inspection
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Robotics Vision
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

                            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-2xl">

                                <Image
                                    src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80"
                                    alt="Industrial manufacturing facility for AI computer vision and data annotation"
                                    width={900}
                                    height={650}
                                    priority
                                    className="w-full h-[420px] lg:h-[520px] object-cover rounded-2xl"
                                />

                            </div>

                            <div className="absolute -left-8 top-10 hidden md:block rounded-2xl bg-slate-900 border border-white/10 px-6 py-5 shadow-2xl">

                                <p className="text-cyan-400 text-sm font-semibold">
                                    Manufacturing AI
                                </p>

                                <p className="text-white text-xl font-bold mt-1">
                                    Defect Detection
                                </p>

                            </div>

                            <div className="absolute -right-8 bottom-10 hidden md:block rounded-2xl bg-slate-900 border border-white/10 px-6 py-5 shadow-2xl">

                                <p className="text-green-400 text-sm font-semibold">
                                    Computer Vision
                                </p>

                                <p className="text-white text-xl font-bold mt-1">
                                    Quality Inspection
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
                            Manufacturing AI Training Data
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Industrial AI Starts With the Right Data
                        </h2>

                        <p className="mt-7 text-lg text-slate-600 leading-8">

                            A manufacturing camera can capture thousands of
                            products every hour. But an AI system needs to
                            understand what is normal, what is defective, and
                            what requires attention.

                        </p>

                        <p className="mt-5 text-lg text-slate-600 leading-8">

                            High-quality annotation transforms raw factory
                            images and videos into structured training data
                            that computer vision models can learn from.

                            Annotexia helps businesses build these datasets
                            for inspection, automation, robotics, safety, and
                            industrial intelligence.

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
                            Industrial Annotation Services
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Training Data for Smarter Manufacturing
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-8">

                            From individual product images to large-scale
                            production-line video, our annotation workflows
                            can be customized around your industrial AI
                            application.

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
                                Industrial Data Types
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                                Annotate the Data Behind Your Factory AI
                            </h2>

                            <p className="mt-6 text-lg text-slate-600 leading-8">

                                Industrial AI systems can rely on different
                                visual data sources depending on the
                                manufacturing environment and application.

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
                                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80"
                                    alt="Industrial engineer working with manufacturing equipment and automation"
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
                            Industrial AI Applications
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4">
                            Where Industrial Annotation Creates Value
                        </h2>

                        <p className="mt-6 text-lg text-slate-300 leading-8">

                            Accurate training data can support computer vision
                            systems across inspection, automation, robotics,
                            safety, and production monitoring.

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

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                            Quality & Scalability
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                            Industrial AI Requires Consistent Data
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-8">

                            A model trained on inconsistent defect labels or
                            incomplete object annotations can struggle when
                            deployed on a real production line.

                            That&apos;s why annotation quality matters from the
                            beginning.

                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {qualityFeatures.map((item) => {

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

            <section className="py-24 bg-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                                Annotation Workflow
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-4">
                                From Factory Data to AI-Ready Dataset
                            </h2>

                            <p className="mt-6 text-lg text-slate-600 leading-8">

                                Our structured workflow helps convert raw
                                industrial data into consistent datasets ready
                                for computer vision and machine learning
                                development.

                            </p>

                            <Link
                                href="/services/data-labeling"
                                className="inline-flex items-center gap-2 mt-8 text-cyan-600 font-semibold hover:gap-3 transition-all"
                            >
                                Learn about our data labeling workflow
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        <div className="space-y-5">

                            {[
                                "Understand your manufacturing AI requirements",
                                "Review sample images, videos, and defect categories",
                                "Create detailed project-specific annotation guidelines",
                                "Train and assign annotation specialists",
                                "Perform production annotation and quality reviews",
                                "Validate and deliver the final AI-ready dataset",
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
                RELATED SERVICES
            ========================================================= */}

            <section className="py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="rounded-3xl bg-slate-50 border border-slate-200 p-10">

                        <h2 className="text-3xl font-bold text-slate-900">
                            Explore Related AI Data Annotation Services
                        </h2>

                        <p className="mt-4 text-slate-600 leading-7 max-w-3xl">

                            Combine industrial annotation with image, video,
                            and custom data labeling workflows to create
                            training datasets for your AI application.

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
                                href="/services/data-labeling"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition"
                            >
                                Data Labeling
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href="/services/text-annotation"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition"
                            >
                                Text Annotation
                                <ArrowRight size={17} />
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="py-24 bg-gradient-to-r from-blue-700 via-cyan-700 to-cyan-600">

                <div className="max-w-5xl mx-auto px-6 text-center text-white">

                    <span className="uppercase tracking-widest text-cyan-100 font-semibold">
                        Build Better Industrial AI
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-5">
                        Have Industrial Data to Annotate?
                    </h2>

                    <p className="mt-6 text-xl text-cyan-50 leading-8 max-w-3xl mx-auto">

                        Share your manufacturing dataset, annotation
                        requirements, defect categories, and project goals.
                        Our team can help you plan the right annotation
                        workflow for your industrial AI application.

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
                        Industrial AI Data Annotation Services
                    </h2>

                    <p className="text-slate-600 leading-8 mb-6">

                        Annotexia provides industrial AI data annotation
                        services for manufacturing companies, robotics
                        developers, computer vision teams, and organizations
                        developing automated inspection and production
                        monitoring systems. Our annotation workflows support
                        object detection, defect detection, image
                        classification, segmentation, video annotation,
                        safety monitoring, and custom industrial datasets.

                    </p>

                    <p className="text-slate-600 leading-8 mb-6">

                        Manufacturing AI systems depend on accurately labeled
                        visual data. Whether an AI model needs to identify
                        product defects, recognize components, monitor
                        production lines, detect personal protective equipment,
                        or understand a robotic workspace, consistent
                        annotations help create the training data required for
                        reliable computer vision models.

                    </p>

                    <p className="text-slate-600 leading-8">

                        Annotexia can support both small pilot datasets and
                        larger production-scale annotation projects. Our
                        workflows are designed around project-specific
                        guidelines, quality assurance requirements, annotation
                        formats, and delivery schedules.

                    </p>

                </div>

            </section>

            {/* =========================================================
                FINAL CTA
            ========================================================= */}

            <section className="py-20 bg-slate-950 text-white">

                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Better Manufacturing AI Starts With Better Data
                    </h2>

                    <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8">

                        Build reliable industrial AI training datasets with
                        accurate annotation, structured workflows, and
                        scalable project support.

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