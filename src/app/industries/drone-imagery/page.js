import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Target,
    Layers3,
    Map,
    ScanLine,
    Building2,
    Tractor,
    HardHat,
    Satellite,
    Camera,
    Workflow,
} from "lucide-react";

export const metadata = {
    title:
        "Drone & Aerial Imagery Annotation Services | AI Training Data | Annotexia",

    description:
        "Annotexia provides high-quality drone and aerial imagery annotation services for mapping, surveying, construction, agriculture, infrastructure inspection, remote sensing, and geospatial AI.",

    keywords: [
        "drone annotation services",
        "drone image annotation",
        "aerial imagery annotation",
        "drone data labeling",
        "aerial image labeling",
        "geospatial annotation",
        "remote sensing annotation",
        "drone mapping annotation",
        "satellite image annotation",
        "infrastructure inspection annotation",
        "construction drone annotation",
        "agriculture drone annotation",
        "computer vision drone datasets",
    ],

    alternates: {
        canonical: "https://annotexia.com/industries/drone-imagery",
    },

    openGraph: {
        title:
            "Drone & Aerial Imagery Annotation Services | Annotexia",
        description:
            "Build reliable geospatial AI with accurate drone and aerial imagery annotation for mapping, surveying, agriculture, construction, infrastructure, and remote sensing.",
        url: "https://annotexia.com/industries/drone-imagery",
        siteName: "Annotexia",
        type: "website",
        images: [
            {
                url: "https://annotexia.com/images/industries/drone-imagery.webp",
                width: 1200,
                height: 630,
                alt: "Drone and aerial imagery annotation services",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Drone & Aerial Imagery Annotation Services | Annotexia",
        description:
            "Accurate drone and aerial imagery annotation for mapping, surveying, infrastructure, agriculture, and geospatial AI.",
        images: [
            "https://annotexia.com/images/industries/drone-imagery.webp",
        ],
    },
};

const annotationServices = [
    {
        title: "Object Detection",
        description:
            "Identify and label vehicles, buildings, roads, equipment, vegetation, people, infrastructure, and other objects in aerial imagery.",
        icon: Target,
    },
    {
        title: "Polygon Annotation",
        description:
            "Create precise polygon boundaries for buildings, roads, fields, rooftops, water bodies, vegetation, and infrastructure.",
        icon: ScanLine,
    },
    {
        title: "Semantic Segmentation",
        description:
            "Classify every relevant pixel to help AI systems understand land cover, terrain, infrastructure, and environmental features.",
        icon: Layers3,
    },
    {
        title: "Instance Segmentation",
        description:
            "Separate individual objects within aerial scenes for accurate counting, monitoring, inspection, and analysis.",
        icon: Map,
    },
    {
        title: "Keypoint Annotation",
        description:
            "Mark important structural points and landmarks for geospatial computer vision and automated inspection systems.",
        icon: Target,
    },
    {
        title: "Image Classification",
        description:
            "Categorize aerial images based on land use, infrastructure type, environmental conditions, construction stages, and other project-specific classes.",
        icon: Camera,
    },
];

const useCases = [
    {
        title: "Aerial Mapping",
        description:
            "Create accurately labeled datasets for automated mapping, terrain understanding, object detection, and geospatial analysis.",
        icon: Map,
    },
    {
        title: "Infrastructure Inspection",
        description:
            "Train computer vision models to identify infrastructure assets, structural issues, damaged components, and maintenance requirements.",
        icon: Building2,
    },
    {
        title: "Construction Monitoring",
        description:
            "Track construction progress, equipment, materials, structures, and site changes using drone imagery.",
        icon: HardHat,
    },
    {
        title: "Agriculture & Precision Farming",
        description:
            "Annotate crops, fields, weeds, plant diseases, irrigation patterns, and other agricultural features captured by drones.",
        icon: Tractor,
    },
    {
        title: "Remote Sensing",
        description:
            "Build datasets for land-cover classification, environmental monitoring, terrain analysis, and geospatial intelligence.",
        icon: Satellite,
    },
    {
        title: "Asset & Site Monitoring",
        description:
            "Support automated monitoring of large facilities, industrial sites, roads, solar farms, warehouses, and other assets.",
        icon: ScanLine,
    },
];

const workflow = [
    {
        number: "01",
        title: "Project Requirements",
        description:
            "We understand your imagery, annotation classes, geographic context, labeling requirements, and expected output.",
    },
    {
        number: "02",
        title: "Annotation Guidelines",
        description:
            "Our team creates clear project-specific guidelines covering classes, edge cases, object boundaries, and quality standards.",
    },
    {
        number: "03",
        title: "Pilot Annotation",
        description:
            "A small sample is annotated first to validate instructions, identify edge cases, and align expectations before scaling.",
    },
    {
        number: "04",
        title: "Production Annotation",
        description:
            "Trained annotators process your drone and aerial imagery using the required annotation methodology and tools.",
    },
    {
        number: "05",
        title: "Quality Assurance",
        description:
            "Annotations go through structured quality checks, reviewer validation, and correction cycles.",
    },
    {
        number: "06",
        title: "Final Delivery",
        description:
            "Validated datasets are delivered in your required format and organized for seamless machine learning workflows.",
    },
];

const formats = [
    "COCO JSON",
    "YOLO",
    "Pascal VOC",
    "JSON",
    "XML",
    "CSV",
    "GeoJSON",
    "Custom Formats",
];

const faqs = [
    {
        question:
            "What types of drone imagery can Annotexia annotate?",
        answer:
            "We can work with a wide range of drone and aerial imagery, including RGB images, high-resolution photographs, mapping imagery, infrastructure inspection images, agricultural imagery, construction site imagery, and other project-specific aerial datasets.",
    },
    {
        question:
            "Can you annotate buildings, roads, vehicles, and other objects?",
        answer:
            "Yes. We can annotate buildings, roads, vehicles, people, equipment, vegetation, rooftops, infrastructure components, construction materials, and other objects according to your project taxonomy.",
    },
    {
        question:
            "Do you support polygon and segmentation annotation?",
        answer:
            "Yes. Our drone annotation workflows support bounding boxes, polygons, semantic segmentation, instance segmentation, keypoints, classification, and other custom annotation requirements.",
    },
    {
        question:
            "Can you handle large drone imagery datasets?",
        answer:
            "Yes. Our annotation workflows are designed to scale from small pilot datasets to large production volumes. We can organize annotation teams and quality control processes around your project requirements.",
    },
    {
        question:
            "Which annotation formats do you support?",
        answer:
            "We support common formats such as COCO JSON, YOLO, Pascal VOC, JSON, XML, CSV, GeoJSON, and custom formats based on your machine learning or geospatial workflow.",
    },
    {
        question:
            "Can you provide a sample annotation before a large project?",
        answer:
            "Yes. A sample annotation can be used to evaluate labeling quality, interpretation of your guidelines, consistency, and overall workflow before moving into larger-scale production.",
    },
    {
        question:
            "Can you work with confidential drone imagery?",
        answer:
            "Yes. We understand that aerial imagery can contain sensitive commercial, infrastructure, or operational information. Project confidentiality and secure data handling can be incorporated into the engagement, including NDA requirements.",
    },
];

export default function DroneImageryPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        <div>

                            <div className="mb-7 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300">
                                Drone & Aerial AI Data Annotation
                            </div>

                            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">

                                Turn Drone Imagery Into

                                <span className="block text-cyan-400">
                                    AI-Ready Data
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">

                                High-quality annotation for drone and aerial
                                imagery used in mapping, surveying, construction,
                                infrastructure inspection, agriculture,
                                remote sensing, and geospatial AI.

                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">

                                From object detection and polygon annotation to
                                semantic segmentation and custom labeling,
                                Annotexia helps transform complex aerial imagery
                                into structured training datasets.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
                                >
                                    Request Free Sample
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>

                                <Link
                                    href="/services"
                                    className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
                                >
                                    Explore Annotation Services
                                </Link>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="absolute -inset-5 rounded-[2rem] bg-cyan-500/20 blur-3xl" />

                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">

                                <Image
                                    src="/images/industries/drone/hero-drone.webp"
                                    alt="Drone aerial imagery annotation for mapping and geospatial AI"
                                    width={1200}
                                    height={800}
                                    priority
                                    className="h-[420px] w-full rounded-2xl object-cover"
                                />

                            </div>

                            <div className="absolute -bottom-7 -left-7 hidden rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl md:block">

                                <p className="text-sm text-cyan-400">
                                    Annotation
                                </p>

                                <p className="mt-1 text-xl font-bold text-white">
                                    Image • Polygon • Segmentation
                                </p>

                            </div>

                            <div className="absolute -right-7 -top-7 hidden rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl lg:block">

                                <p className="text-sm text-green-400">
                                    Built For
                                </p>

                                <p className="mt-1 text-xl font-bold text-white">
                                    Geospatial AI
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

                <div className="mx-auto max-w-5xl px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-cyan-600">
                        Why Drone Annotation Matters
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                        The Sky Captures the Data.
                        <span className="block text-blue-600">
                            Annotation Makes It Useful.
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-slate-600">

                        A single drone flight can generate thousands of high-resolution
                        images containing roads, buildings, vehicles, crops,
                        equipment, terrain, and infrastructure.

                    </p>

                    <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-slate-600">

                        But raw imagery does not automatically tell an AI model
                        what it is seeing. Accurate annotation transforms those
                        images into structured training data that computer vision
                        systems can learn from.

                    </p>

                </div>

            </section>


            {/* =========================================================
                ANNOTATION SERVICES
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Annotation Capabilities
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Drone Data Annotation Services
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Choose the annotation methodology that fits your
                            computer vision, mapping, inspection, or geospatial
                            AI application.
                        </p>

                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                        {annotationServices.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 transition group-hover:bg-cyan-500">

                                        <Icon className="h-7 w-7 text-cyan-600 group-hover:text-white" />

                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold">
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
                USE CASES
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-cyan-600">
                                Industry Applications
                            </span>

                            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                                Where Drone Annotation
                                <span className="block text-blue-600">
                                    Powers AI
                                </span>
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">

                                Drone imagery is becoming an important source of
                                visual intelligence across industries. Our
                                annotation workflows help organizations turn
                                aerial data into datasets suitable for machine
                                learning and computer vision.

                            </p>

                            <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50 p-6">

                                <div className="flex gap-4">

                                    <Workflow className="mt-1 h-6 w-6 shrink-0 text-cyan-600" />

                                    <p className="leading-7 text-slate-700">

                                        Need a custom annotation workflow?
                                        We can adapt labeling guidelines,
                                        classes, review processes, and output
                                        formats around your AI project.

                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">

                            {useCases.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                    >

                                        <Icon className="h-8 w-8 text-cyan-600" />

                                        <h3 className="mt-5 text-xl font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            {item.description}
                                        </p>

                                    </div>
                                );
                            })}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                WORKFLOW
            ========================================================= */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-400">
                            Our Process
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            From Drone Flight to
                            <span className="block text-cyan-400">
                                AI-Ready Dataset
                            </span>
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            A structured workflow keeps annotation consistent,
                            scalable, and aligned with your machine learning goals.
                        </p>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {workflow.map((step) => (

                            <div
                                key={step.number}
                                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:border-cyan-400/40 hover:bg-white/[0.07]"
                            >

                                <span className="text-4xl font-extrabold text-cyan-400">
                                    {step.number}
                                </span>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {step.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                QUALITY + SECURITY
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-10 lg:grid-cols-2">

                        <div className="rounded-3xl bg-slate-900 p-10 text-white lg:p-12">

                            <ShieldCheck className="h-12 w-12 text-cyan-400" />

                            <h2 className="mt-7 text-3xl font-bold">
                                Quality-Controlled Annotation
                            </h2>

                            <p className="mt-5 leading-8 text-slate-300">
                                Aerial imagery can contain complex scenes,
                                overlapping objects, small targets, unusual
                                perspectives, and difficult boundaries. Our
                                quality process is designed to catch these
                                challenges before final delivery.
                            </p>

                            <div className="mt-8 space-y-4">

                                {[
                                    "Project-specific annotation guidelines",
                                    "Trained annotation teams",
                                    "Reviewer-based quality checks",
                                    "Edge-case identification",
                                    "Correction and feedback loops",
                                    "Final dataset validation",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />

                                        <span className="text-slate-300">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>


                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 lg:p-12">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                                <ShieldCheck className="h-7 w-7 text-cyan-600" />
                            </div>

                            <h2 className="mt-7 text-3xl font-bold">
                                Secure Data Workflows
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                Drone imagery can contain sensitive locations,
                                commercial assets, infrastructure, and operational
                                information. We understand the importance of
                                confidentiality when handling customer datasets.
                            </p>

                            <div className="mt-8 space-y-4">

                                {[
                                    "NDA support",
                                    "Controlled project access",
                                    "Confidential annotation workflows",
                                    "Secure file handling",
                                    "Project-specific access requirements",
                                    "Controlled dataset delivery",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-600" />

                                        <span className="text-slate-700">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                OUTPUT FORMATS
            ========================================================= */}

            <section className="bg-slate-50 py-20">

                <div className="mx-auto max-w-5xl px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-cyan-600">
                        Flexible Delivery
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Annotation Formats We Support
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        Receive your annotated drone datasets in a format that
                        fits your existing computer vision or machine learning
                        pipeline.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        {formats.map((format) => (

                            <span
                                key={format}
                                className="rounded-full border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 shadow-sm"
                            >
                                {format}
                            </span>

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

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Why Annotexia
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Built Around Your AI Project
                        </h2>

                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                title: "Domain-Aware Teams",
                                description:
                                    "Annotation workflows designed around the visual challenges of aerial and geospatial datasets.",
                            },
                            {
                                title: "Scalable Capacity",
                                description:
                                    "Support for pilot projects as well as larger production datasets with structured workflows.",
                            },
                            {
                                title: "Quality First",
                                description:
                                    "Review and validation processes help maintain consistency across large datasets.",
                            },
                            {
                                title: "Flexible Workflows",
                                description:
                                    "Custom classes, guidelines, annotation types, and output formats based on your requirements.",
                            },
                        ].map((item) => (

                            <div
                                key={item.title}
                                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                            >

                                <CheckCircle2 className="h-8 w-8 text-cyan-600" />

                                <h3 className="mt-6 text-xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                FAQ
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-4xl px-6">

                    <div className="mb-14 text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Drone Annotation FAQs
                        </h2>

                    </div>

                    <div className="space-y-5">

                        {faqs.map((faq) => (

                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">

                                    {faq.question}

                                    <span className="text-2xl font-normal text-cyan-600 transition group-open:rotate-45">
                                        +
                                    </span>

                                </summary>

                                <p className="mt-5 leading-7 text-slate-600">
                                    {faq.answer}
                                </p>

                            </details>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 px-8 py-16 text-white lg:px-16">

                        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative grid items-center gap-10 lg:grid-cols-2">

                            <div>

                                <span className="font-semibold uppercase tracking-widest text-cyan-100">
                                    Start Your Project
                                </span>

                                <h2 className="mt-5 text-4xl font-extrabold leading-tight lg:text-5xl">
                                    Have Drone Imagery
                                    <span className="block">
                                        Ready for Annotation?
                                    </span>
                                </h2>

                                <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
                                    Share a sample of your aerial dataset,
                                    annotation requirements, and expected
                                    timeline. Our team can help you define
                                    the right annotation approach for your
                                    AI project.
                                </p>

                            </div>

                            <div className="lg:text-right">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-2xl bg-white px-9 py-5 text-lg font-bold text-blue-700 shadow-xl transition hover:scale-105"
                                >
                                    Request a Free Sample
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>

                                <p className="mt-5 text-sm text-cyan-100">
                                    Discuss your dataset • Define your workflow • Scale with confidence
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                SEO CONTENT
            ========================================================= */}

            <section className="border-t border-slate-100 bg-white py-20">

                <div className="mx-auto max-w-5xl px-6">

                    <h2 className="text-3xl font-bold">
                        Professional Drone & Aerial Imagery Annotation Services
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                        Annotexia provides professional drone and aerial imagery
                        annotation services for organizations developing
                        computer vision, machine learning, mapping, remote
                        sensing, and geospatial AI applications. Our workflows
                        support object detection, bounding box annotation,
                        polygon annotation, semantic segmentation, instance
                        segmentation, image classification, and custom labeling.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Drone imagery can be used to monitor construction sites,
                        inspect infrastructure, analyze agricultural fields,
                        identify objects, map terrain, monitor industrial
                        facilities, and support a wide range of geospatial
                        applications. Accurate annotation transforms these
                        complex visual datasets into structured training data
                        that machine learning models can use effectively.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Whether you need a small pilot dataset or a scalable
                        production annotation workflow, Annotexia can adapt
                        annotation guidelines, quality processes, workforce
                        capacity, and output formats to your project
                        requirements.
                    </p>

                </div>

            </section>

        </main>
    );
}