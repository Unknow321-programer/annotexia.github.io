import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    CheckCircle2,
    Mic2,
    Headphones,
    BrainCircuit,
    ShieldCheck,
    Layers3,
    Zap,
    MessageSquareText,
    Volume2,
    Users,
    FileAudio,
} from "lucide-react";

export const metadata = {
    title:
        "Audio Annotation Services | Speech & AI Training Data | Annotexia",
    description:
        "Professional audio annotation and speech data labeling services for AI and machine learning. Speech transcription, speaker diarization, emotion, intent, sound event, keyword, and audio classification.",
    keywords: [
        "audio annotation services",
        "audio labeling services",
        "speech annotation",
        "speech data annotation",
        "audio transcription",
        "speaker diarization",
        "speech recognition datasets",
        "audio classification",
        "sound event annotation",
        "AI audio training data",
        "voice data labeling",
        "NLP audio datasets",
    ],
    alternates: {
        canonical: "https://annotexia.com/services/audio-annotation",
    },
    openGraph: {
        title: "Audio Annotation Services | Annotexia",
        description:
            "High-quality audio annotation and speech data labeling for AI, ML, speech recognition, conversational AI, and voice technologies.",
        url: "https://annotexia.com/services/audio-annotation",
        siteName: "Annotexia",
        type: "website",
    },
};

const annotationTypes = [
    {
        title: "Speech Transcription",
        description:
            "Convert spoken language into accurately transcribed text for speech recognition, conversational AI, call analytics, and voice applications.",
        icon: MessageSquareText,
    },
    {
        title: "Speaker Diarization",
        description:
            "Identify and segment different speakers within an audio recording to help AI systems understand who said what.",
        icon: Users,
    },
    {
        title: "Audio Classification",
        description:
            "Categorize audio recordings based on speech, environmental sounds, music, machinery, events, or other predefined classes.",
        icon: Volume2,
    },
    {
        title: "Emotion Annotation",
        description:
            "Label emotional characteristics such as anger, happiness, sadness, frustration, excitement, or neutral speech.",
        icon: BrainCircuit,
    },
    {
        title: "Sound Event Annotation",
        description:
            "Identify and timestamp specific sounds and events within complex audio environments.",
        icon: Headphones,
    },
    {
        title: "Keyword Spotting",
        description:
            "Mark specific words, commands, phrases, or trigger terms for voice assistants and speech recognition systems.",
        icon: Mic2,
    },
];

const useCases = [
    {
        title: "Speech Recognition",
        description:
            "Build high-quality datasets for automatic speech recognition systems across languages, accents, environments, and speaking styles.",
    },
    {
        title: "Conversational AI",
        description:
            "Train virtual assistants, AI agents, chatbots, and voice interfaces with accurately labeled conversational data.",
    },
    {
        title: "Call Center Analytics",
        description:
            "Analyze customer conversations using transcription, speaker segmentation, sentiment, emotion, intent, and event labels.",
    },
    {
        title: "Voice Assistants",
        description:
            "Create training datasets for voice-controlled applications, smart devices, automotive assistants, and conversational systems.",
    },
    {
        title: "Emotion Recognition",
        description:
            "Help AI models understand tone, emotion, speaking behavior, and other characteristics contained within human speech.",
    },
    {
        title: "Environmental Sound AI",
        description:
            "Train models to recognize alarms, machinery, vehicles, animals, footsteps, background sounds, and other real-world audio events.",
    },
];

const workflow = [
    {
        number: "01",
        title: "Project Understanding",
        description:
            "We analyze your audio data, annotation objectives, target classes, languages, acoustic conditions, and model requirements.",
    },
    {
        number: "02",
        title: "Guideline Creation",
        description:
            "Detailed annotation guidelines define labels, timestamps, speaker rules, transcription conventions, edge cases, and quality standards.",
    },
    {
        number: "03",
        title: "Annotator Training",
        description:
            "Annotators are trained using your project-specific guidelines before production annotation begins.",
    },
    {
        number: "04",
        title: "Audio Annotation",
        description:
            "Trained specialists annotate speech, speakers, emotions, keywords, sounds, events, or other required attributes.",
    },
    {
        number: "05",
        title: "Quality Assurance",
        description:
            "Annotations undergo systematic review, sampling, validation, and correction to maintain consistency and accuracy.",
    },
    {
        number: "06",
        title: "Final Delivery",
        description:
            "Validated datasets are exported in the required structure and format for your machine learning pipeline.",
    },
];

const industries = [
    "Healthcare & Medical AI",
    "Automotive & Mobility",
    "Customer Service",
    "Conversational AI",
    "Smart Devices",
    "Media & Entertainment",
    "Security & Surveillance",
    "Retail & E-commerce",
];

const formats = [
    "JSON",
    "CSV",
    "TXT",
    "XML",
    "SRT",
    "VTT",
    "WAV Metadata",
    "Custom Formats",
];

const faqs = [
    {
        question: "What is audio annotation?",
        answer:
            "Audio annotation is the process of adding structured labels, timestamps, transcriptions, speaker information, emotions, events, or other metadata to audio recordings so machine learning models can learn from the data.",
    },
    {
        question: "What types of audio can Annotexia annotate?",
        answer:
            "We can work with speech recordings, conversations, interviews, call-center recordings, podcasts, environmental sounds, machine sounds, automotive audio, voice commands, and other audio datasets.",
    },
    {
        question: "Do you provide speech transcription?",
        answer:
            "Yes. We support speech transcription and can adapt the transcription workflow to project-specific requirements such as timestamps, speaker identification, language, terminology, and formatting.",
    },
    {
        question: "Can you identify multiple speakers?",
        answer:
            "Yes. Speaker diarization and speaker segmentation can be included when your project requires the identification and separation of multiple speakers in an audio recording.",
    },
    {
        question: "Can you annotate emotions in speech?",
        answer:
            "Yes. Audio datasets can be labeled for project-defined emotional categories such as happiness, anger, sadness, frustration, excitement, neutral, or other custom classes.",
    },
    {
        question: "Can you handle large audio datasets?",
        answer:
            "Yes. Our annotation workflow can scale from smaller pilot datasets to large production projects while maintaining standardized guidelines and quality-control procedures.",
    },
    {
        question: "Can I test your quality before starting a large project?",
        answer:
            "Yes. We can provide a sample annotation so you can evaluate our quality, consistency, understanding of your guidelines, and turnaround expectations before moving forward with a larger engagement.",
    },
];

export default function AudioAnnotationPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950">

                <div className="absolute inset-0">
                    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
                    <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-7">
                                <Mic2 size={16} />
                                AI Audio Data Annotation
                            </div>

                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">

                                Turn Audio Into

                                <span className="block text-cyan-400 mt-2">
                                    AI-Ready Data
                                </span>

                            </h1>

                            <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-8 text-slate-300">
                                Transform speech, conversations, sounds, and voice
                                recordings into structured training data for
                                speech recognition, conversational AI, voice
                                assistants, audio intelligence, and machine
                                learning applications.
                            </p>

                            <div className="flex flex-wrap gap-4 mt-10">

                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-600"
                                >
                                    Get Free Sample
                                    <ArrowRight size={19} />
                                </Link>

                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/5"
                                >
                                    Explore Services
                                </Link>

                            </div>

                            <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10">

                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        Speech
                                    </p>
                                    <p className="text-sm text-slate-400 mt-1">
                                        & Transcription
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        Speaker
                                    </p>
                                    <p className="text-sm text-slate-400 mt-1">
                                        Diarization
                                    </p>
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-white">
                                        Sound
                                    </p>
                                    <p className="text-sm text-slate-400 mt-1">
                                        Event Detection
                                    </p>
                                </div>

                            </div>

                        </div>

                        <div className="relative">

                            <div className="absolute inset-0 rounded-[40px] bg-cyan-500/20 blur-3xl" />

                            <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-4 shadow-2xl">

                                <Image
                                    src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1400&q=80"
                                    alt="Audio annotation and speech data labeling for artificial intelligence"
                                    width={900}
                                    height={700}
                                    priority
                                    className="w-full h-[500px] object-cover rounded-[24px]"
                                />

                                <div className="absolute -bottom-7 -left-7 rounded-2xl border border-white/10 bg-slate-900 px-6 py-5 shadow-2xl">

                                    <div className="flex items-center gap-3">

                                        <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                                            <Volume2 className="text-cyan-400" />
                                        </div>

                                        <div>
                                            <p className="text-sm text-slate-400">
                                                Audio Intelligence
                                            </p>
                                            <p className="font-bold text-white">
                                                Structured Training Data
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                INTRO
            ====================================================== */}

            <section className="py-24">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                        Audio Data That AI Can Understand
                    </span>

                    <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                        Great Voice AI Starts With
                        <span className="text-cyan-600"> Great Audio Data</span>
                    </h2>

                    <p className="mt-7 text-lg text-slate-600 leading-8">
                        A voice recording may sound simple to a human, but an AI
                        model needs much more than raw audio. It needs to understand
                        words, speakers, timing, emotions, events, background noise,
                        and context.
                    </p>

                    <p className="mt-5 text-lg text-slate-600 leading-8">
                        Annotexia transforms raw audio into structured datasets
                        designed around your machine learning objectives. From
                        speech recognition and conversational AI to environmental
                        sound detection, our annotation workflows help turn
                        unstructured audio into useful training signals.
                    </p>

                </div>

            </section>

            {/* =====================================================
                ANNOTATION TYPES
            ====================================================== */}

            <section className="py-24 bg-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-3xl mb-16">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                            Our Capabilities
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                            Audio Annotation Services
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-8">
                            Build specialized datasets for speech, sound,
                            conversational intelligence, and voice-based AI
                            applications.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                        {annotationTypes.map((item) => {

                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="group rounded-3xl bg-white border border-slate-200 p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center transition group-hover:bg-cyan-500">

                                        <Icon
                                            size={27}
                                            className="text-cyan-600 group-hover:text-white"
                                        />

                                    </div>

                                    <h3 className="text-2xl font-bold mt-7">
                                        {item.title}
                                    </h3>

                                    <p className="mt-4 text-slate-600 leading-7">
                                        {item.description}
                                    </p>

                                    <div className="mt-7 flex items-center gap-2 text-cyan-600 font-semibold">
                                        Learn More
                                        <ArrowRight
                                            size={18}
                                            className="transition group-hover:translate-x-2"
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

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                            Applications
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                            Where Audio Annotation Makes a Difference
                        </h2>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {useCases.map((item, index) => (

                            <div
                                key={item.title}
                                className="relative overflow-hidden rounded-3xl border border-slate-200 p-8 hover:shadow-xl transition"
                            >

                                <span className="text-5xl font-black text-slate-100">
                                    0{index + 1}
                                </span>

                                <h3 className="text-2xl font-bold mt-3">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-7">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                WORKFLOW
            ====================================================== */}

            <section className="py-24 bg-slate-950 text-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-3xl mb-16">

                        <span className="text-cyan-400 font-semibold uppercase tracking-widest text-sm">
                            Our Process
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                            From Raw Audio to
                            <span className="text-cyan-400">
                                {" "}AI-Ready Dataset
                            </span>
                        </h2>

                        <p className="mt-6 text-lg text-slate-400 leading-8">
                            A structured workflow keeps your annotation project
                            consistent from the first audio file to the final
                            validated dataset.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                        {workflow.map((item) => (

                            <div
                                key={item.number}
                                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:bg-white/[0.06] transition"
                            >

                                <span className="text-cyan-400 text-sm font-bold">
                                    STEP {item.number}
                                </span>

                                <h3 className="text-2xl font-bold mt-5">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-slate-400 leading-7">
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                QUALITY
            ====================================================== */}

            <section className="py-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        <div>

                            <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                                Quality Assurance
                            </span>

                            <h2 className="text-4xl lg:text-5xl font-bold mt-4 leading-tight">
                                Audio Quality Is
                                <span className="text-cyan-600">
                                    {" "}AI Quality
                                </span>
                            </h2>

                            <p className="mt-6 text-lg text-slate-600 leading-8">
                                Even a small transcription error, incorrect speaker
                                boundary, or missed sound event can introduce noise
                                into a machine learning dataset.
                            </p>

                            <p className="mt-5 text-lg text-slate-600 leading-8">
                                That&apos;s why our workflow incorporates structured
                                guidelines, trained annotators, quality reviews,
                                sampling, corrections, and project-specific
                                validation criteria.
                            </p>

                            <div className="mt-9 space-y-4">

                                {[
                                    "Project-specific annotation guidelines",
                                    "Trained audio annotation specialists",
                                    "Multi-level quality review",
                                    "Consistency and edge-case checks",
                                    "Structured dataset validation",
                                    "Custom quality requirements",
                                ].map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <CheckCircle2
                                            size={21}
                                            className="text-cyan-600 shrink-0"
                                        />

                                        <span className="font-medium text-slate-700">
                                            {item}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        <div className="rounded-[32px] bg-slate-50 border border-slate-200 p-10">

                            <div className="grid sm:grid-cols-2 gap-6">

                                {[
                                    {
                                        title: "Accuracy",
                                        desc: "Consistent labels and transcription",
                                        icon: CheckCircle2,
                                    },
                                    {
                                        title: "Security",
                                        desc: "Confidential project workflows",
                                        icon: ShieldCheck,
                                    },
                                    {
                                        title: "Scalability",
                                        desc: "Small pilots to large datasets",
                                        icon: Layers3,
                                    },
                                    {
                                        title: "Turnaround",
                                        desc: "Efficient production workflows",
                                        icon: Zap,
                                    },
                                ].map((item) => {

                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="rounded-2xl bg-white p-7 border border-slate-200"
                                        >

                                            <Icon
                                                className="text-cyan-600"
                                                size={28}
                                            />

                                            <h3 className="font-bold text-xl mt-5">
                                                {item.title}
                                            </h3>

                                            <p className="text-slate-600 mt-2 leading-6">
                                                {item.desc}
                                            </p>

                                        </div>
                                    );
                                })}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                INDUSTRIES
            ====================================================== */}

            <section className="py-24 bg-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-14">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                            Industries
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                            Built for Real-World AI Applications
                        </h2>

                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        {industries.map((industry) => (

                            <div
                                key={industry}
                                className="bg-white rounded-2xl border border-slate-200 p-6 flex items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition"
                            >

                                <CheckCircle2
                                    size={20}
                                    className="text-cyan-600 shrink-0"
                                />

                                <span className="font-semibold">
                                    {industry}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                FORMATS
            ====================================================== */}

            <section className="py-20">

                <div className="max-w-5xl mx-auto px-6 text-center">

                    <FileAudio
                        size={42}
                        className="mx-auto text-cyan-600"
                    />

                    <h2 className="text-3xl lg:text-4xl font-bold mt-5">
                        Flexible Data Delivery Formats
                    </h2>

                    <p className="mt-5 text-lg text-slate-600">
                        Receive validated annotation outputs in formats that
                        integrate with your existing machine learning pipeline.
                    </p>

                    <div className="flex flex-wrap justify-center gap-3 mt-9">

                        {formats.map((format) => (

                            <span
                                key={format}
                                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 font-semibold text-slate-700"
                            >
                                {format}
                            </span>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                RELATED SERVICES
            ====================================================== */}

            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

                        <div>

                            <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                                Explore More
                            </span>

                            <h2 className="text-4xl font-bold mt-3">
                                More Data Annotation Services
                            </h2>

                        </div>

                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 font-semibold text-cyan-600"
                        >
                            View All Services
                            <ArrowRight size={18} />
                        </Link>

                    </div>

                    <div className="grid md:grid-cols-3 gap-6">

                        {[
                            {
                                title: "Image Annotation",
                                href: "/services/image-annotation",
                                description:
                                    "Create high-quality computer vision datasets with bounding boxes, polygons, segmentation, keypoints, and more.",
                            },
                            {
                                title: "Video Annotation",
                                href: "/services/video-annotation",
                                description:
                                    "Track objects, events, actions, and movements across video sequences for advanced AI applications.",
                            },
                            {
                                title: "Text Annotation",
                                href: "/services/text-annotation",
                                description:
                                    "Build NLP and language datasets using entity labeling, sentiment, intent, classification, and text categorization.",
                            },
                        ].map((service) => (

                            <Link
                                key={service.title}
                                href={service.href}
                                className="group rounded-3xl border border-slate-200 p-8 hover:shadow-xl hover:-translate-y-1 transition"
                            >

                                <h3 className="text-2xl font-bold">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-7">
                                    {service.description}
                                </p>

                                <div className="mt-6 flex items-center gap-2 text-cyan-600 font-semibold">

                                    Explore Service

                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-2 transition"
                                    />

                                </div>

                            </Link>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                FAQ
            ====================================================== */}

            <section className="py-24 bg-slate-50">

                <div className="max-w-4xl mx-auto px-6">

                    <div className="text-center mb-14">

                        <span className="text-cyan-600 font-semibold uppercase tracking-widest text-sm">
                            FAQ
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-bold mt-4">
                            Audio Annotation Questions
                        </h2>

                    </div>

                    <div className="space-y-4">

                        {faqs.map((faq) => (

                            <details
                                key={faq.question}
                                className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-sm"
                            >

                                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 text-lg font-semibold">

                                    {faq.question}

                                    <span className="text-cyan-600 text-2xl transition group-open:rotate-45">
                                        +
                                    </span>

                                </summary>

                                <p className="mt-5 text-slate-600 leading-8">
                                    {faq.answer}
                                </p>

                            </details>

                        ))}

                    </div>

                </div>

            </section>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}

            <section className="py-24 bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700">

                <div className="max-w-5xl mx-auto px-6 text-center text-white">

                    <span className="uppercase tracking-widest text-sm font-semibold text-cyan-100">
                        Ready to Start?
                    </span>

                    <h2 className="text-4xl lg:text-6xl font-bold mt-5 leading-tight">
                        Turn Your Audio Into
                        <span className="block">
                            Training Data
                        </span>
                    </h2>

                    <p className="text-lg lg:text-xl text-cyan-50 leading-8 max-w-3xl mx-auto mt-7">
                        Share your audio dataset, annotation requirements,
                        target classes, and timeline. Our team can help you
                        define the right annotation workflow for your AI project.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-10">

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-cyan-700 shadow-xl hover:bg-slate-100 transition"
                        >
                            Request Free Sample
                            <ArrowRight size={19} />
                        </Link>

                        <Link
                            href="/industries"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-8 py-4 font-bold text-white hover:bg-white/10 transition"
                        >
                            Explore Industries
                        </Link>

                    </div>

                </div>

            </section>

            {/* =====================================================
                SEO CONTENT
            ====================================================== */}

            <section className="py-20">

                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-3xl font-bold">
                        Professional Audio Annotation Services for AI
                    </h2>

                    <p className="mt-6 text-slate-600 leading-8">
                        Annotexia provides professional audio annotation and
                        speech data labeling services for organizations building
                        artificial intelligence and machine learning systems.
                        Our services support speech recognition, conversational
                        AI, voice assistants, call-center analytics, audio
                        classification, emotion recognition, keyword spotting,
                        speaker diarization, and sound event detection.
                    </p>

                    <p className="mt-5 text-slate-600 leading-8">
                        High-quality audio datasets require more than simply
                        converting speech into text. Depending on the application,
                        machine learning models may need information about
                        speakers, timestamps, emotions, keywords, background
                        sounds, acoustic events, and other project-specific
                        attributes.
                    </p>

                    <p className="mt-5 text-slate-600 leading-8">
                        Our structured annotation workflow combines detailed
                        project guidelines, trained annotation specialists,
                        quality assurance reviews, and validated data delivery.
                        Whether you are developing a voice assistant, speech
                        recognition model, conversational AI platform, or
                        environmental sound detection system, Annotexia can help
                        transform raw audio into reliable AI training data.
                    </p>

                </div>

            </section>

        </main>
    );
}