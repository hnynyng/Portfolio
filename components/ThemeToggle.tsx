"use client";

import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") setTheme("light");
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";

    const apply = () => {
      document.documentElement.setAttribute("data-theme", next);
      setTheme(next);
      try {
        localStorage.setItem("theme", next);
      } catch {}
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (doc.startViewTransition && !reduced) {
      doc.startViewTransition(apply);
    } else {
      document.documentElement.classList.add("theme-wash");
      apply();
      window.setTimeout(
        () => document.documentElement.classList.remove("theme-wash"),
        600
      );
    }
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors duration-300 hover:text-accent hover:border-accent cursor-pointer"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="transition-transform duration-500 ease-out"
        style={{ transform: isDark ? "rotate(0deg)" : "rotate(200deg)" }}
      >
        {/* Moon mask morphs into sun */}
        <circle
          cx="12"
          cy="12"
          r={isDark ? 9 : 4.5}
          className="transition-all duration-500"
        />
        {/* Sun rays — collapse into the disc in dark mode */}
        <g
          className="transition-opacity duration-300"
          style={{ opacity: isDark ? 0 : 1 }}
        >
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="22" y2="12" />
          <line x1="4.9" y1="4.9" x2="6.3" y2="6.3" />
          <line x1="17.7" y1="17.7" x2="19.1" y2="19.1" />
          <line x1="4.9" y1="19.1" x2="6.3" y2="17.7" />
          <line x1="17.7" y1="6.3" x2="19.1" y2="4.9" />
        </g>
        {/* Crater dots, visible only as moon */}
        <g
          fill="currentColor"
          stroke="none"
          className="transition-opacity duration-300"
          style={{ opacity: isDark ? 0.9 : 0 }}
        >
          <circle cx="9" cy="10" r="1" />
          <circle cx="14" cy="14" r="1.4" />
          <circle cx="14.5" cy="8.5" r="0.7" />
        </g>
      </svg>
    </button>
  );
}
