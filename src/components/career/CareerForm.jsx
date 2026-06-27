"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export default function CareerForm() {

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        resume: null,
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        const nameRegex = /^[A-Za-z\s]+$/;

        if (!form.firstName.trim()) {
            newErrors.firstName = "First name is required.";
        } else if (!nameRegex.test(form.firstName)) {
            newErrors.firstName =
                "First name can contain only alphabets.";
        }

        if (!form.lastName.trim()) {
            newErrors.lastName = "Last name is required.";
        } else if (!nameRegex.test(form.lastName)) {
            newErrors.lastName =
                "Last name can contain only alphabets.";
        }

        if (!form.address.trim()) {
            newErrors.address = "Current address is required.";
        }

        if (!form.resume) {
            newErrors.resume = "Resume is required.";
        } else {
            const allowedTypes = [
                "application/pdf",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];

            if (!allowedTypes.includes(form.resume.type)) {
                newErrors.resume = "Only PDF and DOCX files are allowed.";
            }

            if (form.resume.size > 5 * 1024 * 1024) {
                newErrors.resume = "File size must be below 5MB.";
            }
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            toast.error("Please correct the form errors.");
            return;
        }

        setLoading(true);

        try {
            const formData = new FormData();

            formData.append("firstName", form.firstName);
            formData.append("lastName", form.lastName);
            formData.append("address", form.address);
            formData.append("resume", form.resume);

            const response = await fetch("/api/career", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Application submitted successfully.");

                setForm({
                    firstName: "",
                    lastName: "",
                    address: "",
                    resume: null,
                });

                e.target.reset();
            } else {
                toast.error(result.error);
            }
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

                <div>
                    <label className="block mb-2 font-medium">
                        First Name *
                    </label>

                    <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) =>
                            setForm({ ...form, firstName: e.target.value })
                        }
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.firstName}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block mb-2 font-medium">
                        Last Name *
                    </label>

                    <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) =>
                            setForm({ ...form, lastName: e.target.value })
                        }
                        className="w-full rounded-lg border p-3"
                    />

                    {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.lastName}
                        </p>
                    )}
                </div>

            </div>

            <div>
                <label className="block mb-2 font-medium">
                    Current Address *
                </label>

                <textarea
                    rows={4}
                    value={form.address}
                    onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                    }
                    className="w-full rounded-lg border p-3"
                />

                {errors.address && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.address}
                    </p>
                )}
            </div>

            <div>
                <label className="block mb-2 font-medium">
                    Resume Upload (PDF or DOCX) *
                </label>

                <input
                    type="file"
                    accept=".pdf,.docx"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            resume: e.target.files[0],
                        })
                    }
                    className="w-full rounded-lg border p-3"
                />

                <p className="mt-2 text-sm text-gray-500">
                    Maximum file size: 5 MB
                </p>

                {errors.resume && (
                    <p className="mt-1 text-sm text-red-600">
                        {errors.resume}
                    </p>
                )}
            </div>

            <button
                type="submit"
                disabled={loading}
                className={`flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white transition ${loading
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-teal-600 hover:bg-teal-700"
                    }`}
            >
                {loading && (
                    <svg
                        className="mr-2 h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                    </svg>
                )}

                {loading ? "Submitting..." : "Submit Application"}
            </button>

        </form>
    );
}