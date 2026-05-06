import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatter.format(new Date()));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  const subtitle =
    pathname === "/"
      ? "Selected works · 2016—2026"
      : pathname.startsWith("/design-systems")
        ? "Design systems"
        : pathname.startsWith("/design")
          ? "UX design"
          : pathname === "/about"
            ? "About the practice"
            : pathname === "/contact"
              ? "Open to conversations"
              : "";

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header-row">
        <Link to="/" className="monogram" aria-label="Maria Faulisi — Home">
          <span className="monogram-mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="22" height="22">
              <circle
                cx="16"
                cy="16"
                r="15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M9 22 V10 L16 18 L23 10 V22"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="monogram-text">
            <span className="serif italic">Maria</span>
            <span className="sans">Faulisi</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            <span className="nav-index">01</span>
            <span>Index</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            <span className="nav-index">02</span>
            <span>About</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            <span className="nav-index">03</span>
            <span>Contact</span>
          </NavLink>
        </nav>

        <div className="site-meta" aria-hidden="true">
          <span className="status-dot" />
          <span className="meta-text">
            <span className="meta-line">Chicago · {time || "—"} CT</span>
            <span className="meta-line meta-faded">{subtitle}</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
