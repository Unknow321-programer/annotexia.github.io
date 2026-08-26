import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    PlayCircle,
    Target,
    Layers3,
    ShieldCheck,
    BrainCircuit,
    Clock3,
    Users,
    BarChart3,
} from "lucide-react";

export const metadata = {
    title: "Video Annotation Services | AI & ML Training Data | Annotexia",
    description:
        "Professional video annotation services for AI and machine learning. Annotexia provides object tracking, action recognition, event detection, pose estimation, segmentation, and frame-by-frame video labeling.",
    keywords: [
        "video annotation services",
        "video labeling services",
        "AI video annotation",
        "machine learning video annotation",
        "video object tracking",
        "action recognition annotation",
        "event detection annotation",
        "pose estimation annotation",
        "sports video annotation",
        "computer vision video datasets",
        "video training data",
    ],
    alternates: {
        canonical: "https://annotexia.com/services/video-annotation",
    },
    openGraph: {
        title: "Video Annotation Services | Annotexia",
        description:
            "Accurate and scalable video annotation services for computer vision, sports analytics, autonomous systems, robotics, surveillance, and AI applications.",
        url: "https://annotexia.com/services/video-annotation",
        siteName: "Annotexia",
        type: "website",
        images: [
            {
                url: "https://annotexia.com/images/services/video-annotation.webp",
                width: 1200,
                height: 630,
                alt: "Professional video annotation services for AI and machine learning",
            },
        ],
    },
};

const annotationTypes = [
    {
        title: "Object Tracking",
        description:
            "Track vehicles, people, products, animals, sports players, and other objects consistently across video frames.",
        icon: Target,
    },
    {
        title: "Action Recognition",
        description:
            "Label human actions, activities, gestures, movements, and events to train AI systems for activity recognition.",
        icon: PlayCircle,
    },
    {
        title: "Event Detection",
        description:
            "Identify important events and temporal activities within long or complex video sequences.",
        icon: Clock3,
    },
    {
        title: "Pose Estimation",
        description:
            "Annotate human body keypoints and movement patterns for sports, healthcare, robotics, and human activity analysis.",
        icon: Users,
    },
    {
        title: "Video Segmentation",
        description:
            "Create pixel-level or object-level segmentation masks across video frames for advanced computer vision models.",
        icon: Layers3,
    },
    {
        title: "Object Classification",
        description:
            "Classify and categorize objects throughout video datasets using project-specific labeling taxonomies.",
        icon: BrainCircuit,
    },
];

const useCases = [
    {
        title: "Sports Analytics",
        description:
            "Track players, ball movement, actions, formations, and game events to build advanced sports intelligence systems.",
        image:
            "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80",
        href: "/industries/sports-analytics",
    },
    {
        title: "Autonomous Vehicles",
        description:
            "Annotate vehicles, pedestrians, cyclists, road signs, traffic lights, lanes, and other objects across driving sequences.",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        href: "/industries/autonomous-vehicles",
    },
    {
        title: "Robotics & Computer Vision",
        description:
            "Create high-quality video datasets for robots and intelligent systems that need to understand dynamic environments.",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
        href: "/industries/computer-vision",
    },
    {
        title: "Retail & E-commerce",
        description:
            "Support customer behavior analysis, shelf monitoring, product interaction detection, and retail automation.",
        image:
            "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80",
        href: "/industries/retail-ecommerce",
    },
];

const workflow = [
    {
        number: "01",
        title: "Project Discovery",
        description:
            "We understand your video data, annotation objectives, classes, labeling rules, output format, and model requirements.",
    },
    {
        number: "02",
        title: "Guideline Creation",
        description:
            "Our team converts your requirements into clear annotation guidelines covering edge cases, object definitions, and tracking rules.",
    },
    {
        number: "03",
        title: "Video Annotation",
        description:
            "Trained annotators label and track objects, actions, events, poses, and other required elements across video sequences.",
    },
    {
        number: "04",
        title: "Quality Assurance",
        description:
            "Multiple quality checks identify missing labels, inconsistent tracking, incorrect classifications, and guideline deviations.",
    },
    {
        number: "05",
        title: "Validation",
        description:
            "Samples and completed datasets are reviewed against project-specific quality requirements before delivery.",
    },
    {
        number: "06",
        title: "Dataset Delivery",
        description:
            "Validated annotations are delivered in your required format and organized for direct integration into your ML workflow.",
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
    "Custom Formats",
];

const faqs = [
    {
        question: "What is video annotation?",
        answer:
            "Video annotation is the process of labeling objects, actions, events, movements, or other information across video frames so machine learning and computer vision models can learn from temporal data.",
    },
    {
        question: "What types of video annotation do you provide?",
        answer:
            "Annotexia provides object tracking, action recognition, event detection, pose estimation, video segmentation, object classification, keypoint annotation, and custom video labeling services.",
    },
    {
        question: "Can you track objects across multiple video frames?",
        answer:
            "Yes. Object tracking across consecutive frames is a core video annotation capability. We can maintain object identities and project-specific tracking attributes throughout video sequences.",
    },
    {
        question: "Do you support sports video annotation?",
        answer:
            "Yes. We support sports analytics datasets including player tracking, ball tracking, event annotation, pose estimation, jersey identification, and other project-specific requirements.",
    },
    {
        question: "Which annotation formats do you support?",
        answer:
            "Depending on the project, we can work with formats such as COCO, YOLO, Pascal VOC, JSON, XML, CSV, Label Studio, CVAT, and custom formats.",
    },
    {
        question: "Can you handle large video annotation projects?",
        answer:
            "Yes. Our annotation workflows are designed to scale from small pilot datasets to large video annotation projects. Project capacity is planned according to volume, complexity, timeline, and quality requirements.",
    },
    {
        question: "Can I test your quality before starting a large project?",
        answer:
            "Yes. We can provide a sample annotation so you can evaluate annotation quality, consistency, communication, and workflow before moving forward with a larger project.",
    },
];

export default function VideoAnnotationPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

                            <span className="mb-7 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                                AI Video Annotation Services
                            </span>

                            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">

                                Turn Video Into

                                <span className="block text-blue-400">
                                    AI-Ready Data
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                                Transform raw video into structured training data
                                for computer vision and machine learning models.
                                Annotexia provides accurate video annotation,
                                object tracking, action recognition, event detection,
                                pose estimation, and segmentation.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-900/30 transition hover:bg-blue-700"
                                >
                                    Get a Free Quote
                                </Link>

                                <Link
                                    href="#annotation-types"
                                    className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
                                >
                                    Explore Services
                                </Link>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Frame-by-frame labeling
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Object tracking
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Multi-level QA
                                </span>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">

                                <Image
                                    src="/images/services/video-annotation.webp"
                                    alt="Professional video annotation for AI and machine learning"
                                    width={900}
                                    height={600}
                                    priority
                                    className="h-[420px] w-full rounded-[1.5rem] object-cover"
                                />

                                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/85 p-5 backdrop-blur">

                                    <div className="flex items-center justify-between">

                                        <div>
                                            <p className="text-sm text-cyan-400">
                                                Video Intelligence
                                            </p>

                                            <p className="mt-1 font-bold text-white">
                                                Frame-by-Frame Annotation
                                            </p>
                                        </div>

                                        <PlayCircle
                                            size={38}
                                            className="text-cyan-400"
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                INTRO
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-blue-600">
                                Video Training Data
                            </span>

                            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                                Help AI Understand What Happens Over Time
                            </h2>

                        </div>

                        <div className="space-y-6 text-lg leading-8 text-slate-600">

                            <p>
                                A single image tells an AI what exists in a
                                particular moment. Video tells the model what
                                happens before, during, and after that moment.
                            </p>

                            <p>
                                This temporal information is essential for
                                applications such as autonomous driving,
                                sports analytics, robotics, surveillance,
                                healthcare, retail intelligence, and activity
                                recognition.
                            </p>

                            <p>
                                Annotexia transforms complex video sequences
                                into structured datasets that help machine
                                learning models understand objects, movement,
                                interactions, and events.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                ANNOTATION TYPES
            ========================================================= */}

            <section
                id="annotation-types"
                className="bg-slate-50 py-24"
            >

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Our Capabilities
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                            Video Annotation Services
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Choose the annotation approach your AI model needs,
                            from simple object classification to complex
                            temporal tracking and activity recognition.
                        </p>

                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                        {annotationTypes.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">

                                        <Icon
                                            size={27}
                                            className="text-blue-600 transition group-hover:text-white"
                                        />

                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold text-slate-900">
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
                WHY VIDEO ANNOTATION
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-blue-600">
                                Why It Matters
                            </span>

                            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                                Your AI Needs More Than Individual Frames
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-600">
                                Modern AI applications increasingly need to
                                understand movement, interaction, and context.
                                Video annotation provides the temporal information
                                required to train these systems.
                            </p>

                            <div className="mt-8 space-y-4">

                                {[
                                    "Understand object movement across frames",
                                    "Recognize human actions and activities",
                                    "Detect important events in video",
                                    "Train models for real-world environments",
                                    "Build consistent computer vision datasets",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2
                                            size={22}
                                            className="mt-1 shrink-0 text-blue-600"
                                        />

                                        <span className="text-lg text-slate-700">
                                            {item}
                                        </span>
                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">

                            <div className="grid gap-6 sm:grid-cols-2">

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <BarChart3 className="text-cyan-400" size={30} />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Temporal Context
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-400">
                                        Capture how objects and actions change
                                        across time.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <Target className="text-cyan-400" size={30} />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Precise Tracking
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-400">
                                        Maintain consistent object identities
                                        throughout sequences.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <ShieldCheck className="text-cyan-400" size={30} />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Quality Control
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-400">
                                        Multi-stage review helps identify
                                        inconsistencies and missing labels.
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <BrainCircuit className="text-cyan-400" size={30} />

                                    <h3 className="mt-5 text-xl font-bold">
                                        Model-Ready Data
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-400">
                                        Receive structured datasets aligned
                                        with your ML workflow.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                USE CASES
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-16">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Industry Applications
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Where Video Annotation Powers AI
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Video datasets can support AI systems across
                            industries where understanding movement, behavior,
                            and real-world events is essential.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2">

                        {useCases.map((item) => (
                            <Link
                                href={item.href}
                                key={item.title}
                                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                <div className="overflow-hidden">

                                    <Image
                                        src={item.image}
                                        alt={`${item.title} video annotation applications`}
                                        width={1200}
                                        height={700}
                                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                </div>

                                <div className="p-8">

                                    <h3 className="text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-slate-600">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 flex items-center font-semibold text-blue-600">

                                        Explore Industry

                                        <ArrowRight
                                            size={19}
                                            className="ml-2 transition group-hover:translate-x-2"
                                        />

                                    </div>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                WORKFLOW
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Our Workflow
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            From Raw Video to AI-Ready Dataset
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            A structured workflow keeps complex video annotation
                            projects consistent, measurable, and scalable.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {workflow.map((step) => (
                            <div
                                key={step.number}
                                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                            >

                                <span className="text-5xl font-extrabold text-blue-100">
                                    {step.number}
                                </span>

                                <h3 className="mt-4 text-2xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-600">
                                    {step.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                FORMATS
            ========================================================= */}

            <section className="bg-slate-950 py-20">

                <div className="mx-auto max-w-6xl px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-cyan-400">
                        Flexible Delivery
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-white lg:text-5xl">
                        Annotation Formats That Fit Your Workflow
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        We can deliver structured annotation data in commonly
                        used machine learning formats or adapt the output to
                        your project requirements.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-3">

                        {formats.map((format) => (
                            <span
                                key={format}
                                className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300"
                            >
                                {format}
                            </span>
                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                QUALITY + SECURITY
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-8 md:grid-cols-2">

                        <div className="rounded-3xl bg-blue-50 p-10">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">

                                <CheckCircle2
                                    size={28}
                                    className="text-white"
                                />

                            </div>

                            <h2 className="mt-7 text-3xl font-bold">
                                Quality-Focused Annotation
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Video annotation requires consistency across
                                hundreds or thousands of frames. Our quality
                                workflow focuses on accurate labels, consistent
                                tracking, clear guidelines, and review of
                                difficult edge cases.
                            </p>

                            <ul className="mt-7 space-y-3">

                                {[
                                    "Project-specific annotation guidelines",
                                    "Annotator training",
                                    "Reviewer validation",
                                    "Random quality sampling",
                                    "Edge-case review",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            size={19}
                                            className="text-blue-600"
                                        />

                                        <span>{item}</span>
                                    </li>
                                ))}

                            </ul>

                        </div>

                        <div className="rounded-3xl bg-slate-900 p-10 text-white">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500">

                                <ShieldCheck
                                    size={28}
                                    className="text-white"
                                />

                            </div>

                            <h2 className="mt-7 text-3xl font-bold">
                                Secure Project Workflows
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Your video data may contain proprietary,
                                confidential, or sensitive information.
                                We support controlled project workflows and
                                confidentiality requirements appropriate to
                                your engagement.
                            </p>

                            <ul className="mt-7 space-y-3">

                                {[
                                    "NDA support",
                                    "Controlled project access",
                                    "Confidential workflows",
                                    "Secure data handling practices",
                                    "Project-specific access requirements",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            size={19}
                                            className="text-cyan-400"
                                        />

                                        <span>{item}</span>
                                    </li>
                                ))}

                            </ul>

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

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Video Annotation Questions
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            Answers to common questions about our video
                            annotation and labeling services.
                        </p>

                    </div>

                    <div className="space-y-5">

                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">

                                    <span>
                                        {faq.question}
                                    </span>

                                    <span className="text-2xl text-blue-600 transition group-open:rotate-45">
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
                CTA
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 p-10 text-white md:p-16">

                        <div className="grid items-center gap-12 lg:grid-cols-2">

                            <div>

                                <span className="font-semibold uppercase tracking-widest text-blue-100">
                                    Start Your Project
                                </span>

                                <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                                    Have Video Data?
                                    <span className="block">
                                        Let&apos;s Turn It Into AI Training Data.
                                    </span>
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-blue-50">
                                    Share your video dataset, annotation
                                    requirements, expected volume, and
                                    timeline. Our team can help you define
                                    the right annotation workflow.
                                </p>

                            </div>

                            <div className="lg:text-right">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-2xl bg-white px-9 py-5 text-lg font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-slate-100"
                                >
                                    Request a Free Consultation

                                    <ArrowRight
                                        size={21}
                                        className="ml-3"
                                    />

                                </Link>

                                <p className="mt-5 text-sm text-blue-100">
                                    Start with a sample annotation.
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
                        Professional Video Annotation Services
                    </h2>

                    <p className="mt-6 leading-9 text-slate-600">
                        Annotexia provides professional video annotation and
                        video labeling services for organizations developing
                        artificial intelligence, machine learning, and
                        computer vision applications. Our services cover
                        object tracking, action recognition, event detection,
                        pose estimation, video segmentation, classification,
                        and custom annotation requirements.
                    </p>

                    <p className="mt-6 leading-9 text-slate-600">
                        Video annotation enables AI systems to understand not
                        only what appears in a frame, but also how objects,
                        people, and events change over time. This makes
                        high-quality video training data valuable for sports
                        analytics, autonomous vehicles, robotics, retail
                        intelligence, surveillance, healthcare, and other
                        computer vision applications.
                    </p>

                    <p className="mt-6 leading-9 text-slate-600">
                        Our structured workflow combines project-specific
                        guidelines, trained annotation teams, quality
                        assurance, validation, and flexible output formats.
                        Whether you are developing an early-stage computer
                        vision model or managing a large enterprise dataset,
                        Annotexia can help transform raw video into reliable
                        machine learning training data.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">

                        <Link
                            href="/services/image-annotation"
                            className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                            Image Annotation
                            <ArrowRight
                                size={17}
                                className="ml-1 inline"
                            />
                        </Link>

                        <Link
                            href="/services/text-annotation"
                            className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                            Text Annotation
                            <ArrowRight
                                size={17}
                                className="ml-1 inline"
                            />
                        </Link>

                        <Link
                            href="/services/audio-annotation"
                            className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                            Audio Annotation
                            <ArrowRight
                                size={17}
                                className="ml-1 inline"
                            />
                        </Link>

                        <Link
                            href="/services/lidar-annotation"
                            className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                            LiDAR Annotation
                            <ArrowRight
                                size={17}
                                className="ml-1 inline"
                            />
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}