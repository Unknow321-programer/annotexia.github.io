export const metadata = {
  title: "Text Annotation Services",
  description:
    "Professional text annotation services for NLP, AI, machine learning, sentiment analysis, named entity recognition, intent classification, and language model training.",
};

export default function TextAnnotationPage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Text Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            High-quality text annotation services for Natural Language
            Processing (NLP), Artificial Intelligence, Machine Learning,
            Large Language Models (LLMs), chatbots, and enterprise
            automation solutions.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Accurate Text Annotation for AI & NLP
          </h2>

          <p className="text-gray-600 mb-4">
            Text annotation is the process of labeling textual data so
            machine learning models can understand language, context,
            sentiment, intent, and relationships between entities.
          </p>

          <p className="text-gray-600 mb-4">
            High-quality annotated text datasets are essential for
            training chatbots, virtual assistants, recommendation
            systems, search engines, document processing platforms,
            and modern language models.
          </p>

          <p className="text-gray-600">
            Annotexia provides scalable text annotation services
            designed to improve the performance and accuracy of NLP
            and AI-powered applications.
          </p>

        </div>
      </section>

      {/* Annotation Types */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Our Text Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Named Entity Recognition (NER)
              </h3>

              <p className="text-gray-600">
                Identify and label people, organizations, locations,
                products, dates, and other entities within text.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Sentiment Analysis
              </h3>

              <p className="text-gray-600">
                Classify opinions, emotions, and customer feedback
                as positive, negative, or neutral.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Intent Classification
              </h3>

              <p className="text-gray-600">
                Train conversational AI systems to understand
                user intent and requests.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Text Categorization
              </h3>

              <p className="text-gray-600">
                Organize documents and content into predefined
                categories for machine learning systems.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Relationship Annotation
              </h3>

              <p className="text-gray-600">
                Label relationships between entities to improve
                knowledge extraction and understanding.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                LLM Training Data
              </h3>

              <p className="text-gray-600">
                Prepare and annotate datasets for large language
                models and generative AI applications.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            NLP & AI Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <ul className="space-y-4 text-gray-600">
                <li>✓ Chatbots & Virtual Assistants</li>
                <li>✓ Customer Support Automation</li>
                <li>✓ Recommendation Systems</li>
                <li>✓ Search Engines</li>
                <li>✓ Document Classification</li>
              </ul>
            </div>

            <div>
              <ul className="space-y-4 text-gray-600">
                <li>✓ Language Models (LLMs)</li>
                <li>✓ Content Moderation</li>
                <li>✓ Knowledge Extraction</li>
                <li>✓ Healthcare NLP</li>
                <li>✓ Financial Document Analysis</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Annotexia?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Domain Expertise
              </h3>

              <p className="text-gray-600">
                Skilled annotation teams with NLP and AI experience.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Quality Assurance
              </h3>

              <p className="text-gray-600">
                Multi-level review processes ensure high accuracy.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">
                Scalable Delivery
              </h3>

              <p className="text-gray-600">
                Support for projects ranging from thousands to millions
                of text records.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Need Text Annotation Services?
          </h2>

          <p className="text-gray-300 mb-8">
            Let Annotexia help you build accurate NLP datasets and
            AI-ready training data for your next project.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium"
          >
            Request a Consultation
          </a>

        </div>
      </section>

    </main>
  );
}