export const metadata = {
  title: "Privacy Policy | Annotexia",
  description:
    "Learn how Annotexia collects, uses, stores, and protects your information when using our AI data annotation services and website.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 13, 2026";

  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl">
            At Annotexia, protecting your privacy and safeguarding your data
            is one of our highest priorities. This Privacy Policy explains how
            we collect, use, store, and protect your information when you visit
            our website or use our AI data annotation services.
          </p>

          <p className="mt-6 text-gray-500">
            Effective Date: June 06, 2026 <br />
            Last Updated: {lastUpdated}
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-14">

          <section>
            <h2 className="text-3xl font-bold mb-4">
              1. Information We Collect
            </h2>

            <p className="text-gray-600 mb-4">
              We collect only the information necessary to provide our
              services and improve your experience.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              Information You Provide
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number (if provided)</li>
              <li>Company name</li>
              <li>Project requirements</li>
              <li>Files or datasets shared for quotation or annotation</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3">
              Information Collected Automatically
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited</li>
              <li>Referral source</li>
              <li>Website usage statistics</li>
            </ul>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              2. How We Use Your Information
            </h2>

            <p className="text-gray-600 mb-4">
              Information collected through our website may be used to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Respond to inquiries and quotation requests.</li>
              <li>Deliver AI data annotation and related services.</li>
              <li>Communicate project updates.</li>
              <li>Improve our website and customer experience.</li>
              <li>Maintain website security.</li>
              <li>Comply with legal obligations.</li>
            </ul>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              3. Client Data & Confidentiality
            </h2>

            <p className="text-gray-600 mb-4">
              We understand that many AI projects involve proprietary and
              confidential datasets.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Client datasets always remain the property of the client.</li>
              <li>We never sell, reuse, or redistribute client data.</li>
              <li>Data is accessed only by authorized project personnel.</li>
              <li>We are happy to sign Non-Disclosure Agreements (NDAs).</li>
              <li>Project confidentiality is maintained throughout the engagement.</li>
            </ul>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              4. Data Security
            </h2>

            <p className="text-gray-600 mb-4">
              We implement appropriate administrative, technical, and
              organizational measures to protect your information.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access-controlled project environments</li>
              <li>Role-based permissions</li>
              <li>Secure file transfer methods</li>
              <li>Encrypted communications where applicable</li>
              <li>Confidentiality agreements for team members</li>
            </ul>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              5. Cookies
            </h2>

            <p className="text-gray-600">
              Our website may use cookies and similar technologies to improve
              website functionality, analyze traffic, and enhance user
              experience. You may disable cookies through your browser settings
              at any time.
            </p>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              6. Third-Party Services
            </h2>

            <p className="text-gray-600 mb-4">
              We may use trusted third-party providers to operate our website
              and services.
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Website hosting providers</li>
              <li>Analytics services</li>
              <li>Email communication platforms</li>
            </ul>

            <p className="text-gray-600 mt-4">
              These providers process information according to their own
              privacy policies.
            </p>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              7. Data Retention
            </h2>

            <p className="text-gray-600">
              We retain personal information only for as long as necessary to
              provide our services, comply with legal obligations, resolve
              disputes, and enforce our agreements. Client project data is
              handled according to contractual requirements.
            </p>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              8. Your Rights
            </h2>

            <p className="text-gray-600 mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Access your personal information.</li>
              <li>Correct inaccurate information.</li>
              <li>Request deletion of your information.</li>
              <li>Restrict certain processing activities.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              9. Children's Privacy
            </h2>

            <p className="text-gray-600">
              Our website and services are intended for business users and are
              not directed toward individuals under the age of 18.
            </p>

          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">
              10. Changes to this Privacy Policy
            </h2>

            <p className="text-gray-600">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page along with the updated effective date.
            </p>

          </section>


        </div>
      </section>

    </main>
  );
}