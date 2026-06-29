"use client";

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

            {/* HERO */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Contact Us
                    </h1>

                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Looking for reliable AI data annotation services?
                        Get in touch with our team.
                    </p>
                </div>
            </section>

            {/* info section */}
            <section className="py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 gap-8 mb-16">

                        {/* <div className="border rounded-xl p-8 text-center">
                            <h2 className="text-xl font-semibold mb-4">
                                Email
                            </h2>
                            <p className="text-gray-600">
                                contact@annotexia.com
                            </p>
                        </div> */}

                        <div className="border rounded-xl p-8 text-center">
                            <h2 className="text-xl font-semibold mb-4">
                                Location
                            </h2>
                            <p className="text-gray-600">
                                Pune, Maharashtra, India
                            </p>
                        </div>

                        <div className="border rounded-xl p-8 text-center">
                            <h2 className="text-xl font-semibold mb-4">
                                Business Hours
                            </h2>
                            <p className="text-gray-600">
                                Monday - Saturday
                                <br />
                                9:00 AM - 6:00 PM
                            </p>
                        </div>

                    </div>
                    {/* contact form */}
                    <div className="max-w-3xl mx-auto px-6">

                        <div className="border rounded-xl p-8">

                            <h2 className="text-3xl font-bold mb-8 text-center">
                                Request a Free Consultation
                            </h2>

                            <form className="space-y-6" onSubmit={handleSubmit}>

                                {/* NAME */}
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                        className="w-full border rounded-lg px-4 py-3"
                                    />

                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* EMAIL */}
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                        className="w-full border rounded-lg px-4 py-3"
                                    />

                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                {/* COMPANY */}
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Company Name
                                    </label>

                                    <input
                                        type="text"
                                        value={form.company}
                                        onChange={(e) =>
                                            setForm({ ...form, company: e.target.value })
                                        }
                                        className="w-full border rounded-lg px-4 py-3"
                                    />

                                    {errors.company && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.company}
                                        </p>
                                    )}
                                </div>

                                {/* SERVICE */}
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Service Required
                                    </label>

                                    <select
                                        value={form.service}
                                        onChange={(e) =>
                                            setForm({ ...form, service: e.target.value })
                                        }
                                        className="w-full border rounded-lg px-4 py-3"
                                    >
                                        <option>Image Annotation</option>
                                        <option>Video Annotation</option>
                                        <option>Text Annotation</option>
                                        <option>Audio Annotation</option>
                                        <option>Custom Data Labeling</option>
                                    </select>

                                    {errors.service && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.service}
                                        </p>
                                    )}
                                </div>

                                {/* MESSAGE */}
                                <div>
                                    <label className="block mb-2 font-medium">
                                        Project Details
                                    </label>

                                    <textarea
                                        rows="5"
                                        value={form.message}
                                        onChange={(e) =>
                                            setForm({ ...form, message: e.target.value })
                                        }
                                        className="w-full border rounded-lg px-4 py-3"
                                    />

                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                {/* BUTTON */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full py-3 rounded-lg transition text-white ${loading
                                        ? "bg-gray-500 cursor-not-allowed"
                                        : "bg-black hover:opacity-90"
                                        }`}
                                >
                                    {loading ? "Sending..." : "Submit Inquiry"}
                                </button>

                            </form>

                        </div>

                    </div>
                </div>
            </section>

        </main>
    );
}