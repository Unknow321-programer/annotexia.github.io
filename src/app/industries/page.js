import Link from "next/link";

export const metadata = {
    title: "Industries We Serve",
    description:
        "Explore industries served by Annotexia including Healthcare AI, Sports Analytics, Computer Vision, and Autonomous Vehicles.",
};

const industries = [
    {
        title: "Sports Analytics",
        href: "/industries/sports-analytics",
        description:
            "Video annotation, player tracking, ball tracking, and event detection.",
    },
    {
        title: "Healthcare AI",
        href: "/industries/healthcare-ai",
        description:
            "Medical image annotation and healthcare AI training datasets.",
    },
    {
        title: "Autonomous Vehicles",
        href: "/industries/autonomous-vehicles",
        description:
            "Object detection, LiDAR labeling, and autonomous driving datasets.",
    },
    {
        title: "Computer Vision",
        href: "/industries/computer-vision",
        description:
            "Image annotation and segmentation for computer vision models.",
    },
    {
        title: "Agriculture & Farming",
        href: "/industries/farming",
        description:
            "Crop monitoring, drone image annotation, disease detection, and precision agriculture datasets.",
    },
];

export default function IndustriesPage() {
    return (
        <main className="min-h-screen">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">

                    <h1 className="text-5xl font-bold text-center mb-6">
                        Industries We Serve
                    </h1>

                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                        Annotexia delivers AI training data and annotation services
                        across multiple industries.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">

                        {industries.map((industry) => (
                            <Link
                                key={industry.title}
                                href={industry.href}
                                className="border rounded-xl p-8 hover:shadow-lg transition"
                            >
                                <h2 className="text-2xl font-semibold mb-4">
                                    {industry.title}
                                </h2>

                                <p className="text-gray-600">
                                    {industry.description}
                                </p>
                            </Link>
                        ))}

                    </div>

                </div>
            </section>
        </main>
    );
}