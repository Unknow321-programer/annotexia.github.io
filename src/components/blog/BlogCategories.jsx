"use client";

export default function BlogCategories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="blog-category-filter mb-8 flex flex-wrap gap-2.5">

      <button
        onClick={() => setActiveCategory("All")}
        className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
          activeCategory === "All"
            ? "bg-black text-white"
            : ""
        }`}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
            activeCategory === category
              ? "bg-black text-white"
              : ""
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}
