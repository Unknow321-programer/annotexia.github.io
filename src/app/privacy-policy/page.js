export const metadata = {
  title: "Privacy Policy | Annotexia",
  description:
    "Read the Privacy Policy of Annotexia and learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 11, 2026";

  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-500 mb-10">
            Last Updated: {lastUpdated}
          </p>

          <div className="space-y-8 text-gray-700">

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Introduction
              </h2>

              <p>
                Annotexia is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use,
                store, and protect information when you visit our
                website or engage with our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Information We Collect
              </h2>

              <p className="mb-3">
                We may collect the following information:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact details</li>
                <li>Email address</li>
                <li>Company information</li>
                <li>Project requirements submitted through forms</li>
                <li>Website usage and analytics data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                How We Use Information
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and service requests</li>
                <li>Provide data annotation and consulting services</li>
                <li>Improve website performance and user experience</li>
                <li>Communicate important updates</li>
                <li>Maintain security and prevent misuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Data Security
              </h2>

              <p>
                We implement reasonable technical and organizational
                measures to protect information from unauthorized
                access, disclosure, alteration, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Third-Party Services
              </h2>

              <p>
                We may use trusted third-party tools such as analytics,
                hosting providers, and communication services. These
                providers may process information in accordance with
                their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Cookies
              </h2>

              <p>
                Our website may use cookies and similar technologies
                to enhance user experience, analyze traffic, and
                improve website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Data Retention
              </h2>

              <p>
                We retain information only as long as necessary to
                fulfill business purposes, comply with legal
                obligations, and resolve disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Your Rights
              </h2>

              <p>
                Depending on applicable laws, you may have rights
                regarding access, correction, deletion, or restriction
                of your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Contact Us
              </h2>

              <p>
                If you have questions about this Privacy Policy,
                please contact us through our Contact page or email us
                at:
              </p>

              <p className="mt-3 font-medium">
                contact@annotexia.com
              </p>
            </section>

          </div>

        </div>
      </section>
    </main>
  );
}