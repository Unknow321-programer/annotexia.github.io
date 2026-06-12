"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 bg-white shadow">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center h-20">

            <Link
              href="/"
              className="flex items-center"
            >
              <Image
                src="/images/company/CompanyLogo.svg"
                alt="Annotexia Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold">
                Annotexia
              </span>
            </Link>

            <nav className="hidden md:flex gap-8">

              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>

            </nav>

            <button
              className="md:hidden text-3xl"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              ☰
            </button>

          </div>

        </div>

      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}