import CareerForm from "@/components/career/CareerForm";

export const metadata = {
    title: "Careers",
    description:
        "Join Annotexia as a Data Annotator. Explore career opportunities in AI data annotation, image annotation, video annotation, and machine learning datasets.",
};

export default function CareersPage() {
    return (
        <main className="min-h-screen">

            {/* Hero Section */}
            <section className="bg-slate-950 py-20 text-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-cyan-300 font-semibold uppercase tracking-widest mb-4">
                        Careers at Annotexia
                    </p>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Join Our AI Data Annotation Team
                    </h1>

                    <p className="max-w-3xl mx-auto text-slate-300 text-lg">
                        Build your career in Artificial Intelligence, Machine Learning,
                        Computer Vision, and Data Annotation by working on real-world AI projects.
                    </p>
                </div>
            </section>

            {/* Job Card */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6">

                    <div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-10">

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900">
                                    Data Annotator
                                </h2>

                                <p className="mt-2 text-slate-600">
                                    Experience: 0–4 Years
                                </p>
                            </div>
{/* 
                            <div className="mt-4 md:mt-0">
                                <span className="rounded-full mx-1 bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
                                    Contract-base
                                </span>
                                <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
                                    Project-Base
                                </span>
                            </div> */}
                        </div>

                        {/* About */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4">
                                About the Role
                            </h3>

                            <p className="text-slate-600 leading-8">
                                We are looking for enthusiastic and detail-oriented Data
                                Annotators to join our growing AI annotation team. Candidates
                                will work on image, video, text, and AI training datasets while
                                following project guidelines and maintaining high-quality
                                standards.
                            </p>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4">
                                Responsibilities
                            </h3>

                            <ul className="space-y-3 text-slate-600">
                                <li>
                                    Annotate data accurately according to project requirements
                                    and annotation guidelines.
                                </li>

                                <li>
                                    Maintain high attention to detail and quality standards.
                                </li>

                                <li>
                                    Familiarity with annotation tools is a plus but not
                                    mandatory.
                                </li>

                                <li>
                                    Learn new technologies and tools according to project
                                    requirements.
                                </li>

                                <li>
                                    Collaborate with the quality assurance team to ensure
                                    accurate datasets.
                                </li>
                            </ul>
                        </div>

                        {/* Eligibility */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4">
                                Who Can Apply
                            </h3>

                            <ul className="space-y-3 text-slate-600">
                                <li>
                                    Candidate must have completed 10th with minimum 60%.
                                </li>

                                <li>
                                    Candidate must have completed 12th with minimum 60%.
                                </li>

                                <li>
                                    Candidate must have completed a relevant degree.
                                </li>

                                <li>
                                    No active backlogs should exist.
                                </li>

                                <li>
                                    Pursuing candidates are not eligible for this role.
                                </li>

                                <li>
                                    Freshers and experienced candidates with 0–4 years of
                                    experience can apply.
                                </li>
                            </ul>
                        </div>

                        {/* Qualification */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4">
                                Educational Qualification
                            </h3>

                            <div className="grid md:grid-cols-2 gap-4 text-slate-600">
                                <div>• B.E / B.Tech</div>
                                <div>• BCA</div>
                                <div>• MCA</div>
                                <div>• B.Sc</div>
                                <div>• M.Sc</div>
                                <div>• Computer Science</div>
                                <div>• Information Technology</div>
                                <div>• Artificial Intelligence</div>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold mb-4">
                                Why Join Annotexia
                            </h3>

                            <ul className="space-y-3 text-slate-600">
                                <li> Work on real-world AI projects.</li>
                                <li> Learn modern annotation tools and technologies.</li>
                                <li> Opportunity to grow in the AI industry.</li>
                                <li> Supportive and collaborative work environment.</li>
                                <li> Continuous learning opportunities.</li>
                            </ul>
                        </div>

                        {/* Apply */}
                        <div className="rounded-xl bg-slate-50 p-8" >
                            {/* <h3 className="text-2xl font-bold mb-6 text-center text-red-300">
                                Current Position are close no more application<br />
                                Thank You.<br />
                            </h3>
                            <h3 className="text-2xl font-bold mb-6 text-center text-cyan-300">
                                For future opportunity stay connect with us.
                            </h3> */}
                            <h3 className="text-2xl font-bold mb-6 text-center">
                                Apply Now
                            </h3>

                            <CareerForm />
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}