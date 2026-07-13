export const metadata = {
  title: "Terms & Conditions | Annotexia",
  description:
    "Read the Terms & Conditions governing the use of Annotexia's website, AI data annotation services, and related solutions.",
};

export default function TermsConditionsPage() {
  const lastUpdated = "June 06, 2026";

  return (
    <main className="min-h-screen bg-white">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & Conditions
          </h1>

          <p className="text-gray-500 mb-12">
            Last Updated: {lastUpdated}
          </p>

          <div className="space-y-10 text-gray-700 leading-8">

            {/* Introduction */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                1. Acceptance of Terms
              </h2>

              <p>
                By accessing or using the Annotexia website and services,
                you agree to comply with these Terms & Conditions. If you
                do not agree with any part of these terms, please do not
                use our website or services.
              </p>
            </section>

            {/* Services */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                2. Our Services
              </h2>

              <p className="mb-3">
                Annotexia provides AI data annotation and related services,
                including but not limited to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Image Annotation</li>
                <li>Video Annotation</li>
                <li>Text Annotation</li>
                <li>Audio Annotation</li>
                <li>3D/LiDAR Annotation</li>
                <li>Dataset Preparation</li>
                <li>Data Labeling & Quality Assurance</li>
                <li>AI Training Dataset Services</li>
              </ul>
            </section>

            {/* Client Responsibilities */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                3. Client Responsibilities
              </h2>

              <p>
                Clients are responsible for providing lawful data,
                project requirements, annotation guidelines, and ensuring
                they have the necessary rights to share data with
                Annotexia.
              </p>
            </section>

            {/* Confidentiality */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                4. Confidentiality
              </h2>

              <p>
                We treat all client information and datasets as
                confidential. Project data is accessed only by authorized
                personnel and handled according to agreed confidentiality
                requirements or Non-Disclosure Agreements (NDAs), where
                applicable.
              </p>
            </section>

            {/* Intellectual Property */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                5. Intellectual Property
              </h2>

              <p>
                All website content, including text, graphics, logos,
                designs, and branding, is the property of Annotexia unless
                otherwise stated. Client-owned datasets and intellectual
                property remain the property of the respective client.
              </p>
            </section>

            {/* Payments */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                6. Payments & Quotations
              </h2>

              <p>
                Pricing, quotations, and project timelines are provided
                individually based on project requirements. Payment terms
                will be agreed upon before project commencement.
              </p>
            </section>

            {/* Limitation */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                7. Limitation of Liability
              </h2>

              <p>
                Annotexia shall not be liable for indirect, incidental,
                special, or consequential damages arising from the use of
                our website or services. Our liability shall be limited to
                the extent permitted by applicable law.
              </p>
            </section>

            {/* Third Party */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                8. Third-Party Services
              </h2>

              <p>
                Our website may include links to third-party websites or
                services. We are not responsible for their content,
                security practices, or privacy policies.
              </p>
            </section>

            {/* Website Use */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                9. Acceptable Use
              </h2>

              <p className="mb-3">
                Users agree not to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Attempt unauthorized access to our systems.</li>
                <li>Upload malicious software or harmful content.</li>
                <li>Disrupt website operations.</li>
                <li>Misuse or copy website content without permission.</li>
              </ul>
            </section>

            {/* Changes */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                10. Changes to These Terms
              </h2>

              <p>
                We may update these Terms & Conditions from time to time.
                The latest version will always be available on this page,
                together with the revised effective date.
              </p>
            </section>

            {/* Governing Law */}

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                11. Governing Law
              </h2>

              <p>
                These Terms & Conditions shall be governed by and
                interpreted in accordance with the laws of India, without
                regard to conflict of law principles.
              </p>
            </section>

            

          </div>

        </div>
      </section>
    </main>
  );
}