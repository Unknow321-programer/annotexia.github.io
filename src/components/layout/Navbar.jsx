"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/company/CompanyLogo.svg"
                alt="Annotexia"
                width={180}
                height={60}
                style={{
                  height: "50px",
                  width: "auto",
                }}
                priority
              />
              <span className="text-2xl font-bold text-slate-950">
                Annotexia
              </span>
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 md:flex">
              <Link className="transition hover:text-teal-700" href="/">
                Home
              </Link>
              <Link className="transition hover:text-teal-700" href="/about">
                About
              </Link>
              <Link className="transition hover:text-teal-700" href="/services">
                Services
              </Link>
              <Link className="transition hover:text-teal-700" href="/industries">
                Industries
              </Link>
              <Link className="transition hover:text-teal-700" href="/blog">
                Blog
              </Link>
              <Link
                className="rounded-lg bg-slate-950 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
                href="/contact"
              >
                Contact
              </Link>
            </nav>

            <button
              className="rounded-lg border border-slate-200 px-3 py-2 text-2xl md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
            >
              <span aria-hidden="true" className="block leading-none">
                =
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
