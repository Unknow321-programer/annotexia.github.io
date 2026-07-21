import Image from "next/image";

export const metadata = {
  title: "Data Labeling Services | AI & Machine Learning Training Data | Annotexia",
  description:
    "Professional data labeling services for AI, machine learning, computer vision, NLP, speech AI, autonomous vehicles, healthcare, retail, agriculture, robotics, and enterprise AI applications. High-quality, scalable, and secure training data solutions.",
};

export default function DataLabelingPage() {
  return (
    <main className="min-h-screen">

      {/* ====================================================== */}
      {/* HERO */}
      {/* ====================================================== */}

      <section className="bg-gradient-to-br from-orange-200 via-white to-cyan-500 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="uppercase tracking-[0.25em] text-cyan-600 font-semibold">
                AI Training Data Solutions
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-8">
                Professional Data Labeling Services for AI & Machine Learning
              </h1>

              <p className="text-xl text-gray-600 leading-9 mb-8">

                Build better Artificial Intelligence with high-quality
                labeled datasets. Annotexia provides scalable data
                labeling services for Computer Vision, Natural Language
                Processing (NLP), Speech AI, Autonomous Vehicles,
                Healthcare AI, Retail Analytics, Agriculture, Robotics,
                and enterprise machine learning applications.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-10">

                From pilot projects to enterprise-scale datasets
                containing millions of annotations, our experienced
                specialists deliver accurate, consistent, and production-ready
                training data that improves AI model performance while
                reducing development time.

              </p>

              <div className="flex flex-wrap gap-5">

                <a
                  href="/contact"
                  className="bg-cyan-600 hover:bg-cyan-700 transition text-white px-8 py-4 rounded-xl font-semibold"
                >
                  Request Free Consultation
                </a>

                <a
                  href="/services"
                  className="border border-gray-300 hover:border-cyan-600 transition px-8 py-4 rounded-xl font-semibold"
                >
                  Explore Our Services
                </a>

              </div>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80"
                alt="Professional AI data labeling services for machine learning"
                width={900}
                height={700}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>



      {/* ====================================================== */}
      {/* WHAT IS DATA LABELING */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
                alt="AI training data labeling workflow"
                width={900}
                height={700}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <span className="uppercase tracking-[0.25em] text-cyan-600 font-semibold">
                Understanding Data Labeling
              </span>

              <h2 className="text-4xl font-bold mt-5 mb-8">

                What is Data Labeling?

              </h2>

              <p className="text-gray-600 leading-9 mb-6">

                Every intelligent AI system begins with data. Before an
                Artificial Intelligence model can recognize people,
                understand language, detect diseases, identify products,
                or analyze videos, it must first learn from accurately
                labeled examples. This learning process is only possible
                through high-quality data labeling.

              </p>

              <p className="text-gray-600 leading-9 mb-6">

                Data labeling is the process of assigning meaningful
                information to raw datasets such as images, videos,
                text documents, audio recordings, LiDAR point clouds,
                and multimodal data. These annotations teach machine
                learning algorithms what objects exist, where they are
                located, how they relate to one another, and how they
                should be interpreted.

              </p>

              <p className="text-gray-600 leading-9 mb-6">

                Without accurate labeled data, even the most advanced
                AI models struggle to deliver reliable predictions.
                High-quality annotations directly influence model
                accuracy, reduce training errors, and improve overall
                system performance.

              </p>

              <p className="text-gray-600 leading-9">

                At Annotexia, we combine skilled human annotators,
                structured workflows, detailed annotation guidelines,
                and multi-level quality assurance to create datasets
                that organizations can confidently use to develop
                production-ready AI systems.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ====================================================== */}
      {/* WHY DATA LABELING MATTERS */}
      {/* ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[0.25em] text-cyan-600 font-semibold">
              Why It Matters
            </span>

            <h2 className="text-4xl font-bold mt-5 mb-6">

              Why High-Quality Data Labeling is Critical for AI Success

            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">

              The quality of your AI model depends on the quality of
              your training data. Accurate annotations help machine
              learning models recognize patterns faster, reduce bias,
              improve prediction accuracy, and accelerate deployment.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl border p-8">

              <h3 className="font-bold text-xl mb-4">
                Better Model Accuracy
              </h3>

              <p className="text-gray-600">

                Precise labels enable AI models to learn meaningful
                patterns, resulting in higher prediction accuracy.

              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">

              <h3 className="font-bold text-xl mb-4">
                Faster AI Development
              </h3>

              <p className="text-gray-600">

                High-quality datasets reduce retraining cycles,
                saving engineering time and development costs.

              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">

              <h3 className="font-bold text-xl mb-4">
                Reliable Predictions
              </h3>

              <p className="text-gray-600">

                Consistent annotation improves AI reliability across
                real-world production environments.

              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">

              <h3 className="font-bold text-xl mb-4">
                Enterprise Scalability
              </h3>

              <p className="text-gray-600">

                Structured labeling workflows support projects from
                thousands to millions of annotations.

              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ====================================================== */}
      {/* DATA LABELING SERVICES */}
      {/* ====================================================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[0.25em] text-cyan-600 font-semibold">
              Comprehensive Services
            </span>

            <h2 className="text-4xl font-bold mt-5 mb-6">
              Data Labeling Services for Every AI Project
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">

              Every machine learning project requires different types of
              training data. Our dedicated annotation specialists support
              computer vision, natural language processing, speech AI,
              autonomous systems, and multimodal artificial intelligence
              with scalable data labeling solutions.

            </p>

          </div>



          <div className="space-y-24">

            {/* IMAGE LABELING */}

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <Image
                  src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1400&q=80"
                  alt="Image labeling services for computer vision"
                  width={900}
                  height={700}
                  className="rounded-3xl shadow-xl"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold mb-6">

                  Image Labeling Services

                </h3>

                <p className="text-gray-600 leading-9 mb-6">

                  Image labeling forms the foundation of modern computer
                  vision. AI models learn to recognize objects, people,
                  products, animals, vehicles, medical structures,
                  infrastructure, and countless other visual elements
                  through accurately labeled images.

                </p>

                <p className="text-gray-600 leading-9 mb-8">

                  Annotexia creates high-quality image datasets using
                  project-specific guidelines that ensure consistency,
                  precision, and production-ready quality.

                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Bounding Box Annotation</li>
                  <li>✓ Polygon Annotation</li>
                  <li>✓ Semantic Segmentation</li>
                  <li>✓ Instance Segmentation</li>
                  <li>✓ Keypoint Annotation</li>
                  <li>✓ Image Classification</li>

                </ul>

              </div>

            </div>



            {/* VIDEO LABELING */}

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="order-2 lg:order-1">

                <h3 className="text-3xl font-bold mb-6">

                  Video Labeling Services

                </h3>

                <p className="text-gray-600 leading-9 mb-6">

                  Video datasets require frame-by-frame annotation,
                  temporal consistency, object tracking,
                  and event recognition.
                  Our experienced teams create reliable datasets
                  for autonomous systems,
                  surveillance,
                  sports analytics,
                  manufacturing,
                  robotics,
                  and intelligent transportation.

                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Object Tracking</li>
                  <li>✓ Player Tracking</li>
                  <li>✓ Ball Tracking</li>
                  <li>✓ Activity Recognition</li>
                  <li>✓ Event Detection</li>
                  <li>✓ Multi-object Tracking</li>

                </ul>

              </div>

              <div className="order-1 lg:order-2">

                <Image
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
                  alt="Video labeling services"
                  width={900}
                  height={700}
                  className="rounded-3xl shadow-xl"
                />

              </div>

            </div>



            {/* TEXT LABELING */}

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <Image
                  src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1400&q=80"
                  alt="Natural language processing data labeling"
                  width={900}
                  height={700}
                  className="rounded-3xl shadow-xl"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold mb-6">

                  Text Labeling Services

                </h3>

                <p className="text-gray-600 leading-9 mb-6">

                  Natural Language Processing models depend on
                  carefully labeled text datasets.
                  We support conversational AI,
                  chatbots,
                  search engines,
                  document intelligence,
                  large language models,
                  and enterprise NLP applications.

                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Named Entity Recognition (NER)</li>
                  <li>✓ Sentiment Analysis</li>
                  <li>✓ Intent Classification</li>
                  <li>✓ Topic Classification</li>
                  <li>✓ Document Categorization</li>
                  <li>✓ Question & Answer Labeling</li>

                </ul>

              </div>

            </div>



            {/* AUDIO */}

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div className="order-2 lg:order-1">

                <h3 className="text-3xl font-bold mb-6">

                  Audio Labeling Services

                </h3>

                <p className="text-gray-600 leading-9 mb-6">

                  Speech AI and conversational systems require
                  accurately labeled voice recordings.
                  We annotate speech,
                  conversations,
                  emotions,
                  acoustic events,
                  speaker identities,
                  and multilingual datasets.

                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Speech Transcription</li>
                  <li>✓ Speaker Diarization</li>
                  <li>✓ Intent Annotation</li>
                  <li>✓ Emotion Detection</li>
                  <li>✓ Audio Classification</li>
                  <li>✓ Timestamp Annotation</li>

                </ul>

              </div>

              <div className="order-1 lg:order-2">

                <Image
                  src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1400&q=80"
                  alt="Audio labeling services"
                  width={900}
                  height={700}
                  className="rounded-3xl shadow-xl"
                />

              </div>

            </div>



            {/* LIDAR */}

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80"
                  alt="LiDAR annotation services"
                  width={900}
                  height={700}
                  className="rounded-3xl shadow-xl"
                />

              </div>

              <div>

                <h3 className="text-3xl font-bold mb-6">

                  LiDAR Annotation

                </h3>

                <p className="text-gray-600 leading-9 mb-6">

                  Autonomous vehicles,
                  robotics,
                  mapping,
                  and industrial automation
                  rely on accurately labeled
                  three-dimensional point cloud datasets.

                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Cuboid Annotation</li>
                  <li>✓ Point Cloud Segmentation</li>
                  <li>✓ Sensor Fusion</li>
                  <li>✓ Object Classification</li>
                  <li>✓ Autonomous Driving Datasets</li>

                </ul>

              </div>

            </div>



            {/* MULTIMODAL */}

            <div className="bg-slate-50 rounded-3xl p-14">

              <h3 className="text-3xl font-bold mb-6">

                Multimodal Data Labeling

              </h3>

              <p className="text-gray-600 leading-9 mb-8">

                The latest generation of Artificial Intelligence models
                combines images,
                videos,
                documents,
                audio,
                LiDAR,
                and text into a unified learning system.

                Annotexia supports multimodal annotation workflows
                that connect multiple data sources into
                high-quality AI training datasets.

              </p>

              <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-white rounded-xl p-8 border">

                  <h4 className="font-bold mb-3">
                    Vision + Language
                  </h4>

                  <p className="text-gray-600">
                    Images paired with text prompts,
                    captions,
                    and descriptions.
                  </p>

                </div>

                <div className="bg-white rounded-xl p-8 border">

                  <h4 className="font-bold mb-3">
                    Audio + Text
                  </h4>

                  <p className="text-gray-600">
                    Speech aligned with transcripts
                    and intent labels.
                  </p>

                </div>

                <div className="bg-white rounded-xl p-8 border">

                  <h4 className="font-bold mb-3">
                    Video + Sensor Data
                  </h4>

                  <p className="text-gray-600">
                    Camera footage synchronized
                    with LiDAR,
                    GPS,
                    and telemetry.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      {/* Industries We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Industries We Support
            </span>

            <h2 className="text-4xl font-bold mb-6">
              Data Labeling Solutions Across Multiple Industries
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide industry-specific annotation services tailored to
              unique datasets, business requirements, and AI use cases across
              healthcare, autonomous driving, retail, agriculture, robotics,
              manufacturing, logistics, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Healthcare */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&auto=format&fit=crop"
                alt="Healthcare AI Data Labeling"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Healthcare AI
                </h3>

                <p className="text-gray-600">
                  Medical image annotation, radiology datasets,
                  pathology labeling, organ segmentation,
                  disease detection, and healthcare NLP.
                </p>
              </div>

            </div>

            {/* Automotive */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80&auto=format&fit=crop"
                alt="Autonomous Driving Data Labeling"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Autonomous Driving
                </h3>

                <p className="text-gray-600">
                  Bounding boxes, lane detection, LiDAR
                  annotation, traffic signs, pedestrians,
                  vehicles, and road scene segmentation.
                </p>
              </div>

            </div>

            {/* Retail */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700&q=80&auto=format&fit=crop"
                alt="Retail Product Annotation"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Retail & E-commerce
                </h3>

                <p className="text-gray-600">
                  Product recognition, shelf monitoring,
                  OCR, barcode annotation, inventory AI,
                  and visual search datasets.
                </p>
              </div>

            </div>

            {/* Agriculture */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80&auto=format&fit=crop"
                alt="Agriculture Data Annotation"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Agriculture
                </h3>

                <p className="text-gray-600">
                  Crop monitoring, disease detection,
                  drone imagery annotation, weed detection,
                  field segmentation, and precision farming.
                </p>
              </div>

            </div>

            {/* Sports */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=700&q=80&auto=format&fit=crop"
                alt="Sports Video Annotation"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Sports Analytics
                </h3>

                <p className="text-gray-600">
                  Player tracking, ball tracking,
                  event annotation, pose estimation,
                  tactical analysis, and performance AI.
                </p>
              </div>

            </div>

            {/* Robotics */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border hover:shadow-xl transition">

              <img
                src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?w=700&q=80&auto=format&fit=crop"
                alt="Robotics Vision Annotation"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Robotics
                </h3>

                <p className="text-gray-600">
                  Robot perception, grasp detection,
                  navigation datasets, warehouse automation,
                  SLAM, and industrial robotics.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* Industries We Serve */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Industries Using Our Data Labeling Services
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We support organizations across multiple industries by providing
              domain-specific datasets that improve AI accuracy, automation,
              and business intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="rounded-xl overflow-hidden shadow-md border bg-white">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                alt="Healthcare AI Data Labeling"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Healthcare</h3>
                <p className="text-gray-600">
                  Medical imaging, radiology, pathology, diagnostics,
                  disease detection, and clinical AI datasets.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border bg-white">
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=900&q=80"
                alt="Retail AI Data Labeling"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Retail & E-commerce</h3>
                <p className="text-gray-600">
                  Product recognition, shelf monitoring,
                  OCR, checkout AI, and inventory automation.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border bg-white">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
                alt="Agriculture Data Labeling"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Agriculture</h3>
                <p className="text-gray-600">
                  Crop monitoring, disease detection,
                  drone imagery, precision farming,
                  and yield prediction.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border bg-white">
              <img
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80"
                alt="Sports Analytics Data Labeling"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Sports Analytics</h3>
                <p className="text-gray-600">
                  Player tracking, event detection,
                  ball tracking, pose estimation,
                  and tactical analysis.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border bg-white">
              <img
                src="https://images.unsplash.com/photo-1561144257-e32e8efc6c4f?auto=format&fit=crop&w=900&q=80"
                alt="Robotics AI Data Labeling"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Robotics</h3>
                <p className="text-gray-600">
                  Robot vision, grasp detection,
                  warehouse automation,
                  industrial robotics,
                  and autonomous systems.
                </p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden shadow-md border bg-white">
              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=900&q=80"
                alt="Automotive AI Data Labeling"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Automotive</h3>
                <p className="text-gray-600">
                  Autonomous driving datasets,
                  lane detection,
                  traffic signs,
                  LiDAR annotation,
                  and ADAS.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>



      {/* Our Process */}

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-6">
              Our AI Data Labeling Workflow
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every dataset passes through a structured workflow designed
              to maximize annotation accuracy, consistency, and scalability.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-10">

            <div className="bg-white rounded-xl shadow-md border p-8">
              <div className="text-4xl font-bold text-blue-600 mb-5">01</div>

              <h3 className="font-bold text-xl mb-4">
                Requirement Analysis
              </h3>

              <p className="text-gray-600">
                We understand your AI objectives, annotation guidelines,
                ontology, labeling rules, output format,
                and quality expectations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border p-8">
              <div className="text-4xl font-bold text-blue-600 mb-5">02</div>

              <h3 className="font-bold text-xl mb-4">
                Dataset Preparation
              </h3>

              <p className="text-gray-600">
                Images, videos, text,
                LiDAR, audio, or documents
                are organized before annotation
                begins.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border p-8">
              <div className="text-4xl font-bold text-blue-600 mb-5">03</div>

              <h3 className="font-bold text-xl mb-4">
                Expert Annotation
              </h3>

              <p className="text-gray-600">
                Skilled annotators create
                accurate labels using
                industry-standard annotation
                platforms and client guidelines.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md border p-8">
              <div className="text-4xl font-bold text-blue-600 mb-5">04</div>

              <h3 className="font-bold text-xl mb-4">
                QA & Delivery
              </h3>

              <p className="text-gray-600">
                Every project undergoes
                multi-level quality reviews,
                validation, and secure delivery
                in your preferred format.
              </p>
            </div>

          </div>

        </div>
      </section>
      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                What is data labeling?
              </h3>

              <p className="text-gray-600 leading-8">
                Data labeling is the process of adding meaningful tags or
                annotations to raw datasets such as images, videos, text,
                audio, or LiDAR data. These labels enable AI and machine
                learning models to recognize patterns and make accurate
                predictions.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Which annotation formats do you support?
              </h3>

              <p className="text-gray-600 leading-8">
                We support COCO, YOLO, Pascal VOC, LabelMe, CVAT, JSON,
                XML, CSV, TXT, KITTI, Open Images, custom schemas, and
                project-specific formats required by your machine learning
                pipeline.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Can you work with our annotation platform?
              </h3>

              <p className="text-gray-600 leading-8">
                Yes. Our annotation teams work with Labelbox,
                SuperAnnotate, CVAT, Label Studio, V7 Darwin, Roboflow,
                Encord, Scale AI, Dataloop, and many custom annotation
                platforms.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                How do you ensure annotation quality?
              </h3>

              <p className="text-gray-600 leading-8">
                Every project follows detailed annotation guidelines,
                multiple quality review stages, senior QA verification,
                random sampling, and continuous feedback loops to maintain
                consistent annotation accuracy.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                Can you scale to millions of annotations?
              </h3>

              <p className="text-gray-600 leading-8">
                Absolutely. Annotexia supports startups, enterprise AI
                teams, and research organizations with scalable annotation
                teams capable of handling projects ranging from hundreds to
                millions of labeled data points.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Explore Related Annotation Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <a
              href="/services/image-annotation"
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-3">
                Image Annotation
              </h3>

              <p className="text-gray-600">
                Bounding boxes, polygons, segmentation, landmarks,
                OCR, and classification.
              </p>
            </a>

            <a
              href="/services/video-annotation"
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-3">
                Video Annotation
              </h3>

              <p className="text-gray-600">
                Object tracking, event detection, activity recognition,
                and sports analytics.
              </p>
            </a>

            <a
              href="/services/text-annotation"
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-3">
                Text Annotation
              </h3>

              <p className="text-gray-600">
                NLP datasets including sentiment analysis, NER,
                intent detection, and classification.
              </p>
            </a>

            <a
              href="/services/audio-annotation"
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-3">
                Audio Annotation
              </h3>

              <p className="text-gray-600">
                Speech transcription, speaker labeling,
                emotion recognition, and acoustic events.
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Build Better AI with High-Quality Data Labeling
          </h2>

          <p className="text-xl text-blue-100 leading-8 mb-10">
            Whether you're training computer vision systems,
            conversational AI, autonomous vehicles, healthcare AI,
            retail analytics, robotics, agriculture solutions, or
            enterprise machine learning models, Annotexia provides
            scalable, accurate, and secure data labeling services
            tailored to your business goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Request Free Consultation
            </a>

            <a
              href="/industries"
              className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Explore Industries
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}
