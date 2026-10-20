"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <div
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed inset-0 z-50 flex md:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible"}`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div
        className={`relative ml-auto flex w-full max-w-sm flex-col bg-white dark:bg-zinc-950 shadow-2xl h-full border-l border-zinc-200 dark:border-zinc-800 p-6 z-50 transition-transform duration-300 ease-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100 dark:border-zinc-900">
          <div className="flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm">
              <Image
                src="/favicon.ico"
                alt="Logo"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Live Mini Card */}
        <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300 mb-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Audit Keuangan</span>
          </div>
          <div className="text-xl font-extrabold text-emerald-900 dark:text-emerald-100">
            Rp 4.85 Miliar
          </div>
          <div className="text-xs text-emerald-700 dark:text-emerald-400 mt-1 flex items-center justify-between">
            <span>Tersalurkan: 89.4%</span>
            <span className="font-semibold">24 Wilayah</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-2 space-y-2">
          <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider px-3 mb-1">
            Navigasi Utama
          </div>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive(link.href)
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 font-semibold shadow-sm"
                  : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              }`}
            >
              <span>{link.name}</span>
              <svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}

          <div className="pt-4">
            <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider px-3 mb-2">
              Kategori Alokasi & Laporan
            </div>
            <div className="space-y-1">
              <Link
                href="/allocation/logistik"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <span>📦 Logistik & Pangan Darurat</span>
                <span className="text-[10px] text-emerald-600 font-semibold">Aktif</span>
              </Link>
              <Link
                href="/allocation/medis"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <span>🏥 Fasilitas Medis & Obat</span>
                <span className="text-[10px] text-emerald-600 font-semibold">Aktif</span>
              </Link>
              <Link
                href="/reports/audit"
                onClick={onClose}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                <span>📄 Arsip Audit PDF Resmi</span>
                <span className="text-[10px] text-emerald-600 font-semibold">WTP</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900">
          <Link
            href="/donations/new"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-center shadow-lg shadow-emerald-600/30 text-sm transition-all active:scale-95"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Salur Donasi & Transparansi
          </Link>
        </div>
      </div>
    </div>
  );
}
