import { useState } from "react";
import Reveal from "../components/Reveal";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = encodeURIComponent(String(data.get("name") || ""));
    const company = encodeURIComponent(String(data.get("company") || ""));
    const message = encodeURIComponent(String(data.get("message") || ""));
    const subject = `Hello from ${decodeURIComponent(name) || "the portfolio"}`;
    const body = `${decodeURIComponent(message)}\n\n— ${decodeURIComponent(name)}${
      company ? `, ${decodeURIComponent(company)}` : ""
    }`;
    window.location.href = `mailto:mjfaulisi@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="contact-hero container">
        <p className="eyebrow">§ 03 — Contact</p>
        <h1 className="serif">
          Let's <em>talk</em> about the work.
        </h1>
      </section>

      <section className="container">
        <div className="contact-grid">
          <Reveal>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="row">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company">Company / context</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">
                  A few sentences about what you're holding
                </label>
                <textarea id="message" name="message" rows={5} required />
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <button className="cta" type="submit">
                  {sent ? "Opening your mail client…" : "Send"}
                  <span className="cta-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
                <p className="caption" style={{ margin: 0 }}>
                  This opens your default mail client. Prefer plain email?{" "}
                  <a className="link" href="mailto:mjfaulisi@gmail.com">
                    Use that instead
                  </a>
                  .
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={80} className="contact-aside">
            <div className="contact-detail">
              <p className="eyebrow">Direct</p>
              <p className="value">
                <a href="mailto:mjfaulisi@gmail.com">mjfaulisi@gmail.com</a>
              </p>
              <p className="caption">Replies within 1—2 business days.</p>
            </div>

            {/* <div className="contact-detail">
              <p className="eyebrow">Calendar</p>
              <p className="value">
                <a
                  href="https://cal.com/mariafaulisi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Book a 30-minute call
                </a>
              </p>
              <p className="caption">
                Bring the messy part. I'll bring questions.
              </p>
            </div> */}

            <div className="contact-detail">
              <p className="eyebrow">Code & Notes</p>
              <p className="value">
                <a
                  href="https://github.com/maria-faulisi"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/maria-faulisi
                </a>
              </p>
              <p className="caption">
                Token tooling, design-system experiments, this very portfolio.
              </p>
            </div>

            <div className="contact-detail">
              <p className="eyebrow">Elsewhere</p>
              <p className="value">
                <a
                  href="https://linkedin.com/in/mariafaulisi"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <span style={{ color: "var(--mist)" }}> · </span>
                <a
                  href="https://read.cv/mariafaulisi"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read.cv
                </a>
              </p>
            </div>

            <div className="contact-detail">
              <p className="eyebrow">Studio</p>
              <p className="value">Chicago, IL · America/Chicago</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
