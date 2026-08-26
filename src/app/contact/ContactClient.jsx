"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    Clock3,
    Users,
    Target,
    FileCheck2,
    MessageSquareText,
    Sparkles,
} from "lucide-react";
import { toast } from "react-toastify";

export default function ContactClient() {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: "Image Annotation",
        projectSize: "Less than 5,000",
        timeline: "Not sure",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const updateField = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [field]: "",
        }));
    };

    // ================= VALIDATION =================

    const validate = () => {
        const newErrors = {};

        const freeEmailProviders = [
            "gmail.com",
            "yahoo.com",
            "outlook.com",
            "hotmail.com",
            "live.com",
            "icloud.com",
            "proton.me",
            "protonmail.com",
            "aol.com",
            "yandex.com",
        ];

        if (!form.name.trim()) {
            newErrors.name = "Full name is required.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Business email is required.";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
        ) {
            newErrors.email = "Please enter a valid email address.";
        } else {
            const domain = form.email.split("@")[1].toLowerCase();

            if (freeEmailProviders.includes(domain)) {
                newErrors.email =
                    "Please use your company email address.";
            }
        }

        if (!form.company.trim()) {
            newErrors.company = "Company name is required.";
        }

        if (!form.service) {
            newErrors.service = "Please select a service.";
        }

        if (!form.message.trim()) {
            newErrors.message =
                "Please tell us briefly about your project.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // ================= SUBMIT =================

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            toast.error("Please fix the highlighted fields.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.error || "Unable to send your request."
                );
            }

            toast.success(
                "Thanks! Your project request has been received."
            );

            setForm({
                name: "",
                email: "",
                company: "",
                service: "Image Annotation",
                projectSize: "Less than 5,000",
                timeline: "Not sure",
                message: "",
            });

            setErrors({});
        } catch (error) {
            toast.error(
                error.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const benefits = [
        {
            icon: Target,
            title: "Quality-Focused Annotation",
            description:
                "Clear guidelines, trained annotators, and structured QA help maintain consistent datasets.",
        },
        {
            icon: ShieldCheck,
            title: "Secure Workflows",
            description:
                "Confidential project handling with NDA support and controlled access to project data.",
        },
        {
            icon: Users,
            title: "Flexible Scaling",
            description:
                "Scale annotation capacity according to your dataset size, timeline, and project complexity.",
        },
        {
            icon: Clock3,
            title: "Responsive Communication",
            description:
                "Stay informed through clear communication, progress updates, and a dedicated point of contact.",
        },
        {
            icon: FileCheck2,
            title: "Multiple Output Formats",
            description:
                "Support for common annotation formats and custom delivery requirements.",
        },
        {
            icon: MessageSquareText,
            title: "Project-Specific Guidelines",
            description:
                "We adapt workflows to your classes, edge cases, instructions, and quality requirements.",
        },
    ];

    const process = [
        {
            number: "01",
            title: "Share Your Requirements",
            description:
                "Tell us about your dataset, annotation type, volume, timeline, and expected output.",
        },
        {
            number: "02",
            title: "Review & Sample",
            description:
                "We review your requirements and can provide a sample annotation for evaluation.",
        },
        {
            number: "03",
            title: "Define the Workflow",
            description:
                "We finalize annotation guidelines, quality checks, delivery format, and project scope.",
        },
        {
            number: "04",
            title: "Annotate & Deliver",
            description:
                "Our team works through the dataset with ongoing quality checks and structured delivery.",
        },
    ];

    const faqs = [
        {
            q: "Can I test your annotation quality before starting a large project?",
            a: "Yes. We can provide a free sample annotation so you can evaluate quality, consistency, communication, and workflow before committing to a larger project.",
        },
        {
            q: "Do you sign NDAs?",
            a: "Yes. We can sign an NDA before accessing confidential project information or datasets, subject to the agreed terms.",
        },
        {
            q: "What types of data can you annotate?",
            a: "We support image, video, text, audio, OCR, LiDAR, and custom AI training data workflows.",
        },
        {
            q: "Which industries do you support?",
            a: "Our services can support Computer Vision, Healthcare AI, Sports Analytics, Autonomous Vehicles, Agriculture, Retail, Robotics, Manufacturing, Drone Imagery, and other AI applications.",
        },
        {
            q: "Can you handle large annotation projects?",
            a: "Yes. We can scale project capacity based on dataset volume, complexity, annotation requirements, and delivery timelines.",
        },
        {
            q: "Which annotation formats do you support?",
            a: "Depending on the project, we can work with formats such as COCO, YOLO, Pascal VOC, JSON, XML, CSV, and tool-specific or custom formats.",
        },
    ];

    return (
        <main className="min-h-screen bg-white">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden bg-slate-950">
                <div className="absolute inset-0">
                    <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
                    <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-28">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-7">
                                <Sparkles size={16} />
                                AI Data Annotation Services
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.08] text-white">
                                Tell Us About Your
                                <span className="block text-cyan-400 mt-2">
                                    AI Project
                                </span>
                            </h1>

                            <p className="mt-7 max-w-xl text-lg lg:text-xl leading-8 text-slate-300">
                                Whether you need image annotation, video
                                labeling, OCR, LiDAR, NLP, or custom AI
                                training data, our team can help you define
                                the right annotation workflow.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-4">

                                <a
                                    href="#contact-form"
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
                                >
                                    Request a Free Quote
                                    <ArrowRight size={18} />
                                </a>

                                <a
                                    href="#process"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
                                >
                                    See How It Works
                                </a>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Free sample available
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    NDA support
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Flexible project sizes
                                </span>
                            </div>
                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute inset-0 rounded-3xl bg-cyan-400/20 blur-3xl" />

                            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">

                                <Image
                                    src="/images/contact/contact-banner.webp"
                                    alt="AI data annotation specialists working on machine learning projects"
                                    width={700}
                                    height={500}
                                    priority
                                    className="w-full rounded-2xl object-cover"
                                />

                            </div>

                            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl backdrop-blur">

                                <p className="text-sm text-cyan-400">
                                    Start with confidence
                                </p>

                                <p className="mt-1 text-lg font-bold text-white">
                                    Evaluate our work first
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                TRUST STRIP
            ====================================================== */}

            <section className="relative z-10 -mt-8 px-6">

                <div className="max-w-6xl mx-auto rounded-2xl border border-slate-200 bg-white shadow-xl">

                    <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">

                        <div className="p-7 text-center">
                            <p className="text-2xl font-bold text-slate-900">
                                Free Sample
                            </p>
                            <p className="mt-2 text-sm text-slate-600">
                                Evaluate annotation quality before scaling.
                            </p>
                        </div>

                        <div className="p-7 text-center">
                            <p className="text-2xl font-bold text-slate-900">
                                NDA Support
                            </p>
                            <p className="mt-2 text-sm text-slate-600">
                                Protect confidential project information.
                            </p>
                        </div>

                        <div className="p-7 text-center">
                            <p className="text-2xl font-bold text-slate-900">
                                Flexible Scale
                            </p>
                            <p className="mt-2 text-sm text-slate-600">
                                From pilot datasets to larger projects.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CONTACT FORM
            ====================================================== */}

            <section
                id="contact-form"
                className="py-24"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* FORM */}

                        <div className="lg:col-span-2">

                            <div className="mb-10">

                                <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                                    Request a Consultation
                                </p>

                                <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900">
                                    Let&apos;s discuss your dataset
                                </h2>

                                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                                    Share a few details about your project.
                                    You don&apos;t need to have every requirement
                                    finalized—we can help you work through it.
                                </p>

                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="rounded-3xl border border-slate-200 bg-white p-7 md:p-10 shadow-lg"
                            >

                                {/* NAME + EMAIL */}

                                <div className="grid md:grid-cols-2 gap-6">

                                    <div>
                                        <label className="mb-2 block font-semibold text-slate-900">
                                            Full Name *
                                        </label>

                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={(e) =>
                                                updateField(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="John Smith"
                                            className={`w-full rounded-xl border px-4 py-3.5 outline-none transition ${
                                                errors.name
                                                    ? "border-red-400 focus:ring-2 focus:ring-red-200"
                                                    : "border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                            }`}
                                        />

                                        {errors.name && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.name}
                                            </p>
                                        )}
                                    </div>


                                    <div>
                                        <label className="mb-2 block font-semibold text-slate-900">
                                            Business Email *
                                        </label>

                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={(e) =>
                                                updateField(
                                                    "email",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="john@company.com"
                                            className={`w-full rounded-xl border px-4 py-3.5 outline-none transition ${
                                                errors.email
                                                    ? "border-red-400 focus:ring-2 focus:ring-red-200"
                                                    : "border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                            }`}
                                        />

                                        {errors.email && (
                                            <p className="mt-2 text-sm text-red-500">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                </div>


                                {/* COMPANY */}

                                <div className="mt-6">

                                    <label className="mb-2 block font-semibold text-slate-900">
                                        Company Name *
                                    </label>

                                    <input
                                        type="text"
                                        value={form.company}
                                        onChange={(e) =>
                                            updateField(
                                                "company",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Company name"
                                        className={`w-full rounded-xl border px-4 py-3.5 outline-none transition ${
                                            errors.company
                                                ? "border-red-400 focus:ring-2 focus:ring-red-200"
                                                : "border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                        }`}
                                    />

                                    {errors.company && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.company}
                                        </p>
                                    )}

                                </div>


                                {/* SERVICE + SIZE */}

                                <div className="grid md:grid-cols-2 gap-6 mt-6">

                                    <div>

                                        <label className="mb-2 block font-semibold text-slate-900">
                                            Service Required *
                                        </label>

                                        <select
                                            value={form.service}
                                            onChange={(e) =>
                                                updateField(
                                                    "service",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                        >
                                            <option>Image Annotation</option>
                                            <option>Video Annotation</option>
                                            <option>Text Annotation</option>
                                            <option>Audio Annotation</option>
                                            <option>LiDAR Annotation</option>
                                            <option>OCR & Document AI</option>
                                            <option>Sports Analytics</option>
                                            <option>Custom Data Labeling</option>
                                        </select>

                                    </div>


                                    <div>

                                        <label className="mb-2 block font-semibold text-slate-900">
                                            Estimated Dataset Size
                                        </label>

                                        <select
                                            value={form.projectSize}
                                            onChange={(e) =>
                                                updateField(
                                                    "projectSize",
                                                    e.target.value
                                                )
                                            }
                                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                        >
                                            <option>
                                                Less than 5,000
                                            </option>
                                            <option>
                                                5K - 50K
                                            </option>
                                            <option>
                                                50K - 500K
                                            </option>
                                            <option>
                                                500K+
                                            </option>
                                            <option>
                                                Not Sure
                                            </option>
                                        </select>

                                    </div>

                                </div>


                                {/* TIMELINE */}

                                <div className="mt-6">

                                    <label className="mb-2 block font-semibold text-slate-900">
                                        Expected Timeline
                                    </label>

                                    <select
                                        value={form.timeline}
                                        onChange={(e) =>
                                            updateField(
                                                "timeline",
                                                e.target.value
                                            )
                                        }
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                    >
                                        <option>Not sure</option>
                                        <option>Within 1 week</option>
                                        <option>1 - 4 weeks</option>
                                        <option>1 - 3 months</option>
                                        <option>3+ months</option>
                                    </select>

                                </div>


                                {/* MESSAGE */}

                                <div className="mt-6">

                                    <label className="mb-2 block font-semibold text-slate-900">
                                        Project Details *
                                    </label>

                                    <textarea
                                        rows={6}
                                        value={form.message}
                                        onChange={(e) =>
                                            updateField(
                                                "message",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Tell us about your dataset, annotation requirements, classes, output format, timeline, or any special instructions..."
                                        className={`w-full rounded-xl border px-4 py-3.5 outline-none transition resize-none ${
                                            errors.message
                                                ? "border-red-400 focus:ring-2 focus:ring-red-200"
                                                : "border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                                        }`}
                                    />

                                    {errors.message && (
                                        <p className="mt-2 text-sm text-red-500">
                                            {errors.message}
                                        </p>
                                    )}

                                </div>


                                {/* SUBMIT */}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-lg font-bold text-white transition ${
                                        loading
                                            ? "cursor-not-allowed bg-slate-400"
                                            : "bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-600/20"
                                    }`}
                                >
                                    {loading
                                        ? "Sending Request..."
                                        : "Request Free Consultation"}

                                    {!loading && (
                                        <ArrowRight size={20} />
                                    )}
                                </button>

                                <p className="mt-4 text-center text-sm text-slate-500">
                                    Your project information is treated as
                                    confidential.
                                </p>

                            </form>

                        </div>


                        {/* CONTACT INFORMATION */}

                        <aside>

                            <div className="sticky top-28 overflow-hidden rounded-3xl bg-slate-950 p-8 text-white shadow-2xl">

                                <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                                    Talk to Annotexia
                                </p>

                                <h3 className="mt-3 text-3xl font-bold">
                                    Have a specific project in mind?
                                </h3>

                                <p className="mt-5 leading-7 text-slate-300">
                                    Send us your requirements and we&apos;ll review
                                    the project before recommending an
                                    annotation approach.
                                </p>


                                <div className="mt-8 space-y-6">

                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-cyan-400">
                                            Business Email
                                        </p>

                                        <a
                                            href="mailto:contact@annotexia.com"
                                            className="mt-2 block text-lg font-medium hover:text-cyan-400 transition"
                                        >
                                            contact@annotexia.com
                                        </a>
                                    </div>


                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-cyan-400">
                                            Location
                                        </p>

                                        <p className="mt-2 text-slate-200">
                                            Pune, Maharashtra, India
                                        </p>
                                    </div>


                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-cyan-400">
                                            Working Hours
                                        </p>

                                        <p className="mt-2 text-slate-200">
                                            Monday – Saturday
                                            <br />
                                            9:00 AM – 6:00 PM IST
                                        </p>
                                    </div>

                                </div>


                                <div className="mt-9 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">

                                    <div className="flex items-start gap-3">

                                        <Sparkles
                                            className="mt-1 shrink-0 text-cyan-400"
                                            size={20}
                                        />

                                        <div>

                                            <h4 className="font-bold">
                                                Start with a free sample
                                            </h4>

                                            <p className="mt-2 text-sm leading-6 text-slate-300">
                                                Share a small sample of your
                                                dataset and requirements so you
                                                can evaluate our annotation
                                                quality before scaling.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </aside>

                    </div>

                </div>

            </section>


            {/* =====================================================
                WHY ANNOTEXIA
            ====================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="mx-auto max-w-3xl text-center">

                        <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                            Why Annotexia
                        </p>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
                            More than just labeling data
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Reliable AI starts with reliable training data.
                            Our workflows are designed around quality,
                            consistency, communication, and project-specific
                            requirements.
                        </p>

                    </div>


                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                        {benefits.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-3xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                                        <Icon size={25} />
                                    </div>

                                    <h3 className="mt-7 text-xl font-bold text-slate-900">
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


            {/* =====================================================
                PROCESS
            ====================================================== */}

            <section
                id="process"
                className="py-24 bg-white"
            >

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-3xl">

                        <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                            Simple Process
                        </p>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
                            From requirements to ready-to-use data
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            We keep the engagement straightforward. Start with
                            your requirements and we&apos;ll help define the rest.
                        </p>

                    </div>


                    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {process.map((item) => (
                            <div
                                key={item.number}
                                className="relative"
                            >

                                <span className="text-6xl font-black text-slate-100">
                                    {item.number}
                                </span>

                                <h3 className="relative -mt-5 text-xl font-bold text-slate-900">
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


            {/* =====================================================
                FREE SAMPLE CTA
            ====================================================== */}

            <section className="px-6 py-20">

                <div className="max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-r from-cyan-600 to-blue-700">

                    <div className="px-8 py-14 md:px-14 lg:px-16">

                        <div className="grid lg:grid-cols-2 gap-10 items-center">

                            <div className="text-white">

                                <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                                    <Sparkles size={17} />
                                    BEFORE YOU COMMIT
                                </div>

                                <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
                                    See our annotation quality first.
                                </h2>

                                <p className="mt-5 max-w-2xl text-lg leading-8 text-cyan-50">
                                    Not sure whether we&apos;re the right partner?
                                    Send us a small sample of your dataset.
                                    We&apos;ll demonstrate how we approach your
                                    annotation requirements.
                                </p>

                            </div>

                            <div className="lg:text-right">

                                <a
                                    href="#contact-form"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-cyan-700 transition hover:scale-105"
                                >
                                    Request Free Sample
                                    <ArrowRight size={19} />
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                FAQ
            ====================================================== */}

            <section
                id="faq"
                className="bg-slate-50 py-24"
            >

                <div className="max-w-5xl mx-auto px-6">

                    <div className="text-center">

                        <p className="text-sm font-bold uppercase tracking-widest text-cyan-600">
                            FAQ
                        </p>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
                            Questions before you get started?
                        </h2>

                        <p className="mt-5 text-lg text-slate-600">
                            Here are some of the questions teams commonly ask
                            before starting an annotation project.
                        </p>

                    </div>


                    <div className="mt-14 space-y-4">

                        {faqs.map((faq) => (
                            <details
                                key={faq.q}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-slate-900">

                                    {faq.q}

                                    <span className="shrink-0 text-2xl font-normal text-cyan-600 transition group-open:rotate-45">
                                        +
                                    </span>

                                </summary>

                                <p className="mt-5 max-w-4xl leading-7 text-slate-600">
                                    {faq.a}
                                </p>

                            </details>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                        Let&apos;s Talk About Your AI Project
                    </p>

                    <h2 className="mt-5 text-4xl lg:text-5xl font-bold">
                        Your next AI dataset starts here.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Tell us what you&apos;re building, what data you have, and
                        what you need labeled. We&apos;ll help you determine the
                        next step.
                    </p>

                    <a
                        href="#contact-form"
                        className="mt-10 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600"
                    >
                        Start Your Project
                        <ArrowRight size={19} />
                    </a>

                </div>

            </section>


            {/* =====================================================
                SEO CONTENT
            ====================================================== */}

            <section className="border-t border-slate-200 bg-white py-16">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-slate-900">
                        AI Data Annotation Services
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                        Annotexia provides data annotation and labeling
                        services for organizations developing Artificial
                        Intelligence, Machine Learning, Computer Vision,
                        Natural Language Processing, and other AI applications.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Our services include image annotation, video
                        annotation, text annotation, audio annotation, OCR,
                        LiDAR labeling, object detection, segmentation,
                        classification, tracking, and custom AI training
                        datasets.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Whether you&apos;re validating an early AI concept or
                        preparing a larger production dataset, our team can
                        adapt the annotation workflow to your project
                        requirements, quality standards, and delivery format.
                    </p>

                </div>

            </section>

        </main>
    );
}