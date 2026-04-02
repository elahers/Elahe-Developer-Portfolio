"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? "text-white"
      : "transition hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-sm font-medium uppercase tracking-[0.2em]">
          <svg xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 10.5L12 3l9 7.5" />
            <path d="M5 10v10h14V10" />
          </svg>
        </Link>

        <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.22em] text-white/70">
          <Link href="/experience" className={linkClass("/experience")}>
            Experience
          </Link>
          <Link href="/education" className={linkClass("/education")}>
            Education
          </Link>
          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}