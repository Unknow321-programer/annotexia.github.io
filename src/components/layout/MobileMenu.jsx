"use client";

import Link from "next/link";

export default function MobileMenu({
  isOpen,
  onClose,
}) {
  if (!isOpen) return null;

  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Industries",
      href: "/industries",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 md:hidden">

        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="text-xl font-bold">
            Annotexia
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
            aria-label="Close Menu"
          >
            ✕
          </button>

        </div>

        <nav className="flex flex-col p-6 gap-5">

          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="text-lg font-medium hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 bg-black text-white text-center py-3 rounded-lg"
          >
            Get a Quote
          </Link>

        </nav>

      </div>
    </>
  );
}