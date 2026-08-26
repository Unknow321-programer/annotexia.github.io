import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    ShoppingCart,
    ScanSearch,
    Boxes,
    BarChart3,
    ShieldCheck,
    Users,
    BrainCircuit,
    Eye,
    Tag,
    PackageSearch,
} from "lucide-react";

export const metadata = {
    title:
        "Retail & E-commerce Data Annotation Services | AI Training Data | Annotexia",

    description:
        "Annotexia provides retail and e-commerce data annotation services for product recognition, shelf monitoring, OCR, inventory detection, visual search, customer analytics, and computer vision AI.",

    keywords: [
        "retail data annotation",
        "e-commerce data annotation",
        "retail AI training data",
        "product image annotation",
        "shelf monitoring annotation",
        "product recognition datasets",
        "retail computer vision",
        "OCR annotation",
        "inventory detection annotation",
        "visual search datasets",
        "ecommerce image annotation",
        "AI training data for retail",
    ],

    alternates: {
        canonical: "/industries/retail-ecommerce",
    },

    openGraph: {
        title:
            "Retail & E-commerce Data Annotation Services | Annotexia",
        description:
            "Build reliable retail and e-commerce AI systems with high-quality product, shelf, OCR, inventory, and visual search annotation.",
        url: "https://annotexia.com/industries/retail-ecommerce",
        siteName: "Annotexia",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
                width: 1400,
                height: 900,
                alt: "Retail and e-commerce AI data annotation",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title:
            "Retail & E-commerce Data Annotation Services | Annotexia",
        description:
            "High-quality retail and e-commerce datasets for product recognition, shelf monitoring, OCR, inventory, and visual search AI.",
        images: [
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
        ],
    },
};

const annotationServices = [
    {
        title: "Product Image Annotation",
        description:
            "Create accurate product datasets using bounding boxes, polygons, segmentation, and classification for retail computer vision systems.",
        icon: PackageSearch,
    },
    {
        title: "Shelf & Store Annotation",
        description:
            "Label products, shelves, displays, gaps, and merchandising elements to support automated shelf monitoring and store intelligence.",
        icon: Boxes,
    },
    {
        title: "OCR & Document Annotation",
        description:
            "Annotate product labels, prices, packaging text, receipts, invoices, barcodes, and other retail documents for OCR and document AI.",
        icon: ScanSearch,
    },
    {
        title: "Visual Search Annotation",
        description:
            "Build structured image datasets that help AI systems identify visually similar products and improve image-based product discovery.",
        icon: Eye,
    },
    {
        title: "Inventory Detection",
        description:
            "Create training data for detecting products, stock levels, empty shelves, and inventory conditions across retail environments.",
        icon: ShoppingCart,
    },
    {
        title: "Product Classification",
        description:
            "Organize products into accurate categories, attributes, brands, packaging types, and other business-specific classifications.",
        icon: Tag,
    },
];

const useCases = [
    "Product recognition",
    "Shelf monitoring",
    "Inventory detection",
    "Visual search",
    "Barcode detection",
    "OCR & text recognition",
    "Price tag recognition",
    "Product classification",
    "Checkout automation",
    "Retail analytics",
    "Store monitoring",
    "E-commerce search",
];

const workflow = [
    {
        number: "01",
        title: "Understand Your Requirements",
        description:
            "We review your product categories, dataset structure, annotation requirements, target model, quality expectations, and delivery format.",
    },
    {
        number: "02",
        title: "Define Annotation Guidelines",
        description:
            "Our team creates clear annotation instructions covering classes, attributes, edge cases, difficult examples, and quality standards.",
    },
    {
        number: "03",
        title: "Annotate Your Dataset",
        description:
            "Trained annotation specialists label your retail images, videos, documents, or product data using the required annotation methodology.",
    },
    {
        number: "04",
        title: "Quality Assurance",
        description:
            "Annotations pass through structured quality checks to identify missing objects, incorrect labels, inconsistent boundaries, and other errors.",
    },
    {
        number: "05",
        title: "Review & Corrections",
        description:
            "Feedback and quality findings are incorporated into the workflow to continuously improve annotation consistency.",
    },
    {
        number: "06",
        title: "Dataset Delivery",
        description:
            "Validated datasets are delivered in the agreed format and structure so they can be integrated directly into your AI development workflow.",
    },
];

const benefits = [
    {
        title: "Retail Domain Understanding",
        description:
            "Annotation workflows designed around real retail and e-commerce computer vision requirements.",
        icon: BrainCircuit,
    },
    {
        title: "Consistent Quality",
        description:
            "Structured annotation guidelines and quality review processes help maintain consistency across large datasets.",
        icon: CheckCircle2,
    },
    {
        title: "Scalable Workforce",
        description:
            "Scale annotation capacity as your dataset grows from pilot projects to larger production requirements.",
        icon: Users,
    },
    {
        title: "Secure Workflows",
        description:
            "Confidential project handling, controlled access, and NDA support help protect your business data.",
        icon: ShieldCheck,
    },
];

const faqs = [
    {
        question:
            "What retail and e-commerce data can Annotexia annotate?",
        answer:
            "We can support product images, shelf images, store videos, receipts, product labels, price tags, packaging, barcodes, catalogs, and other retail datasets depending on your project requirements.",
    },
    {
        question:
            "Can you annotate products for object detection models?",
        answer:
            "Yes. We support bounding box annotation, polygon annotation, segmentation, classification, and other labeling approaches used to train product detection and recognition models.",
    },
    {
        question:
            "Do you support shelf monitoring datasets?",
        answer:
            "Yes. Shelf monitoring datasets can include product detection, shelf boundaries, empty spaces, misplaced products, price tags, and other project-specific classes.",
    },
    {
        question:
            "Can you annotate OCR and product text?",
        answer:
            "Yes. We can label text appearing on packaging, product labels, receipts, price tags, signs, and other retail documents for OCR and document AI applications.",
    },
    {
        question:
            "Can you handle large retail datasets?",
        answer:
            "Yes. Our workflows can be structured for both smaller pilot datasets and larger annotation projects. Scaling depends on project complexity, annotation type, quality requirements, and delivery timeline.",
    },
    {
        question:
            "Which annotation formats do you support?",
        answer:
            "Depending on the project, datasets can be delivered in formats such as COCO, YOLO, Pascal VOC, JSON, XML, CSV, or other custom structures.",
    },
    {
        question:
            "Can we test your annotation quality before starting a large project?",
        answer:
            "Yes. We can discuss a sample annotation so you can evaluate the quality, interpretation of your guidelines, communication process, and expected output before moving to a larger engagement.",
    },
];

export default function RetailEcommercePage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                    <div className="absolute -bottom-32 -right-20 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

                            <div className="mb-7 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                                Retail & E-commerce AI Data
                            </div>

                            <h1 className="text-5xl font-extrabold leading-tight text-white lg:text-6xl">

                                Build Smarter

                                <span className="block text-cyan-400">
                                    Retail AI
                                </span>

                                With Better Data

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 lg:text-xl">

                                From product recognition and shelf monitoring
                                to visual search and inventory intelligence,
                                Annotexia helps retail and e-commerce teams
                                transform real-world data into reliable AI
                                training datasets.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-cyan-500 px-8 py-4 font-bold text-white shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-600"
                                >
                                    Discuss Your Project
                                </Link>

                                <Link
                                    href="/services/data-labeling"
                                    className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
                                >
                                    Explore Data Labeling
                                </Link>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400">

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Product Annotation
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Shelf Monitoring
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    OCR & Visual Search
                                </span>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute -inset-6 rounded-[40px] bg-cyan-500/10 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">

                                <Image
                                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80"
                                    alt="Retail and e-commerce artificial intelligence data annotation"
                                    width={1400}
                                    height={900}
                                    priority
                                    className="h-[420px] w-full rounded-[24px] object-cover lg:h-[500px]"
                                />

                            </div>

                            {/* FLOATING CARD */}

                            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl sm:block">

                                <p className="text-sm text-cyan-400">
                                    Computer Vision
                                </p>

                                <p className="mt-1 font-bold text-white">
                                    Product Detection
                                </p>

                            </div>

                            <div className="absolute -right-5 bottom-10 hidden rounded-2xl border border-white/10 bg-slate-900/95 px-6 py-5 shadow-2xl sm:block">

                                <p className="text-sm text-green-400">
                                    Retail AI
                                </p>

                                <p className="mt-1 font-bold text-white">
                                    Shelf Intelligence
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                INTRO
            ====================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto max-w-4xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Data Behind Retail Intelligence
                        </span>

                        <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                            Retail AI Starts With Understanding What Is
                            Actually Happening
                        </h2>

                        <p className="mt-7 text-lg leading-8 text-slate-600">
                            A retail AI system may need to recognize thousands
                            of products, understand shelf layouts, read tiny
                            product labels, identify missing inventory, or
                            match a customer&apos;s image with the right product.
                            None of that happens reliably without well-labeled
                            training data.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Annotexia helps turn complex retail images,
                            videos, documents, and product datasets into
                            structured training data that machine learning
                            systems can learn from.
                        </p>

                    </div>

                </div>

            </section>

            {/* =====================================================
                SERVICES
            ====================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="max-w-3xl">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Annotation Capabilities
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                            Retail Data Annotation Services
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Build the datasets your retail AI applications
                            need—from product recognition to automated
                            inventory intelligence.
                        </p>

                    </div>

                    <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                        {annotationServices.map((service) => {

                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.title}
                                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="absolute left-0 top-0 h-1 w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 transition group-hover:bg-cyan-500">
                                        <Icon className="text-cyan-600 transition group-hover:text-white" size={27} />
                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold text-slate-900">
                                        {service.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {service.description}
                                    </p>

                                    <div className="mt-7 flex items-center font-semibold text-cyan-600">
                                        Learn More
                                        <ArrowRight
                                            size={18}
                                            className="ml-2 transition group-hover:translate-x-2"
                                        />
                                    </div>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =====================================================
                USE CASES
            ====================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-cyan-600">
                                Retail AI Applications
                            </span>

                            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                                What Can Retail AI Data Help You Build?
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Different retail applications require
                                different annotation strategies. We can
                                structure datasets around the objects,
                                attributes, events, and business rules
                                important to your model.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-9 inline-flex items-center rounded-xl bg-slate-900 px-7 py-4 font-semibold text-white transition hover:bg-cyan-600"
                            >
                                Talk to an Annotation Specialist
                                <ArrowRight size={19} className="ml-2" />
                            </Link>

                        </div>

                        <div className="grid grid-cols-2 gap-4">

                            {useCases.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <CheckCircle2
                                        size={19}
                                        className="shrink-0 text-cyan-500"
                                    />

                                    <span className="text-sm font-semibold text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                WORKFLOW
            ====================================================== */}

            <section className="bg-slate-950 py-24 text-white">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-400">
                            Our Workflow
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            From Retail Data to AI-Ready Dataset
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-400">
                            A structured workflow helps transform raw retail
                            data into consistent, validated training data.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {workflow.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]"
                            >

                                <span className="text-4xl font-extrabold text-cyan-400">
                                    {step.number}
                                </span>

                                <h3 className="mt-6 text-2xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-7 text-slate-400">
                                    {step.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                WHY ANNOTEXIA
            ====================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Why Annotexia
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            A Data Partner for Your Retail AI Team
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Retail datasets often contain difficult edge
                            cases, similar-looking products, crowded shelves,
                            small text, changing packaging, and complex
                            environments. Your annotation workflow needs to
                            account for those realities.
                        </p>

                    </div>

                    <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

                        {benefits.map((benefit) => {

                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={benefit.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                                        <Icon
                                            size={27}
                                            className="text-cyan-600"
                                        />
                                    </div>

                                    <h3 className="mt-7 text-xl font-bold">
                                        {benefit.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {benefit.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =====================================================
                SERVICES INTERNAL LINKS
            ====================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-sm lg:p-14">

                        <div className="grid items-center gap-12 lg:grid-cols-2">

                            <div>

                                <span className="font-semibold uppercase tracking-widest text-cyan-600">
                                    Explore Annotation Services
                                </span>

                                <h2 className="mt-4 text-4xl font-bold leading-tight">
                                    Need More Than Product Annotation?
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-slate-600">
                                    Retail AI projects can involve images,
                                    videos, text, documents, audio, and other
                                    forms of training data. Explore our broader
                                    annotation capabilities.
                                </p>

                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">

                                <Link
                                    href="/services/image-annotation"
                                    className="group rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-400 hover:shadow-lg"
                                >
                                    <span className="font-bold">
                                        Image Annotation
                                    </span>

                                    <ArrowRight
                                        size={18}
                                        className="mt-3 text-cyan-600 transition group-hover:translate-x-2"
                                    />
                                </Link>

                                <Link
                                    href="/services/video-annotation"
                                    className="group rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-400 hover:shadow-lg"
                                >
                                    <span className="font-bold">
                                        Video Annotation
                                    </span>

                                    <ArrowRight
                                        size={18}
                                        className="mt-3 text-cyan-600 transition group-hover:translate-x-2"
                                    />
                                </Link>

                                <Link
                                    href="/services/text-annotation"
                                    className="group rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-400 hover:shadow-lg"
                                >
                                    <span className="font-bold">
                                        Text Annotation
                                    </span>

                                    <ArrowRight
                                        size={18}
                                        className="mt-3 text-cyan-600 transition group-hover:translate-x-2"
                                    />
                                </Link>

                                <Link
                                    href="/services/data-labeling"
                                    className="group rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-400 hover:shadow-lg"
                                >
                                    <span className="font-bold">
                                        Data Labeling
                                    </span>

                                    <ArrowRight
                                        size={18}
                                        className="mt-3 text-cyan-600 transition group-hover:translate-x-2"
                                    />
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                FAQ
            ====================================================== */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-5xl px-6">

                    <div className="mb-14 text-center">

                        <span className="font-semibold uppercase tracking-widest text-cyan-600">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Retail Annotation Questions
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Answers to common questions about retail,
                            e-commerce, product recognition, shelf monitoring,
                            OCR, and visual search datasets.
                        </p>

                    </div>

                    <div className="space-y-5">

                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-slate-900">
                                    {faq.question}

                                    <span className="shrink-0 text-2xl font-normal text-cyan-600 transition group-open:rotate-45">
                                        +
                                    </span>
                                </summary>

                                <p className="mt-5 max-w-4xl leading-8 text-slate-600">
                                    {faq.answer}
                                </p>

                            </details>
                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 p-10 text-white lg:p-16">

                        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

                        <div className="relative grid items-center gap-12 lg:grid-cols-2">

                            <div>

                                <span className="font-semibold uppercase tracking-widest text-cyan-100">
                                    Build Better Retail AI
                                </span>

                                <h2 className="mt-5 text-4xl font-extrabold leading-tight lg:text-5xl">
                                    Have a Retail Dataset That Needs Labeling?
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-cyan-50">
                                    Tell us what you&apos;re building, what data
                                    you have, and what your model needs to
                                    learn. We&apos;ll help you determine an
                                    annotation approach that fits your project.
                                </p>

                            </div>

                            <div className="lg:text-right">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-2xl bg-white px-9 py-5 text-lg font-bold text-cyan-700 shadow-xl transition hover:scale-105"
                                >
                                    Get a Free Consultation
                                    <ArrowRight
                                        size={21}
                                        className="ml-3"
                                    />
                                </Link>

                                <p className="mt-5 text-sm text-cyan-100">
                                    Discuss your dataset and requirements with
                                    our annotation team.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                SEO CONTENT
            ====================================================== */}

            <section className="border-t border-slate-100 bg-white py-20">

                <div className="mx-auto max-w-5xl px-6">

                    <h2 className="text-3xl font-bold text-slate-900">
                        Retail & E-commerce Data Annotation Services
                    </h2>

                    <p className="mt-6 leading-8 text-slate-600">
                        Annotexia provides professional data annotation
                        services for retail and e-commerce artificial
                        intelligence applications. Our annotation workflows
                        support product recognition, shelf monitoring,
                        inventory detection, OCR, visual search, product
                        classification, and other computer vision use cases.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Retail AI systems often need to understand complex
                        visual environments containing products, packaging,
                        price labels, shelves, barcodes, promotional displays,
                        and customers. High-quality labeled datasets help
                        machine learning models learn these visual patterns
                        more effectively.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Depending on your project, Annotexia can support
                        bounding boxes, polygons, segmentation, classification,
                        OCR labeling, object tracking, and other custom
                        annotation requirements. We also support commonly used
                        dataset formats and can adapt workflows to your
                        specific model and annotation guidelines.
                    </p>

                    <p className="mt-5 leading-8 text-slate-600">
                        Whether you are developing an e-commerce visual search
                        engine, automated shelf monitoring system, product
                        recognition model, inventory solution, or retail
                        analytics platform, Annotexia can help transform your
                        raw data into structured AI training datasets.
                    </p>

                </div>

            </section>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="bg-slate-950 py-20 text-white">

                <div className="mx-auto max-w-5xl px-6 text-center">

                    <ShoppingCart
                        size={42}
                        className="mx-auto text-cyan-400"
                    />

                    <h2 className="mt-7 text-4xl font-bold lg:text-5xl">
                        Turn Retail Data Into AI-Ready Intelligence
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        Better product data, better labels, and better
                        annotation workflows can give your retail AI models a
                        stronger foundation.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-9 inline-flex items-center rounded-xl bg-cyan-500 px-8 py-4 font-bold text-white transition hover:bg-cyan-600"
                    >
                        Start Your Retail AI Project
                        <ArrowRight size={20} className="ml-2" />
                    </Link>

                </div>

            </section>

        </main>
    );
}