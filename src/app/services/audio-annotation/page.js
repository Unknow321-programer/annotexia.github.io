export const metadata = {
  title: "Audio Annotation Services",
  description:
    "Professional audio annotation services for speech recognition, voice AI, speaker identification, audio classification, transcription, and machine learning datasets.",
};

export default function AudioAnnotationPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Audio Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            High-quality audio annotation services for speech recognition,
            conversational AI, voice assistants, audio analytics, and
            machine learning applications.
          </p>

        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Accurate Audio Labeling for AI Training
          </h2>

          <p className="text-gray-600 mb-4">
            Audio annotation is the process of labeling speech, sounds,
            conversations, and acoustic events to train machine learning
            models that understand and process audio data.
          </p>

          <p className="text-gray-600 mb-4">
            Modern voice assistants, call center analytics systems,
            speech-to-text engines, and conversational AI platforms
            rely on accurately annotated audio datasets.
          </p>

          <p className="text-gray-600">
            Annotexia delivers scalable audio annotation solutions with
            strict quality assurance processes to support enterprise AI
            and machine learning initiatives.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Audio Annotation Capabilities
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Speech Transcription
              </h3>

              <p className="text-gray-600">
                Convert spoken language into structured text datasets
                for speech recognition systems.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Speaker Identification
              </h3>

              <p className="text-gray-600">
                Label and differentiate speakers within conversations
                and recorded audio files.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Audio Classification
              </h3>

              <p className="text-gray-600">
                Categorize sounds, events, and environmental audio
                for machine learning models.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Emotion Detection
              </h3>

              <p className="text-gray-600">
                Annotate emotions and sentiment from voice recordings
                and customer interactions.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Intent Annotation
              </h3>

              <p className="text-gray-600">
                Label user intent within conversations for chatbot
                and virtual assistant training.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Acoustic Event Detection
              </h3>

              <p className="text-gray-600">
                Identify specific sounds and events for monitoring,
                security, and AI applications.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Audio AI Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ul className="space-y-4 text-gray-600">
              <li>✓ Voice Assistants</li>
              <li>✓ Speech Recognition Systems</li>
              <li>✓ Call Center Analytics</li>
              <li>✓ Conversational AI</li>
              <li>✓ Smart Devices</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Healthcare Voice Solutions</li>
              <li>✓ Language Learning Platforms</li>
              <li>✓ Security Monitoring Systems</li>
              <li>✓ Customer Service Automation</li>
              <li>✓ AI Research Projects</li>
            </ul>

          </div>

        </div>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Annotexia?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                High Accuracy
              </h3>

              <p className="text-gray-600">
                Consistent and precise audio labeling by trained experts.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Scalable Teams
              </h3>

              <p className="text-gray-600">
                Flexible workforce for projects of any size.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Secure Data Handling
              </h3>

              <p className="text-gray-600">
                Strong confidentiality and data protection practices.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Need Audio Annotation Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Partner with Annotexia to build high-quality audio datasets
            for speech recognition and AI applications.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium"
          >
            Contact Our Team
          </a>

        </div>
      </section>

    </main>
  );
}