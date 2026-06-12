export default function SectionTitle({
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <h2 className="text-4xl font-bold mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}