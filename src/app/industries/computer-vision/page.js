import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    BrainCircuit,
    Eye,
    ScanSearch,
    Target,
    ShieldCheck,
    Layers3,
    Cpu,
    Boxes,
} from "lucide-react";

export const metadata = {
    title:
        "Computer Vision Data Annotation Services | AI Training Data | Annotexia",

    description:
        "Annotexia provides high-quality computer vision data annotation services including image labeling, bounding boxes, segmentation, polygons, keypoints, OCR, object detection, and video annotation for AI and machine learning models.",

    keywords: [
        "computer vision annotation services",
        "computer vision data labeling",
        "computer vision datasets",
        "image annotation services",
        "AI training data",
        "object detection annotation",
        "image segmentation",
        "semantic segmentation",
        "instance segmentation",
        "polygon annotation",
        "keypoint annotation",
        "OCR annotation",
        "video annotation",
        "machine learning training data",
        "computer vision AI",
    ],

    alternates: {
        canonical: "https://annotexia.com/industries/computer-vision",
    },

    openGraph: {
        title:
            "Computer Vision Data Annotation Services | Annotexia",
        description:
            "Build reliable computer vision models with accurate image, video, segmentation, object detection, OCR, and keypoint annotation services.",
        url: "https://annotexia.com/industries/computer-vision",
        siteName: "Annotexia",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
                width: 1400,
                height: 800,
                alt: "Computer vision AI data annotation",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Computer Vision Data Annotation Services | Annotexia",
        description:
            "Accurate training data for computer vision, object detection, segmentation, OCR, keypoints, and AI applications.",
    },
};

const annotationTypes = [
    {
        title: "Bounding Box Annotation",
        description:
            "Identify and localize objects with precise rectangular bounding boxes for object detection models.",
        icon: Boxes,
        features: [
            "Object Detection",
            "Vehicle Detection",
            "People Detection",
            "Product Detection",
        ],
    },

    {
        title: "Polygon Annotation",
        description:
            "Create accurate object boundaries for complex shapes where rectangular bounding boxes are not sufficient.",
        icon: Target,
        features: [
            "Irregular Objects",
            "Product Outlines",
            "Road Features",
            "Industrial Objects",
        ],
    },

    {
        title: "Semantic Segmentation",
        description:
            "Assign pixel-level classes to images to help models understand the complete visual environment.",
        icon: Layers3,
        features: [
            "Pixel-Level Labels",
            "Road Segmentation",
            "Background Separation",
            "Scene Understanding",
        ],
    },

    {
        title: "Instance Segmentation",
        description:
            "Separate individual objects of the same class with precise pixel-level masks.",
        icon: ScanSearch,
        features: [
            "Individual Objects",
            "Crowd Analysis",
            "Medical Imaging",
            "Retail Products",
        ],
    },

    {
        title: "Keypoint & Landmark Annotation",
        description:
            "Mark important points on objects, humans, products, and structures for pose estimation and visual understanding.",
        icon: Eye,
        features: [
            "Human Pose",
            "Facial Landmarks",
            "Object Keypoints",
            "Gesture Recognition",
        ],
    },

    {
        title: "OCR & Text Annotation",
        description:
            "Label text regions and characters in images to train OCR and document intelligence systems.",
        icon: ScanSearch,
        features: [
            "Text Detection",
            "Document OCR",
            "License Plates",
            "Scene Text",
        ],
    },
];

const applications = [
    {
        title: "Object Detection",
        description:
            "Train models to identify and locate objects across images and video streams.",
    },
    {
        title: "Image Classification",
        description:
            "Create structured datasets for classifying images into predefined categories.",
    },
    {
        title: "Visual Search",
        description:
            "Build datasets that help AI systems identify and retrieve visually similar products or objects.",
    },
    {
        title: "Face & Human Analysis",
        description:
            "Support facial landmark detection, human pose estimation, gesture recognition, and people analytics.",
    },
    {
        title: "Industrial Inspection",
        description:
            "Train computer vision systems to detect defects, anomalies, and quality issues in manufacturing.",
    },
    {
        title: "Retail Intelligence",
        description:
            "Develop AI systems for shelf monitoring, product recognition, inventory analysis, and checkout automation.",
    },
];

const industries = [
    "Healthcare",
    "Autonomous Vehicles",
    "Retail & E-commerce",
    "Agriculture",
    "Manufacturing",
    "Sports Analytics",
    "Robotics",
    "Drone & Aerial Imaging",
];

const workflow = [
    {
        number: "01",
        title: "Understand Your Vision Task",
        description:
            "We review your model objectives, classes, annotation requirements, dataset characteristics, and expected output.",
    },
    {
        number: "02",
        title: "Define Annotation Guidelines",
        description:
            "Clear project-specific guidelines are created to ensure every annotator follows the same labeling rules.",
    },
    {
        number: "03",
        title: "Annotate & Label",
        description:
            "Trained annotation specialists label your images and videos using the required annotation methodology.",
    },
    {
        number: "04",
        title: "Quality Assurance",
        description:
            "Annotations pass through structured review processes to identify missing labels, incorrect classes, and boundary errors.",
    },
    {
        number: "05",
        title: "Validation & Delivery",
        description:
            "Validated datasets are exported in your required format and prepared for machine learning pipelines.",
    },
];

const faqs = [
    {
        question:
            "What computer vision annotation services does Annotexia provide?",
        answer:
            "Annotexia provides bounding box annotation, polygon annotation, semantic segmentation, instance segmentation, keypoint annotation, landmark annotation, OCR labeling, image classification, video annotation, and custom computer vision data labeling.",
    },
    {
        question:
            "Can Annotexia annotate datasets for object detection models?",
        answer:
            "Yes. We provide precise bounding box and polygon annotation for object detection applications involving vehicles, people, products, industrial components, animals, road objects, and other custom classes.",
    },
    {
        question:
            "Do you provide pixel-level segmentation?",
        answer:
            "Yes. Our annotation workflows support both semantic and instance segmentation for applications that require detailed pixel-level understanding of objects and environments.",
    },
    {
        question:
            "Which annotation formats do you support?",
        answer:
            "Depending on project requirements, datasets can be delivered in formats such as COCO JSON, YOLO, Pascal VOC, JSON, XML, CSV, and custom formats.",
    },
    {
        question:
            "Can you handle large computer vision datasets?",
        answer:
            "Yes. Annotexia can support projects ranging from smaller proof-of-concept datasets to large-scale image and video annotation programs.",
    },
    {
        question:
            "Can I test your annotation quality before starting a large project?",
        answer:
            "Yes. We can provide a sample annotation so you can evaluate labeling quality, consistency, communication, and workflow before moving forward with a larger project.",
    },
];

export default function ComputerVisionPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
                    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

                            <span className="mb-7 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                                Computer Vision AI Data
                            </span>

                            <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-6xl">

                                Build Smarter

                                <span className="block text-blue-400">
                                    Computer Vision AI
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">

                                Computer vision models do not learn from pixels
                                alone. They learn from the information hidden
                                inside those pixels.

                                Annotexia transforms raw images and videos into
                                accurate, structured training datasets that help
                                AI systems detect, classify, segment, and understand
                                the world around them.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-900/30 transition hover:bg-blue-700"
                                >
                                    Start Your Project
                                </Link>

                                <Link
                                    href="/services/image-annotation"
                                    className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
                                >
                                    Explore Image Annotation
                                </Link>

                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">

                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        2D
                                    </p>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Annotation
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        3D
                                    </p>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Vision Data
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        Pixel
                                    </p>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Segmentation
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        OCR
                                    </p>
                                    <p className="mt-1 text-sm text-slate-400">
                                        Text Data
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute -inset-5 rounded-[40px] bg-blue-500/20 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">

                                <Image
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                                    alt="Computer vision artificial intelligence data annotation"
                                    width={1400}
                                    height={900}
                                    priority
                                    className="h-[460px] w-full rounded-[24px] object-cover"
                                />

                            </div>

                            <div className="absolute -left-8 top-12 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl md:block">

                                <p className="text-sm text-blue-400">
                                    AI Vision
                                </p>

                                <p className="mt-1 text-lg font-bold text-white">
                                    Object Detection
                                </p>

                            </div>

                            <div className="absolute -bottom-8 right-0 rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl">

                                <p className="text-sm text-cyan-400">
                                    Training Data
                                </p>

                                <p className="mt-1 text-lg font-bold text-white">
                                    Pixel-Level Labels
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRODUCTION
            ====================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-5xl px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-blue-600">
                        Why Data Matters
                    </span>

                    <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">

                        Computer Vision Starts With
                        <span className="text-blue-600">
                            {" "}Better Training Data
                        </span>

                    </h2>

                    <p className="mx-auto mt-7 max-w-4xl text-lg leading-9 text-slate-600">

                        A computer vision model may process millions of pixels,
                        but pixels alone do not tell the model what those pixels
                        represent.

                        Annotation gives those pixels meaning.

                        Whether the goal is detecting a pedestrian, identifying
                        a manufacturing defect, recognizing a product, segmenting
                        a road, or estimating human pose, high-quality annotation
                        provides the structured information AI models need to learn.

                    </p>

                </div>

            </section>


            {/* =====================================================
                ANNOTATION TYPES
            ====================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Annotation Capabilities
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                            Computer Vision Annotation Services
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Choose the annotation technique that matches your
                            computer vision model and application.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {annotationTypes.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="absolute left-0 top-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">

                                        <Icon className="text-blue-600 transition group-hover:text-white" />

                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-slate-600">
                                        {item.description}
                                    </p>

                                    <div className="mt-7 space-y-3">

                                        {item.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle2
                                                    size={18}
                                                    className="shrink-0 text-blue-600"
                                                />

                                                <span className="text-sm font-medium text-slate-700">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                APPLICATIONS
            ====================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-blue-600">
                                Real-World Applications
                            </span>

                            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">

                                From Raw Images to
                                <span className="text-blue-600">
                                    {" "}AI Intelligence
                                </span>

                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-600">

                                Computer vision is no longer limited to research
                                laboratories. It is powering real-world systems
                                across healthcare, transportation, retail,
                                manufacturing, agriculture, robotics, and
                                sports.

                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center rounded-xl bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Discuss Your Use Case
                                <ArrowRight className="ml-2" size={20} />
                            </Link>

                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">

                            {applications.map((application) => (
                                <div
                                    key={application.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                                >

                                    <h3 className="text-xl font-bold text-slate-900">
                                        {application.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        {application.description}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INDUSTRIES
            ====================================================== */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-blue-400">
                            Industry Applications
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Computer Vision Across Industries
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-300">
                            Our annotation workflows can be adapted to different
                            visual environments, object classes, and AI use cases.
                        </p>

                    </div>

                    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        {industries.map((industry) => (
                            <div
                                key={industry}
                                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-blue-400/40 hover:bg-white/10"
                            >

                                <CheckCircle2
                                    size={20}
                                    className="shrink-0 text-blue-400"
                                />

                                <span className="font-medium">
                                    {industry}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                WORKFLOW
            ====================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Our Process
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                            A Structured Annotation Workflow
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Reliable computer vision datasets require more than
                            simply drawing boxes. Our workflow focuses on
                            consistency, accuracy, validation, and delivery.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-5">

                        {workflow.map((step) => (
                            <div
                                key={step.number}
                                className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                            >

                                <span className="text-4xl font-extrabold text-blue-100">
                                    {step.number}
                                </span>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    {step.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                QUALITY + SECURITY
            ====================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-10 md:grid-cols-3">

                        <div className="rounded-3xl bg-white p-9 shadow-sm">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                                <CheckCircle2 className="text-blue-600" />
                            </div>

                            <h3 className="mt-7 text-2xl font-bold">
                                Quality Assurance
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                Structured reviews help identify missing objects,
                                incorrect classes, inaccurate boundaries, and
                                inconsistent annotations before delivery.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-9 shadow-sm">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                                <ShieldCheck className="text-blue-600" />
                            </div>

                            <h3 className="mt-7 text-2xl font-bold">
                                Secure Workflows
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                Confidential project workflows, controlled access,
                                and NDA support help protect sensitive datasets
                                throughout the annotation process.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-white p-9 shadow-sm">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                                <Cpu className="text-blue-600" />
                            </div>

                            <h3 className="mt-7 text-2xl font-bold">
                                AI-Focused Teams
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                Our annotation workflows are designed around the
                                requirements of machine learning and computer
                                vision development teams.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FORMATS
            ====================================================== */}

            <section className="py-20">

                <div className="mx-auto max-w-5xl px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-blue-600">
                        Flexible Delivery
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Annotation Formats for Your ML Pipeline
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        We can prepare annotated datasets according to your
                        existing machine learning workflow and technical
                        requirements.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        {[
                            "COCO JSON",
                            "YOLO",
                            "Pascal VOC",
                            "JSON",
                            "XML",
                            "CSV",
                            "Label Studio",
                            "CVAT",
                            "Custom Formats",
                        ].map((format) => (
                            <span
                                key={format}
                                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 font-medium text-slate-700"
                            >
                                {format}
                            </span>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-24">

                <div className="mx-auto max-w-6xl px-6 text-center text-white">

                    <h2 className="text-4xl font-bold lg:text-5xl">
                        Your Computer Vision Model
                        <span className="block text-blue-100">
                            Starts With Better Data
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-blue-50 lg:text-xl">

                        Whether you&apos;re developing an object detection system,
                        visual inspection solution, medical AI application,
                        retail vision platform, or next-generation robotics
                        system, Annotexia can help transform your raw visual
                        data into machine-learning-ready training datasets.

                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <Link
                            href="/contact"
                            className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-xl transition hover:bg-slate-100"
                        >
                            Request a Free Consultation
                        </Link>

                        <Link
                            href="/services"
                            className="rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
                        >
                            Explore All Services
                        </Link>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ====================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-5xl px-6">

                    <div className="mb-14 text-center">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            FAQ
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Computer Vision Annotation FAQs
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Answers to common questions about our computer vision
                            annotation services.
                        </p>

                    </div>

                    <div className="space-y-5">

                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-slate-900">

                                    <span>
                                        {faq.question}
                                    </span>

                                    <span className="text-2xl font-normal text-blue-600 transition-transform duration-300 group-open:rotate-45">
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


            {/* =====================================================
                INTERNAL SEO CONTENT
            ====================================================== */}

            <section className="border-t border-slate-100 bg-white py-20">

                <div className="mx-auto max-w-5xl px-6">

                    <h2 className="text-3xl font-bold text-slate-900">
                        Computer Vision Data Annotation Services
                    </h2>

                    <div className="mt-7 space-y-6 text-lg leading-9 text-slate-600">

                        <p>
                            Annotexia provides professional computer vision data
                            annotation services for organizations developing
                            artificial intelligence and machine learning
                            applications. Our services cover image annotation,
                            object detection, bounding boxes, polygon annotation,
                            semantic segmentation, instance segmentation,
                            keypoint annotation, OCR, and video annotation.
                        </p>

                        <p>
                            High-quality training data is essential for computer
                            vision models because machine learning algorithms
                            depend on accurately labeled examples to learn visual
                            patterns. Consistent annotation helps models recognize
                            objects, understand scenes, detect anomalies, classify
                            images, and interpret visual information more reliably.
                        </p>

                        <p>
                            Our computer vision annotation workflows can support
                            applications across healthcare, autonomous vehicles,
                            retail, agriculture, manufacturing, robotics,
                            sports analytics, and drone imagery. We can also
                            adapt annotation guidelines and output formats to
                            specific model requirements.
                        </p>

                        <p>
                            If you are looking for a reliable computer vision
                            annotation partner,{" "}
                            <Link
                                href="/contact"
                                className="font-semibold text-blue-600 hover:underline"
                            >
                                contact Annotexia
                            </Link>{" "}
                            to discuss your dataset, annotation requirements,
                            expected volume, and project timeline.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="mx-auto max-w-6xl px-6 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/20">
                        <BrainCircuit className="text-blue-400" size={32} />
                    </div>

                    <h2 className="mt-8 text-4xl font-bold lg:text-5xl">
                        Have a Computer Vision Project?
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Share your dataset and annotation requirements with our
                        team. We&apos;ll help you determine the right annotation
                        approach for your AI project.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-10 inline-flex items-center rounded-xl bg-blue-600 px-9 py-4 font-bold text-white transition hover:bg-blue-700"
                    >
                        Talk to an AI Data Expert
                        <ArrowRight className="ml-2" size={20} />
                    </Link>

                </div>

            </section>

        </main>
    );
}