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
              I'm Maria, a design engineer who built a career in the seam
              between UX architecture and front-end engineering. I've shipped
              systems and products at <strong>SaaS companies</strong> and{" "}
              <strong>Fortune 500s</strong>, the kind of organizations where a
              well-named token saves a quarter of meetings.
            </p>
            <p>
              For the last decade I've worked on the parts most teams don't
              budget for: <em>contracts between tools</em>, governance that
              scales with adoption, the boring naming work that quietly raises
              everyone's velocity. Three of the case studies here are design
              systems I led. Three are product re-architectures where the system
              was already in place and the work was about reducing structural
              complexity.
            </p>
            <p>
              I write production React and TypeScript, run my own design tokens,
              and I'm fluent enough in the engineering side to make decisions
              that don't have to be re-litigated downstream. I lean on AI tools
              the way a senior partner leans on a junior, for exploration, grunt
              work, edge-case discovery, without ever outsourcing taste or the
              craft.
            </p>
            <p>
              Outside of work I'm a dog mom, an unrepentant plant hoarder, and
              an ongoing student of making things with my hands. I live outside
              of Chicago in Naperville, IL.
            </p>
          </Reveal>

          <aside className="about-aside">
            <Reveal className="about-card">
              <p className="eyebrow">Currently</p>
              <p
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: 22,
                  fontStyle: "italic",
                  color: "var(--ink)",
                }}
              >
                Open to senior IC roles &amp; design-engineering leadership.
              </p>
              <Link className="link" to="/contact">
                Reach out <span aria-hidden="true">→</span>
              </Link>
            </Reveal>

            <Reveal delay={80} className="about-card">
              <p className="eyebrow">Relevant History</p>
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
              </ul>
            </Reveal>

            <Reveal delay={140} className="about-card">
              <p className="eyebrow">Off the Clock</p>
              <ul className="about-card-list">
                <li>
                  <span>Learning to knit</span>
                  <span className="right">Basics, so far</span>
                </li>
                <li>
                  <span>Murder mystery novels</span>
                  <span className="right">One a month</span>
                </li>
                <li>
                  <span>Scotland</span>
                  <span className="right">Annual pilgrimage</span>
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
              <li>Audit before authoring, always</li>
              <li>Reduce structure before reducing chrome</li>
              <li>Make the right thing the easy thing</li>
              <li>
                Start with the semantic element; it already knows the design
              </li>
              <li>Ship a slim end-to-end before a fat anything</li>
            </ul>
          </Reveal>
          <Reveal delay={200} className="discipline">
            <p className="eyebrow">Judgment</p>
            <h4 className="serif">Calls that hold up downstream</h4>
            <ul>
              <li>Parity between Figma and code, not just resemblance</li>
              <li>One name, one meaning, in every tool it lives in</li>
              <li>The system as the path of least resistance</li>
              <li>Success measured in reuse, not requirement</li>
              <li>Built to enable, not to police</li>
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
