import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center px-4 py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-sm w-full text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Favicon Icon Logo Badge */}
        <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
          <Image
            src="/favicon.ico"
            alt="Jejak Bencana Logo"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>

        {/* Minimalist 404 Number Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-mono font-semibold tracking-widest uppercase">
          Error 404
        </div>

        {/* Heading & Description */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Jejak atau koordinat halaman yang Anda tuju tidak tersedia dalam sistem transparansi kami.
          </p>
        </div>

        {/* Minimalist Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2.5">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 text-xs font-semibold shadow-sm transition-all active:scale-95"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/allocation"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 text-xs font-semibold transition-all active:scale-95"
          >
            Cek Alokasi Dana
          </Link>
        </div>
      </div>
    </div>
  );
}
