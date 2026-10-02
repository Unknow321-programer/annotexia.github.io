import Image from "next/image";
import Link from "next/link";

export default function FeaturedPost({ blog }) {
  return (
    <section className="featured-post card overflow-hidden bg-slate-950 text-white">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="featured-post-image relative min-h-[280px] overflow-hidden sm:min-h-[360px]">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.75),rgba(2,6,23,0.12))]" />
        </div>

        <div className="featured-post-copy flex flex-col justify-center p-6 sm:p-8 md:p-10">
          <span className="inline-flex w-fit rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1 text-sm font-semibold text-cyan-200">
            Featured post
          </span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">
            {blog.title}
          </h2>
          <p className="mt-4 text-slate-200">{blog.description}</p>
          <Link
            href={`/blog/${blog.slug}`}
            className="mt-8 inline-flex w-fit rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Read article
          </Link>
        </div>
      </div>
    </section>
  );
}
