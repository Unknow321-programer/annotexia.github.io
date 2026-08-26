import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Boxes,
    Car,
    Map,
    ScanLine,
    ShieldCheck,
    Target,
    Layers3,
    Database,
    Factory,
    Plane,
} from "lucide-react";

export const metadata = {
    title:
        "LiDAR Annotation Services | 3D Point Cloud Labeling for AI | Annotexia",

    description:
        "Annotexia provides professional LiDAR annotation and 3D point cloud labeling services for autonomous vehicles, robotics, mapping, drones, smart cities, and industrial AI.",

    keywords: [
        "LiDAR annotation services",
        "LiDAR labeling services",
        "3D point cloud annotation",
        "point cloud labeling",
        "3D bounding box annotation",
        "LiDAR data annotation",
        "autonomous vehicle LiDAR annotation",
        "3D point cloud labeling",
        "sensor fusion annotation",
        "robotics LiDAR annotation",
        "drone LiDAR annotation",
        "AI training data",
    ],

    alternates: {
        canonical: "/services/lidar-annotation",
    },

    openGraph: {
        title:
            "LiDAR Annotation Services | 3D Point Cloud Labeling | Annotexia",
        description:
            "Accurate LiDAR annotation and 3D point cloud labeling for autonomous vehicles, robotics, mapping, drones, and industrial AI.",
        url: "/services/lidar-annotation",
        siteName: "Annotexia",
        type: "website",
        images: [
            {
                url: "/images/services/lidar-annotation.webp",
                width: 1200,
                height: 630,
                alt: "LiDAR annotation and 3D point cloud labeling services",
            },
        ],
    },
};

const annotationServices = [
    {
        title: "3D Bounding Boxes",
        description:
            "Precisely identify and label vehicles, pedestrians, cyclists, buildings, machinery, and other objects within 3D point clouds.",
        icon: Boxes,
    },
    {
        title: "Point Cloud Segmentation",
        description:
            "Classify individual points or regions to help AI systems understand roads, vehicles, vegetation, buildings, infrastructure, and environments.",
        icon: Layers3,
    },
    {
        title: "Cuboid Annotation",
        description:
            "Create accurate 3D cuboids around objects while capturing their position, dimensions, orientation, and spatial relationships.",
        icon: ScanLine,
    },
    {
        title: "Semantic Segmentation",
        description:
            "Assign meaningful classes to point cloud data for scene understanding, autonomous navigation, robotics, and mapping.",
        icon: Target,
    },
    {
        title: "Sensor Fusion",
        description:
            "Combine LiDAR with camera and other sensor data to create richer multimodal datasets for advanced AI systems.",
        icon: Database,
    },
    {
        title: "3D Object Tracking",
        description:
            "Track objects across sequential LiDAR frames to support perception, motion prediction, and autonomous navigation models.",
        icon: Map,
    },
];

const industries = [
    {
        title: "Autonomous Vehicles",
        description:
            "Train perception systems to detect vehicles, pedestrians, cyclists, traffic infrastructure, and road environments.",
        icon: Car,
    },
    {
        title: "Robotics",
        description:
            "Build spatially aware robotic systems using accurately labeled 3D environments and objects.",
        icon: Boxes,
    },
    {
        title: "Mapping & Geospatial",
        description:
            "Create structured point cloud datasets for mapping, surveying, infrastructure analysis, and digital twins.",
        icon: Map,
    },
    {
        title: "Drone & Aerial AI",
        description:
            "Annotate aerial LiDAR datasets for surveying, construction, agriculture, inspection, and remote sensing.",
        icon: Plane,
    },
    {
        title: "Manufacturing",
        description:
            "Support industrial automation, inspection, robotics, and spatial quality-control applications.",
        icon: Factory,
    },
    {
        title: "Smart Cities",
        description:
            "Develop AI datasets for urban mapping, traffic monitoring, infrastructure analysis, and intelligent transportation.",
        icon: ScanLine,
    },
];

const workflow = [
    {
        number: "01",
        title: "Project Understanding",
        description:
            "We review your LiDAR data, object classes, annotation requirements, coordinate systems, and expected output format.",
    },
    {
        number: "02",
        title: "Annotation Guidelines",
        description:
            "Detailed labeling guidelines are prepared to establish consistent rules for object identification, classification, and edge cases.",
    },
    {
        number: "03",
        title: "3D Annotation",
        description:
            "Trained annotation specialists label your point clouds using the required 3D annotation methodology.",
    },
    {
        number: "04",
        title: "Quality Assurance",
        description:
            "Annotations are reviewed through structured QA checks to identify missing objects, incorrect classes, alignment issues, and inconsistencies.",
    },
    {
        number: "05",
        title: "Validation & Delivery",
        description:
            "Validated datasets are exported in your required format and delivered according to your project specifications.",
    },
];

const formats = [
    "Point Cloud",
    "LAS",
    "LAZ",
    "PCD",
    "PLY",
    "JSON",
    "Custom Formats",
];

export default function LidarAnnotationPage() {
    return (
        <main className="bg-white">

            {/* ================= HERO ================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>

                            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-7">
                                3D AI Training Data Services
                            </span>

                            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white">

                                LiDAR Annotation

                                <span className="block text-cyan-400">
                                    For Smarter 3D AI
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-8 text-slate-300">

                                Transform raw LiDAR point clouds into structured,
                                machine-learning-ready datasets with accurate 3D
                                bounding boxes, segmentation, object tracking,
                                and sensor fusion annotation.

                            </p>

                            <p className="mt-5 max-w-2xl text-slate-400 leading-7">

                                From autonomous vehicles and robotics to mapping,
                                drones, and industrial AI, Annotexia helps teams
                                turn complex 3D sensor data into reliable training
                                data.

                            </p>

                            <div className="flex flex-wrap gap-4 mt-10">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
                                >
                                    Get a Free Sample

                                    <ArrowRight className="ml-2" size={20} />
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
                                >
                                    Explore Services
                                </Link>

                            </div>

                            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 text-sm text-slate-400">

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    3D Object Annotation
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Point Cloud Segmentation
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="text-cyan-400"
                                    />
                                    Quality-Assured Data
                                </div>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute inset-0 rounded-3xl bg-cyan-500/20 blur-3xl" />

                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-2xl">

                                <Image
                                    src="/images/services/lidar-annotation.webp"
                                    alt="LiDAR point cloud annotation and 3D bounding box labeling"
                                    width={900}
                                    height={650}
                                    priority
                                    className="h-[420px] w-full rounded-2xl object-cover"
                                />

                            </div>

                            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl">

                                <p className="text-sm text-cyan-400">
                                    3D Data
                                </p>

                                <p className="text-xl font-bold text-white">
                                    Point Cloud Annotation
                                </p>

                            </div>

                            <div className="absolute -right-5 top-10 hidden rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl lg:block">

                                <p className="text-sm text-green-400">
                                    AI Training
                                </p>

                                <p className="text-lg font-bold text-white">
                                    Structured Datasets
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= INTRODUCTION ================= */}

            <section className="py-24">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                        Why LiDAR Annotation Matters
                    </span>

                    <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
                        Turning 3D Sensor Data Into AI Intelligence
                    </h2>

                    <p className="mt-7 text-lg leading-9 text-slate-600">

                        LiDAR sensors generate highly detailed 3D representations
                        of the physical world. But raw point clouds are difficult
                        for machine learning systems to interpret without structured
                        labels.

                    </p>

                    <p className="mt-5 text-lg leading-9 text-slate-600">

                        LiDAR annotation adds meaning to this data by identifying
                        objects, surfaces, movement, and spatial relationships.
                        These labeled datasets help AI systems understand their
                        surroundings and make better predictions.

                    </p>

                </div>

            </section>


            {/* ================= SERVICES ================= */}

            <section className="bg-slate-50 py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-3xl mb-16">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                            LiDAR Annotation Services
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
                            Complete 3D Point Cloud Annotation
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Our annotation workflows can be adapted to different
                            LiDAR sensors, environments, object classes, and
                            machine learning requirements.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {annotationServices.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl"
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


            {/* ================= INDUSTRIES ================= */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                            Applications
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
                            Where LiDAR Annotation Powers AI
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Accurate 3D datasets support AI applications across
                            transportation, robotics, mapping, infrastructure,
                            and industrial environments.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {industries.map((industry) => {

                            const Icon = industry.icon;

                            return (
                                <div
                                    key={industry.title}
                                    className="rounded-3xl bg-slate-50 border border-slate-200 p-8 hover:shadow-xl transition"
                                >

                                    <Icon
                                        size={34}
                                        className="text-cyan-600"
                                    />

                                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                        {industry.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {industry.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* ================= WORKFLOW ================= */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-3xl mb-16">

                        <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">
                            Our Workflow
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                            A Structured Approach to 3D Data Quality
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            Reliable AI starts with reliable training data.
                            Our workflow is designed to maintain annotation
                            consistency from project kickoff through final delivery.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

                        {workflow.map((step) => (

                            <div
                                key={step.number}
                                className="rounded-3xl border border-white/10 bg-white/5 p-7"
                            >

                                <span className="text-4xl font-extrabold text-cyan-400">
                                    {step.number}
                                </span>

                                <h3 className="mt-6 text-xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-400">
                                    {step.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= QUALITY ================= */}

            <section className="py-24 bg-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                                Quality & Security
                            </span>

                            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
                                Built for Reliable AI Training Data
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                LiDAR datasets can contain millions of points
                                and complex 3D scenes. Small inconsistencies in
                                labeling can affect downstream model performance.
                            </p>

                            <div className="mt-8 space-y-5">

                                {[
                                    "Project-specific annotation guidelines",
                                    "Multi-level quality review",
                                    "Object classification consistency",
                                    "Missing and incorrect annotation checks",
                                    "Secure and confidential project workflows",
                                    "Custom delivery formats",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-start gap-3"
                                    >

                                        <CheckCircle2
                                            className="mt-1 shrink-0 text-cyan-600"
                                            size={21}
                                        />

                                        <span className="text-slate-700">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        <div className="rounded-3xl bg-white border border-slate-200 p-10 shadow-xl">

                            <div className="flex items-center gap-4">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">

                                    <ShieldCheck
                                        className="text-cyan-600"
                                        size={30}
                                    />

                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">
                                        Secure Data Handling
                                    </h3>

                                    <p className="text-slate-500">
                                        Confidential annotation workflows
                                    </p>
                                </div>

                            </div>

                            <div className="mt-8 space-y-5">

                                <div className="rounded-2xl bg-slate-50 p-5">
                                    <p className="font-semibold text-slate-900">
                                        NDA Support
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Confidentiality requirements can be
                                        incorporated into project workflows.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-5">
                                    <p className="font-semibold text-slate-900">
                                        Controlled Access
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Project data access can be restricted
                                        to authorized annotation teams.
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-slate-50 p-5">
                                    <p className="font-semibold text-slate-900">
                                        Quality Validation
                                    </p>

                                    <p className="mt-2 text-sm leading-6 text-slate-600">
                                        Structured review processes help identify
                                        annotation errors before delivery.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FORMATS ================= */}

            <section className="py-20">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                        Dataset Formats
                    </span>

                    <h2 className="mt-4 text-4xl font-bold text-slate-900">
                        Flexible Data Delivery
                    </h2>

                    <p className="mt-5 text-lg text-slate-600">
                        We can work with your preferred point cloud and
                        annotation output requirements.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        {formats.map((format) => (

                            <span
                                key={format}
                                className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 font-medium text-slate-700"
                            >
                                {format}
                            </span>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section className="py-24 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700">

                <div className="max-w-5xl mx-auto px-6 text-center text-white">

                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Have a LiDAR Dataset?
                    </h2>

                    <p className="mt-6 text-lg lg:text-xl leading-8 text-cyan-50 max-w-3xl mx-auto">

                        Share a small sample of your LiDAR data and project
                        requirements. Our team can help you determine the
                        right annotation approach for your AI application.

                    </p>

                    <div className="mt-10 flex justify-center flex-wrap gap-4">

                        <Link
                            href="/contact"
                            className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-slate-100"
                        >
                            Get Free Sample Annotation

                            <ArrowRight
                                className="ml-2"
                                size={20}
                            />
                        </Link>

                        <Link
                            href="/industries/autonomous-vehicles"
                            className="inline-flex items-center rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
                        >
                            Explore Autonomous Vehicle AI
                        </Link>

                    </div>

                </div>

            </section>


            {/* ================= SEO CONTENT ================= */}

            <section className="py-24 bg-white">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        Professional LiDAR Annotation Services
                    </h2>

                    <div className="mt-8 space-y-6 text-slate-600 leading-8">

                        <p>
                            Annotexia provides professional LiDAR annotation
                            and 3D point cloud labeling services for organizations
                            developing artificial intelligence, computer vision,
                            autonomous systems, robotics, mapping, and industrial
                            applications.
                        </p>

                        <p>
                            Our LiDAR annotation workflows support 3D bounding
                            boxes, cuboid annotation, semantic segmentation,
                            point cloud classification, object tracking, and
                            sensor fusion. These datasets can help machine
                            learning models understand complex three-dimensional
                            environments and objects.
                        </p>

                        <p>
                            LiDAR data annotation is particularly important for
                            autonomous vehicles and advanced driver assistance
                            systems, where AI models need to identify vehicles,
                            pedestrians, cyclists, road infrastructure, and
                            environmental objects from 3D sensor data.
                        </p>

                        <p>
                            We also support LiDAR applications across robotics,
                            drone mapping, surveying, smart cities, infrastructure
                            inspection, manufacturing, and other computer vision
                            use cases.
                        </p>

                        <p>
                            If you are looking for a LiDAR annotation partner,
                            contact Annotexia to discuss your dataset, annotation
                            requirements, quality expectations, and delivery
                            format.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="bg-slate-950 py-20 text-white">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <h2 className="text-4xl lg:text-5xl font-bold">
                        Build Better 3D AI With Better Data
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400 max-w-3xl mx-auto">
                        From raw point clouds to production-ready training
                        datasets, Annotexia helps AI teams build reliable
                        3D perception systems.
                    </p>

                    <Link
                        href="/contact"
                        className="inline-flex items-center mt-9 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-white transition hover:bg-cyan-600"
                    >
                        Talk to a LiDAR Annotation Expert

                        <ArrowRight
                            className="ml-2"
                            size={20}
                        />
                    </Link>

                </div>

            </section>

        </main>
    );
}