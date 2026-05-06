import { Link } from "react-router-dom";
import dsAllstateHero from "../assets/ds-allstate-hero.png";
import dsAllstateDiagram from "../assets/ds-allstate-diagram.svg";
import dsAllstateIcon from "../assets/ds-allstate-icon.svg";
import dsAllstateChart from "../assets/ds-allstate-chart.svg";
import KindredWork from "../components/KindredWork";
import Reveal from "../components/Reveal";
import { work } from "../data/work";

const w = work["ds-allstate"];

const DesignSystemsAllstate = () => {
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
            Reducing system <em>drift</em> across tools
            <br />
            and handoffs.
          </h1>
          <p className="lead">
            Allstate's enterprise design system — Mesh — was fragmented across
            three tools that had quietly drifted out of sync. I tightened the
            contracts between them so 40+ teams stayed aligned from Sketch to
            code.
          </p>

          <div className="case-meta-grid">
            <div className="field">
              <span className="field-label">Client</span>
              <span className="field-value">Allstate</span>
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
            <img src={dsAllstateHero} alt="Allstate Mesh Design System" />
            <figcaption className="case-frame-caption">
              <span>Fig. 01 · Mesh design system overview</span>
              <span>Allstate · 2018—2021</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <ul className="metric-tiles">
            <li>
              <span className="metric-value">
                ~<em>90%</em>
              </span>
              <span className="metric-label">Sketch — Code parity</span>
              <span className="metric-detail">Up from ~60% at start.</span>
            </li>
            <li>
              <span className="metric-value">
                <em>25%</em>
              </span>
              <span className="metric-label">Rework reduction</span>
              <span className="metric-detail">
                Across design-to-engineering cycles.
              </span>
            </li>
            <li>
              <span className="metric-value">
                <em>40+</em>
              </span>
              <span className="metric-label">Teams unified</span>
              <span className="metric-detail">Across product lines.</span>
            </li>
            <li>
              <span className="metric-value">
                <em>100%</em>
              </span>
              <span className="metric-label">Accessibility-capable</span>
              <span className="metric-detail">
                For every shared component shipped.
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
              Teams spent hours reconciling inconsistencies instead of building
              new features.
            </h4>
            <p>
              Mesh — Allstate's enterprise design system — had grown across
              three tools. Over time, each had drifted out of sync. Component
              names, spacing tokens, and accessibility specs varied between
              environments. Designers referenced outdated Zeplin exports;
              engineers built components that no longer matched the library.
            </p>
            <ul className="triptych">
              <li className="triptych-card">
                <span className="triptych-card-num">— Tool 01</span>
                <img
                  src={dsAllstateDiagram}
                  alt=""
                  style={{ width: 36, height: 36, opacity: 0.7 }}
                />
                <h5>Sketch — Design</h5>
                <p>
                  Out-of-date library components or bespoke designs used inline
                  during feature work.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Tool 02</span>
                <img
                  src={dsAllstateIcon}
                  alt=""
                  style={{ width: 36, height: 36, opacity: 0.7 }}
                />
                <h5>Zeplin — Handoff</h5>
                <p>
                  Sketch drift quietly broke Zeplin's authority whenever
                  designers skipped compliance steps.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Tool 03</span>
                <img
                  src={dsAllstateChart}
                  alt=""
                  style={{ width: 36, height: 36, opacity: 0.7 }}
                />
                <h5>Styleguidist — Code</h5>
                <p>
                  Engineers assumed rework was needed because designers couldn't
                  validate against the live React library.
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
                  <h4>Cross-tool audit</h4>
                  <p>
                    Walked every component through Sketch, Zeplin, and
                    Styleguidist. Documented every name, spec, and behavior
                    discrepancy in a shared doc with design + engineering
                    leads.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Modernize &amp; refactor</h4>
                  <p>
                    Co-led the migration from legacy SASS to Emotion.js. This
                    enabled token-based theming, improved accessibility, and
                    consistent responsiveness — and made future drift visible
                    instead of silent.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Documentation &amp; lightweight governance</h4>
                  <p>
                    Rewrote Styleguidist docs around props, states, and
                    accessibility expectations. Worked with design leadership
                    to publish contribution guidelines that were short enough
                    that everyone read them.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Sketch automation script</h4>
                  <p>
                    Authored a Sketch plugin that flagged non-compliant
                    components and missing tokens. Designers self-validated
                    before handoff, which collapsed downstream QA churn.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Research support</h4>
                  <p>
                    Translated Mesh into an Axure RP library so UX researchers
                    could prototype with the real components. Findings fed
                    directly back into Mesh updates.
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
              "The drift didn't live inside the tools. It lived in the spaces
              between them — and that's where the work was."
              <cite>— Internal note, Q3 2019</cite>
            </blockquote>
            <p>
              By treating governance as adoption-design rather than mandate, we
              brought 40+ teams onto a system that finally felt true to its
              own promises. Sketch–to–code parity climbed from ~60% to ~90%,
              and the system stopped being something teams worked around.
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
                  <h4>Real parity lives between tools, not inside them.</h4>
                  <p>
                    Audit the seams — handoff, conversion, naming — before
                    you audit any single artifact.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Governance only works when it's simple enough to use.</h4>
                  <p>
                    A long policy is a dead policy. A short one with tooling
                    behind it is the real load-bearing structure.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>A system is only as valuable as its adoption.</h4>
                  <p>
                    By design, research, and engineering — alike. Anything
                    less is a library, not a system.
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

export default DesignSystemsAllstate;
