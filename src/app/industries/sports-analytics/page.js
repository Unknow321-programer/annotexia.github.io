import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Trophy,
    Target,
    Users,
    Activity,
    ShieldCheck,
    BrainCircuit,
    Video,
    BarChart3,
    Zap,
} from "lucide-react";

export const metadata = {
    title:
        "Sports Analytics Data Annotation Services | Player & Ball Tracking AI | Annotexia",

    description:
        "Annotexia provides professional sports data annotation services including player tracking, ball tracking, pose estimation, event detection, jersey number annotation, and sports video labeling for AI and machine learning.",

    keywords: [
        "sports data annotation",
        "sports analytics annotation",
        "sports video annotation",
        "player tracking annotation",
        "ball tracking annotation",
        "football annotation",
        "soccer data annotation",
        "sports AI training data",
        "player tracking dataset",
        "sports video labeling",
        "pose estimation sports",
        "sports event annotation",
        "jersey number annotation",
        "sports computer vision",
        "AI sports analytics",
    ],

    alternates: {
        canonical: "https://www.annotexia.com/industries/sports-analytics",
    },

    openGraph: {
        title:
            "Sports Analytics Data Annotation Services | Annotexia",
        description:
            "Build reliable sports AI systems with accurate player tracking, ball tracking, event detection, pose estimation, and sports video annotation.",
        url: "https://www.annotexia.com/industries/sports-analytics",
        siteName: "Annotexia",
        type: "website",
        images: [
            {
                url:
                    "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=80",
                width: 1400,
                height: 933,
                alt:
                    "Sports analytics player tracking and video annotation",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Sports Analytics Data Annotation Services | Annotexia",
        description:
            "Accurate sports video annotation for player tracking, ball tracking, pose estimation, event detection, and AI sports analytics.",
    },
};

const services = [
    {
        title: "Player Tracking",
        description:
            "Track players consistently across video frames to create reliable datasets for sports analytics, tactical analysis, and performance monitoring.",
        icon: Users,
    },
    {
        title: "Ball Tracking",
        description:
            "Accurately annotate and track the ball across challenging sports footage, including fast movement, occlusion, and crowded scenes.",
        icon: Target,
    },
    {
        title: "Event Annotation",
        description:
            "Label important sports events such as passes, shots, goals, tackles, fouls, substitutions, and other game-changing moments.",
        icon: Activity,
    },
    {
        title: "Pose Estimation",
        description:
            "Annotate body keypoints and player poses to support biomechanics, movement analysis, action recognition, and performance AI.",
        icon: BrainCircuit,
    },
    {
        title: "Jersey Number Annotation",
        description:
            "Identify and label player jersey numbers to support player identification, tracking, statistics, and automated sports analytics.",
        icon: Trophy,
    },
    {
        title: "Sports Video Annotation",
        description:
            "Convert raw sports footage into structured machine learning datasets for computer vision and automated sports intelligence.",
        icon: Video,
    },
];

const useCases = [
    "Player Performance Analysis",
    "Tactical Analysis",
    "Automated Match Statistics",
    "Player Identification",
    "Action Recognition",
    "Sports Broadcast Analytics",
    "Athlete Performance Tracking",
    "Automatic Highlight Generation",
    "Team Strategy Analysis",
    "Computer Vision Research",
    "Sports AI Model Training",
    "Video Intelligence",
];

const sports = [
    "Football / Soccer",
    "Basketball",
    "Cricket",
    "Tennis",
    "Hockey",
    "Baseball",
    "Rugby",
    "American Football",
];

const workflow = [
    {
        number: "01",
        title: "Understand Your Requirements",
        description:
            "We first understand your sport, video characteristics, annotation classes, tracking requirements, output format, and project objectives.",
    },
    {
        number: "02",
        title: "Create Annotation Guidelines",
        description:
            "Our team develops clear annotation instructions covering player identification, tracking rules, event definitions, occlusion handling, and edge cases.",
    },
    {
        number: "03",
        title: "Annotate Sports Footage",
        description:
            "Trained annotators label images or video frames according to your project-specific guidelines using professional annotation workflows.",
    },
    {
        number: "04",
        title: "Quality Assurance",
        description:
            "Multiple quality checks help identify missed objects, incorrect labels, tracking inconsistencies, and other annotation errors.",
    },
    {
        number: "05",
        title: "Validate & Deliver",
        description:
            "Final datasets are reviewed, validated, and delivered in the required format for your machine learning or sports analytics pipeline.",
    },
];

const formats = [
    "XML",
    "JSON",
    "COCO",
    "YOLO",
    "CSV",
    "Pascal VOC",
    "Custom Formats",
];

const faqs = [
    {
        question:
            "What sports data annotation services does Annotexia provide?",
        answer:
            "Annotexia provides player tracking, ball tracking, jersey number annotation, event detection, pose estimation, sports video annotation, object detection, and custom sports dataset annotation.",
    },
    {
        question:
            "Can you annotate complete sports matches?",
        answer:
            "Yes. We can annotate complete matches or selected portions of sports footage depending on your project requirements, annotation classes, frame rate, and required output.",
    },
    {
        question:
            "Can you track players across multiple video frames?",
        answer:
            "Yes. Our sports video annotation workflows can support frame-by-frame player tracking, ball tracking, identity consistency, and event annotation across video sequences.",
    },
    {
        question:
            "Can you annotate jersey numbers?",
        answer:
            "Yes. Jersey number annotation can be included to help identify individual players and connect tracking information with player-level statistics.",
    },
    {
        question:
            "Which sports can you support?",
        answer:
            "We can support projects across football, basketball, cricket, tennis, hockey, baseball, rugby, American football, and other sports depending on the annotation requirements.",
    },
    {
        question:
            "What annotation formats do you support?",
        answer:
            "We can deliver datasets in formats such as XML, JSON, COCO, YOLO, CSV, Pascal VOC, and project-specific custom formats.",
    },
    {
        question:
            "Can you handle large sports video annotation projects?",
        answer:
            "Yes. Our annotation workflows can scale from small proof-of-concept datasets to large sports video and machine learning projects.",
    },
    {
        question:
            "Can we test your annotation quality before starting a large project?",
        answer:
            "Yes. A small sample annotation can be used to evaluate annotation quality, consistency, communication, and workflow before moving forward with a larger engagement.",
    },
];

export default function SportsAnalyticsPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>

                            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 mb-7">

                                <Trophy size={16} />

                                Sports AI Data Annotation

                            </div>

                            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">

                                Turn Sports Video Into

                                <span className="block text-blue-400">
                                    Actionable AI Data
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-8 text-slate-300">

                                Build powerful sports analytics and computer vision
                                systems with accurately annotated player tracking,
                                ball tracking, events, poses, jersey numbers, and
                                sports video datasets.

                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">

                                From a single match to large-scale sports datasets,
                                Annotexia helps transform raw video into structured
                                training data for AI-powered sports intelligence.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                                >
                                    Start Your Sports AI Project

                                    <ArrowRight size={19} />
                                </Link>

                                <Link
                                    href="/services/video-annotation"
                                    className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
                                >
                                    Explore Video Annotation
                                </Link>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/20 blur-3xl" />

                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">

                                <Image
                                    src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=80"
                                    alt="Sports analytics player tracking and AI video annotation"
                                    width={1400}
                                    height={933}
                                    priority
                                    className="h-[430px] w-full rounded-2xl object-cover"
                                />

                            </div>

                            {/* Floating card */}

                            <div className="absolute -left-7 top-10 hidden rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl md:block">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                                        <Users className="text-blue-400" size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Tracking
                                        </p>

                                        <p className="font-bold text-white">
                                            Players + Ball
                                        </p>
                                    </div>

                                </div>

                            </div>

                            {/* Floating card */}

                            <div className="absolute -right-7 bottom-10 hidden rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl md:block">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
                                        <BarChart3 className="text-cyan-400" size={22} />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Dataset
                                        </p>

                                        <p className="font-bold text-white">
                                            AI-Ready Data
                                        </p>
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

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-blue-600">
                        Sports Computer Vision
                    </span>

                    <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight">
                        Every Movement Can Become Data
                    </h2>

                    <p className="mt-7 text-lg leading-8 text-slate-600">
                        A sports video contains far more information than what
                        viewers see on the screen. Player movement, ball position,
                        team formations, actions, events, and physical movement
                        can all become structured data for artificial intelligence.
                    </p>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        Annotexia helps convert this visual information into
                        high-quality datasets that can be used to train and
                        evaluate sports computer vision and machine learning models.
                    </p>

                </div>

            </section>

            {/* =========================================================
                SERVICES
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-3xl mb-14">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            What We Annotate
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Sports Data Annotation Services
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Build the datasets your sports AI models need with
                            annotation workflows designed around your specific
                            sport, video, and analytical requirements.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                        {services.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="absolute left-0 top-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">

                                        <Icon
                                            size={27}
                                            className="text-blue-600 transition group-hover:text-white"
                                        />

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

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-blue-600">
                                Applications
                            </span>

                            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                                Where Sports AI Data Makes an Impact
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Structured sports datasets can power everything
                                from automated match statistics to advanced
                                player performance and tactical analysis.
                            </p>

                            <div className="mt-10 grid sm:grid-cols-2 gap-4">

                                {useCases.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >

                                        <CheckCircle2
                                            size={21}
                                            className="mt-1 shrink-0 text-blue-600"
                                        />

                                        <span className="font-medium text-slate-700">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        <div className="relative">

                            <div className="rounded-3xl bg-slate-900 p-8 lg:p-10 shadow-2xl">

                                <div className="flex items-center gap-4 mb-8">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">

                                        <Activity
                                            className="text-white"
                                            size={27}
                                        />

                                    </div>

                                    <div>

                                        <p className="text-sm text-blue-400">
                                            Sports AI Dataset
                                        </p>

                                        <h3 className="text-2xl font-bold text-white">
                                            From Video to Intelligence
                                        </h3>

                                    </div>

                                </div>

                                <div className="space-y-4">

                                    {[
                                        ["Players", "Track identities & movement"],
                                        ["Ball", "Track position & trajectory"],
                                        ["Events", "Identify game actions"],
                                        ["Pose", "Capture player keypoints"],
                                        ["Jersey", "Identify players"],
                                    ].map(([label, value]) => (

                                        <div
                                            key={label}
                                            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                                        >

                                            <span className="font-semibold text-white">
                                                {label}
                                            </span>

                                            <span className="text-sm text-slate-400">
                                                {value}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                SPORTS
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="max-w-7xl mx-auto px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-blue-600">
                        Sports We Support
                    </span>

                    <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                        Built for Different Sports
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        Annotation requirements change significantly from one
                        sport to another. Our workflows can be adapted to the
                        rules, objects, events, and analytical requirements of
                        your project.
                    </p>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5">

                        {sports.map((sport) => (

                            <div
                                key={sport}
                                className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >

                                <Trophy
                                    size={24}
                                    className="mx-auto mb-3 text-blue-600"
                                />

                                {sport}

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                WORKFLOW
            ========================================================= */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Our Workflow
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            From Raw Footage to AI-Ready Dataset
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            A structured annotation process helps maintain
                            consistency across every frame and every project.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

                        {workflow.map((item) => (

                            <div
                                key={item.number}
                                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                            >

                                <div className="text-4xl font-extrabold text-blue-600">
                                    {item.number}
                                </div>

                                <h3 className="mt-6 text-xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                QUALITY + SECURITY
            ========================================================= */}

            <section className="bg-slate-900 py-24 text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-blue-400">
                                Quality First
                            </span>

                            <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                                Annotation Quality Matters
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Sports AI models depend on consistent annotations.
                                A missed player, incorrect identity, broken track,
                                or incorrectly labeled event can affect downstream
                                model performance.
                            </p>

                            <div className="mt-10 space-y-5">

                                {[
                                    "Project-specific annotation guidelines",
                                    "Trained sports annotation teams",
                                    "Multi-level quality review",
                                    "Tracking consistency checks",
                                    "Edge-case and occlusion review",
                                    "Final dataset validation",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <CheckCircle2
                                            className="shrink-0 text-blue-400"
                                            size={22}
                                        />

                                        <span className="text-slate-200">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        <div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 lg:p-10">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">

                                    <ShieldCheck
                                        className="text-blue-400"
                                        size={28}
                                    />

                                </div>

                                <h3 className="mt-7 text-3xl font-bold">
                                    Secure & Confidential Workflows
                                </h3>

                                <p className="mt-5 leading-8 text-slate-300">
                                    Sports organizations and technology companies
                                    may work with proprietary footage, unreleased
                                    matches, athlete data, or commercially sensitive
                                    information.
                                </p>

                                <p className="mt-5 leading-8 text-slate-300">
                                    Annotexia supports confidential project
                                    workflows and can work under NDA requirements
                                    when requested.
                                </p>

                                <div className="mt-8 grid sm:grid-cols-2 gap-4">

                                    {[
                                        "NDA Support",
                                        "Confidential Workflows",
                                        "Controlled Access",
                                        "Quality Monitoring",
                                    ].map((item) => (

                                        <div
                                            key={item}
                                            className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm font-medium"
                                        >
                                            {item}
                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                OUTPUT FORMATS
            ========================================================= */}

            <section className="py-20">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-blue-600">
                        Dataset Delivery
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Flexible Annotation Output
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                        We can structure annotated sports datasets according to
                        your machine learning pipeline and project requirements.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-3">

                        {formats.map((format) => (

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

            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="px-6 py-24">

                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 px-8 py-16 text-white lg:px-16">

                    <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative grid lg:grid-cols-2 gap-12 items-center">

                        <div>

                            <div className="flex items-center gap-2 text-blue-100 font-semibold">
                                <Zap size={20} />
                                Build Your Sports AI Dataset
                            </div>

                            <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
                                Have Sports Data?
                                <span className="block">
                                    Let&apos;s Turn It Into AI.
                                </span>
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-blue-100">
                                Share your sports video, annotation requirements,
                                target classes, and expected dataset size. Our
                                team can help you define an annotation workflow
                                tailored to your AI project.
                            </p>

                        </div>

                        <div className="lg:text-right">

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-5 text-lg font-bold text-blue-700 shadow-xl transition hover:scale-105"
                            >
                                Request a Free Consultation

                                <ArrowRight size={21} />

                            </Link>

                            <p className="mt-5 text-sm text-blue-100">
                                Discuss your project requirements with our team.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                FAQ
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="text-center mb-14">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            Sports Annotation FAQs
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

                                    <span className="text-2xl font-normal text-blue-600 transition group-open:rotate-45">
                                        +
                                    </span>

                                </summary>

                                <p className="mt-5 leading-8 text-slate-600">
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

            <section className="py-20 bg-white">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold">
                        Sports Analytics Data Annotation Services
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                        Annotexia provides sports data annotation and video
                        labeling services for organizations developing sports
                        analytics, computer vision, and artificial intelligence
                        applications. Our annotation workflows support player
                        tracking, ball tracking, event detection, pose estimation,
                        jersey number annotation, object detection, and other
                        sports-specific labeling requirements.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Sports video contains complex visual information including
                        player movement, ball trajectories, team formations,
                        actions, and events. Converting this information into
                        structured training data enables machine learning models
                        to understand and analyze sports footage at scale.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Our sports annotation services can support football,
                        basketball, cricket, tennis, hockey, baseball, rugby,
                        American football, and other sports. Projects can be
                        customized around your annotation taxonomy, tracking
                        requirements, quality standards, dataset size, and output
                        format.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Whether you are building an automated sports analytics
                        platform, player performance system, tactical analysis
                        solution, sports broadcast technology, or computer vision
                        model, Annotexia can help transform raw sports footage
                        into structured AI training data.
                    </p>

                </div>

            </section>

            {/* =========================================================
                FINAL CTA
            ========================================================= */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <Trophy
                        size={42}
                        className="mx-auto text-blue-400"
                    />

                    <h2 className="mt-7 text-4xl lg:text-5xl font-bold">
                        Build Smarter Sports AI With Better Data
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Your sports AI model is only as reliable as the data
                        behind it. Let Annotexia help you build accurate,
                        consistent, and scalable sports training datasets.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
                    >
                        Talk to Our Sports AI Team

                        <ArrowRight size={20} />

                    </Link>

                </div>

            </section>

        </main>
    );
}