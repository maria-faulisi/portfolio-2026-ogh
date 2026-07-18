import { Link } from "react-router-dom";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-headline">
          <p className="eyebrow">End of file</p>
          <h2 className="serif italic">
            Designing the connective tissue
            <br />
            between systems &amp; the people who use them.
          </h2>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <p className="eyebrow">Correspond</p>
            <a className="footer-link" href="mailto:mjfaulisi@gmail.com">
              mjfaulisi@gmail.com
              <span className="footer-link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            {/* <a
              className="footer-link"
              href="https://cal.com/mariafaulisi"
              target="_blank"
              rel="noreferrer"
            >
              Book 30 min
              <span className="footer-link-arrow" aria-hidden="true">
                ↗
              </span>
            </a> */}
          </div>
          <div className="footer-col">
            <p className="eyebrow">Elsewhere</p>
            <a
              className="footer-link"
              href="https://github.com/maria-faulisi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span className="footer-link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              className="footer-link"
              href="https://linkedin.com/in/mariafaulisi"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span className="footer-link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
            <a
              className="footer-link"
              href="https://read.cv/mariafaulisi"
              target="_blank"
              rel="noreferrer"
            >
              Read.cv
              <span className="footer-link-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
          <div className="footer-col">
            <p className="eyebrow">Index</p>
            <Link className="footer-link" to="/">
              Selected works
            </Link>
            <Link className="footer-link" to="/about">
              About
            </Link>
            <Link className="footer-link" to="/contact">
              Contact
            </Link>
            <Link className="footer-link" to="/cv">
              CV
            </Link>
          </div>
          <div className="footer-col footer-colophon">
            <p className="eyebrow">Colophon</p>
            <p className="caption">
              Set in <span className="serif italic">Instrument Serif</span>,
              <span className="sans"> Geist</span>, and{" "}
              <span className="mono">JetBrains Mono</span>. Built with React,
              TypeScript, Vite. Token-led, hand-tuned, no template.
            </p>
          </div>
        </div>

        <hr className="rule" />

        <div className="footer-bottom">
          <span className="mono micro">© MMXVI — MMXXVI · Maria Faulisi</span>
          <span className="mono micro footer-bottom-mid">
            Chicago, IL · {year}
          </span>
          <span className="mono micro">
            Made with care
            <span className="ember-dot" aria-hidden="true" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
