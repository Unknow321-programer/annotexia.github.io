"use client";

import Link from "next/link";
import { X } from "lucide-react";

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
      <button
        type="button"
        aria-label="Close Menu"
        className="mobile-menu-backdrop fixed inset-0 z-40 bg-slate-950/55 backdrop-blur-sm md:hidden"
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div className="mobile-menu-panel fixed right-0 top-0 z-50 h-full w-[min(88vw,380px)] bg-white shadow-2xl md:hidden">

        <div className="flex justify-between items-center p-6 border-b">

          <h2 className="text-xl font-bold">
            Annotexia
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100"
            aria-label="Close Menu"
          >
            <X aria-hidden="true" size={20} />
          </button>

        </div>

        <nav className="flex flex-col p-6 gap-5">

          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="rounded-xl px-4 py-3 text-lg font-medium text-slate-800 transition hover:bg-blue-50 hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 rounded-xl bg-slate-950 py-3.5 text-center font-semibold text-white transition hover:bg-blue-700"
          >
            Get a Quote
          </Link>

        </nav>

      </div>
    </>
  );
}
