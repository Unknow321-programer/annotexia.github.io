export const metadata = {
  title: "Retail & E-commerce AI Annotation Services",
  description:
    "Retail AI annotation services for product detection, shelf monitoring, OCR, inventory management, and computer vision applications.",
};

export default function RetailEcommercePage() {
  return (
    <main className="min-h-screen">

      {/* Hero */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Retail & E-commerce AI Annotation Services
          </h1>

          <p className="text-lg text-gray-600 max-w-4xl">
            Annotexia provides scalable AI annotation services for
            retailers, e-commerce platforms, inventory management,
            smart checkout systems, and computer vision applications.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            AI Training Data for Smart Retail
          </h2>

          <p className="text-gray-600 mb-4">
            Retail businesses are increasingly adopting Artificial
            Intelligence to improve customer experience, automate
            operations, and optimize inventory management.
          </p>

          <p className="text-gray-600 mb-4">
            High-quality annotated datasets help AI systems recognize
            products, monitor shelves, automate checkout, and analyze
            shopping behavior.
          </p>

          <p className="text-gray-600">
            Annotexia supports retail AI companies with accurate,
            scalable, and high-quality annotation services.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Retail AI Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Product Detection
              </h3>

              <p className="text-gray-600">
                Annotate products for recognition and visual search.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Shelf Detection
              </h3>

              <p className="text-gray-600">
                Detect shelves and products for inventory monitoring.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                OCR & Barcode Annotation
              </h3>

              <p className="text-gray-600">
                Label text, price tags, receipts, and barcodes.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Product Classification
              </h3>

              <p className="text-gray-600">
                Categorize products for recommendation and search systems.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Inventory Annotation
              </h3>

              <p className="text-gray-600">
                Create datasets for stock management and warehouse AI.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Checkout AI Datasets
              </h3>

              <p className="text-gray-600">
                Train self-checkout and cashier-less shopping systems.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Retail AI Applications
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <ul className="space-y-4 text-gray-600">
              <li>✓ Smart Retail</li>
              <li>✓ Visual Search</li>
              <li>✓ Product Recognition</li>
              <li>✓ Inventory Management</li>
              <li>✓ Warehouse Automation</li>
            </ul>

            <ul className="space-y-4 text-gray-600">
              <li>✓ Self Checkout</li>
              <li>✓ Shelf Analytics</li>
              <li>✓ Customer Behavior Analysis</li>
              <li>✓ Retail Robotics</li>
              <li>✓ Store Monitoring</li>
            </ul>

          </div>

        </div>
      </section>

      {/* Why Annotexia */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            Why Choose Annotexia?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">High Accuracy</h3>
              <p className="text-gray-600">
                Consistent annotations with strict quality control.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Scalable Teams</h3>
              <p className="text-gray-600">
                Handle large retail image and video datasets efficiently.
              </p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3">Fast Delivery</h3>
              <p className="text-gray-600">
                Quick turnaround to accelerate AI development.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Need Retail AI Training Data?
          </h2>

          <p className="text-gray-300 mb-8">
            Partner with Annotexia to create high-quality datasets for
            retail AI, inventory management, and computer vision solutions.
          </p>

          <a href="/contact" className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium">
            Get a Free Consultation
          </a>

        </div>
      </section>

    </main>
  );
}