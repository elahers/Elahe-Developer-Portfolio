"use client";

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="h-px w-full bg-white/10 mb-8" />

      <div className="flex items-center gap-6 text-white/70">
        <a
          href="mailto:EllaHedadRusselly@UMB.ca"
          className="transition hover:text-white"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.6 9.75h2.67V18H5.6V9.75Zm4.34 0h2.56v1.13h.04c.36-.67 1.23-1.38 2.53-1.38 2.71 0 3.21 1.78 3.21 4.1V18H15.6v-3.9c0-.93-.02-2.13-1.3-2.13-1.3 0-1.5 1.01-1.5 2.06V18H9.94V9.75Z" />
          </svg>
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.22 1.83 1.22 1.08 1.82 2.82 1.3 3.5.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.32-5.47-5.86 0-1.29.47-2.34 1.22-3.17-.12-.3-.53-1.53.12-3.18 0 0 1-.32 3.3 1.21a11.6 11.6 0 0 1 6 0c2.3-1.53 3.3-1.21 3.3-1.21.65 1.65.24 2.88.12 3.18.76.83 1.22 1.88 1.22 3.17 0 4.55-2.8 5.55-5.48 5.85.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
          </svg>
        </a>
      </div>

      <div className="mt-8 text-xs tracking-[0.18em] text-white/40">
        © {new Date().getFullYear()} EllaHedad
      </div>
    </footer>
  );
}