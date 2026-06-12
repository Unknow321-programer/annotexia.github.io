export default function PageBanner({
  title,
  description,
}) {
  return (
    <section className="bg-gray-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-6">
          {title}
        </h1>

        {description && (
          <p className="text-xl text-gray-300 max-w-3xl">
            {description}
          </p>
        )}

      </div>
    </section>
  );
}