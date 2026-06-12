import Link from "next/link";

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white border border-black text-black hover:bg-gray-100",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}