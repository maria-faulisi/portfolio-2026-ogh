import { Link } from "react-router-dom";
import dsHarvestHero from "../assets/ds-harvest-hero.png";
import KindredWork from "../components/KindredWork";
import Reveal from "../components/Reveal";
import { work } from "../data/work";

const w = work["ds-harvest"];

const DesignSystemsHarvest = () => {
  return (
    <article>
      <section className="container case-study">
        <div className="case-meta-bar">
          <Link to="/">← Index</Link>
          <span className="dot">·</span>
          <span>{w.index}</span>
          <span className="dot">·</span>
          <span>{w.discipline}</span>
          <span className="dot">·</span>
          <span>{w.company}</span>
        </div>

        <Reveal className="case-hero">
          <p className="case-index">Case Study {w.index} / 06</p>
          <h1 className="serif">
            Clarifying <em>guidance</em>
            <br />
            across a Rails + React system.
          </h1>
          <p className="lead">
            Harvest's Porchlight library quietly served two stacks at once.
            Untangling them — without breaking either — turned a confusing
            system into one engineers could trust.
          </p>

          <div className="case-meta-grid">
            <div className="field">
              <span className="field-label">Client</span>
              <span className="field-value">Harvest</span>
            </div>
            <div className="field">
              <span className="field-label">Role</span>
              <span className="field-value">{w.role}</span>
            </div>
            <div className="field">
              <span className="field-label">Surface</span>
              <span className="field-value">{w.surface}</span>
            </div>
            <div className="field">
              <span className="field-label">Years</span>
              <span className="field-value">{w.years}</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <figure className="case-frame">
            <img src={dsHarvestHero} alt="Harvest Porchlight Design System" />
            <figcaption className="case-frame-caption">
              <span>Fig. 02 · Porchlight component library</span>
              <span>Harvest · 2021—2023</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <ul className="metric-tiles">
            <li>
              <span className="metric-value">
                ~<em>30%</em>
              </span>
              <span className="metric-label">Faster onboarding</span>
              <span className="metric-detail">
                Engineers found the right path without back-and-forth.
              </span>
            </li>
            <li>
              <span className="metric-value">
                <em>50%</em>
              </span>
              <span className="metric-label">Less guesswork</span>
              <span className="metric-detail">
                Between Rails and React implementations.
              </span>
            </li>
            <li>
              <span className="metric-value">
                <em>40%+</em>
              </span>
              <span className="metric-label">Adoption increase</span>
              <span className="metric-detail">Teams chose the system.</span>
            </li>
            <li>
              <span className="metric-value">
                <em>60%</em>
              </span>
              <span className="metric-label">Fewer support requests</span>
              <span className="metric-detail">
                Better examples, fewer questions.
              </span>
            </li>
          </ul>
        </Reveal>
      </section>

      <section className="container">
        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 01</span>
            <h3>The challenge</h3>
          </aside>
          <div className="case-section-body">
            <h4>
              Porchlight wasn't unclear. It was structurally confusing.
            </h4>
            <p>
              Engineers had to navigate two completely different
              implementation paths — Rails with class-based styling, React
              with encapsulated components — but the documentation mixed both
              together without signaling which guidance applied where. The
              result was widespread misinterpretation, inconsistent behavior,
              and constant clarification between teams.
            </p>
            <ul className="triptych">
              <li className="triptych-card">
                <span className="triptych-card-num">— Goal 01</span>
                <h5>Clarify mixed-stack guidance</h5>
                <p>
                  Cleanly separate Rails styling rules from React component
                  APIs without merging them into a lowest common denominator.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Goal 02</span>
                <h5>Meet engineers where they are</h5>
                <p>
                  Front-end specialists and Rails developers needed guidance
                  tailored to how they actually worked — not a unified middle.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Goal 03</span>
                <h5>Reduce inconsistent implementations</h5>
                <p>
                  Define clear boundaries, expected behaviors, and usage
                  patterns. Make the right path the easy path.
                </p>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 02</span>
            <h3>The approach</h3>
          </aside>
          <div className="case-section-body">
            <ol className="steps">
              <li>
                <div>
                  <h4>Dual-stack audit</h4>
                  <p>
                    Reviewed every Rails partial, React component, and
                    Porchlight doc page — mapping naming mismatches, prop
                    differences, styling inconsistencies, and missing
                    guidance into a single inventory.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Split &amp; restructure documentation</h4>
                  <p>
                    Redesigned Porchlight docs into two clearly marked tracks
                    — Rails and React — so developers instantly understood
                    which guidance applied to their implementation.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Interactive examples &amp; prop tables</h4>
                  <p>
                    Added live component variations, usage notes, and prop
                    tables so engineers could experiment safely and adopt
                    patterns consistently.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Cross-team alignment</h4>
                  <p>
                    Partnered with backend, product, and design stakeholders
                    so both stacks reflected the same UX intent — and so
                    Porchlight became the single source of truth.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Storybook modernization</h4>
                  <p>
                    Updated Storybook code, paired with another engineer to
                    define documentation, refreshed the backlog, and kept
                    code and docs evolving together.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 03</span>
            <h3>The shift</h3>
          </aside>
          <div className="case-section-body">
            <blockquote className="pull">
              "Documentation isn't a deliverable. It's the system's interface
              with everyone who didn't sit in the meeting."
              <cite>— My own working notes</cite>
            </blockquote>
            <p>
              Reframing Porchlight as a product with two distinct audiences
              shifted the work from "fix the docs" to "design the contract."
              Adoption climbed, support requests dropped, and engineers
              stopped asking which path was the canonical one.
            </p>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 04</span>
            <h3>What it taught me</h3>
          </aside>
          <div className="case-section-body">
            <ol className="steps">
              <li>
                <div>
                  <h4>Clear boundaries are essential in dual-stack systems.</h4>
                  <p>
                    Hiding the divergence makes the system feel cleaner and
                    use worse. Make the seam visible and labelable.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Documentation needs product thinking.</h4>
                  <p>
                    Audiences, jobs-to-be-done, content design, IA. The same
                    rigor you'd apply to any product surface.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Consistency improves fastest when load decreases.</h4>
                  <p>
                    The lever isn't enforcement — it's lowering the cost of
                    getting it right.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </Reveal>
      </section>

      <KindredWork fromId={w.id} />
    </article>
  );
};

export default DesignSystemsHarvest;
