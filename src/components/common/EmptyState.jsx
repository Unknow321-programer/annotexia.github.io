export default function EmptyState({
  title = "No Data Found",
  description = "There is currently no content available.",
}) {
  return (
    <div className="text-center py-20">

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>

    </div>
  );
}