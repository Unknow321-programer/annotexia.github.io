import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Target,
    Sprout,
    ScanLine,
    BrainCircuit,
    Layers3,
    Workflow,
    Database,
    Clock3,
} from "lucide-react";

export const metadata = {
    title:
        "Agriculture AI Data Annotation Services | Crop & Drone Imagery | Annotexia",

    description:
        "Annotexia provides high-quality agriculture data annotation services for crop monitoring, plant disease detection, weed identification, drone imagery, segmentation, object detection, and precision agriculture AI.",

    keywords: [
        "agriculture data annotation",
        "agriculture AI annotation",
        "crop image annotation",
        "plant disease annotation",
        "weed detection annotation",
        "drone imagery annotation",
        "precision agriculture datasets",
        "agriculture computer vision",
        "crop segmentation",
        "plant detection dataset",
        "farm AI training data",
        "agricultural image labeling",
    ],

    alternates: {
        canonical: "https://www.annotexia.com/industries/agriculture",
    },

    openGraph: {
        title:
            "Agriculture AI Data Annotation Services | Annotexia",
        description:
            "Build reliable agricultural AI with accurately annotated crop, plant, drone, and field imagery datasets.",
        url: "https://www.annotexia.com/industries/agriculture",
        siteName: "Annotexia",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
                width: 1400,
                height: 900,
                alt: "Agriculture AI crop monitoring and data annotation",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Agriculture AI Data Annotation Services | Annotexia",
        description:
            "Accurate training datasets for crop monitoring, disease detection, drone imagery and precision agriculture AI.",
        images: [
            "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
        ],
    },
};

const annotationServices = [
    {
        title: "Crop Detection & Annotation",
        description:
            "Identify and label crops, plants, fields, and agricultural objects to create reliable datasets for computer vision models.",
        icon: Sprout,
    },
    {
        title: "Plant Disease Detection",
        description:
            "Annotate visible symptoms, damaged leaves, infected plants, and disease patterns for AI-powered crop health monitoring.",
        icon: ScanLine,
    },
    {
        title: "Weed Detection",
        description:
            "Create labeled datasets that help AI systems distinguish weeds from crops for precision weed management.",
        icon: Target,
    },
    {
        title: "Crop Segmentation",
        description:
            "Use semantic and instance segmentation to precisely identify crop regions, plant structures, leaves, and field boundaries.",
        icon: Layers3,
    },
    {
        title: "Drone Image Annotation",
        description:
            "Transform drone and aerial imagery into structured datasets for crop monitoring, field analysis, mapping, and inspection.",
        icon: Database,
    },
    {
        title: "Object Detection",
        description:
            "Annotate agricultural equipment, plants, fruits, irrigation systems, livestock, and other objects required by your AI model.",
        icon: ScanLine,
    },
    {
        title: "Field Boundary Annotation",
        description:
            "Create accurate field and land-use boundaries for agricultural mapping, crop classification, and geospatial AI applications.",
        icon: Target,
    },
    {
        title: "Custom Agriculture Annotation",
        description:
            "Build project-specific annotation workflows around your agricultural datasets, taxonomy, guidelines, and model requirements.",
        icon: Workflow,
    },
];

const applications = [
    "Crop Health Monitoring",
    "Plant Disease Detection",
    "Weed Identification",
    "Precision Agriculture",
    "Yield Prediction",
    "Smart Farming",
    "Agricultural Robotics",
    "Drone-Based Crop Analysis",
    "Field Mapping",
    "Fruit & Vegetable Detection",
    "Irrigation Monitoring",
    "Agricultural Research",
];

const annotationTypes = [
    "Bounding Boxes",
    "Polygon Annotation",
    "Semantic Segmentation",
    "Instance Segmentation",
    "Keypoint Annotation",
    "Classification",
    "Object Detection",
    "Image Segmentation",
    "Video Annotation",
    "Aerial Image Annotation",
];

const workflow = [
    {
        number: "01",
        title: "Understand Your Agriculture AI Project",
        description:
            "We review your dataset, target objects, annotation taxonomy, model requirements, quality expectations, and delivery format.",
    },
    {
        number: "02",
        title: "Create Annotation Guidelines",
        description:
            "Clear project-specific instructions define how crops, diseases, weeds, field boundaries, and other agricultural objects should be labeled.",
    },
    {
        number: "03",
        title: "Annotate the Dataset",
        description:
            "Trained annotation specialists process your images, videos, drone imagery, or other agricultural data according to the approved guidelines.",
    },
    {
        number: "04",
        title: "Quality Assurance",
        description:
            "Annotations pass through structured quality checks to identify missing labels, incorrect classes, boundary errors, and inconsistencies.",
    },
    {
        number: "05",
        title: "Validate & Deliver",
        description:
            "The final dataset is reviewed and delivered in your required format so it can move directly into your machine learning workflow.",
    },
];

const whyAnnotexia = [
    {
        title: "Agriculture-Specific Workflows",
        description:
            "Agricultural datasets contain complex visual conditions. Our workflows can be adapted to crop types, disease classes, field environments, and project-specific requirements.",
        icon: Sprout,
    },
    {
        title: "High-Quality Annotation",
        description:
            "Structured guidelines and multi-level quality checks help maintain consistent annotations across large agricultural datasets.",
        icon: CheckCircle2,
    },
    {
        title: "Scalable Delivery",
        description:
            "Whether you're preparing a small research dataset or scaling a production AI model, our workflows can grow with your project.",
        icon: Layers3,
    },
    {
        title: "Secure Data Handling",
        description:
            "Confidential project workflows, controlled access, and NDA support help protect your agricultural imagery and business data.",
        icon: ShieldCheck,
    },
    {
        title: "Multiple Data Types",
        description:
            "We support image, video, drone, aerial, and other visual datasets used by modern agricultural AI systems.",
        icon: Database,
    },
    {
        title: "Flexible Requirements",
        description:
            "Your taxonomy, annotation guidelines, quality thresholds, tools, and output formats can be incorporated into the workflow.",
        icon: Workflow,
    },
];

const faqs = [
    {
        question:
            "What agriculture data can Annotexia annotate?",
        answer:
            "We can work with crop images, plant images, drone imagery, aerial imagery, field photographs, agricultural videos, and other visual datasets used for AI and machine learning applications.",
    },
    {
        question:
            "Can you annotate plant diseases?",
        answer:
            "Yes. We can create datasets for plant disease detection by labeling infected plants, affected leaves, disease symptoms, damaged regions, and other project-specific classes.",
    },
    {
        question:
            "Do you provide drone imagery annotation for agriculture?",
        answer:
            "Yes. Drone and aerial imagery can be annotated for crop monitoring, field mapping, plant detection, disease identification, land-use classification, and other precision agriculture applications.",
    },
    {
        question:
            "Which annotation techniques do you support?",
        answer:
            "Depending on the project, we support bounding boxes, polygons, semantic segmentation, instance segmentation, classification, keypoints, object tracking, and custom annotation workflows.",
    },
    {
        question:
            "Can you handle large agricultural datasets?",
        answer:
            "Yes. Our workflows are designed to support projects ranging from smaller research datasets to large-scale commercial AI training datasets.",
    },
    {
        question:
            "Can I provide my own annotation guidelines?",
        answer:
            "Absolutely. Your existing taxonomy and annotation guidelines can be incorporated into the project workflow. We can also help structure guidelines when you are starting from scratch.",
    },
    {
        question:
            "Which output formats do you support?",
        answer:
            "Depending on project requirements, we can support formats such as COCO, YOLO, Pascal VOC, JSON, XML, CSV, and other custom formats.",
    },
    {
        question:
            "Can I test your annotation quality before starting a large project?",
        answer:
            "Yes. We can provide a sample annotation workflow so you can evaluate quality, consistency, communication, and turnaround before moving forward with a larger engagement.",
    },
];

export default function AgriculturePage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950">

                <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
                    <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
                    <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-green-500/10 blur-[120px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

                            <span className="mb-7 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                                Agriculture AI Data Annotation
                            </span>

                            <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-6xl">

                                Teaching AI to

                                <span className="block text-emerald-400">
                                    Understand Every Field
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">

                                From healthy crops and plant diseases to weeds,
                                field boundaries, and drone imagery, Annotexia
                                transforms agricultural data into high-quality
                                training datasets for computer vision and
                                precision agriculture AI.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600"
                                >
                                    Request Free Sample

                                    <ArrowRight
                                        className="ml-2"
                                        size={19}
                                    />
                                </Link>

                                <Link
                                    href="/services"
                                    className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-emerald-400 hover:bg-white/5"
                                >
                                    Explore Annotation Services
                                </Link>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-emerald-400"
                                    />
                                    Image & Video
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-emerald-400"
                                    />
                                    Drone Imagery
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-emerald-400"
                                    />
                                    Segmentation
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute -inset-5 rounded-[40px] bg-emerald-500/10 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">

                                <Image
                                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80"
                                    alt="Agricultural field used for agriculture AI crop monitoring and data annotation"
                                    width={1400}
                                    height={900}
                                    priority
                                    className="h-[420px] w-full rounded-[24px] object-cover"
                                />

                            </div>

                            {/* Floating card */}

                            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl backdrop-blur md:block">

                                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                                    AI Dataset
                                </p>

                                <p className="mt-1 text-lg font-bold text-white">
                                    Crop Detection
                                </p>

                            </div>

                            <div className="absolute -bottom-6 right-5 rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl backdrop-blur">

                                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                    Annotation
                                </p>

                                <p className="mt-1 text-lg font-bold text-white">
                                    Field + Plant Data
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                INTRO / STORY
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-5xl px-6 text-center">

                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                        The Challenge
                    </span>

                    <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                        A Farmer Sees a Field.
                        <span className="block text-emerald-600">
                            AI Sees Millions of Pixels.
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">

                        A single agricultural image can contain healthy plants,
                        damaged leaves, weeds, soil, irrigation equipment,
                        shadows, and dozens of other visual patterns.

                        For an AI model to understand those differences,
                        someone needs to teach it what each pattern represents.

                    </p>

                    <p className="mx-auto mt-6 max-w-4xl text-lg leading-9 text-slate-600">

                        That&apos;s where agricultural data annotation becomes
                        critical. Annotexia helps transform raw field,
                        crop, aerial, and drone imagery into structured
                        datasets that machine learning systems can learn from.

                    </p>

                </div>

            </section>


            {/* =========================================================
                STATS
            ========================================================= */}

            <section className="bg-slate-50 py-20">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                value: "99%",
                                title: "Quality-Focused",
                                description:
                                    "Structured QA workflows help maintain annotation consistency.",
                            },
                            {
                                value: "10+",
                                title: "Annotation Types",
                                description:
                                    "Bounding boxes, polygons, segmentation, classification and more.",
                            },
                            {
                                value: "Multi",
                                title: "Data Sources",
                                description:
                                    "Ground imagery, drone footage, aerial imagery and video.",
                            },
                            {
                                value: "Scalable",
                                title: "AI Workflows",
                                description:
                                    "Designed for research, startups and production-scale projects.",
                            },
                        ].map((stat) => (
                            <div
                                key={stat.title}
                                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                            >

                                <div className="text-4xl font-extrabold text-emerald-600">
                                    {stat.value}
                                </div>

                                <h3 className="mt-3 text-xl font-bold">
                                    {stat.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {stat.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                ANNOTATION SERVICES
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                            Agriculture Annotation Services
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Turn Agricultural Data Into
                            <span className="block text-emerald-600">
                                AI-Ready Training Data
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Different agriculture AI applications require
                            different annotation strategies. Our workflows
                            can be adapted to your crops, environment,
                            taxonomy, and machine learning objectives.
                        </p>

                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

                        {annotationServices.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="absolute left-0 top-0 h-1 w-0 bg-emerald-500 transition-all duration-500 group-hover:w-full" />

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 transition group-hover:bg-emerald-500">

                                        <Icon
                                            size={27}
                                            className="text-emerald-600 transition group-hover:text-white"
                                        />

                                    </div>

                                    <h3 className="mt-7 text-xl font-bold">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {service.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =========================================================
                APPLICATIONS
            ========================================================= */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        <div>

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                                AI Applications
                            </span>

                            <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                                Built for the Way
                                <span className="block text-emerald-400">
                                    Agricultural AI Is Used
                                </span>
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-300">
                                From monitoring crop health from the sky to
                                identifying diseases at plant level, accurate
                                training data helps agricultural AI systems
                                understand real-world conditions.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-9 inline-flex items-center rounded-xl bg-emerald-500 px-7 py-4 font-semibold text-white transition hover:bg-emerald-600"
                            >
                                Discuss Your Agriculture Project
                                <ArrowRight
                                    className="ml-2"
                                    size={19}
                                />
                            </Link>

                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            {applications.map((application) => (
                                <div
                                    key={application}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-white/10"
                                >

                                    <CheckCircle2
                                        size={19}
                                        className="shrink-0 text-emerald-400"
                                    />

                                    <span className="font-medium">
                                        {application}
                                    </span>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                ANNOTATION TYPES
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-14 lg:grid-cols-2">

                        <div>

                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                                Annotation Techniques
                            </span>

                            <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                                The Right Label for
                                <span className="block text-emerald-600">
                                    Every Agricultural Dataset
                                </span>
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-600">
                                Your AI model may need to detect an entire
                                crop, isolate a diseased leaf, identify
                                individual plants, or understand the exact
                                boundary of an agricultural field.
                            </p>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                We select annotation approaches based on
                                the actual requirements of your model and
                                dataset.
                            </p>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            {annotationTypes.map((type) => (
                                <div
                                    key={type}
                                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 font-semibold transition hover:border-emerald-300 hover:bg-emerald-50"
                                >

                                    <Target
                                        size={18}
                                        className="shrink-0 text-emerald-600"
                                    />

                                    {type}

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                WORKFLOW
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-6xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                            Our Workflow
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            From Raw Field Imagery
                            <span className="block text-emerald-600">
                                to AI-Ready Dataset
                            </span>
                        </h2>

                    </div>

                    <div className="space-y-6">

                        {workflow.map((step) => (
                            <div
                                key={step.number}
                                className="group flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-xl md:flex-row md:items-start"
                            >

                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xl font-extrabold text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                                    {step.number}
                                </div>

                                <div>

                                    <h3 className="text-2xl font-bold">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 max-w-4xl leading-8 text-slate-600">
                                        {step.description}
                                    </p>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                WHY ANNOTEXIA
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                            Why Annotexia
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            More Than Just
                            <span className="block text-emerald-600">
                                Data Labeling
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Agricultural AI depends on datasets that reflect
                            the complexity of real-world environments.
                            Our workflow focuses on quality, consistency,
                            scalability, and project-specific requirements.
                        </p>

                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                        {whyAnnotexia.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-3xl border border-slate-200 bg-white p-9 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 transition group-hover:bg-emerald-500">

                                        <Icon
                                            size={26}
                                            className="text-emerald-600 transition group-hover:text-white"
                                        />

                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-slate-600">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =========================================================
                FREE SAMPLE CTA
            ========================================================= */}

            <section className="py-10">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-emerald-600 via-green-600 to-cyan-700 px-8 py-16 text-white lg:px-16">

                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative grid items-center gap-12 lg:grid-cols-2">

                            <div>

                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">
                                    Start With a Sample
                                </span>

                                <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                                    See the Quality Before You Scale
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-emerald-50">
                                    Share a small sample of your agricultural
                                    dataset and annotation requirements.
                                    Evaluate our approach before committing
                                    to a larger project.
                                </p>

                            </div>

                            <div className="lg:text-right">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-2xl bg-white px-8 py-5 text-lg font-bold text-emerald-700 shadow-xl transition hover:scale-105"
                                >
                                    Request Free Sample

                                    <ArrowRight
                                        className="ml-2"
                                        size={20}
                                    />
                                </Link>

                                <p className="mt-4 text-sm text-emerald-100">
                                    No long-term commitment required.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                FAQ
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-5xl px-6">

                    <div className="mb-16 text-center">

                        <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Agriculture AI Annotation FAQ
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Answers to common questions about agricultural
                            data annotation, datasets, workflows, and
                            project requirements.
                        </p>

                    </div>

                    <div className="space-y-5">

                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">

                                    <span>
                                        {faq.question}
                                    </span>

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xl font-normal text-emerald-600 transition group-open:rotate-45">
                                        +
                                    </span>

                                </summary>

                                <p className="mt-5 max-w-4xl leading-8 text-slate-600">
                                    {faq.answer}
                                </p>

                            </details>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                SEO CONTENT
            ========================================================= */}

            <section className="py-20">

                <div className="mx-auto max-w-5xl px-6">

                    <h2 className="text-3xl font-bold">
                        Agriculture Data Annotation Services for AI and
                        Machine Learning
                    </h2>

                    <div className="mt-8 space-y-6 text-lg leading-9 text-slate-600">

                        <p>
                            Agriculture is becoming increasingly data-driven.
                            Computer vision, drones, satellite imagery,
                            robotics, and machine learning are helping
                            agricultural organizations monitor crops,
                            identify diseases, detect weeds, analyze fields,
                            and improve farming decisions.
                        </p>

                        <p>
                            However, agricultural AI models require large
                            amounts of accurately labeled training data.
                            Annotexia provides agriculture data annotation
                            services for crop images, plant disease datasets,
                            drone imagery, field mapping, object detection,
                            segmentation, and other computer vision
                            applications.
                        </p>

                        <p>
                            Our agriculture annotation workflows can support
                            bounding boxes, polygons, semantic segmentation,
                            instance segmentation, classification,
                            keypoints, and custom labeling requirements.
                            Projects can be delivered in formats such as
                            COCO, YOLO, Pascal VOC, JSON, XML, CSV, or
                            customer-specific formats.
                        </p>

                        <p>
                            Whether you are developing a precision agriculture
                            platform, crop monitoring system, agricultural
                            robot, disease detection model, or drone-based
                            farming solution, Annotexia can help transform
                            raw agricultural data into structured training
                            datasets for machine learning.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                FINAL CTA
            ========================================================= */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="mx-auto max-w-5xl px-6 text-center">

                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-400">
                        Build Better Agriculture AI
                    </span>

                    <h2 className="mt-5 text-4xl font-extrabold lg:text-5xl">
                        Your Agriculture AI Starts With Better Data
                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">
                        Whether you are working with crop images, drone
                        imagery, plant disease datasets, or agricultural
                        video, Annotexia can help create accurate,
                        scalable, and machine-learning-ready training data.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-xl bg-emerald-500 px-8 py-4 font-bold text-white transition hover:bg-emerald-600"
                        >
                            Get Free Consultation

                            <ArrowRight
                                className="ml-2"
                                size={20}
                            />
                        </Link>

                        <Link
                            href="/services/data-labeling"
                            className="rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition hover:border-emerald-400 hover:bg-white/5"
                        >
                            Explore Data Labeling
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}