import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { work, workOrder } from "../data/work";

const Home = () => {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="hero-stamp">
            <span>Vol. VI · Issue 02</span>
            <span className="hero-stamp-rule" />
            <span>Selected works · 20162026</span>
          </div>

          <h1 className="hero-display">
            <span className="word w-1">
              <span>Design&nbsp;</span>
            </span>
            <span className="word w-2">
              <span className="accent">engineered.</span>
            </span>
            <br />
            <span className="word w-3">
              <span>Systems&nbsp;</span>
            </span>
            <span className="word w-4">
              <span>made&nbsp;</span>
            </span>
            <span className="word w-5">
              <span>quiet.</span>
            </span>
          </h1>

          <div className="hero-meta">
            <div className="hero-meta-block">
              <p className="eyebrow">Practice</p>
              <p className="lead-line">
                A decade of UX architecture and design-systems work for SaaS
                platforms and Fortune 500s paired with the engineering taste to
                ship it.
              </p>
            </div>
            <div className="hero-meta-block">
              <p className="eyebrow">Currently</p>
              <p>
                Designing tokens, governance, and the connective tissue between
                Figma and code. AI-forward, taste-led, hands in the editor.
              </p>
            </div>
            <div className="hero-meta-block">
              <p className="eyebrow">Open to</p>
              <p>
                Senior IC roles, design-engineering leadership, and select
                advisory engagements.
              </p>
              <div className="hero-cta-row">
                <a className="cta" href="#index">
                  Read the index
                  <span className="cta-arrow" aria-hidden="true">
                    ↓
                  </span>
                </a>
                <Link className="cta-ghost" to="/contact">
                  Contact
                  <span className="cta-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tape" aria-hidden="true">
        <div className="tape-track">
          {[0, 1].map((dup) => (
            <div key={dup} style={{ display: "inline-flex", gap: 56 }}>
              <span className="tape-item">
                Token Architecture <span className="ember-mark" />
              </span>
              <span className="tape-item">
                Component Contracts <span className="ember-mark" />
              </span>
              <span className="tape-item">
                Design-System Governance <span className="ember-mark" />
              </span>
              <span className="tape-item">
                Information Architecture <span className="ember-mark" />
              </span>
              <span className="tape-item">
                React · TypeScript · CSS <span className="ember-mark" />
              </span>
              <span className="tape-item">
                AI-forward design tooling <span className="ember-mark" />
              </span>
              <span className="tape-item">
                Editorial systems thinking <span className="ember-mark" />
              </span>
            </div>
          ))}
        </div>
      </div>

      <section className="section container" id="index">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">§ Index Selected Works</p>
              <h2 className="serif">
                Six case studies.
                <span className="serif italic"> Two disciplines.</span>
              </h2>
            </div>
            <p className="section-head-meta">
              03 Design Systems
              <br />
              03 UX Design
            </p>
          </div>
        </Reveal>

        <ol className="index-list">
          {workOrder.map((id, i) => {
            const w = work[id];
            return (
              <Reveal key={id} delay={i * 60} as="li">
                <Link to={w.href} className="index-row">
                  <span className="row-num"> {w.index}</span>
                  <span className="row-company">
                    <span className="company-name">{w.company}</span>
                    <span className="row-discipline">{w.discipline}</span>
                  </span>
                  <span className="row-title">
                    {w.kicker}
                    <em> · {splitTitle(w.title)}</em>
                  </span>
                  <span className="row-years">{w.years}</span>
                  <span className="row-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </section>

      <section className="container">
        <div className="manifesto">
          <Reveal className="manifesto-side">
            <p className="eyebrow">§ Practice notes</p>
            <h3 className="serif">
              <span className="italic">How I work,</span> because it matters.
            </h3>
            <span className="ember-rule" aria-hidden="true" />
            <p className="caption">
              Four operating principles I've earned the hard way, and that show
              up in every case study below.
            </p>
          </Reveal>

          <ol className="manifesto-list">
            {[
              {
                num: "01",
                title: "Design the contract, not the artifact.",
                body: "Tokens, names, and component APIs are the load-bearing parts of a system. Pixels are downstream. Get the contract right and the rest gets quieter on its own.",
              },
              {
                num: "02",
                title: "Adoption is the only governance that scales.",
                body: "Mandates are expensive. Make the right thing the easiest thing, through tooling, examples, and lint, and a system stops needing to be policed.",
              },
              {
                num: "03",
                title: "Reduce structure before reducing chrome.",
                body: "Most UX problems are architectural. I consolidate flows and re-name objects before I touch a single button. The visual work compounds from there.",
              },
              {
                num: "04",
                title: "Use AI like a junior partner with great taste.",
                body: "I lean into LLMs for grunt work, exploration, and edge-case discovery  without outsourcing taste or judgment. The craft is still mine.",
              },
            ].map((item, i) => (
              <Reveal
                key={item.num}
                delay={i * 80}
                as="li"
                className="manifesto-item"
              >
                <span className="num"> {item.num}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container">
        <Reveal className="cta-band">
          <h2 className="serif">
            Hiring for a senior IC who can hold both
            <em> design</em> and <em>engineering?</em>
          </h2>
          <div>
            <p>
              I'm open to senior IC and lead roles where systems thinking and
              shipping live in the same person. I'd love to talk through your
              constraints.
            </p>
            <div className="hero-cta-row">
              <Link className="cta" to="/contact">
                Start a conversation
                <span className="cta-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <a
                className="cta-ghost"
                href="https://github.com/maria-faulisi"
                target="_blank"
                rel="noreferrer"
                style={{
                  borderColor: "var(--mist)",
                  color: "var(--paper-light)",
                }}
              >
                GitHub
                <span className="cta-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

/**
 * Trim trailing period from titles so they read clean inside the row's
 * en-dash construction.
 */
const splitTitle = (title: string) =>
  title.replace(/\.$/, "").replace(/^Reducing /, "Reducing ");

export default Home;
