import Image from "next/image";

export const metadata = {
  title: "Video Annotation Services | AI Video Labeling Company | Annotexia",
  description:
    "Professional video annotation services for AI and computer vision. Object tracking, frame-by-frame annotation, action recognition, event detection, semantic segmentation, and autonomous vehicle datasets.",
  keywords: [
    "Video Annotation Services",
    "Video Labeling",
    "Object Tracking",
    "Frame Annotation",
    "Video Dataset",
    "Computer Vision",
    "AI Training Data",
    "Video Annotation Company",
    "Machine Learning Datasets",
  ],
};

export default function VideoAnnotationPage() {
  return (
    <main className="min-h-screen">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-orange-200 via-white to-cyan-500 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold mb-6">
                AI Video Training Data
              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">

                Professional
                <span className="text-blue-600">
                  {" "}Video Annotation{" "}
                </span>
                Services for AI & Computer Vision

              </h1>

              <p className="mt-8 text-xl text-gray-600 leading-8">

                Annotexia delivers enterprise-grade video annotation
                services that help organizations build accurate AI
                models for autonomous vehicles, surveillance,
                robotics, healthcare, sports analytics, retail,
                manufacturing, agriculture, and intelligent
                automation systems.

              </p>

              <p className="mt-6 text-lg text-gray-600 leading-8">

                Our experienced annotation specialists provide
                frame-by-frame labeling, multi-object tracking,
                activity recognition, semantic segmentation,
                lane annotation, and custom video labeling
                solutions tailored to your AI project.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
                >
                  Get Free Consultation
                </a>

                <a
                  href="/services"
                  className="border border-gray-300 hover:border-gray-500 px-8 py-4 rounded-xl font-semibold transition"
                >
                  Explore Services
                </a>

              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">

                <div>
                  <h3 className="text-3xl font-bold text-blue-600">
                    99%
                  </h3>

                  <p className="text-sm text-gray-600">
                    Annotation Accuracy
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-600">
                    50K+
                  </h3>

                  <p className="text-sm text-gray-600">
                    Hours Annotated
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-600">
                    20+
                  </h3>

                  <p className="text-sm text-gray-600">
                    Annotation Experts
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-blue-600">
                    24/7
                  </h3>

                  <p className="text-sm text-gray-600">
                    Project Support
                  </p>
                </div>

              </div>

            </div>

            <div>

              <Image
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                alt="Video Annotation Services"
                width={1200}
                height={800}
                className="rounded-3xl shadow-2xl"
              />

            </div>

          </div>

        </div>

      </section>



      {/* ================= INTRODUCTION ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="AI Video Dataset"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl"
              />

            </div>

            <div>

              <h2 className="text-4xl font-bold mb-8">

                What is Video Annotation?

              </h2>

              <p className="text-gray-600 leading-8 mb-6">

                Video annotation is the process of labeling objects,
                events, movements, and activities across consecutive
                video frames. Unlike image annotation, video
                annotation enables AI systems to understand temporal
                relationships, object movement, behavior, and scene
                changes over time.

              </p>

              <p className="text-gray-600 leading-8 mb-6">

                Video datasets are fundamental for developing
                autonomous vehicles, intelligent surveillance,
                robotics, action recognition, sports analytics,
                industrial automation, healthcare AI,
                drone analytics, and smart city applications.

              </p>

              <p className="text-gray-600 leading-8">

                At Annotexia, our annotation experts create
                high-quality video datasets that help AI models
                detect moving objects, understand complex scenes,
                analyze activities, and improve real-world
                decision-making accuracy.

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= SERVICES ================= */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-16">

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Our Expertise
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Comprehensive Video Annotation Services
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              Annotexia provides end-to-end video annotation services for
              computer vision, machine learning, deep learning, and AI
              applications. We support custom annotation guidelines and
              multiple output formats to meet enterprise and research
              requirements.
            </p>

          </div>

          <div className="space-y-20">

            {/* Object Tracking */}

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <Image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
                alt="Object Tracking Video Annotation"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-3xl font-bold mb-6">
                  Object Tracking Annotation
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  Object tracking follows a target object continuously
                  throughout an entire video sequence. Every frame is
                  annotated so AI models can understand object movement,
                  trajectories, speed, interactions, and spatial behavior.
                </p>

                <p className="text-gray-600 leading-8 mb-6">
                  Object tracking is widely used in autonomous driving,
                  surveillance, warehouse automation, drone inspection,
                  robotics, sports analytics, logistics, and intelligent
                  transportation systems.
                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Vehicle Tracking</li>
                  <li>✓ Person Tracking</li>
                  <li>✓ Animal Tracking</li>
                  <li>✓ Drone Object Tracking</li>
                  <li>✓ Sports Player Tracking</li>

                </ul>

              </div>

            </div>



            {/* Multi Object Tracking */}

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <h3 className="text-3xl font-bold mb-6">
                  Multi-Object Tracking (MOT)
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  Multi-object tracking assigns a unique identity to each
                  object and maintains that identity across thousands of
                  video frames. This enables AI systems to understand
                  interactions between multiple moving objects.
                </p>

                <p className="text-gray-600 leading-8 mb-6">
                  MOT datasets are essential for autonomous vehicles,
                  crowd analytics, retail analytics, sports AI,
                  warehouse robotics, manufacturing automation,
                  airport monitoring, and smart city projects.
                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Persistent Object IDs</li>
                  <li>✓ Occlusion Handling</li>
                  <li>✓ Crowd Tracking</li>
                  <li>✓ Multiple Vehicle Tracking</li>
                  <li>✓ Athlete Tracking</li>

                </ul>

              </div>

              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                alt="Multi Object Tracking"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl"
              />

            </div>



            {/* Frame by Frame */}

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Frame by Frame Annotation"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-3xl font-bold mb-6">
                  Frame-by-Frame Annotation
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  Every video frame is individually annotated to create
                  extremely accurate training datasets. This technique
                  provides consistent labels across long video sequences
                  and improves model robustness.
                </p>

                <p className="text-gray-600 leading-8 mb-6">
                  Frame-level annotation is ideal for safety-critical AI
                  systems where every object must be precisely labeled
                  without missing transitions between frames.
                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Bounding Boxes</li>
                  <li>✓ Polygon Annotation</li>
                  <li>✓ Cuboids</li>
                  <li>✓ Semantic Labels</li>
                  <li>✓ Pixel Precision</li>

                </ul>

              </div>

            </div>



            {/* Segmentation */}

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <h3 className="text-3xl font-bold mb-6">
                  Video Segmentation
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  We provide semantic segmentation and instance
                  segmentation for moving objects, enabling AI models
                  to understand complex environments with pixel-level
                  accuracy.
                </p>

                <p className="text-gray-600 leading-8 mb-6">
                  Segmentation datasets improve scene understanding for
                  autonomous driving, robotics, agriculture, industrial
                  automation, healthcare imaging, and intelligent
                  surveillance systems.
                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Semantic Segmentation</li>
                  <li>✓ Instance Segmentation</li>
                  <li>✓ Pixel-Level Labels</li>
                  <li>✓ Scene Understanding</li>
                  <li>✓ Background Separation</li>

                </ul>

              </div>

              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Video Segmentation"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>
            {/* ================= ADVANCED VIDEO ANNOTATION ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-16">

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Advanced Annotation Solutions
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Advanced Video Annotation Capabilities
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              Beyond traditional object tracking, Annotexia provides
              advanced annotation services for activity recognition,
              human pose estimation, event detection, autonomous driving,
              and AI-powered video intelligence applications.
            </p>

          </div>

          <div className="space-y-20">

            {/* Action Recognition */}

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <h3 className="text-3xl font-bold mb-6">
                  Action Recognition Annotation
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  Action recognition focuses on labeling activities
                  performed by humans, animals, or machines throughout
                  a video sequence. AI models learn to recognize actions
                  instead of only detecting objects.
                </p>

                <p className="text-gray-600 leading-8 mb-6">
                  This annotation is widely used in healthcare,
                  sports analytics, security surveillance,
                  industrial safety monitoring, workplace compliance,
                  fitness applications, and human behavior analysis.
                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Walking</li>
                  <li>✓ Running</li>
                  <li>✓ Jumping</li>
                  <li>✓ Fighting Detection</li>
                  <li>✓ Human Activities</li>

                </ul>

              </div>

              <Image
                src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80"
                alt="Action Recognition Annotation"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl"
              />

            </div>



            {/* Event Detection */}

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <Image
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80"
                alt="Event Detection Annotation"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-3xl font-bold mb-6">
                  Event Detection Annotation
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  Event annotation labels meaningful occurrences within
                  a video timeline. Instead of only identifying objects,
                  AI learns exactly when specific events begin, end,
                  and interact with other events.
                </p>

                <p className="text-gray-600 leading-8 mb-6">
                  Event detection datasets are extensively used for
                  sports analytics, smart surveillance, manufacturing,
                  healthcare monitoring, retail intelligence,
                  autonomous driving, and industrial automation.
                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Goals & Assists</li>
                  <li>✓ Vehicle Collision</li>
                  <li>✓ Fall Detection</li>
                  <li>✓ Fire Detection</li>
                  <li>✓ Security Incidents</li>

                </ul>

              </div>

            </div>



            {/* Pose Tracking */}

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <div>

                <h3 className="text-3xl font-bold mb-6">
                  Human Pose Tracking
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  Human pose tracking labels body joints and skeletal
                  keypoints across video frames, enabling AI models
                  to understand posture, movement, gestures,
                  biomechanics, and interactions.
                </p>

                <p className="text-gray-600 leading-8 mb-6">
                  Pose estimation datasets are used in sports coaching,
                  physiotherapy, fitness platforms, augmented reality,
                  healthcare, robotics, workplace safety,
                  and motion analysis systems.
                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ 17 Keypoints</li>
                  <li>✓ Full Body Tracking</li>
                  <li>✓ Face Landmarks</li>
                  <li>✓ Hand Tracking</li>
                  <li>✓ Motion Analysis</li>

                </ul>

              </div>

              <Image
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80"
                alt="Pose Estimation"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl"
              />

            </div>



            {/* Lane Annotation */}

            <div className="grid lg:grid-cols-2 gap-12 items-center">

              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
                alt="Lane Annotation"
                width={1200}
                height={800}
                className="rounded-2xl shadow-xl"
              />

              <div>

                <h3 className="text-3xl font-bold mb-6">
                  Lane & Road Annotation
                </h3>

                <p className="text-gray-600 leading-8 mb-5">
                  Lane annotation helps autonomous vehicles understand
                  road boundaries, lane markings, traffic signs,
                  pedestrian crossings, road edges, intersections,
                  and driving conditions.
                </p>

                <p className="text-gray-600 leading-8 mb-6">
                  These datasets are essential for autonomous driving,
                  ADAS systems, intelligent transportation,
                  HD map generation, and road scene understanding.
                </p>

                <ul className="space-y-3 text-gray-700">

                  <li>✓ Lane Markings</li>
                  <li>✓ Road Boundaries</li>
                  <li>✓ Traffic Signs</li>
                  <li>✓ Crosswalks</li>
                  <li>✓ Driving Scene Labels</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ================= INDUSTRIES ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-16">

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Industries
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Industries We Support
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              Our video annotation specialists support organizations
              across multiple industries by delivering reliable,
              scalable, and high-quality datasets for AI development.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-xl border p-8">
              <h3 className="font-bold text-xl mb-3">
                Autonomous Vehicles
              </h3>
              <p className="text-gray-600">
                Road scene understanding, vehicle tracking,
                lane detection, pedestrian tracking,
                traffic sign annotation, and ADAS datasets.
              </p>
            </div>

            <div className="bg-white rounded-xl border p-8">
              <h3 className="font-bold text-xl mb-3">
                Sports Analytics
              </h3>
              <p className="text-gray-600">
                Player tracking, ball tracking,
                tactical analysis, event detection,
                pose estimation, and performance analytics.
              </p>
            </div>

            <div className="bg-white rounded-xl border p-8">
              <h3 className="font-bold text-xl mb-3">
                Retail Intelligence
              </h3>
              <p className="text-gray-600">
                Customer behavior analysis,
                store monitoring,
                inventory tracking,
                shelf analytics,
                and checkout automation.
              </p>
            </div>

            <div className="bg-white rounded-xl border p-8">
              <h3 className="font-bold text-xl mb-3">
                Security & Surveillance
              </h3>
              <p className="text-gray-600">
                Incident detection,
                crowd monitoring,
                perimeter security,
                suspicious activity detection,
                and public safety AI.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* ================= PROCESS ================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-4xl mx-auto mb-16">

            <span className="text-blue-600 font-semibold uppercase tracking-wider">
              Workflow
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Our Video Annotation Process
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="border rounded-xl p-8">

              <div className="text-4xl font-bold text-blue-600 mb-4">
                01
              </div>

              <h3 className="font-bold text-xl mb-3">
                Requirement Analysis
              </h3>

              <p className="text-gray-600">
                Understand project goals,
                annotation guidelines,
                output formats,
                and AI model requirements.
              </p>

            </div>

            <div className="border rounded-xl p-8">

              <div className="text-4xl font-bold text-blue-600 mb-4">
                02
              </div>

              <h3 className="font-bold text-xl mb-3">
                Dataset Preparation
              </h3>

              <p className="text-gray-600">
                Organize videos,
                preprocess files,
                and configure annotation tools
                for maximum efficiency.
              </p>

            </div>

            <div className="border rounded-xl p-8">

              <div className="text-4xl font-bold text-blue-600 mb-4">
                03
              </div>

              <h3 className="font-bold text-xl mb-3">
                Annotation
              </h3>

              <p className="text-gray-600">
                Expert annotators create
                accurate labels following
                detailed project guidelines.
              </p>

            </div>

            <div className="border rounded-xl p-8">

              <div className="text-4xl font-bold text-blue-600 mb-4">
                04
              </div>

              <h3 className="font-bold text-xl mb-3">
                QA & Delivery
              </h3>

              <p className="text-gray-600">
                Multiple quality reviews,
                validation,
                consistency checks,
                and final dataset delivery.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= TOOLS ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Annotation Tools We Work With
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

            {[
              "CVAT",
              "Label Studio",
              "SuperAnnotate",
              "Labelbox",
              "Roboflow",
              "V7 Darwin",
              "Supervisely",
              "Custom Annotation Platforms"
            ].map((tool) => (

              <div
                key={tool}
                className="bg-white border rounded-xl p-6 text-center font-semibold"
              >
                {tool}
              </div>

            ))}

          </div>

        </div>

      </section>



      {/* ================= QUALITY ================= */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold mb-6">
              Our Quality Assurance Process
            </h2>

            <p className="text-lg text-gray-600">
              Every dataset passes multiple validation stages before delivery.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border rounded-xl p-8">

              <h3 className="font-bold text-xl mb-4">
                Annotation Review
              </h3>

              <p className="text-gray-600">
                Independent reviewers verify
                annotations against project
                guidelines and edge cases.
              </p>

            </div>

            <div className="border rounded-xl p-8">

              <h3 className="font-bold text-xl mb-4">
                Quality Metrics
              </h3>

              <p className="text-gray-600">
                Accuracy,
                consistency,
                completeness,
                temporal precision,
                and label validation.
              </p>

            </div>

            <div className="border rounded-xl p-8">

              <h3 className="font-bold text-xl mb-4">
                Continuous Feedback
              </h3>

              <p className="text-gray-600">
                Feedback loops continuously improve
                annotation quality throughout the project.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= FAQ ================= */}

      <section className="bg-gray-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>

              <h3 className="font-bold text-xl mb-3">
                What is video annotation?
              </h3>

              <p className="text-gray-600">
                Video annotation is the process of labeling objects,
                people, events, activities, and movements frame-by-frame
                so AI models can understand video content accurately.
              </p>

            </div>

            <div>

              <h3 className="font-bold text-xl mb-3">
                Which annotation formats do you support?
              </h3>

              <p className="text-gray-600">
                We support COCO, YOLO, Pascal VOC, JSON, XML,
                CSV, custom schemas, and client-specific formats.
              </p>

            </div>

            <div>

              <h3 className="font-bold text-xl mb-3">
                Can you annotate large video datasets?
              </h3>

              <p className="text-gray-600">
                Yes. Our scalable annotation teams can handle
                enterprise-scale video datasets containing
                thousands of hours of footage.
              </p>

            </div>

            <div>

              <h3 className="font-bold text-xl mb-3">
                Which industries use video annotation?
              </h3>

              <p className="text-gray-600">
                Autonomous driving, sports analytics,
                healthcare, retail, robotics,
                agriculture, manufacturing,
                security, and smart city applications.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= CTA ================= */}

      <section className="bg-gray-900 text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-6">
            Ready to Build Better AI with High-Quality Video Annotation?
          </h2>

          <p className="text-xl text-gray-300 leading-8 mb-10">

            Annotexia helps AI companies create accurate,
            scalable, and production-ready video annotation
            datasets for computer vision and machine learning.

          </p>

          <a
            href="/contact"
            className="inline-flex items-center bg-white text-black px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Request a Free Consultation
          </a>

        </div>

      </section>

    </main>
  );
}
