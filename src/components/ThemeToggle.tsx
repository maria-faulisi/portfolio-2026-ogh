import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "ohg-theme";

const readInitialTheme = (): Theme => {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore — private browsing / storage disabled
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", theme === "dark" ? "#15130F" : "#F4F1EA");
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "dark"}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-glyph" aria-hidden="true">
        <svg
          className="icon-sun"
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
        >
          <circle
            cx="12"
            cy="12"
            r="4.4"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 2.5v2.4" />
            <path d="M12 19.1v2.4" />
            <path d="M4.2 4.2l1.7 1.7" />
            <path d="M18.1 18.1l1.7 1.7" />
            <path d="M2.5 12h2.4" />
            <path d="M19.1 12h2.4" />
            <path d="M4.2 19.8l1.7-1.7" />
            <path d="M18.1 5.9l1.7-1.7" />
          </g>
        </svg>
        <svg
          className="icon-moon"
          viewBox="0 0 24 24"
          width="15"
          height="15"
          fill="none"
        >
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default ThemeToggle;
