import Link from "next/link";

import {
    Image,
    FileText,
    Boxes,
    Brain,
    Bot,
    Users,
    Settings,
    Workflow,
} from "lucide-react";

const tools = [
    {
        name: "CVAT",
        icon: Image,
        description:
            "Open-source computer vision annotation platform supporting image annotation, video annotation, object tracking, semantic segmentation, and polygon labeling.",
    },
    {
        name: "Label Studio",
        icon: FileText,
        description:
            "Flexible annotation platform for image, text, audio, document, and multimodal AI datasets with customizable labeling workflows.",
    },
    {
        name: "Labelbox",
        icon: Boxes,
        description:
            "Enterprise-grade annotation platform designed for large-scale computer vision, NLP, geospatial, and multimodal machine learning projects.",
    },
    {
        name: "Roboflow",
        icon: Brain,
        description:
            "Computer vision platform supporting dataset management, annotation, augmentation, version control, and AI model deployment.",
    },
    {
        name: "SuperAnnotate",
        icon: Bot,
        description:
            "Enterprise AI annotation platform providing scalable image, video, LiDAR, and document annotation workflows.",
    },
    {
        name: "Supervisely",
        icon: Users,
        description:
            "AI-powered computer vision platform enabling collaborative image annotation, segmentation, object tracking, and dataset management.",
    },
    {
        name: "Custom Annotation Platforms",
        icon: Settings,
        description:
            "Our annotation specialists quickly adapt to proprietary annotation software and customer-specific workflows without disrupting project timelines.",
    },
    {
        name: "Workflow Integration",
        icon: Workflow,
        description:
            "Support for cloud storage, APIs, secure data transfer, enterprise pipelines, and custom workflow integration across annotation projects.",
    },
];
export default function SupportedTools() {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="scroll-reveal max-w-3xl mx-auto text-center">

                    <span className="uppercase tracking-[3px] text-blue-600 font-semibold">

                        Annotation Platforms

                    </span>

                    <h2 className="mt-5 text-4xl lg:text-5xl font-black text-slate-900 leading-tight">

                        Work with Your Preferred
                        <br />
                        Annotation Platform

                    </h2>

                    <p className="mt-8 text-lg text-slate-600 leading-8">

                        Annotexia works seamlessly with leading annotation
                        platforms used by AI companies worldwide. Whether your
                        project uses an enterprise annotation solution, an
                        open-source platform, or a proprietary in-house tool,
                        our annotation specialists quickly integrate into your
                        workflow without disrupting existing processes.

                    </p>

                </div>

                {/* Tools */}

                <div className="scroll-reveal grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

                    {tools.map((tool) => (

                        <div
                            key={tool.name}
                            className="bg-slate-50 rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >

                            <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto">

                                <tool.icon
                                    className="w-14 h-14 text-blue-600"
                                />

                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-slate-900 text-center">

                                {tool.name}

                            </h3>

                            <p className="mt-5 text-slate-600 leading-8 text-center">

                                {tool.description}

                            </p>

                        </div>

                    ))}

                </div>
                {/* Enterprise Integration */}

                <div className="scroll-reveal mt-24">

                    <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">

                        <div className="max-w-5xl mx-auto px-10 py-20 text-center">

                            <span className="uppercase tracking-[3px] text-blue-400 font-semibold">

                                Enterprise Workflow Integration

                            </span>

                            <h3 className="mt-5 text-3xl lg:text-4xl font-black text-white">

                                Already Using an Annotation Platform?
                                We Can Work With It.

                            </h3>

                            <p className="mt-8 text-lg leading-8 text-slate-300 max-w-3xl mx-auto">

                                Our annotation specialists adapt quickly to your
                                existing annotation environment, whether you're using
                                enterprise platforms, open-source tools, or custom
                                in-house software. We integrate seamlessly into your
                                workflows, follow project-specific guidelines, and
                                deliver consistently high-quality AI training data
                                without disrupting your development process.

                            </p>

                            {/* Feature Highlights */}

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

                                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                                    <h4 className="text-white font-bold">

                                        Enterprise Ready

                                    </h4>

                                    <p className="mt-3 text-slate-300 text-sm leading-7">

                                        Support for enterprise annotation platforms and
                                        secure collaboration.

                                    </p>

                                </div>

                                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                                    <h4 className="text-white font-bold">

                                        Custom Workflows

                                    </h4>

                                    <p className="mt-3 text-slate-300 text-sm leading-7">

                                        Flexible annotation processes designed around
                                        your internal guidelines.

                                    </p>

                                </div>

                                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                                    <h4 className="text-white font-bold">

                                        API Integration

                                    </h4>

                                    <p className="mt-3 text-slate-300 text-sm leading-7">

                                        Compatible with cloud storage, APIs,
                                        and enterprise data pipelines.

                                    </p>

                                </div>

                                <div className="bg-white/10 rounded-2xl p-6 border border-white/10">

                                    <h4 className="text-white font-bold">

                                        Scalable Teams

                                    </h4>

                                    <p className="mt-3 text-slate-300 text-sm leading-7">

                                        Dedicated annotation specialists that scale with
                                        your project requirements.

                                    </p>

                                </div>

                            </div>

                            {/* CTA */}

                            <div className="flex flex-wrap justify-center gap-5 mt-14">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 transition"
                                >
                                    Discuss Your Workflow
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center rounded-xl border border-white px-8 py-4 font-semibold text-white hover:bg-white hover:text-slate-900 transition"
                                >
                                    View Annotation Services
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}