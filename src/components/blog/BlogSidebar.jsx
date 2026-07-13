import Image from "next/image";
import Link from "next/link";

export default function BlogSidebar({ blogs }) {
  return (
    <aside className="card overflow-hidden p-5">
      <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-md">
        <Image
          src={blogs[0].image}
          alt={blogs[0].imageAlt}
          fill
          sizes="320px"
          className="image-zoom object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-slate-950">Recent Posts</h3>

      <div className="mt-5 space-y-4">
        {blogs.slice(-4).map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="group flex gap-3 rounded-lg p-2 transition hover:bg-teal-50"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md">
              <Image
                src={blog.image}
                alt={blog.imageAlt}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-teal-700">{blog.category}</p>
              <p className="font-medium text-slate-900 transition group-hover:text-teal-700">
                {blog.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
