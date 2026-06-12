import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Annotexia`,
    description: blog.description,
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-6">
        <span className="bg-gray-100 px-4 py-2 rounded-full text-sm">
          {blog.category}
        </span>
      </div>

      <h1 className="text-5xl font-bold mb-6">
        {blog.title}
      </h1>

      <p className="text-gray-500 mb-10">
        {blog.date}
      </p>

      <article className="prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {blog.content}
        </ReactMarkdown>
      </article>

    </main>

  );
}