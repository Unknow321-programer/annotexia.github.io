import Link from "next/link";

export default function BlogSidebar({ blogs }) {
  return (
    <aside className="border rounded-xl p-6">

      <h3 className="text-xl font-bold mb-6">
        Recent Posts
      </h3>

      <div className="space-y-4">

        {blogs.slice(0, 5).map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="block hover:text-blue-600"
          >
            {blog.title}
          </Link>
        ))}

      </div>

    </aside>
  );
}