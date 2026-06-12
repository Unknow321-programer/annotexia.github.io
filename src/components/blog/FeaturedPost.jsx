import Link from "next/link";

export default function FeaturedPost({ blog }) {
  return (
    <section className="bg-gray-100 rounded-2xl p-10 mb-12">

      <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm mb-4">
        Featured Post
      </span>

      <h2 className="text-4xl font-bold mb-4">
        {blog.title}
      </h2>

      <p className="text-gray-600 mb-6">
        {blog.description}
      </p>

      <Link
        href={`/blog/${blog.slug}`}
        className="inline-block bg-black text-white px-6 py-3 rounded-lg"
      >
        Read Article
      </Link>

    </section>
  );
}