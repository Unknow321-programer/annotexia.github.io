import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <article className="bg-white border rounded-xl p-6 hover:shadow-lg transition">

      <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mb-4">
        {blog.category}
      </span>

      <h2 className="text-2xl font-semibold mb-3">
        {blog.title}
      </h2>

      <p className="text-gray-600 mb-4">
        {blog.description}
      </p>

      <div className="flex justify-between items-center">

        <span className="text-sm text-gray-500">
          {blog.date}
        </span>

        <Link
          href={`/blog/${blog.slug}`}
          className="font-medium hover:underline"
        >
          Read More →
        </Link>

      </div>

    </article>
  );
}