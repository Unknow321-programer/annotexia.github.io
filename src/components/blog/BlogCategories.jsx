"use client";

export default function BlogCategories({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">

      <button
        onClick={() => setActiveCategory("All")}
        className={`px-4 py-2 rounded-lg border ${
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
          className={`px-4 py-2 rounded-lg border ${
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