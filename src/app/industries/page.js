import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    BrainCircuit,
    Car,
    HeartPulse,
    Trophy,
    Users,
    ShieldCheck,

} from "lucide-react";

export const metadata = {
    title:
        "Industries We Serve | AI Data Annotation Services | Annotexia",
    description:
        "Annotexia provides professional data annotation services for Healthcare AI, Sports Analytics, Autonomous Vehicles, Agriculture, Computer Vision, Retail, Drone Imagery, and Manufacturing AI.",
    keywords: [
        "AI annotation services",
        "image annotation",
        "video annotation",
        "healthcare AI annotation",
        "sports analytics annotation",
        "autonomous vehicle annotation",
        "computer vision datasets",
        "agriculture annotation",
        "retail AI datasets",
        "drone image annotation",
    ],
};

const industries = [
    {
        title: "Sports Analytics",
        href: "/industries/sports-analytics",
        image:
            "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=80",
        alt: "AI sports analytics player tracking and video annotation",
        icon: Trophy,
        description:
            "Transform raw sports footage into valuable AI training datasets with professional player tracking, ball tracking, pose estimation, and event annotation.",
        features: [
            "Player Tracking",
            "Ball Tracking",
            "Pose Estimation",
            "Event Detection",
        ],
    },

    {
        title: "Healthcare AI",
        href: "/industries/healthcare-ai",
        image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
        alt: "Medical image annotation for healthcare artificial intelligence",
        icon: HeartPulse,
        description:
            "Support healthcare innovation with high-quality medical image annotation, segmentation, radiology labeling, pathology datasets, and diagnostic AI training.",
        features: [
            "Medical Imaging",
            "Segmentation",
            "Radiology",
            "Pathology",
        ],
    },

    {
        title: "Autonomous Vehicles",
        href: "/industries/autonomous-vehicles",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
        alt: "Autonomous vehicle lidar and image annotation datasets",
        icon: Car,
        description:
            "Build safer autonomous driving systems using accurate LiDAR annotation, lane detection, object tracking, semantic segmentation, and sensor fusion datasets.",
        features: [
            "LiDAR Annotation",
            "Lane Detection",
            "3D Bounding Boxes",
            "Semantic Segmentation",
        ],
    },

    {
        title: "Computer Vision",
        href: "/industries/computer-vision",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
        alt: "Computer vision image annotation services for artificial intelligence",
        icon: BrainCircuit,
        description:
            "Power computer vision applications with accurate image annotation, OCR labeling, keypoint annotation, segmentation, and object detection datasets.",
        features: [
            "Image Annotation",
            "OCR",
            "Object Detection",
            "Segmentation",
        ],
    },

    {
        title: "Agriculture",
        href: "/industries/agriculture",
        image:
            "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1400&q=80",
        alt: "Agriculture AI crop monitoring drone image annotation",
        description:
            "Create AI datasets for crop monitoring, disease detection, weed identification, drone imagery, and precision agriculture.",
        features: [
            "Crop Monitoring",
            "Plant Disease",
            "Drone Imagery",
            "Precision Farming",
        ],
    },

    {
        title: "Drone & Aerial Imagery",
        href: "/industries/drone-imagery",
        image:
            "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=80",
        alt: "Drone aerial image annotation and mapping datasets",
        description:
            "Generate high-quality aerial datasets for mapping, surveying, construction inspection, and remote sensing.",
        features: [
            "Aerial Mapping",
            "Infrastructure",
            "Surveying",
            "Remote Sensing",
        ],
    },

    {
        title: "Retail & E-commerce",
        href: "/industries/retail-ecommerce",
        image:
            "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1400&q=80",
        alt: "Retail shelf monitoring and product annotation datasets",
        description:
            "Improve retail AI with product recognition, shelf monitoring, barcode annotation, inventory detection, and visual search datasets.",
        features: [
            "Shelf Monitoring",
            "Barcode OCR",
            "Inventory",
            "Visual Search",
        ],
    },

    {
        title: "Manufacturing & Industrial AI",
        href: "/industries/industrial-ai",
        image:
            "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80",
        alt: "Manufacturing defect detection and industrial AI datasets",
        description:
            "Enable industrial automation with defect detection, quality inspection, robotics vision, and production line monitoring datasets.",
        features: [
            "Defect Detection",
            "Quality Inspection",
            "Industrial Robotics",
            "Automation",
        ],
    },
];

export default function IndustriesPage() {

    const features = [

        {
            title: "High Accuracy",
            description: "Multi-level QA process delivering consistent annotation quality.",
            icon: CheckCircle2,
        },

        {
            title: "Scalable Team",
            description: "Handle thousands to millions of images without compromising quality.",
            icon: Users,
        },

        {
            title: "Secure Workflow",
            description: "NDA, encrypted storage and confidential project management.",
            icon: ShieldCheck,
        },

        {
            title: "AI Experts",
            description: "Experienced annotators for Healthcare, Sports, OCR, Robotics and Computer Vision.",
            icon: BrainCircuit,
        },

    ];

    return (
        <main className="bg-white">

            {/* Hero */}

            {/* ================= HERO SECTION ================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950">

                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600/20 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* LEFT */}

                        <div>

                            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mb-8">
                                Trusted AI Data Annotation Partner
                            </span>

                            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight">

                                AI Training Data

                                <span className="block text-blue-400">

                                    Across Every Industry

                                </span>

                            </h1>

                            <p className="text-lg text-slate-300 mt-8 leading-8 max-w-2xl">

                                Every industry has unique AI challenges.

                                At Annotexia, we deliver accurate image, video,
                                text, audio, and LiDAR annotation services that help
                                organizations build reliable machine learning models
                                faster.

                            </p>

                            <div className="flex flex-wrap gap-4 mt-10">

                                <Link
                                    href="/contact"
                                    className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-white shadow-xl"
                                >
                                    Start Your Project
                                </Link>

                                <Link
                                    href="/services"
                                    className="px-8 py-4 rounded-xl border border-white/20 hover:border-blue-400 hover:bg-white/5 transition text-white"
                                >
                                    Explore Services
                                </Link>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            {/* Main Card */}

                            <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">

                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                                    alt="AI data annotation across industries including healthcare, autonomous vehicles, agriculture and retail"
                                    className="rounded-2xl w-full h-[420px] object-cover"
                                />

                            </div>

                            {/* Floating Cards */}

                            <div className="absolute -top-8 -left-8 bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 shadow-2xl animate-bounce">

                                <p className="text-blue-400 text-sm font-semibold">

                                    Computer Vision

                                </p>

                                <p className="text-white text-xl font-bold">

                                    Image Annotation

                                </p>

                            </div>

                            <div className="absolute bottom-10 -right-10 bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 shadow-2xl animate-pulse">

                                <p className="text-green-400 text-sm">

                                    AI Accuracy

                                </p>

                                <p className="text-white text-xl font-bold">

                                    99% QA Workflow

                                </p>

                            </div>

                            <div className="absolute top-1/2 -right-14 bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 shadow-xl hidden xl:block">

                                <p className="text-cyan-400 text-sm">

                                    Industries

                                </p>

                                <p className="text-white font-bold text-lg">

                                    8+ Domains

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Industries */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-10">

                        {industries.map((industry, index) => (

                            <Link
                                key={industry.title}
                                href={industry.href}
                                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
                            >

                                <div className="overflow-hidden">

                                    <Image
                                        src={industry.image}
                                        alt={industry.alt}
                                        width={900}
                                        height={600}
                                        className="w-full h-72 object-cover transition duration-700 group-hover:scale-110"
                                    />

                                </div>

                                <div className="p-8">

                                    <h2 className="text-3xl font-bold mb-5 text-slate-900">
                                        {industry.title}
                                    </h2>

                                    <p className="text-slate-600 leading-8 mb-8">
                                        {industry.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-4 mb-8">

                                        {industry.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle2
                                                    size={20}
                                                    className="text-blue-600"
                                                />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center font-semibold text-blue-600 group-hover:translate-x-2 transition-all">

                                        Learn More

                                        <ArrowRight
                                            size={20}
                                            className="ml-2"
                                        />

                                    </div>

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>

            {/* Why Choose Annotexia */}

            <section className="bg-slate-50 py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <h2 className="text-4xl font-bold text-slate-900">
                            Why Companies Choose Annotexia
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-8">
                            Whether you're training a computer vision model, developing
                            autonomous systems, or building the next generation of AI
                            products, our experienced annotation specialists deliver
                            production-ready datasets with exceptional quality.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {features.map((item) => (

                            <div
                                className="group relative rounded-3xl bg-white p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
                                key={item.title}
                            >

                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition duration-500" />

                                <div className="relative z-10">

                                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-white transition">

                                        <item.icon className="text-blue-600" />

                                    </div>

                                    <h3 className="mt-8 text-2xl font-bold group-hover:text-white transition">

                                        {item.title}

                                    </h3>

                                    <p className="mt-4 text-gray-600 leading-8 group-hover:text-blue-100 transition">

                                        {item.description}

                                    </p>

                                    <div className="mt-8 flex items-center text-blue-600 group-hover:text-white font-semibold">

                                        Learn More

                                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition" />

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="py-24 bg-gradient-to-r from-blue-700 to-indigo-700">

                <div className="max-w-5xl mx-auto px-6 text-center text-white">

                    <h2 className="text-5xl font-bold mb-8">
                        Ready to Build Better AI?
                    </h2>

                    <p className="text-xl leading-9 opacity-95 max-w-3xl mx-auto">
                        High-quality datasets are the foundation of every successful
                        artificial intelligence project. Let Annotexia become your
                        trusted annotation partner and accelerate your AI development
                        with accurate, scalable, and secure data annotation services.
                    </p>

                    <div className="mt-12 flex justify-center gap-6 flex-wrap">

                        <Link
                            href="/contact"
                            className="rounded-xl bg-white text-blue-700 px-8 py-4 font-bold hover:bg-slate-100 transition"
                        >
                            Get Free Consultation
                        </Link>

                        <Link
                            href="/services"
                            className="rounded-xl border border-white px-8 py-4 font-bold hover:bg-white hover:text-blue-700 transition"
                        >
                            View Services
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}