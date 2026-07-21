import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShoppingCart, ScanSearch, PackageCheck } from "lucide-react";

export const metadata = {
  title:
    "Retail & E-commerce AI Annotation Services | Product Image & Computer Vision Data Labeling | Annotexia",
  description:
    "Professional retail and e-commerce data annotation services for product recognition, shelf monitoring, OCR, barcode detection, inventory management, visual search, cashier-less checkout, and computer vision AI. High-quality retail AI training datasets with enterprise-grade quality assurance.",

  keywords: [
    "Retail AI Annotation Services",
    "Retail Data Annotation",
    "E-commerce Annotation Services",
    "Retail Computer Vision",
    "Retail Machine Learning Dataset",
    "Product Image Annotation",
    "Product Detection Dataset",
    "Shelf Monitoring Annotation",
    "OCR Annotation Services",
    "Barcode Annotation",
    "Retail Image Labeling",
    "Retail AI Training Data",
    "Cashierless Checkout AI",
    "Visual Search Dataset",
    "Inventory AI Dataset",
    "Product Segmentation",
    "Retail Computer Vision Annotation",
    "Retail Dataset Labeling",
    "Annotexia"
  ],

  alternates: {
    canonical:
      "https://annotexia.com/industries/retail-ecommerce",
  },
};

export default function RetailEcommercePage() {
  return (
    <main className="min-h-screen">

      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 py-28">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <div className="inline-flex items-center gap-3 bg-cyan-500/10 text-cyan-300 px-5 py-2 rounded-full border border-cyan-500/30 mb-8">

                <ShoppingCart size={18} />

                <span className="text-sm font-semibold tracking-wider uppercase">

                  Retail & E-commerce AI

                </span>

              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8">

                Retail & E-commerce
                AI Annotation
                Services

              </h1>

              <p className="text-xl text-slate-300 leading-9 mb-10">

                Power smarter retail experiences with accurately annotated datasets
                for product recognition, shelf monitoring, inventory automation,
                visual search, OCR, barcode detection, cashier-less checkout,
                and next-generation retail computer vision systems.

              </p>

              <div className="flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-xl font-semibold transition"
                >

                  Request Free Sample

                </Link>

                <Link
                  href="/services"
                  className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-xl transition"
                >

                  Explore Services

                </Link>

              </div>

              <div className="grid grid-cols-3 gap-8 mt-16">

                <div>

                  <h3 className="text-4xl font-bold text-cyan-400">

                    99%

                  </h3>

                  <p className="text-slate-400 mt-2">

                    Annotation Accuracy

                  </p>

                </div>

                <div>

                  <h3 className="text-4xl font-bold text-cyan-400">

                    20+

                  </h3>

                  <p className="text-slate-400 mt-2">

                    Annotation Types

                  </p>

                </div>

                <div>

                  <h3 className="text-4xl font-bold text-cyan-400">

                    24/7

                  </h3>

                  <p className="text-slate-400 mt-2">

                    Scalable Delivery

                  </p>

                </div>

              </div>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=1600&q=80"
                alt="Retail AI Annotation"
                width={700}
                height={850}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* STORY SECTION */}
      {/* ===================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80"
                alt="Retail AI Data Annotation"
                width={700}
                height={850}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Why Retail AI Needs Accurate Data

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Teaching AI to
                Understand Every
                Product on Every Shelf

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Retail is evolving faster than ever before. Today's stores are no
                longer powered solely by people—they increasingly rely on Artificial
                Intelligence to automate operations, improve customer experiences,
                and make real-time business decisions.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                From cashier-less checkout systems and smart inventory monitoring
                to visual product search and automated warehouse management,
                computer vision has become one of the most valuable technologies
                in modern retail.

              </p>

              <p className="text-lg leading-9 text-gray-600 mb-8">

                Behind every successful retail AI system is one essential ingredient:
                accurately annotated training data. Poor-quality annotations lead
                to inaccurate predictions, inventory errors, false detections,
                and frustrated customers.

              </p>

              <p className="text-lg leading-9 text-gray-600">

                At Annotexia, we help retailers, AI startups, e-commerce platforms,
                and enterprise technology companies transform raw retail images
                into high-quality datasets that improve machine learning performance
                across every stage of the retail journey.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* RETAIL AI CHALLENGES */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Industry Challenges

            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">

              Retail AI Faces
              Unique Challenges

            </h2>

            <p className="text-lg text-gray-600 leading-9">

              Retail environments are dynamic, crowded, and constantly changing.
              AI systems must recognize thousands of products while maintaining
              speed and accuracy in real-world conditions.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <PackageCheck className="text-cyan-500 mb-5" size={40} />

              <h3 className="font-bold text-2xl mb-4">

                Thousands of SKUs

              </h3>

              <p className="text-gray-600">

                Retail AI must distinguish products with nearly identical packaging.

              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <ScanSearch className="text-cyan-500 mb-5" size={40} />

              <h3 className="font-bold text-2xl mb-4">

                Crowded Shelves

              </h3>

              <p className="text-gray-600">

                Products overlap, rotate, and become partially hidden.

              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <ShoppingCart className="text-cyan-500 mb-5" size={40} />

              <h3 className="font-bold text-2xl mb-4">

                Customer Interaction

              </h3>

              <p className="text-gray-600">

                AI must detect products even while customers move them.

              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">

              <CheckCircle2 className="text-cyan-500 mb-5" size={40} />

              <h3 className="font-bold text-2xl mb-4">

                Inventory Accuracy

              </h3>

              <p className="text-gray-600">

                Incorrect annotations directly affect inventory forecasting.

              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ===================================================== */}
      {/* RETAIL AI ANNOTATION SERVICES */}
      {/* ===================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Our Expertise

            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">

              Retail AI Annotation Services
              Built for Enterprise Computer Vision

            </h2>

            <p className="text-lg leading-9 text-gray-600">

              Every retail AI application requires different types of annotated
              training data. Whether you're building smart shelves, cashier-less
              stores, warehouse automation, or product search engines, our
              annotation specialists create datasets optimized for high-performing
              machine learning models.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Card */}

            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

              <Image
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80"
                alt="Product Detection Annotation"
                width={700}
                height={450}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">

                  Product Detection Annotation

                </h3>

                <p className="text-gray-600 leading-8">

                  Accurate bounding box annotation for retail products including
                  groceries, beverages, apparel, cosmetics, electronics,
                  household goods, pharmaceuticals, and thousands of unique SKUs.

                </p>

              </div>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80"
                alt="Shelf Monitoring AI"
                width={700}
                height={450}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">

                  Shelf Monitoring

                </h3>

                <p className="text-gray-600 leading-8">

                  Train AI models to monitor shelf availability, identify empty
                  spaces, misplaced products, stock-outs, and ensure planogram
                  compliance across retail stores.

                </p>

              </div>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

              <Image
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80"
                alt="OCR Annotation"
                width={700}
                height={450}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">

                  OCR & Barcode Annotation

                </h3>

                <p className="text-gray-600 leading-8">

                  Annotate receipts, invoices, shelf labels, QR codes, barcodes,
                  price tags, expiry dates, promotional banners, and product
                  packaging for OCR-powered retail systems.

                </p>

              </div>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

              <Image
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
                alt="Visual Search Dataset"
                width={700}
                height={450}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">

                  Visual Search Dataset

                </h3>

                <p className="text-gray-600 leading-8">

                  Enable customers to search products using images instead of
                  keywords by training AI with highly accurate product recognition
                  datasets.

                </p>

              </div>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                alt="Cashierless Checkout"
                width={700}
                height={450}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">

                  Cashier-less Checkout AI

                </h3>

                <p className="text-gray-600 leading-8">

                  Create datasets for autonomous checkout systems capable of
                  tracking customer interactions, recognizing products,
                  and reducing checkout times.

                </p>

              </div>

            </div>

            {/* Card */}

            <div className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition">

              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
                alt="Warehouse Automation"
                width={700}
                height={450}
                className="w-full h-60 object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold mb-4">

                  Warehouse AI Annotation

                </h3>

                <p className="text-gray-600 leading-8">

                  Annotate pallets, cartons, forklifts, inventory locations,
                  storage racks, packages, and warehouse workflows to
                  support logistics automation.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* RETAIL DATASETS */}
      {/* ===================================================== */}

      <section className="bg-slate-50 py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1607082352121-fa243f3dde32?auto=format&fit=crop&w=1200&q=80"
                alt="Retail AI Dataset"
                width={700}
                height={800}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">

                Enterprise AI Datasets

              </span>

              <h2 className="text-5xl font-bold mt-5 mb-8">

                Training Data
                Designed for Real Retail
                Environments

              </h2>

              <p className="text-lg leading-9 text-gray-600 mb-8">

                Retail environments are unpredictable. Products change positions,
                lighting varies throughout the day, customers interact with
                merchandise, and new inventory arrives constantly.

                Our annotation process captures these real-world variations,
                ensuring AI models generalize better once deployed.

              </p>

              <div className="space-y-5">

                <div className="flex gap-4">

                  <CheckCircle2 className="text-cyan-500 mt-1" />

                  <div>

                    <h4 className="font-semibold">

                      Multi-angle Product Recognition

                    </h4>

                    <p className="text-gray-600">

                      Products photographed from multiple perspectives.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <CheckCircle2 className="text-cyan-500 mt-1" />

                  <div>

                    <h4 className="font-semibold">

                      Occlusion Handling

                    </h4>

                    <p className="text-gray-600">

                      Products partially hidden behind others.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <CheckCircle2 className="text-cyan-500 mt-1" />

                  <div>

                    <h4 className="font-semibold">

                      Large SKU Libraries

                    </h4>

                    <p className="text-gray-600">

                      Thousands of product categories supported.

                    </p>

                  </div>

                </div>

                <div className="flex gap-4">

                  <CheckCircle2 className="text-cyan-500 mt-1" />

                  <div>

                    <h4 className="font-semibold">

                      Multiple Annotation Formats

                    </h4>

                    <p className="text-gray-600">

                      COCO, YOLO, Pascal VOC, XML, JSON, CSV and custom schemas.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* Retail AI Annotation Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-cyan-600 font-semibold uppercase tracking-wide">
              Our Services
            </span>

            <h2 className="text-4xl font-bold mt-4">
              End-to-End Retail AI Annotation Services
            </h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Every retail AI application has different training data requirements.
              Our annotation specialists create structured datasets that improve
              product recognition, shelf monitoring, customer analytics, inventory
              intelligence, and automated retail operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80"
                alt="Product Annotation"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  Product Detection & Recognition
                </h3>

                <p className="text-gray-600">
                  Accurate bounding boxes and polygon annotations for packaged
                  goods, groceries, electronics, apparel, cosmetics, furniture,
                  beverages, and consumer products.
                </p>

              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&w=900&q=80"
                alt="Shelf Monitoring"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  Shelf Monitoring Annotation
                </h3>

                <p className="text-gray-600">
                  Detect shelf layouts, product facings, empty spaces,
                  misplaced items, stock availability, and planogram compliance.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                alt="Checkout AI"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  Checkout AI Datasets
                </h3>

                <p className="text-gray-600">
                  Create datasets for cashier-less checkout,
                  self-checkout systems, shopping cart recognition,
                  and payment automation.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
                alt="Customer Analytics"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  Customer Behavior Analysis
                </h3>

                <p className="text-gray-600">
                  Annotate customer movement, shopping paths,
                  queue management, interaction zones,
                  and store engagement for retail analytics.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80"
                alt="Warehouse AI"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  Warehouse & Inventory Annotation
                </h3>

                <p className="text-gray-600">
                  Build AI datasets for warehouse automation,
                  barcode detection, pallet tracking,
                  inventory counting, and logistics optimization.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
                alt="OCR Annotation"
                className="w-full h-52 object-cover"
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold mb-3">
                  OCR & Document Annotation
                </h3>

                <p className="text-gray-600">
                  Annotate receipts, invoices,
                  product labels, shelf tags,
                  QR codes, and pricing information
                  for retail OCR systems.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
      {/* ===================================================== */}
      {/* RETAIL AI USE CASES */}
      {/* ===================================================== */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">

              Retail AI Applications

            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">

              Where Retail Computer Vision
              Creates Business Value

            </h2>

            <p className="text-lg leading-9 text-gray-600">

              Artificial Intelligence is reshaping the retail industry by making
              shopping faster, inventory smarter, and customer experiences more
              personalized. From supermarket chains to global e-commerce
              platforms, retailers rely on high-quality annotated datasets to
              train computer vision systems that operate accurately in real-world
              environments.

            </p>

          </div>

          {/* ---------- Use Case 1 ---------- */}

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1400&q=80"
                alt="Smart Shelf Monitoring"
                width={700}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <h3 className="text-4xl font-bold mb-6">

                Smart Shelf Monitoring

              </h3>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Retail shelves change every minute. Products are purchased,
                rearranged, misplaced, or restocked throughout the day.

                Computer vision enables retailers to automatically detect
                empty shelves, identify stock shortages, verify planogram
                compliance, and reduce lost sales caused by out-of-stock products.

              </p>

              <ul className="space-y-4">

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Planogram compliance monitoring</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Out-of-stock detection</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Product facing analysis</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Misplaced product identification</span>
                </li>

              </ul>

            </div>

          </div>

          {/* ---------- Use Case 2 ---------- */}

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

            <div className="order-2 lg:order-1">

              <h3 className="text-4xl font-bold mb-6">

                Cashier-less Checkout Systems

              </h3>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Modern retailers are investing heavily in autonomous checkout
                solutions where customers simply walk into a store, pick products,
                and leave without scanning items.

                These systems rely entirely on computer vision models trained
                using precisely annotated product datasets collected from
                multiple cameras and viewpoints.

              </p>

              <ul className="space-y-4">

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Multi-camera product tracking</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Shopping cart recognition</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Customer interaction detection</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Automated billing systems</span>
                </li>

              </ul>

            </div>

            <div className="order-1 lg:order-2">

              <Image
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80"
                alt="Cashierless Retail AI"
                width={700}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

          {/* ---------- Use Case 3 ---------- */}

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-28">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80"
                alt="Warehouse Automation"
                width={700}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <h3 className="text-4xl font-bold mb-6">

                Warehouse Automation

              </h3>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Large retail businesses process millions of products every day.
                Computer vision helps automate inventory counting, pallet
                recognition, package detection, and warehouse logistics.

                Our annotation services support AI models powering robotic
                warehouses and intelligent fulfillment centers.

              </p>

              <ul className="space-y-4">

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Package detection</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Pallet tracking</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Barcode recognition</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Inventory automation</span>
                </li>

              </ul>

            </div>

          </div>

          {/* ---------- Use Case 4 ---------- */}

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="order-2 lg:order-1">

              <h3 className="text-4xl font-bold mb-6">

                Visual Product Search

              </h3>

              <p className="text-lg leading-9 text-gray-600 mb-6">

                Today's shoppers increasingly expect to search using images instead
                of keywords. AI-powered visual search engines identify products
                from photographs, helping customers discover similar items within
                seconds.

                This technology depends on accurately annotated datasets covering
                multiple viewing angles, lighting conditions, packaging styles,
                and product variations.

              </p>

              <ul className="space-y-4">

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Fashion search</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Furniture search</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Cosmetics recognition</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle2 className="text-cyan-500 mt-1" />
                  <span>Product recommendation AI</span>
                </li>

              </ul>

            </div>

            <div className="order-1 lg:order-2">

              <Image
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=80"
                alt="Retail Visual Search"
                width={700}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>
      {/* ===================================================== */}
      {/* WHY ANNOTEXIA */}
      {/* ===================================================== */}

      <section className="py-28 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-20">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">
              Why Annotexia
            </span>

            <h2 className="text-5xl font-bold mt-5 mb-8">
              Trusted Annotation Partner for Retail AI Companies
            </h2>

            <p className="text-lg text-gray-600 leading-9">
              We don't simply label images—we build production-ready AI training datasets
              that improve model accuracy, reduce annotation costs, and accelerate AI deployment.
              Every project follows structured workflows, rigorous quality assurance, and
              transparent communication from start to finish.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-semibold mb-4">99%+ Annotation Accuracy</h3>
              <p className="text-gray-600 leading-8">
                Multi-level quality assurance ensures datasets remain accurate,
                consistent, and ready for production AI training.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-semibold mb-4">Enterprise Scalability</h3>
              <p className="text-gray-600 leading-8">
                From 5,000 product images to millions of retail frames,
                our annotation teams scale with your project requirements.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-semibold mb-4">Dedicated Project Manager</h3>
              <p className="text-gray-600 leading-8">
                One dedicated contact manages communication,
                milestones, quality reports, and project delivery.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-semibold mb-4">Secure Workflow</h3>
              <p className="text-gray-600 leading-8">
                NDA-based projects, secure infrastructure,
                controlled access, and confidential data handling.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-semibold mb-4">Flexible Output Formats</h3>
              <p className="text-gray-600 leading-8">
                COCO, YOLO, Pascal VOC, XML, JSON, CSV,
                Label Studio, CVAT, SuperAnnotate,
                Roboflow, or your custom format.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-2xl font-semibold mb-4">Fast Turnaround</h3>
              <p className="text-gray-600 leading-8">
                Efficient annotation pipelines reduce project timelines
                while maintaining enterprise-quality standards.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FREE SAMPLE */}
      {/* ===================================================== */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-cyan-50 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold mb-6">

              Test Our Annotation Quality Before You Commit

            </h2>

            <p className="text-lg text-gray-700 leading-9 max-w-3xl mx-auto mb-10">

              Choosing an annotation partner is an important decision.
              Instead of asking you to rely on promises, we invite you to
              evaluate our quality first.

              We provide a <strong>free sample dataset</strong> based on your project requirements.
              You'll receive professionally annotated data so your team can review
              our accuracy, consistency, and workflow—without any obligation.

            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">

              <div className="bg-white rounded-xl p-6">

                <h3 className="font-semibold text-xl mb-3">

                  ✓ Free Sample Annotation

                </h3>

                <p className="text-gray-600">

                  Evaluate our work before starting your project.

                </p>

              </div>

              <div className="bg-white rounded-xl p-6">

                <h3 className="font-semibold text-xl mb-3">

                  ✓ No Hidden Cost

                </h3>

                <p className="text-gray-600">

                  The sample dataset is provided completely free.

                </p>

              </div>

              <div className="bg-white rounded-xl p-6">

                <h3 className="font-semibold text-xl mb-3">

                  ✓ Production Quality

                </h3>

                <p className="text-gray-600">

                  The sample follows the same workflow used for enterprise projects.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* FAQ */}
      {/* ===================================================== */}

      <section className="py-28 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">

            Frequently Asked Questions

          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="font-semibold text-2xl mb-3">
                How can I trust Annotexia?
              </h3>

              <p className="text-gray-600 leading-8">
                We believe trust is earned through results. That's why we offer a
                free sample dataset so you can evaluate our annotation quality,
                accuracy, and consistency before committing to a project.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl mb-3">
                Do you provide free sample annotations?
              </h3>

              <p className="text-gray-600 leading-8">
                Yes. We provide a free sample dataset based on your project
                requirements so you can verify our annotation quality.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl mb-3">
                Which annotation formats do you support?
              </h3>

              <p className="text-gray-600 leading-8">
                We support COCO, YOLO, Pascal VOC, XML, JSON, CSV,
                Label Studio, CVAT, SuperAnnotate, Roboflow,
                and custom formats.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl mb-3">
                Can you handle enterprise-scale datasets?
              </h3>

              <p className="text-gray-600 leading-8">
                Yes. Our annotation teams are capable of processing
                thousands to millions of images, videos,
                and retail datasets.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-2xl mb-3">
                Do you sign NDAs?
              </h3>

              <p className="text-gray-600 leading-8">
                Absolutely. Client confidentiality is one of our highest priorities,
                and we routinely work under Non-Disclosure Agreements.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-28">

        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold mb-8">

            Ready to Build Better Retail AI Models?

          </h2>

          <p className="text-xl leading-9 text-gray-300 max-w-3xl mx-auto mb-10">

            Whether you're building visual search, cashier-less checkout,
            inventory automation, warehouse robotics, or shelf monitoring,
            Annotexia delivers enterprise-grade annotation services that help
            AI models perform reliably in real-world retail environments.

          </p>

          <div className="flex flex-wrap justify-center gap-6">

            <a
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
            >
              Request Free Consultation
            </a>

            <a
              href="/contact"
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition"
            >
              Get Free Sample Dataset
            </a>

          </div>

        </div>

      </section>

      </main>
  )
};