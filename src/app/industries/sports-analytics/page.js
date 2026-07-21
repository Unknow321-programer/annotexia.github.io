import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Sports Video Annotation Services | Player Tracking, Ball Tracking & Sports Analytics | Annotexia",

  description:
    "Professional sports video annotation services for football, soccer, basketball, cricket, tennis, hockey and AI-powered sports analytics. We provide player tracking, ball tracking, event tagging, pose estimation and computer vision datasets for sports technology companies worldwide.",

  keywords: [
    "sports annotation services",
    "sports video annotation",
    "football player tracking",
    "soccer annotation company",
    "sports AI datasets",
    "sports computer vision",
    "player tracking annotation",
    "ball tracking annotation",
    "sports event tagging",
    "sports video labeling",
    "AI sports analytics datasets",
    "football tracking datasets",
    "cricket annotation",
    "basketball tracking",
    "sports machine learning datasets",
    "computer vision sports"
  ],

  openGraph: {
    title:
      "Sports Video Annotation Services | Annotexia",

    description:
      "Enterprise sports video annotation services for AI-powered sports analytics, player tracking, ball tracking and event detection.",

    images: [
      "/images/industries/sports/sports-hero.webp",
    ],
  },
};

export default function SportsAnalyticsPage() {

  return (

    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-gradient-to-b from-green-400 to-blue-500 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-cyan-700 font-medium mb-6">

                Sports AI • Computer Vision • Video Annotation

              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">

                Sports Video Annotation Services

                for AI Powered Sports Analytics

              </h1>

              <p className="text-xl text-gray-300 leading-9 mb-8">

                Transform raw match footage into structured AI training datasets with
                professional sports annotation services from Annotexia.

                We help sports technology companies, AI startups,
                professional clubs, broadcasters and research organizations
                develop intelligent computer vision models through
                high-quality sports data annotation.

              </p>

              <div className="flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="bg-cyan-600 hover:bg-cyan-300 transition text-white px-8 py-4 rounded-lg font-semibold"
                >

                  Request Free Consultation

                </Link>

                <Link
                  href="/services"
                  className="border border-black-300 hover:border-cyan-600 px-8 py-4 rounded-lg font-semibold"
                >

                  Explore Services

                </Link>

              </div>

            </div>

            {/* RIGHT */}

            <div className="relative">

              <Image

                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80"

                alt="Sports Video Annotation Services"

                width={720}

                height={620}

                className="rounded-3xl shadow-2xl"

                priority

              />

            </div>

          </div>

        </div>

      </section>
      {/* STORY */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <Image

                src="https://images.unsplash.com/photo-1565992441121-4367c2967103?auto=format&fit=crop&w=1200&q=80"

                alt="Player Tracking Annotation"

                width={650}

                height={520}

                className="rounded-3xl shadow-lg"

              />

            </div>

            <div>

              <h2 className="text-4xl font-bold mb-8">

                Building the Future of Sports Intelligence

              </h2>

              <p className="text-lg text-gray-600 leading-9 mb-6">

                Every professional sporting event generates thousands of valuable
                moments every minute. Player movements, tactical formations,
                passing sequences, ball trajectories, defensive transitions,
                goal opportunities and positional changes all contain insights
                that can transform coaching, broadcasting and fan engagement.

              </p>

              <p className="text-lg text-gray-600 leading-9 mb-6">

                Artificial Intelligence has changed the way clubs,
                sports analysts and broadcasters understand these moments.
                However, every intelligent sports analytics platform begins
                with one critical component — accurately annotated training data.

              </p>

              <p className="text-lg text-gray-600 leading-9">

                At Annotexia, we convert raw sports footage into structured,
                high-quality datasets that enable computer vision models to
                recognize players, track ball movement, understand tactical
                patterns and automatically detect key match events with
                exceptional accuracy.

              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ====================== */}
      {/* INDUSTRY STATS */}
      {/* ====================== */}

      <section className="bg-slate-300 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="text-cyan-600 font-semibold uppercase tracking-wider">
              Why Sports AI Matters
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Transform Every Match into Actionable AI Insights
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">

              Sports organizations now rely on Artificial Intelligence to
              improve athlete performance, automate video analysis,
              generate tactical insights and create immersive fan
              experiences. High-quality annotated datasets are the
              foundation behind every successful sports AI platform.

            </p>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow-md p-8 text-center">

              <h3 className="text-5xl font-bold text-cyan-600 mb-3">
                99%
              </h3>

              <p className="text-gray-600">
                Annotation Accuracy
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 text-center">

              <h3 className="text-5xl font-bold text-cyan-600 mb-3">
                25+
              </h3>

              <p className="text-gray-600">
                Sports Supported
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 text-center">

              <h3 className="text-5xl font-bold text-cyan-600 mb-3">
                Millions
              </h3>

              <p className="text-gray-600">
                Video Frames Processed
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 text-center">

              <h3 className="text-5xl font-bold text-cyan-600 mb-3">
                24/7
              </h3>

              <p className="text-gray-600">
                Dedicated Production Teams
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ====================== */}
      {/* SERVICES */}
      {/* ====================== */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="text-cyan-600 font-semibold uppercase tracking-widest">

              Our Expertise

            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">

              Sports Annotation Services

            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">

              Our annotation specialists create production-ready datasets
              for AI-powered sports analytics platforms, automated
              broadcasting systems, performance analysis software,
              sports betting intelligence and computer vision research.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* CARD */}

            <div className="border rounded-3xl p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold mb-4">

                ⚽ Player Tracking Annotation

              </h3>

              <p className="text-gray-600 leading-8">

                Frame-by-frame tracking of every player throughout the match.
                Generate accurate movement trajectories, positional heatmaps,
                running distance analytics and tactical formations for football,
                basketball, hockey and many other sports.

              </p>

            </div>



            <div className="border rounded-3xl p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold mb-4">

                🏀 Ball Tracking

              </h3>

              <p className="text-gray-600 leading-8">

                High-frequency ball tracking enables AI models to learn ball
                trajectory prediction, possession analysis, shot detection,
                pass completion and automated highlight generation.

              </p>

            </div>



            <div className="border rounded-3xl p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold mb-4">

                🎯 Event Detection

              </h3>

              <p className="text-gray-600 leading-8">

                Annotate goals, assists, tackles, passes,
                fouls, offsides, penalties, corners,
                free kicks, substitutions and hundreds
                of customizable sporting events.

              </p>

            </div>



            <div className="border rounded-3xl p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold mb-4">

                🧍 Pose Estimation

              </h3>

              <p className="text-gray-600 leading-8">

                Human keypoint annotation for biomechanics,
                injury prevention, movement recognition,
                player performance evaluation and sports science.

              </p>

            </div>



            <div className="border rounded-3xl p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold mb-4">

                👕 Jersey Number Recognition

              </h3>

              <p className="text-gray-600 leading-8">

                Label player identities, jersey numbers,
                team affiliation and role classification for
                automated player recognition systems.

              </p>

            </div>



            <div className="border rounded-3xl p-8 hover:shadow-xl transition">

              <h3 className="text-2xl font-bold mb-4">

                📊 Tactical Position Analysis

              </h3>

              <p className="text-gray-600 leading-8">

                Generate structured positional datasets that enable AI
                to understand formations, spacing, defensive structure,
                passing lanes and attacking movement.

              </p>

            </div>

          </div>

        </div>

      </section>




      {/* ====================== */}
      {/* WORKFLOW */}
      {/* ====================== */}

      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">

              How We Deliver Sports AI Datasets

            </h2>

            <p className="text-gray-600 mt-6 text-lg max-w-4xl mx-auto">

              Every project follows a structured production workflow
              to ensure consistency, scalability and enterprise-grade quality.

            </p>

          </div>

          <div className="grid md:grid-cols-5 gap-8">

            <div className="bg-white rounded-2xl shadow-md p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-5">

                01

              </div>

              <h3 className="font-bold text-xl mb-3">

                Requirement Analysis

              </h3>

              <p className="text-gray-600">

                Understand sports type,
                events, annotation guidelines,
                output format and KPIs.

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-5">

                02

              </div>

              <h3 className="font-bold text-xl mb-3">

                Pilot Dataset

              </h3>

              <p className="text-gray-600">

                We prepare a free sample dataset
                to validate annotation quality before
                large-scale production begins.

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-5">

                03

              </div>

              <h3 className="font-bold text-xl mb-3">

                Production

              </h3>

              <p className="text-gray-600">

                Dedicated annotation specialists
                process millions of sports frames
                using standardized workflows.

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-5">

                04

              </div>

              <h3 className="font-bold text-xl mb-3">

                Quality Review

              </h3>

              <p className="text-gray-600">

                Multiple QA reviewers verify
                annotation consistency,
                accuracy and project guidelines.

              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-5">

                05

              </div>

              <h3 className="font-bold text-xl mb-3">

                Dataset Delivery

              </h3>

              <p className="text-gray-600">

                Receive production-ready
                datasets in YOLO, COCO,
                CVAT XML, JSON or custom formats.

              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ======================================================= */}
      {/* SPORTS WE SUPPORT */}
      {/* ======================================================= */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <span className="text-cyan-600 uppercase tracking-widest font-semibold">
              Sports We Support
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              AI Annotation Solutions for Every Major Sport
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">
              Every sport presents unique challenges for computer vision models.
              Player density, ball speed, camera movement, lighting conditions,
              occlusions and tactical complexity require specialized annotation
              strategies. Our experienced annotation teams understand these
              differences and produce consistent, production-ready datasets
              for sports AI companies worldwide.
            </p>

          </div>

        </div>

      </section>



      {/* ======================================================= */}
      {/* FOOTBALL */}
      {/* ======================================================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80"
                alt="Football Player Tracking AI Annotation"
                className="rounded-3xl shadow-xl w-full"
              />

            </div>

            <div>

              <h2 className="text-4xl font-bold mb-6">

                Football (Soccer) Video Annotation

              </h2>

              <p className="text-gray-600 leading-9 mb-6">

                Football is currently one of the fastest-growing applications of
                computer vision. Professional clubs, broadcasters and sports
                analytics companies rely on AI systems capable of tracking
                every player, identifying tactical formations, analysing passing
                networks and detecting match events automatically.

              </p>

              <p className="text-gray-600 leading-9 mb-6">

                Annotexia specializes in football annotation projects including
                player tracking, ball tracking, jersey recognition, tactical
                positioning, heatmaps, expected goals datasets,
                offside detection and event tagging.

              </p>

              <ul className="space-y-3 text-gray-700">

                <li>✓ Frame-by-frame player tracking</li>

                <li>✓ Ball trajectory annotation</li>

                <li>✓ Jersey number recognition</li>

                <li>✓ Tactical formation analysis</li>

                <li>✓ Goal, assist, foul & pass events</li>

                <li>✓ Heatmap dataset generation</li>

              </ul>

            </div>

          </div>

        </div>

      </section>



      {/* ======================================================= */}
      {/* CRICKET */}
      {/* ======================================================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h2 className="text-4xl font-bold mb-6">

                Cricket Computer Vision Annotation

              </h2>

              <p className="text-gray-600 leading-9 mb-6">

                AI-powered cricket analytics continues to evolve with automatic
                ball tracking, shot classification, player positioning,
                fielding analysis and predictive performance modelling.
                Accurate annotations are essential for training reliable
                machine learning models.

              </p>

              <p className="text-gray-600 leading-9 mb-6">

                Our annotation team labels every critical cricket event,
                allowing AI systems to understand match situations,
                batting behaviour, bowling patterns and field positioning.

              </p>

              <ul className="space-y-3 text-gray-700">

                <li>✓ Ball tracking</li>

                <li>✓ Bat swing annotation</li>

                <li>✓ Player movement tracking</li>

                <li>✓ Field position labeling</li>

                <li>✓ Shot classification</li>

                <li>✓ Match event tagging</li>

              </ul>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80"
                alt="Cricket AI Annotation"
                className="rounded-3xl shadow-xl w-full"
              />

            </div>

          </div>

        </div>

      </section>




      {/* ======================================================= */}
      {/* BASKETBALL */}
      {/* ======================================================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80"
                alt="Basketball AI Annotation"
                className="rounded-3xl shadow-xl w-full"
              />

            </div>

            <div>

              <h2 className="text-4xl font-bold mb-6">

                Basketball Video Annotation

              </h2>

              <p className="text-gray-600 leading-9 mb-6">

                Basketball AI applications demand highly accurate tracking due to
                rapid player movement, frequent occlusions and continuous camera
                motion. We annotate every frame with consistent player identities,
                ball positions and tactical events.

              </p>

              <ul className="space-y-3 text-gray-700">

                <li>✓ Ball possession tracking</li>

                <li>✓ Player movement</li>

                <li>✓ Shot detection</li>

                <li>✓ Pass detection</li>

                <li>✓ Defensive positioning</li>

                <li>✓ Offensive play analysis</li>

              </ul>

            </div>

          </div>

        </div>

      </section>




      {/* ======================================================= */}
      {/* HOCKEY */}
      {/* ======================================================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <h2 className="text-4xl font-bold mb-6">

                Ice Hockey & Field Hockey Annotation

              </h2>

              <p className="text-gray-600 leading-9 mb-6">

                Fast-moving pucks, sticks, aggressive player movement and
                frequent collisions make hockey one of the most difficult sports
                for computer vision. Our annotators accurately label
                players, puck positions and match events frame by frame.

              </p>

              <ul className="space-y-3 text-gray-700">

                <li>✓ Puck tracking</li>

                <li>✓ Stick detection</li>

                <li>✓ Goal detection</li>

                <li>✓ Penalty events</li>

                <li>✓ Player trajectories</li>

                <li>✓ Team recognition</li>

              </ul>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1515703407324-5f753afd8be8?auto=format&fit=crop&w=1200&q=80"
                alt="Hockey Annotation"
                className="rounded-3xl shadow-xl w-full"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ======================================================= */}
      {/* TENNIS */}
      {/* ======================================================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1400&q=80"
                alt="Tennis AI Annotation Services"
                className="rounded-3xl shadow-xl w-full"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">
                Tennis Analytics
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-6">
                Tennis Computer Vision Annotation
              </h2>

              <p className="text-gray-600 leading-9 mb-6">
                Modern tennis analytics extends far beyond simple scoreboards.
                AI-powered systems now analyze player movement, racket position,
                ball trajectory, shot placement, court coverage, and rally
                performance. These capabilities depend on highly accurate,
                frame-by-frame annotation.
              </p>

              <p className="text-gray-600 leading-9 mb-6">
                Annotexia delivers production-ready datasets for tennis AI
                companies developing automated match analysis, coaching
                platforms, player performance dashboards, and broadcast
                enhancement solutions.
              </p>

              <ul className="space-y-3 text-gray-700">

                <li>✓ Tennis ball tracking</li>
                <li>✓ Player tracking</li>
                <li>✓ Court keypoint annotation</li>
                <li>✓ Shot classification</li>
                <li>✓ Rally event detection</li>
                <li>✓ Pose estimation</li>

              </ul>

            </div>

          </div>

        </div>

      </section>



      {/* ======================================================= */}
      {/* VOLLEYBALL */}
      {/* ======================================================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">
                Volleyball Analytics
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-6">
                Volleyball AI Annotation Services
              </h2>

              <p className="text-gray-600 leading-9 mb-6">
                Volleyball presents unique computer vision challenges including
                rapid ball movement, jumping players, occlusions around the net,
                and continuous team rotations. Training reliable AI models
                requires consistent annotation across thousands of match frames.
              </p>

              <p className="text-gray-600 leading-9 mb-6">
                Our annotation specialists accurately label athletes, volleyballs,
                court markings, serving events, blocking actions, spikes,
                defensive plays, and tactical positioning.
              </p>

              <ul className="space-y-3 text-gray-700">

                <li>✓ Ball trajectory annotation</li>
                <li>✓ Court line labeling</li>
                <li>✓ Player tracking</li>
                <li>✓ Spike detection</li>
                <li>✓ Block detection</li>
                <li>✓ Team movement analysis</li>

              </ul>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=1400&q=80"
                alt="Volleyball Annotation"
                className="rounded-3xl shadow-xl w-full"
              />

            </div>

          </div>

        </div>

      </section>



      {/* ======================================================= */}
      {/* RUGBY */}
      {/* ======================================================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1558151507-c1aa3d917dbb?auto=format&fit=crop&w=1400&q=80"
                alt="Rugby AI Annotation"
                className="rounded-3xl shadow-xl w-full"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">
                Rugby Analytics
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-6">
                Rugby Computer Vision Datasets
              </h2>

              <p className="text-gray-600 leading-9 mb-6">
                Rugby analytics involves tracking player formations, collisions,
                tackles, scrums, line-outs, passes, and ball movement throughout
                highly dynamic gameplay.
              </p>

              <p className="text-gray-600 leading-9 mb-6">
                Annotexia creates structured datasets that help AI systems
                understand match situations, player positioning, and tactical
                decision-making while maintaining consistent identity tracking
                across long video sequences.
              </p>

              <ul className="space-y-3 text-gray-700">

                <li>✓ Player identification</li>
                <li>✓ Ball tracking</li>
                <li>✓ Scrum annotation</li>
                <li>✓ Try event labeling</li>
                <li>✓ Pass detection</li>
                <li>✓ Tactical positioning</li>

              </ul>

            </div>

          </div>

        </div>

      </section>



      {/* ======================================================= */}
      {/* MULTI SPORT */}
      {/* ======================================================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">
              Multi-Sport Expertise
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Supporting Every Stage of Sports AI Development
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">
              Whether you're developing a next-generation player tracking
              platform, an automated broadcast solution, a tactical analytics
              engine, or an AI-powered coaching assistant, Annotexia provides
              scalable annotation workflows tailored to your sport and model
              requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white border rounded-2xl p-8">

              <h3 className="font-bold text-xl mb-4">
                Computer Vision
              </h3>

              <p className="text-gray-600">
                Object detection, segmentation, tracking,
                pose estimation and player recognition.
              </p>

            </div>

            <div className="bg-white border rounded-2xl p-8">

              <h3 className="font-bold text-xl mb-4">
                Broadcast AI
              </h3>

              <p className="text-gray-600">
                Automated highlights, replay generation,
                graphics and television analytics.
              </p>

            </div>

            <div className="bg-white border rounded-2xl p-8">

              <h3 className="font-bold text-xl mb-4">
                Coaching Platforms
              </h3>

              <p className="text-gray-600">
                Tactical datasets, movement analysis,
                formation recognition and performance metrics.
              </p>

            </div>

            <div className="bg-white border rounded-2xl p-8">

              <h3 className="font-bold text-xl mb-4">
                Research Labs
              </h3>

              <p className="text-gray-600">
                High-quality benchmark datasets for academic
                and commercial sports AI research.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* ========================================================= */}
      {/* OUR SPORTS ANNOTATION WORKFLOW */}
      {/* ========================================================= */}

      <section className="py-24 bg-gray-50 bg-slate-700 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">
              Our Workflow
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Sports Data Annotation Workflow Designed for Production AI
            </h2>

            <p className="text-lg max-w-4xl mx-auto leading-9">
              Successful sports AI projects require more than simply drawing
              bounding boxes around players. They demand consistent annotation
              standards, domain knowledge, rigorous quality assurance, and
              scalable production workflows. Annotexia follows a structured
              multi-stage process that ensures every dataset is accurate,
              consistent, and ready for machine learning.
            </p>

          </div>

          <div className="grid lg:grid-cols-5 gap-8">

            <div className="bg-white rounded-2xl border p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-4">01</div>

              <h3 className="font-bold text-xl mb-4">
                Requirement Analysis
              </h3>

              <p className="text-gray-600">
                We understand your AI model objectives, annotation guidelines,
                ontology, classes, quality expectations, output format, and
                delivery schedule.
              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-4">02</div>

              <h3 className="font-bold text-xl mb-4">
                Pilot Annotation
              </h3>

              <p className="text-gray-600">
                Our team prepares a free sample dataset so your AI engineers
                can validate quality, consistency, and labeling standards
                before production begins.
              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-4">03</div>

              <h3 className="font-bold text-xl mb-4">
                Large-Scale Production
              </h3>

              <p className="text-gray-600">
                Dedicated annotation specialists label thousands of sports
                images and videos following strict project guidelines.
              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-4">04</div>

              <h3 className="font-bold text-xl mb-4">
                Multi-Level QA
              </h3>

              <p className="text-gray-600">
                Every annotation passes multiple review stages to eliminate
                inconsistencies and maintain enterprise-grade accuracy.
              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">

              <div className="text-5xl font-bold text-cyan-600 mb-4">05</div>

              <h3 className="font-bold text-xl mb-4">
                Delivery
              </h3>

              <p className="text-gray-600">
                Datasets are delivered in your preferred format including
                COCO, YOLO, Pascal VOC, JSON, XML, CSV, or custom schemas.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================================= */}
      {/* SPORTS ANNOTATION TYPES */}
      {/* ========================================================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">
              Annotation Types
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Sports Data Annotation Services We Provide
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our annotation specialists support virtually every computer
              vision task required for modern sports analytics platforms.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3">Bounding Box Annotation</h3>
              <p className="text-gray-600">
                Detect players, referees, goals, equipment, and sports objects.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3">Polygon Annotation</h3>
              <p className="text-gray-600">
                High-precision object boundaries for segmentation models.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3">Semantic Segmentation</h3>
              <p className="text-gray-600">
                Pixel-level understanding of fields, courts, players and equipment.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3">Instance Segmentation</h3>
              <p className="text-gray-600">
                Separate overlapping athletes and objects individually.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3">Keypoint Annotation</h3>
              <p className="text-gray-600">
                Human pose estimation and biomechanics analysis.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-3">Video Object Tracking</h3>
              <p className="text-gray-600">
                Persistent player and ball tracking across thousands of frames.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* ========================================================= */}
      {/* TOOLS */}
      {/* ========================================================= */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80"
                alt="Sports Annotation Workflow"
                className="rounded-3xl shadow-xl w-full"
              />

            </div>

            <div>

              <span className="uppercase tracking-widest text-cyan-600 font-semibold">
                Annotation Platforms
              </span>

              <h2 className="text-4xl font-bold mt-4 mb-6">
                Compatible With Your Existing Annotation Pipeline
              </h2>

              <p className="text-gray-600 leading-9 mb-8">
                Our team works with leading annotation platforms as well as
                custom proprietary tools developed by sports analytics
                companies. This allows us to integrate seamlessly into your
                production workflow without disrupting existing operations.
              </p>

              <div className="grid grid-cols-2 gap-4">

                <div className="border rounded-xl p-4 font-semibold">CVAT</div>
                <div className="border rounded-xl p-4 font-semibold">Labelbox</div>
                <div className="border rounded-xl p-4 font-semibold">SuperAnnotate</div>
                <div className="border rounded-xl p-4 font-semibold">Roboflow</div>
                <div className="border rounded-xl p-4 font-semibold">Label Studio</div>
                <div className="border rounded-xl p-4 font-semibold">Custom Platforms</div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================================= */}
      {/* QUALITY */}
      {/* ========================================================= */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">
              Quality Assurance
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Enterprise-Level Quality Control
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">Annotation Review</h3>
              <p className="text-gray-600">
                Every task is reviewed by experienced quality analysts.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">Guideline Validation</h3>
              <p className="text-gray-600">
                Continuous compliance with client annotation guidelines.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">Random Audits</h3>
              <p className="text-gray-600">
                Random sampling ensures consistency across large datasets.
              </p>
            </div>

            <div className="border rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">Final Approval</h3>
              <p className="text-gray-600">
                Production-ready datasets before client delivery.
              </p>
            </div>

          </div>

        </div>

      </section>
      {/* ========================================================= */}
      {/* WHY GLOBAL AI COMPANIES CHOOSE ANNOTEXIA */}
      {/* ========================================================= */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-widest text-cyan-600 font-semibold">
              Why Annotexia
            </span>

            <h2 className="text-4xl font-bold mt-4 mb-6">
              Why AI Companies Choose Annotexia for Sports Annotation
            </h2>

            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-9">
              Choosing the right annotation partner directly impacts the
              accuracy of your computer vision models. At Annotexia, we focus
              on precision, scalability, transparency, and long-term
              collaboration. Whether you're building a sports analytics
              platform, an AI-powered coaching solution, or an automated
              broadcasting system, our dedicated annotation specialists help
              accelerate your development with reliable, production-ready
              datasets.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl border p-8">
              <h3 className="font-bold text-xl mb-4">
                Domain Expertise
              </h3>

              <p className="text-gray-600">
                Experienced annotators familiar with football, cricket,
                basketball, tennis, hockey, rugby, volleyball and multi-sport
                analytics projects.
              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">
              <h3 className="font-bold text-xl mb-4">
                Production Scale
              </h3>

              <p className="text-gray-600">
                From pilot projects to millions of annotated video frames,
                our workflow scales with your business.
              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">
              <h3 className="font-bold text-xl mb-4">
                Flexible Output
              </h3>

              <p className="text-gray-600">
                COCO, YOLO, Pascal VOC, XML, JSON, CSV and custom annotation
                formats supported.
              </p>

            </div>

            <div className="bg-white rounded-2xl border p-8">
              <h3 className="font-bold text-xl mb-4">
                Dedicated Team
              </h3>

              <p className="text-gray-600">
                Work with a consistent annotation team that understands your
                project requirements and quality standards.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ========================================================= */}
      {/* FREE SAMPLE */}
      {/* ========================================================= */}

      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="bg-cyan-50 border border-cyan-200 rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold mb-6">
              Not Sure About Our Annotation Quality?
            </h2>

            <p className="text-lg text-gray-700 leading-9 mb-8">

              We understand that choosing a data annotation partner is an
              important decision.

              That's why Annotexia offers a completely <strong>FREE sample
                annotation service</strong> before any commercial engagement.

              Send us a small dataset, and our team will annotate it according
              to your project guidelines so you can evaluate our quality,
              consistency, turnaround time, and communication—without any cost
              or obligation.

            </p>

            <a
              href="/contact"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Request Free Sample Dataset
            </a>

          </div>

        </div>

      </section>



      {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section className="py-24 bg-gray-50">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                What sports do you support?
              </h3>

              <p className="text-gray-600 leading-8">
                We provide annotation services for football (soccer), cricket,
                basketball, volleyball, rugby, tennis, badminton, baseball, hockey,
                American football and many other sports.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                What annotation types do you provide?
              </h3>

              <p className="text-gray-600 leading-8">
                Bounding boxes, polygons, semantic segmentation, instance
                segmentation, keypoints, pose estimation, player tracking, ball
                tracking, event tagging and custom annotation workflows.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Can you annotate sports videos frame-by-frame?
              </h3>

              <p className="text-gray-600 leading-8">
                Yes. We specialize in video annotation for sports AI applications,
                including frame-by-frame tracking, event detection and player
                identification.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Which annotation formats do you support?
              </h3>

              <p className="text-gray-600 leading-8">
                We support COCO, YOLO, Pascal VOC, JSON, XML, CSV and custom formats.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                How do you ensure annotation quality?
              </h3>

              <p className="text-gray-600 leading-8">
                Every project undergoes multiple quality review stages with dedicated
                QA specialists before final delivery.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Can you work with our annotation platform?
              </h3>

              <p className="text-gray-600 leading-8">
                Yes. Our team has experience with CVAT, Labelbox,
                SuperAnnotate, Label Studio, Roboflow and proprietary annotation
                platforms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                How can we trust Annotexia?
              </h3>

              <p className="text-gray-600 leading-8">
                Trust is earned through quality, transparency, and consistency. We
                offer a free sample annotation service so you can evaluate our work
                before committing to a project. This allows your team to review our
                accuracy, communication, turnaround time, and adherence to your
                annotation guidelines without any financial risk.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Is the sample annotation really free?
              </h3>

              <p className="text-gray-600 leading-8">
                Yes. We provide a small sample annotation completely free of charge.
                There are no hidden costs or obligations. Our goal is to demonstrate
                the quality of our services before moving into full-scale production.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Do you sign NDAs?
              </h3>

              <p className="text-gray-600 leading-8">
                Absolutely. We are happy to sign Non-Disclosure Agreements (NDAs) and
                follow strict confidentiality practices to protect your data and
                intellectual property.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Can you handle enterprise-scale annotation projects?
              </h3>

              <p className="text-gray-600 leading-8">
                Yes. Annotexia supports startups, research labs, and enterprise AI
                companies with scalable annotation teams capable of handling millions
                of images and video frames.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="bg-gray-900 text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-bold mb-8">
            Build Better Sports AI with Better Training Data
          </h2>

          <p className="text-xl text-gray-300 leading-9 mb-10">

            Whether you're developing player tracking systems, sports computer
            vision models, automated broadcasting solutions, or next-generation
            performance analytics platforms, Annotexia provides high-quality
            sports annotation services that help AI models learn faster and
            perform more accurately.

          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            <a
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 px-8 py-4 rounded-xl font-semibold"
            >

              Request Free Sample

            </a>

            <a
              href="/services"
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition"
            >

              Explore Annotation Services

            </a>

          </div>

        </div>

      </section>
    </main>
  );
}