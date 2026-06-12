import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  return (
    <div className="grid md:grid-cols-2 gap-8">

      {blogs.map((blog) => (
        <BlogCard
          key={blog.slug}
          blog={blog}
        />
      ))}

    </div>
  );
}