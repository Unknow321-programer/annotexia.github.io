import BlogCard from "./BlogCard";

export default function BlogList({ blogs }) {
  return (
    <div className="scroll-reveal grid blog-card-grid gap-5 md:grid-cols-2 md:gap-7">

      {blogs.map((blog) => (
        <BlogCard
          key={blog.slug}
          blog={blog}
        />
      ))}

    </div>
  );
}
