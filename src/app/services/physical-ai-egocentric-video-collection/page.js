import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Eye,
  Hand,
  Layers3,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "Physical AI Egocentric Video Collection",
  description:
    "Build high-quality first-person video datasets for physical AI, robotics, and embodied intelligence. Capture real-world tasks and human-object interactions with consistent, privacy-aware workflows.",
  keywords: [
    "egocentric video collection",
    "physical AI data collection",
    "first-person video datasets",
    "robotics training data",
    "embodied AI datasets",
    "human-object interaction data",
  ],
  alternates: {
    canonical:
      "https://www.annotexia.com/services/physical-ai-egocentric-video-collection",
  },
  openGraph: {
    title: "Physical AI Egocentric Video Collection | Annotexia",
    description:
      "First-person video collection for robotics and embodied AI, built around real tasks, clear protocols, and dependable quality checks.",
    url: "https://www.annotexia.com/services/physical-ai-egocentric-video-collection",
    siteName: "Annotexia",
    type: "website",
    images: [
      {
        url: "https://www.annotexia.com/images/services/physical_ai.jpg",
        width: 1200,
        height: 800,
        alt: "Robotic hand engaging with a real-world object",
      },
    ],
  },
};

const capabilities = [
  {
    icon: Eye,
    title: "First-person perspective",
    text: "Capture natural, wearer-perspective footage that shows what a person sees while completing a task.",
  },
  {
    icon: Hand,
    title: "Human-object interaction",
    text: "Record hands, tools, objects, and action sequences as they come together in real environments.",
  },
  {
    icon: Workflow,
    title: "Task-focused capture",
    text: "Structure collection around your scenarios, task steps, environments, and coverage requirements.",
  },
  {
    icon: Layers3,
    title: "Dataset-ready delivery",
    text: "Organize and review video assets with consistent metadata and project-specific delivery conventions.",
  },
];

const workflow = [
  ["01", "Define the study", "Align on target tasks, participant criteria, environments, capture devices, and success criteria."],
  ["02", "Prepare protocols", "Create practical recording instructions, consent materials, file conventions, and capture checklists."],
  ["03", "Collect real-world video", "Coordinate structured first-person recording sessions across the agreed tasks and settings."],
  ["04", "Review and deliver", "Check completeness, technical quality, metadata, and agreed privacy requirements before handoff."],
];

const useCases = [
  "Robot learning from human demonstrations",
  "Manipulation and household task research",
  "Wearable and assistive robotics",
  "Human activity and interaction understanding",
  "Embodied agents operating in real environments",
  "Long-horizon task planning and evaluation",
];

const faqs = [
  {
    question: "What is egocentric video collection?",
    answer:
      "Egocentric video is recorded from a first-person perspective, often using a head-mounted or wearable camera. It gives AI teams visual examples of tasks and interactions from the actor's point of view.",
  },
  {
    question: "How is this useful for physical AI?",
    answer:
      "First-person recordings can help teams study how people perceive and act in physical environments. They can support datasets for robotics, embodied AI, task understanding, and human-object interaction research.",
  },
  {
    question: "Can collection follow our own task protocol?",
    answer:
      "Yes. Collection plans can be tailored to your task list, environments, participant profile, capture equipment, metadata schema, and delivery requirements.",
  },
  {
    question: "How do you address privacy during collection?",
    answer:
      "Privacy requirements are agreed during project design. Protocols can include participant consent, environment guidance, restricted access, and review or handling rules for sensitive content, subject to the project scope.",
  },
];

export default function PhysicalAIEgocentricVideoCollectionPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 -top-28 h-96 w-96 rounded-full bg-indigo-500/20 blur-[110px]" />
          <div className="absolute -bottom-32 right-0 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-[130px]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:48px_48px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 sm:py-24 lg:grid-cols-[1.05fr_.95fr] lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              <Sparkles size={16} /> Physical AI Data Collection
            </span>
            <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bring the real world into your AI training data
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Collect first-person video of people performing everyday and specialist tasks. Annotexia helps robotics and embodied AI teams build thoughtfully planned egocentric datasets around real actions, objects, and environments.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-slate-950 shadow-xl shadow-cyan-950/30 transition hover:bg-cyan-400">
                Plan a Collection Project <ArrowRight size={18} />
              </Link>
              <Link href="#capabilities" className="rounded-xl border border-white/20 px-7 py-4 font-semibold text-white transition hover:border-cyan-300 hover:bg-white/5">
                Explore Capabilities
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-300">
              {["Task-specific protocols", "Real-world interactions", "Quality-reviewed delivery"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 size={17} className="text-cyan-300" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div aria-hidden="true" className="absolute inset-8 rounded-full bg-indigo-500/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">Collection preview</p>
                  <p className="mt-1 font-semibold text-white">First-person task capture</p>
                </div>
                <span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300"><span className="h-2 w-2 rounded-full bg-emerald-300" /> READY</span>
              </div>
              <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                <Image
                  src="/images/services/physical_ai.jpg"
                  alt="Robotic hand engaging with a real-world object"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-slate-950/20" />
                <span className="absolute bottom-4 left-4 rounded-lg border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-medium text-slate-100">Human actions · Real-world tasks</span>
                <span className="absolute right-4 top-4 rounded-lg border border-cyan-200/20 bg-slate-950/70 px-3 py-2 text-xs font-medium text-cyan-100">Physical AI data</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[["01", "Task protocol"], ["02", "Capture"], ["03", "Review"]].map(([n, label]) => (
                  <div key={n} className="rounded-xl bg-white/[.04] px-2 py-3"><span className="text-xs font-bold text-cyan-300">{n}</span><p className="mt-1 text-xs text-slate-300">{label}</p></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <span className="font-semibold uppercase tracking-[.2em] text-cyan-700">Data from the actor’s point of view</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Give embodied systems richer examples of how tasks unfold</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>Physical AI depends on more than recognizing objects. Systems also need examples of how people move through spaces, handle tools, and interact with objects over time.</p>
            <p>Egocentric video makes those interactions visible from a first-person perspective. A well-designed collection plan helps teams capture relevant actions with consistent coverage and useful context.</p>
            <p>We work with you to define the capture protocol, coordinate collection, and prepare reviewed video data for research and model development.</p>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-[.2em] text-cyan-700">Collection capabilities</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Purpose-built first-person datasets</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">A flexible collection program shaped around your research question, operating environment, and data requirements.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white"><Icon size={27} /></div>
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <span className="font-semibold uppercase tracking-[.2em] text-cyan-700">Where it helps</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Real-world data for embodied intelligence</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Support the development of systems that need to perceive, reason, and act in physical spaces.</p>
            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
              <ShieldCheck className="mt-1 shrink-0 text-cyan-700" size={24} />
              <p className="text-sm leading-6 text-slate-700">Collection protocols can incorporate project-defined consent, access, and sensitive-content handling requirements.</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-bold text-indigo-700">0{index + 1}</span>
                <p className="font-semibold leading-6 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-[.2em] text-cyan-300">A clear process</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">From collection plan to reviewed dataset</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">A coordinated workflow helps keep field capture aligned with your project goals.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {workflow.map(([step, title, text]) => (
              <article key={step} className="rounded-3xl border border-white/10 bg-white/[.04] p-7">
                <span className="text-4xl font-black text-cyan-300">{step}</span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5 text-sm leading-6 text-slate-300">
            <ClipboardCheck className="mt-0.5 shrink-0 text-cyan-300" size={22} />
            <p>Collection scope, participant volume, locations, equipment, and final deliverables are defined together during project planning.</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <span className="font-semibold uppercase tracking-[.2em] text-cyan-700">Frequently asked questions</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Planning egocentric data collection</h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-900">{question}<span className="text-2xl text-cyan-700 transition group-open:rotate-45">+</span></summary>
                <p className="mt-4 max-w-4xl leading-7 text-slate-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-600 to-indigo-700 py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[.18em] text-cyan-100"><PackageCheck size={18} /> Start with a collection plan</div>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">Build a dataset grounded in real human experience</h2>
            <p className="mt-4 text-lg leading-8 text-cyan-50">Tell us about your tasks, environments, and research goals. We’ll help shape a practical collection workflow.</p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-indigo-800 transition hover:bg-cyan-50">Discuss Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
