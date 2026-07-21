"use client";

import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactClient() {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        service: "Image Annotation",
        message: "",
        projectSize: "Less than 5,000",
    });

    const [errors, setErrors] = useState({});

    // ================= VALIDATION =================
    const validate = () => {
        let newErrors = {};

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
            newErrors.name = "Full name is required";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Invalid email format";
        } else {
            const domain = form.email.split("@")[1].toLowerCase();

            if (freeEmailProviders.includes(domain)) {
                newErrors.email =
                    "Please use your company email address.";
            }
        }

        if (!form.company.trim()) {
            newErrors.company = "Company name is required";
        }

        if (!form.service) {
            newErrors.service = "Service is required";
        }

        if (!form.projectSize) {
            newErrors.projectSize = "Estimated dataset size is required";
        }

        if (!form.message.trim()) {
            newErrors.message = "Project details are required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // ================= SUBMIT =================
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            toast.error("Please fix form errors");
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
                throw new Error(data.error || "Failed to send email");
            }

            toast.success("Message sent successfully!");

            setForm({
                name: "",
                email: "",
                company: "",
                service: "Image Annotation",
                projectSize: "Less than 5,000",
                message: "",
            });

            setErrors({});

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    // ================= UI =================
    return (
        <main className="min-h-screen">

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 py-24">

                {/* Background Blur */}
                <div className="absolute inset-0">
                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}
                        <div>

                            <span className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 text-sm font-medium mb-6">
                                AI Data Annotation Experts
                            </span>

                            <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">
                                Let's Build
                                <span className="block text-cyan-400">
                                    Better AI Together
                                </span>
                            </h1>

                            <p className="text-xl text-slate-300 leading-8 mb-10 max-w-xl">
                                Whether you're building Computer Vision,
                                Healthcare AI, Sports Analytics,
                                Autonomous Vehicles, Robotics, or
                                Generative AI, Annotexia delivers
                                accurate, scalable, and secure data
                                annotation services that power
                                high-performing machine learning models.
                            </p>

                            <div className="flex flex-wrap gap-4">

                                <a
                                    href="#contact-form"
                                    className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition duration-300 shadow-lg shadow-cyan-500/20"
                                >
                                    Get Free Quote
                                </a>

                                <a
                                    href="#faq"
                                    className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
                                >
                                    Schedule Consultation
                                </a>

                            </div>

                        </div>

                        {/* Right */}

                        <div className="relative">

                            <div className="absolute inset-0 rounded-3xl bg-cyan-500 blur-3xl opacity-20 animate-pulse"></div>

                            <Image
                                src="/images/contact/contact-banner.webp"
                                alt="Professional AI data annotation specialists working on machine learning projects"
                                width={600}
                                height={400}
                                priority
                                className="relative rounded-3xl shadow-2xl border border-white/10 hover:scale-[1.02] transition duration-500"
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= STATS ================= */}

            <section className="relative -mt-16 z-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

                            <h2 className="text-4xl font-bold text-cyan-600 mb-2">
                                24h
                            </h2>

                            <h3 className="font-semibold text-lg mb-2">
                                Average Response
                            </h3>

                            <p className="text-gray-600">
                                Every inquiry is reviewed by our AI annotation specialists within one business day.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

                            <h2 className="text-4xl font-bold text-cyan-600 mb-2">
                                99%
                            </h2>

                            <h3 className="font-semibold text-lg mb-2">
                                Annotation Accuracy
                            </h3>

                            <p className="text-gray-600">
                                Multi-level quality assurance ensures reliable datasets for AI model training.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

                            <h2 className="text-4xl font-bold text-cyan-600 mb-2">
                                50+
                            </h2>

                            <h3 className="font-semibold text-lg mb-2">
                                Annotation Types
                            </h3>

                            <p className="text-gray-600">
                                Image, Video, Text, Audio, LiDAR, OCR, Segmentation, NLP and more.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition">

                            <h2 className="text-4xl font-bold text-cyan-600 mb-2">
                                Global
                            </h2>

                            <h3 className="font-semibold text-lg mb-2">
                                Client Support
                            </h3>

                            <p className="text-gray-600">
                                Supporting startups, enterprises, and research organizations across multiple industries.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= CONTACT SECTION ================= */}

            <section
                id="contact-form"
                className="py-24 bg-white"
            >
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* ================= FORM ================= */}

                        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-10">

                            <div className="mb-10">

                                <span className="text-cyan-600 font-semibold uppercase tracking-wider">
                                    Request a Free Consultation
                                </span>

                                <h2 className="text-4xl font-bold mt-3 mb-4">
                                    Tell Us About Your AI Project
                                </h2>

                                <p className="text-gray-600 text-lg">
                                    Fill out the form below and our annotation specialists
                                    will contact you within 24 hours.
                                </p>

                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-8"
                            >

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* Full Name */}

                                    <div>

                                        <label className="block mb-2 font-semibold">
                                            Full Name *
                                        </label>

                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
                                        />

                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.name}
                                            </p>
                                        )}

                                    </div>

                                    {/* Business Email */}

                                    <div>

                                        <label className="block mb-2 font-semibold">
                                            Business Email *
                                        </label>

                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    email: e.target.value,
                                                })
                                            }
                                            className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
                                        />

                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.email}
                                            </p>
                                        )}

                                    </div>

                                </div>

                                {/* Company */}

                                <div>

                                    <label className="block mb-2 font-semibold">
                                        Company Name *
                                    </label>

                                    <input
                                        type="text"
                                        value={form.company}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                company: e.target.value,
                                            })
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
                                    />

                                    {errors.company && (
                                        <p className="text-red-500 text-sm mt-2">
                                            {errors.company}
                                        </p>
                                    )}

                                </div>

                                <div className="grid md:grid-cols-2 gap-6">

                                    {/* Service */}

                                    <div>

                                        <label className="block mb-2 font-semibold">
                                            Service Required *
                                        </label>

                                        <select
                                            value={form.service}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    service: e.target.value,
                                                })
                                            }
                                            className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
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

                                    {/* Project Size */}

                                    <div>

                                        <label className="block mb-2 font-semibold">
                                            Estimated Dataset Size
                                        </label>

                                        <select
                                            value={form.projectSize}
                                            onChange={(e) =>
                                                setForm({
                                                    ...form,
                                                    projectSize: e.target.value,
                                                })
                                            }
                                            className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
                                        >

                                            <option>Less than 5,000</option>
                                            <option>5K - 50K</option>
                                            <option>50K - 500K</option>
                                            <option>500K+</option>
                                            <option>Not Sure</option>

                                        </select>

                                    </div>

                                </div>

                                {/* Message */}

                                <div>

                                    <label className="block mb-2 font-semibold">
                                        Project Details *
                                    </label>

                                    <textarea
                                        rows={7}
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({
                                                ...form,
                                                message: e.target.value,
                                            })
                                        }
                                        className="w-full rounded-xl border border-gray-300 px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none"
                                        placeholder="Tell us about your AI project, annotation requirements, dataset size, preferred format, timeline, or any special instructions..."
                                    />

                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-2">
                                            {errors.message}
                                        </p>
                                    )}

                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-5 rounded-xl font-semibold text-lg transition ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-cyan-600 hover:bg-cyan-700 text-white"
                                        }`}
                                >
                                    {loading
                                        ? "Sending..."
                                        : "Request Free Consultation"}
                                </button>

                            </form>

                        </div>

                        {/* ================= RIGHT CARD ================= */}

                        <div>

                            <div className="sticky top-28 bg-slate-900 text-white rounded-3xl p-10 shadow-2xl">

                                <h3 className="text-3xl font-bold mb-8">
                                    Contact Information
                                </h3>

                                <div className="space-y-8">

                                    <div>

                                        <p className="text-cyan-400 uppercase text-sm mb-1">
                                            Business Email
                                        </p>

                                        <p className="text-lg">
                                            contact@annotexia.com
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-cyan-400 uppercase text-sm mb-1">
                                            Office
                                        </p>

                                        <p>
                                            Pune,
                                            <br />
                                            Maharashtra,
                                            <br />
                                            India
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-cyan-400 uppercase text-sm mb-1">
                                            Working Hours
                                        </p>

                                        <p>
                                            Monday – Saturday
                                            <br />
                                            9:00 AM – 6:00 PM IST
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-cyan-400 uppercase text-sm mb-1">
                                            Global Service
                                        </p>

                                        <p>
                                            Supporting clients worldwide
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-cyan-400 uppercase text-sm mb-1">
                                            Response Time
                                        </p>

                                        <p>
                                            Usually within 24 hours
                                        </p>

                                    </div>

                                </div>

                                <hr className="my-10 border-white/20" />

                                <p className="text-slate-300 leading-7">

                                    Every inquiry is reviewed by our AI
                                    annotation specialists. We provide
                                    tailored solutions for Computer Vision,
                                    Machine Learning, Healthcare AI,
                                    Sports Analytics, Autonomous Vehicles,
                                    Agriculture, Robotics, and many other
                                    AI applications.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= WHY CHOOSE US ================= */}

            <section className="py-24 bg-gradient-to-b from-white to-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-20">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                            Why Annotexia
                        </span>

                        <h2 className="text-5xl font-bold mt-4 mb-6">

                            Trusted AI Data Annotation Partner

                        </h2>

                        <p className="text-lg text-gray-600 leading-8">

                            Building successful AI models requires more than just
                            labeled data. It requires accuracy, consistency,
                            scalability, and domain expertise.

                            That's exactly what Annotexia delivers.

                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {[
                            {
                                title: "99% Annotation Accuracy",
                                desc: "Every dataset undergoes multiple quality assurance reviews to ensure precision and consistency.",
                                icon: "🎯",
                            },

                            {
                                title: "Enterprise Security",
                                desc: "Strict NDAs, secure infrastructure, access control, and confidential workflows protect your valuable data.",
                                icon: "🔒",
                            },

                            {
                                title: "Scalable Teams",
                                desc: "From 5,000 images to millions of annotations, our team scales with your project requirements.",
                                icon: "📈",
                            },

                            {
                                title: "Fast Turnaround",
                                desc: "Optimized workflows enable rapid delivery without compromising annotation quality.",
                                icon: "⚡",
                            },

                            {
                                title: "Dedicated Project Manager",
                                desc: "A single point of contact keeps communication simple, transparent, and efficient.",
                                icon: "🤝",
                            },

                            {
                                title: "Multiple Industries",
                                desc: "Healthcare AI, Computer Vision, Agriculture, Retail, Sports Analytics, Robotics, LiDAR, OCR and more.",
                                icon: "🌎",
                            },

                        ].map((item) => (

                            <div
                                key={item.title}
                                className="group relative bg-white rounded-3xl p-10 border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                            >

                                <div className="absolute top-0 left-0 h-1 w-0 bg-cyan-500 group-hover:w-full transition-all duration-500"></div>

                                <div className="text-5xl mb-6">

                                    {item.icon}

                                </div>

                                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-600 transition">

                                    {item.title}

                                </h3>

                                <p className="text-gray-600 leading-8">

                                    {item.desc}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= CTA ================= */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="rounded-[40px] bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-700 text-white p-16">

                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            <div>

                                <h2 className="text-5xl font-bold leading-tight mb-8">

                                    Ready to Build Better AI?

                                </h2>

                                <p className="text-xl text-cyan-100 leading-9">

                                    Whether you're launching your first AI product or scaling an enterprise machine learning platform,
                                    Annotexia provides accurate, secure, and scalable data annotation services tailored to your needs.

                                </p>

                            </div>

                            <div className="text-center lg:text-right">

                                <a
                                    href="#contact-form"
                                    className="inline-block bg-white text-cyan-700 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition"
                                >

                                    Request Free Consultation

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= FAQ ================= */}

            <section id="faq" className="py-24 bg-slate-50">

                <div className="max-w-5xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest">
                            Frequently Asked Questions
                        </span>

                        <h2 className="text-5xl font-bold mt-4 mb-6">

                            Have Questions?

                        </h2>

                        <p className="text-lg text-gray-600">

                            Here are answers to the questions we receive most often from AI companies and startups.

                        </p>

                    </div>

                    <div className="space-y-6">

                        {[
                            {
                                q: "How quickly do you respond to inquiries?",
                                a: "Most inquiries receive a response within 24 business hours. Urgent enterprise projects are prioritized.",
                            },
                            {
                                q: "Do you sign NDAs before starting a project?",
                                a: "Yes. We are happy to sign Non-Disclosure Agreements (NDAs) before accessing any project data.",
                            },
                            {
                                q: "Which annotation formats do you support?",
                                a: "We support COCO, YOLO, Pascal VOC, JSON, XML, CSV, Label Studio, CVAT, Roboflow, and custom formats.",
                            },
                            {
                                q: "Can you scale to millions of annotations?",
                                a: "Absolutely. Our scalable workforce allows us to efficiently manage both small and enterprise-scale annotation projects.",
                            },
                            {
                                q: "Which industries do you specialize in?",
                                a: "Healthcare AI, Computer Vision, Sports Analytics, Agriculture, Autonomous Vehicles, Retail, OCR, Manufacturing, Drone Imagery, Robotics, and more.",
                            },
                            {
                                q: "How can I trust Annotexia with my AI project?",
                                a: "We understand that choosing the right data annotation partner is an important decision. Annotexia follows strict quality assurance processes, secure data handling practices, and confidential workflows. We are happy to sign Non-Disclosure Agreements (NDAs) before starting any project and provide transparent communication with a dedicated project manager throughout the project lifecycle."
                            },

                            {
                                q: "How can I evaluate your annotation quality before placing a large order?",
                                a: "We offer a FREE sample annotation service so you can evaluate our quality before making any commitment. Simply share a small sample of your dataset and annotation guidelines. Our team will annotate the sample at no cost, allowing you to review our accuracy, consistency, and turnaround time before proceeding with the full project."
                            },

                            {
                                q: "Is the sample dataset really free?",
                                a: "Yes. Your initial sample annotation is completely free with no hidden charges or obligations. This allows you to verify our annotation quality, workflow, and communication before deciding to move forward with a larger project."
                            },
                        ].map((faq) => (

                            <details
                                key={faq.q}
                                className="group bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition"
                            >

                                <summary className="cursor-pointer text-xl font-semibold list-none flex justify-between items-center">

                                    {faq.q}

                                    <span className="text-cyan-600 text-2xl group-open:rotate-45 transition-transform">
                                        +
                                    </span>

                                </summary>

                                <p className="mt-5 text-gray-600 leading-8">

                                    {faq.a}

                                </p>

                            </details>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= FINAL CTA ================= */}

            <section className="py-24 bg-slate-900 text-white">

                <div className="max-w-6xl mx-auto px-6 text-center">

                    <span className="text-cyan-400 uppercase tracking-widest font-semibold">

                        Start Your AI Project Today

                    </span>

                    <h2 className="text-5xl font-bold mt-6 mb-8">

                        Let's Build Accurate AI Together

                    </h2>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-9 mb-12">

                        From image annotation and video labeling to NLP datasets, LiDAR annotation, OCR, and sports analytics,
                        Annotexia helps businesses build reliable AI models using accurate, secure, and scalable training data.

                    </p>

                    <a
                        href="#contact-form"
                        className="inline-flex items-center px-10 py-5 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg transition shadow-lg shadow-cyan-500/30"
                    >

                        Get Your Free Quote

                    </a>

                </div>

            </section>

            {/* ================= SEO CONTENT ================= */}

            <section className="py-20 bg-white">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-8">

                        Professional AI Data Annotation Services

                    </h2>

                    <p className="text-gray-600 leading-9 mb-6">

                        Annotexia provides professional data annotation services for organizations developing Artificial Intelligence (AI), Machine Learning (ML), Computer Vision, Natural Language Processing (NLP), and Generative AI applications. Our experienced annotation specialists deliver high-quality image annotation, video annotation, text annotation, audio annotation, LiDAR labeling, OCR datasets, semantic segmentation, polygon annotation, and custom AI training datasets.

                    </p>

                    <p className="text-gray-600 leading-9 mb-6">

                        Whether you are a startup building your first AI model or an enterprise managing millions of annotations, our scalable workflows, enterprise-grade security, and multi-level quality assurance ensure consistent, accurate, and reliable training data.

                    </p>

                    <p className="text-gray-600 leading-9">

                        Contact Annotexia today to discuss your project requirements and discover how our data annotation experts can accelerate your AI development with secure, scalable, and high-precision annotation services.

                    </p>

                </div>

            </section>
        </main>
    );
}