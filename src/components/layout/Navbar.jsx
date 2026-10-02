"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="site-header sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="navbar-inner flex h-[76px] items-center justify-between">
            <Link href="/" className="navbar-brand flex items-center gap-2">
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

            <nav className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/75 p-1.5 text-sm font-semibold text-slate-700 md:flex">
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
                className="ml-2 rounded-full bg-slate-950 px-5 py-2.5 text-white transition hover:-translate-y-0.5 hover:bg-teal-700"
                href="/contact"
              >
                Contact
              </Link>
            </nav>

            <button
              className="rounded-xl border border-slate-200 bg-white p-3 text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700 md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
