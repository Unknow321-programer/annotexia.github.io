import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Car,
    Cpu,
    Eye,
    Layers3,
    Map,
    Radar,
    ShieldCheck,
    Target,
    Zap,
} from "lucide-react";

export const metadata = {
    title:
        "Autonomous Vehicle Data Annotation Services | LiDAR & Computer Vision | Annotexia",

    description:
        "Annotexia provides high-quality autonomous vehicle data annotation services including 2D and 3D bounding boxes, LiDAR annotation, semantic segmentation, lane marking, object tracking, sensor fusion, and perception datasets.",

    keywords: [
        "autonomous vehicle data annotation",
        "autonomous driving annotation services",
        "LiDAR annotation services",
        "3D bounding box annotation",
        "2D bounding box annotation",
        "autonomous vehicle training data",
        "self driving car datasets",
        "lane detection annotation",
        "semantic segmentation autonomous vehicles",
        "sensor fusion annotation",
        "computer vision annotation",
        "ADAS annotation services",
    ],

    alternates: {
        canonical: "/industries/autonomous-vehicles",
    },

    openGraph: {
        title:
            "Autonomous Vehicle Data Annotation Services | Annotexia",
        description:
            "Accurate 2D, 3D, LiDAR, lane, object tracking, and sensor-fusion annotation for autonomous driving and ADAS AI systems.",
        url: "https://annotexia.com/industries/autonomous-vehicles",
        siteName: "Annotexia",
        type: "website",
        images: [
            {
                url: "https://annotexia.com/images/industries/autonomous-vehicles.webp",
                width: 1200,
                height: 630,
                alt: "Autonomous vehicle data annotation services",
            },
        ],
    },
};

const annotationServices = [
    {
        title: "2D Bounding Box Annotation",
        description:
            "Precisely identify vehicles, pedestrians, cyclists, traffic signs, traffic lights, and other road objects in camera imagery.",
        icon: Target,
    },
    {
        title: "3D Bounding Box Annotation",
        description:
            "Create accurate 3D cuboids around road objects to help perception systems understand object position, size, and orientation.",
        icon: Layers3,
    },
    {
        title: "LiDAR Annotation",
        description:
            "Label point-cloud data for autonomous driving perception, object detection, localization, and 3D scene understanding.",
        icon: Radar,
    },
    {
        title: "Semantic Segmentation",
        description:
            "Classify road scenes at pixel or point level including roads, vehicles, buildings, vegetation, sidewalks, and obstacles.",
        icon: Eye,
    },
    {
        title: "Lane & Road Annotation",
        description:
            "Annotate lane boundaries, road markings, drivable areas, intersections, curbs, and other road infrastructure.",
        icon: Map,
    },
    {
        title: "Object Tracking",
        description:
            "Track vehicles, pedestrians, cyclists, and other dynamic objects consistently across video frames.",
        icon: Car,
    },
];

const objects = [
    "Cars",
    "Trucks",
    "Buses",
    "Motorcycles",
    "Bicycles",
    "Pedestrians",
    "Traffic Lights",
    "Traffic Signs",
    "Road Barriers",
    "Cones",
    "Lane Markings",
    "Road Surface",
    "Construction Objects",
    "Emergency Vehicles",
    "Animals",
    "Other Obstacles",
];

const useCases = [
    {
        title: "Autonomous Driving",
        description:
            "Build perception datasets that help autonomous vehicles detect, classify, localize, and track objects in complex road environments.",
        icon: Car,
    },
    {
        title: "ADAS Systems",
        description:
            "Support advanced driver assistance systems including collision detection, lane departure warnings, pedestrian detection, and emergency braking.",
        icon: ShieldCheck,
    },
    {
        title: "Vehicle Perception",
        description:
            "Create high-quality datasets for computer vision and sensor-based perception models operating in real-world environments.",
        icon: Eye,
    },
    {
        title: "HD Mapping",
        description:
            "Annotate road infrastructure, lanes, traffic signs, intersections, and environmental elements used for high-definition mapping.",
        icon: Map,
    },
    {
        title: "Robotics & Mobility",
        description:
            "Provide perception datasets for autonomous robots, delivery vehicles, warehouse mobility systems, and other intelligent machines.",
        icon: Cpu,
    },
    {
        title: "Simulation & Testing",
        description:
            "Prepare labeled datasets for validating perception models across different environments, weather conditions, and traffic scenarios.",
        icon: Zap,
    },
];

const workflow = [
    {
        number: "01",
        title: "Project Understanding",
        description:
            "We review your sensor data, annotation requirements, classes, formats, guidelines, and quality expectations.",
    },
    {
        number: "02",
        title: "Annotation Guidelines",
        description:
            "Our team converts project requirements into clear annotation instructions and edge-case rules.",
    },
    {
        number: "03",
        title: "Pilot Annotation",
        description:
            "A representative sample is annotated first to validate the guidelines, workflow, and expected quality.",
    },
    {
        number: "04",
        title: "Production Annotation",
        description:
            "Trained annotators process the approved dataset using the required annotation platform and workflow.",
    },
    {
        number: "05",
        title: "Quality Assurance",
        description:
            "Annotations are reviewed using structured QA processes to identify missing, incorrect, or inconsistent labels.",
    },
    {
        number: "06",
        title: "Dataset Delivery",
        description:
            "Validated annotations are delivered in your required format and organized for downstream AI model development.",
    },
];

const formats = [
    "COCO",
    "YOLO",
    "Pascal VOC",
    "JSON",
    "XML",
    "CSV",
    "Custom Formats",
    "LiDAR Point Cloud Formats",
];

const faqs = [
    {
        question:
            "What types of autonomous vehicle data can Annotexia annotate?",
        answer:
            "We support camera images, video, LiDAR point clouds, and other perception datasets. Depending on the project, we can annotate vehicles, pedestrians, cyclists, traffic signs, traffic lights, lanes, road surfaces, obstacles, and other environmental objects.",
    },
    {
        question:
            "Do you provide LiDAR and 3D annotation?",
        answer:
            "Yes. Our autonomous vehicle annotation services include LiDAR point-cloud labeling, 3D bounding boxes, cuboids, object classification, and other 3D perception annotation workflows.",
    },
    {
        question:
            "Can you annotate video for object tracking?",
        answer:
            "Yes. We can track objects across video sequences, including vehicles, pedestrians, cyclists, and other relevant road objects. Tracking rules can be customized according to your model requirements.",
    },
    {
        question:
            "Can you follow our existing annotation guidelines?",
        answer:
            "Yes. We can work with your existing annotation guidelines and adapt our production workflow to your class definitions, edge cases, quality requirements, and preferred annotation platform.",
    },
    {
        question:
            "Which annotation formats do you support?",
        answer:
            "We support commonly used formats such as COCO, YOLO, Pascal VOC, JSON, XML, CSV, and custom formats. LiDAR and 3D projects can also be delivered according to the required project-specific structure.",
    },
    {
        question:
            "Can Annotexia handle large autonomous driving datasets?",
        answer:
            "Yes. Our workflows are designed to support projects ranging from small pilot datasets to large-scale annotation programs. Production capacity can be planned according to your volume, timeline, and quality requirements.",
    },
    {
        question:
            "Can I test your annotation quality before starting a large project?",
        answer:
            "Yes. We can provide a sample annotation so you can evaluate our labeling quality, interpretation of your guidelines, communication process, and expected turnaround before moving into larger production volumes.",
    },
];

export default function AutonomousVehiclesPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        <div>

                            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                                <Car size={16} />
                                Autonomous Vehicle AI Data
                            </div>

                            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">

                                Training Data for

                                <span className="block text-cyan-400">
                                    Autonomous Vehicles
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

                                Build safer and smarter autonomous driving systems
                                with accurate 2D, 3D, LiDAR, video, lane, and
                                semantic segmentation annotation services.

                            </p>

                            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">

                                From object detection to complex road-scene
                                understanding, Annotexia helps transform raw
                                sensor data into structured datasets ready for
                                computer vision and machine learning.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
                                >
                                    Discuss Your Project
                                    <ArrowRight size={19} />
                                </Link>

                                <Link
                                    href="/services/lidar-annotation"
                                    className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
                                >
                                    Explore LiDAR Annotation
                                </Link>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl" />

                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">

                                <Image
                                    src="/images/industries/autonomous-vehicles.webp"
                                    alt="Autonomous vehicle computer vision and data annotation"
                                    width={900}
                                    height={650}
                                    priority
                                    className="h-[420px] w-full rounded-2xl object-cover"
                                />

                            </div>

                            <div className="absolute -bottom-7 -left-7 rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl">

                                <p className="text-sm text-cyan-400">
                                    Perception Data
                                </p>

                                <p className="mt-1 text-xl font-bold text-white">
                                    2D + 3D + LiDAR
                                </p>

                            </div>

                            <div className="absolute -right-5 -top-6 rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl">

                                <p className="text-sm text-green-400">
                                    Quality Focus
                                </p>

                                <p className="mt-1 text-xl font-bold text-white">
                                    Multi-Level QA
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                INTRO
            ===================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto max-w-4xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Why Training Data Matters
                        </span>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                            Autonomous Driving Starts With Better Data
                        </h2>

                        <p className="mt-7 text-lg leading-8 text-slate-600">
                            An autonomous vehicle constantly interprets its
                            surroundings through cameras, LiDAR, radar, and
                            other sensors. Every vehicle, pedestrian, lane,
                            traffic sign, and obstacle must be understood
                            correctly by the perception system.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            That understanding depends heavily on the quality
                            of the training data used to develop the model.
                            Accurate annotation helps AI systems learn how to
                            recognize and interpret complex real-world driving
                            environments.
                        </p>

                    </div>

                </div>

            </section>

            {/* =====================================================
                SERVICES
            ===================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-16 max-w-3xl">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Annotation Capabilities
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                            Autonomous Vehicle Annotation Services
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Build perception datasets across camera imagery,
                            video, and 3D sensor data with annotation workflows
                            tailored to your AI model requirements.
                        </p>

                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                        {annotationServices.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 transition group-hover:bg-cyan-600">
                                        <Icon
                                            size={27}
                                            className="text-cyan-600 group-hover:text-white"
                                        />
                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold text-slate-900">
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

            {/* =====================================================
                OBJECTS
            ===================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-cyan-600">
                                Object Classes
                            </span>

                            <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                                Annotate the Objects That Matter
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Autonomous driving systems need to understand
                                far more than vehicles. Our annotation workflows
                                can be customized around the objects and
                                environmental classes relevant to your model.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600 hover:text-cyan-700"
                            >
                                Discuss your annotation requirements
                                <ArrowRight size={18} />
                            </Link>

                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                            {objects.map((object) => (
                                <div
                                    key={object}
                                    className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-sm"
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="shrink-0 text-cyan-600"
                                    />

                                    <span className="text-sm font-medium text-slate-700">
                                        {object}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                USE CASES
            ===================================================== */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-400">
                            Applications
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Where Autonomous Vehicle Data Annotation Fits
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            High-quality labeled data supports perception,
                            mapping, safety, testing, and intelligent mobility
                            applications.
                        </p>

                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                        {useCases.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-2 hover:bg-white/[0.08]"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                                        <Icon
                                            className="text-cyan-400"
                                            size={27}
                                        />
                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-400">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =====================================================
                WORKFLOW
            ===================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Our Process
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                            From Raw Sensor Data to AI-Ready Dataset
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            A structured workflow helps maintain consistency
                            across large and complex autonomous vehicle
                            annotation projects.
                        </p>

                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {workflow.map((step) => (

                            <div
                                key={step.number}
                                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                            >

                                <span className="text-5xl font-black text-cyan-100">
                                    {step.number}
                                </span>

                                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    {step.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                QUALITY + SECURITY
            ===================================================== */}

            <section className="bg-gradient-to-b from-slate-50 to-white py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-10 lg:grid-cols-2">

                        <div className="rounded-3xl bg-white p-10 shadow-xl border border-slate-200">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                                <CheckCircle2 className="text-cyan-600" size={28} />
                            </div>

                            <h2 className="mt-7 text-3xl font-bold">
                                Quality-First Annotation
                            </h2>

                            <p className="mt-5 leading-8 text-slate-600">
                                Autonomous vehicle datasets often contain
                                difficult edge cases. Our quality workflow
                                focuses on annotation consistency, missing
                                objects, incorrect classifications, tracking
                                errors, and adherence to project-specific
                                guidelines.
                            </p>

                            <ul className="mt-7 space-y-4">

                                {[
                                    "Detailed annotation guidelines",
                                    "Annotator training",
                                    "Sample validation",
                                    "Multi-level quality review",
                                    "Edge-case handling",
                                    "Continuous feedback",
                                ].map((item) => (

                                    <li
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            size={19}
                                            className="text-cyan-600"
                                        />
                                        <span className="text-slate-700">
                                            {item}
                                        </span>
                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div className="rounded-3xl bg-slate-950 p-10 text-white shadow-xl">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
                                <ShieldCheck
                                    className="text-cyan-400"
                                    size={28}
                                />
                            </div>

                            <h2 className="mt-7 text-3xl font-bold">
                                Secure Data Handling
                            </h2>

                            <p className="mt-5 leading-8 text-slate-400">
                                Vehicle and sensor datasets can contain
                                sensitive operational information. We support
                                confidential workflows designed around your
                                project&apos;s security and access requirements.
                            </p>

                            <ul className="mt-7 space-y-4">

                                {[
                                    "NDA-supported projects",
                                    "Controlled project access",
                                    "Confidential annotation workflows",
                                    "Secure data transfer practices",
                                    "Project-specific permissions",
                                    "Controlled dataset delivery",
                                ].map((item) => (

                                    <li
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <ShieldCheck
                                            size={19}
                                            className="text-cyan-400"
                                        />
                                        <span className="text-slate-300">
                                            {item}
                                        </span>
                                    </li>

                                ))}

                            </ul>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                FORMATS
            ===================================================== */}

            <section className="py-20">

                <div className="mx-auto max-w-5xl px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-cyan-600">
                        Delivery
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Flexible Annotation Formats
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        We can work with your existing annotation environment
                        and deliver validated datasets according to your
                        downstream machine learning pipeline.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-3">

                        {formats.map((format) => (

                            <span
                                key={format}
                                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700"
                            >
                                {format}
                            </span>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                CTA
            ===================================================== */}

            <section className="px-6 py-20">

                <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 px-8 py-16 text-white lg:px-16">

                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-cyan-100">
                                Start Your Project
                            </span>

                            <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                                Building the Next Generation of Autonomous Mobility?
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-cyan-50">
                                Tell us about your sensor data, annotation
                                requirements, project volume, and timeline.
                                We&apos;ll help you plan the right annotation
                                workflow.
                            </p>

                        </div>

                        <div className="flex flex-wrap gap-4 lg:justify-end">

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-cyan-700 transition hover:bg-slate-100"
                            >
                                Get Free Consultation
                                <ArrowRight size={19} />
                            </Link>

                            <Link
                                href="/services"
                                className="rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                            >
                                View Services
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                FAQ
            ===================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-5xl px-6">

                    <div className="mb-14 text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            FAQ
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Autonomous Vehicle Annotation FAQs
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
                            Answers to common questions about our autonomous
                            vehicle and ADAS data annotation services.
                        </p>

                    </div>

                    <div className="space-y-5">

                        {faqs.map((faq) => (

                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-slate-900">
                                    {faq.question}

                                    <span className="text-2xl font-light text-cyan-600 transition group-open:rotate-45">
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
                RELATED INDUSTRIES
            ===================================================== */}

            <section className="py-20">

                <div className="mx-auto max-w-7xl px-6 text-center">

                    <h2 className="text-3xl font-bold">
                        Explore More AI Data Annotation Solutions
                    </h2>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <Link
                            href="/industries/computer-vision"
                            className="rounded-xl border border-slate-200 px-5 py-3 font-medium transition hover:border-cyan-500 hover:text-cyan-600"
                        >
                            Computer Vision
                        </Link>

                        <Link
                            href="/industries/drone-imagery"
                            className="rounded-xl border border-slate-200 px-5 py-3 font-medium transition hover:border-cyan-500 hover:text-cyan-600"
                        >
                            Drone & Aerial Imagery
                        </Link>

                        <Link
                            href="/industries/robotics"
                            className="rounded-xl border border-slate-200 px-5 py-3 font-medium transition hover:border-cyan-500 hover:text-cyan-600"
                        >
                            Robotics
                        </Link>

                        <Link
                            href="/services/lidar-annotation"
                            className="rounded-xl border border-slate-200 px-5 py-3 font-medium transition hover:border-cyan-500 hover:text-cyan-600"
                        >
                            LiDAR Annotation
                        </Link>

                        <Link
                            href="/services/video-annotation"
                            className="rounded-xl border border-slate-200 px-5 py-3 font-medium transition hover:border-cyan-500 hover:text-cyan-600"
                        >
                            Video Annotation
                        </Link>

                    </div>

                </div>

            </section>

            {/* =====================================================
                SEO CONTENT
            ===================================================== */}

            <section className="border-t border-slate-100 bg-white py-20">

                <div className="mx-auto max-w-5xl px-6">

                    <h2 className="text-3xl font-bold text-slate-900">
                        Autonomous Vehicle Data Annotation Services
                    </h2>

                    <p className="mt-6 leading-9 text-slate-600">
                        Annotexia provides autonomous vehicle data annotation
                        services for companies developing autonomous driving,
                        advanced driver assistance systems, vehicle perception,
                        robotics, and intelligent mobility solutions. Our
                        annotation capabilities cover camera imagery, video,
                        LiDAR point clouds, 2D and 3D bounding boxes, semantic
                        segmentation, lane detection, object tracking, and
                        other perception tasks.
                    </p>

                    <p className="mt-5 leading-9 text-slate-600">
                        Accurate training data is essential for developing
                        computer vision systems that operate in complex road
                        environments. Our annotation workflows can be
                        customized around your object classes, labeling
                        guidelines, edge cases, annotation platform, quality
                        requirements, and delivery format.
                    </p>

                    <p className="mt-5 leading-9 text-slate-600">
                        Whether you are developing an autonomous vehicle
                        perception model, ADAS application, HD mapping system,
                        or robotics platform, Annotexia can help transform raw
                        sensor data into structured training datasets designed
                        for machine learning development.
                    </p>

                    <p className="mt-5 leading-9 text-slate-600">
                        Contact Annotexia to discuss your autonomous vehicle
                        annotation requirements, request a sample annotation,
                        and plan a scalable data labeling workflow for your AI
                        project.
                    </p>

                </div>

            </section>

        </main>
    );
}