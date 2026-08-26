import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    FileText,
    BrainCircuit,
    Tags,
    MessageSquareText,
    Languages,
    ShieldCheck,
    Target,
    Database,
    Workflow,
} from "lucide-react";

export const metadata = {
    title: "Text Annotation Services | NLP & AI Training Data | Annotexia",
    description:
        "Professional text annotation services for NLP, machine learning, Generative AI, LLMs, document AI, sentiment analysis, named entity recognition, intent classification, and text classification.",
    keywords: [
        "text annotation services",
        "text labeling services",
        "NLP annotation services",
        "NLP training data",
        "text classification",
        "named entity recognition",
        "NER annotation",
        "sentiment annotation",
        "intent classification",
        "LLM training data",
        "Generative AI annotation",
        "document annotation",
        "AI training data",
    ],
    alternates: {
        canonical: "https://annotexia.com/services/text-annotation",
    },
    openGraph: {
        title: "Text Annotation Services | NLP & AI Training Data | Annotexia",
        description:
            "Accurate and scalable text annotation for NLP, LLMs, Generative AI, document intelligence, sentiment analysis, and machine learning.",
        url: "https://annotexia.com/services/text-annotation",
        siteName: "Annotexia",
        type: "website",
        images: [
            {
                url: "https://annotexia.com/images/services/text-annotation.webp",
                width: 1200,
                height: 630,
                alt: "Professional text annotation services for NLP and AI",
            },
        ],
    },
};

const annotationTypes = [
    {
        title: "Named Entity Recognition",
        description:
            "Identify and label people, organizations, locations, products, dates, medical terms, financial entities, and other project-specific entities.",
        icon: Tags,
    },
    {
        title: "Sentiment Analysis",
        description:
            "Label customer opinions, reviews, conversations, and feedback by sentiment or project-specific emotional categories.",
        icon: MessageSquareText,
    },
    {
        title: "Intent Classification",
        description:
            "Classify customer queries, support requests, chatbot conversations, and user messages according to their intended meaning.",
        icon: Target,
    },
    {
        title: "Text Classification",
        description:
            "Categorize documents, messages, articles, reviews, and other text into predefined classes for machine learning models.",
        icon: FileText,
    },
    {
        title: "Entity & Relation Annotation",
        description:
            "Identify entities and relationships between them to help NLP models understand connections and contextual meaning.",
        icon: BrainCircuit,
    },
    {
        title: "Document Annotation",
        description:
            "Extract and label information from invoices, forms, contracts, reports, receipts, and other business documents.",
        icon: Database,
    },
];

const useCases = [
    {
        title: "Natural Language Processing",
        description:
            "Create structured datasets for NLP models that need to understand text, entities, intent, sentiment, and relationships.",
        image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
        href: "/industries/computer-vision",
    },
    {
        title: "Generative AI & LLMs",
        description:
            "Support language model development with instruction data, classification, preference-related labeling, and evaluation datasets.",
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
        href: "/services/data-labeling",
    },
    {
        title: "Customer Experience",
        description:
            "Analyze customer conversations, reviews, support tickets, and feedback using sentiment and intent annotation.",
        image:
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
        href: "/industries/retail-ecommerce",
    },
    {
        title: "Document AI",
        description:
            "Build intelligent document processing systems by labeling fields, entities, tables, and important information.",
        image:
            "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
        href: "/services/data-labeling",
    },
];

const workflow = [
    {
        number: "01",
        title: "Understand Your Data",
        description:
            "We review your dataset, business domain, annotation objectives, taxonomy, language requirements, and model use case.",
    },
    {
        number: "02",
        title: "Define Annotation Guidelines",
        description:
            "Clear guidelines establish entity definitions, class boundaries, edge cases, examples, and labeling rules.",
    },
    {
        number: "03",
        title: "Annotator Training",
        description:
            "Annotators are trained using project-specific examples and validation exercises before production work begins.",
    },
    {
        number: "04",
        title: "Text Annotation",
        description:
            "The trained team labels text according to the approved taxonomy while maintaining consistency across the dataset.",
    },
    {
        number: "05",
        title: "Quality Review",
        description:
            "Annotations undergo quality checks to identify incorrect labels, missing entities, inconsistencies, and ambiguous cases.",
    },
    {
        number: "06",
        title: "Validated Delivery",
        description:
            "The completed dataset is validated and delivered in the format required by your NLP or machine learning workflow.",
    },
];

const formats = [
    "JSON",
    "CSV",
    "JSONL",
    "XML",
    "TXT",
    "COCO",
    "YOLO",
    "Label Studio",
    "Custom Formats",
];

const benefits = [
    {
        title: "Domain-Aware Annotation",
        description:
            "Annotation guidelines can be adapted to your business terminology, industry vocabulary, and project-specific requirements.",
        icon: BrainCircuit,
    },
    {
        title: "Consistent Labeling",
        description:
            "Structured guidelines and review processes help maintain consistent annotations across large datasets.",
        icon: CheckCircle2,
    },
    {
        title: "Scalable Workflows",
        description:
            "Scale annotation capacity according to dataset volume, complexity, language, and project timelines.",
        icon: Workflow,
    },
    {
        title: "Confidential Data",
        description:
            "Support confidential workflows for proprietary documents, customer conversations, and business datasets.",
        icon: ShieldCheck,
    },
];

const faqs = [
    {
        question: "What is text annotation?",
        answer:
            "Text annotation is the process of labeling words, phrases, sentences, documents, or relationships within text so machine learning and NLP models can learn patterns and understand language.",
    },
    {
        question: "What types of text annotation do you provide?",
        answer:
            "Annotexia supports named entity recognition, sentiment analysis, intent classification, text classification, entity and relation annotation, document annotation, keyword extraction, and custom NLP labeling tasks.",
    },
    {
        question: "Can you annotate industry-specific terminology?",
        answer:
            "Yes. Annotation guidelines can be created around project-specific terminology and domain requirements. This is particularly useful for specialized datasets containing technical, financial, legal, healthcare, or business vocabulary.",
    },
    {
        question: "Do you support LLM and Generative AI projects?",
        answer:
            "Yes. Text annotation can support language model and Generative AI workflows through classification, instruction-related datasets, content labeling, evaluation datasets, and other project-specific requirements.",
    },
    {
        question: "Can you handle multilingual text?",
        answer:
            "Multilingual projects can be supported depending on the required languages, annotation complexity, and project scope. Share your language requirements when requesting a quote so the appropriate workflow can be planned.",
    },
    {
        question: "Which output formats do you support?",
        answer:
            "Depending on your project requirements, we can support formats such as JSON, JSONL, CSV, XML, TXT, Label Studio, and custom structures.",
    },
    {
        question: "Can I test your quality before starting a large project?",
        answer:
            "Yes. We can provide a sample annotation so you can evaluate quality, consistency, communication, and turnaround before proceeding with a larger engagement.",
    },
];

export default function TextAnnotationPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">

                <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
                    <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-28">

                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* LEFT */}

                        <div>

                            <span className="mb-7 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                                AI Text Annotation Services
                            </span>

                            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">

                                Turn Unstructured Text

                                <span className="block text-blue-400">
                                    Into AI-Ready Data
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
                                Transform raw text, documents, conversations,
                                and customer feedback into structured training
                                data for NLP, machine learning, Generative AI,
                                LLMs, and document intelligence applications.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Link
                                    href="/contact"
                                    className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-xl shadow-blue-900/30 transition hover:bg-blue-700"
                                >
                                    Get a Free Quote
                                </Link>

                                <Link
                                    href="#annotation-types"
                                    className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-blue-400 hover:bg-white/5"
                                >
                                    Explore Services
                                </Link>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    NLP annotation
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Entity labeling
                                </span>

                                <span className="flex items-center gap-2">
                                    <CheckCircle2
                                        size={17}
                                        className="text-cyan-400"
                                    />
                                    Multi-level QA
                                </span>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="relative">

                            <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 blur-3xl" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">

                                <Image
                                    src="/images/services/text-annotation.webp"
                                    alt="Professional text annotation and NLP labeling for AI"
                                    width={900}
                                    height={600}
                                    priority
                                    className="h-[420px] w-full rounded-[1.5rem] object-cover"
                                />

                                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/85 p-5 backdrop-blur">

                                    <div className="flex items-center justify-between">

                                        <div>
                                            <p className="text-sm text-cyan-400">
                                                Natural Language Intelligence
                                            </p>

                                            <p className="mt-1 font-bold text-white">
                                                Structured Text Training Data
                                            </p>
                                        </div>

                                        <FileText
                                            size={38}
                                            className="text-cyan-400"
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                INTRO
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-blue-600">
                                NLP Training Data
                            </span>

                            <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                                Help AI Understand What People Mean
                            </h2>

                        </div>

                        <div className="space-y-6 text-lg leading-8 text-slate-600">

                            <p>
                                Human language is messy. The same idea can be
                                expressed in thousands of different ways, while
                                the meaning of a sentence can change completely
                                depending on context.
                            </p>

                            <p>
                                Text annotation gives machine learning models
                                the structured examples they need to recognize
                                entities, understand intent, identify sentiment,
                                classify content, and discover relationships.
                            </p>

                            <p>
                                Annotexia helps convert unstructured text into
                                carefully labeled datasets designed around your
                                model, business domain, and annotation objectives.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                ANNOTATION TYPES
            ========================================================= */}

            <section
                id="annotation-types"
                className="bg-slate-50 py-24"
            >

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Our Capabilities
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-slate-900 lg:text-5xl">
                            Text Annotation Services
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            From simple classification to complex entity and
                            relationship labeling, our workflows can be adapted
                            to your NLP and AI requirements.
                        </p>

                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

                        {annotationTypes.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">

                                        <Icon
                                            size={27}
                                            className="text-blue-600 transition group-hover:text-white"
                                        />

                                    </div>

                                    <h3 className="mt-7 text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-slate-600">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =========================================================
                BENEFITS
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-16 max-w-3xl">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Why Annotexia
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Built Around Your NLP Project
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Text datasets often require more than simply
                            assigning labels. Context, terminology, ambiguity,
                            and edge cases all matter.
                        </p>

                    </div>

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

                        {benefits.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                                >

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">

                                        <Icon
                                            size={27}
                                            className="text-blue-600"
                                        />

                                    </div>

                                    <h3 className="mt-7 text-xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-7 text-slate-600">
                                        {item.description}
                                    </p>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =========================================================
                USE CASES
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mb-16">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Applications
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Where Text Annotation Powers AI
                        </h2>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Structured text datasets help organizations build
                            smarter search, conversational AI, document
                            intelligence, recommendation, and analytics systems.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2">

                        {useCases.map((item) => (
                            <Link
                                href={item.href}
                                key={item.title}
                                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            >

                                <div className="overflow-hidden">

                                    <Image
                                        src={item.image}
                                        alt={`${item.title} text annotation applications`}
                                        width={1200}
                                        height={700}
                                        className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                </div>

                                <div className="p-8">

                                    <h3 className="text-2xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 leading-8 text-slate-600">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 flex items-center font-semibold text-blue-600">

                                        Explore Application

                                        <ArrowRight
                                            size={19}
                                            className="ml-2 transition group-hover:translate-x-2"
                                        />

                                    </div>

                                </div>

                            </Link>
                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                WORKFLOW
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Our Workflow
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            From Raw Text to Training Data
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            A structured annotation workflow helps maintain
                            accuracy and consistency across large NLP datasets.
                        </p>

                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                        {workflow.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                            >

                                <span className="text-5xl font-extrabold text-blue-100">
                                    {step.number}
                                </span>

                                <h3 className="mt-4 text-2xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-600">
                                    {step.description}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                AI / LLM SECTION
            ========================================================= */}

            <section className="bg-slate-950 py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="font-semibold uppercase tracking-widest text-cyan-400">
                                Generative AI & LLM Data
                            </span>

                            <h2 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-5xl">
                                Better Language Models Start With Better Data
                            </h2>

                            <p className="mt-7 text-lg leading-8 text-slate-300">
                                Language models learn from enormous amounts of
                                text, but high-quality structured datasets can
                                help teams build targeted AI systems for specific
                                domains and applications.
                            </p>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Annotexia can support project-specific text
                                classification, instruction-related labeling,
                                content categorization, evaluation datasets,
                                and other language-data requirements.
                            </p>

                            <Link
                                href="/services/data-labeling"
                                className="mt-8 inline-flex items-center rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-600"
                            >
                                Explore Data Labeling

                                <ArrowRight
                                    size={19}
                                    className="ml-2"
                                />
                            </Link>

                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

                                <Languages className="text-cyan-400" size={32} />

                                <h3 className="mt-5 text-xl font-bold text-white">
                                    Language Understanding
                                </h3>

                                <p className="mt-3 leading-7 text-slate-400">
                                    Structure text so models can learn meaning,
                                    intent, entities, and context.
                                </p>

                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

                                <Tags className="text-cyan-400" size={32} />

                                <h3 className="mt-5 text-xl font-bold text-white">
                                    Entity Extraction
                                </h3>

                                <p className="mt-3 leading-7 text-slate-400">
                                    Identify important entities and categories
                                    within complex text.
                                </p>

                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

                                <MessageSquareText
                                    className="text-cyan-400"
                                    size={32}
                                />

                                <h3 className="mt-5 text-xl font-bold text-white">
                                    Conversation Data
                                </h3>

                                <p className="mt-3 leading-7 text-slate-400">
                                    Label conversations for chatbots,
                                    support systems, and conversational AI.
                                </p>

                            </div>

                            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

                                <BrainCircuit
                                    className="text-cyan-400"
                                    size={32}
                                />

                                <h3 className="mt-5 text-xl font-bold text-white">
                                    AI Evaluation
                                </h3>

                                <p className="mt-3 leading-7 text-slate-400">
                                    Create structured datasets for testing and
                                    evaluating language model behavior.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                FORMATS
            ========================================================= */}

            <section className="py-20">

                <div className="mx-auto max-w-6xl px-6 text-center">

                    <span className="font-semibold uppercase tracking-widest text-blue-600">
                        Flexible Delivery
                    </span>

                    <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                        Output Formats for Your ML Workflow
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        Receive structured text annotations in commonly used
                        formats or according to your custom schema.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-3">

                        {formats.map((format) => (
                            <span
                                key={format}
                                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-medium text-slate-700"
                            >
                                {format}
                            </span>
                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                FAQ
            ========================================================= */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-5xl px-6">

                    <div className="mb-16 text-center">

                        <span className="font-semibold uppercase tracking-widest text-blue-600">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-4 text-4xl font-bold lg:text-5xl">
                            Text Annotation Questions
                        </h2>

                        <p className="mt-6 text-lg text-slate-600">
                            Common questions about NLP and text annotation
                            services.
                        </p>

                    </div>

                    <div className="space-y-5">

                        {faqs.map((faq) => (
                            <details
                                key={faq.question}
                                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                            >

                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">

                                    <span>
                                        {faq.question}
                                    </span>

                                    <span className="text-2xl text-blue-600 transition group-open:rotate-45">
                                        +
                                    </span>

                                </summary>

                                <p className="mt-5 leading-8 text-slate-600">
                                    {faq.answer}
                                </p>

                            </details>
                        ))}

                    </div>

                </div>

            </section>

            {/* =========================================================
                CTA
            ========================================================= */}

            <section className="py-24">

                <div className="mx-auto max-w-7xl px-6">

                    <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 p-10 text-white md:p-16">

                        <div className="grid items-center gap-12 lg:grid-cols-2">

                            <div>

                                <span className="font-semibold uppercase tracking-widest text-blue-100">
                                    Start Your NLP Project
                                </span>

                                <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
                                    Have Text Data?
                                    <span className="block">
                                        Let&apos;s Make It AI-Ready.
                                    </span>
                                </h2>

                                <p className="mt-6 text-lg leading-8 text-blue-50">
                                    Share your dataset, annotation requirements,
                                    expected volume, language, and timeline.
                                    Our team can help define the right text
                                    annotation workflow.
                                </p>

                            </div>

                            <div className="lg:text-right">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center rounded-2xl bg-white px-9 py-5 text-lg font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-slate-100"
                                >
                                    Request a Free Consultation

                                    <ArrowRight
                                        size={21}
                                        className="ml-3"
                                    />

                                </Link>

                                <p className="mt-5 text-sm text-blue-100">
                                    Start with a sample annotation.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =========================================================
                SEO CONTENT
            ========================================================= */}

            <section className="border-t border-slate-100 bg-white py-20">

                <div className="mx-auto max-w-5xl px-6">

                    <h2 className="text-3xl font-bold">
                        Professional Text Annotation Services
                    </h2>

                    <p className="mt-6 leading-9 text-slate-600">
                        Annotexia provides professional text annotation and
                        labeling services for organizations developing Natural
                        Language Processing, Machine Learning, Generative AI,
                        Large Language Models, and document intelligence
                        applications.
                    </p>

                    <p className="mt-6 leading-9 text-slate-600">
                        Our text annotation capabilities include named entity
                        recognition, sentiment analysis, intent classification,
                        text classification, entity and relation annotation,
                        document annotation, and custom NLP labeling workflows.
                        Each project can be configured around your taxonomy,
                        domain terminology, annotation guidelines, and output
                        requirements.
                    </p>

                    <p className="mt-6 leading-9 text-slate-600">
                        High-quality text datasets help AI systems understand
                        language more effectively. By combining structured
                        annotation guidelines, trained annotators, quality
                        review, and validated delivery, Annotexia helps
                        organizations transform unstructured text into useful
                        machine learning training data.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">

                        <Link
                            href="/services/image-annotation"
                            className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                            Image Annotation
                            <ArrowRight
                                size={17}
                                className="ml-1 inline"
                            />
                        </Link>

                        <Link
                            href="/services/video-annotation"
                            className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                            Video Annotation
                            <ArrowRight
                                size={17}
                                className="ml-1 inline"
                            />
                        </Link>

                        <Link
                            href="/services/audio-annotation"
                            className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                            Audio Annotation
                            <ArrowRight
                                size={17}
                                className="ml-1 inline"
                            />
                        </Link>

                        <Link
                            href="/services/lidar-annotation"
                            className="font-semibold text-blue-600 hover:text-blue-700"
                        >
                            LiDAR Annotation
                            <ArrowRight
                                size={17}
                                className="ml-1 inline"
                            />
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}