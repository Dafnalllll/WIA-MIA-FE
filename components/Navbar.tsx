"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Alokasi Dana", href: "/allocation" },
    { name: "Donasi Publik", href: "/donations" },
    { name: "Laporan & Audit", href: "/reports" },
    { name: "Tentang", href: "/about" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      {/* 2. Floating Glassmorphic Capsule Navbar (Option 1) */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-3">
        <div className="mx-auto max-w-6xl rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 transition-all">
          <div className="flex items-center justify-between px-5 h-16">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2.5 group">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white shadow-md overflow-hidden border border-zinc-200 dark:border-zinc-700 group-hover:scale-105 transition-transform">
                  <Image
                    src="/favicon.ico"
                    alt="Jejak Bencana Logo"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-white flex items-center gap-1.5">
                    Jejak
                    <span className="text-emerald-600 dark:text-emerald-400">
                      Dana
                    </span>
                  </span>
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium -mt-1">
                    Transparansi Dana Bencana
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links & Mega Menu */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive(link.href)
                      ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-900 dark:text-white font-semibold"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mega Menu Toggle */}
              <div className="relative">
                <button
                  onClick={() => setShowMegaMenu(!showMegaMenu)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-all"
                >
                  <span>Kategori</span>
                  <svg
                    className={`h-3.5 w-3.5 transition-transform ${showMegaMenu ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showMegaMenu && (
                  <div className="absolute right-0 mt-3 w-80 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2.5">
                      Pusat Alokasi Dana
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      <Link
                        href="/allocation/logistik"
                        onClick={() => setShowMegaMenu(false)}
                        className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors group"
                      >
                        <div className="font-semibold text-xs text-zinc-900 dark:text-white group-hover:text-emerald-600">
                          Logistik & Pangan Darurat
                        </div>
                        <div className="text-[10px] text-zinc-500">
                          Distribusi beras, air bersih, tenda
                        </div>
                      </Link>
                      <Link
                        href="/allocation/medis"
                        onClick={() => setShowMegaMenu(false)}
                        className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors group"
                      >
                        <div className="font-semibold text-xs text-zinc-900 dark:text-white group-hover:text-emerald-600">
                          Fasilitas Medis & Obat
                        </div>
                        <div className="text-[10px] text-zinc-500">
                          Rumah sakit lapangan & obat-obatan
                        </div>
                      </Link>
                      <Link
                        href="/reports/audit"
                        onClick={() => setShowMegaMenu(false)}
                        className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors group"
                      >
                        <div className="font-semibold text-xs text-zinc-900 dark:text-white group-hover:text-emerald-600">
                          Laporan Audit PDF Resmi
                        </div>
                        <div className="text-[10px] text-zinc-500">
                          Dokumen transparansi publik
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/donations/new"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md shadow-emerald-600/20 transition-all hover:shadow-lg hover:shadow-emerald-600/30 active:scale-95"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Salur Donasi
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/donations/new"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold shadow-sm"
              >
                Donasi
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 px-5 pt-3 pb-6 space-y-2 rounded-b-2xl shadow-xl backdrop-blur-xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                    isActive(link.href)
                      ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 font-semibold"
                      : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider px-3.5 py-1">
                  Kategori Alokasi
                </div>
                <Link
                  href="/allocation/logistik"
                  onClick={() => setIsOpen(false)}
                  className="block px-3.5 py-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-emerald-600"
                >
                  • Logistik & Pangan
                </Link>
                <Link
                  href="/allocation/medis"
                  onClick={() => setIsOpen(false)}
                  className="block px-3.5 py-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-emerald-600"
                >
                  • Fasilitas Medis
                </Link>
                <Link
                  href="/reports/audit"
                  onClick={() => setIsOpen(false)}
                  className="block px-3.5 py-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-emerald-600"
                >
                  • Laporan Audit PDF
                </Link>
              </div>
              <div className="pt-3">
                <Link
                  href="/donations/new"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-emerald-600 text-white font-semibold text-center shadow-md shadow-emerald-600/20 text-sm"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Salur Donasi & Transparansi
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
