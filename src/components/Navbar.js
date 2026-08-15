"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Program", href: "/program" },
    { name: "Jadwal", href: "/jadwal" },
    { name: "Galeri", href: "/galeri" },
    { name: "Artikel", href: "/artikel" },
    { name: "Pendaftaran", href: "/pendaftaran" },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <nav className="fixed w-full z-50 glass-effect border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/assets/Logo.jpeg" alt="Logo Al-Khair" className="w-10 h-10 rounded-lg object-cover shadow-sm group-hover:scale-105 transition-transform" />
              <span className="font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                Al-Khair <span className="text-primary">Cerdiq</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? "text-primary bg-red-50" 
                      : "text-gray-700 hover:text-primary hover:bg-red-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/pendaftaran"
              className="ml-4 px-5 py-2.5 rounded-full text-sm font-medium text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-red-50 focus:outline-none transition-colors"
            >
              <span className="sr-only">Buka menu utama</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    isActive 
                      ? "text-primary bg-red-50" 
                      : "text-gray-700 hover:text-primary hover:bg-red-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
