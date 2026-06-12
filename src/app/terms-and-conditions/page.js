export const metadata = {
    title: "Terms & Conditions",
    description:
        "Read the Terms and Conditions governing the use of Annotexia's website and services.",
};

export default function TermsAndConditionsPage() {
    return (
        <main className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-bold mb-8">
                Terms & Conditions
            </h1>

            <p className="text-gray-600 mb-8">
                Last Updated: June 2026
            </p>

            <div className="space-y-8 text-gray-700 leading-8">

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        1. Introduction
                    </h2>
                    <p>
                        Welcome to Annotexia. These Terms and Conditions govern
                        your use of our website, products, and services. By
                        accessing or using our website, you agree to comply with
                        and be bound by these terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        2. Services
                    </h2>
                    <p>
                        Annotexia provides AI data annotation, data labeling,
                        image annotation, video annotation, text annotation,
                        audio annotation, machine learning dataset preparation,
                        and related services for organizations developing
                        Artificial Intelligence solutions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        3. Intellectual Property
                    </h2>
                    <p>
                        All content on this website, including text, graphics,
                        logos, designs, and software, is the property of
                        Annotexia unless otherwise stated. Unauthorized use,
                        reproduction, or distribution is prohibited.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        4. Confidentiality
                    </h2>
                    <p>
                        We understand the importance of data security and
                        confidentiality. All client data shared with Annotexia
                        is handled according to agreed confidentiality
                        requirements and applicable laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        5. User Responsibilities
                    </h2>
                    <p>
                        Users agree not to misuse the website, attempt
                        unauthorized access, distribute malicious software,
                        or engage in activities that may harm the website
                        or its users.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        6. Limitation of Liability
                    </h2>
                    <p>
                        Annotexia shall not be liable for any indirect,
                        incidental, special, or consequential damages arising
                        from the use of our website or services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        7. Third-Party Links
                    </h2>
                    <p>
                        Our website may contain links to third-party websites.
                        We are not responsible for the content, policies,
                        or practices of those websites.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        8. Changes to Terms
                    </h2>
                    <p>
                        We reserve the right to modify these Terms and
                        Conditions at any time. Updated versions will be
                        posted on this page with a revised effective date.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        9. Governing Law
                    </h2>
                    <p>
                        These Terms and Conditions shall be governed by and
                        interpreted in accordance with applicable laws of
                        India, without regard to conflict of law principles.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">
                        10. Contact Us
                    </h2>
                    <p>
                        If you have any questions regarding these Terms and
                        Conditions, please contact us through our Contact
                        page or email us at <a
                            href="mailto:info@annotexia.com"
                            className="text-blue-600 hover:text-blue-800 underline"
                        >
                            contact@annotexia.com
                        </a>
                    </p>
                </section>

            </div>
        </main>
    );
}