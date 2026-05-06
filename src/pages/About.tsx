import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const About = () => {
  return (
    <>
      <section className="about-hero container">
        <p className="eyebrow">§ 02 — About the practice</p>
        <h1 className="serif">
          Ten years <em>between</em> design and code.
          <br />
          Still curious. Still picky.
        </h1>
      </section>

      <section className="container">
        <div className="about-grid">
          <Reveal className="about-prose">
            <p>
              I'm Maria — a design engineer who built a career in the seam
              between UX architecture and front-end engineering. I've shipped
              systems and products at <strong>SaaS companies</strong> and{" "}
              <strong>Fortune 500s</strong> — the kind of organizations where a
              well-named token saves a quarter of meetings.
            </p>
            <p>
              For the last decade I've worked on the parts most teams don't
              budget for: <em>contracts between tools</em>, governance that
              scales with adoption, the boring naming work that quietly raises
              everyone's velocity. Three of the case studies here are design
              systems I led. Three are product re-architectures where the
              system was already in place and the work was about reducing
              structural complexity.
            </p>
            <p>
              I write production React and TypeScript, run my own design tokens,
              and I'm fluent enough in the engineering side to make decisions
              that don't have to be re-litigated downstream. I lean on AI tools
              the way a senior partner leans on a junior — for exploration,
              grunt work, edge-case discovery — without ever outsourcing taste
              or the craft.
            </p>
            <p>
              Outside of work I'm a runner, a stubborn home cook, and an
              ongoing student of typography and printed matter. I live in
              Chicago.
            </p>
          </Reveal>

          <aside className="about-aside">
            <Reveal className="about-card">
              <p className="eyebrow">Currently</p>
              <p style={{ fontFamily: "var(--serif)", fontSize: 22, fontStyle: "italic", color: "var(--ink)" }}>
                Open to senior IC roles &amp; design-engineering leadership.
              </p>
              <Link className="link" to="/contact">
                Reach out <span aria-hidden="true">→</span>
              </Link>
            </Reveal>

            <Reveal delay={80} className="about-card">
              <p className="eyebrow">Selected Clients</p>
              <ul className="about-card-list">
                <li>
                  <span>Allstate</span>
                  <span className="right">2018 — 2021</span>
                </li>
                <li>
                  <span>Harvest</span>
                  <span className="right">2021 — 2023</span>
                </li>
                <li>
                  <span>Panduit</span>
                  <span className="right">2016 — 2018</span>
                </li>
                <li>
                  <span>+ undisclosed</span>
                  <span className="right">SaaS · Fintech</span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={140} className="about-card">
              <p className="eyebrow">Recognition</p>
              <ul className="about-card-list">
                <li>
                  <span>Featured speaker · Clarity Conf</span>
                  <span className="right">2022</span>
                </li>
                <li>
                  <span>Internal patents · Sketch automation</span>
                  <span className="right">2020</span>
                </li>
                <li>
                  <span>OSS contributor · Token interop</span>
                  <span className="right">Ongoing</span>
                </li>
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="container disciplines">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">§ Toolkit</p>
              <h2 className="serif">
                What lives <span className="italic">in the workshop.</span>
              </h2>
            </div>
            <p className="section-head-meta">A working list, not a résumé</p>
          </div>
        </Reveal>

        <div className="disciplines-grid">
          <Reveal className="discipline">
            <p className="eyebrow">Design</p>
            <h4 className="serif">UX architecture & design systems</h4>
            <ul>
              <li>Information architecture · service blueprints</li>
              <li>Component & token architecture · contracts</li>
              <li>Design-system governance & adoption strategy</li>
              <li>Documentation as a product surface</li>
              <li>Accessibility (WCAG 2.2 AA) baked into specs</li>
              <li>Figma libraries · variables · published tokens</li>
            </ul>
          </Reveal>
          <Reveal delay={80} className="discipline">
            <p className="eyebrow">Engineering</p>
            <h4 className="serif">Front-end & tooling</h4>
            <ul>
              <li>React · TypeScript · modern CSS</li>
              <li>Vite · Storybook · CI design-token pipelines</li>
              <li>Style Dictionary · Token Studio · interop</li>
              <li>Sketch & Figma plugin authoring</li>
              <li>Headless CMS / AEM component authoring</li>
              <li>AI-assisted IDE workflows · evals · prompts</li>
            </ul>
          </Reveal>
          <Reveal delay={140} className="discipline">
            <p className="eyebrow">Method</p>
            <h4 className="serif">How I move through a problem</h4>
            <ul>
              <li>Audit before authoring — always</li>
              <li>Reduce structure before reducing chrome</li>
              <li>Make the right thing the easy thing</li>
              <li>Write the docs first; they reveal the design</li>
              <li>Ship a slim end-to-end before a fat anything</li>
            </ul>
          </Reveal>
          <Reveal delay={200} className="discipline">
            <p className="eyebrow">Sensibility</p>
            <h4 className="serif">Taste, in working order</h4>
            <ul>
              <li>Editorial typography &amp; printed-matter discipline</li>
              <li>Quiet motion, generous negative space</li>
              <li>Numbers as design objects, not decoration</li>
              <li>One accent color, used sparingly, never twice</li>
              <li>Tooling that disappears when used right</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container">
        <Reveal className="cta-band">
          <h2 className="serif">
            Want to <em>see how I think</em> about a problem you're holding?
          </h2>
          <div>
            <p>
              I'm best in a 30-minute working call where you bring the messy
              part. I'll bring sharp questions and a sketchpad.
            </p>
            <div className="hero-cta-row">
              <Link className="cta" to="/contact">
                Start a conversation
                <span className="cta-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default About;
