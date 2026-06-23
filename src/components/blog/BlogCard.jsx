import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <article className="group card overflow-hidden">
      <Link href={`/blog/${blog.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="image-zoom object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/15 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-950">
            {blog.category}
          </span>
        </div>

        <div className="p-6">
          <p className="text-sm font-semibold text-slate-500">{blog.date}</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950 transition group-hover:text-teal-700">
            {blog.title}
          </h2>
          <p className="mt-3 text-slate-600">{blog.description}</p>
          <span className="mt-5 inline-flex font-semibold text-teal-700">
            Read article
          </span>
        </div>
        
      </Link>
    </article>
  );
}
