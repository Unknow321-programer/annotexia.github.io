import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Target,
    Layers3,
    BrainCircuit,
    ScanSearch,
    Workflow,
    FileCheck2,
    Users,
    Boxes,
    Sparkles,
} from "lucide-react";

export const metadata = {
    title:
        "Image Annotation Services | AI Training Data & Computer Vision | Annotexia",

    description:
        "Annotexia provides professional image annotation services for AI and machine learning, including bounding boxes, polygon annotation, semantic segmentation, instance segmentation, keypoints, OCR, and custom computer vision datasets.",

    keywords: [
        "image annotation services",
        "image labeling services",
        "AI image annotation",
        "computer vision annotation",
        "image labeling for machine learning",
        "bounding box annotation",
        "polygon annotation",
        "semantic segmentation",
        "instance segmentation",
        "keypoint annotation",
        "OCR annotation",
        "computer vision datasets",
        "AI training data",
        "machine learning data annotation",
    ],

    alternates: {
        canonical: "https://annotexia.com/services/image-annotation",
    },

    openGraph: {
        title:
            "Image Annotation Services | AI Training Data & Computer Vision | Annotexia",

        description:
            "Build reliable computer vision datasets with professional image annotation, object detection, segmentation, keypoint, OCR, and custom labeling services.",

        url: "https://annotexia.com/services/image-annotation",

        siteName: "Annotexia",

        type: "website",

        images: [
            {
                url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
                width: 1400,
                height: 900,
                alt: "AI image annotation and computer vision training data",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Image Annotation Services | Annotexia",
        description:
            "Professional image annotation and labeling services for computer vision and machine learning.",
    },
};

const annotationTypes = [
    {
        title: "Bounding Box Annotation",
        description:
            "Identify and localize objects using precise rectangular bounding boxes for object detection and recognition models.",
        icon: Boxes,
        examples:
            "Vehicles, pedestrians, products, animals, machinery",
    },

    {
        title: "Polygon Annotation",
        description:
            "Create accurate object boundaries using polygons when rectangular boxes cannot represent the shape of an object precisely.",
        icon: Target,
        examples:
            "Road objects, products, plants, buildings, equipment",
    },

    {
        title: "Semantic Segmentation",
        description:
            "Classify individual pixels according to predefined categories to help computer vision models understand image regions.",
        icon: Layers3,
        examples:
            "Roads, buildings, vegetation, medical regions, backgrounds",
    },

    {
        title: "Instance Segmentation",
        description:
            "Separate individual objects belonging to the same class for detailed object-level computer vision applications.",
        icon: ScanSearch,
        examples:
            "Cars, people, products, organs, agricultural objects",
    },

    {
        title: "Keypoint & Landmark Annotation",
        description:
            "Mark important points on objects or human bodies to support pose estimation, gesture recognition, and geometric analysis.",
        icon: Sparkles,
        examples:
            "Human pose, sports players, faces, hands, product landmarks",
    },

    {
        title: "OCR & Text Annotation",
        description:
            "Locate and label text within images to create datasets for OCR, document intelligence, visual search, and text recognition.",
        icon: FileCheck2,
        examples:
            "Documents, signs, labels, receipts, packaging, license plates",
    },
];

const industries = [
    {
        title: "Autonomous Vehicles",
        description:
            "Train perception systems using annotated images containing vehicles, pedestrians, cyclists, traffic signs, traffic lights, road markings, and other road objects.",
    },
    {
        title: "Healthcare AI",
        description:
            "Create carefully structured datasets for medical imaging, anatomical structures, abnormalities, lesions, tumors, and other computer vision applications.",
    },
    {
        title: "Retail & E-commerce",
        description:
            "Support product recognition, shelf analytics, visual search, inventory monitoring, product detection, and retail computer vision systems.",
    },
    {
        title: "Agriculture AI",
        description:
            "Build datasets for crop monitoring, plant detection, disease identification, weed detection, fruit counting, and precision agriculture.",
    },
    {
        title: "Sports Analytics",
        description:
            "Annotate players, equipment, field elements, poses, and events to support sports tracking, performance analysis, and automated sports intelligence.",
    },
    {
        title: "Manufacturing & Robotics",
        description:
            "Train industrial vision systems for defect detection, quality inspection, component identification, robotic perception, and production monitoring.",
    },
];

const workflow = [
    {
        number: "01",
        title: "Project Understanding",
        description:
            "We review your dataset, annotation requirements, object classes, edge cases, output format, and quality expectations.",
    },
    {
        number: "02",
        title: "Guideline Development",
        description:
            "Clear annotation guidelines are established to define class definitions, boundary rules, edge cases, and quality standards.",
    },
    {
        number: "03",
        title: "Annotator Training",
        description:
            "Annotators are trained against the project guidelines and evaluated on sample tasks before production begins.",
    },
    {
        number: "04",
        title: "Production Annotation",
        description:
            "The dataset is annotated using appropriate labeling tools and workflows based on the requirements of your AI project.",
    },
    {
        number: "05",
        title: "Quality Review",
        description:
            "Annotations undergo structured quality checks to identify missing labels, incorrect classes, inconsistent boundaries, and other issues.",
    },
    {
        number: "06",
        title: "Dataset Delivery",
        description:
            "Validated annotations are delivered in the agreed format and structure for integration into your machine learning workflow.",
    },
];

const tools = [
    "CVAT",
    "Label Studio",
    "SuperAnnotate",
    "Roboflow",
    "Custom Annotation Platforms",
];

const formats = [
    "COCO JSON",
    "YOLO",
    "Pascal VOC",
    "XML",
    "JSON",
    "CSV",
    "Custom Formats",
];

const faqs = [
    {
        question: "What is image annotation?",

        answer:
            "Image annotation is the process of adding structured labels to images so machine learning and computer vision models can learn to identify objects, regions, attributes, or other visual information.",
    },

    {
        question: "What types of image annotation does Annotexia provide?",

        answer:
            "Annotexia supports bounding boxes, polygons, semantic segmentation, instance segmentation, keypoints, landmarks, OCR and custom image annotation workflows based on project requirements.",
    },

    {
        question: "Can you annotate large image datasets?",

        answer:
            "Yes. Our workflows can support both smaller proof-of-concept datasets and larger production annotation projects. Project capacity and delivery timelines are planned according to volume, complexity, quality requirements, and available resources.",
    },

    {
        question: "Which image annotation formats do you support?",

        answer:
            "Depending on the project, we can work with formats such as COCO JSON, YOLO, Pascal VOC, XML, JSON, CSV, and custom formats.",
    },

    {
        question: "Which industries use image annotation?",

        answer:
            "Image annotation is widely used across autonomous vehicles, healthcare AI, agriculture, retail, sports analytics, manufacturing, robotics, drone imagery, security, and general computer vision applications.",
    },

    {
        question: "Can I provide my own annotation guidelines?",

        answer:
            "Yes. You can provide your existing annotation guidelines, class definitions, examples, and edge-case rules. Our team can follow them or work with you to improve and standardize the guidelines.",
    },

    {
        question: "Can I test your annotation quality before starting a large project?",

        answer:
            "Yes. A small sample annotation can be used to evaluate workflow compatibility, annotation quality, communication, and expected turnaround before moving into a larger production project.",
    },

    {
        question: "Can Annotexia sign an NDA?",

        answer:
            "Yes. NDA and confidentiality requirements can be discussed before project data is shared, depending on the project and contractual requirements.",
    },
];

export default function ImageAnnotationPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =========================================================
                HERO
            ========================================================== */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                {/* Background Effects */}

                <div className="absolute inset-0 pointer-events-none">

                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

                    <div className="absolute top-1/2 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

                    <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />

                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>

                            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">

                                <BrainCircuit size={16} />

                                AI & Computer Vision Data Services

                            </span>

                            <h1 className="mt-7 text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">

                                Image Annotation

                                <span className="block text-cyan-400">
                                    Services for Better AI
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-8 text-slate-300">

                                Turn raw images into structured training data
                                for computer vision and machine learning.
                                Annotexia provides accurate, scalable, and
                                workflow-driven image annotation for object
                                detection, segmentation, OCR, keypoints, and
                                custom AI applications.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600 hover:-translate-y-0.5"
                                >
                                    Get Free Sample

                                    <ArrowRight size={19} />

                                </Link>

                                <Link
                                    href="#annotation-types"
                                    className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
                                >
                                    Explore Annotation Types
                                </Link>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Human-reviewed workflows
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Scalable projects
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Custom output formats
                                </span>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl" />

                            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">

                                <Image
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                                    alt="AI image annotation and computer vision training data"
                                    width={1400}
                                    height={900}
                                    priority
                                    className="h-[430px] w-full rounded-2xl object-cover"
                                />

                                {/* Floating Card */}

                                <div className="absolute -left-6 top-12 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl md:block">

                                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                                        Annotation Type
                                    </p>

                                    <p className="mt-1 text-lg font-bold text-white">
                                        Object Detection
                                    </p>

                                </div>

                                {/* Floating Card */}

                                <div className="absolute -right-6 bottom-12 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl md:block">

                                    <p className="text-xs font-semibold uppercase tracking-wider text-green-400">
                                        Dataset Ready
                                    </p>

                                    <p className="mt-1 text-lg font-bold text-white">
                                        ML Training
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                INTRO / VALUE
            ========================================================== */}

            <section className="relative -mt-10 z-10">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="rounded-2xl bg-white p-7 shadow-xl border border-slate-100">

                            <Target className="text-cyan-600" size={30} />

                            <h2 className="mt-5 text-xl font-bold">
                                Precise Object Localization
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                Identify and localize objects with annotation
                                methods designed around your model&apos;s requirements.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white p-7 shadow-xl border border-slate-100">

                            <Layers3 className="text-cyan-600" size={30} />

                            <h2 className="mt-5 text-xl font-bold">
                                Structured Training Data
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                Convert unstructured images into consistent,
                                machine-readable datasets for AI development.
                            </p>

                        </div>

                        <div className="rounded-2xl bg-white p-7 shadow-xl border border-slate-100">

                            <ShieldCheck className="text-cyan-600" size={30} />

                            <h2 className="mt-5 text-xl font-bold">
                                Quality-Focused Workflow
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                Structured guidelines and review processes help
                                reduce inconsistencies across large datasets.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                WHAT IS IMAGE ANNOTATION
            ========================================================== */}

            <section className="py-24 lg:py-32">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-cyan-600">
                                Image Annotation Explained
                            </span>

                            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
                                Teaching AI What It Sees
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-600">
                                A computer vision model does not automatically
                                understand what objects inside an image mean.
                                Image annotation provides the structured labels
                                that allow machine learning systems to learn
                                visual patterns.
                            </p>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                From a single bounding box around a vehicle to
                                pixel-level segmentation of a medical region,
                                the annotation method depends on what your AI
                                system needs to understand.
                            </p>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Annotexia works with project-specific class
                                definitions, annotation guidelines, quality
                                requirements, and output formats to help create
                                datasets ready for your machine learning pipeline.
                            </p>

                        </div>

                        <div className="rounded-3xl bg-slate-950 p-8 lg:p-10 shadow-2xl">

                            <div className="grid grid-cols-2 gap-5">

                                {[
                                    ["Object Detection", "Bounding boxes"],
                                    ["Segmentation", "Pixel-level labels"],
                                    ["Pose Estimation", "Keypoints"],
                                    ["OCR", "Text regions"],
                                    ["Classification", "Image labels"],
                                    ["Custom Tasks", "Project-specific"],
                                ].map(([title, subtitle]) => (

                                    <div
                                        key={title}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                    >

                                        <CheckCircle2
                                            size={22}
                                            className="text-cyan-400"
                                        />

                                        <h3 className="mt-4 font-bold text-white">
                                            {title}
                                        </h3>

                                        <p className="mt-2 text-sm text-slate-400">
                                            {subtitle}
                                        </p>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                ANNOTATION TYPES
            ========================================================== */}

            <section
                id="annotation-types"
                className="bg-slate-50 py-24 lg:py-32"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-3xl mb-16">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Our Capabilities
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Image Annotation Techniques
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Different computer vision problems require different
                            annotation techniques. We select the workflow based
                            on your model objective, dataset characteristics,
                            and required output.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                        {annotationTypes.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">

                                        <Icon size={27} />

                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 border-t border-slate-100 pt-5">

                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Common Applications
                                        </p>

                                        <p className="mt-2 text-sm font-medium text-slate-700">
                                            {item.examples}
                                        </p>

                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =========================================================
                INDUSTRIES
            ========================================================== */}

            <section className="py-24 lg:py-32">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Industry Applications
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Built for Real-World AI
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Image annotation supports computer vision systems
                            across industries where machines need to understand
                            the visual world.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {industries.map((industry) => (

                            <div
                                key={industry.title}
                                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
                            >

                                <div className="flex items-center gap-3">

                                    <div className="h-2 w-2 rounded-full bg-cyan-500" />

                                    <h3 className="text-xl font-bold">
                                        {industry.title}
                                    </h3>

                                </div>

                                <p className="mt-5 leading-7 text-slate-600">
                                    {industry.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                WORKFLOW
            ========================================================== */}

            <section className="bg-slate-950 py-24 lg:py-32 text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-cyan-400">
                                Our Process
                            </span>

                            <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight">
                                From Raw Images to
                                <span className="block text-cyan-400">
                                    Model-Ready Data
                                </span>
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-300">
                                A well-defined annotation workflow is essential
                                when datasets become large and complex. Our
                                process combines project-specific guidelines,
                                trained annotators, structured review, and
                                controlled delivery.
                            </p>

                            <div className="mt-10">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white transition hover:bg-cyan-600"
                                >
                                    Discuss Your Dataset
                                    <ArrowRight size={18} />
                                </Link>

                            </div>

                        </div>

                        <div className="space-y-5">

                            {workflow.map((item) => (

                                <div
                                    key={item.number}
                                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6"
                                >

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-sm font-bold text-cyan-400">
                                        {item.number}
                                    </div>

                                    <div>

                                        <h3 className="text-xl font-bold">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 leading-7 text-slate-400">
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                TOOLS & FORMATS
            ========================================================== */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-10">

                        <div className="rounded-3xl border border-slate-200 bg-white p-9 shadow-sm">

                            <div className="flex items-center gap-3">

                                <Workflow className="text-cyan-600" />

                                <h2 className="text-2xl font-bold">
                                    Annotation Tools
                                </h2>

                            </div>

                            <p className="mt-5 leading-7 text-slate-600">
                                We can work with commonly used annotation
                                platforms and project-specific environments.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">

                                {tools.map((tool) => (

                                    <span
                                        key={tool}
                                        className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
                                    >
                                        {tool}
                                    </span>

                                ))}

                            </div>

                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-white p-9 shadow-sm">

                            <div className="flex items-center gap-3">

                                <FileCheck2 className="text-cyan-600" />

                                <h2 className="text-2xl font-bold">
                                    Output Formats
                                </h2>

                            </div>

                            <p className="mt-5 leading-7 text-slate-600">
                                Deliverables can be structured according to your
                                existing machine learning pipeline and project
                                specifications.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-3">

                                {formats.map((format) => (

                                    <span
                                        key={format}
                                        className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700"
                                    >
                                        {format}
                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                WHY ANNOTEXIA
            ========================================================== */}

            <section className="bg-slate-50 py-24 lg:py-32">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Why Annotexia
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            More Than Just Labeling
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Successful AI projects need more than a large number
                            of labels. They need consistency, communication,
                            quality control, and a workflow aligned with the
                            model&apos;s objective.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">

                        {[
                            {
                                icon: Target,
                                title: "Quality-Focused",
                                description:
                                    "Structured review processes help identify annotation errors and inconsistencies.",
                            },
                            {
                                icon: Users,
                                title: "Scalable Workforce",
                                description:
                                    "Support for projects ranging from smaller datasets to large production volumes.",
                            },
                            {
                                icon: ShieldCheck,
                                title: "Confidential Workflows",
                                description:
                                    "Project confidentiality and NDA requirements can be incorporated into the engagement.",
                            },
                            {
                                icon: BrainCircuit,
                                title: "AI-Focused Expertise",
                                description:
                                    "Annotation workflows designed around computer vision and machine learning use cases.",
                            },
                        ].map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200 transition hover:-translate-y-2 hover:shadow-xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">

                                        <Icon size={27} />

                                    </div>

                                    <h3 className="mt-7 text-xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =========================================================
                CTA
            ========================================================== */}

            <section className="py-24">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-10 lg:p-16 text-white">

                        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative grid lg:grid-cols-2 gap-12 items-center">

                            <div>

                                <span className="text-sm font-semibold uppercase tracking-widest text-cyan-100">
                                    Start Your Computer Vision Project
                                </span>

                                <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
                                    Have Images Ready for Annotation?
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-cyan-50">
                                    Share your dataset, annotation requirements,
                                    expected volume, and timeline. Our team can
                                    help you determine the right annotation
                                    approach for your AI project.
                                </p>

                            </div>

                            <div className="lg:text-right">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-slate-100"
                                >
                                    Request a Free Sample
                                    <ArrowRight size={20} />
                                </Link>

                                <p className="mt-4 text-sm text-cyan-100">
                                    No obligation. Discuss your requirements with our team.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                FAQ
            ========================================================== */}

            <section className="bg-slate-50 py-24 lg:py-32">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Image Annotation FAQs
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            Answers to common questions about our image
                            annotation and labeling services.
                        </p>

                    </div>

                    <div className="space-y-5">

                        {faqs.map((faq) => (

                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold">

                                    <span>
                                        {faq.question}
                                    </span>

                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-xl font-normal text-cyan-600 transition group-open:rotate-45">
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
            ========================================================== */}

            <section className="py-20 bg-white">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold">
                        Professional Image Annotation Services for AI
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                        Annotexia provides professional image annotation and
                        image labeling services for organizations developing
                        computer vision, artificial intelligence, and machine
                        learning applications. Our annotation workflows support
                        object detection, image classification, segmentation,
                        keypoint detection, OCR, and custom computer vision
                        requirements.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Our image annotation services can support datasets used
                        across autonomous vehicles, healthcare AI, agriculture,
                        retail, sports analytics, manufacturing, robotics,
                        drone imagery, and other computer vision applications.
                        Annotation requirements are defined according to the
                        intended model, object classes, dataset characteristics,
                        and output requirements.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        We support commonly used annotation formats and tools,
                        including COCO, YOLO, Pascal VOC, XML, JSON, CVAT,
                        Label Studio, SuperAnnotate, Roboflow, and custom
                        workflows where required.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Whether you are developing an early-stage computer vision
                        proof of concept or preparing a larger machine learning
                        dataset, Annotexia can help transform raw images into
                        structured training data through a quality-focused and
                        scalable annotation workflow.
                    </p>

                </div>

            </section>


            {/* =========================================================
                FINAL CTA
            ========================================================== */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-cyan-400">
                        Build Better Computer Vision
                    </span>

                    <h2 className="mt-5 text-4xl lg:text-5xl font-bold">
                        Your AI Model Starts With the Right Data
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        From bounding boxes and polygons to segmentation,
                        keypoints, OCR, and custom image labeling, Annotexia
                        helps you create structured training datasets for
                        computer vision and machine learning.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-white transition hover:bg-cyan-600"
                        >
                            Get a Free Sample
                            <ArrowRight size={19} />
                        </Link>

                        <Link
                            href="/services"
                            className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
                        >
                            Explore All Services
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}