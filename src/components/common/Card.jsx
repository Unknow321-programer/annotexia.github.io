export default function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition ${className}`}
    >
      {children}
    </div>
  );
}