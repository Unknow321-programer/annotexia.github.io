import Link from "next/link";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "AI & Data Annotation Blog",
  description:
    "Insights about data annotation, image labeling, video annotation, machine learning datasets, and AI training data.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold text-center mb-6">
            AI & Data Annotation Blog
          </h1>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Learn about AI training data, annotation techniques,
            machine learning datasets, and industry best practices.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {blogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="border rounded-xl p-8 hover:shadow-lg transition"
              >
                <p className="text-sm text-gray-500 mb-2">
                  {blog.category}
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                  {blog.title}
                </h2>

                <p className="text-gray-600">
                  {blog.description}
                </p>
              </Link>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}