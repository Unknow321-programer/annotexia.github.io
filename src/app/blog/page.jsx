import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/blog/BlogCard";
import BlogSidebar from "@/components/blog/BlogSidebar";
import FeaturedPost from "@/components/blog/FeaturedPost";

export const metadata = {
  title: "AI & Data Annotation Blog",
  description:
    "Insights about data annotation, image labeling, video annotation, machine learning datasets, and AI training data.",
};

export default function BlogPage() {
  const [featuredPost, ...rest] = blogs;

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.96),rgba(15,118,110,0.82)_52%,rgba(37,99,235,0.72))]" />
        <Image
          src={featuredPost.image}
          alt={featuredPost.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:py-28">
          <div className="max-w-3xl scroll-reveal rounded-lg border border-white/15 bg-slate-950/45 p-6 backdrop-blur-md md:p-8">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">
              Blog insights
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              AI & Data Annotation Blog
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              Learn about AI training data, annotation techniques, machine learning datasets,
              and industry best practices with practical articles designed for teams that build.
            </p>
          </div>

          <div className="scroll-reveal rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur-md">
            <div className="relative aspect-[4/3] overflow-hidden rounded-md">
              <Image
                src={rest[0].image}
                alt={rest[0].imageAlt}
                fill
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="image-zoom object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-semibold text-cyan-200">Featured topic</p>
              <h2 className="mt-2 text-2xl font-bold text-white">{rest[0].title}</h2>
              <Link
                href={`/blog/${rest[0].slug}`}
                className="mt-4 inline-flex font-semibold text-white underline decoration-cyan-300 decoration-2 underline-offset-4"
              >
                Read featured article
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_320px]">
        <div>
          <FeaturedPost blog={featuredPost} />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <BlogCard blog={rest[0]} />
            {rest.slice(1).map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>

        <div className="lg:pt-2">
          <BlogSidebar blogs={blogs} />
        </div>
      </section>
    </main>
  );
}
